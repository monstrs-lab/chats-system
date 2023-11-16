import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface KeyboardButtonRequestGeoLocationValues {
    text: string;
}

export class KeyboardButtonRequestGeoLocation extends TLConstructor<KeyboardButtonRequestGeoLocationValues> {
    static override CONSTRUCTOR_ID: number = 4235815743;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "text",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get text(): string {
        return this.values.text
    }
}
