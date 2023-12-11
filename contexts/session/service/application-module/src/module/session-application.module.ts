import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { AuthKeyClientModule }  from '@chats-system/authkey-client-module'
import { MessagesClientModule } from '@chats-system/messages-client-module'
import { UpdatesClientModule }  from '@chats-system/updates-client-module'
import { UserClientModule }     from '@chats-system/user-client-module'

import * as rpchandlers         from '../rpc-handlers/index.js'

@Module({})
export class SessionApplicationModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: SessionApplicationModule,
      imports: [
        UserClientModule.attach(),
        AuthKeyClientModule.attach(),
        UpdatesClientModule.attach(),
        MessagesClientModule.attach(),
      ],
      providers: [...Object.values(rpchandlers)],
    }
  }
}
