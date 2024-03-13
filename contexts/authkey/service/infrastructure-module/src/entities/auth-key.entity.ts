import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Enum }             from '@mikro-orm/core'

import { AuthKeyType }      from '@chats-system/authkey-domain-module'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_keys' })
export class AuthKeyEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  authKeyId!: bigint

  @Enum({ items: () => AuthKeyType, type: 'smallint', default: AuthKeyType.UNKNOWN })
  authKeyType: AuthKeyType = AuthKeyType.UNKNOWN

  @Property({ type: 'varchar', length: 512 })
  authKey!: string

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
