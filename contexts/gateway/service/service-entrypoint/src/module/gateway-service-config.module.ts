import type { DynamicModule }   from '@nestjs/common'

import { RedisModule }          from '@monstrs/nestjs-redis'
import { Module }               from '@nestjs/common'

import { AuthKeyClientModule }  from '@chats-system/authkey-client-module'
import { MessagesClientModule } from '@chats-system/messages-client-module'
import { UsersClientModule }    from '@chats-system/users-client-module'

@Module({})
export class GatewayServiceConfigModule {
  static register(): DynamicModule {
    return {
      module: GatewayServiceConfigModule,
      imports: [
        RedisModule.register({}, true),
        AuthKeyClientModule.register(),
        UsersClientModule.register(),
        MessagesClientModule.register(),
      ],
    }
  }
}
