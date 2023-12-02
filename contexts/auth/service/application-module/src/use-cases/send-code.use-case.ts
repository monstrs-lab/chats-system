import type { SentCode }           from '@chats-system/auth-domain-module'

import { Injectable }              from '@nestjs/common'
import parsePhoneNumber            from 'libphonenumber-js'

import { SentCodeRepository }      from '@chats-system/auth-domain-module'
import { SentCodeFactory }         from '@chats-system/auth-domain-module'
import { PhoneNumberInvalidError } from '@chats-system/auth-domain-module'
import { UserPort }                from '@chats-system/auth-domain-module'

@Injectable()
export class SendCodeUseCase {
  constructor(
    private readonly sentCodeRepository: SentCodeRepository,
    private readonly sentCodeFactory: SentCodeFactory,
    private readonly userPort: UserPort
  ) {}

  async execute(phone: string, authKeyId: bigint, sessionId: bigint): Promise<SentCode> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new PhoneNumberInvalidError()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new PhoneNumberInvalidError()
    }

    const phoneNumber = parsedPhoneNumber.formatInternational()

    const phoneRegistered = await this.userPort.isPhoneRegistered(phoneNumber)

    return this.sentCodeRepository.save(
      this.sentCodeFactory.createSentCode({
        authKeyId,
        sessionId,
        phone: phoneNumber,
        phoneRegistered,
      })
    )
  }
}
