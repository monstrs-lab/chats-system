import type { DynamicModule }  from '@nestjs/common'
import type { OnModuleInit }   from '@nestjs/common'

import { MikroORM }            from '@mikro-orm/core'
import { Migrator }            from '@mikro-orm/migrations'
import { MikroOrmModule }      from '@mikro-orm/nestjs'
import { PostgreSqlDriver }    from '@mikro-orm/postgresql'
import { RedisModule }         from '@monstrs/nestjs-redis'
import { Module }              from '@nestjs/common'

import { AuthKeyClientModule } from '@chats-system/authkey-client-module'
import { IdGenClientModule }   from '@chats-system/idgen-client-module'

import { entities }            from '../entities/index.js'
import { migrations }          from '../migrations/index.js'

@Module({})
export class StandaloneServiceConfigModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  static register(): DynamicModule {
    return {
      global: true,
      module: StandaloneServiceConfigModule,
      imports: [
        IdGenClientModule.register(),
        AuthKeyClientModule.register(),
        RedisModule.register({}, true),
        MikroOrmModule.forRoot({
          driver: PostgreSqlDriver,
          host: process.env.DB_HOST || 'localhost',
          dbName: process.env.DB_DATABASE || 'db',
          user: process.env.DB_USERNAME || 'postgres',
          password: process.env.DB_PASSWORD || 'password',
          entities: Object.values(entities),
          forceUndefined: true,
          migrations: {
            disableForeignKeys: false,
            migrationsList: Object.keys(migrations).map((name: string) => ({
              class: migrations[name as keyof typeof migrations],
              name,
            })),
          },
          extensions: [Migrator],
        }),
      ],
      exports: [MikroOrmModule, RedisModule],
    }
  }

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up()
  }
}
