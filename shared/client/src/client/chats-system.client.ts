import type { TLObject }                from '@monstrs/mtproto-tl-core'
import type { Socket }                  from 'socket.io-client'
import type { ManagerOptions }          from 'socket.io-client'
import type { SocketOptions }           from 'socket.io-client'

import type { AbstractStorage }         from '../storage/index.js'

import { EventEmitter }                 from 'node:events'

import * as Primitives                  from '@monstrs/mtproto-tl-primitives'
import { MTProtoObfuscatedCodec }       from '@monstrs/mtproto-codecs'
import { MTProtoEncryptedRawMessage }   from '@monstrs/mtproto-core'
import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoMessageFactory }        from '@monstrs/mtproto-core'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoMessageId }             from '@monstrs/mtproto-core'
import { MTProtoAuthKey }               from '@monstrs/mtproto-core'
import { io }                           from 'socket.io-client'
import random                           from 'crypto-random-bigint'

import * as Transport                   from '@chats-system/transport'
import { Handshake }                    from '@chats-system/handshake'

import { MemoryStorage }                from '../storage/index.js'

export interface ChatsSystemClientOptions {
  io?: Partial<ManagerOptions & SocketOptions>
  storage?: AbstractStorage
}

export class ChatsSystemClient {
  protected id: bigint

  protected storage: AbstractStorage

  protected socket: Socket

  protected codec: MTProtoObfuscatedCodec

  protected messageFactory: MTProtoMessageFactory

  protected handshake: Handshake

  protected connected: boolean = false

  protected events = new EventEmitter()

  protected listeners = new Map<
    typeof TLObject,
    Set<(message: InstanceType<typeof TLObject>) => void>
  >()

  constructor(uri: string, options?: ChatsSystemClientOptions) {
    this.id = random(63)

    this.storage = options?.storage || new MemoryStorage()
    this.codec = MTProtoObfuscatedCodec.init()
    this.messageFactory = new MTProtoMessageFactory()
    this.handshake = new Handshake()

    this.socket = io(uri, {
      ...(options?.io || {}),
      autoConnect: false,
      query: {
        ...(options?.io?.query || {}),
        header: this.codec.header.toString('base64'),
      },
    })
  }

  isConnected(): boolean {
    return this.connected
  }

  async connect(): Promise<void> {
    this.socket.on('connect', () => {
      this.onConnect()
    })

    this.socket.on('disconnect', () => {
      this.onDisconnect()
    })

    this.socket.connect()

    if (!this.connected) {
      return new Promise<void>((resolve) => {
        this.events.once('connected', () => {
          resolve()
        })
      })
    }

    return Promise.resolve()
  }

  async send(data: InstanceType<typeof TLObject>): Promise<void> {
    await this.socket.emit(
      'message',
      await this.codec.send(
        new MTProtoRawMessage(
          new MTProtoEncryptedRawMessage(
            (await this.storage.getAuthKey())!,
            this.messageFactory.encode(0n, this.id, data.write())
          )
        ).encode()
      )
    )
  }

  on(tlObject: typeof TLObject, callback: (message: any) => void): void {
    if (!this.listeners.has(tlObject)) {
      this.listeners.set(tlObject, new Set())
    }

    this.listeners.get(tlObject)!.add(callback)
  }

  protected async onConnect(): Promise<void> {
    if (!(await this.storage.getAuthKey())) {
      const { reqPQMulti } = await this.handshake.sendReqPQMulti()

      const resPQData: Buffer = await this.socket.emitWithAck(
        'handshake',
        await this.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              reqPQMulti.write().length,
              reqPQMulti.write()
            )
          ).encode()
        )
      )

      const resPQRawMessage = await MTProtoRawMessage.decode(await this.codec.receive(resPQData), {
        authKeyManager: {} as any,
      })

      const resPQ = await Transport.registry.read(
        new Primitives.BytesIO(resPQRawMessage.getMessage().getMessageData())
      )

      if (!(resPQ instanceof Transport.ResPQ)) {
        throw new Error('Invalid response')
      }

      const { reqDhParams } = await this.handshake.handleResPQ(resPQ)

      const serverDHParamsOkData: Buffer = await this.socket.emitWithAck(
        'handshake',
        await this.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              reqDhParams.write().length,
              reqDhParams.write()
            )
          ).encode()
        )
      )

      const serverDHParamsOkRawMessage = await MTProtoRawMessage.decode(
        await this.codec.receive(serverDHParamsOkData),
        {
          authKeyManager: {} as any,
        }
      )

      const serverDHParamsOk = await Transport.registry.read(
        new Primitives.BytesIO(serverDHParamsOkRawMessage.getMessage().getMessageData())
      )

      if (!(serverDHParamsOk instanceof Transport.ServerDHParamsOk)) {
        throw new Error('Invalid response')
      }

      const { setClientDhParams, authKey } =
        await this.handshake.handleServerDhParams(serverDHParamsOk)

      await this.socket.emitWithAck(
        'handshake',
        await this.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              setClientDhParams.write().length,
              setClientDhParams.write()
            )
          ).encode()
        )
      )

      await this.storage.setAuthKey(authKey)
    }

    this.connected = true
    this.events.emit('connected')

    this.socket.on('message', this.onMessage)
  }

  protected async onDisconnect(): Promise<void> {
    this.connected = false
    this.events.emit('disconnected')
  }

  protected onMessage = async (data: Buffer): Promise<void> => {
    const rawMessage = await MTProtoRawMessage.decode(await this.codec.receive(data), {
      authKeyManager: {
        getAuthKey: async (authKeyId: bigint): Promise<MTProtoAuthKey | undefined> => {
          if (authKeyId === (await this.storage.getAuthKey())!.authKeyId) {
            return this.storage.getAuthKey()
          }

          return undefined
        },
      } as any,
    })

    const message = await Transport.registry.read(
      new Primitives.BytesIO(
        this.messageFactory.decode(rawMessage.getMessage().getMessageData()).message
      )
    )

    if (this.listeners.has(message.constructor as typeof TLObject)) {
      this.listeners.get(message.constructor as typeof TLObject)!.forEach((callback) => {
        callback(message)
      })
    }
  }
}
