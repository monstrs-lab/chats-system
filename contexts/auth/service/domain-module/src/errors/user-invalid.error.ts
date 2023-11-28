import { CoreError } from '@chats-system/core-errors'

export class UserInvalidError extends CoreError {
  override id: string = 'USER_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The provided user is invalid'
}
