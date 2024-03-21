import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as commandhandlers   from '../command-handlers/index.js'

@Module({})
export class MessagesApplicationModule {
  static register(): DynamicModule {
    return {
      module: MessagesApplicationModule,
      providers: [...Object.values(commandhandlers)],
      exports: [...Object.values(commandhandlers)],
    }
  }
}
