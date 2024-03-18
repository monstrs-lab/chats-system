import { Guard }            from '@monstrs/guard-clause'
import { Against }          from '@monstrs/guard-clause'
import { AggregateRoot }    from '@nestjs/cqrs'

import { UserCreatedEvent } from '../events/index.js'

export class User extends AggregateRoot {
  #id!: bigint

  #externalId!: string

  #firstName!: string

  #lastName!: string

  #createdAt!: Date

  get id(): bigint {
    return this.#id
  }

  private set id(id: bigint) {
    this.#id = id
  }

  get externalId(): string {
    return this.#externalId
  }

  private set externalId(externalId: string) {
    this.#externalId = externalId
  }

  get firstName(): string {
    return this.#firstName
  }

  private set firstName(firstName: string) {
    this.#firstName = firstName
  }

  get lastName(): string {
    return this.#lastName
  }

  private set lastName(lastName: string) {
    this.#lastName = lastName
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
    @Against('externalId').NotUUID(4) externalId: string,
    @Against('firstName').Empty() firstName: string,
    @Against('lastName').Empty() lastName: string
  ): User {
    this.apply(new UserCreatedEvent(id, externalId, firstName, lastName, new Date()))

    return this
  }

  protected onUserCreatedEvent(event: UserCreatedEvent): void {
    this.#id = event.userId
    this.#externalId = event.externalId
    this.#firstName = event.firstName
    this.#lastName = event.lastName
    this.#createdAt = event.createdAt
  }
}
