import type { DynamicModule }          from '@nestjs/common'
import type { OnApplicationBootstrap } from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { TLRpcMetadataExplorer }       from '../metadata/index.js'
import { TLRpcHandlersRegistry }       from '../registry/index.js'

@Module({})
export class TLRpcModule implements OnApplicationBootstrap {
  constructor(
    private readonly rpcMetadataExplorer: TLRpcMetadataExplorer,
    private readonly rpcHandlersRegistry: TLRpcHandlersRegistry
  ) {}

  static register(): DynamicModule {
    return {
      module: TLRpcModule,
      providers: [TLRpcMetadataExplorer, TLRpcHandlersRegistry],
      exports: [TLRpcHandlersRegistry],
    }
  }

  onApplicationBootstrap(): void {
    this.rpcHandlersRegistry.register(this.rpcMetadataExplorer.explore())
  }
}
