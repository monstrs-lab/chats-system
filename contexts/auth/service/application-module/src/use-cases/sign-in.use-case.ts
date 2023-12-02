import { Injectable }              from '@nestjs/common'
import parsePhoneNumber            from 'libphonenumber-js'

import { SentCodeRepository }      from '@chats-system/auth-domain-module'
import { UserPort }                from '@chats-system/auth-domain-module'
import { UserInvalidError }        from '@chats-system/auth-domain-module'
import { AuthKeyPort }             from '@chats-system/auth-domain-module'
import { Authorization }           from '@chats-system/auth-domain-module'
import { PhoneNumberInvalidError } from '@chats-system/auth-domain-module'
import { PhoneCodeInvalidError }   from '@chats-system/auth-domain-module'

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly sentCodeRepository: SentCodeRepository,
    private readonly authKeyPort: AuthKeyPort,
    private readonly userPort: UserPort
  ) {}

  async execute(
    phone: string,
    phoneCode: string,
    phoneCodeHash: string,
    authKeyId: bigint
  ): Promise<Authorization> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new PhoneNumberInvalidError()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new PhoneNumberInvalidError()
    }

    const sentCode = await this.sentCodeRepository.getByCodeHash(phoneCodeHash)

    if (!sentCode) {
      throw new PhoneCodeInvalidError()
    }

    if (sentCode.phoneCode !== phoneCode) {
      throw new PhoneCodeInvalidError()
    }

    if (!sentCode.phoneRegistered) {
      return new Authorization()
    }

    const user = await this.userPort.getByPhone(parsedPhoneNumber.formatInternational())

    if (!user) {
      throw new UserInvalidError()
    }

    await this.authKeyPort.createAuthKeyUser(authKeyId, user.id)

    await this.sentCodeRepository.removeById(sentCode.id)

    return new Authorization(user.id)
  }
}
