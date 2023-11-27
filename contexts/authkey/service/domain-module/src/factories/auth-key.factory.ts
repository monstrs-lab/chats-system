import type { CreateAuthKeyDto } from '../dtos/index.js'

import { Injectable }            from '@nestjs/common'

import { AuthKey }               from '../entities/index.js'
import { AuthKeyType }           from '../enums/index.js'

@Injectable()
export class AuthKeyFactory {
  createAuthKey(createAuthKeyDto: CreateAuthKeyDto): AuthKey {
    const permAuthKeyId =
      createAuthKeyDto.authKeyType === AuthKeyType.PERM ? createAuthKeyDto.authKeyId : 0n
    const tempAuthKeyId =
      createAuthKeyDto.authKeyType === AuthKeyType.TEMP ? createAuthKeyDto.authKeyId : 0n
    const mediaTempAuthKeyId =
      createAuthKeyDto.authKeyType === AuthKeyType.MEDIA_TEMP ? createAuthKeyDto.authKeyId : 0n

    return new AuthKey(
      createAuthKeyDto.authKeyId,
      createAuthKeyDto.authKeyType,
      createAuthKeyDto.authKey,
      permAuthKeyId,
      tempAuthKeyId,
      mediaTempAuthKeyId,
      false
    )
  }
}
