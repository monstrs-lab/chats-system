import { Injectable }                 from '@nestjs/common'

import { GetUserDialogsUseCase }      from './get-user-dialogs.use-case.js'
import { GetUserMessagesUseCase }     from './get-user-messages.use-case.js'
import { GetUserPeerMessagesUseCase } from './get-user-peer-messages.use-case.js'
import { ReadUserMessagesUseCase }    from './read-user-messages.use-case.js'
import { SendMessageUseCase }         from './send-message.use-case.js'

@Injectable()
export class MessagesUseCases {
  constructor(
    public readonly sendMessage: SendMessageUseCase,
    public readonly getUserDialogs: GetUserDialogsUseCase,
    public readonly getUserMessages: GetUserMessagesUseCase,
    public readonly getUserPeerMessages: GetUserPeerMessagesUseCase,
    public readonly readUserMessages: ReadUserMessagesUseCase
  ) {}
}
