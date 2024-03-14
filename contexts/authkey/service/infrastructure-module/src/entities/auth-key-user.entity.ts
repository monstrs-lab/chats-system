import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Unique }           from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auth_key_users' })
@Unique({ properties: ['authKeyId', 'userId'] })
export class AuthKeyUserEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Property()
  createdAt!: Date
}
