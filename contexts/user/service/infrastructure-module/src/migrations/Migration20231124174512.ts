import { Migration } from '@mikro-orm/migrations'

export class Migration20231124174512 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "predefined_users" ("id" bigserial primary key, "phone" varchar(32) not null, "first_name" varchar(256) not null default \'\', "last_name" varchar(256) not null default \'\', "username" varchar(256) not null, "code" varchar(32) not null, "verified" boolean not null, "registered_user_id" bigint not null, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )

    this.addSql(
      'create table "users" ("id" bigserial primary key, "user_type" smallint not null default 2, "access_hash" bigint not null, "secret_key_id" bigint not null, "first_name" varchar(256) not null default \'\', "last_name" varchar(256) not null default \'\', "username" varchar(256) not null default \'\', "phone" varchar(32) not null, "country_code" varchar(3) not null, "verified" boolean not null default false, "support" boolean not null default false, "scam" boolean not null default false, "fake" boolean not null default false, "about" varchar(128) null, "state" int not null, "is_bot" boolean not null default false, "account_days_ttl" int not null default 180, "photo_id" bigint not null, "restricted" boolean not null default false, "restriction_reason" varchar(128) null, "archive_and_mute_new_noncontact_peers" boolean not null default false, "deleted" boolean not null default false, "delete_reason" varchar(128) null, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }
}
