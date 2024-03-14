import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_keys' })
export class AuthKeyEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: 'varchar', length: 512 })
  key!: string

  @Property()
  createdAt!: Date
}
