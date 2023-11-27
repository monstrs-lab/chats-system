import { Migration } from '@mikro-orm/migrations'

export class Migration20231127160814 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "users" ("id" bigserial primary key, "access_hash" bigint not null, "secret_key_id" bigint not null, "first_name" varchar(256) not null default \'\', "last_name" varchar(256) not null default \'\', "phone" varchar(32) not null, "username" varchar(256) null, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }
}
