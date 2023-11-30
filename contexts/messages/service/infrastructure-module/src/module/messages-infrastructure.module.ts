import type { DynamicModule }        from '@nestjs/common'

import { MikroOrmModule }            from '@mikro-orm/nestjs'
import { Module }                    from '@nestjs/common'

import { MessagesApplicationModule }     from '@chats-system/messages-application-module'
import { MessageRepository, IdGenPort }            from '@chats-system/messages-domain-module'
import { DialogRepository }     from '@chats-system/messages-domain-module'
import { MessagesDomainModule }          from '@chats-system/messages-domain-module'

import * as controllers              from '../controllers/index.js'
import * as entities                 from '../entities/index.js'
import * as mappers                  from '../mappers/index.js'
import { MessageRepositoryImpl }        from '../repositories/index.js'
import { DialogRepositoryImpl } from '../repositories/index.js'
import { IdGenPortImpl } from '../ports/index.js'
import { IdGen } from '@chats-system/idgen'

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
      ],
      providers: [
        ...Object.values(mappers),
          {
            provide: IdGen,
            useClass: IdGen,
          },
        {
          provide: MessageRepository,
          useClass: MessageRepositoryImpl,
        },
        {
          provide: DialogRepository,
          useClass: DialogRepositoryImpl,
        },
        {
          provide: IdGenPort,
          useClass: IdGenPortImpl
        }
      ],
      exports: [
        {
          provide: IdGen,
          useClass: IdGen,
        },
        {
          provide: MessageRepository,
          useClass: MessageRepositoryImpl,
        },
        {
          provide: DialogRepository,
          useClass: DialogRepositoryImpl,
        },
        {
          provide: IdGenPort,
          useClass: IdGenPortImpl
        },
      ],
    }
  }
}
