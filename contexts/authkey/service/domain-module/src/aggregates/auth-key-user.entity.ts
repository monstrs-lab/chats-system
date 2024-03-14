import { Guard }                   from '@monstrs/guard-clause'
import { Against }                 from '@monstrs/guard-clause'
import { AggregateRoot }           from '@nestjs/cqrs'

import { AuthKeyUserCreatedEvent } from '../events/index.js'

export class AuthKeyUser extends AggregateRoot {
  #id!: bigint

  #authKeyId!: bigint

  #userId!: bigint

  #createdAt!: Date

  get id(): bigint {
    return this.#id
  }

  private set id(id: bigint) {
    this.#id = id
  }

  get authKeyId(): bigint {
    return this.#authKeyId
  }

  private set authKeyId(authKeyId: bigint) {
    this.#authKeyId = authKeyId
  }

  get userId(): bigint {
    return this.#userId
  }

  private set userId(userId: bigint) {
    this.#userId = userId
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  private set createdAt(createdAt: Date) {
    this.#createdAt = createdAt
  }

  @Guard()
  create(
    @Against('id').NotBigInt() id: bigint,
    @Against('authKeyId').NotBigInt() authKeyId: bigint,
    @Against('userId').NotBigInt() userId: bigint
  ): AuthKeyUser {
    this.apply(new AuthKeyUserCreatedEvent(id, authKeyId, userId, new Date()))

    return this
  }

  protected onAuthKeyUserCreatedEvent(event: AuthKeyUserCreatedEvent): void {
    this.#id = event.authKeyId
    this.#authKeyId = event.authKeyId
    this.#userId = event.userId
    this.#createdAt = event.createdAt
  }
}
