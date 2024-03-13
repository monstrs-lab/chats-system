import type { DynamicModule }          from '@nestjs/common'
import type { OnApplicationBootstrap } from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { AuthKeyClientModule }         from '@chats-system/authkey-client-module'

import * as rpchandlers                from '../rpc-handlers/index.js'
import { ChatsSystemGateway }          from '../gateway/index.js'
import { TLRpcMetadataExplorer }       from '../metadata/index.js'
import { TLRpcHandlersRegistry }       from '../registry/index.js'
import { SessionAuthKeyManager }       from '../session/index.js'

@Module({})
export class GatewayInfrastructureModule implements OnApplicationBootstrap {
  constructor(
    private readonly rpcMetadataExplorer: TLRpcMetadataExplorer,
    private readonly rpcHandlersRegistry: TLRpcHandlersRegistry
  ) {}

  static register(): DynamicModule {
    return {
      module: GatewayInfrastructureModule,
      imports: [AuthKeyClientModule.attach()],
      providers: [
        TLRpcMetadataExplorer,
        TLRpcHandlersRegistry,
        ChatsSystemGateway,
        SessionAuthKeyManager,
        ...Object.values(rpchandlers),
      ],
      exports: [TLRpcHandlersRegistry],
    }
  }

  onApplicationBootstrap(): void {
    this.rpcHandlersRegistry.register(this.rpcMetadataExplorer.explore())
  }
}
