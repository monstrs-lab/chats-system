import apiTL from './api.tl.json' assert { type: "json" }
import { TLParser } from './tl.parser.js'

const res = new TLParser().parse(apiTL)

res.constructors.forEach(c => console.log(c.params))