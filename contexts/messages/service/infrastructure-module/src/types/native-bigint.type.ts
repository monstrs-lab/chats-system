import { BigIntType } from '@mikro-orm/core'

export class NativeBigIntType extends BigIntType {
  override convertToJSValue(value: any): any {
    if (!value) {
      return value
    }

    return BigInt(value)
  }
}
