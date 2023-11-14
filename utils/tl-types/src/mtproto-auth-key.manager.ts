import { MTProtoAuthKey } from './mtproto-auth-key.js'

export class MTProtoAuthKeyManager {
    #authKeys: Map<bigint, MTProtoAuthKey>

    constructor() {
        this.#authKeys = new Map()
    }

    getAuthKey(authKeyId: bigint): MTProtoAuthKey | undefined {
        return this.#authKeys.get(authKeyId)
    }

    setAuthKey(authKeyId: bigint, authKey: MTProtoAuthKey): void {
        this.#authKeys.set(authKeyId, authKey)
    }
}