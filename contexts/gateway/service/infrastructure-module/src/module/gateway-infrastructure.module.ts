import type { DynamicModule }         from '@nestjs/common'

import { Module }                     from '@nestjs/common'

import * as controllers               from '../controllers/index.js'
import { MTProtoGateway }             from '../gateway/index.js'
import { MTProtoGatewayClientSender } from '../gateway/index.js'
import { SessionAuthManager }         from '../session/index.js'

@Module({})
export class GatewayInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: GatewayInfrastructureModule,
      controllers: Object.values(controllers),
      providers: [MTProtoGateway, SessionAuthManager, MTProtoGatewayClientSender],
    }
  }
}
