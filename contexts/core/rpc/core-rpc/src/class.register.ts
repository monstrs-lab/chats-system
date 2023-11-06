import type { TLObject } from './core.types.js'
import { TLMessage2 } from './manually.types.js'

const clazzIdRegisters2: { [key: number]: () => TLObject } = {
    1538843921: () => new TLMessage2(),
    /*
    1945237724: () => new TLMsgContainer(),
    530561358: () => new TLMsgCopy(),
    812830625: () => new TLGzipPacked(),
    -212046591: () => new TLRpcResult(),
    1973679973: () => {
      const o = MakeTLBindAuthKeyInner(null);
      o.Data2.Constructor = 1973679973;
      return o;
    },
    1715713620: () => {
      const o = MakeTLClient_DHInnerData(null);
      o.Data2.Constructor = 1715713620;
      return o;
    },
    -161422892: () => {
      const o = MakeTLDestroyAuthKeyOk(null);
      o.Data2.Constructor = -161422892;
      return o;
    },
    178201177: () => {
      const o = MakeTLDestroyAuthKeyNone(null);
      o.Data2.Constructor = 178201177;
      return o;
    },
    -368010477: () => {
      const o = MakeTLDestroyAuthKeyFail(null);
      o.Data2.Constructor = -368010477;
      return o;
    },
    -2083955988: () => {
      const o = MakeTLPQInnerData(null);
      o.Data2.Constructor = -2083955988;
      return o;
    },
    -1443537003: () => {
      const o = MakeTLPQInnerDataDc(null);
      o.Data2.Constructor = -1443537003;
      return o;
    },
    1013613780: () => {
      const o = MakeTLPQInnerDataTemp(null);
      o.Data2.Constructor = 1013613780;
      return o;
    },
    1459478408: () => {
      const o = MakeTLPQInnerDataTempDc(null);
      o.Data2.Constructor = 1459478408;
      return o;
    },
    85337187: () => {
      const o = MakeTLResPQ(null);
      o.Data2.Constructor = 85337187;
      return o;
    },
    -1249309254: () => {
      const o = MakeTLServer_DHInnerData(null);
      o.Data2.Constructor = -1249309254;
      return o;
    },
    2043348061: () => {
      const o = MakeTLServer_DHParamsFail(null);
      o.Data2.Constructor = 2043348061;
      return o;
    },
    -790100132: () => {
      const o = MakeTLServer_DHParamsOk(null);
      o.Data2.Constructor = -790100132;
      return o;
    },
    1003222836: () => {
      const o = MakeTLDhGenOk(null);
      o.Data2.Constructor = 1003222836;
      return o;
    },
    1188831161: () => {
      const o = MakeTLDhGenRetry(null);
      o.Data2.Constructor = 1188831161;
      return o;
    },
    -1499615742: () => {
      const o = MakeTLDhGenFail(null);
      o.Data2.Constructor = -1499615742;
      return o;
    },
    1182381663: () => {
      const o = MakeTLAccessPointRule(null);
      o.Data2.Constructor = 1182381663;
      return o;
    },
    -1477445615: () => {
      const o = MakeTLBadMsgNotification(null);
      o.Data2.Constructor = -1477445615;
      return o;
    },
    -307542917: () => {
      const o = MakeTLBadServerSalt(null);
      o.Data2.Constructor = -307542917;
      return o;
    },
    -501201412: () => {
      const o = MakeTLDestroySessionOk(null);
      o.Data2.Constructor = -501201412;
      return o;
    },
    1658015945: () => {
      const o = MakeTLDestroySessionNone(null);
      o.Data2.Constructor = 1658015945;
      return o;
    },
    155834844: () => {
      const o = MakeTLFutureSalt(null);
      o.Data2.Constructor = 155834844;
      return o;
    },
    -1370486635: () => {
      const o = MakeTLFutureSalts(null);
      o.Data2.Constructor = -1370486635;
      return o;
    },
    1515793004: () => {
      const o = MakeTLHelpConfigSimple(null);
      o.Data2.Constructor = 1515793004;
      return o;
    },
    -1835453025: () => {
      const o = MakeTLHttpWait(null);
      o.Data2.Constructor = -1835453025;
      return o;
    },
    -734810765: () => {
      const o = MakeTLIpPort(null);
      o.Data2.Constructor = -734810765;
      return o;
    },
    932718150: () => {
      const o = MakeTLIpPortSecret(null);
      o.Data2.Constructor = 932718150;
      return o;
    },
    661470918: () => {
      const o = MakeTLMsgDetailedInfo(null);
      o.Data2.Constructor = 661470918;
      return o;
    },
    -2137147681: () => {
      const o = MakeTLMsgNewDetailedInfo(null);
      o.Data2.Constructor = -2137147681;
      return o;
    },
    2105940488: () => {
      const o = MakeTLMsgResendReq(null);
      o.Data2.Constructor = 2105940488;
      return o;
    },
    1658238041: () => {
      const o = MakeTLMsgsAck(null);
      o.Data2.Constructor = 1658238041;
      return o;
    },
    -1933520591: () => {
      const o = MakeTLMsgsAllInfo(null);
      o.Data2.Constructor = -1933520591;
      return o;
    },
    81704317: () => {
      const o = MakeTLMsgsStateInfo(null);
      o.Data2.Constructor = 81704317;
      return o;
    },
    -630588590: () => {
      const o = MakeTLMsgsStateReq(null);
      o.Data2.Constructor = -630588590;
      return o;
    },
    -1631450872: () => {
      const o = MakeTLNewSessionCreated(null);
      o.Data2.Constructor = -1631450872;
      return o;
    },
    880243653: () => {
      const o = MakeTLPong(null);
      o.Data2.Constructor = 880243653;
      return o;
    },
    1579864942: () => {
      const o = MakeTLRpcAnswerUnknown(null);
      o.Data2.Constructor = 1579864942;
      return o;
    },
    -847714938: () => {
      const o = MakeTLRpcAnswerDroppedRunning(null);
      o.Data2.Constructor = -847714938;
      return o;
    },
    -1539647305: () => {
      const o = MakeTLRpcAnswerDropped(null);
      o.Data2.Constructor = -1539647305;
      return o;
    },
    558156313: () => {
      const o = MakeTLRpcError(null);
      o.Data2.Constructor = 558156313;
      return o;
    },
    1108910436: () => {
      const o = MakeTLTlsBlockString(null);
      o.Data2.Constructor = 1108910436;
      return o;
    },
    1296942110: () => {
      const o = MakeTLTlsBlockRandom(null);
      o.Data2.Constructor = 1296942110;
      return o;
    },
    154352379: () => {
      const o = MakeTLTlsBlockZero(null);
      o.Data2.Constructor = 154352379;
      return o;
    },
    283665263: () => {
      const o = MakeTLTlsBlockDomain(null);
      o.Data2.Constructor = 283665263;
      return o;
    },
    -428498495: () => {
      const o = MakeTLTlsBlockGrease(null);
      o.Data2.Constructor = -428498495;
      return o;
    },
    -1632019620: () => {
      const o = MakeTLTlsBlockPublicKey(null);
      o.Data2.Constructor = -1632019620;
      return o;
    },
    -416951217: () => {
      const o = MakeTLTlsBlockScope(null);
      o.Data2.Constructor = -416951217;
      return o;
    },
    1817363588: () => {
      const o = MakeTLTlsClientHello(null);
      o.Data2.Constructor = 1817363588;
      return o;
    },
    -1194283041: () => {
      const o = MakeTLAccountDaysTTL(null);
      o.Data2.Constructor = -1194283041;
      return o;
    },
    -1389486888: () => {
      const o = MakeTLAccountAuthorizationForm(null);
      o.Data2.Constructor = -1389486888;
      return o;
    },
    1275039392: () => {
      const o = MakeTLAccountAuthorizations(null);
      o.Data2.Constructor = 1275039392;
      return o;
    },
    1674235686: () => {
      const o = MakeTLAccountAutoDownloadSettings(null);
      o.Data2.Constructor = 1674235686;
      return o;
    },
    1279133341: () => {
      const o = MakeTLAccountAutoSaveSettings(null);
      o.Data2.Constructor = 1279133341;
      return o;
    },
    1474462241: () => {
      const o = MakeTLAccountContentSettings(null);
      o.Data2.Constructor = 1474462241;
      return o;
    },
    731303195: () => {
      const o = MakeTLAccountEmailVerified(null);
      o.Data2.Constructor = 731303195;
      return o;
    },
    -507835039: () => {
      const o = MakeTLAccountEmailVerifiedLogin(null);
      o.Data2.Constructor = -507835039;
      return o;
    },
    -796072379: () => {
      const o = MakeTLAccountEmojiStatusesNotModified(null);
      o.Data2.Constructor = -796072379;
      return o;
    },
    -1866176559: () => {
      const o = MakeTLAccountEmojiStatuses(null);
      o.Data2.Constructor = -1866176559;
      return o;
    },
    -1787080453: () => {
      const o = MakeTLAccountPassword(null);
      o.Data2.Constructor = -1787080453;
      return o;
    },
    408623183: () => {
      const o = MakeTLAccountPassword(null);
      o.Data2.Constructor = 408623183;
      return o;
    },
    -1036572727: () => {
      const o = MakeTLAccountPasswordInputSettings(null);
      o.Data2.Constructor = -1036572727;
      return o;
    },
    -1705233435: () => {
      const o = MakeTLAccountPasswordSettings(null);
      o.Data2.Constructor = -1705233435;
      return o;
    },
    1352683077: () => {
      const o = MakeTLAccountPrivacyRules(null);
      o.Data2.Constructor = 1352683077;
      return o;
    },
    -478701471: () => {
      const o = MakeTLAccountResetPasswordFailedWait(null);
      o.Data2.Constructor = -478701471;
      return o;
    },
    -370148227: () => {
      const o = MakeTLAccountResetPasswordRequestedWait(null);
      o.Data2.Constructor = -370148227;
      return o;
    },
    -383330754: () => {
      const o = MakeTLAccountResetPasswordOk(null);
      o.Data2.Constructor = -383330754;
      return o;
    },
    -1222230163: () => {
      const o = MakeTLAccountSavedRingtone(null);
      o.Data2.Constructor = -1222230163;
      return o;
    },
    523271863: () => {
      const o = MakeTLAccountSavedRingtoneConverted(null);
      o.Data2.Constructor = 523271863;
      return o;
    },
    -67704655: () => {
      const o = MakeTLAccountSavedRingtonesNotModified(null);
      o.Data2.Constructor = -67704655;
      return o;
    },
    -1041683259: () => {
      const o = MakeTLAccountSavedRingtones(null);
      o.Data2.Constructor = -1041683259;
      return o;
    },
    -2128640689: () => {
      const o = MakeTLAccountSentEmailCode(null);
      o.Data2.Constructor = -2128640689;
      return o;
    },
    1304052993: () => {
      const o = MakeTLAccountTakeout(null);
      o.Data2.Constructor = 1304052993;
      return o;
    },
    -199313886: () => {
      const o = MakeTLAccountThemesNotModified(null);
      o.Data2.Constructor = -199313886;
      return o;
    },
    -1707242387: () => {
      const o = MakeTLAccountThemes(null);
      o.Data2.Constructor = -1707242387;
      return o;
    },
    -614138572: () => {
      const o = MakeTLAccountTmpPassword(null);
      o.Data2.Constructor = -614138572;
      return o;
    },
    471437699: () => {
      const o = MakeTLAccountWallPapersNotModified(null);
      o.Data2.Constructor = 471437699;
      return o;
    },
    -842824308: () => {
      const o = MakeTLAccountWallPapers(null);
      o.Data2.Constructor = -842824308;
      return o;
    },
    -313079300: () => {
      const o = MakeTLAccountWebAuthorizations(null);
      o.Data2.Constructor = -313079300;
      return o;
    },
    1008422669: () => {
      const o = MakeTLAppWebViewResultUrl(null);
      o.Data2.Constructor = 1008422669;
      return o;
    },
    -653423106: () => {
      const o = MakeTLAttachMenuBot(null);
      o.Data2.Constructor = -653423106;
      return o;
    },
    -928371502: () => {
      const o = MakeTLAttachMenuBot(null);
      o.Data2.Constructor = -928371502;
      return o;
    },
    -381896846: () => {
      const o = MakeTLAttachMenuBot(null);
      o.Data2.Constructor = -381896846;
      return o;
    },
    -1297663893: () => {
      const o = MakeTLAttachMenuBotIcon(null);
      o.Data2.Constructor = -1297663893;
      return o;
    },
    1165423600: () => {
      const o = MakeTLAttachMenuBotIconColor(null);
      o.Data2.Constructor = 1165423600;
      return o;
    },
    -237467044: () => {
      const o = MakeTLAttachMenuBotsNotModified(null);
      o.Data2.Constructor = -237467044;
      return o;
    },
    1011024320: () => {
      const o = MakeTLAttachMenuBots(null);
      o.Data2.Constructor = 1011024320;
      return o;
    },
    -1816172929: () => {
      const o = MakeTLAttachMenuBotsBot(null);
      o.Data2.Constructor = -1816172929;
      return o;
    },
    2104224014: () => {
      const o = MakeTLAttachMenuPeerTypeSameBotPM(null);
      o.Data2.Constructor = 2104224014;
      return o;
    },
    -1020528102: () => {
      const o = MakeTLAttachMenuPeerTypeBotPM(null);
      o.Data2.Constructor = -1020528102;
      return o;
    },
    -247016673: () => {
      const o = MakeTLAttachMenuPeerTypePM(null);
      o.Data2.Constructor = -247016673;
      return o;
    },
    84480319: () => {
      const o = MakeTLAttachMenuPeerTypeChat(null);
      o.Data2.Constructor = 84480319;
      return o;
    },
    2080104188: () => {
      const o = MakeTLAttachMenuPeerTypeBroadcast(null);
      o.Data2.Constructor = 2080104188;
      return o;
    },
    -856756288: () => {
      const o = MakeTLAuthKeyInfo(null);
      o.Data2.Constructor = -856756288;
      return o;
    },
    782418132: () => {
      const o = MakeTLAuthAuthorization(null);
      o.Data2.Constructor = 782418132;
      return o;
    },
    872119224: () => {
      const o = MakeTLAuthAuthorization(null);
      o.Data2.Constructor = 872119224;
      return o;
    },
    1148485274: () => {
      const o = MakeTLAuthAuthorizationSignUpRequired(null);
      o.Data2.Constructor = 1148485274;
      return o;
    },
    1923290508: () => {
      const o = MakeTLAuthCodeTypeSms(null);
      o.Data2.Constructor = 1923290508;
      return o;
    },
    1948046307: () => {
      const o = MakeTLAuthCodeTypeCall(null);
      o.Data2.Constructor = 1948046307;
      return o;
    },
    577556219: () => {
      const o = MakeTLAuthCodeTypeFlashCall(null);
      o.Data2.Constructor = 577556219;
      return o;
    },
    -702884114: () => {
      const o = MakeTLAuthCodeTypeMissedCall(null);
      o.Data2.Constructor = -702884114;
      return o;
    },
    116234636: () => {
      const o = MakeTLAuthCodeTypeFragmentSms(null);
      o.Data2.Constructor = 116234636;
      return o;
    },
    -1271602504: () => {
      const o = MakeTLAuthExportedAuthorization(null);
      o.Data2.Constructor = -1271602504;
      return o;
    },
    -1012759713: () => {
      const o = MakeTLAuthLoggedOut(null);
      o.Data2.Constructor = -1012759713;
      return o;
    },
    1654593920: () => {
      const o = MakeTLAuthLoginToken(null);
      o.Data2.Constructor = 1654593920;
      return o;
    },
    110008598: () => {
      const o = MakeTLAuthLoginTokenMigrateTo(null);
      o.Data2.Constructor = 110008598;
      return o;
    },
    957176926: () => {
      const o = MakeTLAuthLoginTokenSuccess(null);
      o.Data2.Constructor = 957176926;
      return o;
    },
    326715557: () => {
      const o = MakeTLAuthPasswordRecovery(null);
      o.Data2.Constructor = 326715557;
      return o;
    },
    1577067778: () => {
      const o = MakeTLAuthSentCode(null);
      o.Data2.Constructor = 1577067778;
      return o;
    },
    596704836: () => {
      const o = MakeTLAuthSentCodeSuccess(null);
      o.Data2.Constructor = 596704836;
      return o;
    },
    1035688326: () => {
      const o = MakeTLAuthSentCodeTypeApp(null);
      o.Data2.Constructor = 1035688326;
      return o;
    },
    -1073693790: () => {
      const o = MakeTLAuthSentCodeTypeSms(null);
      o.Data2.Constructor = -1073693790;
      return o;
    },
    1398007207: () => {
      const o = MakeTLAuthSentCodeTypeCall(null);
      o.Data2.Constructor = 1398007207;
      return o;
    },
    -1425815847: () => {
      const o = MakeTLAuthSentCodeTypeFlashCall(null);
      o.Data2.Constructor = -1425815847;
      return o;
    },
    -2113903484: () => {
      const o = MakeTLAuthSentCodeTypeMissedCall(null);
      o.Data2.Constructor = -2113903484;
      return o;
    },
    -196020837: () => {
      const o = MakeTLAuthSentCodeTypeEmailCode(null);
      o.Data2.Constructor = -196020837;
      return o;
    },
    1511364673: () => {
      const o = MakeTLAuthSentCodeTypeEmailCode(null);
      o.Data2.Constructor = 1511364673;
      return o;
    },
    -1521934870: () => {
      const o = MakeTLAuthSentCodeTypeSetUpEmailRequired(null);
      o.Data2.Constructor = -1521934870;
      return o;
    },
    -648651719: () => {
      const o = MakeTLAuthSentCodeTypeFragmentSms(null);
      o.Data2.Constructor = -648651719;
      return o;
    },
    -444918734: () => {
      const o = MakeTLAuthSentCodeTypeFirebaseSms(null);
      o.Data2.Constructor = -444918734;
      return o;
    },
    -1392388579: () => {
      const o = MakeTLAuthorization(null);
      o.Data2.Constructor = -1392388579;
      return o;
    },
    -1163561432: () => {
      const o = MakeTLAutoDownloadSettings(null);
      o.Data2.Constructor = -1163561432;
      return o;
    },
    -1896171181: () => {
      const o = MakeTLAutoDownloadSettings(null);
      o.Data2.Constructor = -1896171181;
      return o;
    },
    -532532493: () => {
      const o = MakeTLAutoDownloadSettings(null);
      o.Data2.Constructor = -532532493;
      return o;
    },
    -2124403385: () => {
      const o = MakeTLAutoSaveException(null);
      o.Data2.Constructor = -2124403385;
      return o;
    },
    -934791986: () => {
      const o = MakeTLAutoSaveSettings(null);
      o.Data2.Constructor = -934791986;
      return o;
    },
    -1065882623: () => {
      const o = MakeTLAvailableReaction(null);
      o.Data2.Constructor = -1065882623;
      return o;
    },
    -177732982: () => {
      const o = MakeTLBankCardOpenUrl(null);
      o.Data2.Constructor = -177732982;
      return o;
    },
    -1012849566: () => {
      const o = MakeTLBaseThemeClassic(null);
      o.Data2.Constructor = -1012849566;
      return o;
    },
    -69724536: () => {
      const o = MakeTLBaseThemeDay(null);
      o.Data2.Constructor = -69724536;
      return o;
    },
    -1212997976: () => {
      const o = MakeTLBaseThemeNight(null);
      o.Data2.Constructor = -1212997976;
      return o;
    },
    1834973166: () => {
      const o = MakeTLBaseThemeTinted(null);
      o.Data2.Constructor = 1834973166;
      return o;
    },
    1527845466: () => {
      const o = MakeTLBaseThemeArctic(null);
      o.Data2.Constructor = 1527845466;
      return o;
    },
    1840491641: () => {
      const o = MakeTLBizDataRaw(null);
      o.Data2.Constructor = 1840491641;
      return o;
    },
    -1132882121: () => {
      const o = MakeTLBoolFalse(null);
      o.Data2.Constructor = -1132882121;
      return o;
    },
    -1720552011: () => {
      const o = MakeTLBoolTrue(null);
      o.Data2.Constructor = -1720552011;
      return o;
    },
    706514033: () => new TLBoost(),
    245261184: () => new TLBooster(),
    1571189943: () => new TLBotAppNotModified(),
    -1778593322: () => new TLBotApp(),
    -1032140601: () => new TLBotCommand(),
    795652779: () => new TLBotCommandScopeDefault(),
    1011811544: () => new TLBotCommandScopeUsers(),
    1877059713: () => new TLBotCommandScopeChats(),
    -1180016534: () => new TLBotCommandScopeChatAdmins(),
    -610432643: () => new TLBotCommandScopePeer(),
    */
  };
  
  
  