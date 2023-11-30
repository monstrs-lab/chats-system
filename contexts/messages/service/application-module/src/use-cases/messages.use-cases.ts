import { Injectable }                from '@nestjs/common'

import { CreateMessageUseCase } from './create-message.use-case.js'
import { GetDialogsUseCase} from './get-dialogs.use-case.js'
import { GetHistoryUseCase} from './get-history.use-case.js'

@Injectable()
export class MessagesUseCases {
  constructor(
    public readonly createMessage: CreateMessageUseCase,
    public readonly getDialogs: GetDialogsUseCase,
    public readonly getHistory: GetHistoryUseCase
  ) {}
}
