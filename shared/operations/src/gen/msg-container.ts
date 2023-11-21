import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgContainerValues {
  messages: Array<any>
}

class TLMessage {
  static SIZE_OVERHEAD = 12

  static classType = 'constructor'

  // @ts-expect-error
  constructor(msgId, seqNo, obj) {
    // @ts-expect-error
    this.msgId = msgId
    // @ts-expect-error
    this.seqNo = seqNo
    // @ts-expect-error
    this.obj = obj
    // @ts-expect-error
    this.classType = 'constructor'
  }
}

export class MsgContainer extends TLConstructor<MsgContainerValues> {
  static override CONSTRUCTOR_ID: number = 1945237724
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'messages',
      type: 'Message',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get messages(): Array<any> {
    return this.getParamValue<Array<any>>('messages')
  }

  // @ts-expect-error
  static override fromReader(reader) {
    const messages = []
    const length = reader.readInt()
    for (let x = 0; x < length; x++) {
      const msgId = reader.readLong()
      const seqNo = reader.readInt()
      const containerLength = reader.readInt()
      const before = reader.tellPosition()
      const obj = reader.readObject()
      reader.setPosition(before + containerLength)
      const tlMessage = new TLMessage(msgId, seqNo, obj)
      messages.push(tlMessage)
    }
    return new MsgContainer({ messages })
  }
}
