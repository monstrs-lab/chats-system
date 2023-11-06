export class ServerIdData {
  gatewayId: string
  lastReceiveTime: number

  constructor(gatewayId: string, lastReceiveTime: number) {
    this.gatewayId = gatewayId
    this.lastReceiveTime = lastReceiveTime
  }

  equal(id: string): boolean {
    return this.gatewayId === id
  }
}
