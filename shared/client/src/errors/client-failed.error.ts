export class ClientFailedError extends Error {
  constructor(message = 'Client failed to connect to server.') {
    super(message)
  }
}
