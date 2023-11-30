import type { UserContact } from '../entities/index.js'

export abstract class UserContactRepository {
  abstract save(userContact: UserContact): Promise<UserContact>

  abstract getById(id: bigint): Promise<UserContact | undefined>

  abstract getByUserId(id: bigint): Promise<Array<UserContact>>

  abstract getMyContactById(userId: bigint, contactId: bigint): Promise<UserContact | undefined>

  abstract getByUserIdList(userId: bigint, ids: Array<bigint>): Promise<Array<UserContact>>
}
