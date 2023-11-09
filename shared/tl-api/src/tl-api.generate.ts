import { coreTLSchemaParsed } from '@chats-system/tl-schema'

import { TLConstructorGenerator } from './tl-constructor.generator.js'

const coreConstructorGenerator = new TLConstructorGenerator()

for await (const ctr of coreTLSchemaParsed.constructors) {
    await coreConstructorGenerator.generate(ctr)
}