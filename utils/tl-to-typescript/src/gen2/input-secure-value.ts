import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputSecureValueValues {
    flags: any;
    type: any;
    data: any;
    frontSide: any;
    reverseSide: any;
    selfie: any;
    translation: Array<any>;
    files: Array<any>;
    plainData: any;
}

export class InputSecureValue extends TLConstructor<InputSecureValueValues> {
    static override CONSTRUCTOR_ID: number = 3676426407;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "type",
            "type": "SecureValueType",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "data",
            "type": "SecureData",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "front_side",
            "type": "InputSecureFile",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reverse_side",
            "type": "InputSecureFile",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "selfie",
            "type": "InputSecureFile",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "translation",
            "type": "InputSecureFile",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "files",
            "type": "InputSecureFile",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "plain_data",
            "type": "SecurePlainData",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get type(): any {
        return this.values.type
    }

    get data(): any {
        return this.values.data
    }

    get frontSide(): any {
        return this.values.frontSide
    }

    get reverseSide(): any {
        return this.values.reverseSide
    }

    get selfie(): any {
        return this.values.selfie
    }

    get translation(): Array<any> {
        return this.values.translation
    }

    get files(): Array<any> {
        return this.values.files
    }

    get plainData(): any {
        return this.values.plainData
    }
}
