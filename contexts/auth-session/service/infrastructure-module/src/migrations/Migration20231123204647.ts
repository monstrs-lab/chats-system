import { Migration } from '@mikro-orm/migrations'

export class Migration20231123204647 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auths" rename column "date_activated" to "date_activate";')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auths" rename column "date_activate" to "date_activated";')
  }
}
