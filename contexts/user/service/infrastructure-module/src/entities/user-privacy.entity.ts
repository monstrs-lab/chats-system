import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Enum, Unique }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'
import { PrivacyKeyType, PrivacyRuleType } from '@chats-system/user-rpc'

@Entity({ tableName: 'user_privacies' })
@Unique({ properties: ['userId', 'keyType'] })
export class UserPrivacyEntity extends BaseEntity<UserPrivacyEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Enum({ items: () => PrivacyKeyType, type: 'smallint', default: PrivacyKeyType.KEY_TYPE_INVALID })
  keyType: PrivacyKeyType = PrivacyKeyType.KEY_TYPE_INVALID

  @Property({ type: 'jsonb', default: '[]' })
  rules!: Array<{
    type: PrivacyRuleType,
    users?: Array<bigint>,
    chats?: Array<bigint>
  }>

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
