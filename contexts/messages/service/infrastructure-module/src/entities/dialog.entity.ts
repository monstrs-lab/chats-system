import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Enum }             from '@mikro-orm/core'

import { PeerType }         from '@chats-system/messages-domain-module'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'dialogs' })
export class DialogEntity extends BaseEntity {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Enum({ items: () => PeerType, type: 'smallint', default: PeerType.UNKNOWN })
  peerType: PeerType = PeerType.UNKNOWN

  @Property({ type: NativeBigIntType })
  peerId!: bigint

  @Property({ type: NativeBigIntType })
  topMessageId!: bigint

  @Property({ type: NativeBigIntType })
  readInboxMaxId!: bigint

  @Property({ type: NativeBigIntType })
  readOutboxMaxId!: bigint

  @Property({ default: 0 })
  unreadCount!: number

  @Property()
  createdAt!: Date
}
