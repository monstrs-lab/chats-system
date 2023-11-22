import { Migration } from '@mikro-orm/migrations'

export class Migration20231102094158 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "devices" ("id" bigserial primary key, "auth_key_id" bigint not null, "user_id" bigint not null default 0, "token_type" int not null default 0, "token" varchar(512) not null, "no_muted" boolean not null default false, "locked_period" int not null default 0, "app_sandbox" boolean not null default false, "secret" varchar(1024) not null default \'\', "other_uids" varchar(1024) not null default \'\', "state" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "devices" cascade;')
  }
}
