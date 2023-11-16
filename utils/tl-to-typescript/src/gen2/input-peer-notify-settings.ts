import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPeerNotifySettingsValues {
    flags: any;
    showPreviews: any;
    silent: any;
    muteUntil: number;
    sound: any;
}

export class InputPeerNotifySettings extends TLConstructor<InputPeerNotifySettingsValues> {
    static override CONSTRUCTOR_ID: number = 3743350827;
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
            "name": "sound",
            "type": "NotificationSound",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
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

    get sound(): any {
        return this.values.sound
    }
}
