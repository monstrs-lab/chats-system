import { randomBytes } from 'node:crypto'

import { Injectable }     from '@nestjs/common'
import parsePhoneNumber   from 'libphonenumber-js'

import { MikroORM, CreateRequestContext } from '@mikro-orm/core'

import { RpcMetadata }    from '@chats-system/core-rpc'
import { client as user } from '@chats-system/user-rpc-client'
import { client as authSession } from '@chats-system/auth-session-rpc-client'

import { Exceptions } from '@chats-system/tl'

import { Authorization } from '@chats-system/auth-rpc'

import { SentCodeRepository } from '../repositories/index.js'
import { MTProtoAuthKey } from '@monstrs/mtproto-core'

@Injectable()
export class SignUpUseCase {
  constructor(private readonly sentCodeRepository: SentCodeRepository,
    // @ts-expect-error
    private readonly orm : MikroORM
    ) {}

  @CreateRequestContext()
  async execute(phone: string, phoneCodeHash: string, firstName: string, lastName: string,  metadata: RpcMetadata): Promise<Authorization> {
    const parsedPhoneNumber = parsePhoneNumber(phone.startsWith('+') ? phone : `+${phone}`)

    if (!parsedPhoneNumber?.isValid()) {
      throw new Exceptions.BadRequest.PhoneNumberInvalid()
    }

    if (!parsedPhoneNumber.countryCallingCode) {
      throw new Exceptions.BadRequest.PhoneNumberInvalid()
    }

    const phoneNumber = parsedPhoneNumber.formatInternational()

    if (!phoneCodeHash) {
        throw new Exceptions.BadRequest.PhoneCodeHashEmpty()
    }

    if (!firstName) {
        throw new Exceptions.BadRequest.FirstnameInvalid()
    }

    const sentCode = await this.sentCodeRepository.getByPhoneCodeHash(
      phoneCodeHash
    )

    if (!sentCode) {
        throw new Exceptions.BadRequest.PhoneCodeInvalid()
    }

    if (Math.floor(Date.now() / 1000) > sentCode.phoneCodeExpired) {
        throw new Exceptions.BadRequest.PhoneCodeExpired()
    }

    // TODO: check state

    const authKey = new MTProtoAuthKey(randomBytes(256))

    await authSession.setAuthKey(
      {
        authKey: {
          authKeyId:          authKey.id,
          authKey:            authKey.key,
          authKeyType:        0, // TODO: change to enum
          permAuthKeyId:      authKey.id,
          tempAuthKeyId:      0n,
          mediaTempAuthKeyId: 0n,
        }
      }
    )

    const { immutableUser } = await user.createUser({
      secretKeyId: authKey.id,
      phone:       phoneNumber,
      countryCode: parsedPhoneNumber.country,
      firstName,
      lastName,
    })

    if (!immutableUser) {
      throw new Error('Error create user')
    }

    await authSession.bindAuthKeyUser({
      authKeyId: metadata.authKeyId,
		  userId:    immutableUser.user!.id,
    })

    await this.sentCodeRepository.removeById(sentCode.id)

    return new Authorization({
      user: {
        self:                 true,
        contact:              true,
        mutualContact:        true,
        deleted:              false,
        bot:                  Boolean(immutableUser.user?.bot),
        botChatHistory:       immutableUser.user?.bot?.botChatHistory,
        botNochats:           immutableUser.user?.bot?.botNochats, 
        verified:             immutableUser.user?.verified,
        restricted:           immutableUser.user?.restricted,
        min:                  false,
        botInlineGeo:         immutableUser.user?.bot?.botInlineGeo,
        support:              immutableUser.user?.support,
        scam:                 immutableUser.user?.scam,
        applyMinPhoto:        false,
        fake:                 immutableUser.user?.fake,
        botAttachMenu:        immutableUser.user?.botAttachMenu,
        premium:              immutableUser.user?.premium,
        id:                   immutableUser.user?.id,
        accessHash:           immutableUser.user?.accessHash,
        firstName:            immutableUser.user?.firstName,
        lastName:             immutableUser.user?.lastName,
        username:             immutableUser.user?.username,
        phone:                immutableUser.user?.phone,
        photo:                immutableUser.user?.profilePhoto,
        // status:               immutableUser.lastSeenAt,
        botInfoVersion:       immutableUser.user?.bot?.botInfoVersion,
        restrictionReason:    immutableUser.user?.restrictionReason,
        botInlinePlaceholder: immutableUser.user?.bot?.botInlinePlaceholder,
        langCode:             undefined,
        emojiStatus:          immutableUser.user?.emojiStatus,
      }
    })    
  }
}
