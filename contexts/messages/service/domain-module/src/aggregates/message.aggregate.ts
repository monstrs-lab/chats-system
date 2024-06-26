import { Guard }               from '@monstrs/guard-clause'
import { Against }             from '@monstrs/guard-clause'
import { AggregateRoot }       from '@nestjs/cqrs'
import random                  from 'crypto-random-bigint'

import { PeerType }            from '../enums/index.js'
import { MessageCreatedEvent } from '../events/index.js'

export class Message extends AggregateRoot {
  #id!: bigint

  #messageId!: bigint

  #randomId!: bigint

  #fromId!: bigint

  #userId!: bigint

  #peerType!: PeerType

  #peerId!: bigint

  #dialogId1!: bigint

  #dialogId2!: bigint

  #message!: string

  #createdAt!: Date

  get id(): bigint {
    return this.#id
  }

  private set id(id: bigint) {
    this.#id = id
  }

  get messageId(): bigint {
    return this.#messageId
  }

  private set messageId(messageId: bigint) {
    this.#messageId = messageId
  }

  get randomId(): bigint {
    return this.#randomId
  }

  private set randomId(randomId: bigint) {
    this.#randomId = randomId
  }

  get fromId(): bigint {
    return this.#fromId
  }

  private set fromId(fromId: bigint) {
    this.#fromId = fromId
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

  get dialogId1(): bigint {
    return this.#dialogId1
  }

  private set dialogId1(dialogId1: bigint) {
    this.#dialogId1 = dialogId1
  }

  get dialogId2(): bigint {
    return this.#dialogId2
  }

  private set dialogId2(dialogId2: bigint) {
    this.#dialogId2 = dialogId2
  }

  get message(): string {
    return this.#message
  }

  private set message(message: string) {
    this.#message = message
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  private set createdAt(createdAt: Date) {
    this.#createdAt = createdAt
  }

  @Guard()
  create(
    @Against('messageId').NotBigInt() messageId: bigint,
    @Against('randomId').NotBigInt() randomId: bigint,
    @Against('fromId').NotBigInt() fromId: bigint,
    @Against('userId').NotBigInt() userId: bigint,
    @Against('peerType').NotEnum(PeerType) peerType: PeerType,
    @Against('peerId').NotBigInt() peerId: bigint,
    @Against('dialogId1').NotBigInt() dialogId1: bigint,
    @Against('dialogId2').NotBigInt() dialogId2: bigint,
    @Against('message').Empty() message: string
  ): Message {
    this.apply(
      new MessageCreatedEvent(
        random(63),
        messageId,
        randomId,
        fromId,
        userId,
        peerType,
        peerId,
        dialogId1,
        dialogId2,
        message,
        new Date()
      )
    )

    return this
  }

  protected onMessageCreatedEvent(event: MessageCreatedEvent): void {
    this.#id = event.id
    this.#messageId = event.messageId
    this.#randomId = event.randomId
    this.#fromId = event.fromId
    this.#userId = event.userId
    this.#peerType = event.peerType
    this.#peerId = event.peerId
    this.#dialogId1 = event.dialogId1
    this.#dialogId2 = event.dialogId2
    this.#message = event.message
    this.#createdAt = event.createdAt
  }
}
