import type { TLSchemaParsed }     from '@chats-system/tl-json-schema-parser'

import { Project }                 from 'ts-morph'
import { ScriptTarget }            from 'ts-morph'
import { ModuleKind }              from 'ts-morph'
import { ModuleResolutionKind }    from 'ts-morph'

import { TLConstructorGenerator }  from './tl-constructor.generator.js'
import { TLClassMapGenerator } from './tl-classmap.generator.js'
import { TLIndexGenerator} from './tl-index.generator.js'

export interface TLSchemaGeneratorOptions {
  outDir: string
}

export class TLSchemaGenerator {
  private project: Project

  private constructorGenerator: TLConstructorGenerator
  
  private classMapGenerator: TLClassMapGenerator

  private indexGenerator: TLIndexGenerator

  constructor(options: TLSchemaGeneratorOptions) {
    this.project = new Project({
      compilerOptions: {
        outDir: options.outDir,
        module: ModuleKind.ES2022,
        target: ScriptTarget.ES2022,
        moduleResolution: ModuleResolutionKind.Bundler,
      },
    })

    this.constructorGenerator = new TLConstructorGenerator(this.project, options.outDir)
    this.classMapGenerator = new TLClassMapGenerator(this.project, options.outDir)
    this.indexGenerator = new TLIndexGenerator(this.project, options.outDir)
  }

  async generate(schema: TLSchemaParsed): Promise<void> {
    schema.constructors.forEach((ctr) => {
      this.constructorGenerator.generate(ctr)
    })
  }

  async emit(): Promise<void> {
    this.classMapGenerator.generate()
    this.indexGenerator.generate()

    //console.log(this.project.emitToMemory())
    await this.project.save()
  }
}
