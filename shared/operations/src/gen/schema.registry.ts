import { TLObject }                                                          from '@monstrs/mtproto-tl-core'

import { AccountDaysTTL }                                                    from './account-days-ttl.js'
import { AccountAcceptAuthorization }                                        from './account.accept-authorization.js'
import { AccountAuthorizationForm }                                          from './account.authorization-form.js'
import { AccountAuthorizations }                                             from './account.authorizations.js'
import { AccountAutoDownloadSettings }                                       from './account.auto-download-settings.js'
import { AccountAutoSaveSettings }                                           from './account.auto-save-settings.js'
import { AccountCancelPasswordEmail }                                        from './account.cancel-password-email.js'
import { AccountChangeAuthorizationSettings }                                from './account.change-authorization-settings.js'
import { AccountChangePhone }                                                from './account.change-phone.js'
import { AccountCheckUsername }                                              from './account.check-username.js'
import { AccountClearRecentEmojiStatuses }                                   from './account.clear-recent-emoji-statuses.js'
import { AccountConfirmPasswordEmail }                                       from './account.confirm-password-email.js'
import { AccountConfirmPhone }                                               from './account.confirm-phone.js'
import { AccountContentSettings }                                            from './account.content-settings.js'
import { AccountCreateTheme }                                                from './account.create-theme.js'
import { AccountDeclinePasswordReset }                                       from './account.decline-password-reset.js'
import { AccountDeleteAccount }                                              from './account.delete-account.js'
import { AccountDeleteAutoSaveExceptions }                                   from './account.delete-auto-save-exceptions.js'
import { AccountDeleteSecureValue }                                          from './account.delete-secure-value.js'
import { AccountEmailVerifiedLogin }                                         from './account.email-verified-login.js'
import { AccountEmailVerified }                                              from './account.email-verified.js'
import { AccountEmojiStatusesNotModified }                                   from './account.emoji-statuses-not-modified.js'
import { AccountEmojiStatuses }                                              from './account.emoji-statuses.js'
import { AccountFinishTakeoutSession }                                       from './account.finish-takeout-session.js'
import { AccountGetAccountTTL }                                              from './account.get-account-ttl.js'
import { AccountGetAllSecureValues }                                         from './account.get-all-secure-values.js'
import { AccountGetAuthorizationForm }                                       from './account.get-authorization-form.js'
import { AccountGetAuthorizations }                                          from './account.get-authorizations.js'
import { AccountGetAutoDownloadSettings }                                    from './account.get-auto-download-settings.js'
import { AccountGetAutoSaveSettings }                                        from './account.get-auto-save-settings.js'
import { AccountGetChatThemes }                                              from './account.get-chat-themes.js'
import { AccountGetContactSignUpNotification }                               from './account.get-contact-sign-up-notification.js'
import { AccountGetContentSettings }                                         from './account.get-content-settings.js'
import { AccountGetDefaultEmojiStatuses }                                    from './account.get-default-emoji-statuses.js'
import { AccountGetDefaultGroupPhotoEmojis }                                 from './account.get-default-group-photo-emojis.js'
import { AccountGetDefaultProfilePhotoEmojis }                               from './account.get-default-profile-photo-emojis.js'
import { AccountGetGlobalPrivacySettings }                                   from './account.get-global-privacy-settings.js'
import { AccountGetMultiWallPapers }                                         from './account.get-multi-wall-papers.js'
import { AccountGetNotifyExceptions }                                        from './account.get-notify-exceptions.js'
import { AccountGetNotifySettings }                                          from './account.get-notify-settings.js'
import { AccountGetPasswordSettings }                                        from './account.get-password-settings.js'
import { AccountGetPassword }                                                from './account.get-password.js'
import { AccountGetPrivacy }                                                 from './account.get-privacy.js'
import { AccountGetRecentEmojiStatuses }                                     from './account.get-recent-emoji-statuses.js'
import { AccountGetSavedRingtones }                                          from './account.get-saved-ringtones.js'
import { AccountGetSecureValue }                                             from './account.get-secure-value.js'
import { AccountGetTheme }                                                   from './account.get-theme.js'
import { AccountGetThemes }                                                  from './account.get-themes.js'
import { AccountGetTmpPassword }                                             from './account.get-tmp-password.js'
import { AccountGetWallPaper }                                               from './account.get-wall-paper.js'
import { AccountGetWallPapers }                                              from './account.get-wall-papers.js'
import { AccountGetWebAuthorizations }                                       from './account.get-web-authorizations.js'
import { AccountInitTakeoutSession }                                         from './account.init-takeout-session.js'
import { AccountInstallTheme }                                               from './account.install-theme.js'
import { AccountInstallWallPaper }                                           from './account.install-wall-paper.js'
import { AccountPasswordInputSettings }                                      from './account.password-input-settings.js'
import { AccountPasswordSettings }                                           from './account.password-settings.js'
import { AccountPassword }                                                   from './account.password.js'
import { AccountPrivacyRules }                                               from './account.privacy-rules.js'
import { AccountRegisterDevice }                                             from './account.register-device.js'
import { AccountReorderUsernames }                                           from './account.reorder-usernames.js'
import { AccountReportPeer }                                                 from './account.report-peer.js'
import { AccountReportProfilePhoto }                                         from './account.report-profile-photo.js'
import { AccountResendPasswordEmail }                                        from './account.resend-password-email.js'
import { AccountResetAuthorization }                                         from './account.reset-authorization.js'
import { AccountResetNotifySettings }                                        from './account.reset-notify-settings.js'
import { AccountResetPasswordFailedWait }                                    from './account.reset-password-failed-wait.js'
import { AccountResetPasswordOk }                                            from './account.reset-password-ok.js'
import { AccountResetPasswordRequestedWait }                                 from './account.reset-password-requested-wait.js'
import { AccountResetPassword }                                              from './account.reset-password.js'
import { AccountResetWallPapers }                                            from './account.reset-wall-papers.js'
import { AccountResetWebAuthorization }                                      from './account.reset-web-authorization.js'
import { AccountResetWebAuthorizations }                                     from './account.reset-web-authorizations.js'
import { AccountSaveAutoDownloadSettings }                                   from './account.save-auto-download-settings.js'
import { AccountSaveAutoSaveSettings }                                       from './account.save-auto-save-settings.js'
import { AccountSaveRingtone }                                               from './account.save-ringtone.js'
import { AccountSaveSecureValue }                                            from './account.save-secure-value.js'
import { AccountSaveTheme }                                                  from './account.save-theme.js'
import { AccountSaveWallPaper }                                              from './account.save-wall-paper.js'
import { AccountSavedRingtoneConverted }                                     from './account.saved-ringtone-converted.js'
import { AccountSavedRingtone }                                              from './account.saved-ringtone.js'
import { AccountSavedRingtonesNotModified }                                  from './account.saved-ringtones-not-modified.js'
import { AccountSavedRingtones }                                             from './account.saved-ringtones.js'
import { AccountSendChangePhoneCode }                                        from './account.send-change-phone-code.js'
import { AccountSendConfirmPhoneCode }                                       from './account.send-confirm-phone-code.js'
import { AccountSendVerifyEmailCode }                                        from './account.send-verify-email-code.js'
import { AccountSendVerifyPhoneCode }                                        from './account.send-verify-phone-code.js'
import { AccountSentEmailCode }                                              from './account.sent-email-code.js'
import { AccountSetAccountTTL }                                              from './account.set-account-ttl.js'
import { AccountSetAuthorizationTTL }                                        from './account.set-authorization-ttl.js'
import { AccountSetContactSignUpNotification }                               from './account.set-contact-sign-up-notification.js'
import { AccountSetContentSettings }                                         from './account.set-content-settings.js'
import { AccountSetGlobalPrivacySettings }                                   from './account.set-global-privacy-settings.js'
import { AccountSetPrivacy }                                                 from './account.set-privacy.js'
import { AccountTakeout }                                                    from './account.takeout.js'
import { AccountThemesNotModified }                                          from './account.themes-not-modified.js'
import { AccountThemes }                                                     from './account.themes.js'
import { AccountTmpPassword }                                                from './account.tmp-password.js'
import { AccountToggleUsername }                                             from './account.toggle-username.js'
import { AccountUnregisterDevice }                                           from './account.unregister-device.js'
import { AccountUpdateDeviceLocked }                                         from './account.update-device-locked.js'
import { AccountUpdateEmojiStatus }                                          from './account.update-emoji-status.js'
import { AccountUpdateNotifySettings }                                       from './account.update-notify-settings.js'
import { AccountUpdatePasswordSettings }                                     from './account.update-password-settings.js'
import { AccountUpdateProfile }                                              from './account.update-profile.js'
import { AccountUpdateStatus }                                               from './account.update-status.js'
import { AccountUpdateTheme }                                                from './account.update-theme.js'
import { AccountUpdateUsername }                                             from './account.update-username.js'
import { AccountUploadRingtone }                                             from './account.upload-ringtone.js'
import { AccountUploadTheme }                                                from './account.upload-theme.js'
import { AccountUploadWallPaper }                                            from './account.upload-wall-paper.js'
import { AccountVerifyEmail }                                                from './account.verify-email.js'
import { AccountVerifyPhone }                                                from './account.verify-phone.js'
import { AccountWallPapersNotModified }                                      from './account.wall-papers-not-modified.js'
import { AccountWallPapers }                                                 from './account.wall-papers.js'
import { AccountWebAuthorizations }                                          from './account.web-authorizations.js'
import { AppWebViewResultUrl }                                               from './app-web-view-result-url.js'
import { AttachMenuBotIconColor }                                            from './attach-menu-bot-icon-color.js'
import { AttachMenuBotIcon }                                                 from './attach-menu-bot-icon.js'
import { AttachMenuBot }                                                     from './attach-menu-bot.js'
import { AttachMenuBotsBot }                                                 from './attach-menu-bots-bot.js'
import { AttachMenuBotsNotModified }                                         from './attach-menu-bots-not-modified.js'
import { AttachMenuBots }                                                    from './attach-menu-bots.js'
import { AttachMenuPeerTypeBotPM }                                           from './attach-menu-peer-type-bot-pm.js'
import { AttachMenuPeerTypeBroadcast }                                       from './attach-menu-peer-type-broadcast.js'
import { AttachMenuPeerTypeChat }                                            from './attach-menu-peer-type-chat.js'
import { AttachMenuPeerTypePM }                                              from './attach-menu-peer-type-pm.js'
import { AttachMenuPeerTypeSameBotPM }                                       from './attach-menu-peer-type-same-bot-pm.js'
import { AuthAcceptLoginToken }                                              from './auth.accept-login-token.js'
import { AuthAuthorizationSignUpRequired }                                   from './auth.authorization-sign-up-required.js'
import { AuthAuthorization }                                                 from './auth.authorization.js'
import { AuthBindTempAuthKey }                                               from './auth.bind-temp-auth-key.js'
import { AuthCancelCode }                                                    from './auth.cancel-code.js'
import { AuthCheckPassword }                                                 from './auth.check-password.js'
import { AuthCheckRecoveryPassword }                                         from './auth.check-recovery-password.js'
import { AuthCodeTypeCall }                                                  from './auth.code-type-call.js'
import { AuthCodeTypeFlashCall }                                             from './auth.code-type-flash-call.js'
import { AuthCodeTypeFragmentSms }                                           from './auth.code-type-fragment-sms.js'
import { AuthCodeTypeMissedCall }                                            from './auth.code-type-missed-call.js'
import { AuthCodeTypeSms }                                                   from './auth.code-type-sms.js'
import { AuthDropTempAuthKeys }                                              from './auth.drop-temp-auth-keys.js'
import { AuthExportAuthorization }                                           from './auth.export-authorization.js'
import { AuthExportLoginToken }                                              from './auth.export-login-token.js'
import { AuthExportedAuthorization }                                         from './auth.exported-authorization.js'
import { AuthImportAuthorization }                                           from './auth.import-authorization.js'
import { AuthImportBotAuthorization }                                        from './auth.import-bot-authorization.js'
import { AuthImportLoginToken }                                              from './auth.import-login-token.js'
import { AuthImportWebTokenAuthorization }                                   from './auth.import-web-token-authorization.js'
import { AuthLogOut }                                                        from './auth.log-out.js'
import { AuthLoggedOut }                                                     from './auth.logged-out.js'
import { AuthLoginTokenMigrateTo }                                           from './auth.login-token-migrate-to.js'
import { AuthLoginTokenSuccess }                                             from './auth.login-token-success.js'
import { AuthLoginToken }                                                    from './auth.login-token.js'
import { AuthPasswordRecovery }                                              from './auth.password-recovery.js'
import { AuthRecoverPassword }                                               from './auth.recover-password.js'
import { AuthRequestFirebaseSms }                                            from './auth.request-firebase-sms.js'
import { AuthRequestPasswordRecovery }                                       from './auth.request-password-recovery.js'
import { AuthResendCode }                                                    from './auth.resend-code.js'
import { AuthResetAuthorizations }                                           from './auth.reset-authorizations.js'
import { AuthResetLoginEmail }                                               from './auth.reset-login-email.js'
import { AuthSendCode }                                                      from './auth.send-code.js'
import { AuthSentCodeSuccess }                                               from './auth.sent-code-success.js'
import { AuthSentCodeTypeApp }                                               from './auth.sent-code-type-app.js'
import { AuthSentCodeTypeCall }                                              from './auth.sent-code-type-call.js'
import { AuthSentCodeTypeEmailCode }                                         from './auth.sent-code-type-email-code.js'
import { AuthSentCodeTypeFirebaseSms }                                       from './auth.sent-code-type-firebase-sms.js'
import { AuthSentCodeTypeFlashCall }                                         from './auth.sent-code-type-flash-call.js'
import { AuthSentCodeTypeFragmentSms }                                       from './auth.sent-code-type-fragment-sms.js'
import { AuthSentCodeTypeMissedCall }                                        from './auth.sent-code-type-missed-call.js'
import { AuthSentCodeTypeSetUpEmailRequired }                                from './auth.sent-code-type-set-up-email-required.js'
import { AuthSentCodeTypeSms }                                               from './auth.sent-code-type-sms.js'
import { AuthSentCode }                                                      from './auth.sent-code.js'
import { AuthSignIn }                                                        from './auth.sign-in.js'
import { AuthSignUp }                                                        from './auth.sign-up.js'
import { Authorization }                                                     from './authorization.js'
import { AutoDownloadSettings }                                              from './auto-download-settings.js'
import { AutoSaveException }                                                 from './auto-save-exception.js'
import { AutoSaveSettings }                                                  from './auto-save-settings.js'
import { AvailableReaction }                                                 from './available-reaction.js'
import { BadMsgNotification }                                                from './bad-msg-notification.js'
import { BadServerSalt }                                                     from './bad-server-salt.js'
import { BankCardOpenUrl }                                                   from './bank-card-open-url.js'
import { BaseThemeArctic }                                                   from './base-theme-arctic.js'
import { BaseThemeClassic }                                                  from './base-theme-classic.js'
import { BaseThemeDay }                                                      from './base-theme-day.js'
import { BaseThemeNight }                                                    from './base-theme-night.js'
import { BaseThemeTinted }                                                   from './base-theme-tinted.js'
import { BindAuthKeyInner }                                                  from './bind-auth-key-inner.js'
import { BoolFalse }                                                         from './bool-false.js'
import { BoolTrue }                                                          from './bool-true.js'
import { BotAppNotModified }                                                 from './bot-app-not-modified.js'
import { BotApp }                                                            from './bot-app.js'
import { BotCommandScopeChatAdmins }                                         from './bot-command-scope-chat-admins.js'
import { BotCommandScopeChats }                                              from './bot-command-scope-chats.js'
import { BotCommandScopeDefault }                                            from './bot-command-scope-default.js'
import { BotCommandScopePeerAdmins }                                         from './bot-command-scope-peer-admins.js'
import { BotCommandScopePeerUser }                                           from './bot-command-scope-peer-user.js'
import { BotCommandScopePeer }                                               from './bot-command-scope-peer.js'
import { BotCommandScopeUsers }                                              from './bot-command-scope-users.js'
import { BotCommand }                                                        from './bot-command.js'
import { BotInfo }                                                           from './bot-info.js'
import { BotInlineMediaResult }                                              from './bot-inline-media-result.js'
import { BotInlineMessageMediaAuto }                                         from './bot-inline-message-media-auto.js'
import { BotInlineMessageMediaContact }                                      from './bot-inline-message-media-contact.js'
import { BotInlineMessageMediaGeo }                                          from './bot-inline-message-media-geo.js'
import { BotInlineMessageMediaInvoice }                                      from './bot-inline-message-media-invoice.js'
import { BotInlineMessageMediaVenue }                                        from './bot-inline-message-media-venue.js'
import { BotInlineMessageText }                                              from './bot-inline-message-text.js'
import { BotInlineResult }                                                   from './bot-inline-result.js'
import { BotMenuButtonCommands }                                             from './bot-menu-button-commands.js'
import { BotMenuButtonDefault }                                              from './bot-menu-button-default.js'
import { BotMenuButton }                                                     from './bot-menu-button.js'
import { BotsAnswerWebhookJSONQuery }                                        from './bots.answer-webhook-json-query.js'
import { BotsBotInfo }                                                       from './bots.bot-info.js'
import { BotsGetBotCommands }                                                from './bots.get-bot-commands.js'
import { BotsGetBotInfo }                                                    from './bots.get-bot-info.js'
import { BotsGetBotMenuButton }                                              from './bots.get-bot-menu-button.js'
import { BotsReorderUsernames }                                              from './bots.reorder-usernames.js'
import { BotsResetBotCommands }                                              from './bots.reset-bot-commands.js'
import { BotsSendCustomRequest }                                             from './bots.send-custom-request.js'
import { BotsSetBotBroadcastDefaultAdminRights }                             from './bots.set-bot-broadcast-default-admin-rights.js'
import { BotsSetBotCommands }                                                from './bots.set-bot-commands.js'
import { BotsSetBotGroupDefaultAdminRights }                                 from './bots.set-bot-group-default-admin-rights.js'
import { BotsSetBotInfo }                                                    from './bots.set-bot-info.js'
import { BotsSetBotMenuButton }                                              from './bots.set-bot-menu-button.js'
import { BotsToggleUsername }                                                from './bots.toggle-username.js'
import { CdnConfig }                                                         from './cdn-config.js'
import { CdnPublicKey }                                                      from './cdn-public-key.js'
import { ChannelAdminLogEventActionChangeAbout }                             from './channel-admin-log-event-action-change-about.js'
import { ChannelAdminLogEventActionChangeAvailableReactions }                from './channel-admin-log-event-action-change-available-reactions.js'
import { ChannelAdminLogEventActionChangeHistoryTTL }                        from './channel-admin-log-event-action-change-history-ttl.js'
import { ChannelAdminLogEventActionChangeLinkedChat }                        from './channel-admin-log-event-action-change-linked-chat.js'
import { ChannelAdminLogEventActionChangeLocation }                          from './channel-admin-log-event-action-change-location.js'
import { ChannelAdminLogEventActionChangePhoto }                             from './channel-admin-log-event-action-change-photo.js'
import { ChannelAdminLogEventActionChangeStickerSet }                        from './channel-admin-log-event-action-change-sticker-set.js'
import { ChannelAdminLogEventActionChangeTitle }                             from './channel-admin-log-event-action-change-title.js'
import { ChannelAdminLogEventActionChangeUsername }                          from './channel-admin-log-event-action-change-username.js'
import { ChannelAdminLogEventActionChangeUsernames }                         from './channel-admin-log-event-action-change-usernames.js'
import { ChannelAdminLogEventActionCreateTopic }                             from './channel-admin-log-event-action-create-topic.js'
import { ChannelAdminLogEventActionDefaultBannedRights }                     from './channel-admin-log-event-action-default-banned-rights.js'
import { ChannelAdminLogEventActionDeleteMessage }                           from './channel-admin-log-event-action-delete-message.js'
import { ChannelAdminLogEventActionDeleteTopic }                             from './channel-admin-log-event-action-delete-topic.js'
import { ChannelAdminLogEventActionDiscardGroupCall }                        from './channel-admin-log-event-action-discard-group-call.js'
import { ChannelAdminLogEventActionEditMessage }                             from './channel-admin-log-event-action-edit-message.js'
import { ChannelAdminLogEventActionEditTopic }                               from './channel-admin-log-event-action-edit-topic.js'
import { ChannelAdminLogEventActionExportedInviteDelete }                    from './channel-admin-log-event-action-exported-invite-delete.js'
import { ChannelAdminLogEventActionExportedInviteEdit }                      from './channel-admin-log-event-action-exported-invite-edit.js'
import { ChannelAdminLogEventActionExportedInviteRevoke }                    from './channel-admin-log-event-action-exported-invite-revoke.js'
import { ChannelAdminLogEventActionParticipantInvite }                       from './channel-admin-log-event-action-participant-invite.js'
import { ChannelAdminLogEventActionParticipantJoinByInvite }                 from './channel-admin-log-event-action-participant-join-by-invite.js'
import { ChannelAdminLogEventActionParticipantJoinByRequest }                from './channel-admin-log-event-action-participant-join-by-request.js'
import { ChannelAdminLogEventActionParticipantJoin }                         from './channel-admin-log-event-action-participant-join.js'
import { ChannelAdminLogEventActionParticipantLeave }                        from './channel-admin-log-event-action-participant-leave.js'
import { ChannelAdminLogEventActionParticipantMute }                         from './channel-admin-log-event-action-participant-mute.js'
import { ChannelAdminLogEventActionParticipantToggleAdmin }                  from './channel-admin-log-event-action-participant-toggle-admin.js'
import { ChannelAdminLogEventActionParticipantToggleBan }                    from './channel-admin-log-event-action-participant-toggle-ban.js'
import { ChannelAdminLogEventActionParticipantUnmute }                       from './channel-admin-log-event-action-participant-unmute.js'
import { ChannelAdminLogEventActionParticipantVolume }                       from './channel-admin-log-event-action-participant-volume.js'
import { ChannelAdminLogEventActionPinTopic }                                from './channel-admin-log-event-action-pin-topic.js'
import { ChannelAdminLogEventActionSendMessage }                             from './channel-admin-log-event-action-send-message.js'
import { ChannelAdminLogEventActionStartGroupCall }                          from './channel-admin-log-event-action-start-group-call.js'
import { ChannelAdminLogEventActionStopPoll }                                from './channel-admin-log-event-action-stop-poll.js'
import { ChannelAdminLogEventActionToggleAntiSpam }                          from './channel-admin-log-event-action-toggle-anti-spam.js'
import { ChannelAdminLogEventActionToggleForum }                             from './channel-admin-log-event-action-toggle-forum.js'
import { ChannelAdminLogEventActionToggleGroupCallSetting }                  from './channel-admin-log-event-action-toggle-group-call-setting.js'
import { ChannelAdminLogEventActionToggleInvites }                           from './channel-admin-log-event-action-toggle-invites.js'
import { ChannelAdminLogEventActionToggleNoForwards }                        from './channel-admin-log-event-action-toggle-no-forwards.js'
import { ChannelAdminLogEventActionTogglePreHistoryHidden }                  from './channel-admin-log-event-action-toggle-pre-history-hidden.js'
import { ChannelAdminLogEventActionToggleSignatures }                        from './channel-admin-log-event-action-toggle-signatures.js'
import { ChannelAdminLogEventActionToggleSlowMode }                          from './channel-admin-log-event-action-toggle-slow-mode.js'
import { ChannelAdminLogEventActionUpdatePinned }                            from './channel-admin-log-event-action-update-pinned.js'
import { ChannelAdminLogEvent }                                              from './channel-admin-log-event.js'
import { ChannelAdminLogEventsFilter }                                       from './channel-admin-log-events-filter.js'
import { ChannelForbidden }                                                  from './channel-forbidden.js'
import { ChannelFull }                                                       from './channel-full.js'
import { ChannelLocationEmpty }                                              from './channel-location-empty.js'
import { ChannelLocation }                                                   from './channel-location.js'
import { ChannelMessagesFilterEmpty }                                        from './channel-messages-filter-empty.js'
import { ChannelMessagesFilter }                                             from './channel-messages-filter.js'
import { ChannelParticipantAdmin }                                           from './channel-participant-admin.js'
import { ChannelParticipantBanned }                                          from './channel-participant-banned.js'
import { ChannelParticipantCreator }                                         from './channel-participant-creator.js'
import { ChannelParticipantLeft }                                            from './channel-participant-left.js'
import { ChannelParticipantSelf }                                            from './channel-participant-self.js'
import { ChannelParticipant }                                                from './channel-participant.js'
import { ChannelParticipantsAdmins }                                         from './channel-participants-admins.js'
import { ChannelParticipantsBanned }                                         from './channel-participants-banned.js'
import { ChannelParticipantsBots }                                           from './channel-participants-bots.js'
import { ChannelParticipantsContacts }                                       from './channel-participants-contacts.js'
import { ChannelParticipantsKicked }                                         from './channel-participants-kicked.js'
import { ChannelParticipantsMentions }                                       from './channel-participants-mentions.js'
import { ChannelParticipantsRecent }                                         from './channel-participants-recent.js'
import { ChannelParticipantsSearch }                                         from './channel-participants-search.js'
import { Channel }                                                           from './channel.js'
import { ChannelsAdminLogResults }                                           from './channels.admin-log-results.js'
import { ChannelsChannelParticipant }                                        from './channels.channel-participant.js'
import { ChannelsChannelParticipantsNotModified }                            from './channels.channel-participants-not-modified.js'
import { ChannelsChannelParticipants }                                       from './channels.channel-participants.js'
import { ChannelsCheckUsername }                                             from './channels.check-username.js'
import { ChannelsConvertToGigagroup }                                        from './channels.convert-to-gigagroup.js'
import { ChannelsCreateChannel }                                             from './channels.create-channel.js'
import { ChannelsCreateForumTopic }                                          from './channels.create-forum-topic.js'
import { ChannelsDeactivateAllUsernames }                                    from './channels.deactivate-all-usernames.js'
import { ChannelsDeleteChannel }                                             from './channels.delete-channel.js'
import { ChannelsDeleteHistory }                                             from './channels.delete-history.js'
import { ChannelsDeleteMessages }                                            from './channels.delete-messages.js'
import { ChannelsDeleteParticipantHistory }                                  from './channels.delete-participant-history.js'
import { ChannelsDeleteTopicHistory }                                        from './channels.delete-topic-history.js'
import { ChannelsEditAdmin }                                                 from './channels.edit-admin.js'
import { ChannelsEditBanned }                                                from './channels.edit-banned.js'
import { ChannelsEditCreator }                                               from './channels.edit-creator.js'
import { ChannelsEditForumTopic }                                            from './channels.edit-forum-topic.js'
import { ChannelsEditLocation }                                              from './channels.edit-location.js'
import { ChannelsEditPhoto }                                                 from './channels.edit-photo.js'
import { ChannelsEditTitle }                                                 from './channels.edit-title.js'
import { ChannelsExportMessageLink }                                         from './channels.export-message-link.js'
import { ChannelsGetAdminLog }                                               from './channels.get-admin-log.js'
import { ChannelsGetAdminedPublicChannels }                                  from './channels.get-admined-public-channels.js'
import { ChannelsGetChannels }                                               from './channels.get-channels.js'
import { ChannelsGetForumTopicsByID }                                        from './channels.get-forum-topics-by-id.js'
import { ChannelsGetForumTopics }                                            from './channels.get-forum-topics.js'
import { ChannelsGetFullChannel }                                            from './channels.get-full-channel.js'
import { ChannelsGetGroupsForDiscussion }                                    from './channels.get-groups-for-discussion.js'
import { ChannelsGetInactiveChannels }                                       from './channels.get-inactive-channels.js'
import { ChannelsGetLeftChannels }                                           from './channels.get-left-channels.js'
import { ChannelsGetMessages }                                               from './channels.get-messages.js'
import { ChannelsGetParticipant }                                            from './channels.get-participant.js'
import { ChannelsGetParticipants }                                           from './channels.get-participants.js'
import { ChannelsGetSendAs }                                                 from './channels.get-send-as.js'
import { ChannelsGetSponsoredMessages }                                      from './channels.get-sponsored-messages.js'
import { ChannelsInviteToChannel }                                           from './channels.invite-to-channel.js'
import { ChannelsJoinChannel }                                               from './channels.join-channel.js'
import { ChannelsLeaveChannel }                                              from './channels.leave-channel.js'
import { ChannelsReadHistory }                                               from './channels.read-history.js'
import { ChannelsReadMessageContents }                                       from './channels.read-message-contents.js'
import { ChannelsReorderPinnedForumTopics }                                  from './channels.reorder-pinned-forum-topics.js'
import { ChannelsReorderUsernames }                                          from './channels.reorder-usernames.js'
import { ChannelsReportAntiSpamFalsePositive }                               from './channels.report-anti-spam-false-positive.js'
import { ChannelsReportSpam }                                                from './channels.report-spam.js'
import { ChannelsSendAsPeers }                                               from './channels.send-as-peers.js'
import { ChannelsSetDiscussionGroup }                                        from './channels.set-discussion-group.js'
import { ChannelsSetStickers }                                               from './channels.set-stickers.js'
import { ChannelsToggleAntiSpam }                                            from './channels.toggle-anti-spam.js'
import { ChannelsToggleForum }                                               from './channels.toggle-forum.js'
import { ChannelsToggleJoinRequest }                                         from './channels.toggle-join-request.js'
import { ChannelsToggleJoinToSend }                                          from './channels.toggle-join-to-send.js'
import { ChannelsToggleParticipantsHidden }                                  from './channels.toggle-participants-hidden.js'
import { ChannelsTogglePreHistoryHidden }                                    from './channels.toggle-pre-history-hidden.js'
import { ChannelsToggleSignatures }                                          from './channels.toggle-signatures.js'
import { ChannelsToggleSlowMode }                                            from './channels.toggle-slow-mode.js'
import { ChannelsToggleUsername }                                            from './channels.toggle-username.js'
import { ChannelsUpdatePinnedForumTopic }                                    from './channels.update-pinned-forum-topic.js'
import { ChannelsUpdateUsername }                                            from './channels.update-username.js'
import { ChannelsViewSponsoredMessage }                                      from './channels.view-sponsored-message.js'
import { ChatAdminRights }                                                   from './chat-admin-rights.js'
import { ChatAdminWithInvites }                                              from './chat-admin-with-invites.js'
import { ChatBannedRights }                                                  from './chat-banned-rights.js'
import { ChatEmpty }                                                         from './chat-empty.js'
import { ChatForbidden }                                                     from './chat-forbidden.js'
import { ChatFull }                                                          from './chat-full.js'
import { ChatInviteAlready }                                                 from './chat-invite-already.js'
import { ChatInviteExported }                                                from './chat-invite-exported.js'
import { ChatInviteImporter }                                                from './chat-invite-importer.js'
import { ChatInvitePeek }                                                    from './chat-invite-peek.js'
import { ChatInvitePublicJoinRequests }                                      from './chat-invite-public-join-requests.js'
import { ChatInvite }                                                        from './chat-invite.js'
import { ChatOnlines }                                                       from './chat-onlines.js'
import { ChatParticipantAdmin }                                              from './chat-participant-admin.js'
import { ChatParticipantCreator }                                            from './chat-participant-creator.js'
import { ChatParticipant }                                                   from './chat-participant.js'
import { ChatParticipantsForbidden }                                         from './chat-participants-forbidden.js'
import { ChatParticipants }                                                  from './chat-participants.js'
import { ChatPhotoEmpty }                                                    from './chat-photo-empty.js'
import { ChatPhoto }                                                         from './chat-photo.js'
import { ChatReactionsAll }                                                  from './chat-reactions-all.js'
import { ChatReactionsNone }                                                 from './chat-reactions-none.js'
import { ChatReactionsSome }                                                 from './chat-reactions-some.js'
import { Chat }                                                              from './chat.js'
import { ChatlistsChatlistInviteAlready }                                    from './chatlists.chatlist-invite-already.js'
import { ChatlistsChatlistInvite }                                           from './chatlists.chatlist-invite.js'
import { ChatlistsChatlistUpdates }                                          from './chatlists.chatlist-updates.js'
import { ChatlistsCheckChatlistInvite }                                      from './chatlists.check-chatlist-invite.js'
import { ChatlistsDeleteExportedInvite }                                     from './chatlists.delete-exported-invite.js'
import { ChatlistsEditExportedInvite }                                       from './chatlists.edit-exported-invite.js'
import { ChatlistsExportChatlistInvite }                                     from './chatlists.export-chatlist-invite.js'
import { ChatlistsExportedChatlistInvite }                                   from './chatlists.exported-chatlist-invite.js'
import { ChatlistsExportedInvites }                                          from './chatlists.exported-invites.js'
import { ChatlistsGetChatlistUpdates }                                       from './chatlists.get-chatlist-updates.js'
import { ChatlistsGetExportedInvites }                                       from './chatlists.get-exported-invites.js'
import { ChatlistsGetLeaveChatlistSuggestions }                              from './chatlists.get-leave-chatlist-suggestions.js'
import { ChatlistsHideChatlistUpdates }                                      from './chatlists.hide-chatlist-updates.js'
import { ChatlistsJoinChatlistInvite }                                       from './chatlists.join-chatlist-invite.js'
import { ChatlistsJoinChatlistUpdates }                                      from './chatlists.join-chatlist-updates.js'
import { ChatlistsLeaveChatlist }                                            from './chatlists.leave-chatlist.js'
import { ClientDHInnerData }                                                 from './client-dh-inner-data.js'
import { CodeSettings }                                                      from './code-settings.js'
import { Config }                                                            from './config.js'
import { ContactStatus }                                                     from './contact-status.js'
import { Contact }                                                           from './contact.js'
import { ContactsAcceptContact }                                             from './contacts.accept-contact.js'
import { ContactsAddContact }                                                from './contacts.add-contact.js'
import { ContactsBlockFromReplies }                                          from './contacts.block-from-replies.js'
import { ContactsBlock }                                                     from './contacts.block.js'
import { ContactsBlockedSlice }                                              from './contacts.blocked-slice.js'
import { ContactsBlocked }                                                   from './contacts.blocked.js'
import { ContactsContactsNotModified }                                       from './contacts.contacts-not-modified.js'
import { ContactsContacts }                                                  from './contacts.contacts.js'
import { ContactsDeleteByPhones }                                            from './contacts.delete-by-phones.js'
import { ContactsDeleteContacts }                                            from './contacts.delete-contacts.js'
import { ContactsExportContactToken }                                        from './contacts.export-contact-token.js'
import { ContactsFound }                                                     from './contacts.found.js'
import { ContactsGetBlocked }                                                from './contacts.get-blocked.js'
import { ContactsGetContactIDs }                                             from './contacts.get-contact-i-ds.js'
import { ContactsGetContacts }                                               from './contacts.get-contacts.js'
import { ContactsGetLocated }                                                from './contacts.get-located.js'
import { ContactsGetSaved }                                                  from './contacts.get-saved.js'
import { ContactsGetStatuses }                                               from './contacts.get-statuses.js'
import { ContactsGetTopPeers }                                               from './contacts.get-top-peers.js'
import { ContactsImportContactToken }                                        from './contacts.import-contact-token.js'
import { ContactsImportContacts }                                            from './contacts.import-contacts.js'
import { ContactsImportedContacts }                                          from './contacts.imported-contacts.js'
import { ContactsResetSaved }                                                from './contacts.reset-saved.js'
import { ContactsResetTopPeerRating }                                        from './contacts.reset-top-peer-rating.js'
import { ContactsResolvePhone }                                              from './contacts.resolve-phone.js'
import { ContactsResolveUsername }                                           from './contacts.resolve-username.js'
import { ContactsResolvedPeer }                                              from './contacts.resolved-peer.js'
import { ContactsSearch }                                                    from './contacts.search.js'
import { ContactsToggleTopPeers }                                            from './contacts.toggle-top-peers.js'
import { ContactsTopPeersDisabled }                                          from './contacts.top-peers-disabled.js'
import { ContactsTopPeersNotModified }                                       from './contacts.top-peers-not-modified.js'
import { ContactsTopPeers }                                                  from './contacts.top-peers.js'
import { ContactsUnblock }                                                   from './contacts.unblock.js'
import { DataJSON }                                                          from './data-json.js'
import { DcOption }                                                          from './dc-option.js'
import { DefaultHistoryTTL }                                                 from './default-history-ttl.js'
import { DestroyAuthKeyFail }                                                from './destroy-auth-key-fail.js'
import { DestroyAuthKeyNone }                                                from './destroy-auth-key-none.js'
import { DestroyAuthKeyOk }                                                  from './destroy-auth-key-ok.js'
import { DestroyAuthKey }                                                    from './destroy-auth-key.js'
import { DestroySessionNone }                                                from './destroy-session-none.js'
import { DestroySessionOk }                                                  from './destroy-session-ok.js'
import { DestroySession }                                                    from './destroy-session.js'
import { DhGenFail }                                                         from './dh-gen-fail.js'
import { DhGenOk }                                                           from './dh-gen-ok.js'
import { DhGenRetry }                                                        from './dh-gen-retry.js'
import { DialogFilterChatlist }                                              from './dialog-filter-chatlist.js'
import { DialogFilterDefault }                                               from './dialog-filter-default.js'
import { DialogFilterSuggested }                                             from './dialog-filter-suggested.js'
import { DialogFilter }                                                      from './dialog-filter.js'
import { DialogFolder }                                                      from './dialog-folder.js'
import { DialogPeerFolder }                                                  from './dialog-peer-folder.js'
import { DialogPeer }                                                        from './dialog-peer.js'
import { Dialog }                                                            from './dialog.js'
import { DocumentAttributeAnimated }                                         from './document-attribute-animated.js'
import { DocumentAttributeAudio }                                            from './document-attribute-audio.js'
import { DocumentAttributeCustomEmoji }                                      from './document-attribute-custom-emoji.js'
import { DocumentAttributeFilename }                                         from './document-attribute-filename.js'
import { DocumentAttributeHasStickers }                                      from './document-attribute-has-stickers.js'
import { DocumentAttributeImageSize }                                        from './document-attribute-image-size.js'
import { DocumentAttributeSticker }                                          from './document-attribute-sticker.js'
import { DocumentAttributeVideo }                                            from './document-attribute-video.js'
import { DocumentEmpty }                                                     from './document-empty.js'
import { Document }                                                          from './document.js'
import { DraftMessageEmpty }                                                 from './draft-message-empty.js'
import { DraftMessage }                                                      from './draft-message.js'
import { EmailVerificationApple }                                            from './email-verification-apple.js'
import { EmailVerificationCode }                                             from './email-verification-code.js'
import { EmailVerificationGoogle }                                           from './email-verification-google.js'
import { EmailVerifyPurposeLoginChange }                                     from './email-verify-purpose-login-change.js'
import { EmailVerifyPurposeLoginSetup }                                      from './email-verify-purpose-login-setup.js'
import { EmailVerifyPurposePassport }                                        from './email-verify-purpose-passport.js'
import { EmojiGroup }                                                        from './emoji-group.js'
import { EmojiKeywordDeleted }                                               from './emoji-keyword-deleted.js'
import { EmojiKeyword }                                                      from './emoji-keyword.js'
import { EmojiKeywordsDifference }                                           from './emoji-keywords-difference.js'
import { EmojiLanguage }                                                     from './emoji-language.js'
import { EmojiListNotModified }                                              from './emoji-list-not-modified.js'
import { EmojiList }                                                         from './emoji-list.js'
import { EmojiStatusEmpty }                                                  from './emoji-status-empty.js'
import { EmojiStatusUntil }                                                  from './emoji-status-until.js'
import { EmojiStatus }                                                       from './emoji-status.js'
import { EmojiURL }                                                          from './emoji-url.js'
import { EncryptedChatDiscarded }                                            from './encrypted-chat-discarded.js'
import { EncryptedChatEmpty }                                                from './encrypted-chat-empty.js'
import { EncryptedChatRequested }                                            from './encrypted-chat-requested.js'
import { EncryptedChatWaiting }                                              from './encrypted-chat-waiting.js'
import { EncryptedChat }                                                     from './encrypted-chat.js'
import { EncryptedFileEmpty }                                                from './encrypted-file-empty.js'
import { EncryptedFile }                                                     from './encrypted-file.js'
import { EncryptedMessageService }                                           from './encrypted-message-service.js'
import { EncryptedMessage }                                                  from './encrypted-message.js'
import { Error }                                                             from './error.js'
import { ExportedChatlistInvite }                                            from './exported-chatlist-invite.js'
import { ExportedContactToken }                                              from './exported-contact-token.js'
import { ExportedMessageLink }                                               from './exported-message-link.js'
import { FileHash }                                                          from './file-hash.js'
import { FolderPeer }                                                        from './folder-peer.js'
import { Folder }                                                            from './folder.js'
import { FoldersEditPeerFolders }                                            from './folders.edit-peer-folders.js'
import { ForumTopicDeleted }                                                 from './forum-topic-deleted.js'
import { ForumTopic }                                                        from './forum-topic.js'
import { FutureSalt }                                                        from './future-salt.js'
import { FutureSalts }                                                       from './future-salts.js'
import { Game }                                                              from './game.js'
import { GeoPointEmpty }                                                     from './geo-point-empty.js'
import { GeoPoint }                                                          from './geo-point.js'
import { GetFutureSalts }                                                    from './get-future-salts.js'
import { GlobalPrivacySettings }                                             from './global-privacy-settings.js'
import { GroupCallDiscarded }                                                from './group-call-discarded.js'
import { GroupCallParticipantVideoSourceGroup }                              from './group-call-participant-video-source-group.js'
import { GroupCallParticipantVideo }                                         from './group-call-participant-video.js'
import { GroupCallParticipant }                                              from './group-call-participant.js'
import { GroupCallStreamChannel }                                            from './group-call-stream-channel.js'
import { GroupCall }                                                         from './group-call.js'
import { GzipPacked }                                                        from './gzip-packed.js'
import { HelpAcceptTermsOfService }                                          from './help.accept-terms-of-service.js'
import { HelpAppConfigNotModified }                                          from './help.app-config-not-modified.js'
import { HelpAppConfig }                                                     from './help.app-config.js'
import { HelpAppUpdate }                                                     from './help.app-update.js'
import { HelpCountriesListNotModified }                                      from './help.countries-list-not-modified.js'
import { HelpCountriesList }                                                 from './help.countries-list.js'
import { HelpCountryCode }                                                   from './help.country-code.js'
import { HelpCountry }                                                       from './help.country.js'
import { HelpDeepLinkInfoEmpty }                                             from './help.deep-link-info-empty.js'
import { HelpDeepLinkInfo }                                                  from './help.deep-link-info.js'
import { HelpDismissSuggestion }                                             from './help.dismiss-suggestion.js'
import { HelpEditUserInfo }                                                  from './help.edit-user-info.js'
import { HelpGetAppChangelog }                                               from './help.get-app-changelog.js'
import { HelpGetAppConfig }                                                  from './help.get-app-config.js'
import { HelpGetAppUpdate }                                                  from './help.get-app-update.js'
import { HelpGetCdnConfig }                                                  from './help.get-cdn-config.js'
import { HelpGetConfig }                                                     from './help.get-config.js'
import { HelpGetCountriesList }                                              from './help.get-countries-list.js'
import { HelpGetDeepLinkInfo }                                               from './help.get-deep-link-info.js'
import { HelpGetInviteText }                                                 from './help.get-invite-text.js'
import { HelpGetNearestDc }                                                  from './help.get-nearest-dc.js'
import { HelpGetPassportConfig }                                             from './help.get-passport-config.js'
import { HelpGetPremiumPromo }                                               from './help.get-premium-promo.js'
import { HelpGetPromoData }                                                  from './help.get-promo-data.js'
import { HelpGetRecentMeUrls }                                               from './help.get-recent-me-urls.js'
import { HelpGetSupportName }                                                from './help.get-support-name.js'
import { HelpGetSupport }                                                    from './help.get-support.js'
import { HelpGetTermsOfServiceUpdate }                                       from './help.get-terms-of-service-update.js'
import { HelpGetUserInfo }                                                   from './help.get-user-info.js'
import { HelpHidePromoData }                                                 from './help.hide-promo-data.js'
import { HelpInviteText }                                                    from './help.invite-text.js'
import { HelpNoAppUpdate }                                                   from './help.no-app-update.js'
import { HelpPassportConfigNotModified }                                     from './help.passport-config-not-modified.js'
import { HelpPassportConfig }                                                from './help.passport-config.js'
import { HelpPremiumPromo }                                                  from './help.premium-promo.js'
import { HelpPromoDataEmpty }                                                from './help.promo-data-empty.js'
import { HelpPromoData }                                                     from './help.promo-data.js'
import { HelpRecentMeUrls }                                                  from './help.recent-me-urls.js'
import { HelpSaveAppLog }                                                    from './help.save-app-log.js'
import { HelpSetBotUpdatesStatus }                                           from './help.set-bot-updates-status.js'
import { HelpSupportName }                                                   from './help.support-name.js'
import { HelpSupport }                                                       from './help.support.js'
import { HelpTermsOfServiceUpdateEmpty }                                     from './help.terms-of-service-update-empty.js'
import { HelpTermsOfServiceUpdate }                                          from './help.terms-of-service-update.js'
import { HelpTermsOfService }                                                from './help.terms-of-service.js'
import { HelpUserInfoEmpty }                                                 from './help.user-info-empty.js'
import { HelpUserInfo }                                                      from './help.user-info.js'
import { HighScore }                                                         from './high-score.js'
import { HttpWait }                                                          from './http-wait.js'
import { ImportedContact }                                                   from './imported-contact.js'
import { InitConnection }                                                    from './init-connection.js'
import { InlineBotSwitchPM }                                                 from './inline-bot-switch-pm.js'
import { InlineBotWebView }                                                  from './inline-bot-web-view.js'
import { InlineQueryPeerTypeBotPM }                                          from './inline-query-peer-type-bot-pm.js'
import { InlineQueryPeerTypeBroadcast }                                      from './inline-query-peer-type-broadcast.js'
import { InlineQueryPeerTypeChat }                                           from './inline-query-peer-type-chat.js'
import { InlineQueryPeerTypeMegagroup }                                      from './inline-query-peer-type-megagroup.js'
import { InlineQueryPeerTypePM }                                             from './inline-query-peer-type-pm.js'
import { InlineQueryPeerTypeSameBotPM }                                      from './inline-query-peer-type-same-bot-pm.js'
import { InputAppEvent }                                                     from './input-app-event.js'
import { InputBotAppID }                                                     from './input-bot-app-id.js'
import { InputBotAppShortName }                                              from './input-bot-app-short-name.js'
import { InputBotInlineMessageGame }                                         from './input-bot-inline-message-game.js'
import { InputBotInlineMessageID }                                           from './input-bot-inline-message-id.js'
import { InputBotInlineMessageID64 }                                         from './input-bot-inline-message-id64.js'
import { InputBotInlineMessageMediaAuto }                                    from './input-bot-inline-message-media-auto.js'
import { InputBotInlineMessageMediaContact }                                 from './input-bot-inline-message-media-contact.js'
import { InputBotInlineMessageMediaGeo }                                     from './input-bot-inline-message-media-geo.js'
import { InputBotInlineMessageMediaInvoice }                                 from './input-bot-inline-message-media-invoice.js'
import { InputBotInlineMessageMediaVenue }                                   from './input-bot-inline-message-media-venue.js'
import { InputBotInlineMessageText }                                         from './input-bot-inline-message-text.js'
import { InputBotInlineResultDocument }                                      from './input-bot-inline-result-document.js'
import { InputBotInlineResultGame }                                          from './input-bot-inline-result-game.js'
import { InputBotInlineResultPhoto }                                         from './input-bot-inline-result-photo.js'
import { InputBotInlineResult }                                              from './input-bot-inline-result.js'
import { InputChannelEmpty }                                                 from './input-channel-empty.js'
import { InputChannelFromMessage }                                           from './input-channel-from-message.js'
import { InputChannel }                                                      from './input-channel.js'
import { InputChatPhotoEmpty }                                               from './input-chat-photo-empty.js'
import { InputChatPhoto }                                                    from './input-chat-photo.js'
import { InputChatUploadedPhoto }                                            from './input-chat-uploaded-photo.js'
import { InputChatlistDialogFilter }                                         from './input-chatlist-dialog-filter.js'
import { InputCheckPasswordEmpty }                                           from './input-check-password-empty.js'
import { InputCheckPasswordSRP }                                             from './input-check-password-srp.js'
import { InputClientProxy }                                                  from './input-client-proxy.js'
import { InputDialogPeerFolder }                                             from './input-dialog-peer-folder.js'
import { InputDialogPeer }                                                   from './input-dialog-peer.js'
import { InputDocumentEmpty }                                                from './input-document-empty.js'
import { InputDocumentFileLocation }                                         from './input-document-file-location.js'
import { InputDocument }                                                     from './input-document.js'
import { InputEncryptedChat }                                                from './input-encrypted-chat.js'
import { InputEncryptedFileBigUploaded }                                     from './input-encrypted-file-big-uploaded.js'
import { InputEncryptedFileEmpty }                                           from './input-encrypted-file-empty.js'
import { InputEncryptedFileLocation }                                        from './input-encrypted-file-location.js'
import { InputEncryptedFileUploaded }                                        from './input-encrypted-file-uploaded.js'
import { InputEncryptedFile }                                                from './input-encrypted-file.js'
import { InputFileBig }                                                      from './input-file-big.js'
import { InputFileLocation }                                                 from './input-file-location.js'
import { InputFile }                                                         from './input-file.js'
import { InputFolderPeer }                                                   from './input-folder-peer.js'
import { InputGameID }                                                       from './input-game-id.js'
import { InputGameShortName }                                                from './input-game-short-name.js'
import { InputGeoPointEmpty }                                                from './input-geo-point-empty.js'
import { InputGeoPoint }                                                     from './input-geo-point.js'
import { InputGroupCallStream }                                              from './input-group-call-stream.js'
import { InputGroupCall }                                                    from './input-group-call.js'
import { InputInvoiceMessage }                                               from './input-invoice-message.js'
import { InputInvoiceSlug }                                                  from './input-invoice-slug.js'
import { InputKeyboardButtonUrlAuth }                                        from './input-keyboard-button-url-auth.js'
import { InputKeyboardButtonUserProfile }                                    from './input-keyboard-button-user-profile.js'
import { InputMediaContact }                                                 from './input-media-contact.js'
import { InputMediaDice }                                                    from './input-media-dice.js'
import { InputMediaDocumentExternal }                                        from './input-media-document-external.js'
import { InputMediaDocument }                                                from './input-media-document.js'
import { InputMediaEmpty }                                                   from './input-media-empty.js'
import { InputMediaGame }                                                    from './input-media-game.js'
import { InputMediaGeoLive }                                                 from './input-media-geo-live.js'
import { InputMediaGeoPoint }                                                from './input-media-geo-point.js'
import { InputMediaInvoice }                                                 from './input-media-invoice.js'
import { InputMediaPhotoExternal }                                           from './input-media-photo-external.js'
import { InputMediaPhoto }                                                   from './input-media-photo.js'
import { InputMediaPoll }                                                    from './input-media-poll.js'
import { InputMediaUploadedDocument }                                        from './input-media-uploaded-document.js'
import { InputMediaUploadedPhoto }                                           from './input-media-uploaded-photo.js'
import { InputMediaVenue }                                                   from './input-media-venue.js'
import { InputMessageCallbackQuery }                                         from './input-message-callback-query.js'
import { InputMessageEntityMentionName }                                     from './input-message-entity-mention-name.js'
import { InputMessageID }                                                    from './input-message-id.js'
import { InputMessagePinned }                                                from './input-message-pinned.js'
import { InputMessageReplyTo }                                               from './input-message-reply-to.js'
import { InputMessagesFilterChatPhotos }                                     from './input-messages-filter-chat-photos.js'
import { InputMessagesFilterContacts }                                       from './input-messages-filter-contacts.js'
import { InputMessagesFilterDocument }                                       from './input-messages-filter-document.js'
import { InputMessagesFilterEmpty }                                          from './input-messages-filter-empty.js'
import { InputMessagesFilterGeo }                                            from './input-messages-filter-geo.js'
import { InputMessagesFilterGif }                                            from './input-messages-filter-gif.js'
import { InputMessagesFilterMusic }                                          from './input-messages-filter-music.js'
import { InputMessagesFilterMyMentions }                                     from './input-messages-filter-my-mentions.js'
import { InputMessagesFilterPhoneCalls }                                     from './input-messages-filter-phone-calls.js'
import { InputMessagesFilterPhotoVideo }                                     from './input-messages-filter-photo-video.js'
import { InputMessagesFilterPhotos }                                         from './input-messages-filter-photos.js'
import { InputMessagesFilterPinned }                                         from './input-messages-filter-pinned.js'
import { InputMessagesFilterRoundVideo }                                     from './input-messages-filter-round-video.js'
import { InputMessagesFilterRoundVoice }                                     from './input-messages-filter-round-voice.js'
import { InputMessagesFilterUrl }                                            from './input-messages-filter-url.js'
import { InputMessagesFilterVideo }                                          from './input-messages-filter-video.js'
import { InputMessagesFilterVoice }                                          from './input-messages-filter-voice.js'
import { InputNotifyBroadcasts }                                             from './input-notify-broadcasts.js'
import { InputNotifyChats }                                                  from './input-notify-chats.js'
import { InputNotifyForumTopic }                                             from './input-notify-forum-topic.js'
import { InputNotifyPeer }                                                   from './input-notify-peer.js'
import { InputNotifyUsers }                                                  from './input-notify-users.js'
import { InputPaymentCredentialsApplePay }                                   from './input-payment-credentials-apple-pay.js'
import { InputPaymentCredentialsGooglePay }                                  from './input-payment-credentials-google-pay.js'
import { InputPaymentCredentialsSaved }                                      from './input-payment-credentials-saved.js'
import { InputPaymentCredentials }                                           from './input-payment-credentials.js'
import { InputPeerChannelFromMessage }                                       from './input-peer-channel-from-message.js'
import { InputPeerChannel }                                                  from './input-peer-channel.js'
import { InputPeerChat }                                                     from './input-peer-chat.js'
import { InputPeerEmpty }                                                    from './input-peer-empty.js'
import { InputPeerNotifySettings }                                           from './input-peer-notify-settings.js'
import { InputPeerPhotoFileLocation }                                        from './input-peer-photo-file-location.js'
import { InputPeerSelf }                                                     from './input-peer-self.js'
import { InputPeerUserFromMessage }                                          from './input-peer-user-from-message.js'
import { InputPeerUser }                                                     from './input-peer-user.js'
import { InputPhoneCall }                                                    from './input-phone-call.js'
import { InputPhoneContact }                                                 from './input-phone-contact.js'
import { InputPhotoEmpty }                                                   from './input-photo-empty.js'
import { InputPhotoFileLocation }                                            from './input-photo-file-location.js'
import { InputPhotoLegacyFileLocation }                                      from './input-photo-legacy-file-location.js'
import { InputPhoto }                                                        from './input-photo.js'
import { InputPrivacyKeyAddedByPhone }                                       from './input-privacy-key-added-by-phone.js'
import { InputPrivacyKeyChatInvite }                                         from './input-privacy-key-chat-invite.js'
import { InputPrivacyKeyForwards }                                           from './input-privacy-key-forwards.js'
import { InputPrivacyKeyPhoneCall }                                          from './input-privacy-key-phone-call.js'
import { InputPrivacyKeyPhoneNumber }                                        from './input-privacy-key-phone-number.js'
import { InputPrivacyKeyPhoneP2P }                                           from './input-privacy-key-phone-p2-p.js'
import { InputPrivacyKeyProfilePhoto }                                       from './input-privacy-key-profile-photo.js'
import { InputPrivacyKeyStatusTimestamp }                                    from './input-privacy-key-status-timestamp.js'
import { InputPrivacyKeyVoiceMessages }                                      from './input-privacy-key-voice-messages.js'
import { InputPrivacyValueAllowAll }                                         from './input-privacy-value-allow-all.js'
import { InputPrivacyValueAllowChatParticipants }                            from './input-privacy-value-allow-chat-participants.js'
import { InputPrivacyValueAllowContacts }                                    from './input-privacy-value-allow-contacts.js'
import { InputPrivacyValueAllowUsers }                                       from './input-privacy-value-allow-users.js'
import { InputPrivacyValueDisallowAll }                                      from './input-privacy-value-disallow-all.js'
import { InputPrivacyValueDisallowChatParticipants }                         from './input-privacy-value-disallow-chat-participants.js'
import { InputPrivacyValueDisallowContacts }                                 from './input-privacy-value-disallow-contacts.js'
import { InputPrivacyValueDisallowUsers }                                    from './input-privacy-value-disallow-users.js'
import { InputReportReasonChildAbuse }                                       from './input-report-reason-child-abuse.js'
import { InputReportReasonCopyright }                                        from './input-report-reason-copyright.js'
import { InputReportReasonFake }                                             from './input-report-reason-fake.js'
import { InputReportReasonGeoIrrelevant }                                    from './input-report-reason-geo-irrelevant.js'
import { InputReportReasonIllegalDrugs }                                     from './input-report-reason-illegal-drugs.js'
import { InputReportReasonOther }                                            from './input-report-reason-other.js'
import { InputReportReasonPersonalDetails }                                  from './input-report-reason-personal-details.js'
import { InputReportReasonPornography }                                      from './input-report-reason-pornography.js'
import { InputReportReasonSpam }                                             from './input-report-reason-spam.js'
import { InputReportReasonViolence }                                         from './input-report-reason-violence.js'
import { InputSecureFileLocation }                                           from './input-secure-file-location.js'
import { InputSecureFileUploaded }                                           from './input-secure-file-uploaded.js'
import { InputSecureFile }                                                   from './input-secure-file.js'
import { InputSecureValue }                                                  from './input-secure-value.js'
import { InputSingleMedia }                                                  from './input-single-media.js'
import { InputStickerSetAnimatedEmojiAnimations }                            from './input-sticker-set-animated-emoji-animations.js'
import { InputStickerSetAnimatedEmoji }                                      from './input-sticker-set-animated-emoji.js'
import { InputStickerSetDice }                                               from './input-sticker-set-dice.js'
import { InputStickerSetEmojiDefaultStatuses }                               from './input-sticker-set-emoji-default-statuses.js'
import { InputStickerSetEmojiDefaultTopicIcons }                             from './input-sticker-set-emoji-default-topic-icons.js'
import { InputStickerSetEmojiGenericAnimations }                             from './input-sticker-set-emoji-generic-animations.js'
import { InputStickerSetEmpty }                                              from './input-sticker-set-empty.js'
import { InputStickerSetID }                                                 from './input-sticker-set-id.js'
import { InputStickerSetItem }                                               from './input-sticker-set-item.js'
import { InputStickerSetPremiumGifts }                                       from './input-sticker-set-premium-gifts.js'
import { InputStickerSetShortName }                                          from './input-sticker-set-short-name.js'
import { InputStickerSetThumb }                                              from './input-sticker-set-thumb.js'
import { InputStickeredMediaDocument }                                       from './input-stickered-media-document.js'
import { InputStickeredMediaPhoto }                                          from './input-stickered-media-photo.js'
import { InputStorePaymentGiftPremium }                                      from './input-store-payment-gift-premium.js'
import { InputStorePaymentPremiumSubscription }                              from './input-store-payment-premium-subscription.js'
import { InputTakeoutFileLocation }                                          from './input-takeout-file-location.js'
import { InputThemeSettings }                                                from './input-theme-settings.js'
import { InputThemeSlug }                                                    from './input-theme-slug.js'
import { InputTheme }                                                        from './input-theme.js'
import { InputUserEmpty }                                                    from './input-user-empty.js'
import { InputUserFromMessage }                                              from './input-user-from-message.js'
import { InputUserSelf }                                                     from './input-user-self.js'
import { InputUser }                                                         from './input-user.js'
import { InputWallPaperNoFile }                                              from './input-wall-paper-no-file.js'
import { InputWallPaperSlug }                                                from './input-wall-paper-slug.js'
import { InputWallPaper }                                                    from './input-wall-paper.js'
import { InputWebDocument }                                                  from './input-web-document.js'
import { InputWebFileAudioAlbumThumbLocation }                               from './input-web-file-audio-album-thumb-location.js'
import { InputWebFileGeoPointLocation }                                      from './input-web-file-geo-point-location.js'
import { InputWebFileLocation }                                              from './input-web-file-location.js'
import { Invoice }                                                           from './invoice.js'
import { InvokeAfterMsg }                                                    from './invoke-after-msg.js'
import { InvokeAfterMsgs }                                                   from './invoke-after-msgs.js'
import { InvokeWithLayer }                                                   from './invoke-with-layer.js'
import { InvokeWithMessagesRange }                                           from './invoke-with-messages-range.js'
import { InvokeWithTakeout }                                                 from './invoke-with-takeout.js'
import { InvokeWithoutUpdates }                                              from './invoke-without-updates.js'
import { JsonArray }                                                         from './json-array.js'
import { JsonBool }                                                          from './json-bool.js'
import { JsonNull }                                                          from './json-null.js'
import { JsonNumber }                                                        from './json-number.js'
import { JsonObjectValue }                                                   from './json-object-value.js'
import { JsonObject }                                                        from './json-object.js'
import { JsonString }                                                        from './json-string.js'
import { KeyboardButtonBuy }                                                 from './keyboard-button-buy.js'
import { KeyboardButtonCallback }                                            from './keyboard-button-callback.js'
import { KeyboardButtonGame }                                                from './keyboard-button-game.js'
import { KeyboardButtonRequestGeoLocation }                                  from './keyboard-button-request-geo-location.js'
import { KeyboardButtonRequestPeer }                                         from './keyboard-button-request-peer.js'
import { KeyboardButtonRequestPhone }                                        from './keyboard-button-request-phone.js'
import { KeyboardButtonRequestPoll }                                         from './keyboard-button-request-poll.js'
import { KeyboardButtonRow }                                                 from './keyboard-button-row.js'
import { KeyboardButtonSimpleWebView }                                       from './keyboard-button-simple-web-view.js'
import { KeyboardButtonSwitchInline }                                        from './keyboard-button-switch-inline.js'
import { KeyboardButtonUrlAuth }                                             from './keyboard-button-url-auth.js'
import { KeyboardButtonUrl }                                                 from './keyboard-button-url.js'
import { KeyboardButtonUserProfile }                                         from './keyboard-button-user-profile.js'
import { KeyboardButtonWebView }                                             from './keyboard-button-web-view.js'
import { KeyboardButton }                                                    from './keyboard-button.js'
import { LabeledPrice }                                                      from './labeled-price.js'
import { LangPackDifference }                                                from './lang-pack-difference.js'
import { LangPackLanguage }                                                  from './lang-pack-language.js'
import { LangPackStringDeleted }                                             from './lang-pack-string-deleted.js'
import { LangPackStringPluralized }                                          from './lang-pack-string-pluralized.js'
import { LangPackString }                                                    from './lang-pack-string.js'
import { LangpackGetDifference }                                             from './langpack.get-difference.js'
import { LangpackGetLangPack }                                               from './langpack.get-lang-pack.js'
import { LangpackGetLanguage }                                               from './langpack.get-language.js'
import { LangpackGetLanguages }                                              from './langpack.get-languages.js'
import { LangpackGetStrings }                                                from './langpack.get-strings.js'
import { MaskCoords }                                                        from './mask-coords.js'
import { MessageActionBotAllowed }                                           from './message-action-bot-allowed.js'
import { MessageActionChannelCreate }                                        from './message-action-channel-create.js'
import { MessageActionChannelMigrateFrom }                                   from './message-action-channel-migrate-from.js'
import { MessageActionChatAddUser }                                          from './message-action-chat-add-user.js'
import { MessageActionChatCreate }                                           from './message-action-chat-create.js'
import { MessageActionChatDeletePhoto }                                      from './message-action-chat-delete-photo.js'
import { MessageActionChatDeleteUser }                                       from './message-action-chat-delete-user.js'
import { MessageActionChatEditPhoto }                                        from './message-action-chat-edit-photo.js'
import { MessageActionChatEditTitle }                                        from './message-action-chat-edit-title.js'
import { MessageActionChatJoinedByLink }                                     from './message-action-chat-joined-by-link.js'
import { MessageActionChatJoinedByRequest }                                  from './message-action-chat-joined-by-request.js'
import { MessageActionChatMigrateTo }                                        from './message-action-chat-migrate-to.js'
import { MessageActionContactSignUp }                                        from './message-action-contact-sign-up.js'
import { MessageActionCustomAction }                                         from './message-action-custom-action.js'
import { MessageActionEmpty }                                                from './message-action-empty.js'
import { MessageActionGameScore }                                            from './message-action-game-score.js'
import { MessageActionGeoProximityReached }                                  from './message-action-geo-proximity-reached.js'
import { MessageActionGiftPremium }                                          from './message-action-gift-premium.js'
import { MessageActionGroupCallScheduled }                                   from './message-action-group-call-scheduled.js'
import { MessageActionGroupCall }                                            from './message-action-group-call.js'
import { MessageActionHistoryClear }                                         from './message-action-history-clear.js'
import { MessageActionInviteToGroupCall }                                    from './message-action-invite-to-group-call.js'
import { MessageActionPaymentSentMe }                                        from './message-action-payment-sent-me.js'
import { MessageActionPaymentSent }                                          from './message-action-payment-sent.js'
import { MessageActionPhoneCall }                                            from './message-action-phone-call.js'
import { MessageActionPinMessage }                                           from './message-action-pin-message.js'
import { MessageActionRequestedPeer }                                        from './message-action-requested-peer.js'
import { MessageActionScreenshotTaken }                                      from './message-action-screenshot-taken.js'
import { MessageActionSecureValuesSentMe }                                   from './message-action-secure-values-sent-me.js'
import { MessageActionSecureValuesSent }                                     from './message-action-secure-values-sent.js'
import { MessageActionSetChatTheme }                                         from './message-action-set-chat-theme.js'
import { MessageActionSetChatWallPaper }                                     from './message-action-set-chat-wall-paper.js'
import { MessageActionSetMessagesTTL }                                       from './message-action-set-messages-ttl.js'
import { MessageActionSetSameChatWallPaper }                                 from './message-action-set-same-chat-wall-paper.js'
import { MessageActionSuggestProfilePhoto }                                  from './message-action-suggest-profile-photo.js'
import { MessageActionTopicCreate }                                          from './message-action-topic-create.js'
import { MessageActionTopicEdit }                                            from './message-action-topic-edit.js'
import { MessageActionWebViewDataSentMe }                                    from './message-action-web-view-data-sent-me.js'
import { MessageActionWebViewDataSent }                                      from './message-action-web-view-data-sent.js'
import { MessageEmpty }                                                      from './message-empty.js'
import { MessageEntityBankCard }                                             from './message-entity-bank-card.js'
import { MessageEntityBold }                                                 from './message-entity-bold.js'
import { MessageEntityBotCommand }                                           from './message-entity-bot-command.js'
import { MessageEntityCashtag }                                              from './message-entity-cashtag.js'
import { MessageEntityCode }                                                 from './message-entity-code.js'
import { MessageEntityCustomEmoji }                                          from './message-entity-custom-emoji.js'
import { MessageEntityEmail }                                                from './message-entity-email.js'
import { MessageEntityHashtag }                                              from './message-entity-hashtag.js'
import { MessageEntityItalic }                                               from './message-entity-italic.js'
import { MessageEntityMentionName }                                          from './message-entity-mention-name.js'
import { MessageEntityMention }                                              from './message-entity-mention.js'
import { MessageEntityPhone }                                                from './message-entity-phone.js'
import { MessageEntityPre }                                                  from './message-entity-pre.js'
import { MessageEntitySpoiler }                                              from './message-entity-spoiler.js'
import { MessageEntityStrike }                                               from './message-entity-strike.js'
import { MessageEntityTextUrl }                                              from './message-entity-text-url.js'
import { MessageEntityUnderline }                                            from './message-entity-underline.js'
import { MessageEntityUnknown }                                              from './message-entity-unknown.js'
import { MessageEntityUrl }                                                  from './message-entity-url.js'
import { MessageExtendedMediaPreview }                                       from './message-extended-media-preview.js'
import { MessageExtendedMedia }                                              from './message-extended-media.js'
import { MessageFwdHeader }                                                  from './message-fwd-header.js'
import { MessageInteractionCounters }                                        from './message-interaction-counters.js'
import { MessageMediaContact }                                               from './message-media-contact.js'
import { MessageMediaDice }                                                  from './message-media-dice.js'
import { MessageMediaDocument }                                              from './message-media-document.js'
import { MessageMediaEmpty }                                                 from './message-media-empty.js'
import { MessageMediaGame }                                                  from './message-media-game.js'
import { MessageMediaGeoLive }                                               from './message-media-geo-live.js'
import { MessageMediaGeo }                                                   from './message-media-geo.js'
import { MessageMediaInvoice }                                               from './message-media-invoice.js'
import { MessageMediaPhoto }                                                 from './message-media-photo.js'
import { MessageMediaPoll }                                                  from './message-media-poll.js'
import { MessageMediaUnsupported }                                           from './message-media-unsupported.js'
import { MessageMediaVenue }                                                 from './message-media-venue.js'
import { MessageMediaWebPage }                                               from './message-media-web-page.js'
import { MessagePeerReaction }                                               from './message-peer-reaction.js'
import { MessageRange }                                                      from './message-range.js'
import { MessageReactions }                                                  from './message-reactions.js'
import { MessageReplies }                                                    from './message-replies.js'
import { MessageReplyHeader }                                                from './message-reply-header.js'
import { MessageService }                                                    from './message-service.js'
import { MessageUserVoteInputOption }                                        from './message-user-vote-input-option.js'
import { MessageUserVoteMultiple }                                           from './message-user-vote-multiple.js'
import { MessageUserVote }                                                   from './message-user-vote.js'
import { MessageViews }                                                      from './message-views.js'
import { Message }                                                           from './message.js'
import { MessagesAcceptEncryption }                                          from './messages.accept-encryption.js'
import { MessagesAcceptUrlAuth }                                             from './messages.accept-url-auth.js'
import { MessagesAddChatUser }                                               from './messages.add-chat-user.js'
import { MessagesAffectedFoundMessages }                                     from './messages.affected-found-messages.js'
import { MessagesAffectedHistory }                                           from './messages.affected-history.js'
import { MessagesAffectedMessages }                                          from './messages.affected-messages.js'
import { MessagesAllStickersNotModified }                                    from './messages.all-stickers-not-modified.js'
import { MessagesAllStickers }                                               from './messages.all-stickers.js'
import { MessagesArchivedStickers }                                          from './messages.archived-stickers.js'
import { MessagesAvailableReactionsNotModified }                             from './messages.available-reactions-not-modified.js'
import { MessagesAvailableReactions }                                        from './messages.available-reactions.js'
import { MessagesBotApp }                                                    from './messages.bot-app.js'
import { MessagesBotCallbackAnswer }                                         from './messages.bot-callback-answer.js'
import { MessagesBotResults }                                                from './messages.bot-results.js'
import { MessagesChannelMessages }                                           from './messages.channel-messages.js'
import { MessagesChatAdminsWithInvites }                                     from './messages.chat-admins-with-invites.js'
import { MessagesChatFull }                                                  from './messages.chat-full.js'
import { MessagesChatInviteImporters }                                       from './messages.chat-invite-importers.js'
import { MessagesChatsSlice }                                                from './messages.chats-slice.js'
import { MessagesChats }                                                     from './messages.chats.js'
import { MessagesCheckChatInvite }                                           from './messages.check-chat-invite.js'
import { MessagesCheckHistoryImportPeer }                                    from './messages.check-history-import-peer.js'
import { MessagesCheckHistoryImport }                                        from './messages.check-history-import.js'
import { MessagesCheckedHistoryImportPeer }                                  from './messages.checked-history-import-peer.js'
import { MessagesClearAllDrafts }                                            from './messages.clear-all-drafts.js'
import { MessagesClearRecentReactions }                                      from './messages.clear-recent-reactions.js'
import { MessagesClearRecentStickers }                                       from './messages.clear-recent-stickers.js'
import { MessagesCreateChat }                                                from './messages.create-chat.js'
import { MessagesDeleteChatUser }                                            from './messages.delete-chat-user.js'
import { MessagesDeleteChat }                                                from './messages.delete-chat.js'
import { MessagesDeleteExportedChatInvite }                                  from './messages.delete-exported-chat-invite.js'
import { MessagesDeleteHistory }                                             from './messages.delete-history.js'
import { MessagesDeleteMessages }                                            from './messages.delete-messages.js'
import { MessagesDeletePhoneCallHistory }                                    from './messages.delete-phone-call-history.js'
import { MessagesDeleteRevokedExportedChatInvites }                          from './messages.delete-revoked-exported-chat-invites.js'
import { MessagesDeleteScheduledMessages }                                   from './messages.delete-scheduled-messages.js'
import { MessagesDhConfigNotModified }                                       from './messages.dh-config-not-modified.js'
import { MessagesDhConfig }                                                  from './messages.dh-config.js'
import { MessagesDialogsNotModified }                                        from './messages.dialogs-not-modified.js'
import { MessagesDialogsSlice }                                              from './messages.dialogs-slice.js'
import { MessagesDialogs }                                                   from './messages.dialogs.js'
import { MessagesDiscardEncryption }                                         from './messages.discard-encryption.js'
import { MessagesDiscussionMessage }                                         from './messages.discussion-message.js'
import { MessagesEditChatAbout }                                             from './messages.edit-chat-about.js'
import { MessagesEditChatAdmin }                                             from './messages.edit-chat-admin.js'
import { MessagesEditChatDefaultBannedRights }                               from './messages.edit-chat-default-banned-rights.js'
import { MessagesEditChatPhoto }                                             from './messages.edit-chat-photo.js'
import { MessagesEditChatTitle }                                             from './messages.edit-chat-title.js'
import { MessagesEditExportedChatInvite }                                    from './messages.edit-exported-chat-invite.js'
import { MessagesEditInlineBotMessage }                                      from './messages.edit-inline-bot-message.js'
import { MessagesEditMessage }                                               from './messages.edit-message.js'
import { MessagesEmojiGroupsNotModified }                                    from './messages.emoji-groups-not-modified.js'
import { MessagesEmojiGroups }                                               from './messages.emoji-groups.js'
import { MessagesExportChatInvite }                                          from './messages.export-chat-invite.js'
import { MessagesExportedChatInviteReplaced }                                from './messages.exported-chat-invite-replaced.js'
import { MessagesExportedChatInvite }                                        from './messages.exported-chat-invite.js'
import { MessagesExportedChatInvites }                                       from './messages.exported-chat-invites.js'
import { MessagesFaveSticker }                                               from './messages.fave-sticker.js'
import { MessagesFavedStickersNotModified }                                  from './messages.faved-stickers-not-modified.js'
import { MessagesFavedStickers }                                             from './messages.faved-stickers.js'
import { MessagesFeaturedStickersNotModified }                               from './messages.featured-stickers-not-modified.js'
import { MessagesFeaturedStickers }                                          from './messages.featured-stickers.js'
import { MessagesForumTopics }                                               from './messages.forum-topics.js'
import { MessagesForwardMessages }                                           from './messages.forward-messages.js'
import { MessagesFoundStickerSetsNotModified }                               from './messages.found-sticker-sets-not-modified.js'
import { MessagesFoundStickerSets }                                          from './messages.found-sticker-sets.js'
import { MessagesGetAdminsWithInvites }                                      from './messages.get-admins-with-invites.js'
import { MessagesGetAllDrafts }                                              from './messages.get-all-drafts.js'
import { MessagesGetAllStickers }                                            from './messages.get-all-stickers.js'
import { MessagesGetArchivedStickers }                                       from './messages.get-archived-stickers.js'
import { MessagesGetAttachMenuBot }                                          from './messages.get-attach-menu-bot.js'
import { MessagesGetAttachMenuBots }                                         from './messages.get-attach-menu-bots.js'
import { MessagesGetAttachedStickers }                                       from './messages.get-attached-stickers.js'
import { MessagesGetAvailableReactions }                                     from './messages.get-available-reactions.js'
import { MessagesGetBotApp }                                                 from './messages.get-bot-app.js'
import { MessagesGetBotCallbackAnswer }                                      from './messages.get-bot-callback-answer.js'
import { MessagesGetChatInviteImporters }                                    from './messages.get-chat-invite-importers.js'
import { MessagesGetChats }                                                  from './messages.get-chats.js'
import { MessagesGetCommonChats }                                            from './messages.get-common-chats.js'
import { MessagesGetCustomEmojiDocuments }                                   from './messages.get-custom-emoji-documents.js'
import { MessagesGetDefaultHistoryTTL }                                      from './messages.get-default-history-ttl.js'
import { MessagesGetDhConfig }                                               from './messages.get-dh-config.js'
import { MessagesGetDialogFilters }                                          from './messages.get-dialog-filters.js'
import { MessagesGetDialogUnreadMarks }                                      from './messages.get-dialog-unread-marks.js'
import { MessagesGetDialogs }                                                from './messages.get-dialogs.js'
import { MessagesGetDiscussionMessage }                                      from './messages.get-discussion-message.js'
import { MessagesGetDocumentByHash }                                         from './messages.get-document-by-hash.js'
import { MessagesGetEmojiGroups }                                            from './messages.get-emoji-groups.js'
import { MessagesGetEmojiKeywordsDifference }                                from './messages.get-emoji-keywords-difference.js'
import { MessagesGetEmojiKeywordsLanguages }                                 from './messages.get-emoji-keywords-languages.js'
import { MessagesGetEmojiKeywords }                                          from './messages.get-emoji-keywords.js'
import { MessagesGetEmojiProfilePhotoGroups }                                from './messages.get-emoji-profile-photo-groups.js'
import { MessagesGetEmojiStatusGroups }                                      from './messages.get-emoji-status-groups.js'
import { MessagesGetEmojiStickers }                                          from './messages.get-emoji-stickers.js'
import { MessagesGetEmojiURL }                                               from './messages.get-emoji-url.js'
import { MessagesGetExportedChatInvite }                                     from './messages.get-exported-chat-invite.js'
import { MessagesGetExportedChatInvites }                                    from './messages.get-exported-chat-invites.js'
import { MessagesGetExtendedMedia }                                          from './messages.get-extended-media.js'
import { MessagesGetFavedStickers }                                          from './messages.get-faved-stickers.js'
import { MessagesGetFeaturedEmojiStickers }                                  from './messages.get-featured-emoji-stickers.js'
import { MessagesGetFeaturedStickers }                                       from './messages.get-featured-stickers.js'
import { MessagesGetFullChat }                                               from './messages.get-full-chat.js'
import { MessagesGetGameHighScores }                                         from './messages.get-game-high-scores.js'
import { MessagesGetHistory }                                                from './messages.get-history.js'
import { MessagesGetInlineBotResults }                                       from './messages.get-inline-bot-results.js'
import { MessagesGetInlineGameHighScores }                                   from './messages.get-inline-game-high-scores.js'
import { MessagesGetMaskStickers }                                           from './messages.get-mask-stickers.js'
import { MessagesGetMessageEditData }                                        from './messages.get-message-edit-data.js'
import { MessagesGetMessageReactionsList }                                   from './messages.get-message-reactions-list.js'
import { MessagesGetMessageReadParticipants }                                from './messages.get-message-read-participants.js'
import { MessagesGetMessagesReactions }                                      from './messages.get-messages-reactions.js'
import { MessagesGetMessagesViews }                                          from './messages.get-messages-views.js'
import { MessagesGetMessages }                                               from './messages.get-messages.js'
import { MessagesGetOldFeaturedStickers }                                    from './messages.get-old-featured-stickers.js'
import { MessagesGetOnlines }                                                from './messages.get-onlines.js'
import { MessagesGetPeerDialogs }                                            from './messages.get-peer-dialogs.js'
import { MessagesGetPeerSettings }                                           from './messages.get-peer-settings.js'
import { MessagesGetPinnedDialogs }                                          from './messages.get-pinned-dialogs.js'
import { MessagesGetPollResults }                                            from './messages.get-poll-results.js'
import { MessagesGetPollVotes }                                              from './messages.get-poll-votes.js'
import { MessagesGetRecentLocations }                                        from './messages.get-recent-locations.js'
import { MessagesGetRecentReactions }                                        from './messages.get-recent-reactions.js'
import { MessagesGetRecentStickers }                                         from './messages.get-recent-stickers.js'
import { MessagesGetReplies }                                                from './messages.get-replies.js'
import { MessagesGetSavedGifs }                                              from './messages.get-saved-gifs.js'
import { MessagesGetScheduledHistory }                                       from './messages.get-scheduled-history.js'
import { MessagesGetScheduledMessages }                                      from './messages.get-scheduled-messages.js'
import { MessagesGetSearchCounters }                                         from './messages.get-search-counters.js'
import { MessagesGetSearchResultsCalendar }                                  from './messages.get-search-results-calendar.js'
import { MessagesGetSearchResultsPositions }                                 from './messages.get-search-results-positions.js'
import { MessagesGetSplitRanges }                                            from './messages.get-split-ranges.js'
import { MessagesGetStickerSet }                                             from './messages.get-sticker-set.js'
import { MessagesGetStickers }                                               from './messages.get-stickers.js'
import { MessagesGetSuggestedDialogFilters }                                 from './messages.get-suggested-dialog-filters.js'
import { MessagesGetTopReactions }                                           from './messages.get-top-reactions.js'
import { MessagesGetUnreadMentions }                                         from './messages.get-unread-mentions.js'
import { MessagesGetUnreadReactions }                                        from './messages.get-unread-reactions.js'
import { MessagesGetWebPagePreview }                                         from './messages.get-web-page-preview.js'
import { MessagesGetWebPage }                                                from './messages.get-web-page.js'
import { MessagesHideAllChatJoinRequests }                                   from './messages.hide-all-chat-join-requests.js'
import { MessagesHideChatJoinRequest }                                       from './messages.hide-chat-join-request.js'
import { MessagesHidePeerSettingsBar }                                       from './messages.hide-peer-settings-bar.js'
import { MessagesHighScores }                                                from './messages.high-scores.js'
import { MessagesHistoryImportParsed }                                       from './messages.history-import-parsed.js'
import { MessagesHistoryImport }                                             from './messages.history-import.js'
import { MessagesImportChatInvite }                                          from './messages.import-chat-invite.js'
import { MessagesInactiveChats }                                             from './messages.inactive-chats.js'
import { MessagesInitHistoryImport }                                         from './messages.init-history-import.js'
import { MessagesInstallStickerSet }                                         from './messages.install-sticker-set.js'
import { MessagesMarkDialogUnread }                                          from './messages.mark-dialog-unread.js'
import { MessagesMessageEditData }                                           from './messages.message-edit-data.js'
import { MessagesMessageReactionsList }                                      from './messages.message-reactions-list.js'
import { MessagesMessageViews }                                              from './messages.message-views.js'
import { MessagesMessagesNotModified }                                       from './messages.messages-not-modified.js'
import { MessagesMessagesSlice }                                             from './messages.messages-slice.js'
import { MessagesMessages }                                                  from './messages.messages.js'
import { MessagesMigrateChat }                                               from './messages.migrate-chat.js'
import { MessagesPeerDialogs }                                               from './messages.peer-dialogs.js'
import { MessagesPeerSettings }                                              from './messages.peer-settings.js'
import { MessagesProlongWebView }                                            from './messages.prolong-web-view.js'
import { MessagesRateTranscribedAudio }                                      from './messages.rate-transcribed-audio.js'
import { MessagesReactionsNotModified }                                      from './messages.reactions-not-modified.js'
import { MessagesReactions }                                                 from './messages.reactions.js'
import { MessagesReadDiscussion }                                            from './messages.read-discussion.js'
import { MessagesReadEncryptedHistory }                                      from './messages.read-encrypted-history.js'
import { MessagesReadFeaturedStickers }                                      from './messages.read-featured-stickers.js'
import { MessagesReadHistory }                                               from './messages.read-history.js'
import { MessagesReadMentions }                                              from './messages.read-mentions.js'
import { MessagesReadMessageContents }                                       from './messages.read-message-contents.js'
import { MessagesReadReactions }                                             from './messages.read-reactions.js'
import { MessagesReceivedMessages }                                          from './messages.received-messages.js'
import { MessagesReceivedQueue }                                             from './messages.received-queue.js'
import { MessagesRecentStickersNotModified }                                 from './messages.recent-stickers-not-modified.js'
import { MessagesRecentStickers }                                            from './messages.recent-stickers.js'
import { MessagesReorderPinnedDialogs }                                      from './messages.reorder-pinned-dialogs.js'
import { MessagesReorderStickerSets }                                        from './messages.reorder-sticker-sets.js'
import { MessagesReportEncryptedSpam }                                       from './messages.report-encrypted-spam.js'
import { MessagesReportReaction }                                            from './messages.report-reaction.js'
import { MessagesReportSpam }                                                from './messages.report-spam.js'
import { MessagesReport }                                                    from './messages.report.js'
import { MessagesRequestAppWebView }                                         from './messages.request-app-web-view.js'
import { MessagesRequestEncryption }                                         from './messages.request-encryption.js'
import { MessagesRequestSimpleWebView }                                      from './messages.request-simple-web-view.js'
import { MessagesRequestUrlAuth }                                            from './messages.request-url-auth.js'
import { MessagesRequestWebView }                                            from './messages.request-web-view.js'
import { MessagesSaveDefaultSendAs }                                         from './messages.save-default-send-as.js'
import { MessagesSaveDraft }                                                 from './messages.save-draft.js'
import { MessagesSaveGif }                                                   from './messages.save-gif.js'
import { MessagesSaveRecentSticker }                                         from './messages.save-recent-sticker.js'
import { MessagesSavedGifsNotModified }                                      from './messages.saved-gifs-not-modified.js'
import { MessagesSavedGifs }                                                 from './messages.saved-gifs.js'
import { MessagesSearchCounter }                                             from './messages.search-counter.js'
import { MessagesSearchCustomEmoji }                                         from './messages.search-custom-emoji.js'
import { MessagesSearchGlobal }                                              from './messages.search-global.js'
import { MessagesSearchResultsCalendar }                                     from './messages.search-results-calendar.js'
import { MessagesSearchResultsPositions }                                    from './messages.search-results-positions.js'
import { MessagesSearchSentMedia }                                           from './messages.search-sent-media.js'
import { MessagesSearchStickerSets }                                         from './messages.search-sticker-sets.js'
import { MessagesSearch }                                                    from './messages.search.js'
import { MessagesSendBotRequestedPeer }                                      from './messages.send-bot-requested-peer.js'
import { MessagesSendEncryptedFile }                                         from './messages.send-encrypted-file.js'
import { MessagesSendEncryptedService }                                      from './messages.send-encrypted-service.js'
import { MessagesSendEncrypted }                                             from './messages.send-encrypted.js'
import { MessagesSendInlineBotResult }                                       from './messages.send-inline-bot-result.js'
import { MessagesSendMedia }                                                 from './messages.send-media.js'
import { MessagesSendMessage }                                               from './messages.send-message.js'
import { MessagesSendMultiMedia }                                            from './messages.send-multi-media.js'
import { MessagesSendReaction }                                              from './messages.send-reaction.js'
import { MessagesSendScheduledMessages }                                     from './messages.send-scheduled-messages.js'
import { MessagesSendScreenshotNotification }                                from './messages.send-screenshot-notification.js'
import { MessagesSendVote }                                                  from './messages.send-vote.js'
import { MessagesSendWebViewData }                                           from './messages.send-web-view-data.js'
import { MessagesSendWebViewResultMessage }                                  from './messages.send-web-view-result-message.js'
import { MessagesSentEncryptedFile }                                         from './messages.sent-encrypted-file.js'
import { MessagesSentEncryptedMessage }                                      from './messages.sent-encrypted-message.js'
import { MessagesSetBotCallbackAnswer }                                      from './messages.set-bot-callback-answer.js'
import { MessagesSetBotPrecheckoutResults }                                  from './messages.set-bot-precheckout-results.js'
import { MessagesSetBotShippingResults }                                     from './messages.set-bot-shipping-results.js'
import { MessagesSetChatAvailableReactions }                                 from './messages.set-chat-available-reactions.js'
import { MessagesSetChatTheme }                                              from './messages.set-chat-theme.js'
import { MessagesSetChatWallPaper }                                          from './messages.set-chat-wall-paper.js'
import { MessagesSetDefaultHistoryTTL }                                      from './messages.set-default-history-ttl.js'
import { MessagesSetDefaultReaction }                                        from './messages.set-default-reaction.js'
import { MessagesSetEncryptedTyping }                                        from './messages.set-encrypted-typing.js'
import { MessagesSetGameScore }                                              from './messages.set-game-score.js'
import { MessagesSetHistoryTTL }                                             from './messages.set-history-ttl.js'
import { MessagesSetInlineBotResults }                                       from './messages.set-inline-bot-results.js'
import { MessagesSetInlineGameScore }                                        from './messages.set-inline-game-score.js'
import { MessagesSetTyping }                                                 from './messages.set-typing.js'
import { MessagesSponsoredMessagesEmpty }                                    from './messages.sponsored-messages-empty.js'
import { MessagesSponsoredMessages }                                         from './messages.sponsored-messages.js'
import { MessagesStartBot }                                                  from './messages.start-bot.js'
import { MessagesStartHistoryImport }                                        from './messages.start-history-import.js'
import { MessagesStickerSetInstallResultArchive }                            from './messages.sticker-set-install-result-archive.js'
import { MessagesStickerSetInstallResultSuccess }                            from './messages.sticker-set-install-result-success.js'
import { MessagesStickerSetNotModified }                                     from './messages.sticker-set-not-modified.js'
import { MessagesStickerSet }                                                from './messages.sticker-set.js'
import { MessagesStickersNotModified }                                       from './messages.stickers-not-modified.js'
import { MessagesStickers }                                                  from './messages.stickers.js'
import { MessagesToggleBotInAttachMenu }                                     from './messages.toggle-bot-in-attach-menu.js'
import { MessagesToggleDialogPin }                                           from './messages.toggle-dialog-pin.js'
import { MessagesToggleNoForwards }                                          from './messages.toggle-no-forwards.js'
import { MessagesTogglePeerTranslations }                                    from './messages.toggle-peer-translations.js'
import { MessagesToggleStickerSets }                                         from './messages.toggle-sticker-sets.js'
import { MessagesTranscribeAudio }                                           from './messages.transcribe-audio.js'
import { MessagesTranscribedAudio }                                          from './messages.transcribed-audio.js'
import { MessagesTranslateResult }                                           from './messages.translate-result.js'
import { MessagesTranslateText }                                             from './messages.translate-text.js'
import { MessagesUninstallStickerSet }                                       from './messages.uninstall-sticker-set.js'
import { MessagesUnpinAllMessages }                                          from './messages.unpin-all-messages.js'
import { MessagesUpdateDialogFilter }                                        from './messages.update-dialog-filter.js'
import { MessagesUpdateDialogFiltersOrder }                                  from './messages.update-dialog-filters-order.js'
import { MessagesUpdatePinnedMessage }                                       from './messages.update-pinned-message.js'
import { MessagesUploadEncryptedFile }                                       from './messages.upload-encrypted-file.js'
import { MessagesUploadImportedMedia }                                       from './messages.upload-imported-media.js'
import { MessagesUploadMedia }                                               from './messages.upload-media.js'
import { MessagesVotesList }                                                 from './messages.votes-list.js'
import { MsgContainer }                                                      from './msg-container.js'
import { MsgCopy }                                                           from './msg-copy.js'
import { MsgDetailedInfo }                                                   from './msg-detailed-info.js'
import { MsgNewDetailedInfo }                                                from './msg-new-detailed-info.js'
import { MsgResendReq }                                                      from './msg-resend-req.js'
import { MsgsAck }                                                           from './msgs-ack.js'
import { MsgsAllInfo }                                                       from './msgs-all-info.js'
import { MsgsStateInfo }                                                     from './msgs-state-info.js'
import { MsgsStateReq }                                                      from './msgs-state-req.js'
import { NearestDc }                                                         from './nearest-dc.js'
import { NewSessionCreated }                                                 from './new-session-created.js'
import { NotificationSoundDefault }                                          from './notification-sound-default.js'
import { NotificationSoundLocal }                                            from './notification-sound-local.js'
import { NotificationSoundNone }                                             from './notification-sound-none.js'
import { NotificationSoundRingtone }                                         from './notification-sound-ringtone.js'
import { NotifyBroadcasts }                                                  from './notify-broadcasts.js'
import { NotifyChats }                                                       from './notify-chats.js'
import { NotifyForumTopic }                                                  from './notify-forum-topic.js'
import { NotifyPeer }                                                        from './notify-peer.js'
import { NotifyUsers }                                                       from './notify-users.js'
import { Null }                                                              from './null.js'
import { PQInnerDataDc }                                                     from './p-q-inner-data-dc.js'
import { PQInnerDataTempDc }                                                 from './p-q-inner-data-temp-dc.js'
import { PQInnerData }                                                       from './p-q-inner-data.js'
import { PageBlockAnchor }                                                   from './page-block-anchor.js'
import { PageBlockAudio }                                                    from './page-block-audio.js'
import { PageBlockAuthorDate }                                               from './page-block-author-date.js'
import { PageBlockBlockquote }                                               from './page-block-blockquote.js'
import { PageBlockChannel }                                                  from './page-block-channel.js'
import { PageBlockCollage }                                                  from './page-block-collage.js'
import { PageBlockCover }                                                    from './page-block-cover.js'
import { PageBlockDetails }                                                  from './page-block-details.js'
import { PageBlockDivider }                                                  from './page-block-divider.js'
import { PageBlockEmbedPost }                                                from './page-block-embed-post.js'
import { PageBlockEmbed }                                                    from './page-block-embed.js'
import { PageBlockFooter }                                                   from './page-block-footer.js'
import { PageBlockHeader }                                                   from './page-block-header.js'
import { PageBlockKicker }                                                   from './page-block-kicker.js'
import { PageBlockList }                                                     from './page-block-list.js'
import { PageBlockMap }                                                      from './page-block-map.js'
import { PageBlockOrderedList }                                              from './page-block-ordered-list.js'
import { PageBlockParagraph }                                                from './page-block-paragraph.js'
import { PageBlockPhoto }                                                    from './page-block-photo.js'
import { PageBlockPreformatted }                                             from './page-block-preformatted.js'
import { PageBlockPullquote }                                                from './page-block-pullquote.js'
import { PageBlockRelatedArticles }                                          from './page-block-related-articles.js'
import { PageBlockSlideshow }                                                from './page-block-slideshow.js'
import { PageBlockSubheader }                                                from './page-block-subheader.js'
import { PageBlockSubtitle }                                                 from './page-block-subtitle.js'
import { PageBlockTable }                                                    from './page-block-table.js'
import { PageBlockTitle }                                                    from './page-block-title.js'
import { PageBlockUnsupported }                                              from './page-block-unsupported.js'
import { PageBlockVideo }                                                    from './page-block-video.js'
import { PageCaption }                                                       from './page-caption.js'
import { PageListItemBlocks }                                                from './page-list-item-blocks.js'
import { PageListItemText }                                                  from './page-list-item-text.js'
import { PageListOrderedItemBlocks }                                         from './page-list-ordered-item-blocks.js'
import { PageListOrderedItemText }                                           from './page-list-ordered-item-text.js'
import { PageRelatedArticle }                                                from './page-related-article.js'
import { PageTableCell }                                                     from './page-table-cell.js'
import { PageTableRow }                                                      from './page-table-row.js'
import { Page }                                                              from './page.js'
import { PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512Iter100000SHA256ModPow } from './password-kdf-algo-sha256-sha256-pbkdf2-hmacsha512iter100000-sha256-mod-pow.js'
import { PasswordKdfAlgoUnknown }                                            from './password-kdf-algo-unknown.js'
import { PaymentCharge }                                                     from './payment-charge.js'
import { PaymentFormMethod }                                                 from './payment-form-method.js'
import { PaymentRequestedInfo }                                              from './payment-requested-info.js'
import { PaymentSavedCredentialsCard }                                       from './payment-saved-credentials-card.js'
import { PaymentsAssignAppStoreTransaction }                                 from './payments.assign-app-store-transaction.js'
import { PaymentsAssignPlayMarketTransaction }                               from './payments.assign-play-market-transaction.js'
import { PaymentsBankCardData }                                              from './payments.bank-card-data.js'
import { PaymentsCanPurchasePremium }                                        from './payments.can-purchase-premium.js'
import { PaymentsClearSavedInfo }                                            from './payments.clear-saved-info.js'
import { PaymentsExportInvoice }                                             from './payments.export-invoice.js'
import { PaymentsExportedInvoice }                                           from './payments.exported-invoice.js'
import { PaymentsGetBankCardData }                                           from './payments.get-bank-card-data.js'
import { PaymentsGetPaymentForm }                                            from './payments.get-payment-form.js'
import { PaymentsGetPaymentReceipt }                                         from './payments.get-payment-receipt.js'
import { PaymentsGetSavedInfo }                                              from './payments.get-saved-info.js'
import { PaymentsPaymentForm }                                               from './payments.payment-form.js'
import { PaymentsPaymentReceipt }                                            from './payments.payment-receipt.js'
import { PaymentsPaymentResult }                                             from './payments.payment-result.js'
import { PaymentsPaymentVerificationNeeded }                                 from './payments.payment-verification-needed.js'
import { PaymentsSavedInfo }                                                 from './payments.saved-info.js'
import { PaymentsSendPaymentForm }                                           from './payments.send-payment-form.js'
import { PaymentsValidateRequestedInfo }                                     from './payments.validate-requested-info.js'
import { PaymentsValidatedRequestedInfo }                                    from './payments.validated-requested-info.js'
import { PeerBlocked }                                                       from './peer-blocked.js'
import { PeerChannel }                                                       from './peer-channel.js'
import { PeerChat }                                                          from './peer-chat.js'
import { PeerLocated }                                                       from './peer-located.js'
import { PeerNotifySettings }                                                from './peer-notify-settings.js'
import { PeerSelfLocated }                                                   from './peer-self-located.js'
import { PeerSettings }                                                      from './peer-settings.js'
import { PeerUser }                                                          from './peer-user.js'
import { PhoneCallAccepted }                                                 from './phone-call-accepted.js'
import { PhoneCallDiscardReasonBusy }                                        from './phone-call-discard-reason-busy.js'
import { PhoneCallDiscardReasonDisconnect }                                  from './phone-call-discard-reason-disconnect.js'
import { PhoneCallDiscardReasonHangup }                                      from './phone-call-discard-reason-hangup.js'
import { PhoneCallDiscardReasonMissed }                                      from './phone-call-discard-reason-missed.js'
import { PhoneCallDiscarded }                                                from './phone-call-discarded.js'
import { PhoneCallEmpty }                                                    from './phone-call-empty.js'
import { PhoneCallProtocol }                                                 from './phone-call-protocol.js'
import { PhoneCallRequested }                                                from './phone-call-requested.js'
import { PhoneCallWaiting }                                                  from './phone-call-waiting.js'
import { PhoneCall }                                                         from './phone-call.js'
import { PhoneConnectionWebrtc }                                             from './phone-connection-webrtc.js'
import { PhoneConnection }                                                   from './phone-connection.js'
import { PhoneAcceptCall }                                                   from './phone.accept-call.js'
import { PhoneCheckGroupCall }                                               from './phone.check-group-call.js'
import { PhoneConfirmCall }                                                  from './phone.confirm-call.js'
import { PhoneCreateGroupCall }                                              from './phone.create-group-call.js'
import { PhoneDiscardCall }                                                  from './phone.discard-call.js'
import { PhoneDiscardGroupCall }                                             from './phone.discard-group-call.js'
import { PhoneEditGroupCallParticipant }                                     from './phone.edit-group-call-participant.js'
import { PhoneEditGroupCallTitle }                                           from './phone.edit-group-call-title.js'
import { PhoneExportGroupCallInvite }                                        from './phone.export-group-call-invite.js'
import { PhoneExportedGroupCallInvite }                                      from './phone.exported-group-call-invite.js'
import { PhoneGetCallConfig }                                                from './phone.get-call-config.js'
import { PhoneGetGroupCallJoinAs }                                           from './phone.get-group-call-join-as.js'
import { PhoneGetGroupCallStreamChannels }                                   from './phone.get-group-call-stream-channels.js'
import { PhoneGetGroupCallStreamRtmpUrl }                                    from './phone.get-group-call-stream-rtmp-url.js'
import { PhoneGetGroupCall }                                                 from './phone.get-group-call.js'
import { PhoneGetGroupParticipants }                                         from './phone.get-group-participants.js'
import { PhoneGroupCallStreamChannels }                                      from './phone.group-call-stream-channels.js'
import { PhoneGroupCallStreamRtmpUrl }                                       from './phone.group-call-stream-rtmp-url.js'
import { PhoneGroupCall }                                                    from './phone.group-call.js'
import { PhoneGroupParticipants }                                            from './phone.group-participants.js'
import { PhoneInviteToGroupCall }                                            from './phone.invite-to-group-call.js'
import { PhoneJoinAsPeers }                                                  from './phone.join-as-peers.js'
import { PhoneJoinGroupCallPresentation }                                    from './phone.join-group-call-presentation.js'
import { PhoneJoinGroupCall }                                                from './phone.join-group-call.js'
import { PhoneLeaveGroupCallPresentation }                                   from './phone.leave-group-call-presentation.js'
import { PhoneLeaveGroupCall }                                               from './phone.leave-group-call.js'
import { PhonePhoneCall }                                                    from './phone.phone-call.js'
import { PhoneReceivedCall }                                                 from './phone.received-call.js'
import { PhoneRequestCall }                                                  from './phone.request-call.js'
import { PhoneSaveCallDebug }                                                from './phone.save-call-debug.js'
import { PhoneSaveCallLog }                                                  from './phone.save-call-log.js'
import { PhoneSaveDefaultGroupCallJoinAs }                                   from './phone.save-default-group-call-join-as.js'
import { PhoneSendSignalingData }                                            from './phone.send-signaling-data.js'
import { PhoneSetCallRating }                                                from './phone.set-call-rating.js'
import { PhoneStartScheduledGroupCall }                                      from './phone.start-scheduled-group-call.js'
import { PhoneToggleGroupCallRecord }                                        from './phone.toggle-group-call-record.js'
import { PhoneToggleGroupCallSettings }                                      from './phone.toggle-group-call-settings.js'
import { PhoneToggleGroupCallStartSubscription }                             from './phone.toggle-group-call-start-subscription.js'
import { PhotoCachedSize }                                                   from './photo-cached-size.js'
import { PhotoEmpty }                                                        from './photo-empty.js'
import { PhotoPathSize }                                                     from './photo-path-size.js'
import { PhotoSizeEmpty }                                                    from './photo-size-empty.js'
import { PhotoSizeProgressive }                                              from './photo-size-progressive.js'
import { PhotoSize }                                                         from './photo-size.js'
import { PhotoStrippedSize }                                                 from './photo-stripped-size.js'
import { Photo }                                                             from './photo.js'
import { PhotosDeletePhotos }                                                from './photos.delete-photos.js'
import { PhotosGetUserPhotos }                                               from './photos.get-user-photos.js'
import { PhotosPhoto }                                                       from './photos.photo.js'
import { PhotosPhotosSlice }                                                 from './photos.photos-slice.js'
import { PhotosPhotos }                                                      from './photos.photos.js'
import { PhotosUpdateProfilePhoto }                                          from './photos.update-profile-photo.js'
import { PhotosUploadContactProfilePhoto }                                   from './photos.upload-contact-profile-photo.js'
import { PhotosUploadProfilePhoto }                                          from './photos.upload-profile-photo.js'
import { PingDelayDisconnect }                                               from './ping-delay-disconnect.js'
import { Ping }                                                              from './ping.js'
import { PollAnswerVoters }                                                  from './poll-answer-voters.js'
import { PollAnswer }                                                        from './poll-answer.js'
import { PollResults }                                                       from './poll-results.js'
import { Poll }                                                              from './poll.js'
import { Pong }                                                              from './pong.js'
import { PopularContact }                                                    from './popular-contact.js'
import { PostAddress }                                                       from './post-address.js'
import { PremiumGiftOption }                                                 from './premium-gift-option.js'
import { PremiumSubscriptionOption }                                         from './premium-subscription-option.js'
import { PrivacyKeyAddedByPhone }                                            from './privacy-key-added-by-phone.js'
import { PrivacyKeyChatInvite }                                              from './privacy-key-chat-invite.js'
import { PrivacyKeyForwards }                                                from './privacy-key-forwards.js'
import { PrivacyKeyPhoneCall }                                               from './privacy-key-phone-call.js'
import { PrivacyKeyPhoneNumber }                                             from './privacy-key-phone-number.js'
import { PrivacyKeyPhoneP2P }                                                from './privacy-key-phone-p2-p.js'
import { PrivacyKeyProfilePhoto }                                            from './privacy-key-profile-photo.js'
import { PrivacyKeyStatusTimestamp }                                         from './privacy-key-status-timestamp.js'
import { PrivacyKeyVoiceMessages }                                           from './privacy-key-voice-messages.js'
import { PrivacyValueAllowAll }                                              from './privacy-value-allow-all.js'
import { PrivacyValueAllowChatParticipants }                                 from './privacy-value-allow-chat-participants.js'
import { PrivacyValueAllowContacts }                                         from './privacy-value-allow-contacts.js'
import { PrivacyValueAllowUsers }                                            from './privacy-value-allow-users.js'
import { PrivacyValueDisallowAll }                                           from './privacy-value-disallow-all.js'
import { PrivacyValueDisallowChatParticipants }                              from './privacy-value-disallow-chat-participants.js'
import { PrivacyValueDisallowContacts }                                      from './privacy-value-disallow-contacts.js'
import { PrivacyValueDisallowUsers }                                         from './privacy-value-disallow-users.js'
import { ReactionCount }                                                     from './reaction-count.js'
import { ReactionCustomEmoji }                                               from './reaction-custom-emoji.js'
import { ReactionEmoji }                                                     from './reaction-emoji.js'
import { ReactionEmpty }                                                     from './reaction-empty.js'
import { ReadParticipantDate }                                               from './read-participant-date.js'
import { ReceivedNotifyMessage }                                             from './received-notify-message.js'
import { RecentMeUrlChatInvite }                                             from './recent-me-url-chat-invite.js'
import { RecentMeUrlChat }                                                   from './recent-me-url-chat.js'
import { RecentMeUrlStickerSet }                                             from './recent-me-url-sticker-set.js'
import { RecentMeUrlUnknown }                                                from './recent-me-url-unknown.js'
import { RecentMeUrlUser }                                                   from './recent-me-url-user.js'
import { ReplyInlineMarkup }                                                 from './reply-inline-markup.js'
import { ReplyKeyboardForceReply }                                           from './reply-keyboard-force-reply.js'
import { ReplyKeyboardHide }                                                 from './reply-keyboard-hide.js'
import { ReplyKeyboardMarkup }                                               from './reply-keyboard-markup.js'
import { ReqDHParams }                                                       from './req-dh-params.js'
import { ReqPqMulti }                                                        from './req-pq-multi.js'
import { RequestPeerTypeBroadcast }                                          from './request-peer-type-broadcast.js'
import { RequestPeerTypeChat }                                               from './request-peer-type-chat.js'
import { RequestPeerTypeUser }                                               from './request-peer-type-user.js'
import { ResPQ }                                                             from './res-pq.js'
import { RestrictionReason }                                                 from './restriction-reason.js'
import { RpcAnswerDroppedRunning }                                           from './rpc-answer-dropped-running.js'
import { RpcAnswerDropped }                                                  from './rpc-answer-dropped.js'
import { RpcAnswerUnknown }                                                  from './rpc-answer-unknown.js'
import { RpcDropAnswer }                                                     from './rpc-drop-answer.js'
import { RpcError }                                                          from './rpc-error.js'
import { RpcResult }                                                         from './rpc-result.js'
import { SavedPhoneContact }                                                 from './saved-phone-contact.js'
import { SearchResultPosition }                                              from './search-result-position.js'
import { SearchResultsCalendarPeriod }                                       from './search-results-calendar-period.js'
import { SecureCredentialsEncrypted }                                        from './secure-credentials-encrypted.js'
import { SecureData }                                                        from './secure-data.js'
import { SecureFileEmpty }                                                   from './secure-file-empty.js'
import { SecureFile }                                                        from './secure-file.js'
import { SecurePasswordKdfAlgoPBKDF2HMACSHA512Iter100000 }                   from './secure-password-kdf-algo-pbkdf2-hmacsha512iter100000.js'
import { SecurePasswordKdfAlgoSHA512 }                                       from './secure-password-kdf-algo-sha512.js'
import { SecurePasswordKdfAlgoUnknown }                                      from './secure-password-kdf-algo-unknown.js'
import { SecurePlainEmail }                                                  from './secure-plain-email.js'
import { SecurePlainPhone }                                                  from './secure-plain-phone.js'
import { SecureRequiredTypeOneOf }                                           from './secure-required-type-one-of.js'
import { SecureRequiredType }                                                from './secure-required-type.js'
import { SecureSecretSettings }                                              from './secure-secret-settings.js'
import { SecureValueErrorData }                                              from './secure-value-error-data.js'
import { SecureValueErrorFile }                                              from './secure-value-error-file.js'
import { SecureValueErrorFiles }                                             from './secure-value-error-files.js'
import { SecureValueErrorFrontSide }                                         from './secure-value-error-front-side.js'
import { SecureValueErrorReverseSide }                                       from './secure-value-error-reverse-side.js'
import { SecureValueErrorSelfie }                                            from './secure-value-error-selfie.js'
import { SecureValueErrorTranslationFile }                                   from './secure-value-error-translation-file.js'
import { SecureValueErrorTranslationFiles }                                  from './secure-value-error-translation-files.js'
import { SecureValueError }                                                  from './secure-value-error.js'
import { SecureValueHash }                                                   from './secure-value-hash.js'
import { SecureValueTypeAddress }                                            from './secure-value-type-address.js'
import { SecureValueTypeBankStatement }                                      from './secure-value-type-bank-statement.js'
import { SecureValueTypeDriverLicense }                                      from './secure-value-type-driver-license.js'
import { SecureValueTypeEmail }                                              from './secure-value-type-email.js'
import { SecureValueTypeIdentityCard }                                       from './secure-value-type-identity-card.js'
import { SecureValueTypeInternalPassport }                                   from './secure-value-type-internal-passport.js'
import { SecureValueTypePassportRegistration }                               from './secure-value-type-passport-registration.js'
import { SecureValueTypePassport }                                           from './secure-value-type-passport.js'
import { SecureValueTypePersonalDetails }                                    from './secure-value-type-personal-details.js'
import { SecureValueTypePhone }                                              from './secure-value-type-phone.js'
import { SecureValueTypeRentalAgreement }                                    from './secure-value-type-rental-agreement.js'
import { SecureValueTypeTemporaryRegistration }                              from './secure-value-type-temporary-registration.js'
import { SecureValueTypeUtilityBill }                                        from './secure-value-type-utility-bill.js'
import { SecureValue }                                                       from './secure-value.js'
import { SendAsPeer }                                                        from './send-as-peer.js'
import { SendMessageCancelAction }                                           from './send-message-cancel-action.js'
import { SendMessageChooseContactAction }                                    from './send-message-choose-contact-action.js'
import { SendMessageChooseStickerAction }                                    from './send-message-choose-sticker-action.js'
import { SendMessageEmojiInteractionSeen }                                   from './send-message-emoji-interaction-seen.js'
import { SendMessageEmojiInteraction }                                       from './send-message-emoji-interaction.js'
import { SendMessageGamePlayAction }                                         from './send-message-game-play-action.js'
import { SendMessageGeoLocationAction }                                      from './send-message-geo-location-action.js'
import { SendMessageHistoryImportAction }                                    from './send-message-history-import-action.js'
import { SendMessageRecordAudioAction }                                      from './send-message-record-audio-action.js'
import { SendMessageRecordRoundAction }                                      from './send-message-record-round-action.js'
import { SendMessageRecordVideoAction }                                      from './send-message-record-video-action.js'
import { SendMessageTypingAction }                                           from './send-message-typing-action.js'
import { SendMessageUploadAudioAction }                                      from './send-message-upload-audio-action.js'
import { SendMessageUploadDocumentAction }                                   from './send-message-upload-document-action.js'
import { SendMessageUploadPhotoAction }                                      from './send-message-upload-photo-action.js'
import { SendMessageUploadRoundAction }                                      from './send-message-upload-round-action.js'
import { SendMessageUploadVideoAction }                                      from './send-message-upload-video-action.js'
import { ServerDHInnerData }                                                 from './server-dh-inner-data.js'
import { ServerDHParamsOk }                                                  from './server-dh-params-ok.js'
import { SetClientDHParams }                                                 from './set-client-dh-params.js'
import { ShippingOption }                                                    from './shipping-option.js'
import { SimpleWebViewResultUrl }                                            from './simple-web-view-result-url.js'
import { SpeakingInGroupCallAction }                                         from './speaking-in-group-call-action.js'
import { SponsoredMessage }                                                  from './sponsored-message.js'
import { StatsAbsValueAndPrev }                                              from './stats-abs-value-and-prev.js'
import { StatsDateRangeDays }                                                from './stats-date-range-days.js'
import { StatsGraphAsync }                                                   from './stats-graph-async.js'
import { StatsGraphError }                                                   from './stats-graph-error.js'
import { StatsGraph }                                                        from './stats-graph.js'
import { StatsGroupTopAdmin }                                                from './stats-group-top-admin.js'
import { StatsGroupTopInviter }                                              from './stats-group-top-inviter.js'
import { StatsGroupTopPoster }                                               from './stats-group-top-poster.js'
import { StatsPercentValue }                                                 from './stats-percent-value.js'
import { StatsURL }                                                          from './stats-url.js'
import { StatsBroadcastStats }                                               from './stats.broadcast-stats.js'
import { StatsGetBroadcastStats }                                            from './stats.get-broadcast-stats.js'
import { StatsGetMegagroupStats }                                            from './stats.get-megagroup-stats.js'
import { StatsGetMessagePublicForwards }                                     from './stats.get-message-public-forwards.js'
import { StatsGetMessageStats }                                              from './stats.get-message-stats.js'
import { StatsLoadAsyncGraph }                                               from './stats.load-async-graph.js'
import { StatsMegagroupStats }                                               from './stats.megagroup-stats.js'
import { StatsMessageStats }                                                 from './stats.message-stats.js'
import { StickerKeyword }                                                    from './sticker-keyword.js'
import { StickerPack }                                                       from './sticker-pack.js'
import { StickerSetCovered }                                                 from './sticker-set-covered.js'
import { StickerSetFullCovered }                                             from './sticker-set-full-covered.js'
import { StickerSetMultiCovered }                                            from './sticker-set-multi-covered.js'
import { StickerSetNoCovered }                                               from './sticker-set-no-covered.js'
import { StickerSet }                                                        from './sticker-set.js'
import { StickersAddStickerToSet }                                           from './stickers.add-sticker-to-set.js'
import { StickersChangeStickerPosition }                                     from './stickers.change-sticker-position.js'
import { StickersChangeSticker }                                             from './stickers.change-sticker.js'
import { StickersCheckShortName }                                            from './stickers.check-short-name.js'
import { StickersCreateStickerSet }                                          from './stickers.create-sticker-set.js'
import { StickersDeleteStickerSet }                                          from './stickers.delete-sticker-set.js'
import { StickersRemoveStickerFromSet }                                      from './stickers.remove-sticker-from-set.js'
import { StickersRenameStickerSet }                                          from './stickers.rename-sticker-set.js'
import { StickersSetStickerSetThumb }                                        from './stickers.set-sticker-set-thumb.js'
import { StickersSuggestShortName }                                          from './stickers.suggest-short-name.js'
import { StickersSuggestedShortName }                                        from './stickers.suggested-short-name.js'
import { StorageFileGif }                                                    from './storage.file-gif.js'
import { StorageFileJpeg }                                                   from './storage.file-jpeg.js'
import { StorageFileMov }                                                    from './storage.file-mov.js'
import { StorageFileMp3 }                                                    from './storage.file-mp3.js'
import { StorageFileMp4 }                                                    from './storage.file-mp4.js'
import { StorageFilePartial }                                                from './storage.file-partial.js'
import { StorageFilePdf }                                                    from './storage.file-pdf.js'
import { StorageFilePng }                                                    from './storage.file-png.js'
import { StorageFileUnknown }                                                from './storage.file-unknown.js'
import { StorageFileWebp }                                                   from './storage.file-webp.js'
import { TextAnchor }                                                        from './text-anchor.js'
import { TextBold }                                                          from './text-bold.js'
import { TextConcat }                                                        from './text-concat.js'
import { TextEmail }                                                         from './text-email.js'
import { TextEmpty }                                                         from './text-empty.js'
import { TextFixed }                                                         from './text-fixed.js'
import { TextImage }                                                         from './text-image.js'
import { TextItalic }                                                        from './text-italic.js'
import { TextMarked }                                                        from './text-marked.js'
import { TextPhone }                                                         from './text-phone.js'
import { TextPlain }                                                         from './text-plain.js'
import { TextStrike }                                                        from './text-strike.js'
import { TextSubscript }                                                     from './text-subscript.js'
import { TextSuperscript }                                                   from './text-superscript.js'
import { TextUnderline }                                                     from './text-underline.js'
import { TextUrl }                                                           from './text-url.js'
import { TextWithEntities }                                                  from './text-with-entities.js'
import { ThemeSettings }                                                     from './theme-settings.js'
import { Theme }                                                             from './theme.js'
import { TopPeerCategoryBotsInline }                                         from './top-peer-category-bots-inline.js'
import { TopPeerCategoryBotsPM }                                             from './top-peer-category-bots-pm.js'
import { TopPeerCategoryChannels }                                           from './top-peer-category-channels.js'
import { TopPeerCategoryCorrespondents }                                     from './top-peer-category-correspondents.js'
import { TopPeerCategoryForwardChats }                                       from './top-peer-category-forward-chats.js'
import { TopPeerCategoryForwardUsers }                                       from './top-peer-category-forward-users.js'
import { TopPeerCategoryGroups }                                             from './top-peer-category-groups.js'
import { TopPeerCategoryPeers }                                              from './top-peer-category-peers.js'
import { TopPeerCategoryPhoneCalls }                                         from './top-peer-category-phone-calls.js'
import { TopPeer }                                                           from './top-peer.js'
import { True }                                                              from './true.js'
import { UpdateAttachMenuBots }                                              from './update-attach-menu-bots.js'
import { UpdateAutoSaveSettings }                                            from './update-auto-save-settings.js'
import { UpdateBotCallbackQuery }                                            from './update-bot-callback-query.js'
import { UpdateBotChatInviteRequester }                                      from './update-bot-chat-invite-requester.js'
import { UpdateBotCommands }                                                 from './update-bot-commands.js'
import { UpdateBotInlineQuery }                                              from './update-bot-inline-query.js'
import { UpdateBotInlineSend }                                               from './update-bot-inline-send.js'
import { UpdateBotMenuButton }                                               from './update-bot-menu-button.js'
import { UpdateBotPrecheckoutQuery }                                         from './update-bot-precheckout-query.js'
import { UpdateBotShippingQuery }                                            from './update-bot-shipping-query.js'
import { UpdateBotStopped }                                                  from './update-bot-stopped.js'
import { UpdateBotWebhookJSONQuery }                                         from './update-bot-webhook-json-query.js'
import { UpdateBotWebhookJSON }                                              from './update-bot-webhook-json.js'
import { UpdateChannelAvailableMessages }                                    from './update-channel-available-messages.js'
import { UpdateChannelMessageForwards }                                      from './update-channel-message-forwards.js'
import { UpdateChannelMessageViews }                                         from './update-channel-message-views.js'
import { UpdateChannelParticipant }                                          from './update-channel-participant.js'
import { UpdateChannelPinnedTopic }                                          from './update-channel-pinned-topic.js'
import { UpdateChannelPinnedTopics }                                         from './update-channel-pinned-topics.js'
import { UpdateChannelReadMessagesContents }                                 from './update-channel-read-messages-contents.js'
import { UpdateChannelTooLong }                                              from './update-channel-too-long.js'
import { UpdateChannelUserTyping }                                           from './update-channel-user-typing.js'
import { UpdateChannelWebPage }                                              from './update-channel-web-page.js'
import { UpdateChannel }                                                     from './update-channel.js'
import { UpdateChatDefaultBannedRights }                                     from './update-chat-default-banned-rights.js'
import { UpdateChatParticipantAdd }                                          from './update-chat-participant-add.js'
import { UpdateChatParticipantAdmin }                                        from './update-chat-participant-admin.js'
import { UpdateChatParticipantDelete }                                       from './update-chat-participant-delete.js'
import { UpdateChatParticipant }                                             from './update-chat-participant.js'
import { UpdateChatParticipants }                                            from './update-chat-participants.js'
import { UpdateChatUserTyping }                                              from './update-chat-user-typing.js'
import { UpdateChat }                                                        from './update-chat.js'
import { UpdateConfig }                                                      from './update-config.js'
import { UpdateContactsReset }                                               from './update-contacts-reset.js'
import { UpdateDcOptions }                                                   from './update-dc-options.js'
import { UpdateDeleteChannelMessages }                                       from './update-delete-channel-messages.js'
import { UpdateDeleteMessages }                                              from './update-delete-messages.js'
import { UpdateDeleteScheduledMessages }                                     from './update-delete-scheduled-messages.js'
import { UpdateDialogFilterOrder }                                           from './update-dialog-filter-order.js'
import { UpdateDialogFilter }                                                from './update-dialog-filter.js'
import { UpdateDialogFilters }                                               from './update-dialog-filters.js'
import { UpdateDialogPinned }                                                from './update-dialog-pinned.js'
import { UpdateDialogUnreadMark }                                            from './update-dialog-unread-mark.js'
import { UpdateDraftMessage }                                                from './update-draft-message.js'
import { UpdateEditChannelMessage }                                          from './update-edit-channel-message.js'
import { UpdateEditMessage }                                                 from './update-edit-message.js'
import { UpdateEncryptedChatTyping }                                         from './update-encrypted-chat-typing.js'
import { UpdateEncryptedMessagesRead }                                       from './update-encrypted-messages-read.js'
import { UpdateEncryption }                                                  from './update-encryption.js'
import { UpdateFavedStickers }                                               from './update-faved-stickers.js'
import { UpdateFolderPeers }                                                 from './update-folder-peers.js'
import { UpdateGeoLiveViewed }                                               from './update-geo-live-viewed.js'
import { UpdateGroupCallConnection }                                         from './update-group-call-connection.js'
import { UpdateGroupCallParticipants }                                       from './update-group-call-participants.js'
import { UpdateGroupCall }                                                   from './update-group-call.js'
import { UpdateGroupInvitePrivacyForbidden }                                 from './update-group-invite-privacy-forbidden.js'
import { UpdateInlineBotCallbackQuery }                                      from './update-inline-bot-callback-query.js'
import { UpdateLangPackTooLong }                                             from './update-lang-pack-too-long.js'
import { UpdateLangPack }                                                    from './update-lang-pack.js'
import { UpdateLoginToken }                                                  from './update-login-token.js'
import { UpdateMessageExtendedMedia }                                        from './update-message-extended-media.js'
import { UpdateMessageID }                                                   from './update-message-id.js'
import { UpdateMessagePollVote }                                             from './update-message-poll-vote.js'
import { UpdateMessagePoll }                                                 from './update-message-poll.js'
import { UpdateMessageReactions }                                            from './update-message-reactions.js'
import { UpdateMoveStickerSetToTop }                                         from './update-move-sticker-set-to-top.js'
import { UpdateNewChannelMessage }                                           from './update-new-channel-message.js'
import { UpdateNewEncryptedMessage }                                         from './update-new-encrypted-message.js'
import { UpdateNewMessage }                                                  from './update-new-message.js'
import { UpdateNewScheduledMessage }                                         from './update-new-scheduled-message.js'
import { UpdateNewStickerSet }                                               from './update-new-sticker-set.js'
import { UpdateNotifySettings }                                              from './update-notify-settings.js'
import { UpdatePeerBlocked }                                                 from './update-peer-blocked.js'
import { UpdatePeerHistoryTTL }                                              from './update-peer-history-ttl.js'
import { UpdatePeerLocated }                                                 from './update-peer-located.js'
import { UpdatePeerSettings }                                                from './update-peer-settings.js'
import { UpdatePendingJoinRequests }                                         from './update-pending-join-requests.js'
import { UpdatePhoneCallSignalingData }                                      from './update-phone-call-signaling-data.js'
import { UpdatePhoneCall }                                                   from './update-phone-call.js'
import { UpdatePinnedChannelMessages }                                       from './update-pinned-channel-messages.js'
import { UpdatePinnedDialogs }                                               from './update-pinned-dialogs.js'
import { UpdatePinnedMessages }                                              from './update-pinned-messages.js'
import { UpdatePrivacy }                                                     from './update-privacy.js'
import { UpdatePtsChanged }                                                  from './update-pts-changed.js'
import { UpdateReadChannelDiscussionInbox }                                  from './update-read-channel-discussion-inbox.js'
import { UpdateReadChannelDiscussionOutbox }                                 from './update-read-channel-discussion-outbox.js'
import { UpdateReadChannelInbox }                                            from './update-read-channel-inbox.js'
import { UpdateReadChannelOutbox }                                           from './update-read-channel-outbox.js'
import { UpdateReadFeaturedEmojiStickers }                                   from './update-read-featured-emoji-stickers.js'
import { UpdateReadFeaturedStickers }                                        from './update-read-featured-stickers.js'
import { UpdateReadHistoryInbox }                                            from './update-read-history-inbox.js'
import { UpdateReadHistoryOutbox }                                           from './update-read-history-outbox.js'
import { UpdateReadMessagesContents }                                        from './update-read-messages-contents.js'
import { UpdateRecentEmojiStatuses }                                         from './update-recent-emoji-statuses.js'
import { UpdateRecentReactions }                                             from './update-recent-reactions.js'
import { UpdateRecentStickers }                                              from './update-recent-stickers.js'
import { UpdateSavedGifs }                                                   from './update-saved-gifs.js'
import { UpdateSavedRingtones }                                              from './update-saved-ringtones.js'
import { UpdateServiceNotification }                                         from './update-service-notification.js'
import { UpdateShortChatMessage }                                            from './update-short-chat-message.js'
import { UpdateShortMessage }                                                from './update-short-message.js'
import { UpdateShortSentMessage }                                            from './update-short-sent-message.js'
import { UpdateShort }                                                       from './update-short.js'
import { UpdateStickerSetsOrder }                                            from './update-sticker-sets-order.js'
import { UpdateStickerSets }                                                 from './update-sticker-sets.js'
import { UpdateTheme }                                                       from './update-theme.js'
import { UpdateTranscribedAudio }                                            from './update-transcribed-audio.js'
import { UpdateUserEmojiStatus }                                             from './update-user-emoji-status.js'
import { UpdateUserName }                                                    from './update-user-name.js'
import { UpdateUserPhone }                                                   from './update-user-phone.js'
import { UpdateUserStatus }                                                  from './update-user-status.js'
import { UpdateUserTyping }                                                  from './update-user-typing.js'
import { UpdateUser }                                                        from './update-user.js'
import { UpdateWebPage }                                                     from './update-web-page.js'
import { UpdateWebViewResultSent }                                           from './update-web-view-result-sent.js'
import { UpdatesCombined }                                                   from './updates-combined.js'
import { UpdatesTooLong }                                                    from './updates-too-long.js'
import { UpdatesChannelDifferenceEmpty }                                     from './updates.channel-difference-empty.js'
import { UpdatesChannelDifferenceTooLong }                                   from './updates.channel-difference-too-long.js'
import { UpdatesChannelDifference }                                          from './updates.channel-difference.js'
import { UpdatesDifferenceEmpty }                                            from './updates.difference-empty.js'
import { UpdatesDifferenceSlice }                                            from './updates.difference-slice.js'
import { UpdatesDifferenceTooLong }                                          from './updates.difference-too-long.js'
import { UpdatesDifference }                                                 from './updates.difference.js'
import { UpdatesGetChannelDifference }                                       from './updates.get-channel-difference.js'
import { UpdatesGetDifference }                                              from './updates.get-difference.js'
import { UpdatesGetState }                                                   from './updates.get-state.js'
import { Updates }                                                           from './updates.js'
import { UpdatesState }                                                      from './updates.state.js'
import { UploadCdnFileReuploadNeeded }                                       from './upload.cdn-file-reupload-needed.js'
import { UploadCdnFile }                                                     from './upload.cdn-file.js'
import { UploadFileCdnRedirect }                                             from './upload.file-cdn-redirect.js'
import { UploadFile }                                                        from './upload.file.js'
import { UploadGetCdnFileHashes }                                            from './upload.get-cdn-file-hashes.js'
import { UploadGetCdnFile }                                                  from './upload.get-cdn-file.js'
import { UploadGetFileHashes }                                               from './upload.get-file-hashes.js'
import { UploadGetFile }                                                     from './upload.get-file.js'
import { UploadGetWebFile }                                                  from './upload.get-web-file.js'
import { UploadReuploadCdnFile }                                             from './upload.reupload-cdn-file.js'
import { UploadSaveBigFilePart }                                             from './upload.save-big-file-part.js'
import { UploadSaveFilePart }                                                from './upload.save-file-part.js'
import { UploadWebFile }                                                     from './upload.web-file.js'
import { UrlAuthResultAccepted }                                             from './url-auth-result-accepted.js'
import { UrlAuthResultDefault }                                              from './url-auth-result-default.js'
import { UrlAuthResultRequest }                                              from './url-auth-result-request.js'
import { UserEmpty }                                                         from './user-empty.js'
import { UserFull }                                                          from './user-full.js'
import { UserProfilePhotoEmpty }                                             from './user-profile-photo-empty.js'
import { UserProfilePhoto }                                                  from './user-profile-photo.js'
import { UserStatusEmpty }                                                   from './user-status-empty.js'
import { UserStatusLastMonth }                                               from './user-status-last-month.js'
import { UserStatusLastWeek }                                                from './user-status-last-week.js'
import { UserStatusOffline }                                                 from './user-status-offline.js'
import { UserStatusOnline }                                                  from './user-status-online.js'
import { UserStatusRecently }                                                from './user-status-recently.js'
import { User }                                                              from './user.js'
import { Username }                                                          from './username.js'
import { UsersGetFullUser }                                                  from './users.get-full-user.js'
import { UsersGetUsers }                                                     from './users.get-users.js'
import { UsersSetSecureValueErrors }                                         from './users.set-secure-value-errors.js'
import { UsersUserFull }                                                     from './users.user-full.js'
import { Vector }                                                            from './vector.js'
import { VideoSizeEmojiMarkup }                                              from './video-size-emoji-markup.js'
import { VideoSizeStickerMarkup }                                            from './video-size-sticker-markup.js'
import { VideoSize }                                                         from './video-size.js'
import { WallPaperNoFile }                                                   from './wall-paper-no-file.js'
import { WallPaperSettings }                                                 from './wall-paper-settings.js'
import { WallPaper }                                                         from './wall-paper.js'
import { WebAuthorization }                                                  from './web-authorization.js'
import { WebDocumentNoProxy }                                                from './web-document-no-proxy.js'
import { WebDocument }                                                       from './web-document.js'
import { WebPageAttributeTheme }                                             from './web-page-attribute-theme.js'
import { WebPageEmpty }                                                      from './web-page-empty.js'
import { WebPageNotModified }                                                from './web-page-not-modified.js'
import { WebPagePending }                                                    from './web-page-pending.js'
import { WebPage }                                                           from './web-page.js'
import { WebViewMessageSent }                                                from './web-view-message-sent.js'
import { WebViewResultUrl }                                                  from './web-view-result-url.js'

