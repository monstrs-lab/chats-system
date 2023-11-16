import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PaymentsPaymentFormValues {
  flags: any
  canSaveCredentials: boolean
  passwordMissing: boolean
  formId: bigint
  botId: bigint
  title: string
  description: string
  photo: any
  invoice: any
  providerId: bigint
  url: string
  nativeProvider: string
  nativeParams: any
  additionalMethods: Array<any>
  savedInfo: any
  savedCredentials: Array<any>
  users: Array<any>
}

export class PaymentsPaymentForm extends TLConstructor<PaymentsPaymentFormValues> {
  static override CONSTRUCTOR_ID: number = -1610250415
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'can_save_credentials',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'password_missing',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'form_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'description',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'photo',
      type: 'WebDocument',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invoice',
      type: 'Invoice',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'provider_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'url',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'native_provider',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'native_params',
      type: 'DataJSON',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'additional_methods',
      type: 'PaymentFormMethod',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'saved_info',
      type: 'PaymentRequestedInfo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'saved_credentials',
      type: 'PaymentSavedCredentials',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get canSaveCredentials(): boolean {
    return this.getParamValue<boolean>('canSaveCredentials')
  }

  get passwordMissing(): boolean {
    return this.getParamValue<boolean>('passwordMissing')
  }

  get formId(): bigint {
    return this.getParamValue<bigint>('formId')
  }

  get botId(): bigint {
    return this.getParamValue<bigint>('botId')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get description(): string {
    return this.getParamValue<string>('description')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get invoice(): any {
    return this.getParamValue<any>('invoice')
  }

  get providerId(): bigint {
    return this.getParamValue<bigint>('providerId')
  }

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get nativeProvider(): string {
    return this.getParamValue<string>('nativeProvider')
  }

  get nativeParams(): any {
    return this.getParamValue<any>('nativeParams')
  }

  get additionalMethods(): Array<any> {
    return this.getParamValue<Array<any>>('additionalMethods')
  }

  get savedInfo(): any {
    return this.getParamValue<any>('savedInfo')
  }

  get savedCredentials(): Array<any> {
    return this.getParamValue<Array<any>>('savedCredentials')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
