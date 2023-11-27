import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'users' })
export class UserEntity extends BaseEntity<UserEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  accessHash!: bigint

  @Property({ type: NativeBigIntType })
  secretKeyId!: bigint

  @Property({ type: 'varchar', length: 256, default: '' })
  firstName!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  lastName!: string

  @Property({ type: 'varchar', length: 32 })
  phone!: string

  @Property({ type: 'varchar', length: 256, nullable: true })
  username?: string

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
