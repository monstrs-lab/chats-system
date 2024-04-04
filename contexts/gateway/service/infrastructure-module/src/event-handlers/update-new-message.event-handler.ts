import type { IEventHandler }  from '@nestjs/cqrs'

import { EventsHandler }       from '@nestjs/cqrs'

import * as Transport          from '@chats-system/transport'
import { MessageCreatedEvent } from '@chats-system/messages-domain-module'

import { ChatsSystemEmitter }  from '../gateway/index.js'

@EventsHandler(MessageCreatedEvent)
export class UpdateNewMessageEventHandler implements IEventHandler<MessageCreatedEvent> {
  constructor(private readonly emitter: ChatsSystemEmitter) {}

  async handle(event: MessageCreatedEvent): Promise<void> {
    if (event.userId !== event.fromId) {
      this.emitter.emitToUser(
        event.userId,
        new Transport.Updates({
          updates: [
            new Transport.UpdateNewMessage({
              message: new Transport.Message({
                out: false,
                id: event.messageId,
                fromId: new Transport.PeerUser({
                  userId: event.fromId,
                }),
                peerId: new Transport.PeerUser({
                  userId: event.peerId,
                }),
                message: event.message,
              }),
            }),
          ],
        })
      )
    }
  }
}
