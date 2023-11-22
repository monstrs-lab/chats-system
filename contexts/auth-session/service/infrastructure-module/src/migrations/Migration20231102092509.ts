import { Migration } from '@mikro-orm/migrations'

export class Migration20231102092509 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auth_key_infos" drop column "body";')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auth_key_infos" add column "body" varchar(512) not null;')
  }
}
