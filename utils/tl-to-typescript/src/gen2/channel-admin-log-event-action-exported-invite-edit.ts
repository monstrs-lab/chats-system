import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionExportedInviteEditValues {
    prevInvite: any;
    newInvite: any;
}

export class ChannelAdminLogEventActionExportedInviteEdit extends TLConstructor<ChannelAdminLogEventActionExportedInviteEditValues> {
    static override CONSTRUCTOR_ID: number = 3910056793;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_invite",
            "type": "ExportedChatInvite",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_invite",
            "type": "ExportedChatInvite",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get prevInvite(): any {
        return this.values.prevInvite
    }

    get newInvite(): any {
        return this.values.newInvite
    }
}
