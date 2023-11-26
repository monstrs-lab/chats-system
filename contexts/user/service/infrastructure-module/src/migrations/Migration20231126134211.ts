import { Migration } from '@mikro-orm/migrations';

export class Migration20231126134211 extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table "users" alter column "state" type int using ("state"::int);');
    this.addSql('alter table "users" alter column "state" set default 0;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "users" alter column "state" drop default;');
    this.addSql('alter table "users" alter column "state" type int using ("state"::int);');
  }

}
