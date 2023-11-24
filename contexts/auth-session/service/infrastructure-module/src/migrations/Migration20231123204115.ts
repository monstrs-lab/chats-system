import { Migration } from '@mikro-orm/migrations'

export class Migration20231123204115 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auths" alter column "params" type jsonb using ("params"::jsonb);')
    this.addSql('alter table "auths" alter column "params" set default \'{}\';')
    this.addSql('alter table "auths" alter column "date_activated" drop default;')
    this.addSql(
      'alter table "auths" alter column "date_activated" type timestamptz(0) using ("date_activated"::timestamptz(0));'
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      'alter table "auths" alter column "date_activated" type bigint using ("date_activated"::bigint);'
    )
    this.addSql('alter table "auths" alter column "date_activated" set default 0;')
    this.addSql('alter table "auths" alter column "params" drop default;')
    this.addSql('alter table "auths" alter column "params" type jsonb using ("params"::jsonb);')
  }
}
