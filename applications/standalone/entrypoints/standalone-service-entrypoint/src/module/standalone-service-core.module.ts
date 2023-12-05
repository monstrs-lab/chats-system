import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs'
import type { DynamicModule }         from '@nestjs/common'
import type { OnModuleInit }          from '@nestjs/common'

import { MikroORM }                   from '@mikro-orm/core'
import { MikroOrmModule }             from '@mikro-orm/nestjs'
import { PostgreSqlDriver }           from '@mikro-orm/postgresql'
import { MikroORMConfigModule }       from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }             from '@monstrs/nestjs-mikro-orm-config'
import { RedisModule }                from '@monstrs/nestjs-redis'
import { Module }                     from '@nestjs/common'

import { IdGenClientModule }          from '@chats-system/idgen-client-module'

import { entities }                   from '../entities/index.js'
import { migrations }                 from '../migrations/index.js'

@Module({})
export class StandaloneServiceCoreModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  static register(): DynamicModule {
    return {
      global: true,
      module: StandaloneServiceCoreModule,
      imports: [
        IdGenClientModule.register(),
        RedisModule.register({}, true),
        MikroOrmModule.forRootAsync({
          imports: [
            MikroORMConfigModule.register({
              driver: PostgreSqlDriver,
              migrationsTableName: 'mikro_orm_migrations_standalone',
              migrationsList: migrations,
              entities,
            }),
          ],
          useFactory: async (mikroORMConfig: MikroORMConfig): Promise<MikroOrmModuleOptions> =>
            mikroORMConfig.createMikroOrmOptions(),
          inject: [MikroORMConfig],
        }),
      ],
      exports: [MikroOrmModule, RedisModule],
    }
  }

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up()
  }
}
