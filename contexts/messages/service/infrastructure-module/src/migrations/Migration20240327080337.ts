import { Migration } from '@mikro-orm/migrations'

export class Migration20240327080337 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "messages" add column "from_id" bigint not null;')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "messages" drop column "from_id";')
  }
}
