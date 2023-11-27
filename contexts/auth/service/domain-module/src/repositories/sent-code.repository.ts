import type { SentCode } from '../entities/index.js'

export abstract class SentCodeRepository {
  abstract save(sentCode: SentCode): Promise<SentCode>

  abstract getByCodeHash(codeHash: string): Promise<SentCode | undefined>
}
