import type { TLObject } from '@chats-system/tl'

export class WaitResponse {
  value!: Promise<InstanceType<typeof TLObject>>

  reject!: (reason: any) => void

  resolve!: (value: InstanceType<typeof TLObject>) => void

  constructor() {
    this.value = new Promise((resolve, reject) => {
      this.reject = reject
      this.resolve = resolve
    })
  }
}
