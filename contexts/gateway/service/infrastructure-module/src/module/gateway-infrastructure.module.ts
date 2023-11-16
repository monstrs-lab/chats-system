import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { MTProtoGateway }     from '../gateway/index.js'

@Module({})
export class GatewayInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: GatewayInfrastructureModule,
      providers: [MTProtoGateway],
    }
  }
}
