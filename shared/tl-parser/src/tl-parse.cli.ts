import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { program }           from 'commander'

import { TLParser } from './tl.parser.js'

program
  .option('--input <input>')
  .option('--output <output>')


program.parse()

const options = program.opts()

const input = await readFile(join(process.cwd(), options.input), 'utf8')

await writeFile(join(process.cwd(), options.output), JSON.stringify(
    new TLParser().parse(JSON.parse(input))
))
