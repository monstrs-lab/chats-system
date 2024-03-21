import { Guard }                 from '@monstrs/guard-clause'
import { Against }               from '@monstrs/guard-clause'
import { AggregateRoot }         from '@nestjs/cqrs'
import random                    from 'crypto-random-bigint'

import { PeerType }              from '../enums/index.js'
import { DialogCreatedEvent }    from '../events/index.js'
import { DialogNewMessageEvent } from '../events/index.js'

export class Dialog extends AggregateRoot {
  #id!: bigint

  #userId!: bigint

  #peerType!: PeerType

  #peerId!: bigint

  #topMessageId!: bigint

  #readInboxMaxId!: bigint

  #readOutboxMaxId!: bigint

  #unreadCount!: number

  #createdAt!: Date

  get id(): bigint {
    return this.#id
  }

  private set id(id: bigint) {
    this.#id = id
  }

  get userId(): bigint {
    return this.#userId
  }

  private set userId(userId: bigint) {
    this.#userId = userId
  }

  get peerType(): PeerType {
    return this.#peerType
  }

  private set peerType(peerType: PeerType) {
    this.#peerType = peerType
  }

  get peerId(): bigint {
    return this.#peerId
  }

  private set peerId(peerId: bigint) {
    this.#peerId = peerId
  }

  get topMessageId(): bigint {
    return this.#topMessageId
  }

  private set topMessageId(topMessageId: bigint) {
    this.#topMessageId = topMessageId
  }

  get readInboxMaxId(): bigint {
    return this.#readInboxMaxId
  }

  private set readInboxMaxId(readInboxMaxId: bigint) {
    this.#readInboxMaxId = readInboxMaxId
  }

  get readOutboxMaxId(): bigint {
    return this.#readOutboxMaxId
  }

  private set readOutboxMaxId(readOutboxMaxId: bigint) {
    this.#readOutboxMaxId = readOutboxMaxId
  }

  get unreadCount(): number {
    return this.#unreadCount
  }

  private set unreadCount(unreadCount: number) {
    this.#unreadCount = unreadCount
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  private set createdAt(createdAt: Date) {
    this.#createdAt = createdAt
  }

  @Guard()
  create(
    @Against('userId').NotBigInt() userId: bigint,
    @Against('peerType').NotEnum(PeerType) peerType: PeerType,
    @Against('peerId').NotBigInt() peerId: bigint,
    @Against('topMessageId').NotBigInt() topMessageId: bigint,
    @Against('readInboxMaxId').NotBigInt() readInboxMaxId: bigint,
    @Against('readOutboxMaxId').NotBigInt() readOutboxMaxId: bigint,
    @Against('unreadCount').NotNumberBetween(0, Infinity) unreadCount: number
  ): Dialog {
    this.apply(
      new DialogCreatedEvent(
        random(63),
        userId,
        peerType,
        peerId,
        topMessageId,
        readInboxMaxId,
        readOutboxMaxId,
        unreadCount,
        new Date()
      )
    )

    return this
  }

  @Guard()
  newMessage(@Against('topMessageId').NotBigInt() topMessageId: bigint): Dialog {
    this.apply(new DialogNewMessageEvent(this.#id, topMessageId, this.unreadCount + 1))

    return this
  }

  protected onDialogCreatedEvent(event: DialogCreatedEvent): void {
    this.#id = event.userId
    this.#userId = event.userId
    this.#peerType = event.peerType
    this.#peerId = event.peerId
    this.#topMessageId = event.topMessageId
    this.#readInboxMaxId = event.readInboxMaxId
    this.#readOutboxMaxId = event.readOutboxMaxId
    this.#unreadCount = event.unreadCount
    this.#createdAt = event.createdAt
  }

  protected onDialogNewMessageEvent(event: DialogNewMessageEvent): void {
    this.#topMessageId = event.topMessageId
    this.#unreadCount = event.unreadCount
  }
}
