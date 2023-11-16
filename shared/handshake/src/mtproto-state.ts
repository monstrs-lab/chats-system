import { MTProtoObfuscadetCodec } from '@monstrs/mtproto-codecs'
import { MTProtoAuthKeyManager }  from '@monstrs/mtproto-core'

import { MTProtoHandshake }       from './mtproto-handshake.js'

export class MTProtoState {
  #codec: MTProtoObfuscadetCodec

  #authKeyManager: MTProtoAuthKeyManager

  #handshake?: MTProtoHandshake

  constructor(codec: MTProtoObfuscadetCodec, authKeyManager: MTProtoAuthKeyManager) {
    this.#codec = codec
    this.#authKeyManager = authKeyManager
  }

  get codec(): MTProtoObfuscadetCodec {
    return this.#codec
  }

  get authKeyManager(): MTProtoAuthKeyManager {
    return this.#authKeyManager
  }

  get handshake(): MTProtoHandshake | undefined {
    return this.#handshake
  }

  setHandshake(nonce: bigint, serverNonce: bigint) {
    this.#handshake = new MTProtoHandshake(nonce, serverNonce)
  }
}
