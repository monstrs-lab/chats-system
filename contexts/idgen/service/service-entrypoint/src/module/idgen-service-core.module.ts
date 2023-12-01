import type { DynamicModule } from '@nestjs/common'

import { RedisModule }        from '@monstrs/nestjs-redis'
import { Module }             from '@nestjs/common'

@Module({})
export class IdGenServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: IdGenServiceCoreModule,
      imports: [RedisModule.register({}, true)],
      exports: [RedisModule],
    }
  }
}
