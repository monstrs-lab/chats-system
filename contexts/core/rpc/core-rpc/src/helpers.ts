import { PREDICATE_BOOL_FALSE } from './constants.js'
import { PREDICATE_BOOL_TRUE }  from './constants.js'
import { TLBoolFalse }          from './gen/connect/index.js'
import { TLBoolTrue }           from './gen/connect/index.js'

export const BoolFalse = new TLBoolFalse({
  data2: {
    predicateName: PREDICATE_BOOL_FALSE,
  },
}).data2!

export const BoolTrue = new TLBoolTrue({
  data2: {
    predicateName: PREDICATE_BOOL_TRUE,
  },
}).data2!
