import type { MikroOrmModuleOptions }         from '@mikro-orm/nestjs'
import type { DynamicModule }                 from '@nestjs/common'
import type { OnModuleInit }                  from '@nestjs/common'

import { MikroORM }                           from '@mikro-orm/core'
import { MikroOrmModule }                     from '@mikro-orm/nestjs'
import { PostgreSqlDriver }                   from '@mikro-orm/postgresql'
import { MikroORMConfigModule }               from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }                     from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMRequestContextModule }       from '@monstrs/nestjs-mikro-orm-request-context'
import { Module }                             from '@nestjs/common'

import * as controllers                       from '../controllers/index.js'
import * as entities                          from '../entities/index.js'
import * as migrations                        from '../migrations/index.js'
import { AuthKeyService }                     from '../services/index.js'
import { AuthInfrastructureModuleConfig }     from './auth-infrastructure.module.config.js'
import { AUTH_INFRASTRUCTURE_MODULE_OPTIONS } from './auth-infrastructure.module.constants.js'

@Module({})
export class AuthInfrastructureModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  static register(): DynamicModule {
    return {
      global: true,
      module: AuthInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroORMRequestContextModule.forInterceptor(),
        MikroOrmModule.forFeature(Object.values(entities)),
        MikroOrmModule.forRootAsync({
          imports: [
            MikroORMConfigModule.register({
              driver: PostgreSqlDriver,
              migrationsTableName: 'mikro_orm_migrations_auth',
              migrationsList: migrations,
              entities,
            }),
          ],
          useFactory: (mikroORMConfig: MikroORMConfig, config): MikroOrmModuleOptions =>
            ({
              ...mikroORMConfig.createMikroOrmOptions(),
              ...config.db,
            }) as MikroOrmModuleOptions,
          inject: [MikroORMConfig, AuthInfrastructureModuleConfig],
        }),
      ],
      providers: [
        {
          provide: AUTH_INFRASTRUCTURE_MODULE_OPTIONS,
          useValue: {},
        },
        {
          provide: AuthInfrastructureModuleConfig,
          useClass: AuthInfrastructureModuleConfig,
        },
        AuthKeyService,
      ],
      exports: [
        {
          provide: AuthInfrastructureModuleConfig,
          useClass: AuthInfrastructureModuleConfig,
        },
      ],
    }
  }

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up()
  }
}
