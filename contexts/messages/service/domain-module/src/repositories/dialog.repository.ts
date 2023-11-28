import type { Dialog } from '../entities/index.js'

export abstract class DialogRepository {
  abstract save(dialog: Dialog): Promise<Dialog>
}
