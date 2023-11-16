import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaVenueValues {
    geoPoint: any;
    title: string;
    address: string;
    provider: string;
    venueId: string;
    venueType: string;
}

export class InputMediaVenue extends TLConstructor<InputMediaVenueValues> {
    static override CONSTRUCTOR_ID: number = 3242007569;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "geo_point",
            "type": "InputGeoPoint",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
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
            "name": "address",
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
            "name": "provider",
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
            "name": "venue_id",
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
            "name": "venue_type",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get geoPoint(): any {
        return this.values.geoPoint
    }

    get title(): string {
        return this.values.title
    }

    get address(): string {
        return this.values.address
    }

    get provider(): string {
        return this.values.provider
    }

    get venueId(): string {
        return this.values.venueId
    }

    get venueType(): string {
        return this.values.venueType
    }
}
