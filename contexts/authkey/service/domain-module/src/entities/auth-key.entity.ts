import type { AuthKeyType } from '../enums/index.js'

export class AuthKey {
  constructor(
    public readonly authKeyId: bigint,
    public readonly authKeyType: AuthKeyType,
    public readonly authKey: Buffer,
    public readonly permAuthKeyId: bigint,
    public readonly tempAuthKeyId: bigint,
    public readonly mediaTempAuthKeyId: bigint,
    public readonly deleted: boolean
  ) {}
}
