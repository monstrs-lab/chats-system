import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UploadFileCdnRedirectValues {
    dcId: number;
    fileToken: Buffer;
    encryptionKey: Buffer;
    encryptionIv: Buffer;
    fileHashes: Array<any>;
}

export class UploadFileCdnRedirect extends TLConstructor<UploadFileCdnRedirectValues> {
    static override CONSTRUCTOR_ID: number = 4052539972;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "dc_id",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "file_token",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "encryption_key",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "encryption_iv",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "file_hashes",
            "type": "FileHash",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get dcId(): number {
        return this.values.dcId
    }

    get fileToken(): Buffer {
        return this.values.fileToken
    }

    get encryptionKey(): Buffer {
        return this.values.encryptionKey
    }

    get encryptionIv(): Buffer {
        return this.values.encryptionIv
    }

    get fileHashes(): Array<any> {
        return this.values.fileHashes
    }
}
