import { Migration } from '@mikro-orm/migrations'

export class Migration20231123100652 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "seq_ids" ("key" varchar(255) not null, "id" bigint not null, constraint "seq_ids_pkey" primary key ("key"));'
    )
  }
}
