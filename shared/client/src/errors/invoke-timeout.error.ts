export class InvokeTimeoutError extends Error {
  constructor(message = 'Invoke timeout.') {
    super(message)
  }
}
