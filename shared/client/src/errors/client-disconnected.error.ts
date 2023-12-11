export class ClientDisconnectedError extends Error {
  constructor(message = 'Client Disconnected.') {
    super(message)
  }
}
