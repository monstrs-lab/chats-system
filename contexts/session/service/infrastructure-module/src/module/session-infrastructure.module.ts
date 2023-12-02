import type { DynamicModule }       from '@nestjs/common'

import { Module }                   from '@nestjs/common'

import { SessionApplicationModule } from '@chats-system/session-application-module'
import { TLRpcModule }              from '@chats-system/tl-rpc'

import * as controllers             from '../controllers/index.js'
import { SessionResponseQueue }     from '../session/index.js'
import { SessionProcessor }         from '../session/index.js'
import { SessionRpcQueue }          from '../session/index.js'

@Module({})
export class SessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: SessionInfrastructureModule,
      imports: [TLRpcModule.register(), SessionApplicationModule.register()],
      controllers: Object.values(controllers),
      providers: [SessionResponseQueue, SessionProcessor, SessionRpcQueue],
    }
  }
}
