import { Migration } from '@mikro-orm/migrations'

export class Migration20240313201810 extends Migration {
  override async up(): Promise<void> {
    this.addSql('drop table if exists "auth_key_connections" cascade;')

    this.addSql('alter table "auth_keys" drop constraint "auth_keys_pkey";')
    this.addSql('alter table "auth_keys" drop column "auth_key_type";')
    this.addSql('alter table "auth_keys" drop column "perm_auth_key_id";')
    this.addSql('alter table "auth_keys" drop column "temp_auth_key_id";')
    this.addSql('alter table "auth_keys" drop column "media_temp_auth_key_id";')
    this.addSql('alter table "auth_keys" drop column "deleted";')
    this.addSql('alter table "auth_keys" drop column "updated_at";')

    this.addSql('alter table "auth_keys" add column "type" smallint not null default 0;')
    this.addSql('alter table "auth_keys" alter column "created_at" drop default;')
    this.addSql(
      'alter table "auth_keys" alter column "created_at" type timestamptz using ("created_at"::timestamptz);'
    )
    this.addSql('alter table "auth_keys" rename column "auth_key_id" to "id";')
    this.addSql('alter table "auth_keys" rename column "auth_key" to "value";')
    this.addSql('alter table "auth_keys" add constraint "auth_keys_pkey" primary key ("id");')

    this.addSql('alter table "auth_key_users" drop column "hash";')
    this.addSql('alter table "auth_key_users" drop column "deleted";')
    this.addSql('alter table "auth_key_users" drop column "date_created";')
    this.addSql('alter table "auth_key_users" drop column "date_active";')
    this.addSql('alter table "auth_key_users" drop column "updated_at";')

    this.addSql('alter table "auth_key_users" alter column "created_at" drop default;')
    this.addSql(
      'alter table "auth_key_users" alter column "created_at" type timestamptz using ("created_at"::timestamptz);'
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      'create table "auth_key_connections" ("auth_key_id" bigserial primary key, "date_active" timestamptz(0) not null, "layer" int not null default 0, "api_id" int not null default 0, "device_model" varchar(256) not null default \'\', "system_version" varchar(256) not null default \'\', "app_version" varchar(256) not null default \'\', "system_lang_code" varchar(256) not null default \'\', "lang_pack" varchar(256) not null default \'\', "lang_code" varchar(256) not null default \'\', "proxy" varchar(512) not null default \'\', "params" jsonb not null default \'{}\', "client_ip" varchar(32) not null default \'\', "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )

    this.addSql('alter table "auth_keys" drop constraint "auth_keys_pkey";')
    this.addSql('alter table "auth_keys" drop column "type";')

    this.addSql(
      'alter table "auth_keys" add column "auth_key_type" smallint not null default -1, add column "perm_auth_key_id" bigint not null default 0, add column "temp_auth_key_id" bigint not null default 0, add column "media_temp_auth_key_id" bigint not null default 0, add column "deleted" boolean not null default false, add column "updated_at" timestamptz(0) not null;'
    )
    this.addSql(
      'alter table "auth_keys" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));'
    )
    this.addSql('alter table "auth_keys" alter column "created_at" set default now();')
    this.addSql('alter table "auth_keys" rename column "id" to "auth_key_id";')
    this.addSql('alter table "auth_keys" rename column "value" to "auth_key";')
    this.addSql(
      'alter table "auth_keys" add constraint "auth_keys_pkey" primary key ("auth_key_id");'
    )

    this.addSql(
      'alter table "auth_key_users" add column "hash" bigint not null default 0, add column "deleted" boolean not null default false, add column "date_created" timestamptz(0) not null default now(), add column "date_active" timestamptz(0) not null default now(), add column "updated_at" timestamptz(0) not null;'
    )
    this.addSql(
      'alter table "auth_key_users" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));'
    )
    this.addSql('alter table "auth_key_users" alter column "created_at" set default now();')
  }
}
