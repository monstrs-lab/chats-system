import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'auths' })
export class AuthEntity extends BaseEntity<AuthEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  authKeyId!: bigint

  @Property({ type: 'integer', default: 0 })
  layer!: number

  @Property({ type: 'integer', default: 0 })
  apiId!: number

  @Property({ type: 'varchar', length: 256, default: '' })
  deviceModel!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  systemVersion!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  appVersion!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  systemLangCode!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  langPack!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  langCode!: string

  @Property({ type: 'varchar', length: 256, default: '' })
  systemCode!: string

  @Property({ type: 'varchar', length: 512, default: '' })
  proxy!: string

  @Property({ type: 'jsonb' })
  params!: object

  @Property({ type: 'varchar', length: 32, default: '' })
  clientIp!: string

  @Property({ type: NativeBigIntType, default: 0 })
  dateActivated!: bigint

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
