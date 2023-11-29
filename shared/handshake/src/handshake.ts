import { randomBytes }                 from 'node:crypto'
import { createHash }                  from 'node:crypto'

import { MTProtoAuthKeyType }          from '@monstrs/mtproto-core'
import { MTProtoKeyPair }              from '@monstrs/mtproto-core'
import { MTProtoAuthKey }              from '@monstrs/mtproto-core'
import { IGE }                         from '@monstrs/mtproto-crypto'
import { fromBufferToBigInt }          from '@monstrs/buffer-utils'
import { fromBigIntToByteArrayBuffer } from '@monstrs/buffer-utils'
import { bufferXor }                   from '@monstrs/buffer-utils'
import { fromBigIntToBuffer }          from '@monstrs/buffer-utils'
import { modExp }                      from '@monstrs/crypto-utils'
import { calculateNonceHash }          from '@monstrs/mtproto-crypto'

import { TLObject }                    from '@chats-system/tl'
import { BytesIO }                     from '@chats-system/tl'
import { Prime }                       from '@chats-system/tl'
import TL                              from '@chats-system/tl'

import { HandshakeState }              from './handshake.state.js'
import { key }                         from './handshake.constants.js'
import { dh2048G }                     from './handshake.constants.js'
import { dh2048P }                     from './handshake.constants.js'
import { pq }                          from './handshake.constants.js'
import { p }                           from './handshake.constants.js'
import { q }                           from './handshake.constants.js'

export class Handshake {
  #state = new HandshakeState()

  async sendReqPQMulti(): Promise<{ reqPQMulti: TL.ReqPqMulti }> {
    const reqPQMulti = new TL.ReqPqMulti({
      nonce: fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true),
    })

    this.#state.setNonce(reqPQMulti.nonce)

