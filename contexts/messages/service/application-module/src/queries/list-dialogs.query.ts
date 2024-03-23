import type { FindDialogsByQuery } from '../repositories/index.js'

export class ListDialogsQuery {
  constructor(
    public readonly pager: FindDialogsByQuery['pager'],
    public readonly order?: FindDialogsByQuery['order'],
    public readonly query?: FindDialogsByQuery['query']
  ) {}
}
