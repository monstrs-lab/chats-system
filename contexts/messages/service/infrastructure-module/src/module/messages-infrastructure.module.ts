import type { DynamicModule }        from '@nestjs/common'

import { MikroOrmModule }            from '@mikro-orm/nestjs'
import { ValidationModule }          from '@monstrs/nestjs-validation'
import { Module }                    from '@nestjs/common'

import { IdGenClientModule }         from '@chats-system/idgen-client-module'
import { MessagesApplicationModule } from '@chats-system/messages-application-module'
import { SendMessageRepository }     from '@chats-system/messages-application-module'
import { MessageRepository }         from '@chats-system/messages-application-module'
import { DialogRepository }          from '@chats-system/messages-application-module'
import { IdGenPort }                 from '@chats-system/messages-application-module'

import * as controllers              from '../controllers/index.js'
import * as entities                 from '../entities/index.js'
import * as mappers                  from '../mappers/index.js'
import { IdGenPortImpl }             from '../ports/index.js'
import { SendMessageRepositoryImpl } from '../repositories/index.js'
import { MessageRepositoryImpl }     from '../repositories/index.js'
import { DialogRepositoryImpl }      from '../repositories/index.js'

@Module({})
export class MessagesInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: MessagesInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        IdGenClientModule.attach(),
        ValidationModule.register(),
        MikroOrmModule.forFeature(Object.values(entities)),
        MessagesApplicationModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: SendMessageRepository,
          useClass: SendMessageRepositoryImpl,
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
          useClass: IdGenPortImpl,
        },
      ],
      exports: [
        {
          provide: SendMessageRepository,
          useClass: SendMessageRepositoryImpl,
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
          useClass: IdGenPortImpl,
        },
      ],
    }
  }
}