export const SchemaRegistry = new Map<number, typeof TLObject<any>>([
  [-1194283041, AccountDaysTTL],
  [-202552205, AccountAcceptAuthorization],
  [-1389486888, AccountAuthorizationForm],
  [1275039392, AccountAuthorizations],
  [1674235686, AccountAutoDownloadSettings],
  [1279133341, AccountAutoSaveSettings],
  [-1043606090, AccountCancelPasswordEmail],
  [1089766498, AccountChangeAuthorizationSettings],
  [1891839707, AccountChangePhone],
  [655677548, AccountCheckUsername],
  [404757166, AccountClearRecentEmojiStatuses],
  [-1881204448, AccountConfirmPasswordEmail],
  [1596029123, AccountConfirmPhone],
  [1474462241, AccountContentSettings],
  [1697530880, AccountCreateTheme],
  [1284770294, AccountDeclinePasswordReset],
  [-1564422284, AccountDeleteAccount],
  [1404829728, AccountDeleteAutoSaveExceptions],
  [-1199522741, AccountDeleteSecureValue],
  [-507835039, AccountEmailVerifiedLogin],
  [731303195, AccountEmailVerified],
  [-796072379, AccountEmojiStatusesNotModified],
  [-1866176559, AccountEmojiStatuses],
  [489050862, AccountFinishTakeoutSession],
  [150761757, AccountGetAccountTTL],
  [-1299661699, AccountGetAllSecureValues],
  [-1456907910, AccountGetAuthorizationForm],
  [-484392616, AccountGetAuthorizations],
  [1457130303, AccountGetAutoDownloadSettings],
  [-1379156774, AccountGetAutoSaveSettings],
  [-700916087, AccountGetChatThemes],
  [-1626880216, AccountGetContactSignUpNotification],
  [-1952756306, AccountGetContentSettings],
  [-696962170, AccountGetDefaultEmojiStatuses],
  [-1856479058, AccountGetDefaultGroupPhotoEmojis],
  [-495647960, AccountGetDefaultProfilePhotoEmojis],
  [-349483786, AccountGetGlobalPrivacySettings],
  [1705865692, AccountGetMultiWallPapers],
  [1398240377, AccountGetNotifyExceptions],
  [313765169, AccountGetNotifySettings],
  [-1663767815, AccountGetPasswordSettings],
  [1418342645, AccountGetPassword],
  [-623130288, AccountGetPrivacy],
  [257392901, AccountGetRecentEmojiStatuses],
  [-510647672, AccountGetSavedRingtones],
  [1936088002, AccountGetSecureValue],
  [978872812, AccountGetTheme],
  [1913054296, AccountGetThemes],
  [1151208273, AccountGetTmpPassword],
  [-57811990, AccountGetWallPaper],
  [127302966, AccountGetWallPapers],
  [405695855, AccountGetWebAuthorizations],
  [-1896617296, AccountInitTakeoutSession],
  [-953697477, AccountInstallTheme],
  [-18000023, AccountInstallWallPaper],
  [-1036572727, AccountPasswordInputSettings],
  [-1705233435, AccountPasswordSettings],
  [-1787080453, AccountPassword],
  [1352683077, AccountPrivacyRules],
  [-326762118, AccountRegisterDevice],
  [-279966037, AccountReorderUsernames],
  [-977650298, AccountReportPeer],
  [-91437323, AccountReportProfilePhoto],
  [2055154197, AccountResendPasswordEmail],
  [-545786948, AccountResetAuthorization],
  [-612493497, AccountResetNotifySettings],
  [-478701471, AccountResetPasswordFailedWait],
  [-383330754, AccountResetPasswordOk],
  [-370148227, AccountResetPasswordRequestedWait],
  [-1828139493, AccountResetPassword],
  [-1153722364, AccountResetWallPapers],
  [755087855, AccountResetWebAuthorization],
  [1747789204, AccountResetWebAuthorizations],
  [1995661875, AccountSaveAutoDownloadSettings],
  [-694451359, AccountSaveAutoSaveSettings],
  [1038768899, AccountSaveRingtone],
  [-1986010339, AccountSaveSecureValue],
  [-229175188, AccountSaveTheme],
  [1817860919, AccountSaveWallPaper],
  [523271863, AccountSavedRingtoneConverted],
  [-1222230163, AccountSavedRingtone],
  [-67704655, AccountSavedRingtonesNotModified],
  [-1041683259, AccountSavedRingtones],
  [-2108208411, AccountSendChangePhoneCode],
  [457157256, AccountSendConfirmPhoneCode],
  [-1730136133, AccountSendVerifyEmailCode],
  [-1516022023, AccountSendVerifyPhoneCode],
  [-2128640689, AccountSentEmailCode],
  [608323678, AccountSetAccountTTL],
  [-1081501024, AccountSetAuthorizationTTL],
  [-806076575, AccountSetContactSignUpNotification],
  [-1250643605, AccountSetContentSettings],
  [517647042, AccountSetGlobalPrivacySettings],
  [-906486552, AccountSetPrivacy],
  [1304052993, AccountTakeout],
  [-199313886, AccountThemesNotModified],
  [-1707242387, AccountThemes],
  [-614138572, AccountTmpPassword],
  [1490465654, AccountToggleUsername],
  [1779249670, AccountUnregisterDevice],
  [954152242, AccountUpdateDeviceLocked],
  [-70001045, AccountUpdateEmojiStatus],
  [-2067899501, AccountUpdateNotifySettings],
  [-1516564433, AccountUpdatePasswordSettings],
  [2018596725, AccountUpdateProfile],
  [1713919532, AccountUpdateStatus],
  [737414348, AccountUpdateTheme],
  [1040964988, AccountUpdateUsername],
  [-2095414366, AccountUploadRingtone],
  [473805619, AccountUploadTheme],
  [-476410109, AccountUploadWallPaper],
  [53322959, AccountVerifyEmail],
  [1305716726, AccountVerifyPhone],
  [471437699, AccountWallPapersNotModified],
  [-842824308, AccountWallPapers],
  [-313079300, AccountWebAuthorizations],
  [1008422669, AppWebViewResultUrl],
  [1165423600, AttachMenuBotIconColor],
  [-1297663893, AttachMenuBotIcon],
  [-928371502, AttachMenuBot],
  [-1816172929, AttachMenuBotsBot],
  [-237467044, AttachMenuBotsNotModified],
  [1011024320, AttachMenuBots],
  [-1020528102, AttachMenuPeerTypeBotPM],
  [2080104188, AttachMenuPeerTypeBroadcast],
  [84480319, AttachMenuPeerTypeChat],
  [-247016673, AttachMenuPeerTypePM],
  [2104224014, AttachMenuPeerTypeSameBotPM],
  [-392909491, AuthAcceptLoginToken],
  [1148485274, AuthAuthorizationSignUpRequired],
  [782418132, AuthAuthorization],
  [-841733627, AuthBindTempAuthKey],
  [520357240, AuthCancelCode],
  [-779399914, AuthCheckPassword],
  [221691769, AuthCheckRecoveryPassword],
  [1948046307, AuthCodeTypeCall],
  [577556219, AuthCodeTypeFlashCall],
  [116234636, AuthCodeTypeFragmentSms],
  [-702884114, AuthCodeTypeMissedCall],
  [1923290508, AuthCodeTypeSms],
  [-1907842680, AuthDropTempAuthKeys],
  [-440401971, AuthExportAuthorization],
  [-1210022402, AuthExportLoginToken],
  [-1271602504, AuthExportedAuthorization],
  [-1518699091, AuthImportAuthorization],
  [1738800940, AuthImportBotAuthorization],
  [-1783866140, AuthImportLoginToken],
  [767062953, AuthImportWebTokenAuthorization],
  [1047706137, AuthLogOut],
  [-1012759713, AuthLoggedOut],
  [110008598, AuthLoginTokenMigrateTo],
  [957176926, AuthLoginTokenSuccess],
  [1654593920, AuthLoginToken],
  [326715557, AuthPasswordRecovery],
  [923364464, AuthRecoverPassword],
  [-1991881904, AuthRequestFirebaseSms],
  [-661144474, AuthRequestPasswordRecovery],
  [1056025023, AuthResendCode],
  [-1616179942, AuthResetAuthorizations],
  [2123760019, AuthResetLoginEmail],
  [-1502141361, AuthSendCode],
  [596704836, AuthSentCodeSuccess],
  [1035688326, AuthSentCodeTypeApp],
  [1398007207, AuthSentCodeTypeCall],
  [-196020837, AuthSentCodeTypeEmailCode],
  [-444918734, AuthSentCodeTypeFirebaseSms],
  [-1425815847, AuthSentCodeTypeFlashCall],
  [-648651719, AuthSentCodeTypeFragmentSms],
  [-2113903484, AuthSentCodeTypeMissedCall],
  [-1521934870, AuthSentCodeTypeSetUpEmailRequired],
  [-1073693790, AuthSentCodeTypeSms],
  [1577067778, AuthSentCode],
  [-1923962543, AuthSignIn],
  [-2131827673, AuthSignUp],
  [-1392388579, Authorization],
  [-1896171181, AutoDownloadSettings],
  [-2124403385, AutoSaveException],
  [-934791986, AutoSaveSettings],
  [-1065882623, AvailableReaction],
  [-1477445615, BadMsgNotification],
  [-307542917, BadServerSalt],
  [-177732982, BankCardOpenUrl],
  [1527845466, BaseThemeArctic],
  [-1012849566, BaseThemeClassic],
  [-69724536, BaseThemeDay],
  [-1212997976, BaseThemeNight],
  [1834973166, BaseThemeTinted],
  [1973679973, BindAuthKeyInner],
  [-1132882121, BoolFalse],
  [-1720552011, BoolTrue],
  [1571189943, BotAppNotModified],
  [-1778593322, BotApp],
  [-1180016534, BotCommandScopeChatAdmins],
  [1877059713, BotCommandScopeChats],
  [795652779, BotCommandScopeDefault],
  [1071145937, BotCommandScopePeerAdmins],
  [169026035, BotCommandScopePeerUser],
  [-610432643, BotCommandScopePeer],
  [1011811544, BotCommandScopeUsers],
  [-1032140601, BotCommand],
  [-1892676777, BotInfo],
  [400266251, BotInlineMediaResult],
  [1984755728, BotInlineMessageMediaAuto],
  [416402882, BotInlineMessageMediaContact],
  [85477117, BotInlineMessageMediaGeo],
  [894081801, BotInlineMessageMediaInvoice],
  [-1970903652, BotInlineMessageMediaVenue],
  [-1937807902, BotInlineMessageText],
  [295067450, BotInlineResult],
  [1113113093, BotMenuButtonCommands],
  [1966318984, BotMenuButtonDefault],
  [-944407322, BotMenuButton],
  [-434028723, BotsAnswerWebhookJSONQuery],
  [-391678544, BotsBotInfo],
  [-481554986, BotsGetBotCommands],
  [-589753091, BotsGetBotInfo],
  [-1671369944, BotsGetBotMenuButton],
  [-1760972350, BotsReorderUsernames],
  [1032708345, BotsResetBotCommands],
  [-1440257555, BotsSendCustomRequest],
  [2021942497, BotsSetBotBroadcastDefaultAdminRights],
  [85399130, BotsSetBotCommands],
  [-1839281686, BotsSetBotGroupDefaultAdminRights],
  [282013987, BotsSetBotInfo],
  [1157944655, BotsSetBotMenuButton],
  [87861619, BotsToggleUsername],
  [1462101002, CdnConfig],
  [-914167110, CdnPublicKey],
  [1427671598, ChannelAdminLogEventActionChangeAbout],
  [-1102180616, ChannelAdminLogEventActionChangeAvailableReactions],
  [1855199800, ChannelAdminLogEventActionChangeHistoryTTL],
  [84703944, ChannelAdminLogEventActionChangeLinkedChat],
  [241923758, ChannelAdminLogEventActionChangeLocation],
  [1129042607, ChannelAdminLogEventActionChangePhoto],
  [-1312568665, ChannelAdminLogEventActionChangeStickerSet],
  [-421545947, ChannelAdminLogEventActionChangeTitle],
  [1783299128, ChannelAdminLogEventActionChangeUsername],
  [-263212119, ChannelAdminLogEventActionChangeUsernames],
  [1483767080, ChannelAdminLogEventActionCreateTopic],
  [771095562, ChannelAdminLogEventActionDefaultBannedRights],
  [1121994683, ChannelAdminLogEventActionDeleteMessage],
  [-1374254839, ChannelAdminLogEventActionDeleteTopic],
  [-610299584, ChannelAdminLogEventActionDiscardGroupCall],
  [1889215493, ChannelAdminLogEventActionEditMessage],
  [-261103096, ChannelAdminLogEventActionEditTopic],
  [1515256996, ChannelAdminLogEventActionExportedInviteDelete],
  [-384910503, ChannelAdminLogEventActionExportedInviteEdit],
  [1091179342, ChannelAdminLogEventActionExportedInviteRevoke],
  [-484690728, ChannelAdminLogEventActionParticipantInvite],
  [-23084712, ChannelAdminLogEventActionParticipantJoinByInvite],
  [-1347021750, ChannelAdminLogEventActionParticipantJoinByRequest],
  [405815507, ChannelAdminLogEventActionParticipantJoin],
  [-124291086, ChannelAdminLogEventActionParticipantLeave],
  [-115071790, ChannelAdminLogEventActionParticipantMute],
  [-714643696, ChannelAdminLogEventActionParticipantToggleAdmin],
  [-422036098, ChannelAdminLogEventActionParticipantToggleBan],
  [-431740480, ChannelAdminLogEventActionParticipantUnmute],
  [1048537159, ChannelAdminLogEventActionParticipantVolume],
  [1569535291, ChannelAdminLogEventActionPinTopic],
  [663693416, ChannelAdminLogEventActionSendMessage],
  [589338437, ChannelAdminLogEventActionStartGroupCall],
  [-1895328189, ChannelAdminLogEventActionStopPoll],
  [1693675004, ChannelAdminLogEventActionToggleAntiSpam],
  [46949251, ChannelAdminLogEventActionToggleForum],
  [1456906823, ChannelAdminLogEventActionToggleGroupCallSetting],
  [460916654, ChannelAdminLogEventActionToggleInvites],
  [-886388890, ChannelAdminLogEventActionToggleNoForwards],
  [1599903217, ChannelAdminLogEventActionTogglePreHistoryHidden],
  [648939889, ChannelAdminLogEventActionToggleSignatures],
  [1401984889, ChannelAdminLogEventActionToggleSlowMode],
  [-370660328, ChannelAdminLogEventActionUpdatePinned],
  [531458253, ChannelAdminLogEvent],
  [-368018716, ChannelAdminLogEventsFilter],
  [399807445, ChannelForbidden],
  [-231385849, ChannelFull],
  [-1078612597, ChannelLocationEmpty],
  [547062491, ChannelLocation],
  [-1798033689, ChannelMessagesFilterEmpty],
  [-847783593, ChannelMessagesFilter],
  [885242707, ChannelParticipantAdmin],
  [1844969806, ChannelParticipantBanned],
  [803602899, ChannelParticipantCreator],
  [453242886, ChannelParticipantLeft],
  [900251559, ChannelParticipantSelf],
  [-1072953408, ChannelParticipant],
  [-1268741783, ChannelParticipantsAdmins],
  [338142689, ChannelParticipantsBanned],
  [-1328445861, ChannelParticipantsBots],
  [-1150621555, ChannelParticipantsContacts],
  [-1548400251, ChannelParticipantsKicked],
  [-531931925, ChannelParticipantsMentions],
  [-566281095, ChannelParticipantsRecent],
  [106343499, ChannelParticipantsSearch],
  [-2094689180, Channel],
  [-309659827, ChannelsAdminLogResults],
  [-541588713, ChannelsChannelParticipant],
  [-266911767, ChannelsChannelParticipantsNotModified],
  [-1699676497, ChannelsChannelParticipants],
  [283557164, ChannelsCheckUsername],
  [187239529, ChannelsConvertToGigagroup],
  [-1862244601, ChannelsCreateChannel],
  [-200539612, ChannelsCreateForumTopic],
  [170155475, ChannelsDeactivateAllUsernames],
  [-1072619549, ChannelsDeleteChannel],
  [-1683319225, ChannelsDeleteHistory],
  [-2067661490, ChannelsDeleteMessages],
  [913655003, ChannelsDeleteParticipantHistory],
  [876830509, ChannelsDeleteTopicHistory],
  [-751007486, ChannelsEditAdmin],
  [-1763259007, ChannelsEditBanned],
  [-1892102881, ChannelsEditCreator],
  [-186670715, ChannelsEditForumTopic],
  [1491484525, ChannelsEditLocation],
  [-248621111, ChannelsEditPhoto],
  [1450044624, ChannelsEditTitle],
  [-432034325, ChannelsExportMessageLink],
  [870184064, ChannelsGetAdminLog],
  [-122669393, ChannelsGetAdminedPublicChannels],
  [176122811, ChannelsGetChannels],
  [-1333584199, ChannelsGetForumTopicsByID],
  [233136337, ChannelsGetForumTopics],
  [141781513, ChannelsGetFullChannel],
  [-170208392, ChannelsGetGroupsForDiscussion],
  [300429806, ChannelsGetInactiveChannels],
  [-2092831552, ChannelsGetLeftChannels],
  [-1383294429, ChannelsGetMessages],
  [-1599378234, ChannelsGetParticipant],
  [2010044880, ChannelsGetParticipants],
  [231174382, ChannelsGetSendAs],
  [-333377601, ChannelsGetSponsoredMessages],
  [429865580, ChannelsInviteToChannel],
  [615851205, ChannelsJoinChannel],
  [-130635115, ChannelsLeaveChannel],
  [-871347913, ChannelsReadHistory],
  [-357180360, ChannelsReadMessageContents],
  [693150095, ChannelsReorderPinnedForumTopics],
  [-1268978403, ChannelsReorderUsernames],
  [-1471109485, ChannelsReportAntiSpamFalsePositive],
  [-196443371, ChannelsReportSpam],
  [-191450938, ChannelsSendAsPeers],
  [1079520178, ChannelsSetDiscussionGroup],
  [-359881479, ChannelsSetStickers],
  [1760814315, ChannelsToggleAntiSpam],
  [-1540781271, ChannelsToggleForum],
  [1277789622, ChannelsToggleJoinRequest],
  [-456419968, ChannelsToggleJoinToSend],
  [1785624660, ChannelsToggleParticipantsHidden],
  [-356796084, ChannelsTogglePreHistoryHidden],
  [527021574, ChannelsToggleSignatures],
  [-304832784, ChannelsToggleSlowMode],
  [1358053637, ChannelsToggleUsername],
  [1814925350, ChannelsUpdatePinnedForumTopic],
  [890549214, ChannelsUpdateUsername],
  [-1095836780, ChannelsViewSponsoredMessage],
  [1605510357, ChatAdminRights],
  [-219353309, ChatAdminWithInvites],
  [-1626209256, ChatBannedRights],
  [693512293, ChatEmpty],
  [1704108455, ChatForbidden],
  [-908914376, ChatFull],
  [1516793212, ChatInviteAlready],
  [179611673, ChatInviteExported],
  [-1940201511, ChatInviteImporter],
  [1634294960, ChatInvitePeek],
  [-317687113, ChatInvitePublicJoinRequests],
  [806110401, ChatInvite],
  [-264117680, ChatOnlines],
  [-1600962725, ChatParticipantAdmin],
  [-462696732, ChatParticipantCreator],
  [-1070776313, ChatParticipant],
  [-2023500831, ChatParticipantsForbidden],
  [1018991608, ChatParticipants],
  [935395612, ChatPhotoEmpty],
  [476978193, ChatPhoto],
  [1385335754, ChatReactionsAll],
  [-352570692, ChatReactionsNone],
  [1713193015, ChatReactionsSome],
  [1103884886, Chat],
  [-91752871, ChatlistsChatlistInviteAlready],
  [500007837, ChatlistsChatlistInvite],
  [-1816295539, ChatlistsChatlistUpdates],
  [1103171583, ChatlistsCheckChatlistInvite],
  [1906072670, ChatlistsDeleteExportedInvite],
  [1698543165, ChatlistsEditExportedInvite],
  [-2072885362, ChatlistsExportChatlistInvite],
  [283567014, ChatlistsExportedChatlistInvite],
  [279670215, ChatlistsExportedInvites],
  [-1992190687, ChatlistsGetChatlistUpdates],
  [-838608253, ChatlistsGetExportedInvites],
  [-37955820, ChatlistsGetLeaveChatlistSuggestions],
  [1726252795, ChatlistsHideChatlistUpdates],
  [-1498291302, ChatlistsJoinChatlistInvite],
  [-527828747, ChatlistsJoinChatlistUpdates],
  [1962598714, ChatlistsLeaveChatlist],
  [1715713620, ClientDHInnerData],
  [-1390068360, CodeSettings],
  [-870702050, Config],
  [383348795, ContactStatus],
  [341499403, Contact],
  [-130964977, ContactsAcceptContact],
  [-386636848, ContactsAddContact],
  [698914348, ContactsBlockFromReplies],
  [1758204945, ContactsBlock],
  [-513392236, ContactsBlockedSlice],
  [182326673, ContactsBlocked],
  [-1219778094, ContactsContactsNotModified],
  [-353862078, ContactsContacts],
  [269745566, ContactsDeleteByPhones],
  [157945344, ContactsDeleteContacts],
  [-127582169, ContactsExportContactToken],
  [-1290580579, ContactsFound],
  [-176409329, ContactsGetBlocked],
  [2061264541, ContactsGetContactIDs],
  [1574346258, ContactsGetContacts],
  [-750207932, ContactsGetLocated],
  [-2098076769, ContactsGetSaved],
  [-995929106, ContactsGetStatuses],
  [-1758168906, ContactsGetTopPeers],
  [318789512, ContactsImportContactToken],
  [746589157, ContactsImportContacts],
  [2010127419, ContactsImportedContacts],
  [-2020263951, ContactsResetSaved],
  [451113900, ContactsResetTopPeerRating],
  [-1963375804, ContactsResolvePhone],
  [-113456221, ContactsResolveUsername],
  [2131196633, ContactsResolvedPeer],
  [301470424, ContactsSearch],
  [-2062238246, ContactsToggleTopPeers],
  [-1255369827, ContactsTopPeersDisabled],
  [-567906571, ContactsTopPeersNotModified],
  [1891070632, ContactsTopPeers],
  [-1096393392, ContactsUnblock],
  [2104790276, DataJSON],
  [414687501, DcOption],
  [1135897376, DefaultHistoryTTL],
  [-368010477, DestroyAuthKeyFail],
  [178201177, DestroyAuthKeyNone],
  [-161422892, DestroyAuthKeyOk],
  [-784117408, DestroyAuthKey],
  [1658015945, DestroySessionNone],
  [-501201412, DestroySessionOk],
  [-414113498, DestroySession],
  [-1499615742, DhGenFail],
  [1003222836, DhGenOk],
  [1188831161, DhGenRetry],
  [-699792216, DialogFilterChatlist],
  [909284270, DialogFilterDefault],
  [2004110666, DialogFilterSuggested],
  [1949890536, DialogFilter],
  [1908216652, DialogFolder],
  [1363483106, DialogPeerFolder],
  [-445792507, DialogPeer],
  [-712374074, Dialog],
  [297109817, DocumentAttributeAnimated],
  [-1739392570, DocumentAttributeAudio],
  [-48981863, DocumentAttributeCustomEmoji],
  [358154344, DocumentAttributeFilename],
  [-1744710921, DocumentAttributeHasStickers],
  [1815593308, DocumentAttributeImageSize],
  [1662637586, DocumentAttributeSticker],
  [250621158, DocumentAttributeVideo],
  [922273905, DocumentEmpty],
  [-1881881384, Document],
  [453805082, DraftMessageEmpty],
  [-40996577, DraftMessage],
  [-1764723459, EmailVerificationApple],
  [-1842457175, EmailVerificationCode],
  [-611279166, EmailVerificationGoogle],
  [1383932651, EmailVerifyPurposeLoginChange],
  [1128644211, EmailVerifyPurposeLoginSetup],
  [-1141565819, EmailVerifyPurposePassport],
  [2056961449, EmojiGroup],
  [594408994, EmojiKeywordDeleted],
  [-709641735, EmojiKeyword],
  [1556570557, EmojiKeywordsDifference],
  [-1275374751, EmojiLanguage],
  [1209970170, EmojiListNotModified],
  [2048790993, EmojiList],
  [769727150, EmojiStatusEmpty],
  [-97474361, EmojiStatusUntil],
  [-1835310691, EmojiStatus],
  [-1519029347, EmojiURL],
  [505183301, EncryptedChatDiscarded],
  [-1417756512, EncryptedChatEmpty],
  [1223809356, EncryptedChatRequested],
  [1722964307, EncryptedChatWaiting],
  [1643173063, EncryptedChat],
  [-1038136962, EncryptedFileEmpty],
  [-1476358952, EncryptedFile],
  [594758406, EncryptedMessageService],
  [-317144808, EncryptedMessage],
  [-994444869, Error],
  [206668204, ExportedChatlistInvite],
  [1103040667, ExportedContactToken],
  [1571494644, ExportedMessageLink],
  [-207944868, FileHash],
  [-373643672, FolderPeer],
  [-11252123, Folder],
  [1749536939, FoldersEditPeerFolders],
  [37687451, ForumTopicDeleted],
  [1903173033, ForumTopic],
  [155834844, FutureSalt],
  [-1370486635, FutureSalts],
  [-1107729093, Game],
  [286776671, GeoPointEmpty],
  [-1297942941, GeoPoint],
  [-1188971260, GetFutureSalts],
  [-1096616924, GlobalPrivacySettings],
  [2004925620, GroupCallDiscarded],
  [-592373577, GroupCallParticipantVideoSourceGroup],
  [1735736008, GroupCallParticipantVideo],
  [-341428482, GroupCallParticipant],
  [-2132064081, GroupCallStreamChannel],
  [-711498484, GroupCall],
  [812830625, GzipPacked],
  [-294455398, HelpAcceptTermsOfService],
  [2094949405, HelpAppConfigNotModified],
  [-585598930, HelpAppConfig],
  [-860107216, HelpAppUpdate],
  [-1815339214, HelpCountriesListNotModified],
  [-2016381538, HelpCountriesList],
  [1107543535, HelpCountryCode],
  [-1014526429, HelpCountry],
  [1722786150, HelpDeepLinkInfoEmpty],
  [1783556146, HelpDeepLinkInfo],
  [-183649631, HelpDismissSuggestion],
  [1723407216, HelpEditUserInfo],
  [-1877938321, HelpGetAppChangelog],
  [1642330196, HelpGetAppConfig],
  [1378703997, HelpGetAppUpdate],
  [1375900482, HelpGetCdnConfig],
  [-990308245, HelpGetConfig],
  [1935116200, HelpGetCountriesList],
  [1072547679, HelpGetDeepLinkInfo],
  [1295590211, HelpGetInviteText],
  [531836966, HelpGetNearestDc],
  [-966677240, HelpGetPassportConfig],
  [-1206152236, HelpGetPremiumPromo],
  [-1063816159, HelpGetPromoData],
  [1036054804, HelpGetRecentMeUrls],
  [-748624084, HelpGetSupportName],
  [-1663104819, HelpGetSupport],
  [749019089, HelpGetTermsOfServiceUpdate],
  [59377875, HelpGetUserInfo],
  [505748629, HelpHidePromoData],
  [415997816, HelpInviteText],
  [-1000708810, HelpNoAppUpdate],
  [-1078332329, HelpPassportConfigNotModified],
  [-1600596305, HelpPassportConfig],
  [1395946908, HelpPremiumPromo],
  [-1728664459, HelpPromoDataEmpty],
  [-1942390465, HelpPromoData],
  [235081943, HelpRecentMeUrls],
  [1862465352, HelpSaveAppLog],
  [-333262899, HelpSetBotUpdatesStatus],
  [-1945767479, HelpSupportName],
  [398898678, HelpSupport],
  [-483352705, HelpTermsOfServiceUpdateEmpty],
  [686618977, HelpTermsOfServiceUpdate],
  [2013922064, HelpTermsOfService],
  [-206688531, HelpUserInfoEmpty],
  [32192344, HelpUserInfo],
  [1940093419, HighScore],
  [-1835453025, HttpWait],
  [-1052885936, ImportedContact],
  [-1043505495, InitConnection],
  [1008755359, InlineBotSwitchPM],
  [-1250781739, InlineBotWebView],
  [238759180, InlineQueryPeerTypeBotPM],
  [1664413338, InlineQueryPeerTypeBroadcast],
  [-681130742, InlineQueryPeerTypeChat],
  [1589952067, InlineQueryPeerTypeMegagroup],
  [-2093215828, InlineQueryPeerTypePM],
  [813821341, InlineQueryPeerTypeSameBotPM],
  [488313413, InputAppEvent],
  [-1457472134, InputBotAppID],
  [-1869872121, InputBotAppShortName],
  [1262639204, InputBotInlineMessageGame],
  [-1995686519, InputBotInlineMessageID],
  [-1227287081, InputBotInlineMessageID64],
  [864077702, InputBotInlineMessageMediaAuto],
  [-1494368259, InputBotInlineMessageMediaContact],
  [-1768777083, InputBotInlineMessageMediaGeo],
  [-672693723, InputBotInlineMessageMediaInvoice],
  [1098628881, InputBotInlineMessageMediaVenue],
  [1036876423, InputBotInlineMessageText],
  [-459324, InputBotInlineResultDocument],
  [1336154098, InputBotInlineResultGame],
  [-1462213465, InputBotInlineResultPhoto],
  [-2000710887, InputBotInlineResult],
  [-292807034, InputChannelEmpty],
  [1536380829, InputChannelFromMessage],
  [-212145112, InputChannel],
  [480546647, InputChatPhotoEmpty],
  [-1991004873, InputChatPhoto],
  [-1110593856, InputChatUploadedPhoto],
  [-203367885, InputChatlistDialogFilter],
  [-1736378792, InputCheckPasswordEmpty],
  [-763367294, InputCheckPasswordSRP],
  [1968737087, InputClientProxy],
  [1684014375, InputDialogPeerFolder],
  [-55902537, InputDialogPeer],
  [1928391342, InputDocumentEmpty],
  [-1160743548, InputDocumentFileLocation],
  [448771445, InputDocument],
  [-247351839, InputEncryptedChat],
  [767652808, InputEncryptedFileBigUploaded],
  [406307684, InputEncryptedFileEmpty],
  [-182231723, InputEncryptedFileLocation],
  [1690108678, InputEncryptedFileUploaded],
  [1511503333, InputEncryptedFile],
  [-95482955, InputFileBig],
  [-539317279, InputFileLocation],
  [-181407105, InputFile],
  [-70073706, InputFolderPeer],
  [53231223, InputGameID],
  [-1020139510, InputGameShortName],
  [-457104426, InputGeoPointEmpty],
  [1210199983, InputGeoPoint],
  [93890858, InputGroupCallStream],
  [-659913713, InputGroupCall],
  [-977967015, InputInvoiceMessage],
  [-1020867857, InputInvoiceSlug],
  [-802258988, InputKeyboardButtonUrlAuth],
  [-376962181, InputKeyboardButtonUserProfile],
  [-122978821, InputMediaContact],
  [-428884101, InputMediaDice],
  [-78455655, InputMediaDocumentExternal],
  [860303448, InputMediaDocument],
  [-1771768449, InputMediaEmpty],
  [-750828557, InputMediaGame],
  [-1759532989, InputMediaGeoLive],
  [-104578748, InputMediaGeoPoint],
  [-1900697899, InputMediaInvoice],
  [-440664550, InputMediaPhotoExternal],
  [-1279654347, InputMediaPhoto],
  [261416433, InputMediaPoll],
  [1530447553, InputMediaUploadedDocument],
  [505969924, InputMediaUploadedPhoto],
  [-1052959727, InputMediaVenue],
  [-1392895362, InputMessageCallbackQuery],
  [546203849, InputMessageEntityMentionName],
  [-1502174430, InputMessageID],
  [-2037963464, InputMessagePinned],
  [-1160215659, InputMessageReplyTo],
  [975236280, InputMessagesFilterChatPhotos],
  [-530392189, InputMessagesFilterContacts],
  [-1629621880, InputMessagesFilterDocument],
  [1474492012, InputMessagesFilterEmpty],
  [-419271411, InputMessagesFilterGeo],
  [-3644025, InputMessagesFilterGif],
  [928101534, InputMessagesFilterMusic],
  [-1040652646, InputMessagesFilterMyMentions],
  [-2134272152, InputMessagesFilterPhoneCalls],
  [1458172132, InputMessagesFilterPhotoVideo],
  [-1777752804, InputMessagesFilterPhotos],
  [464520273, InputMessagesFilterPinned],
  [-1253451181, InputMessagesFilterRoundVideo],
  [2054952868, InputMessagesFilterRoundVoice],
  [2129714567, InputMessagesFilterUrl],
  [-1614803355, InputMessagesFilterVideo],
  [1358283666, InputMessagesFilterVoice],
  [-1311015810, InputNotifyBroadcasts],
  [1251338318, InputNotifyChats],
  [1548122514, InputNotifyForumTopic],
  [-1195615476, InputNotifyPeer],
  [423314455, InputNotifyUsers],
  [178373535, InputPaymentCredentialsApplePay],
  [-1966921727, InputPaymentCredentialsGooglePay],
  [-1056001329, InputPaymentCredentialsSaved],
  [873977640, InputPaymentCredentials],
  [-1121318848, InputPeerChannelFromMessage],
  [666680316, InputPeerChannel],
  [900291769, InputPeerChat],
  [2134579434, InputPeerEmpty],
  [-551616469, InputPeerNotifySettings],
  [925204121, InputPeerPhotoFileLocation],
  [2107670217, InputPeerSelf],
  [-1468331492, InputPeerUserFromMessage],
  [-571955892, InputPeerUser],
  [506920429, InputPhoneCall],
  [-208488460, InputPhoneContact],
  [483901197, InputPhotoEmpty],
  [1075322878, InputPhotoFileLocation],
  [-667654413, InputPhotoLegacyFileLocation],
  [1001634122, InputPhoto],
  [-786326563, InputPrivacyKeyAddedByPhone],
  [-1107622874, InputPrivacyKeyChatInvite],
  [-1529000952, InputPrivacyKeyForwards],
  [-88417185, InputPrivacyKeyPhoneCall],
  [55761658, InputPrivacyKeyPhoneNumber],
  [-610373422, InputPrivacyKeyPhoneP2P],
  [1461304012, InputPrivacyKeyProfilePhoto],
  [1335282456, InputPrivacyKeyStatusTimestamp],
  [-1360618136, InputPrivacyKeyVoiceMessages],
  [407582158, InputPrivacyValueAllowAll],
  [-2079962673, InputPrivacyValueAllowChatParticipants],
  [218751099, InputPrivacyValueAllowContacts],
  [320652927, InputPrivacyValueAllowUsers],
  [-697604407, InputPrivacyValueDisallowAll],
  [-380694650, InputPrivacyValueDisallowChatParticipants],
  [195371015, InputPrivacyValueDisallowContacts],
  [-1877932953, InputPrivacyValueDisallowUsers],
  [-1376497949, InputReportReasonChildAbuse],
  [-1685456582, InputReportReasonCopyright],
  [-170010905, InputReportReasonFake],
  [-606798099, InputReportReasonGeoIrrelevant],
  [177124030, InputReportReasonIllegalDrugs],
  [-1041980751, InputReportReasonOther],
  [-1631091139, InputReportReasonPersonalDetails],
  [777640226, InputReportReasonPornography],
  [1490799288, InputReportReasonSpam],
  [505595789, InputReportReasonViolence],
  [-876089816, InputSecureFileLocation],
  [859091184, InputSecureFileUploaded],
  [1399317950, InputSecureFile],
  [-618540889, InputSecureValue],
  [482797855, InputSingleMedia],
  [215889721, InputStickerSetAnimatedEmojiAnimations],
  [42402760, InputStickerSetAnimatedEmoji],
  [-427863538, InputStickerSetDice],
  [701560302, InputStickerSetEmojiDefaultStatuses],
  [1153562857, InputStickerSetEmojiDefaultTopicIcons],
  [80008398, InputStickerSetEmojiGenericAnimations],
  [-4838507, InputStickerSetEmpty],
  [-1645763991, InputStickerSetID],
  [853188252, InputStickerSetItem],
  [-930399486, InputStickerSetPremiumGifts],
  [-2044933984, InputStickerSetShortName],
  [-1652231205, InputStickerSetThumb],
  [70813275, InputStickeredMediaDocument],
  [1251549527, InputStickeredMediaPhoto],
  [1634697192, InputStorePaymentGiftPremium],
  [-1502273946, InputStorePaymentPremiumSubscription],
  [700340377, InputTakeoutFileLocation],
  [-1881255857, InputThemeSettings],
  [-175567375, InputThemeSlug],
  [1012306921, InputTheme],
  [-1182234929, InputUserEmpty],
  [497305826, InputUserFromMessage],
  [-138301121, InputUserSelf],
  [-233744186, InputUser],
  [-1770371538, InputWallPaperNoFile],
  [1913199744, InputWallPaperSlug],
  [-433014407, InputWallPaper],
  [-1678949555, InputWebDocument],
  [-193992412, InputWebFileAudioAlbumThumbLocation],
  [-1625153079, InputWebFileGeoPointLocation],
  [-1036396922, InputWebFileLocation],
  [1048946971, Invoice],
  [-878758099, InvokeAfterMsg],
  [1036301552, InvokeAfterMsgs],
  [-627372787, InvokeWithLayer],
  [911373810, InvokeWithMessagesRange],
  [-1398145746, InvokeWithTakeout],
  [-1080796745, InvokeWithoutUpdates],
  [-146520221, JsonArray],
  [-952869270, JsonBool],
  [1064139624, JsonNull],
  [736157604, JsonNumber],
  [-1059185703, JsonObjectValue],
  [-1715350371, JsonObject],
  [-1222740358, JsonString],
  [-1344716869, KeyboardButtonBuy],
  [901503851, KeyboardButtonCallback],
  [1358175439, KeyboardButtonGame],
  [-59151553, KeyboardButtonRequestGeoLocation],
  [218842764, KeyboardButtonRequestPeer],
  [-1318425559, KeyboardButtonRequestPhone],
  [-1144565411, KeyboardButtonRequestPoll],
  [2002815875, KeyboardButtonRow],
  [-1598009252, KeyboardButtonSimpleWebView],
  [-1816527947, KeyboardButtonSwitchInline],
  [280464681, KeyboardButtonUrlAuth],
  [629866245, KeyboardButtonUrl],
  [814112961, KeyboardButtonUserProfile],
  [326529584, KeyboardButtonWebView],
  [-1560655744, KeyboardButton],
  [-886477832, LabeledPrice],
  [-209337866, LangPackDifference],
  [-288727837, LangPackLanguage],
  [695856818, LangPackStringDeleted],
  [1816636575, LangPackStringPluralized],
  [-892239370, LangPackString],
  [-845657435, LangpackGetDifference],
  [-219008246, LangpackGetLangPack],
  [1784243458, LangpackGetLanguage],
  [1120311183, LangpackGetLanguages],
  [-269862909, LangpackGetStrings],
  [-1361650766, MaskCoords],
  [-988359047, MessageActionBotAllowed],
  [-1781355374, MessageActionChannelCreate],
  [-365344535, MessageActionChannelMigrateFrom],
  [365886720, MessageActionChatAddUser],
  [-1119368275, MessageActionChatCreate],
  [-1780220945, MessageActionChatDeletePhoto],
  [-1539362612, MessageActionChatDeleteUser],
  [2144015272, MessageActionChatEditPhoto],
  [-1247687078, MessageActionChatEditTitle],
  [51520707, MessageActionChatJoinedByLink],
  [-339958837, MessageActionChatJoinedByRequest],
  [-519864430, MessageActionChatMigrateTo],
  [-202219658, MessageActionContactSignUp],
  [-85549226, MessageActionCustomAction],
  [-1230047312, MessageActionEmpty],
  [-1834538890, MessageActionGameScore],
  [-1730095465, MessageActionGeoProximityReached],
  [-935499028, MessageActionGiftPremium],
  [-1281329567, MessageActionGroupCallScheduled],
  [2047704898, MessageActionGroupCall],
  [-1615153660, MessageActionHistoryClear],
  [1345295095, MessageActionInviteToGroupCall],
  [-1892568281, MessageActionPaymentSentMe],
  [-1776926890, MessageActionPaymentSent],
  [-2132731265, MessageActionPhoneCall],
  [-1799538451, MessageActionPinMessage],
  [-25742243, MessageActionRequestedPeer],
  [1200788123, MessageActionScreenshotTaken],
  [455635795, MessageActionSecureValuesSentMe],
  [-648257196, MessageActionSecureValuesSent],
  [-1434950843, MessageActionSetChatTheme],
  [-1136350937, MessageActionSetChatWallPaper],
  [1007897979, MessageActionSetMessagesTTL],
  [-1065845395, MessageActionSetSameChatWallPaper],
  [1474192222, MessageActionSuggestProfilePhoto],
  [228168278, MessageActionTopicCreate],
  [-1064024032, MessageActionTopicEdit],
  [1205698681, MessageActionWebViewDataSentMe],
  [-1262252875, MessageActionWebViewDataSent],
  [-1868117372, MessageEmpty],
  [1981704948, MessageEntityBankCard],
  [-1117713463, MessageEntityBold],
  [1827637959, MessageEntityBotCommand],
  [1280209983, MessageEntityCashtag],
  [681706865, MessageEntityCode],
  [-925956616, MessageEntityCustomEmoji],
  [1692693954, MessageEntityEmail],
  [1868782349, MessageEntityHashtag],
  [-2106619040, MessageEntityItalic],
  [-595914432, MessageEntityMentionName],
  [-100378723, MessageEntityMention],
  [-1687559349, MessageEntityPhone],
  [1938967520, MessageEntityPre],
  [852137487, MessageEntitySpoiler],
  [-1090087980, MessageEntityStrike],
  [1990644519, MessageEntityTextUrl],
  [-1672577397, MessageEntityUnderline],
  [-1148011883, MessageEntityUnknown],
  [1859134776, MessageEntityUrl],
  [-1386050360, MessageExtendedMediaPreview],
  [-297296796, MessageExtendedMedia],
  [1601666510, MessageFwdHeader],
  [-1387279939, MessageInteractionCounters],
  [1882335561, MessageMediaContact],
  [1065280907, MessageMediaDice],
  [-1666158377, MessageMediaDocument],
  [1038967584, MessageMediaEmpty],
  [-38694904, MessageMediaGame],
  [-1186937242, MessageMediaGeoLive],
  [1457575028, MessageMediaGeo],
  [-156940077, MessageMediaInvoice],
  [1766936791, MessageMediaPhoto],
  [1272375192, MessageMediaPoll],
  [-1618676578, MessageMediaUnsupported],
  [784356159, MessageMediaVenue],
  [-1557277184, MessageMediaWebPage],
  [-1938180548, MessagePeerReaction],
  [182649427, MessageRange],
  [1328256121, MessageReactions],
  [-2083123262, MessageReplies],
  [-1495959709, MessageReplyHeader],
  [721967202, MessageService],
  [1017491692, MessageUserVoteInputOption],
  [-1973033641, MessageUserVoteMultiple],
  [886196148, MessageUserVote],
  [1163625789, MessageViews],
  [940666592, Message],
  [1035731989, MessagesAcceptEncryption],
  [-1322487515, MessagesAcceptUrlAuth],
  [-230206493, MessagesAddChatUser],
  [-275956116, MessagesAffectedFoundMessages],
  [-1269012015, MessagesAffectedHistory],
  [-2066640507, MessagesAffectedMessages],
  [-395967805, MessagesAllStickersNotModified],
  [-843329861, MessagesAllStickers],
  [1338747336, MessagesArchivedStickers],
  [-1626924713, MessagesAvailableReactionsNotModified],
  [1989032621, MessagesAvailableReactions],
  [-347034123, MessagesBotApp],
  [911761060, MessagesBotCallbackAnswer],
  [-534646026, MessagesBotResults],
  [-948520370, MessagesChannelMessages],
  [-1231326505, MessagesChatAdminsWithInvites],
  [-438840932, MessagesChatFull],
  [-2118733814, MessagesChatInviteImporters],
  [-1663561404, MessagesChatsSlice],
  [1694474197, MessagesChats],
  [1051570619, MessagesCheckChatInvite],
  [1573261059, MessagesCheckHistoryImportPeer],
  [1140726259, MessagesCheckHistoryImport],
  [-1571952873, MessagesCheckedHistoryImportPeer],
  [2119757468, MessagesClearAllDrafts],
  [-1644236876, MessagesClearRecentReactions],
  [-1986437075, MessagesClearRecentStickers],
  [3450904, MessagesCreateChat],
  [-1575461717, MessagesDeleteChatUser],
  [1540419152, MessagesDeleteChat],
  [-731601877, MessagesDeleteExportedChatInvite],
  [-1332768214, MessagesDeleteHistory],
  [-443640366, MessagesDeleteMessages],
  [-104078327, MessagesDeletePhoneCallHistory],
  [1452833749, MessagesDeleteRevokedExportedChatInvites],
  [1504586518, MessagesDeleteScheduledMessages],
  [-1058912715, MessagesDhConfigNotModified],
  [740433629, MessagesDhConfig],
  [-253500010, MessagesDialogsNotModified],
  [1910543603, MessagesDialogsSlice],
  [364538944, MessagesDialogs],
  [-208425312, MessagesDiscardEncryption],
  [-1506535550, MessagesDiscussionMessage],
  [-554301545, MessagesEditChatAbout],
  [-1470377534, MessagesEditChatAdmin],
  [-1517917375, MessagesEditChatDefaultBannedRights],
  [903730804, MessagesEditChatPhoto],
  [1937260541, MessagesEditChatTitle],
  [-1110823051, MessagesEditExportedChatInvite],
  [-2091549254, MessagesEditInlineBotMessage],
  [1224152952, MessagesEditMessage],
  [1874111879, MessagesEmojiGroupsNotModified],
  [-2011186869, MessagesEmojiGroups],
  [-1607670315, MessagesExportChatInvite],
  [572915951, MessagesExportedChatInviteReplaced],
  [410107472, MessagesExportedChatInvite],
  [-1111085620, MessagesExportedChatInvites],
  [-1174420133, MessagesFaveSticker],
  [-1634752813, MessagesFavedStickersNotModified],
  [750063767, MessagesFavedStickers],
  [-958657434, MessagesFeaturedStickersNotModified],
  [-1103615738, MessagesFeaturedStickers],
  [913709011, MessagesForumTopics],
  [-966673468, MessagesForwardMessages],
  [223655517, MessagesFoundStickerSetsNotModified],
  [-1963942446, MessagesFoundStickerSets],
  [958457583, MessagesGetAdminsWithInvites],
  [1782549861, MessagesGetAllDrafts],
  [-1197432408, MessagesGetAllStickers],
  [1475442322, MessagesGetArchivedStickers],
  [1998676370, MessagesGetAttachMenuBot],
  [385663691, MessagesGetAttachMenuBots],
  [-866424884, MessagesGetAttachedStickers],
  [417243308, MessagesGetAvailableReactions],
  [889046467, MessagesGetBotApp],
  [-1824339449, MessagesGetBotCallbackAnswer],
  [-553329330, MessagesGetChatInviteImporters],
  [1240027791, MessagesGetChats],
  [-468934396, MessagesGetCommonChats],
  [-643100844, MessagesGetCustomEmojiDocuments],
  [1703637384, MessagesGetDefaultHistoryTTL],
  [651135312, MessagesGetDhConfig],
  [-241247891, MessagesGetDialogFilters],
  [585256482, MessagesGetDialogUnreadMarks],
  [-1594569905, MessagesGetDialogs],
  [1147761405, MessagesGetDiscussionMessage],
  [-1309538785, MessagesGetDocumentByHash],
  [1955122779, MessagesGetEmojiGroups],
  [352892591, MessagesGetEmojiKeywordsDifference],
  [1318675378, MessagesGetEmojiKeywordsLanguages],
  [899735650, MessagesGetEmojiKeywords],
  [564480243, MessagesGetEmojiProfilePhotoGroups],
  [785209037, MessagesGetEmojiStatusGroups],
  [-67329649, MessagesGetEmojiStickers],
  [-709817306, MessagesGetEmojiURL],
  [1937010524, MessagesGetExportedChatInvite],
  [-1565154314, MessagesGetExportedChatInvites],
  [-2064119788, MessagesGetExtendedMedia],
  [82946729, MessagesGetFavedStickers],
  [248473398, MessagesGetFeaturedEmojiStickers],
  [1685588756, MessagesGetFeaturedStickers],
  [-1364194508, MessagesGetFullChat],
  [-400399203, MessagesGetGameHighScores],
  [1143203525, MessagesGetHistory],
  [1364105629, MessagesGetInlineBotResults],
  [258170395, MessagesGetInlineGameHighScores],
  [1678738104, MessagesGetMaskStickers],
  [-39416522, MessagesGetMessageEditData],
  [1176190792, MessagesGetMessageReactionsList],
  [834782287, MessagesGetMessageReadParticipants],
  [-1950707482, MessagesGetMessagesReactions],
  [1468322785, MessagesGetMessagesViews],
  [1673946374, MessagesGetMessages],
  [2127598753, MessagesGetOldFeaturedStickers],
  [1848369232, MessagesGetOnlines],
  [-462373635, MessagesGetPeerDialogs],
  [-270948702, MessagesGetPeerSettings],
  [-692498958, MessagesGetPinnedDialogs],
  [1941660731, MessagesGetPollResults],
  [-1200736242, MessagesGetPollVotes],
  [1881817312, MessagesGetRecentLocations],
  [960896434, MessagesGetRecentReactions],
  [-1649852357, MessagesGetRecentStickers],
  [584962828, MessagesGetReplies],
  [1559270965, MessagesGetSavedGifs],
  [-183077365, MessagesGetScheduledHistory],
  [-1111817116, MessagesGetScheduledMessages],
  [11435201, MessagesGetSearchCounters],
  [1240514025, MessagesGetSearchResultsCalendar],
  [1855292323, MessagesGetSearchResultsPositions],
  [486505992, MessagesGetSplitRanges],
  [-928977804, MessagesGetStickerSet],
  [-710552671, MessagesGetStickers],
  [-1566780372, MessagesGetSuggestedDialogFilters],
  [-1149164102, MessagesGetTopReactions],
  [-251140208, MessagesGetUnreadMentions],
  [841173339, MessagesGetUnreadReactions],
  [-1956073268, MessagesGetWebPagePreview],
  [852135825, MessagesGetWebPage],
  [-528091926, MessagesHideAllChatJoinRequests],
  [2145904661, MessagesHideChatJoinRequest],
  [1336717624, MessagesHidePeerSettingsBar],
  [-1707344487, MessagesHighScores],
  [1578088377, MessagesHistoryImportParsed],
  [375566091, MessagesHistoryImport],
  [1817183516, MessagesImportChatInvite],
  [-1456996667, MessagesInactiveChats],
  [873008187, MessagesInitHistoryImport],
  [-946871200, MessagesInstallStickerSet],
  [-1031349873, MessagesMarkDialogUnread],
  [649453030, MessagesMessageEditData],
  [834488621, MessagesMessageReactionsList],
  [-1228606141, MessagesMessageViews],
  [1951620897, MessagesMessagesNotModified],
  [978610270, MessagesMessagesSlice],
  [-1938715001, MessagesMessages],
  [-1568189671, MessagesMigrateChat],
  [863093588, MessagesPeerDialogs],
  [1753266509, MessagesPeerSettings],
  [2146648841, MessagesProlongWebView],
  [2132608815, MessagesRateTranscribedAudio],
  [-1334846497, MessagesReactionsNotModified],
  [-352454890, MessagesReactions],
  [-147740172, MessagesReadDiscussion],
  [2135648522, MessagesReadEncryptedHistory],
  [1527873830, MessagesReadFeaturedStickers],
  [238054714, MessagesReadHistory],
  [921026381, MessagesReadMentions],
  [916930423, MessagesReadMessageContents],
  [1420459918, MessagesReadReactions],
  [94983360, MessagesReceivedMessages],
  [1436924774, MessagesReceivedQueue],
  [186120336, MessagesRecentStickersNotModified],
  [-1999405994, MessagesRecentStickers],
  [991616823, MessagesReorderPinnedDialogs],
  [2016638777, MessagesReorderStickerSets],
  [1259113487, MessagesReportEncryptedSpam],
  [1063567478, MessagesReportReaction],
  [-820669733, MessagesReportSpam],
  [-1991005362, MessagesReport],
  [-1940243652, MessagesRequestAppWebView],
  [-162681021, MessagesRequestEncryption],
  [698084494, MessagesRequestSimpleWebView],
  [428848198, MessagesRequestUrlAuth],
  [395003915, MessagesRequestWebView],
  [-855777386, MessagesSaveDefaultSendAs],
  [-1271718337, MessagesSaveDraft],
  [846868683, MessagesSaveGif],
  [958863608, MessagesSaveRecentSticker],
  [-402498398, MessagesSavedGifsNotModified],
  [-2069878259, MessagesSavedGifs],
  [-398136321, MessagesSearchCounter],
  [739360983, MessagesSearchCustomEmoji],
  [1271290010, MessagesSearchGlobal],
  [343859772, MessagesSearchResultsCalendar],
  [1404185519, MessagesSearchResultsPositions],
  [276705696, MessagesSearchSentMedia],
  [896555914, MessagesSearchStickerSets],
  [-1593989278, MessagesSearch],
  [-29831141, MessagesSendBotRequestedPeer],
  [1431914525, MessagesSendEncryptedFile],
  [852769188, MessagesSendEncryptedService],
  [1157265941, MessagesSendEncrypted],
  [-738468661, MessagesSendInlineBotResult],
  [1967638886, MessagesSendMedia],
  [482476935, MessagesSendMessage],
  [-1225713124, MessagesSendMultiMedia],
  [-754091820, MessagesSendReaction],
  [-1120369398, MessagesSendScheduledMessages],
  [-914493408, MessagesSendScreenshotNotification],
  [283795844, MessagesSendVote],
  [-603831608, MessagesSendWebViewData],
  [172168437, MessagesSendWebViewResultMessage],
  [-1802240206, MessagesSentEncryptedFile],
  [1443858741, MessagesSentEncryptedMessage],
  [-712043766, MessagesSetBotCallbackAnswer],
  [163765653, MessagesSetBotPrecheckoutResults],
  [-436833542, MessagesSetBotShippingResults],
  [-21928079, MessagesSetChatAvailableReactions],
  [-432283329, MessagesSetChatTheme],
  [-1879389471, MessagesSetChatWallPaper],
  [-1632299963, MessagesSetDefaultHistoryTTL],
  [1330094102, MessagesSetDefaultReaction],
  [2031374829, MessagesSetEncryptedTyping],
  [-1896289088, MessagesSetGameScore],
  [-1207017500, MessagesSetHistoryTTL],
  [-1156406247, MessagesSetInlineBotResults],
  [363700068, MessagesSetInlineGameScore],
  [1486110434, MessagesSetTyping],
  [406407439, MessagesSponsoredMessagesEmpty],
  [-907141753, MessagesSponsoredMessages],
  [-421563528, MessagesStartBot],
  [-1271008444, MessagesStartHistoryImport],
  [904138920, MessagesStickerSetInstallResultArchive],
  [946083368, MessagesStickerSetInstallResultSuccess],
  [-738646805, MessagesStickerSetNotModified],
  [1846886166, MessagesStickerSet],
  [-244016606, MessagesStickersNotModified],
  [816245886, MessagesStickers],
  [1777704297, MessagesToggleBotInAttachMenu],
  [-1489903017, MessagesToggleDialogPin],
  [-1323389022, MessagesToggleNoForwards],
  [-461589127, MessagesTogglePeerTranslations],
  [-1257951254, MessagesToggleStickerSets],
  [647928393, MessagesTranscribeAudio],
  [-1821037486, MessagesTranscribedAudio],
  [870003448, MessagesTranslateResult],
  [1662529584, MessagesTranslateText],
  [-110209570, MessagesUninstallStickerSet],
  [-299714136, MessagesUnpinAllMessages],
  [450142282, MessagesUpdateDialogFilter],
  [-983318044, MessagesUpdateDialogFiltersOrder],
  [-760547348, MessagesUpdatePinnedMessage],
  [1347929239, MessagesUploadEncryptedFile],
  [713433234, MessagesUploadImportedMedia],
  [1369162417, MessagesUploadMedia],
  [136574537, MessagesVotesList],
  [1945237724, MsgContainer],
  [-530561358, MsgCopy],
  [661470918, MsgDetailedInfo],
  [-2137147681, MsgNewDetailedInfo],
  [2105940488, MsgResendReq],
  [1658238041, MsgsAck],
  [-1933520591, MsgsAllInfo],
  [81704317, MsgsStateInfo],
  [-630588590, MsgsStateReq],
  [-1910892683, NearestDc],
  [-1631450872, NewSessionCreated],
  [-1746354498, NotificationSoundDefault],
  [-2096391452, NotificationSoundLocal],
  [1863070943, NotificationSoundNone],
  [-9666487, NotificationSoundRingtone],
  [-703403793, NotifyBroadcasts],
  [-1073230141, NotifyChats],
  [577659656, NotifyForumTopic],
  [-1613493288, NotifyPeer],
  [-1261946036, NotifyUsers],
  [1450380236, Null],
  [-1443537003, PQInnerDataDc],
  [1459478408, PQInnerDataTempDc],
  [-2083955988, PQInnerData],
  [-837994576, PageBlockAnchor],
  [-2143067670, PageBlockAudio],
  [-1162877472, PageBlockAuthorDate],
  [641563686, PageBlockBlockquote],
  [-283684427, PageBlockChannel],
  [1705048653, PageBlockCollage],
  [972174080, PageBlockCover],
  [1987480557, PageBlockDetails],
  [-618614392, PageBlockDivider],
  [-229005301, PageBlockEmbedPost],
  [-1468953147, PageBlockEmbed],
  [1216809369, PageBlockFooter],
  [-1076861716, PageBlockHeader],
  [504660880, PageBlockKicker],
  [-454524911, PageBlockList],
  [-1538310410, PageBlockMap],
  [-1702174239, PageBlockOrderedList],
  [1182402406, PageBlockParagraph],
  [391759200, PageBlockPhoto],
  [-1066346178, PageBlockPreformatted],
  [1329878739, PageBlockPullquote],
  [370236054, PageBlockRelatedArticles],
  [52401552, PageBlockSlideshow],
  [-248793375, PageBlockSubheader],
  [-1879401953, PageBlockSubtitle],
  [-1085412734, PageBlockTable],
  [1890305021, PageBlockTitle],
  [324435594, PageBlockUnsupported],
  [2089805750, PageBlockVideo],
  [1869903447, PageCaption],
  [635466748, PageListItemBlocks],
  [-1188055347, PageListItemText],
  [-1730311882, PageListOrderedItemBlocks],
  [1577484359, PageListOrderedItemText],
  [-1282352120, PageRelatedArticle],
  [878078826, PageTableCell],
  [-524237339, PageTableRow],
  [-1738178803, Page],
  [982592842, PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512Iter100000SHA256ModPow],
  [-732254058, PasswordKdfAlgoUnknown],
  [-368917890, PaymentCharge],
  [-1996951013, PaymentFormMethod],
  [-1868808300, PaymentRequestedInfo],
  [-842892769, PaymentSavedCredentialsCard],
  [-2131921795, PaymentsAssignAppStoreTransaction],
  [-537046829, PaymentsAssignPlayMarketTransaction],
  [1042605427, PaymentsBankCardData],
  [-1614700874, PaymentsCanPurchasePremium],
  [-667062079, PaymentsClearSavedInfo],
  [261206117, PaymentsExportInvoice],
  [-1362048039, PaymentsExportedInvoice],
  [779736953, PaymentsGetBankCardData],
  [924093883, PaymentsGetPaymentForm],
  [611897804, PaymentsGetPaymentReceipt],
  [578650699, PaymentsGetSavedInfo],
  [-1610250415, PaymentsPaymentForm],
  [1891958275, PaymentsPaymentReceipt],
  [1314881805, PaymentsPaymentResult],
  [-666824391, PaymentsPaymentVerificationNeeded],
  [-74456004, PaymentsSavedInfo],
  [755192367, PaymentsSendPaymentForm],
  [-1228345045, PaymentsValidateRequestedInfo],
  [-784000893, PaymentsValidatedRequestedInfo],
  [-386039788, PeerBlocked],
  [-1566230754, PeerChannel],
  [918946202, PeerChat],
  [-901375139, PeerLocated],
  [-1472527322, PeerNotifySettings],
  [-118740917, PeerSelfLocated],
  [-1525149427, PeerSettings],
  [1498486562, PeerUser],
  [912311057, PhoneCallAccepted],
  [-84416311, PhoneCallDiscardReasonBusy],
  [-527056480, PhoneCallDiscardReasonDisconnect],
  [1471006352, PhoneCallDiscardReasonHangup],
  [-2048646399, PhoneCallDiscardReasonMissed],
  [1355435489, PhoneCallDiscarded],
  [1399245077, PhoneCallEmpty],
  [-58224696, PhoneCallProtocol],
  [347139340, PhoneCallRequested],
  [-987599081, PhoneCallWaiting],
  [-1770029977, PhoneCall],
  [1667228533, PhoneConnectionWebrtc],
  [-1665063993, PhoneConnection],
  [1003664544, PhoneAcceptCall],
  [-1248003721, PhoneCheckGroupCall],
  [788404002, PhoneConfirmCall],
  [1221445336, PhoneCreateGroupCall],
  [-1295269440, PhoneDiscardCall],
  [2054648117, PhoneDiscardGroupCall],
  [-1524155713, PhoneEditGroupCallParticipant],
  [480685066, PhoneEditGroupCallTitle],
  [-425040769, PhoneExportGroupCallInvite],
  [541839704, PhoneExportedGroupCallInvite],
  [1430593449, PhoneGetCallConfig],
  [-277077702, PhoneGetGroupCallJoinAs],
  [447879488, PhoneGetGroupCallStreamChannels],
  [-558650433, PhoneGetGroupCallStreamRtmpUrl],
  [68699611, PhoneGetGroupCall],
  [-984033109, PhoneGetGroupParticipants],
  [-790330702, PhoneGroupCallStreamChannels],
  [767505458, PhoneGroupCallStreamRtmpUrl],
  [-1636664659, PhoneGroupCall],
  [-193506890, PhoneGroupParticipants],
  [2067345760, PhoneInviteToGroupCall],
  [-1343921601, PhoneJoinAsPeers],
  [-873829436, PhoneJoinGroupCallPresentation],
  [-1322057861, PhoneJoinGroupCall],
  [475058500, PhoneLeaveGroupCallPresentation],
  [1342404601, PhoneLeaveGroupCall],
  [-326966976, PhonePhoneCall],
  [399855457, PhoneReceivedCall],
  [1124046573, PhoneRequestCall],
  [662363518, PhoneSaveCallDebug],
  [1092913030, PhoneSaveCallLog],
  [1465786252, PhoneSaveDefaultGroupCallJoinAs],
  [-8744061, PhoneSendSignalingData],
  [1508562471, PhoneSetCallRating],
  [1451287362, PhoneStartScheduledGroupCall],
  [-248985848, PhoneToggleGroupCallRecord],
  [1958458429, PhoneToggleGroupCallSettings],
  [563885286, PhoneToggleGroupCallStartSubscription],
  [35527382, PhotoCachedSize],
  [590459437, PhotoEmpty],
  [-668906175, PhotoPathSize],
  [236446268, PhotoSizeEmpty],
  [-96535659, PhotoSizeProgressive],
  [1976012384, PhotoSize],
  [-525288402, PhotoStrippedSize],
  [-82216347, Photo],
  [-2016444625, PhotosDeletePhotos],
  [-1848823128, PhotosGetUserPhotos],
  [539045032, PhotosPhoto],
  [352657236, PhotosPhotosSlice],
  [-1916114267, PhotosPhotos],
  [166207545, PhotosUpdateProfilePhoto],
  [-515093903, PhotosUploadContactProfilePhoto],
  [59286453, PhotosUploadProfilePhoto],
  [-213746804, PingDelayDisconnect],
  [2059302892, Ping],
  [997055186, PollAnswerVoters],
  [1823064809, PollAnswer],
  [-591909213, PollResults],
  [-2032041631, Poll],
  [880243653, Pong],
  [1558266229, PopularContact],
  [512535275, PostAddress],
  [1958953753, PremiumGiftOption],
  [1596792306, PremiumSubscriptionOption],
  [1124062251, PrivacyKeyAddedByPhone],
  [1343122938, PrivacyKeyChatInvite],
  [1777096355, PrivacyKeyForwards],
  [1030105979, PrivacyKeyPhoneCall],
  [-778378131, PrivacyKeyPhoneNumber],
  [961092808, PrivacyKeyPhoneP2P],
  [-1777000467, PrivacyKeyProfilePhoto],
  [-1137792208, PrivacyKeyStatusTimestamp],
  [110621716, PrivacyKeyVoiceMessages],
  [1698855810, PrivacyValueAllowAll],
  [1796427406, PrivacyValueAllowChatParticipants],
  [-123988, PrivacyValueAllowContacts],
  [-1198497870, PrivacyValueAllowUsers],
  [-1955338397, PrivacyValueDisallowAll],
  [1103656293, PrivacyValueDisallowChatParticipants],
  [-125240806, PrivacyValueDisallowContacts],
  [-463335103, PrivacyValueDisallowUsers],
  [-1546531968, ReactionCount],
  [-1992950669, ReactionCustomEmoji],
  [455247544, ReactionEmoji],
  [2046153753, ReactionEmpty],
  [1246753138, ReadParticipantDate],
  [-1551583367, ReceivedNotifyMessage],
  [-347535331, RecentMeUrlChatInvite],
  [-1294306862, RecentMeUrlChat],
  [-1140172836, RecentMeUrlStickerSet],
  [1189204285, RecentMeUrlUnknown],
  [-1188296222, RecentMeUrlUser],
  [1218642516, ReplyInlineMarkup],
  [-2035021048, ReplyKeyboardForceReply],
  [-1606526075, ReplyKeyboardHide],
  [-2049074735, ReplyKeyboardMarkup],
  [-686627650, ReqDHParams],
  [-1099002127, ReqPqMulti],
  [865857388, RequestPeerTypeBroadcast],
  [-906990053, RequestPeerTypeChat],
  [1597737472, RequestPeerTypeUser],
  [85337187, ResPQ],
  [-797791052, RestrictionReason],
  [-847714938, RpcAnswerDroppedRunning],
  [-1539647305, RpcAnswerDropped],
  [1579864942, RpcAnswerUnknown],
  [1491380032, RpcDropAnswer],
  [558156313, RpcError],
  [-212046591, RpcResult],
  [289586518, SavedPhoneContact],
  [2137295719, SearchResultPosition],
  [-911191137, SearchResultsCalendarPeriod],
  [871426631, SecureCredentialsEncrypted],
  [-1964327229, SecureData],
  [1679398724, SecureFileEmpty],
  [2097791614, SecureFile],
  [-1141711456, SecurePasswordKdfAlgoPBKDF2HMACSHA512Iter100000],
  [-2042159726, SecurePasswordKdfAlgoSHA512],
  [4883767, SecurePasswordKdfAlgoUnknown],
  [569137759, SecurePlainEmail],
  [2103482845, SecurePlainPhone],
  [41187252, SecureRequiredTypeOneOf],
  [-2103600678, SecureRequiredType],
  [354925740, SecureSecretSettings],
  [-391902247, SecureValueErrorData],
  [2054162547, SecureValueErrorFile],
  [1717706985, SecureValueErrorFiles],
  [12467706, SecureValueErrorFrontSide],
  [-2037765467, SecureValueErrorReverseSide],
  [-449327402, SecureValueErrorSelfie],
  [-1592506512, SecureValueErrorTranslationFile],
  [878931416, SecureValueErrorTranslationFiles],
  [-2036501105, SecureValueError],
  [-316748368, SecureValueHash],
  [-874308058, SecureValueTypeAddress],
  [-1995211763, SecureValueTypeBankStatement],
  [115615172, SecureValueTypeDriverLicense],
  [-1908627474, SecureValueTypeEmail],
  [-1596951477, SecureValueTypeIdentityCard],
  [-1717268701, SecureValueTypeInternalPassport],
  [-1713143702, SecureValueTypePassportRegistration],
  [1034709504, SecureValueTypePassport],
  [-1658158621, SecureValueTypePersonalDetails],
  [-1289704741, SecureValueTypePhone],
  [-1954007928, SecureValueTypeRentalAgreement],
  [-368907213, SecureValueTypeTemporaryRegistration],
  [-63531698, SecureValueTypeUtilityBill],
  [411017418, SecureValue],
  [-1206095820, SendAsPeer],
  [-44119819, SendMessageCancelAction],
  [1653390447, SendMessageChooseContactAction],
  [-1336228175, SendMessageChooseStickerAction],
  [-1234857938, SendMessageEmojiInteractionSeen],
  [630664139, SendMessageEmojiInteraction],
  [-580219064, SendMessageGamePlayAction],
  [393186209, SendMessageGeoLocationAction],
  [-606432698, SendMessageHistoryImportAction],
  [-718310409, SendMessageRecordAudioAction],
  [-1997373508, SendMessageRecordRoundAction],
  [-1584933265, SendMessageRecordVideoAction],
  [381645902, SendMessageTypingAction],
  [-212740181, SendMessageUploadAudioAction],
  [-1441998364, SendMessageUploadDocumentAction],
  [-774682074, SendMessageUploadPhotoAction],
  [608050278, SendMessageUploadRoundAction],
  [-378127636, SendMessageUploadVideoAction],
  [-1249309254, ServerDHInnerData],
  [-790100132, ServerDHParamsOk],
  [-184262881, SetClientDHParams],
  [-1239335713, ShippingOption],
  [-2010155333, SimpleWebViewResultUrl],
  [-651419003, SpeakingInGroupCallAction],
  [-64636888, SponsoredMessage],
  [-884757282, StatsAbsValueAndPrev],
  [-1237848657, StatsDateRangeDays],
  [1244130093, StatsGraphAsync],
  [-1092839390, StatsGraphError],
  [-1901828938, StatsGraph],
  [-682079097, StatsGroupTopAdmin],
  [1398765469, StatsGroupTopInviter],
  [-1660637285, StatsGroupTopPoster],
  [-875679776, StatsPercentValue],
  [1202287072, StatsURL],
  [-1107852396, StatsBroadcastStats],
  [-1421720550, StatsGetBroadcastStats],
  [-589330937, StatsGetMegagroupStats],
  [1445996571, StatsGetMessagePublicForwards],
  [-1226791947, StatsGetMessageStats],
  [1646092192, StatsLoadAsyncGraph],
  [-276825834, StatsMegagroupStats],
  [-1986399595, StatsMessageStats],
  [-50416996, StickerKeyword],
  [313694676, StickerPack],
  [1678812626, StickerSetCovered],
  [1087454222, StickerSetFullCovered],
  [872932635, StickerSetMultiCovered],
  [2008112412, StickerSetNoCovered],
  [768691932, StickerSet],
  [-2041315650, StickersAddStickerToSet],
  [-4795190, StickersChangeStickerPosition],
  [-179077444, StickersChangeSticker],
  [676017721, StickersCheckShortName],
  [-1876841625, StickersCreateStickerSet],
  [-2022685804, StickersDeleteStickerSet],
  [-143257775, StickersRemoveStickerFromSet],
  [306912256, StickersRenameStickerSet],
  [-1486204014, StickersSetStickerSetThumb],
  [1303364867, StickersSuggestShortName],
  [-2046910401, StickersSuggestedShortName],
  [-891180321, StorageFileGif],
  [8322574, StorageFileJpeg],
  [1258941372, StorageFileMov],
  [1384777335, StorageFileMp3],
  [-1278304028, StorageFileMp4],
  [1086091090, StorageFilePartial],
  [-1373745011, StorageFilePdf],
  [172975040, StorageFilePng],
  [-1432995067, StorageFileUnknown],
  [276907596, StorageFileWebp],
  [894777186, TextAnchor],
  [1730456516, TextBold],
  [2120376535, TextConcat],
  [-564523562, TextEmail],
  [-599948721, TextEmpty],
  [1816074681, TextFixed],
  [136105807, TextImage],
  [-653089380, TextItalic],
  [55281185, TextMarked],
  [483104362, TextPhone],
  [1950782688, TextPlain],
  [-1678197867, TextStrike],
  [-311786236, TextSubscript],
  [-939827711, TextSuperscript],
  [-1054465340, TextUnderline],
  [1009288385, TextUrl],
  [1964978502, TextWithEntities],
  [-94849324, ThemeSettings],
  [-1609668650, Theme],
  [344356834, TopPeerCategoryBotsInline],
  [-1419371685, TopPeerCategoryBotsPM],
  [371037736, TopPeerCategoryChannels],
  [104314861, TopPeerCategoryCorrespondents],
  [-68239120, TopPeerCategoryForwardChats],
  [-1472172887, TopPeerCategoryForwardUsers],
  [-1122524854, TopPeerCategoryGroups],
  [-75283823, TopPeerCategoryPeers],
  [511092620, TopPeerCategoryPhoneCalls],
  [-305282981, TopPeer],
  [1072550713, True],
  [397910539, UpdateAttachMenuBots],
  [-335171433, UpdateAutoSaveSettings],
  [-1177566067, UpdateBotCallbackQuery],
  [299870598, UpdateBotChatInviteRequester],
  [1299263278, UpdateBotCommands],
  [1232025500, UpdateBotInlineQuery],
  [317794823, UpdateBotInlineSend],
  [347625491, UpdateBotMenuButton],
  [-1934976362, UpdateBotPrecheckoutQuery],
  [-1246823043, UpdateBotShippingQuery],
  [-997782967, UpdateBotStopped],
  [-1684914010, UpdateBotWebhookJSONQuery],
  [-2095595325, UpdateBotWebhookJSON],
  [-1304443240, UpdateChannelAvailableMessages],
  [-761649164, UpdateChannelMessageForwards],
  [-232346616, UpdateChannelMessageViews],
  [-1738720581, UpdateChannelParticipant],
  [422509539, UpdateChannelPinnedTopic],
  [-31881726, UpdateChannelPinnedTopics],
  [-366410403, UpdateChannelReadMessagesContents],
  [277713951, UpdateChannelTooLong],
  [-1937192669, UpdateChannelUserTyping],
  [791390623, UpdateChannelWebPage],
  [1666927625, UpdateChannel],
  [1421875280, UpdateChatDefaultBannedRights],
  [1037718609, UpdateChatParticipantAdd],
  [-674602590, UpdateChatParticipantAdmin],
  [-483443337, UpdateChatParticipantDelete],
  [-796432838, UpdateChatParticipant],
  [125178264, UpdateChatParticipants],
  [-2092401936, UpdateChatUserTyping],
  [-124097970, UpdateChat],
  [-1574314746, UpdateConfig],
  [1887741886, UpdateContactsReset],
  [-1906403213, UpdateDcOptions],
  [-1020437742, UpdateDeleteChannelMessages],
  [-1576161051, UpdateDeleteMessages],
  [-1870238482, UpdateDeleteScheduledMessages],
  [-1512627963, UpdateDialogFilterOrder],
  [654302845, UpdateDialogFilter],
  [889491791, UpdateDialogFilters],
  [1852826908, UpdateDialogPinned],
  [-513517117, UpdateDialogUnreadMark],
  [457829485, UpdateDraftMessage],
  [457133559, UpdateEditChannelMessage],
  [-469536605, UpdateEditMessage],
  [386986326, UpdateEncryptedChatTyping],
  [956179895, UpdateEncryptedMessagesRead],
  [-1264392051, UpdateEncryption],
  [-451831443, UpdateFavedStickers],
  [422972864, UpdateFolderPeers],
  [-2027964103, UpdateGeoLiveViewed],
  [192428418, UpdateGroupCallConnection],
  [-219423922, UpdateGroupCallParticipants],
  [347227392, UpdateGroupCall],
  [-856651050, UpdateGroupInvitePrivacyForbidden],
  [1763610706, UpdateInlineBotCallbackQuery],
  [1180041828, UpdateLangPackTooLong],
  [1442983757, UpdateLangPack],
  [1448076945, UpdateLoginToken],
  [1517529484, UpdateMessageExtendedMedia],
  [1318109142, UpdateMessageID],
  [274961865, UpdateMessagePollVote],
  [-1398708869, UpdateMessagePoll],
  [1578843320, UpdateMessageReactions],
  [-2030252155, UpdateMoveStickerSetToTop],
  [1656358105, UpdateNewChannelMessage],
  [314359194, UpdateNewEncryptedMessage],
  [522914557, UpdateNewMessage],
  [967122427, UpdateNewScheduledMessage],
  [1753886890, UpdateNewStickerSet],
  [-1094555409, UpdateNotifySettings],
  [610945826, UpdatePeerBlocked],
  [-1147422299, UpdatePeerHistoryTTL],
  [-1263546448, UpdatePeerLocated],
  [1786671974, UpdatePeerSettings],
  [1885586395, UpdatePendingJoinRequests],
  [643940105, UpdatePhoneCallSignalingData],
  [-1425052898, UpdatePhoneCall],
  [1538885128, UpdatePinnedChannelMessages],
  [-99664734, UpdatePinnedDialogs],
  [-309990731, UpdatePinnedMessages],
  [-298113238, UpdatePrivacy],
  [861169551, UpdatePtsChanged],
  [-693004986, UpdateReadChannelDiscussionInbox],
  [1767677564, UpdateReadChannelDiscussionOutbox],
  [-1842450928, UpdateReadChannelInbox],
  [-1218471511, UpdateReadChannelOutbox],
  [-78886548, UpdateReadFeaturedEmojiStickers],
  [1461528386, UpdateReadFeaturedStickers],
  [-1667805217, UpdateReadHistoryInbox],
  [791617983, UpdateReadHistoryOutbox],
  [1757493555, UpdateReadMessagesContents],
  [821314523, UpdateRecentEmojiStatuses],
  [1870160884, UpdateRecentReactions],
  [-1706939360, UpdateRecentStickers],
  [-1821035490, UpdateSavedGifs],
  [1960361625, UpdateSavedRingtones],
  [-337352679, UpdateServiceNotification],
  [1299050149, UpdateShortChatMessage],
  [826001400, UpdateShortMessage],
  [-1877614335, UpdateShortSentMessage],
  [2027216577, UpdateShort],
  [196268545, UpdateStickerSetsOrder],
  [834816008, UpdateStickerSets],
  [-2112423005, UpdateTheme],
  [8703322, UpdateTranscribedAudio],
  [674706841, UpdateUserEmojiStatus],
  [-1484486364, UpdateUserName],
  [88680979, UpdateUserPhone],
  [-440534818, UpdateUserStatus],
  [-1071741569, UpdateUserTyping],
  [542282808, UpdateUser],
  [2139689491, UpdateWebPage],
  [361936797, UpdateWebViewResultSent],
  [1918567619, UpdatesCombined],
  [-484987010, UpdatesTooLong],
  [1041346555, UpdatesChannelDifferenceEmpty],
  [-1531132162, UpdatesChannelDifferenceTooLong],
  [543450958, UpdatesChannelDifference],
  [1567990072, UpdatesDifferenceEmpty],
  [-1459938943, UpdatesDifferenceSlice],
  [1258196845, UpdatesDifferenceTooLong],
  [16030880, UpdatesDifference],
  [51854712, UpdatesGetChannelDifference],
  [630429265, UpdatesGetDifference],
  [-304838614, UpdatesGetState],
  [-1519637954, UpdatesState],
  [1957577280, Updates],
  [-290921362, UploadCdnFileReuploadNeeded],
  [-1449145777, UploadCdnFile],
  [-242427324, UploadFileCdnRedirect],
  [157948117, UploadFile],
  [-1847836879, UploadGetCdnFileHashes],
  [962554330, UploadGetCdnFile],
  [-1856595926, UploadGetFileHashes],
  [-1101843010, UploadGetFile],
  [619086221, UploadGetWebFile],
  [-1691921240, UploadReuploadCdnFile],
  [-562337987, UploadSaveBigFilePart],
  [-1291540959, UploadSaveFilePart],
  [568808380, UploadWebFile],
  [-1886646706, UrlAuthResultAccepted],
  [-1445536993, UrlAuthResultDefault],
  [-1831650802, UrlAuthResultRequest],
  [-742634630, UserEmpty],
  [-1813324973, UserFull],
  [1326562017, UserProfilePhotoEmpty],
  [-2100168954, UserProfilePhoto],
  [164646985, UserStatusEmpty],
  [2011940674, UserStatusLastMonth],
  [129960444, UserStatusLastWeek],
  [9203775, UserStatusOffline],
  [-306628279, UserStatusOnline],
  [-496024847, UserStatusRecently],
  [-1885878744, User],
  [-1274595769, Username],
  [-1240508136, UsersGetFullUser],
  [227648840, UsersGetUsers],
  [-1865902923, UsersSetSecureValueErrors],
  [997004590, UsersUserFull],
  [481674261, Vector],
  [-128171716, VideoSizeEmojiMarkup],
  [228623102, VideoSizeStickerMarkup],
  [-567037804, VideoSize],
  [-528465642, WallPaperNoFile],
  [499236004, WallPaperSettings],
  [-1539849235, WallPaper],
  [-1493633966, WebAuthorization],
  [-104284986, WebDocumentNoProxy],
  [475467473, WebDocument],
  [1421174295, WebPageAttributeTheme],
  [-350980120, WebPageEmpty],
  [1930545681, WebPageNotModified],
  [-981018084, WebPagePending],
  [-392411726, WebPage],
  [211046684, WebViewMessageSent],
  [202659196, WebViewResultUrl],
])
