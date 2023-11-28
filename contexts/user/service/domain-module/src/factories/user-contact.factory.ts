import type { CreateUserContactDto } from '../dtos/index.js'

import { Injectable }                from '@nestjs/common'
import random                        from 'crypto-random-bigint'

import { UserContact }               from '../entities/index.js'

@Injectable()
export class UserContactFactory {
  createUserContact(createUserContactDto: CreateUserContactDto): UserContact {
    return new UserContact(
      random(63),
      createUserContactDto.ownerUserId,
      createUserContactDto.contactUserId,
      createUserContactDto.contactPhone,
      createUserContactDto.contactFirstName,
      createUserContactDto.contactLastName,
      createUserContactDto.mutual,
      false
    )
  }
}
