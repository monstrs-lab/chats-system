import type { SentCodeState } from '../enums/index.js'

export class SentCode {
  constructor(
    public readonly id: bigint,
    public readonly state: SentCodeState,
    public readonly authKeyId: bigint,
    public readonly sessionId: bigint,
    public readonly phone: string,
    public readonly phoneRegistered: boolean,
    public readonly phoneCode: string,
    public readonly phoneCodeHash: string,
    public readonly phoneCodeExpired: number
  ) {}
}
