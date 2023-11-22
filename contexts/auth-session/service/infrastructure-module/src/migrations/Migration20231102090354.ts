import { Migration } from '@mikro-orm/migrations'

export class Migration20231102090354 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "auth_keys" ("id" bigserial primary key, "auth_key_id" bigint not null, "body" varchar(512) not null, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now());'
    )
  }
}
