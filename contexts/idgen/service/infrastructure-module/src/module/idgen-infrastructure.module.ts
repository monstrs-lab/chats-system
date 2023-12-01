import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as controllers       from '../controllers/index.js'
import { SequenceIdService }  from '../services/index.js'

@Module({})
export class IdGenInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: IdGenInfrastructureModule,
      controllers: Object.values(controllers),
      providers: [SequenceIdService],
    }
  }
}
