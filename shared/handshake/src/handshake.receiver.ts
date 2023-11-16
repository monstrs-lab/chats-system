import type { ReqPqMulti }             from '@chats-system/operations'
import type { ReqDHParams }            from '@chats-system/operations'

import { randomBytes }                 from 'node:crypto'
import { createHash }                  from 'node:crypto'

import { MTProtoKeyPair }              from '@monstrs/mtproto-core'
import { MTProtoAuthKey }              from '@monstrs/mtproto-core'
import { IGE }                         from '@monstrs/mtproto-crypto'
import { BinaryReader }                from '@monstrs/mtproto-extensions'
import { fromBufferToBigInt }          from '@monstrs/buffer-utils'
import { fromBigIntToByteArrayBuffer } from '@monstrs/buffer-utils'
import { bufferXor }                   from '@monstrs/buffer-utils'
import { fromBigIntToBuffer }          from '@monstrs/buffer-utils'
import { modExp }                      from '@monstrs/crypto-utils'
import { calculateNonceHash }          from '@monstrs/mtproto-crypto'

import { ResPQ }                       from '@chats-system/operations'
import { PQInnerData }                 from '@chats-system/operations'
import { SchemaRegistry }              from '@chats-system/operations'
import { ServerDHInnerData }           from '@chats-system/operations'
import { ServerDHParamsOk }            from '@chats-system/operations'
import { SetClientDHParams }           from '@chats-system/operations'
import { ClientDHInnerData }           from '@chats-system/operations'
import { DhGenOk }                     from '@chats-system/operations'
import { DhGenRetry }                  from '@chats-system/operations'

import { MTProtoState }                from './mtproto-state.js'
import { key }                         from './constants.js'
import { dh2048G }                     from './constants.js'
import { dh2048P }                     from './constants.js'
import { pq }                          from './constants.js'
import { p }                           from './constants.js'
import { q }                           from './constants.js'

export class HandshakeReceiver {
  async handleReqPqMulti(reqPQ: ReqPqMulti, state: MTProtoState): Promise<ResPQ> {
    if (!reqPQ.nonce) {
      throw new Error('ReqPqMulti: Invalid nonce')
    }

    const resPQ = new ResPQ({
      nonce: reqPQ.nonce,
      serverNonce: fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true),
      pq,
      serverPublicKeyFingerprints: [key.fingerprint],
    })

    state.setHandshake(resPQ.nonce, resPQ.serverNonce)

