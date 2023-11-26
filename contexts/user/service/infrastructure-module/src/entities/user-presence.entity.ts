import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Unique }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Unique({ properties: ['userId'] })
@Entity({ tableName: 'user_presences' })
export class UserPresenceEntity extends BaseEntity<UserPresenceEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Property({ type: NativeBigIntType })
  lastSeenAt!: bigint

  @Property({ type: 'int', default: 0 })
  expires!: number

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
