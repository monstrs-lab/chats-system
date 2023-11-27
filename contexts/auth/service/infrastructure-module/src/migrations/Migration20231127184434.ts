import { Migration } from '@mikro-orm/migrations'

export class Migration20231127184434 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "sent_codes" ("id" bigserial primary key, "state" smallint not null default 0, "auth_key_id" bigint not null, "session_id" bigint not null, "phone" varchar(32) not null, "phone_registered" boolean not null default false, "phone_code" varchar(256) not null default \'\', "phone_code_hash" varchar(256) not null default \'\', "phone_code_expired" int not null default 0, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
  }
}
