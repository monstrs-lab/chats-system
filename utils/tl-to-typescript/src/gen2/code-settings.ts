import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface CodeSettingsValues {
    flags: any;
    allowFlashcall: boolean;
    currentNumber: boolean;
    allowAppHash: boolean;
    allowMissedCall: boolean;
    allowFirebase: boolean;
    logoutTokens: Array<Buffer>;
    token: string;
    appSandbox: any;
}

export class CodeSettings extends TLConstructor<CodeSettingsValues> {
    static override CONSTRUCTOR_ID: number = 2904898936;
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
            "name": "allow_flashcall",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "current_number",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "allow_app_hash",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "allow_missed_call",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "allow_firebase",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "logout_tokens",
            "type": "bytes",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "token",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "app_sandbox",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get allowFlashcall(): boolean {
        return this.values.allowFlashcall
    }

    get currentNumber(): boolean {
        return this.values.currentNumber
    }

    get allowAppHash(): boolean {
        return this.values.allowAppHash
    }

    get allowMissedCall(): boolean {
        return this.values.allowMissedCall
    }

    get allowFirebase(): boolean {
        return this.values.allowFirebase
    }

    get logoutTokens(): Array<Buffer> {
        return this.values.logoutTokens
    }

    get token(): string {
        return this.values.token
    }

    get appSandbox(): any {
        return this.values.appSandbox
    }
}
