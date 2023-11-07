import { AbstractSchemaTLGenerator, SchemaTL } from '@chats-system/schema-tl-base-generator'

import decamelize from 'decamelize'
import { EOL } from 'node:os'

export class SchemaTLCRC32PBGenerator extends AbstractSchemaTLGenerator {
    static defaults = [{
        "id": "0",
        name: "CRC32_UNKNOWN",
    }, {
        id: '1538843921',
        name: 'CRC32_MESSAGE2'
    }, {
        id: '1945237724',
        name: 'CRC32_MSG_CONTAINER'
    }, {
        id: '530561358',
        name: 'CRC32_MSG_COPY'
    }, {
        id: '812830625',
        name: 'CRC32_GZIP_PACKED'
    }, {
        id: '-212046591',
        name: 'CRC32_RPC_RESULT'
    }]

    override async generate(schema: SchemaTL): Promise<void> {
        const values = schema.constructors.map(item => ({
            name: decamelize(['CRC32', ...item.predicate.split('.')].join('_')).toUpperCase(),
            id: item.id,
        }))

        const result = [
            'syntax = "proto3";',
            '',
            'enum TLConstructor {',
            ...[...SchemaTLCRC32PBGenerator.defaults, ...values].map(value => `  ${value.name} = ${value.id};`),
            '}'
        ].join(EOL)

        console.log(result)
    }
}