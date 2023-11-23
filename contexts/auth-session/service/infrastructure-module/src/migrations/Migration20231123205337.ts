import { Migration } from '@mikro-orm/migrations'

export class Migration20231123205337 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auth_users" add column "date_active" timestamptz(0) null;')
    this.addSql('alter table "auth_users" alter column "date_created" drop default;')
    this.addSql(
      'alter table "auth_users" alter column "date_created" type timestamptz(0) using ("date_created"::timestamptz(0));'
    )
    this.addSql('alter table "auth_users" alter column "date_created" drop not null;')
    this.addSql('alter table "auth_users" drop column "date_activated";')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auth_users" add column "date_activated" bigint not null default 0;')
    this.addSql(
      'alter table "auth_users" alter column "date_created" type bigint using ("date_created"::bigint);'
    )
    this.addSql('alter table "auth_users" alter column "date_created" set default 0;')
    this.addSql('alter table "auth_users" alter column "date_created" set not null;')
    this.addSql('alter table "auth_users" drop column "date_active";')
  }
}
