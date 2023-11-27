import type { DynamicModule }     from '@nestjs/common'

import { MikroOrmModule }         from '@mikro-orm/nestjs'
import { Module }                 from '@nestjs/common'

import { AuthApplicationModule }  from '@chats-system/auth-application-module'
import { SentCodeRepository }     from '@chats-system/auth-domain-module'
import { UserPort }               from '@chats-system/auth-domain-module'
import { AuthDomainModule }       from '@chats-system/auth-domain-module'

import * as controllers           from '../controllers/index.js'
import * as entities              from '../entities/index.js'
import * as mappers               from '../mappers/index.js'
import { UserPortImpl }           from '../ports/index.js'
import { SentCodeRepositoryImpl } from '../repositories/index.js'

@Module({})
export class AuthInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroOrmModule.forFeature(Object.values(entities)),
        AuthApplicationModule.register(),
        AuthDomainModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: SentCodeRepository,
          useClass: SentCodeRepositoryImpl,
        },
        {
          provide: UserPort,
          useClass: UserPortImpl,
        },
      ],
      exports: [
        {
          provide: SentCodeRepository,
          useClass: SentCodeRepositoryImpl,
        },
        {
          provide: UserPort,
          useClass: UserPortImpl,
        },
      ],
    }
  }
}
