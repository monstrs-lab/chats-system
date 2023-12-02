import type { DynamicModule }    from '@nestjs/common'

import { MikroOrmModule }        from '@mikro-orm/nestjs'
import { Module }                from '@nestjs/common'

import { HelpApplicationModule } from '@chats-system/help-application-module'
import { HelpDomainModule }      from '@chats-system/help-domain-module'
import { CountryRepository }     from '@chats-system/help-domain-module'

import * as controllers          from '../controllers/index.js'
import * as entities             from '../entities/index.js'
import { CountryRepositoryImpl } from '../repositories/index.js'

@Module({})
export class HelpInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: HelpInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroOrmModule.forFeature(Object.values(entities)),
        HelpApplicationModule.register(),
        HelpDomainModule.register(),
      ],
      providers: [
        {
          provide: CountryRepository,
          useClass: CountryRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: CountryRepository,
          useClass: CountryRepositoryImpl,
        },
      ],
    }
  }
}
