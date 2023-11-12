import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import BI from 'big-integer'
import { BinaryReader } from './binary.reader.js';

export const  readBigIntFromBuffer = (buffer: Buffer, little = true, signed = false): bigint => {
    let randBuffer = Buffer.from(buffer);

    const bytesNumber = randBuffer.length;

    if (little) {
        randBuffer = randBuffer.reverse();
    }

    let bigInt = BI(randBuffer.toString('hex'), 16);

    if (signed && Math.floor(bigInt.toString(2).length / 8) >= bytesNumber) {
        bigInt = bigInt.subtract(BI(2)
            .pow(BigInt(bytesNumber * 8)));
    }

    return BigInt(bigInt.toString())
}

export const getArgFromReader = (reader: BinaryReader, arg: TLSchemaParamParsed): any => {
  if (arg.isVector) {
      if (arg.useVectorId) {
          reader.readInt();
      }

      const temp = [];
      const len = reader.readInt();

      arg.isVector = false;

      for (let i = 0; i < len; i++) {
          temp.push(getArgFromReader(reader, arg));
      }

      arg.isVector = true;

      return temp;
  } else if (arg.flagIndicator) {
      return reader.readInt();
  } else {
      switch (arg.type) {
          case 'int':
              return reader.readInt();
          case 'long':
              return reader.readLong();
          case 'int128':
              return reader.readLargeInt(128);
          case 'int256':
              return reader.readLargeInt(256);
          case 'double':
              return reader.readDouble();
          case 'string':
              return reader.readString();
          case 'Bool':
              return reader.readBool();
          case 'true':
              return true;
          case 'bytes':
              return reader.readBytes();
          case 'date':
              return reader.readDate();
          default:
              if (!arg.skipConstructorId) {
                  return reader.readObject();
              } else {
                  throw new Error(`Unknown type ${arg}`);
              }
      }
  }
}