import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Unique }           from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_key_users' })
@Unique({ properties: ['authKeyId', 'userId'] })
export class AuthKeyUserEntity extends BaseEntity<AuthKeyUserEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  hash!: bigint

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  dateCreated!: Date

  @Property({ defaultRaw: 'now()' })
  dateActive!: Date

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
