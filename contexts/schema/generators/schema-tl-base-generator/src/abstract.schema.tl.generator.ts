import type { SchemaTL } from "@chats-system/schema-tl-loader";
import { SchemaTLLoader } from "@chats-system/schema-tl-loader";

export abstract class AbstractSchemaTLGenerator {
    async loadAndGenerate(): Promise<void> {
        return this.generate(await SchemaTLLoader.load())
    }

    abstract generate(schema: SchemaTL): Promise<void>
}