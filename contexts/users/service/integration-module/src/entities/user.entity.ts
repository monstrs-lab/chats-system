import { Entity }           from '@mikro-orm/core'
import { Index }            from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Index()
  @Property({ type: 'uuid' })
  externalId!: string

  @Property()
  firstName!: string

  @Property()
  lastName!: string

  @Property()
  createdAt!: Date
}
