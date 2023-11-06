import { ServerIdData } from '../data/index.js'

export enum SessionState {
  NEW = 0,
  CREATED = 1,
}

export enum ConnectionState {
  NEW = 0,
  ONLINE = 1,
  OFFLINE = 2,
  CLOSE = 3,
}

export class AuthSession {
  private sessionState: SessionState = SessionState.NEW

  private gatewayIdList: Array<ServerIdData> = []

  private connectionState: ConnectionState

  private generic: boolean

  private nextSeqNo: number

  addGatewayId(gatewayId: string): void {
    for (const id of this.gatewayIdList) {
      if (id.equal(gatewayId)) {
        return
      }
    }

    this.gatewayIdList.push(new ServerIdData(gatewayId, Date.now()))
  }

  getGatewayId(): string {
    if (this.gatewayIdList.length > 0) {
      return this.gatewayIdList[this.gatewayIdList.length - 1].gatewayId
    } else {
      return ''
    }
  }

  checkGatewayIdExist(gateId: string): boolean {
    return Boolean(this.gatewayIdList.find((id) => id.equal(gateId)))
  }

  setSessionState(sessionState: SessionState) {
    this.sessionState = sessionState
  }

  setConnectionState(connectionState: ConnectionState) {
    this.connectionState = connectionState
  }

  isGeneric(): boolean {
    return this.generic
  }

  setGeneric(generic: boolean) {
    this.generic = generic
  }

  isOnline(): boolean {
    return this.connectionState === ConnectionState.ONLINE
  }

  isClosed(): boolean {
    return this.connectionState === ConnectionState.CLOSE
  }

  generateMessageSeqNo(increment: boolean): number {
    const value = this.nextSeqNo

    if (increment) {
      this.nextSeqNo++

      return value * 2 + 1
    } else {
      return value * 2
    }
  }

  async onTimer(): Promise<void> {}

  async onConnectionNew(gatewayId: string): Promise<void> {
    if (this.connectionState !== ConnectionState.ONLINE) {
      this.changeConnectionState(ConnectionState.ONLINE)
      this.addGatewayId(gatewayId)
    }
  }

  async onConnectionClose(gatewayId: string): Promise<void> {
    const idx = this.gatewayIdList.findIndex((cId) => cId.equal(gatewayId))

    if (idx !== -1) {
      this.gatewayIdList.splice(idx, 1)
    }

    if (this.gatewayIdList.length === 0) {
      this.changeConnectionState(ConnectionState.OFFLINE)
    }
  }

  protected changeConnectionState(connectionState: ConnectionState) {
    this.connectionState = connectionState

    if (this.isGeneric()) {
      if (connectionState === ConnectionState.ONLINE) {
        //this.cb.setOnline()
      } else if (connectionState === ConnectionState.OFFLINE) {
        //this.cb.trySetOffline()
      }
    }
  }
}
