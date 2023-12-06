import { CoreError } from '@chats-system/core-errors'

export class PeerIdInvalidError extends CoreError {
  override id: string = 'PEER_ID_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string =
    'The peer id being used is invalid or not known yet. Make sure you meet the peer before interacting with it'
}
