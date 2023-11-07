import { AbstractSchemaTLGenerator, SchemaTL } from '@chats-system/schema-tl-base-generator'

import { SchemaTLCRC32PBGenerator } from './schema.tl.crc32.pb.generator.js'

export class SchemaTLPBGenerator extends AbstractSchemaTLGenerator {
    // @ts-expect-error
    constructor(private readonly options: object) {
        super()
    }

    override async generate(schema: SchemaTL): Promise<void> {
        //console.log(schema, this.options)
        await new SchemaTLCRC32PBGenerator().generate(schema)
    }
}