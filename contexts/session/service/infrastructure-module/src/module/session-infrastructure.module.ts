import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import * as controllers         from '../controllers/index.js'
import * as handlers            from '../handlers/index.js'
import { AuthCache }            from '../cache/index.js'
import { RpcHandlerModule }     from '../rpc/index.js'
import { SessionResponseQueue } from '../session/index.js'
import { SessionProcessor }     from '../session/index.js'
import { SessionRpcQueue }      from '../session/index.js'
import { SessionsManager }      from '../session/index.js'

@Module({})
export class SessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: SessionInfrastructureModule,
      imports: [RpcHandlerModule.register()],
      controllers: Object.values(controllers),
      providers: [
        AuthCache,
        SessionResponseQueue,
        SessionProcessor,
        SessionRpcQueue,
        SessionsManager,
        ...Object.values(handlers),
      ],
    }
  }
}
