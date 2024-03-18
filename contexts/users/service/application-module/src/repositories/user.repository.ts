import type { User }  from '@chats-system/users-domain-module'
import type { Query } from '@monstrs/query-types'

export interface UsersQuery {
  id?: Query.BigIntType
  externalId?: Query.IDType
}

export interface FindUsersByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: UsersQuery
}

export interface FindUsersByQueryResult {
  users: Array<User>
  hasNextPage: boolean
}

export abstract class UserRepository {
  abstract save(user: User): Promise<User>

  abstract findById(userId: bigint): Promise<User | undefined>

  abstract findByExternalId(externalId: string): Promise<User | undefined>

  abstract findByQuery(query: FindUsersByQuery): Promise<FindUsersByQueryResult>
}
