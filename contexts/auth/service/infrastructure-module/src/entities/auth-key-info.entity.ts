import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_key_infos' })
export class AuthKeyInfoEntity extends BaseEntity<AuthKeyInfoEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: 'integer' })
  authKeyType!: number

  @Property({ type: NativeBigIntType, default: 0 })
  permAuthKeyId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  tempAuthKeyId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  mediaTempAuthKeyId!: bigint

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
