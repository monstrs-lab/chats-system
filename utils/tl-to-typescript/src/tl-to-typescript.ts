import { TLSchema }           from '@chats-system/tl-json-schema'
import { TLJsonSchemaParser } from '@chats-system/tl-json-schema-parser'

import { TLSchemaGenerator }  from './generators/index.js'

export interface TLToTypeScriptOptions {
  outDir: string
}

export class TLToTypeScript {
  private schemaGenerator: TLSchemaGenerator

  constructor(options: TLToTypeScriptOptions) {
    this.schemaGenerator = new TLSchemaGenerator(options)
  }
  async execute(schema: TLSchema): Promise<void> {
    const parsed = new TLJsonSchemaParser().parse(schema)

    await this.schemaGenerator.generate(parsed)
  }

  async write(): Promise<void> {
    await this.schemaGenerator.emit()
  }
}
