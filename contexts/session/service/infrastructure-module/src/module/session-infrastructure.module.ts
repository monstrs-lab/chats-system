import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import * as controllers         from '../controllers/index.js'
import { AuthCache }            from '../cache/index.js'
import { Invoker }              from '../invoke/index.js'
import { SessionResponseQueue } from '../session/index.js'
import { SessionInvokeQueue }   from '../session/index.js'
import { SessionProcessor }     from '../session/index.js'
import { SessionsManager }      from '../session/index.js'

@Module({})
export class SessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: SessionInfrastructureModule,
      controllers: Object.values(controllers),
      providers: [
        AuthCache,
        Invoker,
        SessionResponseQueue,
        SessionInvokeQueue,
        SessionProcessor,
        SessionsManager,
      ],
    }
  }
}
