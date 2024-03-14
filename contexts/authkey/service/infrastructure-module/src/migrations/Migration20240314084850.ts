import { Migration } from '@mikro-orm/migrations'

export class Migration20240314084850 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auth_keys" drop column "type";')

    this.addSql('alter table "auth_keys" rename column "value" to "key";')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auth_keys" add column "type" smallint not null default 0;')
    this.addSql('alter table "auth_keys" rename column "key" to "value";')
  }
}
