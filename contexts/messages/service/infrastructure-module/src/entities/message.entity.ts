import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Enum }             from '@mikro-orm/core'

import { PeerType }         from '@chats-system/messages-domain-module'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'messages' })
export class MessageEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  randomId!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Enum({ items: () => PeerType, type: 'smallint', default: PeerType.UNKNOWN })
  peerType: PeerType = PeerType.UNKNOWN

  @Property({ type: NativeBigIntType })
  peerId!: bigint

  @Property({ type: NativeBigIntType })
  dialogId1!: bigint

  @Property({ type: NativeBigIntType })
  dialogId2!: bigint

  @Property({ type: 'varchar', length: 6000 })
  message!: string

  @Property()
  createdAt!: Date
}
