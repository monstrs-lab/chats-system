import type { DynamicModule } from '@nestjs/common'
import type { OnModuleInit }  from '@nestjs/common'

import { MikroORM }           from '@mikro-orm/core'
import { Migrator }           from '@mikro-orm/migrations'
import { MikroOrmModule }     from '@mikro-orm/nestjs'
import { PostgreSqlDriver }   from '@mikro-orm/postgresql'
import { Module }             from '@nestjs/common'
import { CqrsModule }         from '@nestjs/cqrs'

import { entities }           from '@chats-system/messages-infrastructure-module'
import { migrations }         from '@chats-system/messages-infrastructure-module'

@Module({})
export class MessagesServiceCoreModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  static register(): DynamicModule {
    return {
      module: MessagesServiceCoreModule,
      imports: [
        CqrsModule.forRoot(),
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
      exports: [MikroOrmModule],
    }
  }

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up()
  }
}
