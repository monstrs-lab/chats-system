import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as usecases          from '../use-cases/index.js'

@Module({})
export class UserApplicationModule {
  static register(): DynamicModule {
    return {
      module: UserApplicationModule,
      providers: [...Object.values(usecases)],
      exports: [...Object.values(usecases)],
    }
  }
}
