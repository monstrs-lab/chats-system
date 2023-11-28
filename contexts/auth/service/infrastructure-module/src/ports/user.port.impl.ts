import { Injectable } from '@nestjs/common'

import { UserPort }   from '@chats-system/auth-domain-module'
import { client }     from '@chats-system/user-rpc-client'

@Injectable()
export class UserPortImpl extends UserPort {
  override async isPhoneRegistered(phone: string): Promise<boolean> {
    const { user } = await client.getUser({ phone })

    return Boolean(user)
  }

  override async createUser(
    secretKeyId: bigint,
    phone: string,
    firstName: string,
    lastName: string
  ): Promise<{ id: bigint } | undefined> {
    const { user } = await client.createUser({
      secretKeyId,
      phone,
      firstName,
      lastName,
    })

    return user
  }
}
