import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import { AuthKeyClientModule }   from '@chats-system/authkey-client-module'
import { SessionClientModule }   from '@chats-system/session-client-module'

import * as controllers          from '../controllers/index.js'
import { ConnectionRegistry }    from '../connection/index.js'
import { MTProtoGateway }        from '../gateway/index.js'
import { SessionAuthManager }    from '../session/index.js'
import { SessionAuthKeyManager } from '../session/index.js'

@Module({})
export class GatewayInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: GatewayInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [AuthKeyClientModule.attach(), SessionClientModule.attach()],
      providers: [ConnectionRegistry, MTProtoGateway, SessionAuthManager, SessionAuthKeyManager],
    }
  }
}
