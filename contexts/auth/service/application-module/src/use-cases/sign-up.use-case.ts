import type { RpcMetadata }        from '@chats-system/core-rpc'

import { randomBytes }             from 'node:crypto'

import { MTProtoAuthKey }          from '@monstrs/mtproto-core'
import { MTProtoAuthKeyType }      from '@monstrs/mtproto-core'
import { Injectable }              from '@nestjs/common'
import parsePhoneNumber            from 'libphonenumber-js'

import { SentCodeRepository }      from '@chats-system/auth-domain-module'
import { SentCodeState }           from '@chats-system/auth-domain-module'
import { AuthKeyPort }             from '@chats-system/auth-domain-module'
import { UserPort }                from '@chats-system/auth-domain-module'
import { Authorization }           from '@chats-system/auth-domain-module'
import { PhoneNumberInvalidError } from '@chats-system/auth-domain-module'
import { UserInvalidError }        from '@chats-system/auth-domain-module'
import { PhoneCodeExpiredError }   from '@chats-system/auth-domain-module'
import { PhoneCodeHashEmptyError } from '@chats-system/auth-domain-module'
import { FirstNameInvalidError }   from '@chats-system/auth-domain-module'
import { PhoneCodeInvalidError }   from '@chats-system/auth-domain-module'

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly sentCodeRepository: SentCodeRepository,
    private readonly authKeyPort: AuthKeyPort,
    private readonly userPort: UserPort
  ) {}

  async execute(
    phone: string,
    phoneCodeHash: string,
    firstName: string,
    lastName: string,
    metadata: RpcMetadata
  ): Promise<Authorization> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new PhoneNumberInvalidError()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new PhoneNumberInvalidError()
    }

    if (!phoneCodeHash) {
      throw new PhoneCodeHashEmptyError()
    }

    if (!firstName) {
      throw new FirstNameInvalidError()
    }

    const sentCode = await this.sentCodeRepository.getByCodeHash(phoneCodeHash)

    if (!sentCode) {
      throw new PhoneCodeInvalidError()
    }

    if (Math.floor(Date.now() / 1000) > sentCode.phoneCodeExpired) {
      throw new PhoneCodeExpiredError()
    }

    if (sentCode.state !== SentCodeState.SENT) {
      throw new PhoneCodeInvalidError()
    }

    const authKey = new MTProtoAuthKey(randomBytes(256), MTProtoAuthKeyType.PERM)

    await this.authKeyPort.createAuthKey(authKey)

    const user = await this.userPort.createUser(
      authKey.authKeyId,
      parsedPhoneNumber.formatInternational(),
      firstName,
      lastName
    )

    if (!user) {
      throw new UserInvalidError()
    }

    await this.authKeyPort.createAuthKeyUser(metadata.authKeyId, user.id)

    await this.sentCodeRepository.removeById(sentCode.id)

    return new Authorization(user.id)
  }
}
