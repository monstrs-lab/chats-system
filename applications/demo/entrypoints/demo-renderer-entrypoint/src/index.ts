import { join }          from 'node:path'
import { fileURLToPath } from 'node:url'

import express           from 'express'

const app = express()

app.use(express.static(join(fileURLToPath(new URL('.', import.meta.url)), '../../public')))

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000')
})
