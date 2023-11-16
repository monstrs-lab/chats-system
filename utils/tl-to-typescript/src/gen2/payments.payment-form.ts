import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PaymentsPaymentFormValues {
    flags: any;
    canSaveCredentials: boolean;
    passwordMissing: boolean;
    formId: bigint;
    botId: bigint;
    title: string;
    description: string;
    photo: any;
    invoice: any;
    providerId: bigint;
    url: string;
    nativeProvider: string;
    nativeParams: any;
    additionalMethods: Array<any>;
    savedInfo: any;
    savedCredentials: Array<any>;
    users: Array<any>;
}

export class PaymentsPaymentForm extends TLConstructor<PaymentsPaymentFormValues> {
    static override CONSTRUCTOR_ID: number = 2684716881;
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
            "name": "can_save_credentials",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "password_missing",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "form_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "bot_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "title",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "description",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "photo",
            "type": "WebDocument",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "invoice",
            "type": "Invoice",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "provider_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "url",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "native_provider",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "native_params",
            "type": "DataJSON",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "additional_methods",
            "type": "PaymentFormMethod",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "saved_info",
            "type": "PaymentRequestedInfo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "saved_credentials",
            "type": "PaymentSavedCredentials",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "users",
            "type": "User",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get canSaveCredentials(): boolean {
        return this.values.canSaveCredentials
    }

    get passwordMissing(): boolean {
        return this.values.passwordMissing
    }

    get formId(): bigint {
        return this.values.formId
    }

    get botId(): bigint {
        return this.values.botId
    }

    get title(): string {
        return this.values.title
    }

    get description(): string {
        return this.values.description
    }

    get photo(): any {
        return this.values.photo
    }

    get invoice(): any {
        return this.values.invoice
    }

    get providerId(): bigint {
        return this.values.providerId
    }

    get url(): string {
        return this.values.url
    }

    get nativeProvider(): string {
        return this.values.nativeProvider
    }

    get nativeParams(): any {
        return this.values.nativeParams
    }

    get additionalMethods(): Array<any> {
        return this.values.additionalMethods
    }

    get savedInfo(): any {
        return this.values.savedInfo
    }

    get savedCredentials(): Array<any> {
        return this.values.savedCredentials
    }

    get users(): Array<any> {
        return this.values.users
    }
}
