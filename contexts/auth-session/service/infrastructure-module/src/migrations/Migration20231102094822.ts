import { Migration } from '@mikro-orm/migrations'

export class Migration20231102094822 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "auths" ("id" bigserial primary key, "auth_key_id" bigint not null, "layer" int not null default 0, "app_id" int not null default 0, "device_model" varchar(256) not null default \'\', "system_version" varchar(256) not null default \'\', "app_version" varchar(256) not null default \'\', "system_lang_code" varchar(256) not null default \'\', "lang_pack" varchar(256) not null default \'\', "lang_code" varchar(256) not null default \'\', "system_code" varchar(256) not null default \'\', "proxy" varchar(512) not null default \'\', "params" jsonb not null, "client_ip" varchar(32) not null default \'\', "date_activated" timestamptz(0) null, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "auths" cascade;')
  }
}
