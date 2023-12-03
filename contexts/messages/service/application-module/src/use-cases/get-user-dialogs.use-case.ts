import type { Dialog }      from '@chats-system/messages-domain-module'

import { Injectable }       from '@nestjs/common'

import { DialogRepository } from '../repositories/index.js'

@Injectable()
export class GetUserDialogsUseCase {
  constructor(private readonly dialogRepository: DialogRepository) {}

  async execute(userId: bigint, folderId: number): Promise<Array<Dialog>> {
    return this.dialogRepository.getByUserFolder(userId, folderId)
  }
}
