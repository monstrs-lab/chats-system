/* eslint-disable prefer-destructuring */

import { Raw }     from '@tgsnake/core'
import { Raws }    from '@tgsnake/core'
import { Errors }  from '@tgsnake/core'
import { Cryptos } from '@tgsnake/core'

export default Raw

export const BytesIO = Raws.BytesIO
export const GzipPacked = Raws.GzipPacked
export const Message = Raws.Message
export const MsgContainer = Raws.MsgContainer
export const TLObject = Raws.TLObject
export const Primitive = Raws.Primitive
export const Exceptions = Errors.Exceptions

export const BoolTrue = Primitive.BoolTrue
export const BoolFalse = Primitive.BoolFalse
export const Bool = Primitive.Bool
export const Bytes = Primitive.Bytes
export const Double = Primitive.Double
export const Float = Primitive.Float
export const Int = Primitive.Int
export const Int128 = Primitive.Int128
export const Int256 = Primitive.Int256
export const Long = Primitive.Long
export const String = Primitive.String
export const Vector = Primitive.Vector

export const Prime = Cryptos.Prime
