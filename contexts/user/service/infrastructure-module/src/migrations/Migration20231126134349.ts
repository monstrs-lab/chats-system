import { Migration } from '@mikro-orm/migrations';

export class Migration20231126134349 extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table "users" alter column "photo_id" type bigint using ("photo_id"::bigint);');
    this.addSql('alter table "users" alter column "photo_id" drop not null;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "users" alter column "photo_id" type bigint using ("photo_id"::bigint);');
    this.addSql('alter table "users" alter column "photo_id" set not null;');
  }

}
