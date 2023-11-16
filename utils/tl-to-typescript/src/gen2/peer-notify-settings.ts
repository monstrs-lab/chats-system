import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PeerNotifySettingsValues {
    flags: any;
    showPreviews: any;
    silent: any;
    muteUntil: number;
    iosSound: any;
    androidSound: any;
    otherSound: any;
}

export class PeerNotifySettings extends TLConstructor<PeerNotifySettingsValues> {
    static override CONSTRUCTOR_ID: number = 2822439974;
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
            "name": "show_previews",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "silent",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "mute_until",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "ios_sound",
            "type": "NotificationSound",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "android_sound",
            "type": "NotificationSound",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "other_sound",
            "type": "NotificationSound",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get showPreviews(): any {
        return this.values.showPreviews
    }

    get silent(): any {
        return this.values.silent
    }

    get muteUntil(): number {
        return this.values.muteUntil
    }

    get iosSound(): any {
        return this.values.iosSound
    }

    get androidSound(): any {
        return this.values.androidSound
    }

    get otherSound(): any {
        return this.values.otherSound
    }
}
