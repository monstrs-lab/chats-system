import type { FindUsersByQuery } from '../repositories/index.js'

export class ListUsersQuery {
  constructor(
    public readonly pager: FindUsersByQuery['pager'],
    public readonly order?: FindUsersByQuery['order'],
    public readonly query?: FindUsersByQuery['query']
  ) {}
}
