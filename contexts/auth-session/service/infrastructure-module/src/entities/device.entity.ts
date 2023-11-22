import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'devices' })
export class DeviceEntity extends BaseEntity<DeviceEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: NativeBigIntType, default: 0 })
  userId!: bigint

  @Property({ type: 'integer', default: 0 })
  tokenType!: number

  @Property({ type: 'varchar', length: 512 })
  token!: string

  @Property({ default: false })
  noMuted!: boolean

  @Property({ type: 'integer', default: 0 })
  lockedPeriod!: number

  @Property({ default: false })
  appSandbox!: boolean

  @Property({ type: 'varchar', length: 1024, default: '' })
  secret!: string

  @Property({ type: 'varchar', length: 1024, default: '' })
  otherUids!: string

  @Property({ default: false })
  state!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
