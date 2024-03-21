import { Migration } from '@mikro-orm/migrations'

export class Migration20240321065755 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "dialogs" ("id" bigserial primary key, "user_id" bigint not null, "peer_type" smallint not null default 0, "peer_id" bigint not null, "top_message_id" bigint not null, "read_inbox_max_id" bigint not null, "read_outbox_max_id" bigint not null, "unread_count" int not null default 0, "created_at" timestamptz not null);'
    )

    this.addSql(
      'create table "messages" ("id" bigserial primary key, "random_id" bigint not null, "user_id" bigint not null, "peer_type" smallint not null default 0, "peer_id" bigint not null, "dialog_id1" bigint not null, "dialog_id2" bigint not null, "message" varchar(6000) not null, "created_at" timestamptz not null);'
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override async down(): Promise<void> {}
}
