import type { User } from '../entities/index.js'

export abstract class UserRepository {
  abstract save(user: User): Promise<User>

  abstract getById(userId: bigint): Promise<User | undefined>

  abstract getByIds(userIds: Array<bigint>): Promise<Array<User>>

  abstract getByPhone(phone: string): Promise<User | undefined>

  abstract getByPhoneList(phones: Array<string>): Promise<Array<User>>
}
