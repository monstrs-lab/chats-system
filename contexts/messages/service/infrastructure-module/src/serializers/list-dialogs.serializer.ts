import type { Dialog }         from '@chats-system/messages-domain-module'

import { ListDialogsResponse } from '@chats-system/messages-rpc/abstractions'

import { DialogSerializer }    from './dialog.serializer.js'

export class ListDialogsSerializer extends ListDialogsResponse {
  constructor(private readonly serializable: { dialogs: Array<Dialog>; hasNextPage: boolean }) {
    super()
  }

  get dialogs(): Array<DialogSerializer> {
    return this.serializable.dialogs.map((dialog) => new DialogSerializer(dialog))
  }

  get hasNextPage(): boolean {
    return this.serializable.hasNextPage
  }
}
