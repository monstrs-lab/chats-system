export interface SchemaTLParam {
    name: string
    type: string
}

export interface SchemaTLConstructor {
    id: string
    predicate: string
    type: string
    params: Array<SchemaTLParam>
}

export interface SchemaTLMethod {
    id: string
    method: string
    type: string
    params: Array<SchemaTLParam>
}

export interface SchemaTL {
    constructors: Array<SchemaTLConstructor>
    methods: Array<SchemaTLMethod>
}