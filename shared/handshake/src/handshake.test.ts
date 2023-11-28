import { describe }  from '@jest/globals'
import { expect }    from '@jest/globals'
import { it }        from '@jest/globals'

import { Handshake } from './handshake.js'

describe('handshake', () => {
  it('check', async () => {
    const sender = new Handshake()
    const receiver = new Handshake()

    const { reqPQMulti } = await sender.sendReqPQMulti()
    const { resPQ } = await receiver.handleReqPQMulti(reqPQMulti)
    const { reqDhParams } = await sender.handleResPQ(resPQ)
    const { serverDHParamsOk } = await receiver.handleReqDHParams(reqDhParams)
    const { setClientDhParams, authKey: senderAuthKey } =
      await sender.handleServerDhParams(serverDHParamsOk)
    const { authKey: receiverAuthKey } = await receiver.handleSetClientDHParams(setClientDhParams)

    expect(receiverAuthKey.authKeyId).toBe(senderAuthKey.authKeyId)
  })
})
