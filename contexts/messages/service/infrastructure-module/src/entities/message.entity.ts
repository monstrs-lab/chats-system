import { Entity }            from '@mikro-orm/core'
import { Property }          from '@mikro-orm/core'
import { PrimaryKey }        from '@mikro-orm/core'
import { BaseEntity }        from '@mikro-orm/core'
import { Unique }            from '@mikro-orm/core'
import { Enum }              from '@mikro-orm/core'
import { Index }             from '@mikro-orm/core'

import { PeerType }          from '@chats-system/messages-domain-module'
import { MessageFilterType } from '@chats-system/messages-domain-module'

import { NativeBigIntType }  from '../types/index.js'

@Entity({ tableName: 'messages' })
@Unique({ properties: ['userId', 'messageId'] })
@Index({ properties: ['userId', 'dialogId1', 'dialogId2'] })
export class MessageEntity extends BaseEntity<MessageEntity, 'id'> {
  @PrimaryKey({ type: NativeBigIntType })
  id!: bigint

  @Property({ type: NativeBigIntType })
  randomId!: bigint

  @Property({ type: NativeBigIntType })
  userId!: bigint

  @Property()
  messageId!: number

  @Property({ type: NativeBigIntType })
  dialogId1!: bigint

  @Property({ type: NativeBigIntType })
  dialogId2!: bigint

  @Property({ type: NativeBigIntType })
  dialogMessageId!: bigint

  @Property({ type: NativeBigIntType })
  senderUserId!: bigint

  @Property({ type: NativeBigIntType })
  peerId!: bigint

  @Enum({ items: () => PeerType, type: 'smallint', default: PeerType.UNKNOWN })
  peerType: PeerType = PeerType.UNKNOWN

  @Enum({ items: () => MessageFilterType, type: 'smallint', default: MessageFilterType.EMPTY })
  messageFilterType: MessageFilterType = MessageFilterType.EMPTY

  @Property({ type: 'jsonb', default: '{}' })
  messageData!: object

  @Property({ type: 'varchar', length: 6000 })
  message!: string

  @Property()
  date!: number

  @Property({ default: false })
  mentioned!: boolean

  @Property({ default: false })
  mediaUnread!: boolean

  @Property({ default: false })
  pinned!: boolean

  @Property({ default: false })
  deleted!: boolean

  @Property({ defaultRaw: 'now()' })
  createdAt!: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
