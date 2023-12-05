import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { UserClientModule }   from '@chats-system/user-client-module'

import * as rpchandlers       from '../rpc-handlers/index.js'

@Module({})
export class SessionApplicationModule {
  static register(): DynamicModule {
    return {
      module: SessionApplicationModule,
      imports: [UserClientModule.register()],
      providers: [...Object.values(rpchandlers)],
    }
  }
}