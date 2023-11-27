import { Injectable } from '@nestjs/common'

import { UserPort }   from '@chats-system/auth-domain-module'
import { client }     from '@chats-system/user-rpc-client'

@Injectable()
export class UserPortImpl extends UserPort {
  override async isUserPhoneRegistered(phone: string): Promise<boolean> {
    const { user } = await client.getUser({ phone })

    return Boolean(user)
  }
}
