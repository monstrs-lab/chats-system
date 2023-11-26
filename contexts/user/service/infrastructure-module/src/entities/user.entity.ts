import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Unique }       from '@mikro-orm/core'

import { Enum } from '@mikro-orm/core'

import { UserType }         from '@chats-system/user-rpc'
import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'users' })
@Unique({ properties: ['phone'] })
export class UserEntity extends BaseEntity<UserEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Enum({ items: () => UserType, type: 'smallint', default: UserType.REGULAR })
  userType: UserType = UserType.REGULAR

  @Property({ type: NativeBigIntType })
  accessHash!: bigint

  @Property({ type: NativeBigIntType })
  secretKeyId!: bigint

  @Property({ type: 'varchar', length: 256, default: '' })
  firstName!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  lastName!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  username!: string

  @Property({ type: 'varchar', length: 32 })
  phone!: string

  @Property({ type: 'varchar', length: 3 })
  countryCode!: string

  @Property({ default: false })
  verified!: boolean

  @Property({ default: false })
  support!: boolean

  @Property({ default: false })
  scam!: boolean

  @Property({ default: false })
  fake!: boolean

  @Property({ type: 'varchar', length: 128, nullable: true })
  about?: string

  @Property({ type: 'int', default: 0 })
  state!: number

  @Property({ default: false })
  isBot!: boolean

  @Property({ type: 'int', default: 180 })
  accountDaysTtl!: number

  @Property({ type: NativeBigIntType, nullable: true })
  photoId!: bigint

  @Property({ default: false })
  restricted!: boolean

  @Property({ type: 'jsonb', default: '[]' })
  restrictionReason!: Array<{
    platform: string,
    reason: string,
    text: string
  }>

  @Property({ default: false })
  archiveAndMuteNewNoncontactPeers!: boolean

  @Property({ default: false })
  premium!: boolean

  @Property({ type: NativeBigIntType, default: 0n as any })
  emojiStatusDocumentId!: bigint

  @Property({ type: 'int', default: 0 })
  emojiStatusUntil!: number

  @Property({ default: false })
  deleted!: boolean

  @Property({ type: 'varchar', length: 128, nullable: true })
  deleteReason?: string

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
