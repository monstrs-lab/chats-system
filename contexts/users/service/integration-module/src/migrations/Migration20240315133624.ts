import { Migration } from '@mikro-orm/migrations'

export class Migration20240315133624 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "users" ("id" bigserial primary key, "external_id" uuid not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "created_at" timestamptz not null);'
    )
    this.addSql('create index "users_external_id_index" on "users" ("external_id");')
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override async down(): Promise<void> {}
}
