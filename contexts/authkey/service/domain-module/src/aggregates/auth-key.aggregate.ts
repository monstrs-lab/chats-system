import { Guard }               from '@monstrs/guard-clause'
import { Against }             from '@monstrs/guard-clause'
import { AggregateRoot }       from '@nestjs/cqrs'

import { AuthKeyCreatedEvent } from '../events/index.js'

export class AuthKey extends AggregateRoot {
  #id!: bigint

  #key!: Buffer

  #createdAt!: Date

  get id(): bigint {
    return this.#id
  }

  private set id(id: bigint) {
    this.#id = id
  }

  get key(): Buffer {
    return this.#key
  }

  private set key(key: Buffer) {
    this.#key = key
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
    @Against('key').NotInstance(Buffer) key: Buffer
  ): AuthKey {
    this.apply(new AuthKeyCreatedEvent(id, key, new Date()))

    return this
  }

  protected onAuthKeyCreatedEvent(event: AuthKeyCreatedEvent): void {
    this.#id = event.authKeyId
    this.#key = event.key
    this.#createdAt = event.createdAt
  }
}
