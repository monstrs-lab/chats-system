import { Migration } from '@mikro-orm/migrations'

export class Migration20240324050329 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "messages" add column "message_id" bigint not null;')
    this.addSql(
      'create index "messages_user_id_dialog_id1_dialog_id2_index" on "messages" ("user_id", "dialog_id1", "dialog_id2");'
    )
    this.addSql(
      'alter table "messages" add constraint "messages_user_id_message_id_unique" unique ("user_id", "message_id");'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop index "messages_user_id_dialog_id1_dialog_id2_index";')
    this.addSql('alter table "messages" drop constraint "messages_user_id_message_id_unique";')
    this.addSql('alter table "messages" drop column "message_id";')
  }
}
