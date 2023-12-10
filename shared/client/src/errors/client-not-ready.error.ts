export class ClientNotReadyError extends Error {
  constructor(message = 'Client is already disconnected to server.') {
    super(message)
  }
}
