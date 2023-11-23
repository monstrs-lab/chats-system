import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_users' })
export class AuthUserEntity extends BaseEntity<AuthUserEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  userId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  hash!: bigint

  @Property({ type: 'integer', default: 0 })
  layer!: number

  @Property({ type: 'varchar', length: 128, default: '' })
  deviceModel!: string

  @Property({ type: 'varchar', length: 64, default: '' })
  platform!: string

  @Property({ type: 'varchar', length: 64, default: '' })
  systemVersion!: string

  @Property({ type: 'integer', default: 0 })
  appId!: number

  @Property({ type: 'varchar', length: 64, default: '' })
  appName!: string

  @Property({ type: 'varchar', length: 64, default: '' })
  appVersion!: string

  @Property({ nullable: true })
  dateCreated!: Date

  @Property({ nullable: true })
  dateActive!: Date

  @Property({ type: 'varchar', length: 64, default: '' })
  ip!: string

  @Property({ type: 'varchar', length: 64, default: '' })
  country!: string

  @Property({ type: 'varchar', length: 64, default: '' })
  region!: string

  @Property({ type: 'integer', default: 0 })
  state!: number

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
