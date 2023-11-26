import { Injectable }     from '@nestjs/common'
import  { MikroORM } from '@mikro-orm/core'
import { CreateRequestContext} from '@mikro-orm/core'

import { ImmutableUserRepository } from '../repositories/index.js'
import { ImmutableUser } from '@chats-system/user-rpc'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly immutableUserRepository: ImmutableUserRepository,
    // @ts-expect-error
    private readonly orm: MikroORM
) {}

  @CreateRequestContext()
  async execute(
    phone: string, secretKeyId:    bigint, firstName:      string, lastName: string, countryCode:    string
): Promise<ImmutableUser | undefined> {
    return this.immutableUserRepository.create(
        phone, 
        secretKeyId,
        firstName,
        lastName,
        countryCode
    )
  }
}