    return resPQ
  }

  async handleReqDHParams(
    reqDHParams: ReqDHParams,
    state: MTProtoState
  ): Promise<ServerDHParamsOk> {
    if (reqDHParams.nonce !== state.handshake?.nonce) {
      throw new Error(
        `ReqDHParams: invalid nonce, require ${state.handshake?.nonce}, received ${reqDHParams.nonce}`
      )
    }

    if (reqDHParams.serverNonce !== state.handshake?.serverNonce) {
      throw new Error(
        `ReqDHParams: invalid server nonce, require ${state.handshake?.serverNonce}, received ${reqDHParams.serverNonce}`
      )
    }

    if (reqDHParams.p.compare(p) !== 0) {
      throw new Error('ReqDHParams: invalid p value')
    }

    if (reqDHParams.q.compare(q) !== 0) {
      throw new Error('ReqDHParams: invalid q value')
    }

    if (reqDHParams.publicKeyFingerprint !== key.fingerprint) {
      throw new Error('ReqDHParams: invalid fingerprint value')
    }

    if (reqDHParams.encryptedData.length < 256) {
      throw new Error('ReqDHParams: encrypted data length < 256')
    }

    const encryptedDataBuffer = fromBufferToBigInt(reqDHParams.encryptedData, false)
    const keyAesEncryptedInt = modExp(encryptedDataBuffer, key.d, key.n)
    const keyAesEncrypted = fromBigIntToBuffer(keyAesEncryptedInt, 256, false)
    const tempKeyXor = keyAesEncrypted.subarray(0, 32)
    const aesEncrypted = keyAesEncrypted.subarray(32, keyAesEncrypted.length)
    const aesEncryptedHash = createHash('sha256').update(aesEncrypted).digest()
    const tempKey = bufferXor(tempKeyXor, aesEncryptedHash)

    const ige = new IGE(tempKey, Buffer.alloc(32))

    const dataWithHash = ige.decrypt(aesEncrypted)

    const dataPadReversed = dataWithHash.subarray(0, dataWithHash.length - 32)
    const dataWithPadding = Buffer.from(dataPadReversed).reverse()

    const innerData = new BinaryReader<any>(dataWithPadding, SchemaRegistry).readObject()

    if (!(innerData instanceof PQInnerData)) {
      throw new Error(`ReqDHParams: invalid pq inner data ${innerData.constructor.name}`)
    }

    if (innerData.nonce !== state.handshake?.nonce) {
      throw new Error(
        `ReqDHParams: inner data, invalid nonce, require ${state.handshake?.nonce}, received ${innerData.nonce}`
      )
    }

    if (innerData.serverNonce !== state.handshake?.serverNonce) {
      throw new Error(
        `ReqDHParams: inner data, invalid server nonce, require ${state.handshake?.serverNonce}, received ${innerData.serverNonce}`
      )
    }
/*
    if (Buffer.from(innerData.pq, 'binary').compare(pq) !== 0) {
      throw new Error('ReqDHParams: inner data, invalid pq value')
    }

    if (Buffer.from(innerData.p, 'binary').compare(p) !== 0) {
      throw new Error('ReqDHParams: inner data, invalid p value')
    }

    if (Buffer.from(innerData.q, 'binary').compare(q) !== 0) {
      throw new Error('ReqDHParams: inner data, invalid q value')
    }
*/
    const a = fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true)
    const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const serverDHInnerData = new ServerDHInnerData({
      nonce: reqDHParams.nonce,
      serverNonce: reqDHParams.serverNonce,
      g: dh2048G[0],
      dhPrime: dh2048P,
      gA: fromBigIntToBuffer(gA, 256, false),
      serverTime: Math.floor(new Date().getTime() / 1000),
    })

    const { key: igekey, iv } = MTProtoKeyPair.fromNonce(
      reqDHParams.serverNonce,
      innerData.newNonce
    )

    const igeEncode = new IGE(igekey, iv)

    const bytes = serverDHInnerData.getBytes()

    const serverDHParamsOk = new ServerDHParamsOk({
      nonce: reqDHParams.nonce,
      serverNonce: reqDHParams.serverNonce,
      encryptedAnswer: igeEncode.encrypt(
        Buffer.concat([createHash('sha1').update(bytes).digest(), bytes])
      ),
    })

    state.handshake.newNonce = innerData.newNonce
    state.handshake.a = a

    return serverDHParamsOk
  }

  async handleSetClientDHParams(
    setClientDHParams: SetClientDHParams,
    state: MTProtoState
  ): Promise<DhGenOk | DhGenRetry> {
    if (setClientDHParams.nonce !== state.handshake?.nonce) {
      throw new Error(
        `SetClientDHParams: invalid nonce, require ${state.handshake?.nonce}, received ${setClientDHParams.nonce}`
      )
    }

    if (setClientDHParams.serverNonce !== state.handshake?.serverNonce) {
      throw new Error(
        `SetClientDHParams: invalid server nonce, require ${state.handshake?.serverNonce}, received ${setClientDHParams.serverNonce}`
      )
    }

    const { key: igekey, iv } = MTProtoKeyPair.fromNonce(
      setClientDHParams.serverNonce,
      state.handshake.newNonce!
    )

    const igeEncode = new IGE(igekey, iv)
    const clientDhEncrypted = igeEncode.decrypt(setClientDHParams.encryptedData)
    const clientDh = clientDhEncrypted.subarray(20, clientDhEncrypted.length)

    const clientDHInnerData = new BinaryReader<any>(clientDh, SchemaRegistry).readObject()

    if (!(clientDHInnerData instanceof ClientDHInnerData)) {
      throw new Error(
        `SetClientDHParams: invalid pq inner data ${clientDHInnerData.constructor.name}`
      )
    }

    if (clientDHInnerData.nonce !== state.handshake?.nonce) {
      throw new Error(
        `SetClientDHParams: inner data, invalid nonce, require ${state.handshake?.nonce}, received ${setClientDHParams.nonce}`
      )
    }

    if (clientDHInnerData.serverNonce !== state.handshake?.serverNonce) {
      throw new Error(
        `SetClientDHParams: inner data, invalid server nonce, require ${state.handshake?.serverNonce}, received ${setClientDHParams.serverNonce}`
      )
    }

    const gab = modExp(
      fromBufferToBigInt(clientDHInnerData.gB),
      state.handshake.a!,
      fromBufferToBigInt(dh2048P)
    )

    const authKey = new MTProtoAuthKey(fromBigIntToByteArrayBuffer(gab))

    try {
      await state.authKeyManager.setAuthKey(authKey.id, authKey)

      return new DhGenOk({
        nonce: setClientDHParams.nonce,
        serverNonce: setClientDHParams.serverNonce,
        newNonceHash1: calculateNonceHash(state.handshake.newNonce!, authKey.auxHash, 1),
      })
    } catch {
      return new DhGenRetry({
        nonce: setClientDHParams.nonce,
        serverNonce: setClientDHParams.serverNonce,
        newNonceHash2: calculateNonceHash(state.handshake.newNonce!, authKey.auxHash, 2),
      })
    }
  }
}
