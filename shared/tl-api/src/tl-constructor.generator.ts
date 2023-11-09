import type { TLSchemaConstructorParsed } from "@chats-system/tl-schema";
import camelCase from 'camelcase';

export class TLConstructorGenerator {
    async generate(ctr: TLSchemaConstructorParsed) {
        const className = camelCase(ctr.predicate, {pascalCase: true, preserveConsecutiveUppercase: true})

        const content = `
export class ${className} extends TLConstructor {
  static CONSTRUCTOR_ID = ${ctr.id}

  static TYPE = '${ctr.type}'

  static PREDICATE = '${ctr.predicate}'

  static PARAMS = ${JSON.stringify(ctr.params, null, 2)}

  constructor(
    ${ctr.params.map(param => `public readonly ${param.name}: any`)}
  ) {}
}
`

        console.log(content)
    }
}
