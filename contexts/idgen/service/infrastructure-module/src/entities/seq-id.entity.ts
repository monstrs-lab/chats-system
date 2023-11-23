import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'seq_ids' })
export class SeqIdEntity extends BaseEntity<SeqIdEntity, 'key'> {
  @PrimaryKey({ type: 'varchar' })
  key!: string

  @Property({ type: NativeBigIntType })
  id!: bigint
}
