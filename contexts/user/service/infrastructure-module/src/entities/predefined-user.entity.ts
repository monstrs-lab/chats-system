import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Unique }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Unique({ properties: ['phone'] })
@Entity({ tableName: 'predefined_users' })
export class PredefinedUserEntity extends BaseEntity<PredefinedUserEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: 'varchar', length: 32 })
  phone!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  firstName!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  lastName!: string

  @Property({ type: 'varchar', length: 256 })
  username!: string

  @Property({ type: 'varchar', length: 32 })
  code!: string

  @Property()
  verified!: boolean

  @Property({ type: NativeBigIntType })
  registeredUserId!: bigint

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
