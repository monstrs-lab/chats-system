import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface HelpAcceptTermsOfServiceValues {
    id: any;
}

export class HelpAcceptTermsOfService extends TLMethod<HelpAcceptTermsOfServiceValues> {
    static override CONSTRUCTOR_ID = 4000511898;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "DataJSON",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): any {
        return this.values.id
    }
}
