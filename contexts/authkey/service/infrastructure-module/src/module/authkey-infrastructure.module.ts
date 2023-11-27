import type { DynamicModule }              from '@nestjs/common'

import { MikroOrmModule }                  from '@mikro-orm/nestjs'
import { Module }                          from '@nestjs/common'

import { AuthKeyApplicationModule }        from '@chats-system/authkey-application-module'
import { AuthKeyConnectionRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyRepository }               from '@chats-system/authkey-domain-module'
import { AuthKeyUserRepository }           from '@chats-system/authkey-domain-module'
import { AuthKeyDomainModule }             from '@chats-system/authkey-domain-module'

import * as controllers                    from '../controllers/index.js'
import * as entities                       from '../entities/index.js'
import * as mappers                        from '../mappers/index.js'
import { AuthKeyConnectionRepositoryImpl } from '../repositories/index.js'
import { AuthKeyRepositoryImpl }           from '../repositories/index.js'
import { AuthKeyUserRepositoryImpl }       from '../repositories/index.js'

@Module({})
export class AuthKeyInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthKeyInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroOrmModule.forFeature(Object.values(entities)),
        AuthKeyApplicationModule.register(),
        AuthKeyDomainModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: AuthKeyConnectionRepository,
          useClass: AuthKeyConnectionRepositoryImpl,
        },
        {
          provide: AuthKeyUserRepository,
          useClass: AuthKeyUserRepositoryImpl,
        },
        {
          provide: AuthKeyRepository,
          useClass: AuthKeyRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: AuthKeyConnectionRepository,
          useClass: AuthKeyConnectionRepositoryImpl,
        },
        {
          provide: AuthKeyUserRepository,
          useClass: AuthKeyUserRepositoryImpl,
        },
        {
          provide: AuthKeyRepository,
          useClass: AuthKeyRepositoryImpl,
        },
      ],
    }
  }
}
