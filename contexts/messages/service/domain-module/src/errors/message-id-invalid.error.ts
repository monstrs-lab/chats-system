import { CoreError } from '@chats-system/core-errors'

export class MessageIdInvalidError extends CoreError {
  override id: string = 'MESSAGE_ID_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The message id is invalid'
}
