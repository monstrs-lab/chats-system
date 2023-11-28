import { Migration } from '@mikro-orm/migrations'

export class Migration20231128111723 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "user_contacts" ("id" bigserial primary key, "owner_user_id" bigint not null, "contact_user_id" bigint not null, "contact_phone" varchar(32) not null, "contact_first_name" varchar(256) not null default \'\', "contact_last_name" varchar(256) not null default \'\', "mutual" boolean not null default false, "is_deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
    this.addSql(
      'alter table "user_contacts" add constraint "user_contacts_owner_user_id_contact_user_id_unique" unique ("owner_user_id", "contact_user_id");'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "user_contacts" cascade;')
  }
}
