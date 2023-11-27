import type { SendCodeDto } from '../dtos/index.js'

import { randomBytes }      from 'node:crypto'

import { Injectable }       from '@nestjs/common'
import random               from 'crypto-random-bigint'

import { SentCode }         from '../entities/index.js'
import { SentCodeState }    from '../enums/index.js'

@Injectable()
export class SentCodeFactory {
  createSentCode(sendCodeDto: SendCodeDto): SentCode {
    return new SentCode(
      random(63),
      SentCodeState.SEND,
      sendCodeDto.authKeyId,
      sendCodeDto.sessionId,
      sendCodeDto.phone,
      sendCodeDto.phoneRegistered,
      '12345',
      randomBytes(16).toString('hex'),
      Math.floor(Date.now() / 1000) + 3 * 60
    )
  }
}
