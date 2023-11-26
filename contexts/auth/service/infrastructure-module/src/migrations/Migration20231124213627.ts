import { Migration } from '@mikro-orm/migrations';

export class Migration20231124213627 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "phone_codes" ("id" bigserial primary key, "auth_key_id" bigint not null, "session_id" bigint not null, "phone_number" varchar(32) not null, "phone_number_registered" boolean not null default false, "phone_code" varchar(256) not null default \'\', "phone_code_hash" varchar(256) not null default \'\', "phone_code_extra_data" varchar(256) not null default \'\', "phone_code_expired" int not null default 0, "flash_call_pattern" varchar(256) not null default \'\', "sent_code_type" smallint not null default 0, "next_code_type" smallint not null default 0, "state" smallint not null default 1, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);');
  }

}
