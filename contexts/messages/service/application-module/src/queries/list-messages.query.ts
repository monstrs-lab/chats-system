import type { FindMessagesByQuery } from '../repositories/index.js'

export class ListMessagesQuery {
  constructor(
    public readonly pager: FindMessagesByQuery['pager'],
    public readonly order?: FindMessagesByQuery['order'],
    public readonly query?: FindMessagesByQuery['query']
  ) {}
}
