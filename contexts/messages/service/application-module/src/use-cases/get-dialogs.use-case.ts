import { Injectable }                                                          from '@nestjs/common'

import  type { Dialog }                                         from '@chats-system/messages-domain-module'

import { DialogRepository }                     from '@chats-system/messages-domain-module'

@Injectable()
export class GetDialogsUseCase {
  constructor(
    private readonly dialogRepository: DialogRepository,
  ) {}

  async execute(
    userId: bigint,
    folderId: number
  ): Promise<Array<Dialog>> {
    return this.dialogRepository.getByUserFolder(userId, folderId)
  }
}
