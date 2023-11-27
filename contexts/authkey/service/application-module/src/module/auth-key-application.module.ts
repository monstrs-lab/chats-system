import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as usecases          from '../use-cases/index.js'

@Module({})
export class AuthKeyApplicationModule {
  static register(): DynamicModule {
    return {
      module: AuthKeyApplicationModule,
      providers: [...Object.values(usecases)],
      exports: [...Object.values(usecases)],
    }
  }
}
