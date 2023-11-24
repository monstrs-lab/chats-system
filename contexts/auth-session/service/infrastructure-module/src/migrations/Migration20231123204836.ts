import { Migration } from '@mikro-orm/migrations'

export class Migration20231123204836 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auths" rename column "date_activate" to "date_active";')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auths" rename column "date_active" to "date_activate";')
  }
}
