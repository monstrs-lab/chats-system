import { Injectable }              from '@nestjs/common'
import parsePhoneNumber            from 'libphonenumber-js'

import { SentCodeRepository }      from '@chats-system/auth-domain-module'
import { Authorization }           from '@chats-system/auth-domain-module'
import { PhoneNumberInvalidError } from '@chats-system/auth-domain-module'

@Injectable()
export class SignInUseCase {
  constructor(private readonly sentCodeRepository: SentCodeRepository) {}

  async execute(phone: string, phoneCode: string, phoneCodeHash: string): Promise<Authorization> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new PhoneNumberInvalidError()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new PhoneNumberInvalidError()
    }

    const sentCode = await this.sentCodeRepository.getByCodeHash(phoneCodeHash)

    if (!sentCode) {
      throw new Error('Sent code required')
    }

    if (sentCode.phoneCode !== phoneCode) {
      throw new Error('Invalid phone code')
    }

    if (!sentCode.phoneRegistered) {
      return new Authorization()
    }

    return new Authorization()
  }
}
