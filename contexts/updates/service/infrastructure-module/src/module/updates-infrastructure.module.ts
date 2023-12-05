import type { DynamicModule }       from '@nestjs/common'

import { Module }                   from '@nestjs/common'

import { IdGenClientModule }        from '@chats-system/idgen-client-module'
import { IdGenClient }              from '@chats-system/idgen-client-module'
import { UpdatesApplicationModule } from '@chats-system/updates-application-module'
import { IdGenPort }                from '@chats-system/updates-application-module'
import { UpdatesDomainModule }      from '@chats-system/updates-domain-module'

import * as controllers             from '../controllers/index.js'
import { IdGenPortImpl }            from '../ports/index.js'

@Module({})
export class UpdatesInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: UpdatesInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        UpdatesApplicationModule.register(),
        UpdatesDomainModule.register(),
        IdGenClientModule.attach(),
      ],
      providers: [
        {
          provide: IdGenPort,
          useFactory: (idGenClient: IdGenClient) => new IdGenPortImpl(idGenClient),
          inject: [IdGenClient],
        },
      ],
      exports: [
        {
          provide: IdGenPort,
          useFactory: (idGenClient: IdGenClient) => new IdGenPortImpl(idGenClient),
          inject: [IdGenClient],
        },
      ],
    }
  }
}
