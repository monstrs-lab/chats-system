import { TLSchema, TLSchemaParsed } from '@chats-system/tl-parser'

import coretlschema from './core.tl.json' assert { type: 'json' }
import coretlschemaparsed from './core.tl.parsed.json' assert { type: 'json' }
import mtprototlschema from './mtproto.tl.json' assert { type: 'json' }
import mtprototlschemaparsed from './mtproto.tl.parsed.json' assert { type: 'json' }

export * from '@chats-system/tl-parser'
export const coreTLSchema = coretlschema as TLSchema
export const coreTLSchemaParsed = coretlschemaparsed as TLSchemaParsed
export const mtprotoTLSchema = mtprototlschema as TLSchema
export const mtprotoTLSchemaParsed = mtprototlschemaparsed as TLSchemaParsed