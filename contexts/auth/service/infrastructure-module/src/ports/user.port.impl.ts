import { Injectable } from '@nestjs/common'

import { UserPort }   from '@chats-system/auth-domain-module'

@Injectable()
export class UserPortImpl extends UserPort {
  // @ts-expect-error
  override async isUserPhoneRegistered(phone: string): Promise<boolean> {
    return false
  }
}
