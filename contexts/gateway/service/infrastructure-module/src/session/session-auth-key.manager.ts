import { MTProtoAuthKey, MTProtoAuthKeyManager } from "@monstrs/mtproto-core";

import { fromBigIntToBuffer } from '@monstrs/buffer-utils'

import { client } from '@chats-system/session-rpc-client'

export class SessionAuthKeyManager extends MTProtoAuthKeyManager {
    override async setAuthKey(authKeyId: bigint, authKey: MTProtoAuthKey): Promise<void> {
        const exists = await super.getAuthKey(authKeyId)

        if (!exists) {
            await client.setAuthKey({
                authKey: {
                    authKeyId: fromBigIntToBuffer(authKeyId, 64),
                    authKey: authKey.key,
                    authKeyType: 0,
                    permAuthKeyId: fromBigIntToBuffer(BigInt(0), 64),
                    tempAuthKeyId: fromBigIntToBuffer(BigInt(0), 64),
                    mediaTempAuthKeyId: fromBigIntToBuffer(BigInt(0), 64),
                },
            })
    
            await super.setAuthKey(authKeyId, authKey)
        }
    }

    override async getAuthKey(authKeyId: bigint): Promise<MTProtoAuthKey | undefined> {
        if (await super.getAuthKey(authKeyId)) {
            return super.getAuthKey(authKeyId)
        }

        const { authKey } = await client.queryAuthKey({
            authKeyId: fromBigIntToBuffer(authKeyId, 64)
        })

        if (authKey?.authKey) {
            return new MTProtoAuthKey(Buffer.from(authKey.authKey!))
        }

        return undefined
    }
}