import type { User } from '../entities/index.js'

export abstract class UserRepository {
  abstract save(user: User): Promise<User>

  abstract getById(authKeyId: bigint): Promise<User | undefined>

  abstract getByPhone(phone: string): Promise<User | undefined>

  abstract getByPhoneList(phones: Array<string>): Promise<Array<User>>
}
