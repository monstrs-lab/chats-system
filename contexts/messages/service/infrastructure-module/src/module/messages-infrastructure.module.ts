import type { DynamicModule }          from '@nestjs/common'

import { MikroOrmModule }              from '@mikro-orm/nestjs'
import { Module }                      from '@nestjs/common'

import { IdGenClientModule }           from '@chats-system/idgen-client-module'
import { IdGenClient }                 from '@chats-system/idgen-client-module'
import { MessagesApplicationModule }   from '@chats-system/messages-application-module'
import { IdGenPort }                   from '@chats-system/messages-application-module'
import { DialogRepository }            from '@chats-system/messages-application-module'
import { MessageRepository }           from '@chats-system/messages-application-module'
import { TransactionalRepository }     from '@chats-system/messages-application-module'
import { MessagesDomainModule }        from '@chats-system/messages-domain-module'

import * as controllers                from '../controllers/index.js'
import * as entities                   from '../entities/index.js'
import * as mappers                    from '../mappers/index.js'
import { IdGenPortImpl }               from '../ports/index.js'
import { DialogRepositoryImpl }        from '../repositories/index.js'
import { TransactionalRepositoryImpl } from '../repositories/index.js'
import { MessageRepositoryImpl }       from '../repositories/index.js'

@Module({})
export class MessagesInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: MessagesInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroOrmModule.forFeature(Object.values(entities)),
        MessagesApplicationModule.register(),
        MessagesDomainModule.register(),
        IdGenClientModule.attach(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: IdGenPort,
          useFactory: (idGenClient: IdGenClient) => new IdGenPortImpl(idGenClient),
          inject: [IdGenClient],
        },
        {
          provide: TransactionalRepository,
          useClass: TransactionalRepositoryImpl,
        },
        {
          provide: MessageRepository,
          useClass: MessageRepositoryImpl,
        },
        {
          provide: DialogRepository,
          useClass: DialogRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: IdGenPort,
          useFactory: (idGenClient: IdGenClient) => new IdGenPortImpl(idGenClient),
          inject: [IdGenClient],
        },
        {
          provide: TransactionalRepository,
          useClass: TransactionalRepositoryImpl,
        },
        {
          provide: MessageRepository,
          useClass: MessageRepositoryImpl,
        },
        {
          provide: DialogRepository,
          useClass: DialogRepositoryImpl,
        },
      ],
    }
  }
}
