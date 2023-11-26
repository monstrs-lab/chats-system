import { Migration } from '@mikro-orm/migrations';

export class Migration20231124205407 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "user_contacts" ("id" bigserial primary key, "owner_user_id" bigint not null, "contact_user_id" bigint not null, "contact_phone" varchar(32) not null, "contact_first_name" varchar(256) not null default \'\', "contact_last_name" varchar(256) not null default \'\', "mutual" boolean not null default false, "is_deleted" boolean not null default false, "date2" bigint not null, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user_contacts" add constraint "user_contacts_owner_user_id_contact_user_id_unique" unique ("owner_user_id", "contact_user_id");');

    this.addSql('create table "user_presences" ("id" bigserial primary key, "user_id" bigint not null, "last_seen_at" bigint not null, "expires" int not null default 0, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user_presences" add constraint "user_presences_user_id_unique" unique ("user_id");');

    this.addSql('create table "user_privacies" ("id" bigserial primary key, "user_id" bigint not null, "key_type" smallint not null default 0, "rules" jsonb not null default \'[]\', "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user_privacies" add constraint "user_privacies_user_id_key_type_unique" unique ("user_id", "key_type");');

    this.addSql('alter table "predefined_users" add constraint "predefined_users_phone_unique" unique ("phone");');

    this.addSql('alter table "users" add column "premium" boolean not null default false, add column "emoji_status_document_id" bigint not null default 0, add column "emoji_status_until" int not null default 0;');
    this.addSql('alter table "users" alter column "restriction_reason" type jsonb using ("restriction_reason"::jsonb);');
    this.addSql('alter table "users" alter column "restriction_reason" set default \'[]\';');
    this.addSql('alter table "users" alter column "restriction_reason" set not null;');
    this.addSql('alter table "users" add constraint "users_phone_unique" unique ("phone");');
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "user_contacts" cascade;');

    this.addSql('drop table if exists "user_presences" cascade;');

    this.addSql('drop table if exists "user_privacies" cascade;');

    this.addSql('alter table "predefined_users" drop constraint "predefined_users_phone_unique";');

    this.addSql('alter table "users" alter column "restriction_reason" drop default;');
    this.addSql('alter table "users" alter column "restriction_reason" type varchar(128) using ("restriction_reason"::varchar(128));');
    this.addSql('alter table "users" alter column "restriction_reason" drop not null;');
    this.addSql('alter table "users" drop constraint "users_phone_unique";');
    this.addSql('alter table "users" drop column "premium";');
    this.addSql('alter table "users" drop column "emoji_status_document_id";');
    this.addSql('alter table "users" drop column "emoji_status_until";');
  }

}
