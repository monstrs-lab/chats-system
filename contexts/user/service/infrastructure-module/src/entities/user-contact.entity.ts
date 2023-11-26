import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Unique }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'user_contacts' })
@Unique({ properties: ['ownerUserId', 'contactUserId'] })
export class UserContactEntity extends BaseEntity<UserContactEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  ownerUserId!: bigint

  @Property({ type: NativeBigIntType })
  contactUserId!: bigint

  @Property({ type: 'varchar', length: 32 })
  contactPhone!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  contactFirstName!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  contactLastName!: string

  @Property({ default: false })
  mutual!: boolean

  @Property({ default: false })
  isDeleted!: boolean

  @Property({ type: NativeBigIntType })
  date2!: bigint

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
