import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity, Enum }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'
import { SendCodeType, SentCodeState } from '../enums/index.js'

@Entity({ tableName: 'sent_codes' })
export class SentCodeEntity extends BaseEntity<SentCodeEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType })
  sessionId!: bigint

  @Property({ type: 'varchar', length: 32 })
  phoneNumber!: string

  @Property({ default: false })
  phoneNumberRegistered!: boolean

  @Property({ type: 'varchar', length: 256, default: '' })
  phoneCode!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  phoneCodeHash!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  phoneCodeExtraData!: string

  @Property({ type: 'int', default: 0 })
  phoneCodeExpired!: number

  @Property({ type: 'varchar', length: 256, default: '' })
  flashCallPattern!: string

  @Enum({ items: () => SendCodeType, type: 'smallint', default: SendCodeType.NONE })
  sentCodeType: SendCodeType = SendCodeType.NONE

  @Enum({ items: () => SendCodeType, type: 'smallint', default: SendCodeType.NONE })
  nextCodeType: SendCodeType = SendCodeType.NONE
  
  @Enum({ items: () => SentCodeState, type: 'smallint', default: SentCodeState.OK })
  state: SentCodeState = SentCodeState.OK

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
