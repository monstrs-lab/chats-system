import { Migration } from '@mikro-orm/migrations'

export class Migration20231102092349 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "auth_key_infos" ("id" bigserial primary key, "auth_key_id" bigint not null, "auth_key_type" int not null, "perm_auth_key_id" bigint not null default 0, "temp_auth_key_id" bigint not null default 0, "media_temp_auth_key_id" bigint not null default 0, "body" varchar(512) not null, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "auth_key_infos" cascade;')
  }
}
