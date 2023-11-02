import type { DynamicModule }          from '@nestjs/common'

import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { MicroservisesRegistryModule } from '@monstrs/nestjs-microservices-registry'
import { Module }                      from '@nestjs/common'

import * as controllers                from '../controllers/index.js'

@Module({})
export class SessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: SessionInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MicroservisesRegistryModule.connect({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port: 50051,
          }),
        }),
      ],
    }
  }
}
