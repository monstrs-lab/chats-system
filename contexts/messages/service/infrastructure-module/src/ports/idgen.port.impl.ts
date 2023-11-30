import { IdGenPort } from '@chats-system/messages-domain-module'
import {IdGen} from '@chats-system/idgen'

export class IdGenPortImpl extends IdGenPort {
    override async createMessageIds(key: bigint): Promise<{ dialogMessageId: bigint; outboxMessageId: bigint; pts: bigint }> {
        const idGen = new IdGen()

        const dialogMessageId = await idGen.getNextId()
        const outboxMessageId = await idGen.getNextMessageBoxUpdatesId(key)
        const pts = await idGen.getNextPtsId(key)

        return {
            dialogMessageId: dialogMessageId || 0n,
            outboxMessageId: outboxMessageId || 0n,
            pts: pts || 0n
        }
    }
}