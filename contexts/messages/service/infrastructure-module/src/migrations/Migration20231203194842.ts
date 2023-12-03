import { Migration } from '@mikro-orm/migrations'

export class Migration20231203194842 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "dialogs" ("id" bigserial primary key, "user_id" bigint not null, "peer_id" bigint not null, "peer_type" smallint not null default 0, "peer_dialog_id" bigint not null, "date" bigint not null, "pinned" boolean not null default false, "top_message" int not null default 0, "unread_count" int not null default 0, "unread_mark" boolean not null default false, "read_inbox_max_id" int not null default 0, "read_outbox_max_id" int not null default 0, "unread_mentions_count" int not null default 0, "unread_reactions_count" int not null default 0, "folder_id" int not null default 0, "folder_pinned" bigint not null default 0, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
    this.addSql(
      'alter table "dialogs" add constraint "dialogs_user_id_peer_id_peer_type_unique" unique ("user_id", "peer_id", "peer_type");'
    )
    this.addSql(
      'alter table "dialogs" add constraint "dialogs_user_id_peer_dialog_id_unique" unique ("user_id", "peer_dialog_id");'
    )

    this.addSql(
      'create table "messages" ("id" bigserial primary key, "random_id" bigint not null, "user_id" bigint not null, "message_id" int not null, "dialog_id1" bigint not null, "dialog_id2" bigint not null, "dialog_message_id" bigint not null, "sender_user_id" bigint not null, "peer_id" bigint not null, "peer_type" smallint not null default 0, "message_filter_type" smallint not null default 0, "message_data" jsonb not null default \'{}\', "message" varchar(6000) not null, "date" int not null, "mentioned" boolean not null default false, "media_unread" boolean not null default false, "pinned" boolean not null default false, "deleted" boolean not null default false, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null);'
    )
    this.addSql(
      'create index "messages_user_id_dialog_id1_dialog_id2_index" on "messages" ("user_id", "dialog_id1", "dialog_id2");'
    )
    this.addSql(
      'alter table "messages" add constraint "messages_user_id_message_id_unique" unique ("user_id", "message_id");'
    )
  }
}
