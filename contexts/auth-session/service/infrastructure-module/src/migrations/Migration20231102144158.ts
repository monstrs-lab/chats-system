import { Migration } from '@mikro-orm/migrations'

export class Migration20231102144158 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "auths" rename column "app_id" to "api_id";')

    this.addSql('alter table "auth_users" add column "state" int not null default 0;')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "auths" rename column "api_id" to "app_id";')

    this.addSql('alter table "auth_users" drop column "state";')
  }
}
