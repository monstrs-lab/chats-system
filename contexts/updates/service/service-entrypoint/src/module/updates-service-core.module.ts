import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs'
import type { DynamicModule }         from '@nestjs/common'
import type { OnModuleInit }          from '@nestjs/common'

import { MikroORM }                   from '@mikro-orm/core'
import { MikroOrmModule }             from '@mikro-orm/nestjs'
import { PostgreSqlDriver }           from '@mikro-orm/postgresql'
import { MikroORMConfigModule }       from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }             from '@monstrs/nestjs-mikro-orm-config'
import { Module }                     from '@nestjs/common'

import { entities }                   from '@chats-system/updates-infrastructure-module'
import { migrations }                 from '@chats-system/updates-infrastructure-module'

@Module({})
export class UpdatesServiceCoreModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  static register(): DynamicModule {
    return {
      module: UpdatesServiceCoreModule,
      imports: [
        MikroOrmModule.forRootAsync({
          imports: [
            MikroORMConfigModule.register({
              driver: PostgreSqlDriver,
              migrationsTableName: 'mikro_orm_migrations_updates',
              migrationsList: migrations,
              entities,
            }),
          ],
          useFactory: async (mikroORMConfig: MikroORMConfig): Promise<MikroOrmModuleOptions> =>
            mikroORMConfig.createMikroOrmOptions(),
          inject: [MikroORMConfig],
        }),
      ],
      exports: [MikroOrmModule],
    }
  }

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up()
  }
}
