import type { AuthKeyType } from '../enums/index.js'

export class CreateAuthKeyDto {
  constructor(
    public readonly authKeyId: bigint,
    public readonly authKeyType: AuthKeyType,
    public readonly authKey: Buffer
  ) {}
}
