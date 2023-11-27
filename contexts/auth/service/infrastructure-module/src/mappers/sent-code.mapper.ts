/* eslint-disable no-param-reassign */

import type { SentCodeEntity } from '../entities/index.js'

import { Injectable }          from '@nestjs/common'

import { SentCode }            from '@chats-system/auth-domain-module'

@Injectable()
export class SentCodeMapper {
  fromPersistence(entity: SentCodeEntity): SentCode {
    return new SentCode(
      entity.id,
      entity.state,
      entity.authKeyId,
      entity.sessionId,
      entity.phone,
      entity.phoneRegistered,
      entity.phoneCode,
      entity.phoneCodeHash,
      entity.phoneCodeExpired
    )
  }

  toPersistence(sentCode: SentCode, entity: SentCodeEntity): SentCodeEntity {
    entity.id = sentCode.id
    entity.state = sentCode.state
    entity.authKeyId = sentCode.authKeyId
    entity.sessionId = sentCode.sessionId
    entity.phone = sentCode.phone
    entity.phoneRegistered = sentCode.phoneRegistered
    entity.phoneCode = sentCode.phoneCode
    entity.phoneCodeHash = sentCode.phoneCodeHash
    entity.phoneCodeExpired = sentCode.phoneCodeExpired

    return entity
  }
}
