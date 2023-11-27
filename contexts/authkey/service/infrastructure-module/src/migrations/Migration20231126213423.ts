import { Migration } from '@mikro-orm/migrations'

export class Migration20231126213423 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "auth_key_connections" ("auth_key_id" bigserial primary key, "date_active" timestamptz(0) not null, "layer" int not null default 0, "api_id" int not null default 0, "device_model" varchar(256) not null default \'\', "system_version" varchar(256) not null default \'\', "app_version" varchar(256) not null default \'\', "system_lang_code" varchar(256) not null default \'\', "lang_pack" varchar(256) not null default \'\', "lang_code" varchar(256) not null default \'\', "proxy" varchar(512) not null default \'\', "params" jsonb not null default \'{}\', "client_ip" varchar(32) not null default \'\', "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )

    this.addSql(
      'create table "auth_keys" ("auth_key_id" bigserial primary key, "auth_key_type" smallint not null default -1, "auth_key" varchar(512) not null, "perm_auth_key_id" bigint not null default 0, "temp_auth_key_id" bigint not null default 0, "media_temp_auth_key_id" bigint not null default 0, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )

    this.addSql(
      'create table "auth_key_users" ("id" bigserial primary key, "auth_key_id" bigint not null, "user_id" bigint not null, "hash" bigint not null default 0, "deleted" boolean not null default false, "date_created" timestamptz(0) not null default now(), "date_active" timestamptz(0) not null default now(), "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
    this.addSql(
      'alter table "auth_key_users" add constraint "auth_key_users_auth_key_id_user_id_unique" unique ("auth_key_id", "user_id");'
    )
  }
}
