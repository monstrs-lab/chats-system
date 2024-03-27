import type { ICommandHandler }  from '@nestjs/cqrs'

import { CommandHandler }        from '@nestjs/cqrs'

import { Message }               from '@chats-system/messages-domain-module'
import { DialogId }              from '@chats-system/messages-domain-module'
import { Dialog }                from '@chats-system/messages-domain-module'

import { SendMessageCommand }    from '../commands/index.js'
import { IdGenPort }             from '../ports/index.js'
import { DialogRepository }      from '../repositories/index.js'
import { SendMessageRepository } from '../repositories/index.js'

@CommandHandler(SendMessageCommand)
export class SendMessageCommandHandler implements ICommandHandler<SendMessageCommand, void> {
  constructor(
    private readonly sendMessageRepository: SendMessageRepository,
    private readonly dialogRepository: DialogRepository,
    private readonly idGenPort: IdGenPort
  ) {}

  async execute(command: SendMessageCommand): Promise<void> {
    const { dialogMessageId, outboxMessageId, inboxMessageId } =
      await this.idGenPort.createMessageIds(command.fromId, command.peerId)

    if (dialogMessageId === 0n || outboxMessageId === 0n || inboxMessageId === 0n) {
      throw new Error('Internal server error: nullable id')
    }

    const dialogId = DialogId.create(command.peerType, command.fromId, command.peerId)

    const outboxMessage = new Message().create(
      outboxMessageId,
      command.randomId,
      command.fromId,
      command.fromId,
      command.peerType,
      command.peerId,
      dialogId.a,
      dialogId.b,
      command.message
    )

    const inboxMessage = new Message().create(
      inboxMessageId,
      command.randomId,
      command.fromId,
      command.peerId,
      command.peerType,
      command.fromId,
      dialogId.a,
      dialogId.b,
      command.message
    )

    let outboxDialog = await this.dialogRepository.findByUserPeer(
      command.fromId,
      command.peerId,
      command.peerType
    )

    if (!outboxDialog) {
      outboxDialog = new Dialog().create(
        command.fromId,
        command.peerType,
        command.peerId,
        outboxMessageId,
        0n,
        0n,
        0
      )
    } else {
      outboxDialog.newMessage(outboxMessageId)
    }

    let inboxDialog = await this.dialogRepository.findByUserPeer(
      command.peerId,
      command.fromId,
      command.peerType
    )

    if (!inboxDialog) {
      inboxDialog = new Dialog().create(
        command.peerId,
        command.peerType,
        command.fromId,
        inboxMessageId,
        0n,
        0n,
        1
      )
    } else {
      inboxDialog.newMessage(inboxMessageId)
    }

    await this.sendMessageRepository.save(outboxMessage, inboxMessage, outboxDialog, inboxDialog)
  }
}
