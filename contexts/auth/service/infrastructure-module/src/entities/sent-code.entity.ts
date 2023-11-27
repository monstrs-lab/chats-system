import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Enum }             from '@mikro-orm/core'

import { SentCodeState }    from '@chats-system/auth-domain-module'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'sent_codes' })
export class SentCodeEntity extends BaseEntity<SentCodeEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Enum({ items: () => SentCodeState, type: 'smallint', default: SentCodeState.OK })
  state: SentCodeState = SentCodeState.OK

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType })
  sessionId!: bigint

  @Property({ type: 'varchar', length: 32 })
  phone!: string

  @Property({ default: false })
  phoneRegistered!: boolean

  @Property({ type: 'varchar', length: 256, default: '' })
  phoneCode!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  phoneCodeHash!: string

  @Property({ type: 'int', default: 0 })
  phoneCodeExpired!: number

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
