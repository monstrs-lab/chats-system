import type { CreateAuthKeyUserDto } from '../dtos/index.js'

import { Injectable }                from '@nestjs/common'
import random                        from 'crypto-random-bigint'

import { AuthKeyUser }               from '../entities/index.js'

@Injectable()
export class AuthKeyUserFactory {
  createAuthKeyUser(createAuthKeyUserDto: CreateAuthKeyUserDto): AuthKeyUser {
    return new AuthKeyUser(
      random(63),
      createAuthKeyUserDto.authKeyId,
      createAuthKeyUserDto.userId,
      random(63),
      false,
      new Date(),
      new Date()
    )
  }
}
