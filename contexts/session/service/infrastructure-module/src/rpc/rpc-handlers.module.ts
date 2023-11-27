import type { DynamicModule }          from '@nestjs/common'
import type { OnApplicationBootstrap } from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { RpcMetadataExplorer }         from '../rpc/index.js'
import { RpcHandlersRegistry }         from '../rpc/index.js'

@Module({})
export class RpcHandlerModule implements OnApplicationBootstrap {
  constructor(
    private readonly rpcMetadataExplorer: RpcMetadataExplorer,
    private readonly rpcHandlersRegistry: RpcHandlersRegistry
  ) {}

  static register(): DynamicModule {
    return {
      module: RpcHandlerModule,
      providers: [RpcMetadataExplorer, RpcHandlersRegistry],
      exports: [RpcHandlersRegistry],
    }
  }

  onApplicationBootstrap(): void {
    this.rpcHandlersRegistry.register(this.rpcMetadataExplorer.explore())
  }
}
