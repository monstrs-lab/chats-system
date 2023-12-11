import type { MTProtoAuthKey }        from '@monstrs/mtproto-core'

import { setTimeout }                 from 'node:timers/promises'

import { MTProtoRawMessage }          from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoMessageFactory }      from '@monstrs/mtproto-core'
import random                         from 'crypto-random-bigint'
import pTimeout                       from 'p-timeout'

import { BytesIO }                    from '@chats-system/tl'
import { TLObject }                   from '@chats-system/tl'
import TL                             from '@chats-system/tl'

import { ClientDisconnectedError }    from '../errors/index.js'
import { InvokeTimeoutError }         from '../errors/index.js'
import { Connection }                 from '../network/index.js'
import { WaitResponse }               from './wait-response.js'

export class Session {
  static SLEEP_THRESHOLD: number = 10000

  static WAIT_TIMEOUT: number = 15000

  static MAX_RETRIES: number = 5

  private id: bigint

  private messageFactory: MTProtoMessageFactory

  private results: Map<bigint, WaitResponse> = new Map<bigint, WaitResponse>()

  private connection?: Connection

  constructor(
    protected readonly address: string,
    protected readonly authKey: MTProtoAuthKey,
    protected readonly onUpdate?: (update: TL.TypeUpdates) => void
  ) {
    this.id = random(63)
    this.messageFactory = new MTProtoMessageFactory()
  }

  async start(): Promise<void> {
    this.connection = new Connection(this.address)

    await this.connection.connect()

    this.connection.onData(async (data: Buffer) => {
      this.handlePacket(data)
    })
    this.connection.onClose(async () => {
      this.restart()
    })
  }

  async stop(): Promise<void> {
    if (this.connection) {
      this.connection.close()
      this.connection = undefined
    }
  }

  async restart(): Promise<void> {
    await this.stop()
    await this.start()
  }

  async invoke(
    data: InstanceType<typeof TLObject>,
    retries: number = Session.MAX_RETRIES,
    timeout: number = Session.WAIT_TIMEOUT,
    sleepThreshold: number = Session.SLEEP_THRESHOLD
  ): Promise<InstanceType<typeof TLObject>> {
    if (!this.connection) {
      throw new ClientDisconnectedError()
    }

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (this.connection) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const response = await this.send(data, true, timeout)

          if (response) {
            return response
          }

          // eslint-disable-next-line no-await-in-loop
          await setTimeout(1000)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Got error when trying invoking:', error)

          if (!retries) {
            throw error
          }

          // eslint-disable-next-line no-await-in-loop
          await setTimeout(500)

          return this.invoke(data, retries - 1, timeout, sleepThreshold)
        }
      } else {
        // eslint-disable-next-line no-await-in-loop
        await setTimeout(1000)
      }
    }
  }

  protected async send(
    data: InstanceType<typeof TLObject>,
    waitResponse: boolean = true,
    timeout: number = Session.WAIT_TIMEOUT
  ): Promise<InstanceType<typeof TLObject> | undefined> {
    const message = this.messageFactory.encode(0n, this.id, data.write())
    const messageId = message.readBigInt64LE(16)

    if (waitResponse) {
      this.results.set(messageId, new WaitResponse())
    }

    const payload = await new MTProtoRawMessage(
      new MTProtoEncryptedRawMessage(this.authKey, message)
    ).encode()

    try {
      await this.connection!.send(payload)
    } catch (error) {
      if (error instanceof ClientDisconnectedError) {
        await this.restart()

        return undefined
      }

      if (this.results.get(messageId)) {
        this.results.get(messageId)!.reject(error)
      }
    }

    const promises = this.results.get(messageId)

    if (waitResponse && promises) {
      let response: InstanceType<typeof TLObject> | undefined

      try {
        response = await pTimeout(promises.value, {
          milliseconds: timeout,
        })
      } catch (error) {
        // eslint-disable-next-line
        console.log('Got error when waiting response:', error)
      }

      if (!response) {
        throw new InvokeTimeoutError()
      }

      this.results.delete(messageId)

      return response
    }

    return undefined
  }

  protected async handlePacket(packet: Buffer): Promise<void> {
    const rawMessage = await MTProtoRawMessage.decode(packet, {
      authKeyManager: {
        getAuthKey: async (authKeyId: bigint): Promise<MTProtoAuthKey | undefined> => {
          if (authKeyId === this.authKey.authKeyId) {
            return this.authKey
          }

          return undefined
        },
      } as any,
    })

    const data = this.messageFactory.decode(rawMessage.getMessage().getMessageData())
    const message = await TLObject.read(new BytesIO(data.message))

    if (message instanceof TL.RpcResult) {
      const result = this.results.get(message.reqMsgId)

      if (result) {
        result.resolve(message)
      }
    } else if (message instanceof TL.Updates) {
      this.onUpdate?.(message)
    } else {
      throw new Error('Handle unknown type')
    }
  }
}
