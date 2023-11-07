import type { SchemaTL } from "./schema.tl.interfaces.js";

export class SchemaTLLoader {
    static async load(): Promise<SchemaTL> {
        const response = await fetch('https://core.telegram.org/schema/json')

        return (await response.json()) as SchemaTL
    }
}