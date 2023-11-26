import { Injectable }     from '@nestjs/common'
import parsePhoneNumber   from 'libphonenumber-js'

import { MikroORM, CreateRequestContext } from '@mikro-orm/core'

import { RpcMetadata }    from '@chats-system/core-rpc'
import { client as user } from '@chats-system/user-rpc-client'

import { Exceptions } from '@chats-system/tl'

import { SentCode, SentCodeTypeSms, CodeTypeSms } from '@chats-system/auth-rpc'

import { SentCodeRepository } from '../repositories/index.js'
import { SendCodeType } from '../enums/index.js'

@Injectable()
export class SendCodeUseCase {
  constructor(private readonly sentCodeRepository: SentCodeRepository,
    // @ts-expect-error
    private readonly orm : MikroORM
    ) {}

  @CreateRequestContext()
  async execute(phone: string, metadata: RpcMetadata): Promise<SentCode> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new Exceptions.BadRequest.PhoneNumberInvalid()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new Exceptions.BadRequest.PhoneNumberInvalid()
    }

    const phoneNumber = parsedPhoneNumber.formatInternational()

    const { immutableUser } = await user.getImmutableUserByPhone({
      phoneNumber,
    })

    const sentCode = await this.sentCodeRepository.create(
      metadata.authKeyId,
      metadata.sessionId,
      phoneNumber,
      Boolean(immutableUser),
      SendCodeType.SMS,
      SendCodeType.SMS,
    )

    return new SentCode({
      type: {
        case: 'typeSms',
        value: new SentCodeTypeSms({ length: 5 }),
      },

      nextType: {
        case: 'nextTypeSms',
        value: new CodeTypeSms({ length: 5 })
      },

      phoneCodeHash: sentCode.phoneCodeHash,
      timeout: 60,
    })
  }
}
