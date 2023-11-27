import type { CreateUserDto } from '../dtos/index.js'

import { Injectable }         from '@nestjs/common'
import random                 from 'crypto-random-bigint'

import { User }               from '../entities/index.js'

@Injectable()
export class UserFactory {
  createUser(createUserDto: CreateUserDto): User {
    return new User(
      random(63),
      random(63),
      createUserDto.secretKeyId,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.phone
    )
  }
}