    return { reqPQMulti }
  }

  async handleReqPQMulti(reqPQ: TL.ReqPqMulti): Promise<{ resPQ: TL.ResPQ }> {
    const resPQ = new TL.ResPQ({
      nonce: reqPQ.nonce,
      serverNonce: fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true),
      pq,
      serverPublicKeyFingerprints: [key.fingerprint],
    })

    this.#state.setNonce(resPQ.nonce)
    this.#state.setServerNonce(resPQ.serverNonce)

    return { resPQ }
  }

  async handleResPQ(resPQ: TL.ResPQ): Promise<{ reqDhParams: TL.ReqDhParams }> {
    const nonce = this.#state.getNonce()

    if (!nonce) {
      throw new Error('State nonce empty')
    }

    const pqValue = fromBufferToBigInt(resPQ.pq, false, true)
    const g = Prime.decompose(pqValue)

    const [pValue, qValue] = [BigInt(g), BigInt(pqValue / g)].sort((a: bigint, b: bigint) => {
      if (a > b) return 1
      if (a < b) return -1
      return 0
    })

    const pBytes = fromBigIntToByteArrayBuffer(pValue)
    const qBytes = fromBigIntToByteArrayBuffer(qValue)

    const newNonce = fromBufferToBigInt(Buffer.from(randomBytes(32)), false, true)

    const pqInnerData = new TL.PQInnerData({
      pq: resPQ.pq,
      p: pBytes,
      q: qBytes,
      nonce,
      newNonce,
      serverNonce: resPQ.serverNonce,
    }).write()

    const padding = Buffer.from(randomBytes(192 - pqInnerData.length))
    const dataWithPadding = Buffer.concat([pqInnerData, padding])
    const dataPadReversed = Buffer.from(dataWithPadding).reverse()

    let encryptedData

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
      const tempKey = Buffer.from(randomBytes(32))
      const shaDigestKeyWithData = createHash('sha256')
        .update(Buffer.concat([tempKey, dataWithPadding]))
        .digest()
      const dataWithHash = Buffer.concat([dataPadReversed, shaDigestKeyWithData])

      const ige = new IGE(tempKey, Buffer.alloc(32))
      const aesEncrypted = ige.encrypt(dataWithHash)
      const tempKeyXor = bufferXor(tempKey, createHash('sha256').update(aesEncrypted).digest())

      const keyAesEncrypted = Buffer.concat([tempKeyXor, aesEncrypted])
      const keyAesEncryptedInt = fromBufferToBigInt(keyAesEncrypted, false, false)

      if (keyAesEncryptedInt >= key.n) {
        // eslint-disable-next-line no-continue
        continue
      }

      const encryptedDataBuffer = modExp(keyAesEncryptedInt, BigInt(key.e), key.n)

      encryptedData = fromBigIntToBuffer(encryptedDataBuffer, 256, false, false)

      break
    }

    if (encryptedData === undefined) {
      throw new Error('Could create a secure encrypted key')
    }

    const reqDhParams = new TL.ReqDhParams({
      nonce,
      serverNonce: resPQ.serverNonce,
      p: pBytes,
      q: qBytes,
      publicKeyFingerprint: key.fingerprint,
      encryptedData,
    })

    this.#state.setServerNonce(resPQ.serverNonce)
    this.#state.setNewNonce(newNonce)

    return { reqDhParams }
  }

  async handleReqDHParams(
    reqDHParams: TL.ReqDhParams
  ): Promise<{ serverDHParamsOk: TL.ServerDhParamsOk }> {
    if (reqDHParams.nonce !== this.#state.getNonce()) {
      throw new Error(
        `ReqDHParams: invalid nonce, require ${this.#state.getNonce()!}, received ${
          reqDHParams.nonce
        }`
      )
    }

    if (reqDHParams.serverNonce !== this.#state.getServerNonce()) {
      throw new Error(
        `ReqDHParams: invalid server nonce, require ${this.#state.getServerNonce()!}, received ${
          reqDHParams.serverNonce
        }`
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

    const innerData = await TLObject.read(new BytesIO(dataWithPadding))

    if (!(innerData instanceof TL.PQInnerData)) {
      throw new Error(`ReqDHParams: invalid pq inner data ${innerData.constructor.name}`)
    }

    if (innerData.nonce !== this.#state.getNonce()) {
      throw new Error(
        `ReqDHParams: inner data, invalid nonce, require ${this.#state.getNonce()!}, received ${
          innerData.nonce
        }`
      )
    }

    if (innerData.serverNonce !== this.#state.getServerNonce()) {
      throw new Error(
        `ReqDHParams: inner data, invalid server nonce, require ${this.#state.getServerNonce()!}, received ${
          innerData.serverNonce
        }`
      )
    }

    const a = fromBufferToBigInt(randomBytes(256))
    const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const serverDHInnerData = new TL.ServerDhInnerData({
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

    const bytes = serverDHInnerData.write()

    const serverDHParamsOk = new TL.ServerDhParamsOk({
      nonce: reqDHParams.nonce,
      serverNonce: reqDHParams.serverNonce,
      encryptedAnswer: igeEncode.encrypt(
        Buffer.concat([createHash('sha1').update(bytes).digest(), bytes])
      ),
    })

    this.#state.setNewNonce(innerData.newNonce)
    this.#state.setA(a)

    return { serverDHParamsOk }
  }

  async handleServerDhParams(
    serverDhParams: TL.ServerDhParamsOk
  ): Promise<{ setClientDhParams: TL.SetClientDhParams; authKey: MTProtoAuthKey }> {
    const keyPair = MTProtoKeyPair.fromNonce(
      this.#state.getServerNonce()!,
      this.#state.getNewNonce()!
    )

    const ige = new IGE(keyPair.key, keyPair.iv)
    const answerWithHash = ige.decrypt(serverDhParams.encryptedAnswer)

    const answer = new BytesIO(answerWithHash)

    answer.seek(20, 1)

    const serverDhInnerData: TL.ServerDhInnerData = await TLObject.read(answer)

    const dhPrime = fromBufferToBigInt(serverDhInnerData.dhPrime, false, false)

    const ga = fromBufferToBigInt(serverDhInnerData.gA, false, false)
    const b = fromBufferToBigInt(Buffer.from(randomBytes(256)), false, false)

    const gb = modExp(BigInt(serverDhInnerData.g), b, dhPrime)
    const gab = modExp(ga, b, dhPrime)

    const clientDhInnerData = new TL.ClientDhInnerData({
      nonce: this.#state.getNonce()!,
      serverNonce: this.#state.getServerNonce()!,
      retryId: BigInt(0),
      gB: fromBigIntToByteArrayBuffer(gb, false),
    }).write()

    const clientDdhInnerDataHashed = Buffer.concat([
      createHash('sha1').update(clientDhInnerData).digest(),
      clientDhInnerData,
    ])

    const clientDhEncrypted = ige.encrypt(clientDdhInnerDataHashed)

    this.#state.setTimeOffset(serverDhInnerData.serverTime - Math.floor(Date.now() / 1000))

    const authKey = new MTProtoAuthKey(fromBigIntToByteArrayBuffer(gab))

    const setClientDhParams = new TL.SetClientDhParams({
      nonce: this.#state.getNonce()!,
      serverNonce: this.#state.getServerNonce()!,
      encryptedData: clientDhEncrypted,
    })

    return { setClientDhParams, authKey }
  }

  async handleSetClientDHParams(
    setClientDHParams: TL.SetClientDhParams
  ): Promise<{ dhGenOk: TL.DhGenOk; authKey: MTProtoAuthKey }> {
    if (setClientDHParams.nonce !== this.#state.getNonce()) {
      throw new Error(
        `SetClientDHParams: invalid nonce, require ${this.#state.getNonce()!}, received ${
          setClientDHParams.nonce
        }`
      )
    }

    if (setClientDHParams.serverNonce !== this.#state.getServerNonce()) {
      throw new Error(
        `SetClientDHParams: invalid server nonce, require ${this.#state.getServerNonce()!}, received ${
          setClientDHParams.serverNonce
        }`
      )
    }

    const { key: igekey, iv } = MTProtoKeyPair.fromNonce(
      setClientDHParams.serverNonce,
      this.#state.getNewNonce()!
    )

    const igeEncode = new IGE(igekey, iv)
    const clientDhEncrypted = igeEncode.decrypt(setClientDHParams.encryptedData)
    const clientDh = clientDhEncrypted.subarray(20, clientDhEncrypted.length)

    const clientDHInnerData = await TLObject.read(new BytesIO(clientDh))

    if (!(clientDHInnerData instanceof TL.ClientDhInnerData)) {
      throw new Error(
        `SetClientDHParams: invalid pq inner data ${clientDHInnerData.constructor.name}`
      )
    }

    if (clientDHInnerData.nonce !== this.#state.getNonce()) {
      throw new Error(
        `SetClientDHParams: inner data, invalid nonce, require ${this.#state.getNonce()!}, received ${
          setClientDHParams.nonce
        }`
      )
    }

    if (clientDHInnerData.serverNonce !== this.#state.getServerNonce()) {
      throw new Error(
        `SetClientDHParams: inner data, invalid server nonce, require ${this.#state.getServerNonce()!}, received ${
          setClientDHParams.serverNonce
        }`
      )
    }

    const gab = modExp(
      fromBufferToBigInt(clientDHInnerData.gB, false),
      this.#state.getA()!,
      fromBufferToBigInt(dh2048P, false, false)
    )

    const authKey = new MTProtoAuthKey(fromBigIntToByteArrayBuffer(gab), MTProtoAuthKeyType.PERM)

    const dhGenOk = new TL.DhGenOk({
      nonce: setClientDHParams.nonce,
      serverNonce: setClientDHParams.serverNonce,
      newNonceHash1: calculateNonceHash(this.#state.getNewNonce()!, authKey.auxHash, 1),
    })

    return { dhGenOk, authKey }
  }
}
