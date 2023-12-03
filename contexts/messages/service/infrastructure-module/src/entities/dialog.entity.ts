import { Entity }           from '@mikro-orm/core'
import { Property }         from '@mikro-orm/core'
import { PrimaryKey }       from '@mikro-orm/core'
import { BaseEntity }       from '@mikro-orm/core'
import { Enum }             from '@mikro-orm/core'
import { Unique }           from '@mikro-orm/core'

import { PeerType }         from '@chats-system/messages-domain-module'

import { NativeBigIntType } from '../types/index.js'

@Entity({ tableName: 'dialogs' })
@Unique({ properties: ['userId', 'peerDialogId'] })
@Unique({ properties: ['userId', 'peerId', 'peerType'] })
export class DialogEntity extends BaseEntity<DialogEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Property({ type: NativeBigIntType })
  peerId!: bigint

  @Enum({ items: () => PeerType, type: 'smallint', default: PeerType.UNKNOWN })
  peerType: PeerType = PeerType.UNKNOWN

  @Property({ type: NativeBigIntType })
  peerDialogId!: bigint

  @Property({ type: NativeBigIntType })
  date!: bigint

  @Property({ default: false })
  pinned!: boolean

  @Property({ default: 0 })
  topMessage!: number

  @Property({ default: 0 })
  unreadCount!: number

  @Property({ default: false })
  unreadMark!: boolean

  @Property({ default: 0 })
  readInboxMaxId!: number

  @Property({ default: 0 })
  readOutboxMaxId!: number

  @Property({ default: 0 })
  unreadMentionsCount!: number

  @Property({ default: 0 })
  unreadReactionsCount!: number

  @Property({ default: 0 })
  folderId?: number

  @Property({ type: NativeBigIntType, default: 0 })
  folderPinned?: bigint

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
