import { Migration } from '@mikro-orm/migrations'

export class Migration20231102093515 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "auth_users" ("id" bigserial primary key, "auth_key_id" bigint not null, "user_id" bigint not null default 0, "hash" bigint not null default 0, "layer" int not null default 0, "device_model" varchar(128) not null default \'\', "platform" varchar(64) not null default \'\', "system_version" varchar(64) not null default \'\', "app_id" int not null default 0, "app_name" varchar(64) not null default \'\', "app_version" varchar(64) not null default \'\', "date_created"  timestamptz(0) null, "date_activated" timestamptz(0) null, "ip" varchar(64) not null default \'\', "country" varchar(64) not null default \'\', "region" varchar(64) not null default \'\', "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "auth_users" cascade;')
  }
}
