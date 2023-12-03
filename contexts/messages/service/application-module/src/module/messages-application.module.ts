import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as usecases          from '../use-cases/index.js'

@Module({})
export class MessagesApplicationModule {
  static register(): DynamicModule {
    return {
      module: MessagesApplicationModule,
      providers: [...Object.values(usecases)],
      exports: [...Object.values(usecases)],
    }
  }
}
