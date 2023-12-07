'use strict'
;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [3779],
  {
    18163: (e, t, n) => {
      n.r(t),
        n.d(t, {
          AboutAdsModal: () => ia,
          ArchivedChats: () => ko,
          AttachBotInstallModal: () => At,
          AttachBotRecipientPicker: () => st,
          AttachmentModal: () => Br,
          BotCommandMenu: () => cl,
          BotCommandTooltip: () => ll,
          BotTrustModal: () => Tt,
          CalendarModal: () => bt,
          ChatFolderModal: () => wo,
          ContactList: () => go,
          ContextMenuContainer: () => Yo,
          CreateTopic: () => mc,
          CustomEmojiSetsModal: () => er,
          CustomEmojiTooltip: () => ul,
          CustomSendMenu: () => hl,
          DeleteFolderDialog: () => Rt,
          DeleteMessageModal: () => q,
          Dialogs: () => rt,
          DraftRecipientPicker: () => at,
          DropArea: () => Pl.Z,
          EditTopic: () => hc,
          EmojiInteractionAnimation: () => va,
          EmojiTooltip: () => pl,
          ForwardRecipientPicker: () => nt,
          GifSearch: () => Rl,
          GiftPremiumModal: () => xn,
          HeaderMenuContainer: () => ar,
          HistoryCalendar: () => ft,
          InlineBotTooltip: () => Sl,
          LeftSearch: () => ns,
          Management: () => qc,
          MediaViewer: () => _e,
          MentionTooltip: () => fr,
          MessageLanguageModal: () => ga,
          MessageSelectToolbar: () => ma,
          MessageStatistics: () => Kl,
          MobileSearch: () => or,
          NewChat: () => bo,
          NewChatStep1: () => po,
          NewChatStep2: () => Eo,
          NewContactModal: () => yt,
          Notifications: () => ct,
          PaymentModal: () => Sd,
          PinMessageModal: () => oa,
          PollModal: () => Dr,
          PollResults: () => Ql,
          PremiumLimitReachedModal: () => $n,
          PremiumMainModal: () => Rn,
          ReactorListModal: () => Za,
          ReceiptModal: () => wd,
          RightSearch: () => wl,
          SafeLinkModal: () => ut,
          SeenByModal: () => ua,
          SendAsMenu: () => kl,
          Settings: () => vo,
          SponsoredMessageContextMenuContainer: () => Ko,
          Statistics: () => zl,
          StatusPickerMenu: () => aa,
          StickerSearch: () => Al,
          StickerSetModal: () => Wo,
          StickerTooltip: () => dl,
          SymbolMenu: () => ol,
          TextFormatter: () => Zl.Z,
          UnpinAllMessagesModal: () => ra,
          UrlAuthModal: () => Zt,
          WebAppModal: () => Mt,
        })
      var a = n(60748),
        s = n(91713),
        i = n(33555),
        o = n(56112),
        r = n(11192),
        l = n(10396),
        c = n(23989),
        d = n(863),
        m = n(83716),
        u = n(74399),
        h = n(98069),
        P = n(43858),
        Z = n(3858),
        v = n(55254)
      function g(e, t) {
        const n = document.createElement('div')
        n.classList.add('ghost')
        const a = new Image()
        if (
          ((a.draggable = !1),
          (a.oncontextmenu = Z.Z),
          'string' == typeof e
            ? (a.src = e)
            : e instanceof HTMLVideoElement
            ? (a.src = e.poster)
            : (a.src = e.src),
          n.appendChild(a),
          t === s.bZ.ProfileAvatar || t === s.bZ.SettingsAvatar)
        ) {
          n.classList.add('ProfileInfo'), t === s.bZ.SettingsAvatar && n.classList.add('self')
          const e = document.querySelector(
            t === s.bZ.ProfileAvatar
              ? '#RightColumn .ProfileInfo .info'
              : '#Settings .ProfileInfo .info'
          )
          e && n.appendChild(e.cloneNode(!0))
        }
        return n
      }
      function p(e, t) {
        const n = document.querySelector('.Transition__slide--active > .MessageList')
        let a = e.offsetTop + t.closest('.content-inner, .WebPage').offsetTop
        return (
          e.id.includes('album-media-') &&
            (a += e.parentElement.offsetTop + e.closest('.Message').offsetTop),
          a > n.scrollTop && a + t.offsetHeight < n.scrollTop + n.offsetHeight
        )
      }
      function E(e, t) {
        Object.assign(e.style, t)
      }
      function C(e, t) {
        let n, a
        switch (e) {
          case s.bZ.Album:
          case s.bZ.ScheduledAlbum:
            ;(n = `.Transition__slide--active > .MessageList #album-media-${(0, o.d0)(t.id)}`),
              (a = '.full-media')
            break
          case s.bZ.SharedMedia:
            ;(n = `#shared-media${(0, o.d0)(t.id)}`), (a = 'img')
            break
          case s.bZ.SearchResult:
            ;(n = `#search-media${(0, o.d0)(t.id)}`), (a = 'img')
            break
          case s.bZ.MiddleHeaderAvatar:
            ;(n = '.MiddleHeader .Transition__slide--active .ChatInfo .Avatar'),
              (a = '.avatar-media')
            break
          case s.bZ.SettingsAvatar:
            ;(n = '#Settings .ProfileInfo .Transition__slide--active .ProfilePhoto'),
              (a = '.avatar-media')
            break
          case s.bZ.ProfileAvatar:
            ;(n = '#RightColumn .ProfileInfo .Transition__slide--active .ProfilePhoto'),
              (a = '.avatar-media')
            break
          case s.bZ.SuggestedAvatar:
            ;(n = `.Transition__slide--active > .MessageList #${(0, o.d0)(t.id)}`),
              (a = '.Avatar img')
            break
          case s.bZ.ScheduledInline:
          case s.bZ.Inline:
          default:
            ;(n = `.Transition__slide--active > .MessageList #${(0, o.d0)(t.id)}`),
              (a = `${m.be_} .full-media, ${m.be_} .thumbnail`)
        }
        const i = document.querySelector(n),
          r = i && i.querySelectorAll(a)
        return { container: i, mediaEl: r?.[0] }
      }
      function b(e, t) {
        switch (t) {
          case s.bZ.Album:
          case s.bZ.ScheduledAlbum:
          case s.bZ.Inline:
          case s.bZ.ScheduledInline:
            e.classList.add('rounded-corners')
            break
          case s.bZ.SharedMedia:
          case s.bZ.SettingsAvatar:
          case s.bZ.ProfileAvatar:
          case s.bZ.SearchResult:
            e.firstChild.style.objectFit = 'cover'
            break
          case s.bZ.MiddleHeaderAvatar:
          case s.bZ.SuggestedAvatar:
            e.classList.add('circle'),
              t === s.bZ.SuggestedAvatar && e.classList.add('transition-circle')
        }
      }
      var f = n(996),
        I = n(60706),
        y = n(65326),
        S = n(18674),
        k = n(74753)
      function N(e) {
        if (e.webkitSupportsPresentationMode && 'function' == typeof e.webkitSetPresentationMode)
          return e.webkitSetPresentationMode.bind(e)
      }
      function w() {
        if (document.pictureInPictureElement)
          try {
            document.exitPictureInPicture()
          } catch (e) {
            m.eMD && console.log('[MV] PictureInPicture Error', e)
          }
      }
      var M = n(59107),
        T = n(87204),
        A = n(6137),
        R = n(6202),
        L = n(92566),
        F = n(96264),
        x = n(34446),
        B = n(71394)
      const D = new Map()
      const O = (e) => {
        let { message: t, mediaId: n = 0, avatarOwner: i, origin: r, delay: l } = e
        const c = t ? (0, o.O$)(t) : void 0,
          d = t ? (0, o.g8)(t) : void 0,
          m = t ? (0, o.b7)(t) : void 0,
          h = t ? (0, o.F$)(t) : void 0,
          P = t ? (0, o.Cg)(t) : void 0,
          Z = !!t && (0, o.rl)(t),
          v = !!t && (0, o.hC)(t),
          g = t ? (0, o.c0)(t) : void 0,
          p = i?.photos?.[n],
          E = Boolean(p?.isVideo || d?.isVideo),
          C = Boolean(m || P || v),
          b = Boolean(!C && (c || h || Z || d)),
          { isGif: f } = m || P || {},
          I = r === s.bZ.SharedMedia,
          S = r === s.bZ.SearchResult,
          k = (0, a.Ye)(
            () => (e) =>
              i
                ? p
                  ? p.isVideo && e
                    ? (0, o.Dk)(p)
                    : 0 === n
                    ? (0, o.RT)(i, e ? 'big' : 'normal')
                    : `photo${p.id}?size=c`
                  : (0, o.RT)(i, e ? 'big' : 'normal')
                : d && E && e
                ? `videoAvatar${d.id}?size=u`
                : t && (0, o.Ti)(t, e ? 'full' : 'preview'),
            [i, d, E, t, p, n]
          ),
          N = (0, R.Z)(
            t && (I || S || Z || v) && (0, o.Ti)(t, 'pictogram'),
            void 0,
            A.IU.BlobUrl,
            void 0,
            l
          ),
          w = k(),
          M = (0, R.Z)(w, void 0, A.IU.BlobUrl, void 0, l),
          { mediaData: T, loadProgress: O } = (0, L.Z)(
            k(!0),
            void 0,
            t && (0, o.kG)(t, 'full'),
            void 0,
            l
          ),
          U = c || m ? (c || m).blobUrl : void 0
        let _ = (!C && (U || T)) || M || N
        const $ = (function (e) {
          const t = (0, a.sO)()
          let n = !1
          ;(0, x.Z)(() => {
            if (((n = !0), (t.current = void 0), !e)) return
            const a = new Image()
            if (((a.src = e), !a.width)) return
            const s = (0, B.ao)(a)
            ;(0, F.Z)(s.getContext('2d'), 0, 0, s.width, s.height, 2, 2),
              (t.current = s.toDataURL())
          }, [e])
          const s = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = arguments.length > 2 ? arguments[2] : void 0
            const s = (0, a.sO)(e ? D.get(e) : void 0),
              i = (0, a.sO)(),
              o = (0, y.Z)()
            return (
              i.current && t && (clearTimeout(i.current), (i.current = void 0)),
              (0, a.d4)(() => {
                if (!e || s.current || t) return
                const a = new Image()
                ;(a.onload = () => {
                  const t = (0, B.ao)(a)
                  ;(0, F.Z)(t.getContext('2d'), 0, 0, t.width, t.height, 2, 2)
                  const n = t.toDataURL()
                  ;(s.current = n), o(), D.size >= 1e3 && D.clear(), D.set(e, n)
                }),
                  n
                    ? (i.current = window.setTimeout(() => {
                        a.src = e
                      }, n))
                    : (a.src = e)
              }, [e, n, o, t]),
              s.current
            )
          })(e || void 0, Boolean(t.current))
          return t.current || (!n && s) || e || void 0
        })(!_ && t && (0, o.DH)(t))
        _ || r === s.bZ.SearchResult || (_ = $), E && M && (_ = M)
        const j = U || T || (C ? void 0 : M || N || _),
          G = t ? (0, o.ep)(t) : i ? `avatar${i.id}.${i?.hasVideoAvatar ? 'mp4' : 'jpg'}` : void 0
        let V
        return (
          t
            ? Z || v
              ? (V = (0, o.aE)(t).mediaSize)
              : c || h || d
              ? (V = (0, o.bV)(c || h || d))
              : (m || P) && (V = (0, o.jC)(m || P))
            : (V = E ? u.Fp : u.vY),
          {
            getMediaHash: k,
            photo: c,
            video: m,
            webPagePhoto: h,
            actionPhoto: d,
            webPageVideo: P,
            isVideo: C,
            isPhoto: b,
            isGif: f,
            isDocumentPhoto: Z,
            isDocumentVideo: v,
            fileName: G,
            bestImageData: _,
            bestData: j,
            dimensions: V,
            isFromSharedMedia: I,
            avatarPhoto: p,
            isVideoAvatar: E,
            loadProgress: O,
            videoSize: g,
          }
        )
      }
      var U = n(42797),
        _ = n(66534),
        $ = n(231),
        j = n(40126),
        G = n(2255),
        V = n(53106),
        z = n(58964),
        H = n(39196),
        X = n(32340),
        J = n(13103)
      const q = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { message: n, isSchedule: a } = t
            const { threadId: s } = (0, r.Bt)(e) || {},
              { canDeleteForAll: i } = (s && (0, r._k)(e, n, s)) || {},
              l = (0, r.Z1)(e, n.chatId)
            return {
              canDeleteForAll: !a && i,
              contactName: l && (0, o.YC)(l.id) ? (0, o.Vl)((0, r.dy)(e, (0, o.zX)(l))) : void 0,
              willDeleteForCurrentUserOnly: l && (0, o.G9)(l) && !i,
              willDeleteForAll: l && (0, o.ZV)(l),
            }
          })((e) => {
            let {
              isOpen: t,
              isSchedule: n,
              message: s,
              album: o,
              canDeleteForAll: r,
              contactName: l,
              willDeleteForCurrentUserOnly: c,
              willDeleteForAll: d,
              onConfirm: m,
              onClose: u,
            } = e
            const { deleteMessages: h, deleteScheduledMessages: P } = (0, i.Sv)(),
              Z = (0, a.I4)(() => {
                m?.()
                const e = o?.messages
                  ? o.messages.map((e) => {
                      let { id: t } = e
                      return t
                    })
                  : [s.id]
                h({ messageIds: e, shouldDeleteForAll: !0 }), u()
              }, [m, o, s.id, h, u]),
              v = (0, a.I4)(() => {
                m?.()
                const e = o?.messages
                  ? o.messages.map((e) => {
                      let { id: t } = e
                      return t
                    })
                  : [s.id]
                n ? P({ messageIds: e }) : h({ messageIds: e, shouldDeleteForAll: !1 }), u()
              }, [m, o, s.id, n, u, P, h]),
              g = (0, M.Z)()
            return a.ZP.createElement(
              J.Z,
              {
                isOpen: t,
                onClose: u,
                onEnter: t && !r ? v : void 0,
                className: 'delete',
                title: g('DeleteSingleMessagesTitle'),
              },
              a.ZP.createElement('p', null, g('AreYouSureDeleteSingleMessage')),
              c && a.ZP.createElement('p', null, g('lng_delete_for_me_chat_hint', 1, 'i')),
              d && a.ZP.createElement('p', null, g('lng_delete_for_everyone_hint', 1, 'i')),
              a.ZP.createElement(
                'div',
                { className: r ? 'dialog-buttons-column' : 'dialog-buttons' },
                r &&
                  a.ZP.createElement(
                    $.Z,
                    { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: Z },
                    l && (0, X.Z)(g('Conversation.DeleteMessagesFor', l)),
                    !l && g('Conversation.DeleteMessagesForEveryone')
                  ),
                a.ZP.createElement(
                  $.Z,
                  { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: v },
                  g(r ? 'ChatList.DeleteForCurrentUser' : 'Delete')
                ),
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: u },
                  g('Cancel')
                )
              )
            )
          })
        ),
        Y = (0, a.X$)((e) => {
          let { isOpen: t, photo: n, profileId: s, onClose: r, onConfirm: l } = e
          const { deleteProfilePhoto: c, deleteChatPhoto: d } = (0, i.Sv)(),
            m = (0, a.I4)(() => {
              l?.(), (0, o.YC)(s) ? c({ photo: n }) : d({ photo: n, chatId: s }), r()
            }, [l, s, r, c, n, d]),
            u = (0, M.Z)()
          return a.ZP.createElement(
            J.Z,
            {
              isOpen: t,
              onClose: r,
              onEnter: m,
              className: 'delete dialog-buttons-column',
              title: u('AreYouSure'),
            },
            a.ZP.createElement(
              'div',
              { className: 'dialog-buttons mt-2' },
              a.ZP.createElement(
                $.Z,
                { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: m },
                u('Preview.DeletePhoto')
              ),
              a.ZP.createElement(
                $.Z,
                { className: 'confirm-dialog-button', isText: !0, onClick: r },
                u('Cancel')
              )
            )
          )
        }),
        K = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { message: n, canUpdateMedia: a, avatarPhoto: s, avatarOwner: i } = t
            const o = (0, r.Bt)(e),
              { threadId: l } = (0, r.Bt)(e) || {},
              c = !!n && (0, r.te)(e, n),
              d = (0, r.EV)(e, n),
              m = n && (0, r.Am)(e, n?.chatId),
              { canDelete: u } = (l && n && (0, r._k)(e, n, l)) || {},
              h = s && s.id === i?.avatarHash,
              P = u || (a && !!s),
              Z = a && !!s && !h,
              v = o?.type
            return {
              isDownloading: c,
              isProtected: d,
              isChatProtected: m,
              canDelete: P,
              canUpdate: Z,
              messageListType: v,
              avatarOwnerId: i?.id,
            }
          })((e) => {
            let {
              mediaData: t,
              isVideo: n,
              message: s,
              avatarPhoto: r,
              avatarOwnerId: l,
              fileName: c,
              isChatProtected: d,
              isDownloading: m,
              isProtected: u,
              canReport: h,
              zoomLevelChange: P,
              canDelete: Z,
              canUpdate: v,
              messageListType: g,
              selectMedia: p,
              onReport: E,
              onCloseMediaViewer: C,
              onBeforeDelete: b,
              onForward: f,
              setZoomLevelChange: y,
            } = e
            const [S, k, N] = (0, I.Z)(!1),
              { isMobile: w } = (0, U.ZP)(),
              {
                downloadMessageMedia: T,
                cancelMessageMediaDownload: A,
                updateProfilePhoto: R,
                updateChatPhoto: F,
              } = (0, i.Sv)(),
              { loadProgress: x } = (0, L.Z)(
                s && (0, o.Ti)(s, 'download'),
                !m,
                s && (0, o.kG)(s, 'download')
              ),
              B = (0, a.I4)(() => {
                m ? A({ message: s }) : T({ message: s })
              }, [A, T, m, s]),
              D = (0, a.I4)(() => {
                y((P < 0 ? P : 0) - 1)
              }, [y, P]),
              O = (0, a.I4)(() => {
                y((P > 0 ? P : 0) + 1)
              }, [y, P]),
              _ = (0, a.I4)(() => {
                r && l && ((0, o.YC)(l) ? R({ photo: r }) : F({ chatId: l, photo: r }), p(0))
              }, [r, l, p, R, F]),
              j = (0, M.Z)(),
              G = (0, a.Ye)(
                () => (e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : void 0,
                      onClick: t,
                      ariaLabel: 'More actions',
                    },
                    a.ZP.createElement('i', { className: 'icon-more' })
                  )
                },
                []
              )
            function X() {
              return s
                ? a.ZP.createElement(q, {
                    isOpen: S,
                    isSchedule: 'scheduled' === g,
                    onClose: N,
                    onConfirm: b,
                    message: s,
                  })
                : l && r
                ? a.ZP.createElement(Y, {
                    isOpen: S,
                    onClose: N,
                    onConfirm: b,
                    profileId: l,
                    photo: r,
                  })
                : void 0
            }
            if (w) {
              const e = []
              if (
                (s?.isForwardingAllowed ||
                  d ||
                  e.push({ icon: 'forward', onClick: f, children: j('Forward') }),
                u ||
                  (n
                    ? e.push({
                        icon: m ? 'cancel' : 'download',
                        onClick: B,
                        children: m ? `${Math.round(100 * x)}% Downloading...` : 'Download',
                      })
                    : e.push({
                        icon: 'download',
                        href: t,
                        download: c,
                        children: j('AccActionDownload'),
                      })),
                h && e.push({ icon: 'report', onClick: E, children: j('ReportPeer.Report') }),
                v &&
                  e.push({
                    icon: 'copy-media',
                    onClick: _,
                    children: j('ProfilePhoto.SetMainPhoto'),
                  }),
                Z && e.push({ icon: 'delete', onClick: k, children: j('Delete') }),
                0 === e.length)
              )
                return
              return a.ZP.createElement(
                'div',
                { className: 'MediaViewerActions-mobile' },
                a.ZP.createElement(
                  V.Z,
                  { trigger: G, positionX: 'right' },
                  e.map((e) => {
                    let { icon: t, onClick: n, href: s, download: i, children: o } = e
                    return a.ZP.createElement(
                      z.Z,
                      { key: t, icon: t, href: s, download: i, onClick: n },
                      o
                    )
                  })
                ),
                m && a.ZP.createElement(H.Z, { progress: x, size: 's', noCross: !0 }),
                Z && X()
              )
            }
            return a.ZP.createElement(
              'div',
              { className: 'MediaViewerActions' },
              s?.isForwardingAllowed &&
                !d &&
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent-white',
                    ariaLabel: j('Forward'),
                    onClick: f,
                  },
                  a.ZP.createElement('i', { className: 'icon-forward' })
                ),
              (function () {
                if (!u)
                  return n
                    ? a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          size: 'smaller',
                          color: 'translucent-white',
                          ariaLabel: j('AccActionDownload'),
                          onClick: B,
                        },
                        m
                          ? a.ZP.createElement(H.Z, { progress: x, size: 's', onClick: B })
                          : a.ZP.createElement('i', { className: 'icon-download' })
                      )
                    : a.ZP.createElement(
                        $.Z,
                        {
                          href: t,
                          download: c,
                          round: !0,
                          size: 'smaller',
                          color: 'translucent-white',
                          ariaLabel: j('AccActionDownload'),
                        },
                        a.ZP.createElement('i', { className: 'icon-download' })
                      )
              })(),
              a.ZP.createElement(
                $.Z,
                {
                  round: !0,
                  size: 'smaller',
                  color: 'translucent-white',
                  ariaLabel: j('MediaZoomOut'),
                  onClick: D,
                },
                a.ZP.createElement('i', { className: 'icon-zoom-out' })
              ),
              a.ZP.createElement(
                $.Z,
                {
                  round: !0,
                  size: 'smaller',
                  color: 'translucent-white',
                  ariaLabel: j('MediaZoomIn'),
                  onClick: O,
                },
                a.ZP.createElement('i', { className: 'icon-zoom-in' })
              ),
              h &&
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent-white',
                    ariaLabel: j(n ? 'PeerInfo.ReportProfileVideo' : 'PeerInfo.ReportProfilePhoto'),
                    onClick: E,
                  },
                  a.ZP.createElement('i', { className: 'icon-flag' })
                ),
              v &&
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent-white',
                    ariaLabel: j('ProfilePhoto.SetMainPhoto'),
                    onClick: _,
                  },
                  a.ZP.createElement('i', { className: 'icon-copy-media' })
                ),
              Z &&
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent-white',
                    ariaLabel: j('Delete'),
                    onClick: k,
                  },
                  a.ZP.createElement('i', { className: 'icon-delete' })
                ),
              a.ZP.createElement(
                $.Z,
                {
                  round: !0,
                  size: 'smaller',
                  color: 'translucent-white',
                  ariaLabel: j('Close'),
                  onClick: C,
                },
                a.ZP.createElement('i', { className: 'icon-close' })
              ),
              Z && X()
            )
          })
        )
      var W = n(9933),
        Q = n(46752),
        ee = n(64963),
        te = n(28712),
        ne = n(69118),
        ae = n(67360),
        se = n(28183),
        ie = n(12255),
        oe = n(46590)
      const re = le()
      function le() {
        return void 0 !== document.fullscreenElement
          ? 'fullscreenElement'
          : void 0 !== document.mozFullScreenElement
          ? 'mozFullScreenElement'
          : void 0 !== document.webkitFullscreenElement
          ? 'webkitFullscreenElement'
          : ''
      }
      var ce = n(49204)
      const de = (e) => {
        let { text: t = '', isHidden: n, isForVideo: s, onClick: i, isProtected: o } = e
        const [r, l] = (0, a.eJ)(!1),
          { isMobile: c } = (0, U.ZP)()
        ;(0, a.d4)(() => {
          const e = document.querySelector('.MediaViewerFooter .media-text'),
            t = () => {
              const t = e ? e.clientHeight : 0
              l(t > 2 * u.Gw)
            }
          t()
          const n = (0, ne.P2)(t, 500, !0)
          return (
            window.addEventListener('resize', n, !1),
            () => {
              window.removeEventListener('resize', n, !1)
            }
          )
        }, [])
        const d = (0, Q.Z)(
          'MediaViewerFooter',
          s && 'is-for-video',
          n && 'is-hidden',
          o && 'is-protected'
        )
        return a.ZP.createElement(
          'div',
          {
            className: d,
            onClick: function (e) {
              t && e.stopPropagation()
            },
          },
          Boolean(t) &&
            a.ZP.createElement(
              'div',
              { className: 'media-viewer-footer-content', onClick: c ? void 0 : i },
              a.ZP.createElement(
                'p',
                { className: 'media-text custom-scroll ' + (r ? 'multiline' : ''), dir: 'auto' },
                t
              )
            )
        )
      }
      var me = n(12019),
        ue = n(31212),
        he = n(46898),
        Pe = n(790),
        Ze = n(2155),
        ve = n(18051),
        ge = n(52328)
      const pe = (e) => {
          e.stopPropagation()
        },
        Ee = [0.5, 1, 1.5, 2],
        Ce = (e) => {
          let {
            bufferedRanges: t,
            bufferedProgress: n,
            currentTime: s,
            duration: i,
            fileSize: o,
            isForceMobileVersion: r,
            isPlaying: l,
            isFullscreenSupported: c,
            isFullscreen: m,
            isVisible: u,
            isBuffered: h,
            volume: P,
            isMuted: Z,
            playbackRate: v,
            onChangeFullscreen: g,
            onVolumeClick: p,
            onVolumeChange: E,
            onPlaybackRateChange: C,
            isPictureInPictureSupported: b,
            onPictureInPictureChange: f,
            onPlayPause: y,
            setVisibility: S,
            onSeek: k,
          } = e
          const [N, w, T] = (0, I.Z)(),
            A = (0, a.sO)(null),
            R = (0, a.sO)(!1),
            L = R.current,
            { isMobile: F } = (0, U.ZP)()
          ;(0, a.d4)(() => {
            if (!d.$b) return
            let e
            if (u && l && !L && !N)
              return (
                (e = window.setTimeout(() => {
                  S(!1)
                }, 3e3)),
                () => {
                  e && window.clearTimeout(e)
                }
              )
            e && window.clearTimeout(e)
          }, [l, u, L, S, N]),
            (0, a.d4)(
              () => (
                u
                  ? document.body.classList.add('video-controls-visible')
                  : document.body.classList.remove('video-controls-visible'),
                () => {
                  document.body.classList.remove('video-controls-visible')
                }
              ),
              [u]
            ),
            (0, a.d4)(() => {
              u || T()
            }, [T, u])
          const x = (0, M.Z)(),
            B = (0, a.I4)(
              (e) => {
                if (R.current && A.current) {
                  const { width: t, left: n } = A.current.getBoundingClientRect(),
                    a = e instanceof MouseEvent ? e.clientX : e.targetTouches[0].clientX
                  k(Math.max(Math.min(i * ((a - n) / t), i), 0))
                }
              },
              [i, k]
            ),
            D = (0, a.I4)(
              (e) => {
                ;(R.current = !0), B(e)
              },
              [B]
            ),
            O = (0, a.I4)(() => {
              R.current = !1
            }, [])
          ;(0, a.d4)(() => {
            if (A.current && u)
              return (0, ee.sf)(A.current, { onCapture: D, onRelease: O, onClick: O, onDrag: B })
          }, [u, D, B, O])
          const _ = (0, a.Ye)(
            () =>
              0 === P || Z
                ? 'icon-muted'
                : P < 0.3
                ? 'icon-volume-1'
                : P < 0.6
                ? 'icon-volume-2'
                : 'icon-volume-3',
            [P, Z]
          )
          return a.ZP.createElement(
            'div',
            {
              className: (0, Q.Z)('VideoPlayerControls', r && 'mobile', u && 'active'),
              onClick: pe,
            },
            (function (e, t, n, s) {
              const i = (e / t) * 100
              return a.ZP.createElement(
                'div',
                { className: 'player-seekline', ref: s },
                a.ZP.createElement(
                  'div',
                  { className: 'player-seekline-track' },
                  n.map((e) => {
                    let { start: t, end: n } = e
                    return a.ZP.createElement('div', {
                      className: 'player-seekline-buffered',
                      style: `left: ${100 * t}%; right: ${100 - 100 * n}%`,
                    })
                  }),
                  a.ZP.createElement('div', {
                    className: 'player-seekline-played',
                    style: `width: ${i || 0}%`,
                  })
                )
              )
            })(s, i, t, A),
            a.ZP.createElement(
              'div',
              { className: 'buttons' },
              a.ZP.createElement(
                $.Z,
                {
                  ariaLabel: x('AccActionPlay'),
                  size: 'tiny',
                  ripple: !F,
                  color: 'translucent-white',
                  className: 'play',
                  round: !0,
                  onClick: y,
                },
                a.ZP.createElement('i', { className: l ? 'icon-pause' : 'icon-play' })
              ),
              a.ZP.createElement(
                $.Z,
                {
                  ariaLabel: 'Volume',
                  size: 'tiny',
                  color: 'translucent-white',
                  className: 'volume',
                  round: !0,
                  onClick: p,
                },
                a.ZP.createElement('i', { className: _ })
              ),
              !d.cj &&
                a.ZP.createElement(ve.Z, {
                  bold: !0,
                  className: 'volume-slider',
                  value: Z ? 0 : 100 * P,
                  onChange: E,
                }),
              (function (e, t) {
                return a.ZP.createElement(
                  'div',
                  { className: 'player-time' },
                  `${(0, Pe.k9)(e)} / ${(0, Pe.k9)(t)}`
                )
              })(s, i),
              !h &&
                a.ZP.createElement(
                  'div',
                  { className: 'player-file-size' },
                  `${(0, Ze.sS)(x, o * n)} / ${(0, Ze.sS)(x, o)}`
                ),
              a.ZP.createElement('div', { className: 'spacer' }),
              a.ZP.createElement(
                $.Z,
                {
                  ariaLabel: 'Playback rate',
                  size: 'tiny',
                  color: 'translucent-white',
                  className: 'playback-rate',
                  round: !0,
                  onClick: w,
                },
                `${v}x`
              ),
              b &&
                a.ZP.createElement(
                  $.Z,
                  {
                    ariaLabel: 'Picture in picture',
                    size: 'tiny',
                    color: 'translucent-white',
                    className: 'fullscreen',
                    round: !0,
                    onClick: f,
                  },
                  a.ZP.createElement('i', { className: 'icon-pip' })
                ),
              c &&
                a.ZP.createElement(
                  $.Z,
                  {
                    ariaLabel: 'Fullscreen',
                    size: 'tiny',
                    color: 'translucent-white',
                    className: 'fullscreen',
                    round: !0,
                    onClick: g,
                  },
                  a.ZP.createElement('i', { className: m ? 'icon-smallscreen' : 'icon-fullscreen' })
                )
            ),
            a.ZP.createElement(
              ge.Z,
              {
                isOpen: N,
                className: (0, Q.Z)('playback-rate-menu', !c && 'no-fullscreen', !b && 'no-pip'),
                positionX: 'right',
                positionY: 'bottom',
                autoClose: !0,
                onClose: T,
              },
              Ee.map((e) =>
                a.ZP.createElement(z.Z, { disabled: v === e, onClick: () => C(e) }, `${e}x`)
              )
            )
          )
        }
      function be() {
        return (
          (be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          be.apply(this, arguments)
        )
      }
      const fe = (0, a.X$)((e) => {
          let {
            url: t,
            isGif: n,
            posterData: s,
            posterSize: o,
            loadProgress: r,
            fileSize: l,
            isMediaViewerOpen: c,
            noPlay: u,
            volume: h,
            isMuted: P,
            playbackRate: v,
            onClose: g,
            toggleControls: p,
            areControlsVisible: E,
            shouldCloseOnClick: C,
            isProtected: b,
            isClickDisabled: f,
          } = e
          const {
              setMediaViewerVolume: I,
              setMediaViewerMuted: y,
              setMediaViewerPlaybackRate: S,
              setMediaViewerHidden: M,
            } = (0, i.Sv)(),
            T = (0, a.sO)(null),
            [A, R] = (0, a.eJ)(!d.$b || !d.cj),
            [L, F] = (0, a.eJ)(0),
            [x, B, D] = (function (e, t) {
              const [n, s] = (0, a.eJ)(Boolean(re && document[re]))
              return (
                (0, a.bt)(() => {
                  const n = e.current,
                    a = () => {
                      const e = Boolean(re && document[re])
                      s(e), (n.controls = e)
                    },
                    i = () => {
                      s(!0)
                    },
                    o = () => {
                      s(!1), t(!1)
                    }
                  return (
                    document.addEventListener('fullscreenchange', a, !1),
                    document.addEventListener('webkitfullscreenchange', a, !1),
                    document.addEventListener('mozfullscreenchange', a, !1),
                    n &&
                      (n.addEventListener('webkitbeginfullscreen', i, !1),
                      n.addEventListener('webkitendfullscreen', o, !1)),
                    () => {
                      document.removeEventListener('fullscreenchange', a, !1),
                        document.removeEventListener('webkitfullscreenchange', a, !1),
                        document.removeEventListener('mozfullscreenchange', a, !1),
                        n &&
                          (n.removeEventListener('webkitbeginfullscreen', i, !1),
                          n.removeEventListener('webkitendfullscreen', o, !1))
                    }
                  )
                }, []),
                re || d.cj
                  ? [
                      n,
                      () => {
                        var t
                        e.current &&
                          (re || d.cj) &&
                          ((t = e.current).requestFullscreen
                            ? t.requestFullscreen()
                            : t.webkitRequestFullscreen
                            ? t.webkitRequestFullscreen()
                            : t.webkitEnterFullscreen
                            ? t.webkitEnterFullscreen()
                            : t.mozRequestFullScreen && t.mozRequestFullScreen(),
                          s(!0))
                      },
                      () => {
                        e.current &&
                          (document.exitFullscreen
                            ? document.exitFullscreen()
                            : document.mozCancelFullScreen
                            ? document.mozCancelFullScreen()
                            : document.webkitCancelFullScreen
                            ? document.webkitCancelFullScreen()
                            : document.webkitExitFullscreen && document.webkitExitFullscreen(),
                          s(!1))
                      },
                    ]
                  : [!1]
              )
            })(T, R),
            { isMobile: O } = (0, U.ZP)(),
            _ = (0, a.I4)(() => {
              d.nJ || M({ isHidden: !0 })
            }, [M]),
            j = (0, a.I4)(() => {
              d.nJ || M({ isHidden: !1 })
            }, [M]),
            [G, V, z] = (function (e, t, n) {
              const [s, i] = (0, a.eJ)(!1),
                [o, r] = (0, a.eJ)(!1)
              ;(0, a.bt)(() => {
                if ((d.cj && d.fl) || !e.current) return
                const a = e.current,
                  s = N(a)
                if (
                  (!document.pictureInPictureEnabled || e.current?.disablePictureInPicture) &&
                  void 0 === s
                )
                  return
                ;(a.autoPictureInPicture = !0), i(!0)
                const o = () => {
                    t(), r(!0)
                  },
                  l = () => {
                    n(), r(!1)
                  }
                return (
                  a.addEventListener('enterpictureinpicture', o),
                  a.addEventListener('leavepictureinpicture', l),
                  () => {
                    a.removeEventListener('enterpictureinpicture', o),
                      a.removeEventListener('leavepictureinpicture', l)
                  }
                )
              }, [e, t, n])
              const l = (0, a.I4)(() => {
                  if (!e.current) return
                  const t = N(e.current)
                  t ? t('inline') : w()
                }, [e]),
                c = (0, a.I4)(() => {
                  if (!e.current) return
                  l()
                  const t = e.current,
                    n = (0, k.h)(t),
                    a = N(t)
                  a
                    ? a('picture-in-picture')
                    : (function (e) {
                        if (e.requestPictureInPicture)
                          try {
                            e.requestPictureInPicture()
                          } catch (e) {
                            m.eMD && console.log('[MV] PictureInPicture Error', e)
                          }
                      })(t),
                    n && (0, k.Z)(t)
                }, [e, l])
              return s ? [s, c, o] : [!1]
            })(T, _, j),
            X = (0, a.I4)(() => {
              p(!0)
            }, [p]),
            J = (0, a.I4)(
              (e) => {
                const t = T.current?.getBoundingClientRect()
                t &&
                  (e.clientX < t.left ||
                    e.clientX > t.right ||
                    e.clientY < t.top ||
                    e.clientY > t.bottom) &&
                  p(!1)
              },
              [p]
            ),
            {
              isBuffered: q,
              bufferedRanges: Y,
              bufferingHandlers: K,
              bufferedProgress: W,
            } = (0, me.Z)(),
            { shouldRender: Q, transitionClassNames: ee } = (0, ue.Z)(!q, void 0, void 0, 'slow'),
            { shouldRender: te, transitionClassNames: ne } = (0, ue.Z)(
              d.cj && !A && !Q,
              void 0,
              void 0,
              'slow'
            )
          ;(0, a.d4)(() => {
            u || !c ? T.current.pause() : t && !d.$b && (0, k.Z)(T.current)
          }, [u, c, t, y]),
            (0, a.d4)(() => {
              T.current.currentTime === T.current.duration
                ? (F(0), R(!1))
                : F(T.current.currentTime)
            }, [L]),
            (0, a.d4)(() => {
              T.current.volume = h
            }, [h]),
            (0, a.d4)(() => {
              T.current.playbackRate = v
            }, [v])
          const ae = (0, a.I4)(
              (e) => {
                e.stopPropagation(), A ? (T.current.pause(), R(!1)) : ((0, k.Z)(T.current), R(!0))
              },
              [A]
            ),
            se = (0, a.I4)(
              (e) => {
                f || (C ? g(e) : ae(e))
              },
              [g, C, ae, f]
            )
          ;(0, he.Z)(T, [])
          const ie = (0, a.I4)((e) => {
              F(e.currentTarget.currentTime)
            }, []),
            oe = (0, a.I4)(() => {
              F(0), R(!1), p(!0)
            }, [p]),
            le = (0, a.I4)(() => {
              x && D ? D() : !x && B && B()
            }, [D, x, B]),
            ce = (0, a.I4)((e) => {
              T.current.currentTime = e
            }, []),
            de = (0, a.I4)(
              (e) => {
                I({ volume: e / 100 })
              },
              [I]
            ),
            Pe = (0, a.I4)(() => {
              ;(T.current.muted = !T.current.muted), y({ isMuted: !P })
            }, [P, y]),
            Ze = (0, a.I4)(
              (e) => {
                S({ playbackRate: e })
              },
              [S]
            )
          ;(0, a.d4)(() => {
            if (!c) return
            const e = (e) => {
              ;('Enter' !== e.key && ' ' !== e.key) || z || (e.preventDefault(), ae(e))
            }
            return (
              document.addEventListener('keydown', e, !1),
              () => {
                document.removeEventListener('keydown', e, !1)
              }
            )
          }, [ae, c, z])
          const ve = o && `width: ${o.width}px; height: ${o.height}px`,
            ge = `background-image: url(${s})`,
            pe = T.current?.duration || 0
          return a.ZP.createElement(
            'div',
            {
              className: 'VideoPlayer',
              onMouseMove: d.$b ? void 0 : X,
              onMouseOut: d.$b ? void 0 : J,
            },
            a.ZP.createElement(
              'div',
              { style: ve },
              b &&
                a.ZP.createElement('div', {
                  onContextMenu: Z.Z,
                  onDoubleClick: d.$b ? void 0 : le,
                  onClick: O ? void 0 : ae,
                  className: 'protector',
                }),
              a.ZP.createElement(
                'video',
                be(
                  {
                    ref: T,
                    autoPlay: d.$b,
                    controlsList: 'nodownload',
                    playsInline: !0,
                    loop: n || pe <= 30,
                    muted: n || P,
                    id: 'media-viewer-video',
                    style: ge,
                    onPlay: () => R(!0),
                    onEnded: oe,
                    onClick: O || x ? void 0 : se,
                    onDoubleClick: d.$b ? void 0 : le,
                  },
                  K,
                  {
                    onPause: (e) => {
                      R(!1), K.onPause(e)
                    },
                    onTimeUpdate: ie,
                  }
                ),
                t && a.ZP.createElement('source', { src: t })
              )
            ),
            te &&
              a.ZP.createElement(
                $.Z,
                { round: !0, className: `play-button ${ne}`, onClick: ae },
                a.ZP.createElement('i', { className: 'icon-play' })
              ),
            Q &&
              a.ZP.createElement(
                'div',
                { className: ['spinner-container', ee].join(' ') },
                !q && a.ZP.createElement('div', { className: 'buffering' }, 'Buffering...'),
                a.ZP.createElement(H.Z, { size: 'xl', progress: q ? 1 : r, square: !0, onClick: g })
              ),
            !n &&
              !Q &&
              a.ZP.createElement(Ce, {
                isPlaying: A,
                bufferedRanges: Y,
                bufferedProgress: W,
                isBuffered: q,
                currentTime: L,
                isFullscreenSupported: Boolean(B),
                isPictureInPictureSupported: G,
                isFullscreen: x,
                fileSize: l,
                duration: pe,
                isVisible: E,
                setVisibility: p,
                isForceMobileVersion: o && o.width < 400,
                onSeek: ce,
                onChangeFullscreen: le,
                onPictureInPictureChange: V,
                onPlayPause: ae,
                volume: h,
                playbackRate: v,
                isMuted: P,
                onVolumeClick: Pe,
                onVolumeChange: de,
                onPlaybackRateChange: Ze,
              })
          )
        }),
        Ie = (0, a.X$)(
          (0, i.c$)((e, t) => {
            const { chatId: n, threadId: a, mediaId: i, avatarOwnerId: o, origin: l } = t,
              { volume: c, isMuted: d, playbackRate: m, isHidden: u } = (0, r.jU)(e).mediaViewer
            if (l === s.bZ.SearchResult) {
              if (!n || !i) return { volume: c, isMuted: d, playbackRate: m }
              const t = (0, r.hj)(e, n, i)
              return t
                ? {
                    chatId: n,
                    mediaId: i,
                    senderId: t.senderId,
                    origin: l,
                    message: t,
                    isProtected: (0, r.EV)(e, t),
                    volume: c,
                    isMuted: d,
                    isHidden: u,
                    playbackRate: m,
                  }
                : { volume: c, isMuted: d, playbackRate: m }
            }
            if (o)
              return {
                mediaId: i,
                senderId: o,
                avatarOwner: (0, r.dy)(e, o) || (0, r.Z1)(e, o),
                origin: l,
                volume: c,
                isMuted: d,
                isHidden: u,
                playbackRate: m,
              }
            if (!(n && a && i)) return { volume: c, isMuted: d, playbackRate: m }
            let h
            return (
              (h =
                l && [s.bZ.ScheduledAlbum, s.bZ.ScheduledInline].includes(l)
                  ? (0, r.Tm)(e, n, i)
                  : (0, r.hj)(e, n, i)),
              h
                ? {
                    chatId: n,
                    threadId: a,
                    mediaId: i,
                    senderId: h.senderId,
                    origin: l,
                    message: h,
                    isProtected: (0, r.EV)(e, h),
                    volume: c,
                    isMuted: d,
                    isHidden: u,
                    playbackRate: m,
                  }
                : { volume: c, isMuted: d, playbackRate: m }
            )
          })((e) => {
            const {
                mediaId: t,
                isActive: n,
                avatarOwner: s,
                chatId: i,
                message: o,
                origin: r,
                animationLevel: l,
                areControlsVisible: c,
                isProtected: m,
                volume: h,
                playbackRate: P,
                isMuted: v,
                isHidden: g,
                onClose: p,
                onFooterClick: E,
                setControlsVisible: C,
                isMoving: b,
              } = e,
              I = (0, M.Z)(),
              y = 2 === l,
              {
                isVideo: S,
                isPhoto: k,
                actionPhoto: N,
                bestImageData: w,
                bestData: T,
                dimensions: A,
                isGif: R,
                isVideoAvatar: L,
                videoSize: F,
                loadProgress: x,
              } = O({ message: o, avatarOwner: s, mediaId: t, origin: r, delay: y && 350 }),
              B = Boolean(s || t),
              { isMobile: D } = (0, U.ZP)(),
              _ = (0, a.I4)(
                (e) => {
                  C?.(e)
                },
                [C]
              )
            if (s || N)
              return L
                ? a.ZP.createElement(
                    'div',
                    { key: i, className: 'MediaViewerContent' },
                    a.ZP.createElement(fe, {
                      key: t,
                      url: T,
                      isGif: !0,
                      posterData: w,
                      posterSize: (0, u.PA)(A, !1, !0),
                      loadProgress: x,
                      fileSize: F,
                      isMediaViewerOpen: B && n,
                      areControlsVisible: c,
                      toggleControls: _,
                      isProtected: m,
                      noPlay: !n,
                      onClose: p,
                      isMuted: !0,
                      shouldCloseOnClick: !0,
                      volume: 0,
                      isClickDisabled: b,
                      playbackRate: 1,
                    })
                  )
                : a.ZP.createElement(
                    'div',
                    { key: i, className: 'MediaViewerContent' },
                    ye(T, (0, u.PA)(A, !1), !D && !m, m)
                  )
            if (!o) return
            const $ =
                'suggestProfilePhoto' === o.content.action?.type
                  ? I('Conversation.SuggestedPhotoTitle')
                  : (0, f.X)(o),
              j = Boolean($)
            return a.ZP.createElement(
              'div',
              { className: (0, Q.Z)('MediaViewerContent', j && 'has-footer') },
              k && ye(T, o && (0, u.PA)(A, j), !D && !m, m),
              S &&
                (n
                  ? a.ZP.createElement(fe, {
                      key: t,
                      url: T,
                      isGif: R,
                      posterData: w,
                      posterSize: o && (0, u.PA)(A, j, !0),
                      loadProgress: x,
                      fileSize: F,
                      areControlsVisible: c,
                      isMediaViewerOpen: B && n,
                      toggleControls: _,
                      noPlay: !n,
                      onClose: p,
                      isMuted: v,
                      isHidden: g,
                      isProtected: m,
                      volume: h,
                      isClickDisabled: b,
                      playbackRate: P,
                    })
                  : (function (e, t, n, s) {
                      const i = t && `width: ${t.width}px; height: ${t.height}px`,
                        o = `background-image: url(${e})`
                      return e
                        ? a.ZP.createElement(
                            'div',
                            { className: 'VideoPlayer' },
                            s &&
                              a.ZP.createElement('div', {
                                onContextMenu: Z.Z,
                                className: 'protector',
                              }),
                            a.ZP.createElement(
                              'div',
                              { style: i },
                              a.ZP.createElement('video', {
                                style: o,
                                className: (0, Q.Z)(s && 'is-protected'),
                                draggable: Boolean(n),
                              })
                            )
                          )
                        : a.ZP.createElement(
                            'div',
                            { className: 'spinner-wrapper', style: t ? `width: ${t.width}px` : '' },
                            a.ZP.createElement(ce.Z, { color: 'white' })
                          )
                    })(w, o && (0, u.PA)(A, j, !0), !D && !m, m)),
              $ &&
                a.ZP.createElement(de, {
                  text: $,
                  onClick: E,
                  isProtected: m,
                  isHidden: !!d.$b && !c,
                  isForVideo: S && !R,
                })
            )
          })
        )
      function ye(e, t, n, s) {
        return e
          ? a.ZP.createElement(
              'div',
              { style: 'position: relative;' },
              s && a.ZP.createElement('div', { onContextMenu: Z.Z, className: 'protector' }),
              a.ZP.createElement('img', {
                src: e,
                alt: '',
                className: (0, Q.Z)(s && 'is-protected'),
                style: t ? `width: ${t.width}px` : '',
                draggable: Boolean(n),
              })
            )
          : a.ZP.createElement(
              'div',
              { className: 'spinner-wrapper', style: t ? `width: ${t.width}px` : '' },
              a.ZP.createElement(ce.Z, { color: 'white' })
            )
      }
      function Se() {
        return (
          (Se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          Se.apply(this, arguments)
        )
      }
      const { easeOutCubic: ke, easeOutQuart: Ne } = W.M8,
        we = d.$b ? 40 : 0,
        Me = 350
      let Te, Ae
      var Re
      !(function (e) {
        ;(e[(e.Horizontal = 0)] = 'Horizontal'), (e[(e.Vertical = 1)] = 'Vertical')
      })(Re || (Re = {}))
      const Le = (0, a.X$)((e) => {
        let {
          mediaId: t,
          getMediaId: n,
          selectMedia: s,
          isVideo: i,
          isGif: o,
          isPhoto: r,
          isOpen: l,
          hasFooter: c,
          zoomLevelChange: m,
          animationLevel: u,
          isHidden: h,
          ...P
        } = e
        const Z = (0, a.sO)(null),
          v = (0, a.sO)(null),
          g = (0, a.sO)({ x: 0, y: 0, scale: 1 }),
          p = (0, a.sO)({ x: 0, y: 0, scale: 1 }),
          E = (0, a.sO)(void 0),
          C = (0, a.sO)(!0),
          b = (0, a.sO)(!1),
          [f, I] = (0, a.eJ)(t),
          S = (0, T.Z)(m),
          k = void 0 !== S && S !== m,
          N = (0, y.Z)(),
          [w, A] = (0, a.eJ)(!1),
          R = (() => {
            const [e, t] = (0, a.eJ)(!1)
            return (
              (0, a.d4)(() => {
                const e = () => {
                  t(
                    (function () {
                      const e = le()
                      return Boolean(e && document[e])
                    })()
                  )
                }
                return (
                  document.addEventListener('fullscreenchange', e, !1),
                  document.addEventListener('webkitfullscreenchange', e, !1),
                  document.addEventListener('mozfullscreenchange', e, !1),
                  () => {
                    document.removeEventListener('fullscreenchange', e, !1),
                      document.removeEventListener('webkitfullscreenchange', e, !1),
                      document.removeEventListener('mozfullscreenchange', e, !1)
                  }
                )
              }, []),
              e
            )
          })(),
          [L, F] = (0, a.eJ)(!1),
          { height: x, width: B, isResizing: D } = (0, ie.Z)(),
          { onClose: O } = P,
          U = (0, M.Z)()
        ;(0, oe.Z)({ isActive: l, onBack: O, shouldBeReplaced: !0 })
        const _ = (0, a.I4)(
            (e) => {
              ;(g.current = e), N()
            },
            [N]
          ),
          $ = (0, ae.Z)(s, [s], 350, !0),
          j = (0, ae.Z)(
            () => {
              E.current = void 0
            },
            [],
            500,
            !0
          ),
          G = (0, ae.Z)(
            (e) => {
              ;(C.current = e), N()
            },
            [N],
            800,
            !0
          ),
          V = o && !d.cj,
          z = d.$b ? 40 : B / 10,
          H = (0, a.I4)(
            (e) => {
              if (!d.$b) return
              const t = x - e.pageY < 80
              ;(!t && e.pageX < z) || (!t && e.pageX > B - z) || A(!w)
            },
            [z, w, x, B]
          )
        if (
          ((0, se.Z)(() => A(!0), 450),
          (0, a.d4)(() => {
            I(t)
          }, [t]),
          (0, a.d4)(() => {
            if (!Z.current || void 0 === f || h || R) return
            let e = p.current
            const t = { x: 0, y: 0 },
              a = { x: 0, y: 0 },
              s = { x: 0, y: 0 }
            let i,
              o,
              r = Date.now()
            const l = (0, ne.Ds)(
                () => {
                  r = Date.now()
                },
                500,
                !1,
                !0
              ),
              c = (t) => {
                const a = n(f, t)
                if (void 0 !== a) {
                  const n = (B + we) * t
                  return (
                    (g.current.x += n),
                    (C.current = !1),
                    I(a),
                    $(a),
                    G(!0),
                    (e = { x: 0, y: 0, scale: 1 }),
                    0 === u
                      ? (_(e), !0)
                      : ((Te = (0, W.vr)({
                          from: g.current.x,
                          to: 0,
                          duration: Me,
                          timing: ke,
                          onUpdate: (e) => _({ y: 0, x: e, scale: 1 }),
                        })),
                        !0)
                  )
                }
                return !1
              },
              m = (e) => {
                if (1 !== g.current.scale) return [!1, !1]
                if (e.target.closest('div.VideoPlayerControls')) return [!1, !1]
                let t = 0
                return x - e.pageY < 80
                  ? [!1, !1]
                  : (e.pageX < z ? (t = -1) : e.pageX > B - z && (t = 1), [0 !== t, c(t)])
              },
              P = (e) => {
                if (1 === g.current.scale)
                  switch (e.key) {
                    case 'Left':
                    case 'ArrowLeft':
                      c(-1)
                      break
                    case 'Right':
                    case 'ArrowRight':
                      c(1)
                  }
              },
              y = function (e) {
                let { x: t, y: n, scale: a } = e,
                  s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                if (!i) return [{ x: t, y: n, scale: a }, !0, !0]
                let o = !0,
                  r = !0
                const l = (B - B * a) / 2,
                  c = (x - x * a) / 2,
                  d = Math.max(-i.left * a, l),
                  m = B - i.right * a
                ;(o = (0, te.Kh)(t, m, d)), (t = (0, te.uZ)(t, m, d))
                const u = Math.max(-i.top * a + s, c),
                  h = x - i.bottom * a
                return (
                  (r = (0, te.Kh)(n, h, u)),
                  (n = (0, te.uZ)(n, h, u)),
                  [{ x: t, y: n, scale: a }, o, r]
                )
              },
              S = (i) => {
                if (b.current) return void (b.current = !1)
                'mouseup' === i.type && F(!1)
                const o = Math.abs(g.current.x),
                  l = Math.abs(g.current.y),
                  { scale: c, x: d, y: m } = g.current
                if ((j(), G(!0), c < 1))
                  return (
                    (e = { x: 0, y: 0, scale: 1 }),
                    void (Te = (0, W.vr)({
                      from: [d, m, c],
                      to: [0, 0, 1],
                      duration: Me,
                      timing: ke,
                      onUpdate: (e) => _({ x: e[0], y: e[1], scale: e[2] }),
                    }))
                  )
                if (c > 1) {
                  const n = Math.min(c, 4),
                    o = n / c
                  let l = d * o + (a.x - o * a.x),
                    u = m * o + (a.y - o * a.y)
                  const h = 0.15
                  if ('wheel' !== i.type && e.scale === c) {
                    const e = Math.abs(t.x) / (Date.now() - r),
                      n = Math.abs(t.y) / (Date.now() - r)
                    ;(l -= Math.abs(t.x) * e * h * s.x), (u -= Math.abs(t.y) * n * h * s.y)
                  }
                  return (
                    ([e] = y({ x: l, y: u, scale: n }, 60)),
                    void (Te = (0, W.vr)({
                      from: [d, m, c],
                      to: [e.x, e.y, e.scale],
                      duration: Me,
                      timing: ke,
                      onUpdate: (e) => _({ x: e[0], y: e[1], scale: e[2] }),
                    }))
                  )
                }
                if (((e = { x: d, y: m, scale: c }), l >= 50)) return void O()
                if (l > 0)
                  return void (Te = (0, W.vr)({
                    from: m,
                    to: 0,
                    duration: Me,
                    timing: ke,
                    onUpdate: (e) => _({ x: 0, y: e, scale: c }),
                  }))
                const u = d < 0 ? 1 : -1,
                  h = n(f, d < 0 ? 1 : -1),
                  P = s.x < 0 ? -1 : 1
                if (void 0 !== h && o >= 50 && u === P) {
                  const e = (B + we) * u
                  ;(g.current.x += e), I(h), $(h)
                }
                Te = (0, W.vr)({
                  from: g.current.x,
                  to: 0,
                  duration: Me,
                  timing: ke,
                  onUpdate: (e) => {
                    var t
                    return _({
                      y: 0,
                      x: e,
                      scale: null !== (t = g.current?.scale) && void 0 !== t ? t : 1,
                    })
                  },
                })
              },
              k = (0, ee.sf)(Z.current, {
                isNotPassive: !0,
                withNativeDrag: !0,
                excludedClosestSelector: '.MediaViewerFooter, .ZoomControls',
                minZoom: 1,
                maxZoom: 4,
                doubleTapZoom: 3,
                onCapture: (e) => {
                  if (Be(e)) return
                  if ('mousedown' === e.type && (F(!0), 1 !== g.current.scale))
                    return void e.preventDefault()
                  r = Date.now()
                  const { x: t, y: n, scale: a } = g.current
                  if (0 === t && 0 === n && 1 === a) {
                    if (!v.current) return
                    if (((o = v.current.querySelector('img, video')), !o)) return
                    i = o.getBoundingClientRect()
                  }
                },
                onDrag: (n, a, i, o) => {
                  let { dragOffsetX: r, dragOffsetY: c } = i
                  if (b.current || Be(n)) return
                  if (d.cj && 'touchstart' === a.type) {
                    const { pageX: e } = a.touches[0]
                    if (e <= ee.vJ || e >= B - ee.vJ) return
                  }
                  Te && (Te(), (Te = void 0)),
                    (s.x = t.x - r),
                    (s.y = t.y - c),
                    (t.x = r),
                    (t.y = c)
                  const m = Math.abs(r),
                    u = Math.abs(c),
                    { scale: h, x: P, y: Z } = g.current
                  if ((l(), 1 === h)) {
                    if ('mousemove' !== n.type) {
                      if (
                        E.current !== Re.Vertical &&
                        (E.current === Re.Horizontal || Math.abs(P) > 10 || m / u > 1.5)
                      ) {
                        ;(E.current = Re.Horizontal), (C.current = !1)
                        const e = B + we,
                          t = (0, te.uZ)(r, -e, e)
                        return (
                          _({ x: t, y: 0, scale: h }),
                          void ('wheel' === n.type && Math.abs(t) > 100 && (S(n), (b.current = !0)))
                        )
                      }
                      if (E.current === Re.Vertical || Math.abs(Z) > 10 || u / m > 1.5) {
                        E.current = Re.Vertical
                        const e = x,
                          t = (0, te.uZ)(c, -e, e)
                        _({ x: 0, y: t, scale: h }),
                          'wheel' === n.type && Math.abs(t) > 100 && (S(n), (b.current = !0))
                      }
                    }
                  } else {
                    const t = e.x + r,
                      a = e.y + c
                    if (['wheel', 'mousemove'].includes(n.type)) {
                      const [e, n, s] = y({ x: t, y: a, scale: h }, 60)
                      return o && o(!n, !s), void _(e)
                    }
                    'touches' in n && 1 === n.touches.length && _({ x: t, y: a, scale: h })
                  }
                },
                onZoom: (t, n) => {
                  let {
                    zoom: s,
                    zoomFactor: i,
                    initialCenterX: o,
                    initialCenterY: r,
                    dragOffsetX: l,
                    dragOffsetY: c,
                    currentCenterX: d,
                    currentCenterY: m,
                  } = n
                  Te && Te(), (o = o || B / 2), (r = r || x / 2), (d = d || B / 2), (m = m || x / 2)
                  const u = null != s ? s : (0, te.uZ)(e.scale * i, 0.5, 12),
                    h = u / e.scale,
                    P = Math.abs(Math.min(e.x, 0)),
                    Z = Math.abs(Math.min(e.y, 0))
                  ;(a.x = d), (a.y = m)
                  const v = P + o,
                    g = Z + r,
                    p = v - h * v,
                    E = g - h * g,
                    [C] = y({ x: e.x + p + l, y: e.y + E + c, scale: u })
                  _(C)
                },
                onClick(t) {
                  F(!1)
                  const [n, a] = m(t)
                  if (n) {
                    if ((t.preventDefault(), t.stopPropagation(), d.$b)) return
                    a || O()
                  } else 1 !== e.scale || d.$b || (!V && xe(t.target, '.VideoPlayer')) || O()
                },
                onDoubleClick(t, n) {
                  let { centerX: a, centerY: s } = n
                  const [i] = m(t)
                  if (i) return t.preventDefault(), void t.stopPropagation()
                  if (!d.$b && 'wheel' !== t.type) return
                  const { x: o, y: r, scale: l } = g.current
                  if (1 === l) {
                    if (0 !== o || 0 !== r) return
                    e = y({ x: a - 3 * a, y: s - 3 * s, scale: 3 })[0]
                  } else e = { x: 0, y: 0, scale: 1 }
                  Te = (0, W.vr)({
                    from: [o, r, l],
                    to: [e.x, e.y, e.scale],
                    duration: Me,
                    timing: ke,
                    onUpdate: (e) => {
                      const t = { x: e[0], y: e[1], scale: e[2] }
                      _(t)
                    },
                  })
                },
                onRelease: S,
              })
            return (
              document.addEventListener('keydown', P, !1),
              () => {
                k(), document.removeEventListener('keydown', P, !1)
              }
            )
          }, [O, _, n, f, B, x, z, V, $, G, j, u, F, h, R]),
          (0, a.d4)(() => {
            if (!Z.current || !k || h || R) return
            const { scale: e } = g.current,
              t = m > 0 ? -1 : 1
            let n = 100,
              a = 0
            ;(e <= 0.6 && t > 0) ||
              (e >= 12 && t < 0) ||
              (1 === e && t > 0 && (n = 20),
              Ae && Ae(),
              (Ae = (0, W.vr)({
                from: t,
                to: t * n,
                duration: Me,
                timing: Ne,
                onUpdate: (e) => {
                  if (!Z.current) return
                  const t = (0, te.NM)(e - a, 2)
                  a = e
                  const n = new WheelEvent('wheel', { deltaY: t, ctrlKey: !0 })
                  Z.current.dispatchEvent(n)
                },
              })))
          }, [m, k, h, R]),
          void 0 === f)
        )
          return
        const X = n(f, 1),
          J = n(f, -1),
          q = void 0 !== J,
          Y = void 0 !== X,
          K = g.current.x,
          re = g.current.y,
          { scale: ce } = g.current,
          de = L && ce > 1
        return a.ZP.createElement(
          'div',
          { className: 'MediaViewerSlides', ref: Z },
          q &&
            1 === ce &&
            !D &&
            a.ZP.createElement(
              'div',
              { className: 'MediaViewerSlide', style: Fe(-B + K - we) },
              a.ZP.createElement(
                Ie,
                Se({}, P, { animationLevel: u, isMoving: de, areControlsVisible: w, mediaId: J })
              )
            ),
          a.ZP.createElement(
            'div',
            {
              className: (0, Q.Z)(
                'MediaViewerSlide',
                'MediaViewerSlide--active',
                de && 'MediaViewerSlide--moving'
              ),
              onClick: H,
              ref: v,
              style: Fe(K, re, ce),
            },
            a.ZP.createElement(
              Ie,
              Se({}, P, {
                mediaId: f,
                animationLevel: u,
                isActive: C.current,
                setControlsVisible: A,
                isMoving: de,
                areControlsVisible: w && 1 === ce,
              })
            )
          ),
          Y &&
            1 === ce &&
            !D &&
            a.ZP.createElement(
              'div',
              { className: 'MediaViewerSlide', style: Fe(B + K + we) },
              a.ZP.createElement(
                Ie,
                Se({}, P, { animationLevel: u, isMoving: de, areControlsVisible: w, mediaId: X })
              )
            ),
          q &&
            1 === ce &&
            !d.$b &&
            a.ZP.createElement('button', {
              type: 'button',
              className: `navigation prev ${i && !o && 'inline'}`,
              'aria-label': U('AccDescrPrevious'),
              dir: U.isRtl ? 'rtl' : void 0,
            }),
          Y &&
            1 === ce &&
            !d.$b &&
            a.ZP.createElement('button', {
              type: 'button',
              className: `navigation next ${i && !o && 'inline'}`,
              'aria-label': U('Next'),
              dir: U.isRtl ? 'rtl' : void 0,
            })
        )
      })
      function Fe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
        return `transform: translate3d(${e.toFixed(3)}px, ${t.toFixed(3)}px, 0px) scale(${n.toFixed(
          3
        )});`
      }
      function xe(e, t) {
        return !!e && (!!e.matches(t) || Boolean(e.closest(t)))
      }
      function Be(e) {
        const t = e.target
        return (
          !!xe(t, '.VideoPlayerControls') &&
          (xe(
            t,
            '.play, .fullscreen, .volume, .volume-slider, .playback-rate, .playback-rate-menu'
          ) || e.preventDefault(),
          !0)
        )
      }
      var De = n(70172)
      const Oe = (0, i.c$)((e, t) => {
          let { chatId: n, messageId: a, isAvatar: s } = t
          const { animationLevel: i } = e.settings.byKey
          if (s && n)
            return { sender: (0, o.YC)(n) ? (0, r.dy)(e, n) : (0, r.Z1)(e, n), animationLevel: i }
          if (!a || !n) return { animationLevel: i }
          const l = (0, r.hj)(e, n, a)
          return { message: l, sender: l && (0, r.Ur)(e, l), animationLevel: i }
        })((e) => {
          let {
            chatId: t,
            messageId: n,
            sender: s,
            isFallbackAvatar: r,
            isAvatar: l,
            message: c,
            animationLevel: d,
          } = e
          const { closeMediaViewer: m, focusMessage: u, toggleChatInfo: h } = (0, i.Sv)(),
            { isMobile: P } = (0, U.ZP)(),
            Z = (0, a.I4)(() => {
              m(),
                t &&
                  n &&
                  (P
                    ? setTimeout(() => {
                        h({ force: !1 }, { forceSyncOnIOs: !0 }), u({ chatId: t, messageId: n })
                      }, 350)
                    : u({ chatId: t, messageId: n }))
            }, [t, P, u, h, n, m]),
            v = (0, M.Z)()
          if (!s || (!c && !l)) return
          const g = (0, o.OU)(v, s)
          return a.ZP.createElement(
            'div',
            { className: 'SenderInfo', onClick: Z },
            (0, o.YC)(s.id)
              ? a.ZP.createElement(De.Z, {
                  key: s.id,
                  size: 'medium',
                  user: s,
                  animationLevel: d,
                  withVideo: !0,
                })
              : a.ZP.createElement(De.Z, {
                  key: s.id,
                  size: 'medium',
                  chat: s,
                  animationLevel: d,
                  withVideo: !0,
                }),
            a.ZP.createElement(
              'div',
              { className: 'meta' },
              a.ZP.createElement('div', { className: 'title', dir: 'auto' }, g && (0, X.Z)(g)),
              a.ZP.createElement(
                'div',
                { className: 'date', dir: 'auto' },
                l
                  ? v(r ? 'lng_mediaview_profile_public_photo' : 'lng_mediaview_profile_photo')
                  : (0, Pe.ZK)(v, 1e3 * c.date, !0)
              )
            )
          )
        }),
        Ue = 350,
        _e = (0, a.X$)(
          (0, i.c$)((e) => {
            const { mediaViewer: t, shouldSkipHistoryAnimations: n } = (0, r.jU)(e),
              { chatId: a, threadId: i, mediaId: l, avatarOwnerId: c, origin: d, isHidden: m } = t,
              { animationLevel: u } = e.settings.byKey,
              { currentUserId: h } = e
            let P,
              Z,
              v,
              g = !!a && (0, r.FM)(e, a)
            if (d === s.bZ.SearchResult) {
              if (!a || !l) return { animationLevel: u, shouldSkipHistoryAnimations: n }
              const t = (0, r.hj)(e, a, l)
              return t
                ? {
                    chatId: a,
                    mediaId: l,
                    senderId: t.senderId,
                    isChatWithSelf: g,
                    origin: d,
                    message: t,
                    animationLevel: u,
                    isHidden: m,
                    shouldSkipHistoryAnimations: n,
                  }
                : { animationLevel: u, shouldSkipHistoryAnimations: n }
            }
            if (c) {
              const t = (0, r.dy)(e, c),
                a = (0, r.Z1)(e, c)
              let s = !1
              return (
                t ? (s = c === h) : a && (s = (0, o.Nl)(a)),
                (g = (0, r.FM)(e, c)),
                {
                  mediaId: l,
                  senderId: c,
                  avatarOwner: t || a,
                  isChatWithSelf: g,
                  canUpdateMedia: s,
                  animationLevel: u,
                  origin: d,
                  shouldSkipHistoryAnimations: n,
                  isHidden: m,
                }
              )
            }
            if (!(a && i && l)) return { animationLevel: u, shouldSkipHistoryAnimations: n }
            if (
              ((P =
                d && [s.bZ.ScheduledAlbum, s.bZ.ScheduledInline].includes(d)
                  ? (0, r.Tm)(e, a, l)
                  : (0, r.hj)(e, a, l)),
              !P)
            )
              return { animationLevel: u, shouldSkipHistoryAnimations: n }
            if (
              ((Z =
                d && [s.bZ.ScheduledAlbum, s.bZ.ScheduledInline].includes(d)
                  ? (0, r.yB)(e, a)
                  : (0, r.Zw)(e, a)),
              d === s.bZ.Inline || d === s.bZ.Album || d === s.bZ.SuggestedAvatar)
            )
              v = (0, r.qC)(e, a, i) || (0, r.gb)(e, a, i)
            else if (d === s.bZ.SharedMedia) {
              const t = (0, r.we)(e),
                { foundIds: n } = (t && t.resultsByType && t.resultsByType.media) || {}
              v = n
            }
            return {
              chatId: a,
              threadId: i,
              mediaId: l,
              senderId: P.senderId,
              isChatWithSelf: g,
              origin: d,
              message: P,
              chatMessages: Z,
              collectionIds: v,
              animationLevel: u,
              isHidden: m,
              shouldSkipHistoryAnimations: n,
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              mediaId: r,
              senderId: Z,
              isChatWithSelf: k,
              canUpdateMedia: N,
              origin: A,
              avatarOwner: R,
              message: L,
              chatMessages: F,
              collectionIds: x,
              animationLevel: B,
              isHidden: D,
              shouldSkipHistoryAnimations: V,
            } = e
            const {
                openMediaViewer: z,
                closeMediaViewer: H,
                openForwardMenu: X,
                focusMessage: J,
                toggleChatInfo: q,
              } = (0, i.Sv)(),
              Y = Boolean(R || r),
              { isMobile: W } = (0, U.ZP)(),
              Q = (0, a.sO)(),
              ee = (0, T.Z)(Z),
              te = 2 === B ? 'slide-fade' : 'none',
              ne = 2 === B && !V,
              [ae, se, ie] = (0, I.Z)(),
              [oe, re] = (0, a.eJ)(1),
              {
                webPagePhoto: le,
                webPageVideo: ce,
                isVideo: de,
                actionPhoto: me,
                isPhoto: ue,
                bestImageData: he,
                bestData: Pe,
                dimensions: Ze,
                isGif: ve,
                isFromSharedMedia: ge,
                avatarPhoto: pe,
                fileName: Ee,
              } = O({ message: L, avatarOwner: R, mediaId: r, origin: A, delay: ne && Ue }),
              Ce = !!pe && !k,
              be = !D && Y,
              fe = le || ce || me ? r : void 0,
              Ie = (0, a.Ye)(
                () =>
                  fe
                    ? [fe]
                    : R
                    ? R.photos?.map((e, t) => t) || []
                    : (0, o.N0)(F || {}, x || [], ge),
                [fe, R, F, x, ge]
              ),
              ye = r ? Ie.indexOf(r) : -1
            !Y || (ee && ee === Z && Q.current) || (Q.current = ye),
              (0, a.d4)(() => {
                if (Y) return (0, h.l_)(), h.In
              }, [Y]),
              (0, a.d4)(() => {
                be && w()
              }, [be]),
              (0, a.d4)(() => {
                W && document.body.classList.toggle('is-media-viewer-open', Y),
                  d.$b && document.body.classList.toggle('no-selection', Y)
              }, [W, Y])
            const Se = (0, y.Z)()
            ;(0, a.d4)(() => {
              const e = window.matchMedia(u.L6)
              return (
                'function' == typeof e.addEventListener
                  ? e.addEventListener('change', Se)
                  : 'function' == typeof e.addListener && e.addListener(Se),
                () => {
                  'function' == typeof e.removeEventListener
                    ? e.removeEventListener('change', Se)
                    : 'function' == typeof e.removeListener && e.removeListener(Se)
                }
              )
            }, [Se])
            const ke = (0, T.Z)(L),
              Ne = (0, T.Z)(D),
              we = (0, T.Z)(A),
              Me = (0, T.Z)(r),
              Te = (0, T.Z)(R),
              Ae = (0, T.Z)(he),
              Re = L ? (0, f.X)(L) : void 0,
              Fe = Boolean(Re),
              xe = Ne && Me !== r
            ;(0, a.d4)(() => {
              !ne ||
                !Y ||
                (ke && !xe) ||
                Te ||
                ((0, S.YW)(Ue + m.fK3),
                (function (e, t, n, a, i, o) {
                  const { mediaEl: r } = C(t, o)
                  if (!r) return
                  const { width: l } = P.Z.get(),
                    { width: c, height: h } = (0, u.fM)(e, i),
                    { width: Z, height: v } = (0, u.jg)(c, h, a.width, a.height),
                    p = (l - Z) / 2,
                    f =
                      (function (e) {
                        const t = window.matchMedia(u.L6)
                        let n = 4.125
                        return e && !d.$b && (n += t.matches ? 0.875 : 2.125), n * u.Gw
                      })(e) +
                      (h - v) / 2
                  let { top: I, left: y, width: S, height: k } = r.getBoundingClientRect()
                  if (
                    [s.bZ.SharedMedia, s.bZ.Album, s.bZ.ScheduledAlbum, s.bZ.SearchResult].includes(
                      t
                    )
                  ) {
                    const e = (function (e, t, n, a, s, i) {
                      if (e === t) {
                        const o = Math.max(s, i) * (e / t)
                        ;(a -= (o - s) / 2), (n -= (o - i) / 2), (s = o), (i = o)
                      } else if (e > t) {
                        const n = s
                        a -= ((s = i * (e / t)) - n) / 2
                      } else if (t > e) {
                        const a = i
                        n -= ((i = s * (t / e)) - a) / 2
                      }
                      return { top: n, left: a, width: s, height: i }
                    })(Z, v, I, y, S, k)
                    ;(I = e.top), (y = e.left), (S = e.width), (k = e.height)
                  }
                  const N = y + S / 2 - (p + Z / 2),
                    w = I + k / 2 - (f + v / 2),
                    M = S / Z,
                    T = k / v,
                    A = g(n || r)
                  E(A, {
                    top: `${f}px`,
                    left: `${p}px`,
                    width: `${Z}px`,
                    height: `${v}px`,
                    transform: `translate3d(${N}px, ${w}px, 0) scale(${M}, ${T})`,
                  }),
                    b(A, t),
                    document.body.classList.add('ghost-animating'),
                    requestAnimationFrame(() => {
                      document.body.appendChild(A),
                        requestAnimationFrame(() => {
                          ;(A.style.transform = ''),
                            (function (e) {
                              ;(e.firstChild.style.objectFit = 'default'),
                                e.classList.remove('rounded-corners', 'circle')
                            })(A),
                            setTimeout(() => {
                              requestAnimationFrame(() => {
                                document.body.contains(A) && document.body.removeChild(A),
                                  document.body.classList.remove('ghost-animating')
                              })
                            }, 200 + m.fK3)
                        })
                    })
                })(Fe, A, he, Ze, de, L)),
                ne &&
                  !Y &&
                  (ke || Te) &&
                  ((0, S.YW)(Ue + m.fK3),
                  (function (e, t, n) {
                    const { container: a, mediaEl: i } = C(e, n)
                    if (!i) return
                    const o = document
                      .getElementById('MediaViewer')
                      .querySelector(
                        '.MediaViewerSlide--active img, .MediaViewerSlide--active video'
                      )
                    if (!o || !i) return
                    const { top: r, left: l, width: c, height: d } = o.getBoundingClientRect(),
                      { top: u, left: h, width: Z, height: f } = i.getBoundingClientRect()
                    let I = u
                    if (!(0, v.P)(a)) {
                      const { height: e } = P.Z.get()
                      I = u < r ? -f : e
                    }
                    const y = l + c / 2 - (h + Z / 2),
                      S = r + d / 2 - (I + f / 2)
                    let k = c / Z,
                      N = d / f
                    const w =
                      ([s.bZ.Inline, s.bZ.ScheduledInline].includes(e) && !p(a, i)) ||
                      ([s.bZ.Album, s.bZ.ScheduledAlbum].includes(e) && !p(a, i))
                    ;[
                      s.bZ.SharedMedia,
                      s.bZ.Album,
                      s.bZ.ScheduledAlbum,
                      s.bZ.SearchResult,
                    ].includes(e) && (k > N ? (k = N) : N > k && (N = k))
                    const M = document.getElementsByClassName('ghost')[0],
                      T = M || g(t || i, e)
                    M ||
                      E(T, {
                        top: `${I}px`,
                        left: `${h}px`,
                        width: `${Z}px`,
                        height: `${f}px`,
                        transform: `translate3d(${y}px, ${S}px, 0) scale(${k}, ${N})`,
                      }),
                      requestAnimationFrame(() => {
                        if (M) {
                          const { top: e, left: t, width: n, height: a } = M.getBoundingClientRect()
                          E(T, {
                            transition: 'none',
                            top: `${I}px`,
                            left: `${h}px`,
                            transformOrigin: 'top left',
                            transform: `translate3d(${t - h}px, ${e - I}px, 0) scale(${n / Z}, ${
                              a / f
                            })`,
                            width: `${Z}px`,
                            height: `${f}px`,
                          })
                        }
                        document.body.classList.add('ghost-animating'),
                          M || document.body.appendChild(T),
                          requestAnimationFrame(() => {
                            M && (M.style.transition = ''),
                              (T.style.transform = ''),
                              w && (T.style.opacity = '0'),
                              b(T, e),
                              setTimeout(() => {
                                requestAnimationFrame(() => {
                                  document.body.contains(T) && document.body.removeChild(T),
                                    document.body.classList.remove('ghost-animating')
                                })
                              }, 200 + m.fK3)
                          })
                      })
                  })(we, Ae, ke || void 0))
            }, [ne, Y, xe, A, we, L, ke, Te, he, Ae, Ze, de, Fe])
            const Be = (0, a.I4)(() => H(), [H]),
              De = (0, a.I4)(() => {
                Be(),
                  t &&
                    r &&
                    (W
                      ? setTimeout(() => {
                          q({ force: !1 }, { forceSyncOnIOs: !0 }),
                            J({ chatId: t, threadId: n, messageId: r })
                        }, Ue)
                      : J({ chatId: t, threadId: n, messageId: r }))
              }, [Be, W, t, n, J, q, r]),
              _e = (0, a.I4)(() => {
                X({ fromChatId: t, messageIds: [r] })
              }, [X, t, r]),
              $e = (0, a.I4)(
                (e) => {
                  z(
                    { chatId: t, threadId: n, mediaId: e, avatarOwnerId: R?.id, origin: A },
                    { forceOnHeavyAnimation: !0 }
                  )
                },
                [R?.id, t, z, A, n]
              )
            ;(0, a.d4)(
              () =>
                Y
                  ? (0, c.Z)(() => {
                      Be()
                    })
                  : void 0,
              [Be, Y]
            ),
              (0, a.d4)(() => {
                de && !ve && (0, l.Es)()
              }, [ve, de])
            const je = (0, a.I4)(
                (e, t) => {
                  if (void 0 === e) return
                  const n = Ie.indexOf(e)
                  return (-1 === t && n > 0) || (1 === t && n < Ie.length - 1) ? Ie[n + t] : void 0
                },
                [Ie]
              ),
              Ge = (0, a.I4)(() => {
                if (Ie.length <= 1) return void Be()
                let e = r ? Ie.indexOf(r) : -1
                ;(e = e > 0 ? e - 1 : 0), $e(Ie[e])
              }, [Be, r, Ie, $e]),
              Ve = (0, M.Z)()
            return a.ZP.createElement(
              j.Z,
              {
                id: 'MediaViewer',
                isOpen: Y,
                isHidden: D,
                shouldAnimateFirstRender: !0,
                noCloseTransition: V,
              },
              a.ZP.createElement(
                'div',
                { className: 'media-viewer-head', dir: Ve.isRtl ? 'rtl' : void 0 },
                W &&
                  a.ZP.createElement(
                    $.Z,
                    {
                      className: 'media-viewer-close',
                      round: !0,
                      size: 'smaller',
                      color: 'translucent-white',
                      ariaLabel: Ve('Close'),
                      onClick: Be,
                    },
                    a.ZP.createElement('i', { className: 'icon-close' })
                  ),
                a.ZP.createElement(
                  G.Z,
                  { activeKey: Q.current, name: te },
                  R
                    ? a.ZP.createElement(Oe, {
                        key: r,
                        chatId: R.id,
                        isAvatar: !0,
                        isFallbackAvatar:
                          (0, o.YC)(R.id) && R.photos?.[r].id === R.fullInfo?.fallbackPhoto?.id,
                      })
                    : a.ZP.createElement(Oe, { key: r, chatId: t, messageId: r })
                ),
                a.ZP.createElement(K, {
                  mediaData: Pe,
                  isVideo: de,
                  message: L,
                  canUpdateMedia: N,
                  avatarPhoto: pe,
                  avatarOwner: R,
                  fileName: Ee,
                  canReport: Ce,
                  selectMedia: $e,
                  onBeforeDelete: Ge,
                  onReport: se,
                  onCloseMediaViewer: Be,
                  onForward: _e,
                  zoomLevelChange: oe,
                  setZoomLevelChange: re,
                }),
                a.ZP.createElement(_.Z, {
                  isOpen: ae,
                  onClose: ie,
                  subject: 'media',
                  photo: pe,
                  chatId: R?.id,
                })
              ),
              a.ZP.createElement(Le, {
                mediaId: r,
                getMediaId: je,
                chatId: t,
                isPhoto: ue,
                isGif: ve,
                threadId: n,
                avatarOwnerId: R?.id,
                origin: A,
                isOpen: Y,
                hasFooter: Fe,
                zoomLevelChange: oe,
                isVideo: de,
                animationLevel: B,
                onClose: Be,
                selectMedia: $e,
                isHidden: D,
                onFooterClick: De,
              })
            )
          })
        )
      var $e = n(60782),
        je = n(27407),
        Ge = n(72313),
        Ve = n(12515),
        ze = n(34288),
        He = n(97687),
        Xe = n(21273),
        Je = n(31876),
        qe = n(98799),
        Ye = n(6058),
        Ke = n(2995)
      const We = 2.75 * u.Gw,
        Qe = (0, a.X$)((e) => {
          let {
            isOpen: t,
            currentUserId: n,
            chatOrUserIds: s,
            chatsById: r,
            search: l,
            searchPlaceholder: c,
            loadMore: d,
            onSearchChange: u,
            onSelectChatOrUser: h,
            onClose: P,
            onCloseAnimationEnd: Z,
          } = e
          const { loadTopics: v } = (0, i.Sv)(),
            g = (0, M.Z)(),
            p = (0, a.sO)(null),
            E = (0, a.sO)(null),
            C = (0, a.sO)(null),
            b = (0, a.sO)(null),
            [f, I] = (0, je.Z)(d, s, Boolean(l)),
            [y, S] = (0, a.eJ)(void 0),
            [k, N] = (0, a.eJ)(''),
            w = y ? 1 : 0,
            T = s.indexOf(f[0]),
            A = (0, a.I4)(() => {
              u('')
            }, [u])
          ;(0, Ve.Z)(C, t && 0 === w, A), (0, Ve.Z)(b, t && 1 === w)
          const [R, L] = (0, a.Ye)(() => {
              const e = y ? r?.[y].topics : void 0
              if (!e) return [void 0, void 0]
              const t = k.toLowerCase(),
                n = e
                  ? Object.values(e).reduce(
                      (e, n) => (
                        !(0, o.Qm)(r[y], n.id) ||
                          (t && !n.title.toLowerCase().includes(t)) ||
                          (e[n.id] = n),
                        e
                      ),
                      {}
                    )
                  : e
              return [Object.keys(n).map(Number), n]
            }, [r, y, k]),
            F = (0, a.I4)(() => {
              S(void 0), N('')
            }, []),
            x = (0, a.I4)(
              (e) => {
                u(e.currentTarget.value)
              },
              [u]
            ),
            B = (0, a.I4)((e) => {
              N(e.currentTarget.value)
            }, []),
            D = (0, Ge.Z)(
              p,
              t,
              (e) => {
                if (f && f.length > 0) {
                  const t = f[-1 === e ? 0 : e],
                    n = r?.[t]
                  n?.isForum ? (n.topics || v({ chatId: t }), S(t)) : h(t)
                }
              },
              '.ListItem-button',
              !0
            ),
            O = (0, Ge.Z)(
              E,
              t,
              (e) => {
                R?.length && h(y, R[-1 === e ? 0 : e])
              },
              '.ListItem-button',
              !0
            ),
            U = (0, a.I4)(
              (e, t) => {
                const n = r?.[t]
                n?.isForum ? (n.topics || v({ chatId: t }), S(t), A()) : h(t)
              },
              [r, v, h, A]
            ),
            _ = (0, a.I4)(
              (e, t) => {
                h(y, t)
              },
              [y, h]
            )
          return a.ZP.createElement(
            J.Z,
            { isOpen: t, className: 'ChatOrUserPicker', onClose: P, onCloseAnimationEnd: Z },
            a.ZP.createElement(G.Z, { activeKey: w, name: 'slide-fade' }, () =>
              1 === w
                ? a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(
                      'div',
                      { className: 'modal-header', dir: g.isRtl ? 'rtl' : void 0 },
                      a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          color: 'translucent',
                          size: 'smaller',
                          ariaLabel: g('Back'),
                          onClick: F,
                        },
                        a.ZP.createElement('i', { className: 'icon-arrow-left' })
                      ),
                      a.ZP.createElement(He.Z, {
                        ref: b,
                        value: k,
                        onChange: B,
                        onKeyDown: O,
                        placeholder: c,
                      })
                    ),
                    a.ZP.createElement(
                      Xe.Z,
                      {
                        ref: E,
                        className: 'picker-list custom-scroll',
                        items: R,
                        withAbsolutePositioning: !0,
                        maxHeight: R ? R.length * m.rSj : 0,
                        onKeyDown: O,
                      },
                      R
                        ? R.map((e, t) =>
                            a.ZP.createElement(
                              Je.Z,
                              {
                                key: `${y}_${e}`,
                                className:
                                  'chat-item-clickable force-rounded-corners small-icon topic-item',
                                style: `top: ${t * m.rSj}px;`,
                                onClick: _,
                                clickArg: e,
                              },
                              a.ZP.createElement(Ke.Z, {
                                size: We,
                                topic: L[e],
                                className: 'topic-icon',
                                letterClassName: 'topic-icon-letter',
                              }),
                              a.ZP.createElement(
                                'div',
                                { dir: 'auto', className: 'fullName' },
                                (0, X.Z)(L[e].title)
                              )
                            )
                          )
                        : a.ZP.createElement(ze.Z, null)
                    )
                  )
                : a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(
                      'div',
                      { className: 'modal-header', dir: g.isRtl ? 'rtl' : void 0 },
                      a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          color: 'translucent',
                          size: 'smaller',
                          ariaLabel: g('Close'),
                          onClick: P,
                        },
                        a.ZP.createElement('i', { className: 'icon-close' })
                      ),
                      a.ZP.createElement(He.Z, {
                        ref: C,
                        value: l,
                        onChange: x,
                        onKeyDown: D,
                        placeholder: c,
                      })
                    ),
                    f?.length
                      ? a.ZP.createElement(
                          Xe.Z,
                          {
                            ref: p,
                            className: 'picker-list custom-scroll',
                            items: f,
                            onLoadMore: I,
                            withAbsolutePositioning: !0,
                            maxHeight: s.length * m.rSj,
                            onKeyDown: D,
                          },
                          f.map((e, t) =>
                            a.ZP.createElement(
                              Je.Z,
                              {
                                key: e,
                                className: 'chat-item-clickable force-rounded-corners small-icon',
                                style: `height: ${m.rSj}px; top: ${(T + t) * m.rSj}px;`,
                                onClick: U,
                                clickArg: e,
                              },
                              (0, o.YC)(e)
                                ? a.ZP.createElement(Ye.Z, {
                                    status: e === n ? g('SavedMessagesInfo') : void 0,
                                    userId: e,
                                  })
                                : a.ZP.createElement(qe.Z, { chatId: e })
                            )
                          )
                        )
                      : f && !f.length
                      ? a.ZP.createElement(
                          'p',
                          { className: 'no-results' },
                          g('lng_blocked_list_not_found')
                        )
                      : a.ZP.createElement(ze.Z, null)
                  )
            )
          )
        })
      var et = n(18360)
      const tt = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
              chats: { byId: t, listIds: n, orderedPinnedIds: a },
              currentUserId: s,
            } = e
            return {
              chatsById: t,
              activeListIds: n.active,
              archivedListIds: n.archived,
              pinnedIds: a.active,
              contactIds: e.contactList?.userIds,
              currentUserId: s,
            }
          })((e) => {
            let {
              isOpen: t,
              currentUserId: n,
              chatsById: s,
              activeListIds: l,
              archivedListIds: c,
              pinnedIds: d,
              contactIds: u,
              filter: h = m.F9z,
              searchPlaceholder: P,
              loadMore: Z,
              onSelectRecipient: v,
              onClose: g,
              onCloseAnimationEnd: p,
            } = e
            const E = (0, M.Z)(),
              [C, b] = (0, a.eJ)(''),
              f = (0, a.Ye)(() => {
                if (!t) return
                let e = d || []
                n && (e = (0, $e.Tw)([n, ...e]))
                const a = (0, i.Rd)(),
                  m = a.users.byId,
                  P = [...(l || []), ...((C && c) || [])].filter((e) => {
                    const t = s[e],
                      n = m[e]
                    return (!n || !(0, o.NB)(n)) && t && (0, o.Qm)(t, A._f)
                  }),
                  Z = (0, o.ih)(
                    (0, $e.Tw)([
                      ...(0, o.$l)(E, P, s, C, n),
                      ...(u && h.includes('users') ? (0, o.kK)(u, m, C) : []),
                    ]),
                    s,
                    void 0,
                    e
                  )
                return (0, r.JR)(a, Z, h)
              }, [d, n, l, C, c, E, s, u, h, t]),
              I = (0, et.Z)(f, !0)
            return a.ZP.createElement(Qe, {
              isOpen: t,
              chatOrUserIds: I,
              chatsById: s,
              searchPlaceholder: P,
              search: C,
              onSearchChange: b,
              loadMore: Z,
              onSelectChatOrUser: v,
              onClose: g,
              onCloseAnimationEnd: p,
            })
          })
        ),
        nt = (0, a.X$)(
          (0, i.c$)((e) => ({
            currentUserId: e.currentUserId,
            isManyMessages: ((0, r.jU)(e).forwardMessages.messageIds?.length || 0) > 1,
          }))((e) => {
            let { isOpen: t, currentUserId: n, isManyMessages: s } = e
            const {
                setForwardChatOrTopic: o,
                exitForwardMode: r,
                forwardToSavedMessages: l,
                showNotification: c,
              } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u, h] = (0, I.Z)()
            ;(0, a.d4)(() => {
              t && u()
            }, [t, u])
            const P = (0, a.I4)(
                (e, t) => {
                  e === n
                    ? (l(),
                      c({
                        message: d(
                          s
                            ? 'Conversation.ForwardTooltip.SavedMessages.Many'
                            : 'Conversation.ForwardTooltip.SavedMessages.One'
                        ),
                      }))
                    : o({ chatId: e, topicId: t })
                },
                [n, l, s, d, o, c]
              ),
              Z = (0, a.I4)(() => {
                r()
              }, [r])
            if (t || m)
              return a.ZP.createElement(tt, {
                isOpen: t,
                searchPlaceholder: d('ForwardTo'),
                onSelectRecipient: P,
                onClose: Z,
                onCloseAnimationEnd: h,
              })
          })
        ),
        at = (0, a.X$)((e) => {
          let { requestedDraft: t } = e
          const n = Boolean(t && !t.chatId),
            { openChatWithDraft: s, resetOpenChatWithDraft: o } = (0, i.Sv)(),
            r = (0, M.Z)(),
            [l, c, d] = (0, I.Z)()
          ;(0, a.d4)(() => {
            n && c()
          }, [n, c])
          const m = (0, a.I4)(
              (e, n) => {
                s({ chatId: e, threadId: n, text: t.text, files: t.files })
              },
              [s, t]
            ),
            u = (0, a.I4)(() => {
              o()
            }, [o])
          if (n || l)
            return a.ZP.createElement(tt, {
              isOpen: n,
              searchPlaceholder: r('ForwardTo'),
              onSelectRecipient: m,
              onClose: u,
              onCloseAnimationEnd: d,
            })
        }),
        st = (0, a.X$)((e) => {
          let { requestedAttachBotInChat: t } = e
          const { cancelAttachBotInChat: n, callAttachBot: s } = (0, i.Sv)(),
            o = (0, M.Z)(),
            r = Boolean(t),
            [l, c, d] = (0, I.Z)()
          ;(0, a.d4)(() => {
            r && c()
          }, [r, c])
          const { bot: m, filter: u, startParam: h } = t || {},
            P = (0, a.I4)(
              (e) => {
                s({ bot: m, chatId: e, startParam: h }), n()
              },
              [m, s, n, h]
            )
          if (r || l)
            return a.ZP.createElement(tt, {
              isOpen: r,
              searchPlaceholder: o('Search'),
              filter: u,
              onSelectRecipient: P,
              onClose: n,
              onCloseAnimationEnd: d,
            })
        })
      var it = n(91947)
      function ot(e) {
        return e.isSlowMode
          ? 'Slowmode enabled'
          : e.hasErrorKey
          ? 'Something went wrong'
          : 'Telegram'
      }
      const rt = (0, a.X$)(
        (0, i.c$)((e) => ({
          dialogs: (0, r.jU)(e).dialogs,
          animationLevel: e.settings.byKey.animationLevel,
        }))((e) => {
          let { dialogs: t, animationLevel: n } = e
          const {
              dismissDialog: s,
              acceptInviteConfirmation: o,
              sendMessage: r,
              showNotification: l,
            } = (0, i.Sv)(),
            [c, d, m] = (0, I.Z)(),
            u = (0, M.Z)()
          var h, P, Z
          if (
            ((0, a.d4)(() => {
              t.length > 0 && d()
            }, [t, d]),
            t.length)
          )
            return a.ZP.createElement(
              'div',
              { id: 'Dialogs' },
              Boolean(t.length) &&
                ('hash' in (h = t[t.length - 1])
                  ? ((e) => {
                      const {
                          hash: t,
                          title: n,
                          about: i,
                          participantsCount: r,
                          isChannel: d,
                          photo: h,
                          isRequestNeeded: P,
                        } = e,
                        Z = u(d ? 'Subscribers' : 'Members', r, 'i'),
                        g = u(d ? 'ChannelJoin' : 'JoinGroup'),
                        p = u(
                          d
                            ? 'MemberRequests.RequestToJoinChannel'
                            : 'MemberRequests.RequestToJoinGroup'
                        )
                      return a.ZP.createElement(
                        J.Z,
                        {
                          isOpen: c,
                          onClose: m,
                          className: 'error',
                          header: v(n, h),
                          onCloseAnimationEnd: s,
                        },
                        void 0 !== r && a.ZP.createElement('p', { className: 'modal-help' }, Z),
                        i &&
                          a.ZP.createElement(
                            'p',
                            { className: 'modal-about' },
                            (0, X.Z)(i, ['br'])
                          ),
                        P &&
                          a.ZP.createElement(
                            'p',
                            { className: 'modal-help' },
                            u(
                              d
                                ? 'MemberRequests.RequestToJoinDescriptionChannel'
                                : 'MemberRequests.RequestToJoinDescriptionGroup'
                            )
                          ),
                        a.ZP.createElement(
                          'div',
                          { className: 'dialog-buttons mt-2' },
                          a.ZP.createElement(
                            $.Z,
                            {
                              isText: !0,
                              className: 'confirm-dialog-button',
                              onClick: () => {
                                o({ hash: t }),
                                  P &&
                                    l({
                                      message: u(
                                        d
                                          ? 'RequestToJoinChannelSentDescription'
                                          : 'RequestToJoinGroupSentDescription'
                                      ),
                                    }),
                                  m()
                              },
                            },
                            P ? p : g
                          ),
                          a.ZP.createElement(
                            $.Z,
                            { isText: !0, className: 'confirm-dialog-button', onClick: m },
                            u('Cancel')
                          )
                        )
                      )
                    })(h)
                  : 'phoneNumber' in h
                  ? ((P = h),
                    a.ZP.createElement(
                      J.Z,
                      {
                        isOpen: c,
                        onClose: m,
                        className: 'confirm',
                        title: u('ShareYouPhoneNumberTitle'),
                        onCloseAnimationEnd: s,
                      },
                      u('AreYouSureShareMyContactInfoBot'),
                      a.ZP.createElement(
                        'div',
                        { className: 'dialog-buttons mt-2' },
                        a.ZP.createElement(
                          $.Z,
                          {
                            className: 'confirm-dialog-button',
                            isText: !0,
                            onClick: () => {
                              r({
                                contact: (0, $e.ei)(P, ['firstName', 'lastName', 'phoneNumber']),
                              }),
                                m()
                            },
                          },
                          u('OK')
                        ),
                        a.ZP.createElement(
                          $.Z,
                          { className: 'confirm-dialog-button', isText: !0, onClick: m },
                          u('Cancel')
                        )
                      )
                    ))
                  : ((Z = h),
                    a.ZP.createElement(
                      J.Z,
                      {
                        isOpen: c,
                        onClose: m,
                        onCloseAnimationEnd: s,
                        className: 'error',
                        title: ot(Z),
                      },
                      Z.hasErrorKey
                        ? (0, it.ZP)(Z)
                        : (0, X.Z)(Z.message, ['simple_markdown', 'emoji', 'br']),
                      a.ZP.createElement(
                        'div',
                        { className: 'dialog-buttons mt-2' },
                        a.ZP.createElement($.Z, { isText: !0, onClick: m }, u('OK'))
                      )
                    )))
            )
          function v(e, t) {
            return a.ZP.createElement(
              'div',
              { className: 'modal-header' },
              t &&
                a.ZP.createElement(De.Z, {
                  size: 'small',
                  photo: t,
                  animationLevel: n,
                  withVideo: !0,
                }),
              a.ZP.createElement('div', { className: 'modal-title' }, (0, X.Z)(e)),
              a.ZP.createElement(
                $.Z,
                {
                  round: !0,
                  color: 'translucent',
                  size: 'smaller',
                  ariaLabel: u('Close'),
                  onClick: m,
                },
                a.ZP.createElement('i', { className: 'icon-close' })
              )
            )
          }
        })
      )
      var lt = n(96937)
      const ct = (0, a.X$)(
        (0, i.c$)((e) => (0, $e.ei)((0, r.jU)(e), ['notifications']))((e) => {
          let { notifications: t } = e
          const { dismissNotification: n } = (0, i.Sv)()
          if (t.length)
            return a.ZP.createElement(
              'div',
              { id: 'Notifications' },
              t.map((e) => {
                let { message: t, className: s, localId: i, action: o, actionText: r, title: l } = e
                return a.ZP.createElement(lt.Z, {
                  title: l ? (0, X.Z)(l, ['simple_markdown', 'emoji', 'br', 'links']) : void 0,
                  action: o,
                  actionText: r,
                  className: s,
                  message: (0, X.Z)(t, ['simple_markdown', 'emoji', 'br', 'links']),
                  onDismiss: () => n({ localId: i }),
                })
              })
            )
        })
      )
      var dt = n(81396),
        mt = n(17551)
      const ut = (0, a.X$)((e) => {
        let { url: t } = e
        const { toggleSafeLinkModal: n } = (0, i.Sv)(),
          s = (0, M.Z)(),
          o = (0, a.I4)(() => {
            window.open((0, dt.X)(t), '_blank', 'noopener'), n({ url: void 0 })
          }, [n, t]),
          r = (0, a.I4)(() => {
            n({ url: void 0 })
          }, [n]),
          l = (0, et.Z)(t)
        return a.ZP.createElement(mt.Z, {
          isOpen: Boolean(t),
          onClose: r,
          title: s('OpenUrlTitle'),
          textParts: (0, X.Z)(s('OpenUrlAlert2', l), ['links']),
          confirmLabel: s('OpenUrlTitle'),
          confirmHandler: o,
        })
      })
      var ht = n(14605)
      const Pt = 'XxZ7KIBUQzsSYf8KZiIc',
        Zt = (0, a.X$)((e) => {
          let { urlAuth: t, currentUser: n } = e
          const { closeUrlAuthModal: s, acceptBotUrlAuth: r, acceptLinkUrlAuth: l } = (0, i.Sv)(),
            [c, d] = (0, a.eJ)(!0),
            [m, u] = (0, a.eJ)(!0),
            h = (0, et.Z)(t, !1),
            { domain: P, botId: Z, shouldRequestWriteAccess: v } = h?.request || {},
            g = Z ? (0, i.Rd)().users.byId[Z] : void 0,
            p = (0, M.Z)(),
            E = (0, a.I4)(() => {
              t?.url && c
                ? (t.button ? r : l)({ isWriteAllowed: m })
                : window.open((0, dt.X)(h?.url), '_blank', 'noopener'),
                s()
            }, [t, c, s, r, l, m, h]),
            C = (0, a.I4)(() => {
              s()
            }, [s]),
            b = (0, a.I4)(
              (e) => {
                d(e), u(e)
              },
              [d]
            )
          return (
            (0, a.d4)(() => {
              P && (d(!0), u(Boolean(v)))
            }, [v, P]),
            a.ZP.createElement(
              mt.Z,
              {
                isOpen: Boolean(t?.url),
                onClose: C,
                title: p('OpenUrlTitle'),
                confirmLabel: p('OpenUrlTitle'),
                confirmHandler: E,
              },
              (0, X.Z)(p('OpenUrlAlert2', h?.url), ['links']),
              P &&
                a.ZP.createElement(ht.Z, {
                  checked: c,
                  label: a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    (0, X.Z)(p('Conversation.OpenBotLinkLogin', [P, (0, o.Js)(n)]), [
                      'simple_markdown',
                    ])
                  ),
                  onCheck: b,
                  className: Pt,
                }),
              v &&
                a.ZP.createElement(ht.Z, {
                  checked: m,
                  label: a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    (0, X.Z)(p('Conversation.OpenBotLinkAllowMessages', (0, o.Js)(g)), [
                      'simple_markdown',
                    ])
                  ),
                  onCheck: u,
                  disabled: !c,
                  className: Pt,
                })
            )
          )
        }),
        vt = 1e3 * m.PT8,
        gt = [
          'lng_weekday1',
          'lng_weekday2',
          'lng_weekday3',
          'lng_weekday4',
          'lng_weekday5',
          'lng_weekday6',
          'lng_weekday7',
        ]
      function pt(e, t, n, a, s) {
        const i = new Date(e, t, n),
          o = a && (0, Pe.$Y)(a),
          r = s && (0, Pe.$Y)(s)
        return !!(r && i > r) || !!(o && i < o)
      }
      function Et(e) {
        return String(e).padStart(2, '0')
      }
      function Ct(e, t, n) {
        return `${e}-${t + 1}-${n}`
      }
      const bt = (0, a.X$)((e) => {
          let {
            selectedAt: t,
            minAt: n,
            maxAt: s,
            isFutureMode: i,
            isPastMode: o,
            isOpen: r,
            withTimePicker: l,
            submitButtonLabel: c,
            secondButtonLabel: d,
            onClose: m,
            onSubmit: u,
            onSecondButtonClick: h,
          } = e
          const P = (0, M.Z)(),
            Z = new Date(),
            v = (0, a.Ye)(() => (i && !n ? new Date() : new Date(Math.max(n || 0, 0))), [i, n]),
            g = (0, a.Ye)(() => (o && !s ? new Date() : new Date(Math.min(s || vt, vt))), [o, s]),
            p = (0, a.Ye)(() => (t ? new Date(t) : new Date()), [t]),
            E = (0, T.Z)(r),
            [C, b, f] = (0, I.Z)(!1),
            [y, S] = (0, a.eJ)(p),
            [k, N] = (0, a.eJ)(new Date(y.getFullYear(), y.getMonth(), 1)),
            [w, A] = (0, a.eJ)(Et(p.getHours())),
            [R, L] = (0, a.eJ)(Et(p.getMinutes())),
            F = Ct(y.getFullYear(), y.getMonth(), y.getDate()),
            x = k.getFullYear(),
            B = k.getMonth()
          ;(0, a.d4)(() => {
            !E &&
              r &&
              (S(p),
              N(new Date(p.getFullYear(), p.getMonth(), 1)),
              l && (A(Et(p.getHours())), L(Et(p.getMinutes()))))
          }, [p, r, E, l]),
            (0, a.d4)(() => {
              i &&
                !C &&
                y.getTime() < v.getTime() &&
                (S(v), A(Et(v.getHours())), L(Et(v.getMinutes())))
            }, [i, C, v, y]),
            (0, a.d4)(() => {
              o &&
                !C &&
                y.getTime() > g.getTime() &&
                (S(g), A(Et(g.getHours())), L(Et(g.getMinutes())))
            }, [i, o, C, g, v, y]),
            (0, a.d4)(() => {
              if (t) {
                const e = new Date(t)
                S(e), A(Et(e.getHours())), L(Et(e.getMinutes()))
              }
            }, [t])
          const D =
              (o && x >= Z.getFullYear() && B >= Z.getMonth()) ||
              (g && x >= g.getFullYear() && B >= g.getMonth()),
            O = i && x <= Z.getFullYear() && B <= Z.getMonth(),
            {
              prevMonthGrid: U,
              currentMonthGrid: _,
              nextMonthGrid: j,
            } = (0, a.Ye)(
              () =>
                (function (e, t) {
                  const n = [],
                    a = [],
                    s = [],
                    i = new Date()
                  i.setDate(1), i.setMonth(t), i.setFullYear(e)
                  const o = i.getDay() || 7,
                    r = new Date(e, t, 0).getDate()
                  for (let e = 1; e < o; e++) n.push(r - o + e + 1)
                  for (; i.getMonth() === t; ) {
                    const e = i.getDate()
                    a.push(e), i.setDate(e + 1)
                  }
                  const l = (a.length + n.length) % 7
                  if (l > 0) for (let e = 1; e <= 7 - l; e++) s.push(e)
                  return { prevMonthGrid: n, currentMonthGrid: a, nextMonthGrid: s }
                })(x, B),
              [B, x]
            ),
            G = (0, a.Ye)(
              () =>
                c ||
                (function (e, t) {
                  const n = (0, Pe.xH)(t, e.code)
                  return n === (0, Pe.xH)(new Date(), e.code)
                    ? e('Conversation.ScheduleMessage.SendToday', (0, Pe.mr)(e, t))
                    : e('Conversation.ScheduleMessage.SendOn', [n, (0, Pe.mr)(e, t)])
                })(P, y),
              [P, y, c]
            ),
            V = (0, a.I4)(() => {
              u(y)
            }, [u, y]),
            z = (0, a.I4)(
              (e) => {
                const t = e.target.value.replace(/[^\d]+/g, '')
                if (!t.length) return A(''), void (e.target.value = '')
                const n = Math.max(0, Math.min(Number(t), 23)),
                  a = new Date(y.getTime())
                a.setHours(n), S(a)
                const s = Et(n)
                A(s), (e.target.value = s)
              },
              [y]
            ),
            H = (0, a.I4)(
              (e) => {
                const t = e.target.value.replace(/[^\d]+/g, '')
                if (!t.length) return L(''), void (e.target.value = '')
                const n = Math.max(0, Math.min(Number(t), 59)),
                  a = new Date(y.getTime())
                a.setMinutes(n), S(a)
                const s = Et(n)
                L(s), (e.target.value = s)
              },
              [y]
            )
          return a.ZP.createElement(
            J.Z,
            { isOpen: r, onClose: m, className: 'CalendarModal', onEnter: V },
            a.ZP.createElement(
              'div',
              { className: 'container' },
              a.ZP.createElement(
                'div',
                { className: 'month-selector' },
                a.ZP.createElement(
                  $.Z,
                  { round: !0, size: 'smaller', color: 'translucent', onClick: m },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                a.ZP.createElement('h4', null, P(`lng_month${B + 1}`), ' ', x),
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    disabled: O,
                    onClick: O
                      ? void 0
                      : function () {
                          N((e) => {
                            const t = new Date(e)
                            return t.setMonth(t.getMonth() - 1), t
                          })
                        },
                  },
                  a.ZP.createElement('i', { className: 'icon-previous' })
                ),
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    disabled: D,
                    onClick: D
                      ? void 0
                      : function () {
                          N((e) => {
                            const t = new Date(e)
                            return t.setMonth(t.getMonth() + 1), t
                          })
                        },
                  },
                  a.ZP.createElement('i', { className: 'icon-next' })
                )
              )
            ),
            a.ZP.createElement(
              'div',
              { className: 'calendar-wrapper' },
              a.ZP.createElement(
                'div',
                { className: 'calendar-grid' },
                gt.map((e) =>
                  a.ZP.createElement(
                    'div',
                    { className: 'day-button faded weekday' },
                    a.ZP.createElement('span', null, P(e))
                  )
                ),
                U.map((e) =>
                  a.ZP.createElement(
                    'div',
                    { className: 'day-button disabled' },
                    a.ZP.createElement('span', null, e)
                  )
                ),
                _.map((e) =>
                  a.ZP.createElement(
                    'div',
                    {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => {
                        return (
                          (t = e),
                          void S((e) => {
                            const n = new Date(e)
                            return n.setDate(t), n.setMonth(B), n.setFullYear(x), n
                          })
                        )
                        var t
                      },
                      className: (0, Q.Z)(
                        'day-button',
                        pt(x, B, e, v, g) ? 'disabled' : e ? 'clickable' : '',
                        F === Ct(x, B, e) && 'selected'
                      ),
                    },
                    Boolean(e) && a.ZP.createElement('span', null, e)
                  )
                ),
                j.map((e) =>
                  a.ZP.createElement(
                    'div',
                    { className: 'day-button disabled' },
                    a.ZP.createElement('span', null, e)
                  )
                )
              )
            ),
            l &&
              a.ZP.createElement(
                'div',
                { className: 'timepicker' },
                a.ZP.createElement('input', {
                  type: 'text',
                  className: 'form-control',
                  inputMode: 'decimal',
                  value: w,
                  onChange: z,
                  onFocus: b,
                  onBlur: f,
                }),
                ':',
                a.ZP.createElement('input', {
                  type: 'text',
                  className: 'form-control',
                  inputMode: 'decimal',
                  value: R,
                  onChange: H,
                  onFocus: b,
                  onBlur: f,
                })
              ),
            a.ZP.createElement(
              'div',
              { className: 'footer' },
              a.ZP.createElement($.Z, { onClick: V }, G),
              d && a.ZP.createElement($.Z, { onClick: h, isText: !0 }, d)
            )
          )
        }),
        ft = (0, a.X$)(
          (0, i.c$)((e) => ({ selectedAt: (0, r.jU)(e).historyCalendarSelectedAt }))((e) => {
            let { isOpen: t, selectedAt: n } = e
            const { searchMessagesByDate: s, closeHistoryCalendar: o } = (0, i.Sv)(),
              r = (0, a.I4)(
                (e) => {
                  s({ timestamp: e.valueOf() / 1e3 }), o()
                },
                [o, s]
              ),
              l = (0, M.Z)()
            return a.ZP.createElement(bt, {
              isOpen: t,
              selectedAt: n,
              isPastMode: !0,
              submitButtonLabel: l('JumpToDate'),
              onClose: o,
              onSubmit: r,
            })
          })
        )
      var It = n(6272)
      const yt = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { userId: n } = t
          return {
            user: n ? (0, r.dy)(e, n) : void 0,
            userStatus: n ? (0, r.ss)(e, n) : void 0,
            phoneCodeList: e.countryList.phoneCodes,
          }
        })((e) => {
          var t, n, s
          let {
            isOpen: r,
            userId: l,
            isByPhoneNumber: c,
            user: m,
            userStatus: u,
            phoneCodeList: h,
          } = e
          const { updateContact: P, importContact: Z, closeNewContactDialog: v } = (0, i.Sv)(),
            g = (0, M.Z)(),
            p = (0, et.Z)(m),
            E = (0, et.Z)(c),
            C = (0, a.sO)(null),
            [b, f, y] = (0, I.Z)(),
            [S, k] = (0, a.eJ)(null !== (t = p?.firstName) && void 0 !== t ? t : ''),
            [N, w] = (0, a.eJ)(null !== (n = p?.lastName) && void 0 !== n ? n : ''),
            [T, A] = (0, a.eJ)(null !== (s = p?.phoneNumber) && void 0 !== s ? s : ''),
            [R, L] = (0, a.eJ)(!0),
            F = Boolean(S && (!c || T))
          ;(0, a.d4)(() => {
            var e, t, n
            r &&
              (f(),
              k(null !== (e = p?.firstName) && void 0 !== e ? e : ''),
              w(null !== (t = p?.lastName) && void 0 !== t ? t : ''),
              A(null !== (n = p?.phoneNumber) && void 0 !== n ? n : ''),
              L(!0))
          }, [r, f, p?.firstName, p?.lastName, p?.phoneNumber]),
            (0, a.d4)(() => {
              !d.$b &&
                b &&
                setTimeout(() => {
                  C.current?.focus()
                }, 200)
            }, [b])
          const x = (0, a.I4)((e) => {
              k(e.target.value)
            }, []),
            B = (0, a.I4)(
              (e) => {
                A((0, It.WZ)(h, e.target.value))
              },
              [h]
            ),
            D = (0, a.I4)((e) => {
              w(e.target.value)
            }, []),
            O = (0, a.I4)(() => {
              v(), k(''), w(''), A('')
            }, [v]),
            U = (0, a.I4)(() => {
              c || !l
                ? Z({ firstName: S, lastName: N, phoneNumber: T })
                : P({ userId: l, firstName: S, lastName: N, shouldSharePhoneNumber: R })
            }, [S, Z, c, N, T, R, P, l])
          if (r || b)
            return a.ZP.createElement(
              J.Z,
              {
                className: 'NewContactModal',
                title: g('NewContact'),
                isOpen: r,
                onClose: O,
                onCloseAnimationEnd: y,
              },
              p &&
                a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement(
                    'div',
                    { className: 'NewContactModal__profile', dir: g.isRtl ? 'rtl' : void 0 },
                    a.ZP.createElement(De.Z, { size: 'jumbo', user: p, text: `${S} ${N}` }),
                    a.ZP.createElement(
                      'div',
                      { className: 'NewContactModal__profile-info' },
                      a.ZP.createElement(
                        'p',
                        { className: 'NewContactModal__phone-number' },
                        p?.phoneNumber ? (0, It.WZ)(h, p.phoneNumber) : g('MobileHidden')
                      ),
                      a.ZP.createElement(
                        'span',
                        { className: 'NewContactModal__user-status', dir: 'auto' },
                        (0, o.Tq)(g, p, u)
                      )
                    )
                  ),
                  a.ZP.createElement(He.Z, {
                    ref: C,
                    value: S,
                    label: g('FirstName'),
                    tabIndex: 0,
                    onChange: x,
                  }),
                  a.ZP.createElement(He.Z, {
                    value: N,
                    label: g('LastName'),
                    tabIndex: 0,
                    onChange: D,
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'NewContactModal__help-text' },
                    (0, X.Z)(g('NewContact.Phone.Hidden.Text', p?.firstName || ''), [
                      'emoji',
                      'simple_markdown',
                    ])
                  ),
                  a.ZP.createElement(ht.Z, {
                    checked: R,
                    tabIndex: 0,
                    onCheck: L,
                    label: g('lng_new_contact_share'),
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'NewContactModal__help-text' },
                    (0, X.Z)(g('AddContact.SharedContactExceptionInfo', p?.firstName))
                  )
                ),
              E &&
                a.ZP.createElement(
                  'div',
                  { className: 'NewContactModal__new-contact', dir: g.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(De.Z, { size: 'jumbo', text: `${S} ${N}` }),
                  a.ZP.createElement(
                    'div',
                    { className: 'NewContactModal__new-contact-fieldset' },
                    a.ZP.createElement(He.Z, {
                      ref: C,
                      value: T,
                      inputMode: 'tel',
                      label: g('lng_contact_phone'),
                      tabIndex: 0,
                      onChange: B,
                    }),
                    a.ZP.createElement(He.Z, {
                      value: S,
                      label: g('FirstName'),
                      tabIndex: 0,
                      onChange: x,
                    }),
                    a.ZP.createElement(He.Z, {
                      value: N,
                      label: g('LastName'),
                      tabIndex: 0,
                      onChange: D,
                    })
                  )
                ),
              a.ZP.createElement(
                'div',
                { className: 'dialog-buttons' },
                a.ZP.createElement(
                  $.Z,
                  { isText: !0, className: 'confirm-dialog-button', onClick: O },
                  g('Cancel')
                ),
                a.ZP.createElement(
                  $.Z,
                  { isText: !0, className: 'confirm-dialog-button', disabled: !F, onClick: U },
                  g('Done')
                )
              )
            )
        })
      )
      var St = n(18629),
        kt = n(62357)
      const Nt = [
          'allow-scripts',
          'allow-same-origin',
          'allow-popups',
          'allow-forms',
          'allow-modals',
          'allow-storage-access-by-user-activation',
        ].join(' '),
        wt = { ok: 'OK', cancel: 'Cancel', close: 'Close' },
        Mt = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { webApp: n } = t
            const { botId: a } = n || {},
              s = a ? e.attachMenu.bots[a] : void 0,
              i = a ? (0, r.dy)(e, a) : void 0,
              o = (0, r.jr)(e),
              l = (0, r.Pu)(e),
              { isPaymentModalOpen: c, status: d } = (0, r.jU)(e).payment
            return {
              attachBot: s,
              bot: i,
              chat: o,
              theme: l,
              isPaymentModalOpen: c,
              paymentStatus: d,
            }
          })((e) => {
            let {
              webApp: t,
              chat: n,
              bot: s,
              attachBot: o,
              theme: r,
              isPaymentModalOpen: l,
              paymentStatus: c,
            } = e
            const {
                closeWebApp: d,
                sendWebViewData: u,
                prolongWebView: h,
                toggleAttachBot: P,
                openTelegramLink: Z,
                openChat: v,
                openInvoice: g,
                setWebAppPaymentSlug: p,
                showNotification: E,
              } = (0, i.Sv)(),
              [C, b] = (0, a.eJ)(),
              [f, y] = (0, a.eJ)(!1),
              [S, k] = (0, a.eJ)((0, St.BS)().bg_color),
              [N, w] = (0, a.eJ)((0, St.BS)().bg_color),
              [A, R] = (0, a.eJ)(!1),
              [L, F, B] = (0, I.Z)(!1),
              [D, O, _] = (0, I.Z)(!1),
              [j, G] = (0, a.eJ)(),
              { isMobile: H } = (0, U.ZP)(),
              X = (0, T.Z)(j),
              q = j || X,
              Y = (0, a.sO)(null),
              K = (0, M.Z)(),
              { url: W, buttonText: ee, queryId: te, replyToMessageId: ne, threadId: ae } = t || {},
              se = Boolean(W),
              oe = !te,
              re = (0, a.I4)(
                (e) => {
                  const { eventType: t, eventData: n } = e
                  if (
                    ('web_app_close' === t && d(),
                    'web_app_open_invoice' === t && (p({ slug: n.slug }), g({ slug: n.slug })),
                    'web_app_open_tg_link' === t && !l)
                  ) {
                    const e = m.zHP + n.path_full
                    Z({ url: e }), d()
                  }
                  if ('web_app_open_link' === t) {
                    const e = n.url
                    window.open(e, '_blank', 'noreferrer')
                  }
                  if (
                    ('web_app_setup_back_button' === t && y(n.is_visible),
                    'web_app_set_background_color' === t)
                  ) {
                    const e = (0, St.BS)(),
                      t = (0, St.Uq)(n.color) ? n.color : e.bg_color
                    k(t)
                  }
                  if ('web_app_set_header_color' === t) {
                    const e = (0, St.BS)(),
                      t = e[n.color_key],
                      a = (0, St.Uq)(t) ? t : e.bg_color
                    w(a)
                  }
                  if (
                    ('web_app_data_send' === t &&
                      (d(), u({ bot: s, buttonText: ee, data: n.data })),
                    'web_app_setup_main_button' === t)
                  ) {
                    const e = (0, St.BS)(),
                      t = (0, St.Uq)(n.color) ? n.color : e.button_color,
                      a = (0, St.Uq)(n.text_color) ? n.text_color : e.text_color
                    b({
                      isVisible: n.is_visible && Boolean(n.text?.trim().length),
                      isActive: n.is_active,
                      text: n.text || '',
                      color: t,
                      textColor: a,
                      isProgressVisible: n.is_progress_visible,
                    })
                  }
                  if (
                    ('web_app_setup_closing_behavior' === t && R(n.need_confirmation),
                    'web_app_open_popup' === t)
                  ) {
                    if (!n.message.trim().length || !n.buttons?.length || n.buttons.length > 3)
                      return
                    G(n)
                  }
                  'web_app_open_scan_qr_popup' === t &&
                    E({ message: 'Scan QR code is not supported in this client yet' })
                },
                [s, ee, d, g, Z, u, p, l, E]
              ),
              {
                reloadFrame: le,
                sendEvent: de,
                sendViewport: me,
                sendTheme: ue,
              } = ((e, t, n, s, i) => {
                const o = (0, a.sO)(!1),
                  r = (0, a.sO)(),
                  l = (0, ie.Z)()
                ;(0, a.d4)(() => {
                  if (!e.current || !t) return
                  const n = () => {
                      i?.()
                    },
                    a = e.current
                  return (
                    a.addEventListener('load', n),
                    () => {
                      a.removeEventListener('load', n)
                    }
                  )
                }, [i, e, t])
                const c = (0, a.I4)(
                    (t) => {
                      if (!e.current) return
                      const n = e.current
                      ;(n.src = 'about:blank'),
                        n.addEventListener(
                          'load',
                          () => {
                            n.src = t
                          },
                          { once: !0 }
                        )
                    },
                    [e]
                  ),
                  d = (0, a.I4)(
                    (t) => {
                      e.current?.contentWindow &&
                        e.current.contentWindow.postMessage(JSON.stringify(t), '*')
                    },
                    [e]
                  ),
                  m = (0, a.I4)(
                    (t) => {
                      if (!e.current) return
                      const { width: n, height: a } = e.current.getBoundingClientRect()
                      d({
                        eventType: 'viewport_changed',
                        eventData: { width: n, height: a, is_expanded: !0, is_state_stable: !t },
                      })
                    },
                    [d, e]
                  ),
                  u = (0, a.I4)(() => {
                    d({ eventType: 'theme_changed', eventData: { theme_params: (0, St.BS)() } })
                  }, [d]),
                  h = (0, a.I4)(
                    (e) => {
                      d({ eventType: 'set_custom_style', eventData: e })
                    },
                    [d]
                  ),
                  P = (0, a.I4)(
                    (e) => {
                      if (!o.current)
                        try {
                          const t = JSON.parse(e.data)
                          if (
                            ('web_app_ready' === t.eventType && i?.(),
                            'web_app_request_viewport' === t.eventType && m(l.isResizing),
                            'web_app_request_theme' === t.eventType && u(),
                            'iframe_ready' === t.eventType)
                          ) {
                            const e = getComputedStyle(document.body).getPropertyValue(
                              '--color-scrollbar'
                            )
                            h(
                              '* {\n  scrollbar-width: thin;\n  scrollbar-color: %SCROLLBAR_COLOR% transparent;\n}\n\n*::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: transparent;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n  background-color: %SCROLLBAR_COLOR%;\n}\n\n*::-webkit-scrollbar-corner {\n  background-color: transparent;\n}'.replace(
                                /%SCROLLBAR_COLOR%/g,
                                e
                              )
                            )
                          }
                          if ('web_app_data_send' === t.eventType) {
                            if (!n) return
                            o.current = !0
                          }
                          if ('web_app_read_text_from_clipboard' === t.eventType) {
                            const { req_id: e } = t.eventData
                            window.navigator.clipboard
                              .readText()
                              .catch(() => null)
                              .then((t) => {
                                d({
                                  eventType: 'clipboard_text_received',
                                  eventData: { req_id: e, data: t },
                                })
                              })
                          }
                          s(t)
                        } catch (e) {}
                    },
                    [n, s, h, d, u, m, i, l.isResizing]
                  )
                return (
                  (0, a.d4)(() => {
                    const { width: e, height: t, isResizing: n } = l
                    ;(r.current &&
                      r.current.width === e &&
                      r.current.height === t &&
                      !r.current.isResizing) ||
                      ((r.current = { width: e, height: t, isResizing: n }), m(n))
                  }, [m, l]),
                  (0, a.d4)(
                    () => (
                      window.addEventListener('message', P),
                      () => window.removeEventListener('message', P)
                    ),
                    [P]
                  ),
                  (0, a.d4)(() => {
                    t && e.current?.contentWindow ? (m(), (o.current = !1)) : (r.current = void 0)
                  }, [t, m, e]),
                  { sendEvent: d, reloadFrame: c, sendViewport: m, sendTheme: u }
                )
              })(Y, se, oe, re, O),
              he = C?.isVisible && C.text.trim().length > 0
            ;(0, kt.Z)(
              () => {
                h({ botId: s.id, queryId: te, peerId: n.id, replyToMessageId: ne, threadId: ae })
              },
              te ? 45e3 : void 0,
              !0
            )
            const Pe = (0, a.I4)(() => {
                de({ eventType: 'main_button_pressed' })
              }, [de]),
              Ze = (0, a.I4)(() => {
                de({ eventType: 'settings_button_pressed' })
              }, [de]),
              ve = (0, a.I4)(() => {
                le(t.url)
              }, [le, t]),
              ge = (0, a.I4)(() => {
                A ? F() : d()
              }, [A, F, d]),
              pe = (0, a.I4)(
                (e) => {
                  G(void 0), de({ eventType: 'popup_closed', eventData: { button_id: e } })
                },
                [de]
              ),
              Ee = (0, a.I4)(() => {
                pe()
              }, [pe])
            ;(0, x.Z)(() => {
              setTimeout(() => {
                me()
              }, 400)
            }, [C?.isVisible, me]),
              (0, x.Z)(() => {
                setTimeout(() => {
                  ue()
                }, 400)
              }, [r, ue]),
              (0, x.Z)(
                (e) => {
                  let [n] = e
                  l !== n &&
                    t?.slug &&
                    !l &&
                    c &&
                    (de({ eventType: 'invoice_closed', eventData: { slug: t.slug, status: c } }),
                    p({ slug: void 0 }))
                },
                [l, c, de, p, t]
              )
            const Ce = (0, a.I4)(() => {
                P({ botId: s.id, isEnabled: !o })
              }, [s, o, P]),
              be = (0, a.I4)(() => {
                f ? de({ eventType: 'back_button_pressed' }) : ge()
              }, [ge, f, de]),
              fe = (0, a.I4)(() => {
                v({ id: s.id }), d()
              }, [s, d, v])
            ;(0, a.d4)(() => {
              se || (R(!1), B(), G(void 0), _())
            }, [B, se, _])
            const Ie = (0, a.Ye)(
                () => (e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      ripple: !H,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : '',
                      onClick: t,
                      ariaLabel: 'More actions',
                    },
                    a.ZP.createElement('i', { className: 'icon-more' })
                  )
                },
                [H]
              ),
              ye = (0, Q.Z)('E9BBt8AWQ1LGCzqQYN0D', f && 'Skbl2Bsgn5Ev9sxPJaZ1'),
              Se = (0, T.Z)(C?.color, !0),
              ke = (0, T.Z)(C?.textColor, !0),
              Ne = (0, T.Z)(C && Boolean(C.isActive), !0),
              we = (0, T.Z)(C?.text, !0),
              Me = C?.color || Se,
              Te = C?.textColor || ke,
              Ae = void 0 !== C?.isActive ? C.isActive : Ne,
              Re = C?.text || we
            ;(0, a.d4)(() => {
              if (!se) {
                const e = (0, St.BS)()
                b(void 0), y(!1), k(e.bg_color), w(e.bg_color)
              }
            }, [se])
            const [Le, Fe] = (0, a.eJ)(!1),
              [xe, Be] = (0, a.eJ)(!0),
              De = (0, a.sO)()
            return (
              (0, a.d4)(() => {
                De.current && clearTimeout(De.current),
                  he
                    ? (Be(!1),
                      (De.current = setTimeout(() => {
                        Fe(!0)
                      }, 250)))
                    : (Fe(!1),
                      (De.current = setTimeout(() => {
                        Be(!0)
                      }, 250)))
              }, [Fe, he]),
              a.ZP.createElement(
                J.Z,
                {
                  className: 'U2Fx70_Xnn6MxQAo6lWe',
                  isOpen: se,
                  onClose: ge,
                  header: a.ZP.createElement(
                    'div',
                    { className: 'modal-header', style: `background-color: ${N}` },
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        color: 'translucent',
                        size: 'smaller',
                        ariaLabel: K(f ? 'Back' : 'Close'),
                        onClick: be,
                      },
                      a.ZP.createElement('div', { className: ye })
                    ),
                    a.ZP.createElement('div', { className: 'modal-title' }, s?.firstName),
                    a.ZP.createElement(
                      V.Z,
                      {
                        className: 'web-app-more-menu with-menu-transitions',
                        trigger: Ie,
                        positionX: 'right',
                      },
                      n &&
                        s &&
                        n.id !== s.id &&
                        a.ZP.createElement(
                          z.Z,
                          { icon: 'bots', onClick: fe },
                          K('BotWebViewOpenBot')
                        ),
                      a.ZP.createElement(
                        z.Z,
                        { icon: 'reload', onClick: ve },
                        K('WebApp.ReloadPage')
                      ),
                      o?.hasSettings &&
                        a.ZP.createElement(z.Z, { icon: 'settings', onClick: Ze }, K('Settings')),
                      s?.isAttachBot &&
                        a.ZP.createElement(
                          z.Z,
                          { icon: o ? 'stop' : 'install', onClick: Ce, destructive: Boolean(o) },
                          K(o ? 'WebApp.RemoveBot' : 'WebApp.AddToAttachmentAdd')
                        )
                    )
                  ),
                  style: `background-color: ${S}`,
                },
                a.ZP.createElement(ce.Z, {
                  className: (0, Q.Z)('iHI2Sy6jZFDHhMiT5K_L', D && 'F1D5Dm5CPeMaqWVDpYI1'),
                }),
                se &&
                  a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement('iframe', {
                      className: (0, Q.Z)('yFzw6MKed5SilXcABSY5', Le && 'O33MOdec2Wd4r1fyRziT'),
                      src: W,
                      title: `${s?.firstName} Web App`,
                      sandbox: Nt,
                      allow: 'camera; microphone; geolocation;',
                      allowFullScreen: !0,
                      ref: Y,
                    }),
                    a.ZP.createElement(
                      $.Z,
                      {
                        className: (0, Q.Z)(
                          'PzPxMQlmpQbPhl8MZSty',
                          he && 'yLdyQH6R0YCJqkmkSvBH',
                          xe && 'CB9NVLPnqFkzbneBIuMs'
                        ),
                        style: `background-color: ${Me}; color: ${Te}`,
                        disabled: !Ae,
                        onClick: Pe,
                      },
                      Re,
                      C?.isProgressVisible &&
                        a.ZP.createElement(ce.Z, {
                          className: 'z8CBciLaVx2qnhkzZO_c',
                          color: 'white',
                        })
                    )
                  ),
                A &&
                  a.ZP.createElement(mt.Z, {
                    isOpen: L,
                    onClose: B,
                    title: K('lng_bot_close_warning_title'),
                    text: K('lng_bot_close_warning'),
                    confirmHandler: d,
                    confirmIsDestructive: !0,
                    confirmLabel: K('lng_bot_close_warning_sure'),
                  }),
                q &&
                  a.ZP.createElement(
                    J.Z,
                    {
                      isOpen: Boolean(j),
                      title: q.title || ' ',
                      onClose: Ee,
                      hasCloseButton: !0,
                      className: (0, Q.Z)(
                        'ift5IHKU51MeA7p6XdKh',
                        !q.title?.trim().length && 'Umnydwi7nysRWdcQItB8'
                      ),
                    },
                    q.message,
                    a.ZP.createElement(
                      'div',
                      { className: 'dialog-buttons mt-2' },
                      q.buttons.map((e) =>
                        a.ZP.createElement(
                          $.Z,
                          {
                            key: e.id || e.type,
                            className: 'confirm-dialog-button',
                            color: 'destructive' === e.type ? 'danger' : 'primary',
                            isText: !0,
                            size: 'smaller',
                            onClick: () => pe(e.id),
                          },
                          e.text || K(wt[e.type])
                        )
                      )
                    )
                  )
              )
            )
          })
        ),
        Tt = (0, a.X$)((e) => {
          let { bot: t, type: n } = e
          const { cancelBotTrustRequest: s, markBotTrusted: r } = (0, i.Sv)(),
            l = (0, M.Z)(),
            c = (0, T.Z)(t, !1),
            d = (0, T.Z)(n, !1),
            m = t || c,
            u = n || d,
            h = (0, a.I4)(() => {
              r({ botId: t.id })
            }, [r, t]),
            P = l('game' === u ? 'AppName' : 'BotOpenPageTitle'),
            Z = l('game' === u ? 'BotPermissionGameAlert' : 'BotOpenPageMessage', (0, o.Js)(m))
          return a.ZP.createElement(mt.Z, {
            isOpen: Boolean(t),
            onClose: s,
            confirmHandler: h,
            title: P,
            textParts: (0, X.Z)(Z, ['br', 'simple_markdown', 'emoji']),
          })
        }),
        At = (0, a.X$)((e) => {
          let { bot: t } = e
          const { confirmAttachBotInstall: n, cancelAttachBotInstall: s } = (0, i.Sv)(),
            [o, r] = (0, a.eJ)(t?.shouldRequestWriteAccess || !1),
            l = (0, M.Z)(),
            c = (0, T.Z)(t),
            d = t || c,
            m = (0, a.I4)(() => {
              n({ isWriteAllowed: o })
            }, [n, o])
          return (
            (0, a.d4)(() => {
              var e
              t && r(null !== (e = t.shouldRequestWriteAccess) && void 0 !== e && e)
            }, [t]),
            a.ZP.createElement(
              mt.Z,
              { isOpen: Boolean(t), onClose: s, title: d?.shortName, confirmHandler: m },
              l('WebApp.AddToAttachmentText', d?.shortName),
              d?.shouldRequestWriteAccess &&
                a.ZP.createElement(ht.Z, {
                  className: 'dialog-checkbox',
                  checked: o,
                  label: (0, X.Z)(l('WebApp.AddToAttachmentAllowMessages', d?.shortName), [
                    'simple_markdown',
                  ]),
                  onCheck: r,
                })
            )
          )
        }),
        Rt = (0, a.X$)((e) => {
          let { deleteFolderDialogId: t } = e
          const { closeDeleteChatFolderModal: n, deleteChatFolder: s } = (0, i.Sv)(),
            o = (0, M.Z)(),
            r = (0, a.I4)(() => {
              n(), s({ id: t })
            }, [n, s, t])
          return a.ZP.createElement(mt.Z, {
            isOpen: void 0 !== t,
            onClose: n,
            text: o('FilterDeleteAlert'),
            confirmLabel: o('Delete'),
            confirmHandler: r,
            confirmIsDestructive: !0,
          })
        })
      var Lt = n(81367),
        Ft = n(9937)
      const xt = 'slESyAvUqizX4_EIX_yg',
        Bt = (0, a.X$)((e) => {
          let { leftValue: t, rightValue: n, className: s, floatingBadgeIcon: i, rightStyle: o } = e
          const r = (0, M.Z)()
          return a.ZP.createElement(
            'div',
            { className: (0, Q.Z)('qiAkShre9E6R3S_XXL9S', s) },
            i &&
              a.ZP.createElement(
                'div',
                { className: 'gIcOQgrfw3soP3cK9s5Q' },
                a.ZP.createElement('i', { className: (0, Q.Z)('y7T3FpaFXDsnPGk6dPmg', i) }),
                a.ZP.createElement(
                  'div',
                  { className: 'rQ6ZdKdWi4HVydX6qhWS', dir: r.isRtl ? 'rtl' : void 0 },
                  t
                ),
                a.ZP.createElement('div', {
                  className: 'Ip5PkcvyMOnN0RLpXLXO',
                  dangerouslySetInnerHTML: {
                    __html:
                      '<svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H26H24.4853C22.894 0 21.3679 0.632141 20.2426 1.75736L14.4142 7.58579C13.6332 8.36684 12.3668 8.36683 11.5858 7.58579L5.75736 1.75736C4.63214 0.632139 3.10602 0 1.51472 0H0Z" fill="#7E85FF"/></svg>',
                  },
                })
              ),
            a.ZP.createElement(
              'div',
              { className: (0, Q.Z)(xt, 'lQi3xqxjvl2Owb4ES2SM') },
              a.ZP.createElement(
                'div',
                {
                  className: 'kuq7sjJF6mvCc4Y5CXpv X0zFAEpRoPWj1yE904xR X0zFAEpRoPWj1yE904xR',
                  dir: r.isRtl ? 'rtl' : void 0,
                },
                r('LimitFree')
              ),
              !i &&
                a.ZP.createElement(
                  'div',
                  { className: 'FaVxkFCcMpBfLY74WJZv X0zFAEpRoPWj1yE904xR' },
                  t
                )
            ),
            a.ZP.createElement(
              'div',
              { className: (0, Q.Z)(xt, 'Dcv5uphsn2Sxpg3ROS_u'), style: o },
              a.ZP.createElement(
                'div',
                {
                  className: 'QWqqObtxZyakBzakEoyh X0zFAEpRoPWj1yE904xR X0zFAEpRoPWj1yE904xR',
                  dir: r.isRtl ? 'rtl' : void 0,
                },
                r('LimitPremium')
              ),
              a.ZP.createElement(
                'div',
                { className: 'TCdcdr_TxlgpCSBV0ePq X0zFAEpRoPWj1yE904xR X0zFAEpRoPWj1yE904xR' },
                n
              )
            )
          )
        }),
        Dt = [91, 160, 255],
        Ot = [197, 100, 243],
        Ut = (0, a.X$)((e) => {
          let { title: t, description: n, leftValue: s, rightValue: i, colorStepProgress: o } = e
          const r = (0, a.Ye)(() => Dt.map((e, t) => (0, te.t7)(e, Ot[t], o)), [o])
          return a.ZP.createElement(
            'div',
            { className: 'jeeOV_UYyl50GFLOzjGC' },
            a.ZP.createElement('div', { className: 'SVqE3gr2ekQUWfFT_Mvg' }, t),
            a.ZP.createElement('div', { className: 'mCBNPstzrSlOQsz6rOtE' }, n),
            a.ZP.createElement(Bt, {
              leftValue: s,
              rightValue: i,
              rightStyle: `background: rgb(${r.join(',')})`,
            })
          )
        })
      var _t = n(15866),
        $t = n(70692)
      const jt = n.p + 'DeviceFrame.79271ee0fa60a7b6a1aa.svg'
      var Gt = n(35148)
      const Vt = {
          root: 'WHiQiGCtWfjSlEysEelB',
          wrapper: 'WUpKHfqLbeZmhfYqqiko',
          down: 'MiGmL4xqBPkxmLim4Ai0',
          frame: 'xuhT9JHpFkVsTcUWeh4L',
          video: 'sLLJqCkdSug4bzEQrACs',
        },
        zt = (0, a.X$)((e) => {
          let {
            videoId: t,
            isReverseAnimation: n,
            isDown: s,
            videoThumbnail: i,
            index: o,
            isActive: r,
          } = e
          const l = (0, R.Z)(`document${t}`),
            c = (0, _t.Z)(i.dataUri),
            d = (0, $t.Z)(l)
          return a.ZP.createElement(
            'div',
            { className: Vt.root },
            a.ZP.createElement(
              'div',
              {
                className: (0, Q.Z)(Vt.wrapper, n && Vt.reverse, s && Vt.down),
                id: `premium_feature_preview_video_${o}`,
              },
              a.ZP.createElement('img', { src: jt, alt: '', className: Vt.frame }),
              a.ZP.createElement('canvas', { ref: c, className: Vt.video }),
              a.ZP.createElement(Gt.Z, {
                canPlay: r,
                className: (0, Q.Z)(Vt.video, d),
                src: l,
                disablePictureInPicture: !0,
                playsInline: !0,
                muted: !0,
                loop: !0,
              })
            )
          )
        }),
        Ht = '_rzXza87NHdAMH2TDKul',
        Xt = 'qd3rvhZma3JJmhdt07Ig',
        Jt = (0, a.X$)((e) => {
          let { length: t, active: n, onSelectSlide: s } = e
          const i = Math.max(0, Math.min(t - 8, n - 4)),
            o = i === t - 8 - 1,
            r = i === t - 8,
            l = 0 === i,
            c = 1 === i,
            m = Math.min(t, 8),
            u = (0, a.I4)(() => {
              s(n + 1)
            }, [n, s]),
            h = (0, a.I4)(() => {
              s(n - 1)
            }, [n, s]),
            P = Math.min(8, t)
          return a.ZP.createElement(
            'div',
            null,
            !d.$b &&
              a.ZP.createElement(
                $.Z,
                {
                  className: (0, Q.Z)(Ht, 0 === n && Xt),
                  color: 'translucent',
                  disabled: 0 === n,
                  round: !0,
                  onClick: h,
                },
                a.ZP.createElement('i', { className: 'icon-previous' })
              ),
            a.ZP.createElement(
              'div',
              {
                className: 'NtJc4bt94t9fklIWC6wF',
                style: `--start-from: ${i}; --length: ${t}; --count: ${P};`,
              },
              Array(t)
                .fill(void 0)
                .map((e, t) => {
                  const d = t,
                    u = t === i + m - 1 && !r && !o,
                    h = (t === i + m - 2 && !o && !r) || (t === i + m - 1 && o),
                    P = t === i && !l && !c,
                    Z = (t === i + 1 && !l && !c) || (t === i && c),
                    v = t < i || t >= i + m
                  return a.ZP.createElement('div', {
                    onClick: () => s(t),
                    className: (0, Q.Z)(
                      'eCgEFkp07vgaUGwymYAQ',
                      d === n && 'nlCmVncFkKVtsawWqcfw',
                      (h || Z) && 'AIpVWjJc47egZ8ATaC3n',
                      (u || P) && 'MnRKztu0OZTyIywGLMc6',
                      v && 'boSFbatyzatdw70J7mpu'
                    ),
                  })
                })
            ),
            !d.$b &&
              a.ZP.createElement(
                $.Z,
                {
                  className: (0, Q.Z)(Ht, n === t - 1 && Xt, 'J4UYbae0Frt01jIavpB0'),
                  color: 'translucent',
                  round: !0,
                  disabled: n === t - 1,
                  onClick: u,
                },
                a.ZP.createElement('i', { className: 'icon-next' })
              )
          )
        })
      var qt = n(3570),
        Yt = n(97799)
      const Kt = (e) => {
          let {
            size: t,
            realIndex: n,
            canPlay: s,
            sticker: i,
            index: o,
            maxLength: r,
            onClick: l,
            onEnded: c,
          } = e
          const d = (0, R.Z)(`sticker${i.id}`),
            m = (0, R.Z)(`sticker${i.id}?size=f`),
            u = 0 === o,
            [h, P, Z] = (0, I.Z)(u),
            v = t - 0.6 * t,
            g = 3 * v,
            p = 3.2 * v,
            E = (o / r) * (2 * Math.PI),
            C = u ? 1 : 0.66,
            b = Math.cos(E) * g - 2.8 * v,
            f = Math.sin(E) * p,
            y = (0, a.I4)(() => {
              l(n)
            }, [l, n]),
            S = (0, a.I4)(() => {
              Z(), c()
            }, [Z, c])
          return (
            (0, a.d4)(() => {
              u && P()
            }, [u, P]),
            a.ZP.createElement(
              a.ZP.Fragment,
              null,
              u &&
                a.ZP.createElement(Yt.Z, {
                  className: 'JLzWnq8to4W24wBGmbyt PIYKt4xxOUBpRjRu0b4q',
                  tgsUrl: m,
                  play: s,
                  isLowPriority: !0,
                  noLoop: !0,
                  size: 0.8 * t,
                  style: `--x: calc(${b}px - 10%); --y: ${f}px;`,
                }),
              a.ZP.createElement(Yt.Z, {
                className: 'PIYKt4xxOUBpRjRu0b4q',
                tgsUrl: d,
                play: s && h,
                noLoop: !0,
                size: 0.6 * t,
                style: `--x: ${b}px; --y: ${f}px; --opacity: ${C}`,
                onClick: y,
                onEnded: S,
              })
            )
          )
        },
        Wt = (0, a.X$)(
          (0, i.c$)((e) => ({ stickers: e.stickers.premium.stickers }))((e) => {
            let { stickers: t, isActive: n } = e
            const s = (0, a.sO)(null),
              [i, o] = (0, a.eJ)(0),
              [r, l] = (0, a.eJ)(0),
              c = t?.slice(0, 15),
              d = (0, a.I4)((e) => {
                o(-e)
              }, []),
              m = (0, a.I4)(() => {
                setTimeout(() => {
                  o((e) => (0, qt.Z)(c.length, e + 1))
                }, 150)
              }, [c.length])
            return (
              (0, a.d4)(() => {
                const e = s.current
                e && l(e.closest('.modal-dialog').clientWidth)
              }, []),
              a.ZP.createElement(
                'div',
                { className: 'dVn5gk50tXn1EiI4kJFJ', ref: s },
                c?.map((e, t) =>
                  a.ZP.createElement(Kt, {
                    size: r,
                    sticker: e,
                    realIndex: t,
                    index: (t + i + c.length) % c.length,
                    maxLength: c.length,
                    onClick: d,
                    onEnded: m,
                    canPlay: n,
                  })
                )
              )
            )
          })
        ),
        Qt = 'fEQZ2fyO9g6L1v8QJUCJ',
        en = 'xkC9BFxv7RkSwbPe4RMb',
        tn = 'eEYA2lXPy_DUKe8JKHiP',
        nn = 'TVO7LjkV_yHUGIu5PXCA',
        an = {
          double_limits: 'PremiumPreviewLimits',
          infinite_reactions: 'PremiumPreviewReactions2',
          premium_stickers: 'PremiumPreviewStickers',
          animated_emoji: 'PremiumPreviewEmoji',
          no_ads: 'PremiumPreviewNoAds',
          voice_to_text: 'PremiumPreviewVoiceToText',
          profile_badge: 'PremiumPreviewProfileBadge',
          faster_download: 'PremiumPreviewDownloadSpeed',
          more_upload: 'PremiumPreviewUploads',
          advanced_chat_management: 'PremiumPreviewAdvancedChatManagement',
          animated_userpics: 'PremiumPreviewAnimatedProfiles',
          emoji_status: 'PremiumPreviewEmojiStatus',
        },
        sn = {
          double_limits: 'PremiumPreviewLimitsDescription',
          infinite_reactions: 'PremiumPreviewReactions2Description',
          premium_stickers: 'PremiumPreviewStickersDescription',
          no_ads: 'PremiumPreviewNoAdsDescription',
          animated_emoji: 'PremiumPreviewEmojiDescription',
          voice_to_text: 'PremiumPreviewVoiceToTextDescription',
          profile_badge: 'PremiumPreviewProfileBadgeDescription',
          faster_download: 'PremiumPreviewDownloadSpeedDescription',
          more_upload: 'PremiumPreviewUploadsDescription',
          advanced_chat_management: 'PremiumPreviewAdvancedChatManagementDescription',
          animated_userpics: 'PremiumPreviewAnimatedProfilesDescription',
          emoji_status: 'PremiumPreviewEmojiStatusDescription',
        },
        on = [
          'double_limits',
          'more_upload',
          'faster_download',
          'voice_to_text',
          'no_ads',
          'infinite_reactions',
          'premium_stickers',
          'animated_emoji',
          'advanced_chat_management',
          'profile_badge',
          'animated_userpics',
          'emoji_status',
        ],
        rn = [
          'faster_download',
          'voice_to_text',
          'advanced_chat_management',
          'profile_badge',
          'animated_userpics',
          'emoji_status',
        ],
        ln = [
          'channels',
          'dialogFolderPinned',
          'channelsPublic',
          'savedGifs',
          'stickersFaved',
          'aboutLength',
          'captionLength',
          'dialogFilters',
          'dialogFiltersChats',
        ],
        cn = {
          channels: 'GroupsAndChannelsLimitTitle',
          dialogFolderPinned: 'PinChatsLimitTitle',
          channelsPublic: 'PublicLinksLimitTitle',
          savedGifs: 'SavedGifsLimitTitle',
          stickersFaved: 'FavoriteStickersLimitTitle',
          aboutLength: 'BioLimitTitle',
          captionLength: 'CaptionsLimitTitle',
          dialogFilters: 'FoldersLimitTitle',
          dialogFiltersChats: 'ChatPerFolderLimitTitle',
        },
        dn = {
          channels: 'GroupsAndChannelsLimitSubtitle',
          dialogFolderPinned: 'PinChatsLimitSubtitle',
          channelsPublic: 'PublicLinksLimitSubtitle',
          savedGifs: 'SavedGifsLimitSubtitle',
          stickersFaved: 'FavoriteStickersLimitSubtitle',
          aboutLength: 'BioLimitSubtitle',
          captionLength: 'CaptionsLimitSubtitle',
          dialogFilters: 'FoldersLimitSubtitle',
          dialogFiltersChats: 'ChatPerFolderLimitSubtitle',
        },
        mn = (0, a.X$)((e) => {
          let {
            promo: t,
            initialSection: n,
            onBack: s,
            onClickSubscribe: i,
            isPremium: o,
            limits: r,
          } = e
          const l = (0, M.Z)(),
            c = (0, a.sO)(null),
            [d, m] = (0, a.eJ)(on.indexOf(n)),
            [u, h] = (0, a.eJ)(0),
            [P, Z, v] = (0, I.Z)(),
            [g, p] = (0, a.eJ)(!0),
            [E, C] = (0, a.eJ)(!1),
            b = (0, T.Z)(n)
          function f(e) {
            const { scrollTop: t, clientHeight: n, scrollHeight: a } = e.currentTarget
            p(t <= 20), C(t >= a - n - 20)
          }
          ;(0, a.d4)(() => {
            const e = c.current
            if (!e || b === n) return
            const t = on.indexOf(n)
            m(t), Z(), (0, Lt.Z)(e, e.clientWidth * t, 0).then(v)
          }, [d, n, b, Z, v])
          const y = (0, a.I4)(
              async (e) => {
                const t = c.current
                t && (m(e), Z(), await (0, Lt.Z)(t, t.clientWidth * e, 800), v())
              },
              [Z, v]
            ),
            S = t.options.find((e) => 1 === e.months)
          return a.ZP.createElement(
            'div',
            { className: 'QfngIllOc1THaTQiJf7h' },
            a.ZP.createElement(
              $.Z,
              {
                round: !0,
                size: 'smaller',
                className: (0, Q.Z)('ZTIpWD6Zrj1U7rnGvrlD', 0 !== d && 'E42Dy7DFLAxvj8HE4GAD'),
                color: 0 === d ? 'translucent' : 'translucent-white',
                onClick: s,
                ariaLabel: l('Back'),
              },
              a.ZP.createElement('i', { className: 'icon-arrow-left' })
            ),
            a.ZP.createElement('div', { className: 'EXGFQjwHmQxjvMLbYtS9' }),
            a.ZP.createElement(
              'div',
              {
                className: (0, Q.Z)('JMdhJYW94Mas4JDye486', 'no-scrollbar'),
                onScroll: function (e) {
                  const { clientWidth: t, scrollLeft: n } = e.currentTarget,
                    a = Math.round(n),
                    s = (a % t) / t
                  e.currentTarget.style.setProperty('--scroll-progress', s.toString()),
                    e.currentTarget.style.setProperty(
                      '--abs-scroll-progress',
                      Math.abs(s).toString()
                    )
                  const i = Math.ceil((a + 1) / t)
                  h(i)
                  const o = e.currentTarget.querySelector(
                      '#premium_feature_preview_video_' + (i - 1)
                    ),
                    r = e.currentTarget.querySelector(`#premium_feature_preview_video_${i}`)
                  if ((o?.classList.toggle('reverse', !1), r?.classList.toggle('reverse', !0), P))
                    return
                  const l = Math.round(a / t)
                  m(l)
                },
                ref: c,
              },
              on.map((e, n) => {
                if ('double_limits' === e)
                  return a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)(en, 'zngeFAwxdlVJZY876fHc') },
                    a.ZP.createElement(
                      'h2',
                      { className: (0, Q.Z)('Mw81cOCIGy8KGn9VokFA', g && 'tRvcw256KSHRqgSj5uGX') },
                      l(an.double_limits)
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: (0, Q.Z)('le7Qv9QkHlO3qdK0Hs_g', 'custom-scroll'), onScroll: f },
                      ln.map((e, t) => {
                        const n = r?.[e][0].toString(),
                          s = r?.[e][1].toString()
                        return a.ZP.createElement(Ut, {
                          title: l(cn[e]),
                          description: l(dn[e], s),
                          leftValue: n,
                          rightValue: s,
                          colorStepProgress: t / (ln.length - 1),
                        })
                      })
                    )
                  )
                if ('premium_stickers' === e)
                  return a.ZP.createElement(
                    'div',
                    { className: en },
                    a.ZP.createElement(
                      'div',
                      { className: Qt },
                      a.ZP.createElement(Wt, { isActive: d === n })
                    ),
                    a.ZP.createElement('h1', { className: tn }, l(an.premium_stickers)),
                    a.ZP.createElement(
                      'div',
                      { className: nn },
                      (0, X.Z)(l(sn.premium_stickers), ['br'])
                    )
                  )
                const s = t.videoSections.indexOf(e)
                return -1 !== s
                  ? a.ZP.createElement(
                      'div',
                      { className: en },
                      a.ZP.createElement(
                        'div',
                        { className: Qt },
                        a.ZP.createElement(zt, {
                          isActive: d === n,
                          videoId: t.videos[s].id,
                          videoThumbnail: t.videos[s].thumbnail,
                          isDown: rn.includes(e),
                          index: n,
                          isReverseAnimation: n === u,
                        })
                      ),
                      a.ZP.createElement('h1', { className: tn }, l(an[t.videoSections[s]])),
                      a.ZP.createElement(
                        'div',
                        { className: nn },
                        (0, X.Z)(l(sn[t.videoSections[s]]), ['br'])
                      )
                    )
                  : void 0
              })
            ),
            a.ZP.createElement(
              'div',
              {
                className: (0, Q.Z)(
                  'EKr_FVmiDSwhUxouhaqB',
                  (E || 0 !== d) && 'H8z5Q6gsuqeCy82HFlyX'
                ),
              },
              a.ZP.createElement(Jt, { length: on.length, active: d, onSelectSlide: y }),
              a.ZP.createElement(
                $.Z,
                {
                  className: (0, Q.Z)('n8tTb600de2uZKGkyw67'),
                  isShiny: !o,
                  withPremiumGradient: !o,
                  onClick: o
                    ? s
                    : function () {
                        i(n)
                      },
                },
                o
                  ? l('OK')
                  : l('SubscribeToPremium', (0, Ft.x)(Number(S.amount), S.currency, l.code))
              )
            )
          )
        })
      var un = n(20230),
        hn = n(9211)
      const Pn = {
          root: 'PEnE7xWTMwTPGmhubmj6',
          text: 'U4UYSH7uHW3k4FlqBefm',
          header: 'Jdlm3dtJ8gOIY0x0u2d4',
          description: 'cE44My72bdvMJna9mgoc',
          icon: 'mxF3NdPgAi_H0ZFgNEtw',
        },
        Zn = [
          '#F2862D',
          '#EB7B4D',
          '#E46D72',
          '#DD6091',
          '#CC5FBA',
          '#B464E7',
          '#9873FF',
          '#768DFF',
          '#55A5FC',
          '#52B0C9',
          '#4FBC93',
          '#4CC663',
        ],
        vn = (0, a.X$)((e) => {
          let { icon: t, title: n, text: s, index: i, onClick: o } = e
          return a.ZP.createElement(
            Je.Z,
            { buttonClassName: Pn.root, onClick: o },
            a.ZP.createElement('img', {
              src: t,
              className: Pn.icon,
              alt: '',
              style: `--item-color: ${Zn[i]}`,
            }),
            a.ZP.createElement(
              'div',
              { className: Pn.text },
              a.ZP.createElement('div', { className: Pn.title }, (0, X.Z)(n, ['br'])),
              a.ZP.createElement('div', { className: Pn.description }, s)
            )
          )
        }),
        gn = n.p + 'PremiumLogo.a5c0e88cd478f4d76d82.svg',
        pn = n.p + 'PremiumLimits.08701cb6df3cf756c5f7.svg',
        En = n.p + 'PremiumFile.884dd3865acfe594fc61.svg',
        Cn = n.p + 'PremiumSpeed.d0a43b6780c411c2f84a.svg',
        bn = n.p + 'PremiumVoice.b3a2893dbe481108ab94.svg',
        fn = n.p + 'PremiumAds.a758f19ece91fe91318e.svg',
        In = n.p + 'PremiumReactions.7fee56ab6b58c82fd15e.svg',
        yn = n.p + 'PremiumStickers.7b5a8531a41b43d0da12.svg',
        Sn = n.p + 'PremiumChats.89d9d315638e283ca895.svg',
        kn = n.p + 'PremiumBadge.1c630afcfd1112ad16d0.svg',
        Nn = n.p + 'PremiumVideo.288cb61931e33d913f0a.svg',
        wn = n.p + 'PremiumEmoji.26515017c8f6dc4f3f67.svg',
        Mn = n.p + 'PremiumStatus.c42f9c4b68f9c2c4537a.svg',
        Tn = 'yVkdTScCEhH3EQMQiA42',
        An = {
          double_limits: pn,
          infinite_reactions: In,
          premium_stickers: yn,
          animated_emoji: wn,
          no_ads: fn,
          voice_to_text: bn,
          profile_badge: kn,
          faster_download: Cn,
          more_upload: En,
          advanced_chat_management: Sn,
          animated_userpics: Nn,
          emoji_status: Mn,
        },
        Rn = (0, a.X$)(
          (0, i.c$)((e) => {
            const { premiumModal: t } = (0, r.jU)(e)
            return {
              currentUserId: e.currentUserId,
              promo: t?.promo,
              isClosing: t?.isClosing,
              isSuccess: t?.isSuccess,
              isGift: t?.isGift,
              monthsAmount: t?.monthsAmount,
              fromUser: t?.fromUserId ? (0, r.dy)(e, t.fromUserId) : void 0,
              toUser: t?.toUserId ? (0, r.dy)(e, t.toUserId) : void 0,
              initialSection: t?.initialSection,
              isPremium: (0, r.wV)(e),
              limitChannels: (0, hn.P)(e, 'channels'),
              limitFolders: (0, hn.P)(e, 'dialogFilters'),
              limitPins: (0, hn.P)(e, 'dialogFolderPinned'),
              limitLinks: (0, hn.P)(e, 'channelsPublic'),
              limits: e.appConfig?.limits,
              premiumSlug: e.appConfig?.premiumInvoiceSlug,
              premiumBotUsername: e.appConfig?.premiumBotUsername,
              premiumPromoOrder: e.appConfig?.premiumPromoOrder,
            }
          })((e) => {
            let {
              isOpen: t,
              currentUserId: n,
              fromUser: s,
              promo: r,
              initialSection: l,
              isPremium: c,
              limitChannels: d,
              limitLinks: u,
              limitFolders: h,
              limitPins: P,
              limits: Z,
              premiumSlug: v,
              premiumBotUsername: g,
              isClosing: p,
              isSuccess: E,
              isGift: C,
              toUser: b,
              monthsAmount: f,
              premiumPromoOrder: I,
            } = e
            const y = (0, a.sO)(null),
              {
                closePremiumModal: S,
                openInvoice: k,
                requestConfetti: N,
                openTelegramLink: w,
              } = (0, i.Sv)(),
              T = (0, M.Z)(),
              [A, R] = (0, a.eJ)(!0),
              [L, F] = (0, a.eJ)(l),
              B = (0, a.I4)(
                (e) => () => {
                  F(e)
                },
                []
              )
            function D(e) {
              y.current &&
                (v ? k({ slug: v }) : g && (w({ url: `${m.zHP}${g}?start=${e || 'promo'}` }), S()))
            }
            const O = (0, a.I4)(() => {
              const e = y.current
              if (e && t) {
                const {
                  top: t,
                  left: n,
                  width: a,
                  height: s,
                } = e.querySelector('.modal-content').getBoundingClientRect()
                N({ top: t, left: n, width: a, height: s })
              }
            }, [t, N])
            ;(0, a.d4)(() => {
              E && O()
            }, [E, O]),
              (0, x.Z)(
                (e) => {
                  let [t] = e
                  t !== c && O()
                },
                [c, O]
              )
            const U = (0, a.Ye)(() => (I ? I.filter((e) => on.includes(e)) : on), [I])
            if (!r) return
            const _ = r.options.find((e) => 1 === e.months)
            return a.ZP.createElement(
              J.Z,
              {
                className: 'JJNHc_FZuydBNBIHK9xC',
                onCloseAnimationEnd: () => S({ isClosed: !0 }),
                onClose: S,
                isOpen: t && !p,
                dialogRef: y,
              },
              a.ZP.createElement(
                G.Z,
                { name: 'slide', activeKey: L ? 1 : 0, className: 'Q05gUm0HCMtSoeX2HVGw' },
                L
                  ? a.ZP.createElement(mn, {
                      initialSection: L,
                      onBack: B(void 0),
                      promo: r,
                      onClickSubscribe: D,
                      isPremium: c,
                      limits: Z,
                    })
                  : a.ZP.createElement(
                      'div',
                      {
                        className: (0, Q.Z)('E9_LJ9RqAHTj8h84EROt', 'custom-scroll'),
                        onScroll: function (e) {
                          const { scrollTop: t } = e.currentTarget
                          R(t <= 150)
                        },
                      },
                      a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          size: 'smaller',
                          className: 'TyuYAZecpI2K_1i3B5XO',
                          color: 'translucent',
                          onClick: () => S(),
                          ariaLabel: T('Close'),
                        },
                        a.ZP.createElement('i', { className: 'icon-close' })
                      ),
                      a.ZP.createElement('img', {
                        className: 'Vaf41aTAoSwl_e_cZhah',
                        src: gn,
                        alt: '',
                      }),
                      a.ZP.createElement(
                        'h2',
                        { className: 'J2z1gqvfQu5kqV_UP8US' },
                        (0, X.Z)(
                          C
                            ? s?.id === n
                              ? T('TelegramPremiumUserGiftedPremiumOutboundDialogTitle', [
                                  (0, o.Js)(b),
                                  f,
                                ])
                              : T('TelegramPremiumUserGiftedPremiumDialogTitle', [(0, o.Js)(s), f])
                            : s
                            ? T('TelegramPremiumUserDialogTitle', (0, o.Js)(s))
                            : T(c ? 'TelegramPremiumSubscribedTitle' : 'TelegramPremium'),
                          ['simple_markdown', 'emoji']
                        )
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'PXg8sU2cfdeysJXctlpB' },
                        (0, X.Z)(
                          C
                            ? s?.id === n
                              ? T(
                                  'TelegramPremiumUserGiftedPremiumOutboundDialogSubtitle',
                                  (0, o.Js)(b)
                                )
                              : T('TelegramPremiumUserGiftedPremiumDialogSubtitle')
                            : T(
                                s
                                  ? 'TelegramPremiumUserDialogSubtitle'
                                  : c
                                  ? 'TelegramPremiumSubscribedSubtitle'
                                  : 'TelegramPremiumSubtitle'
                              ),
                          ['simple_markdown', 'emoji']
                        )
                      ),
                      a.ZP.createElement(
                        'div',
                        {
                          className: (0, Q.Z)('Rwuf1efaEfZ13AD5XbCB', A && 'NV7fN3j69oFZEJu7ejG8'),
                        },
                        a.ZP.createElement(
                          'h2',
                          { className: 'jA_DV7G5VJo8xGOe0otF' },
                          T('TelegramPremium')
                        )
                      ),
                      a.ZP.createElement(
                        'div',
                        {
                          className: (0, Q.Z)('LlPAfJpL066su4P2NFmh', c && 'wpPtJKCqTdOGkKoh7KTo'),
                        },
                        U.map((e, t) =>
                          a.ZP.createElement(vn, {
                            key: e,
                            title: T(an[e]),
                            text: 'double_limits' === e ? T(sn[e], [d, h, P, u, 4]) : T(sn[e]),
                            icon: An[e],
                            index: t,
                            onClick: B(e),
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          {
                            className: (0, Q.Z)(Tn, 'MQbFSG2o_R8rjKDsqs8R'),
                            dir: T.isRtl ? 'rtl' : void 0,
                          },
                          a.ZP.createElement(
                            'p',
                            null,
                            (0, X.Z)(T('AboutPremiumDescription'), ['simple_markdown'])
                          ),
                          a.ZP.createElement(
                            'p',
                            null,
                            (0, X.Z)(T('AboutPremiumDescription2'), ['simple_markdown'])
                          )
                        ),
                        (function () {
                          if (r && (!C || s?.id !== n))
                            return a.ZP.createElement(
                              'div',
                              { className: Tn, dir: T.isRtl ? 'rtl' : void 0 },
                              (0, un.H)(r.statusText, r.statusEntities)
                            )
                        })()
                      ),
                      !c &&
                        a.ZP.createElement(
                          'div',
                          { className: 'FApXoTPpasib6Np5Uxpt' },
                          a.ZP.createElement(
                            $.Z,
                            {
                              className: 'Fb3VVHNrypZ3lhYfSVI_',
                              isShiny: !0,
                              withPremiumGradient: !0,
                              onClick: function () {
                                D()
                              },
                            },
                            T('SubscribeToPremium', (0, Ft.x)(Number(_.amount), _.currency, T.code))
                          )
                        )
                    )
              )
            )
          })
        )
      var Ln = n(8337)
      const Fn = (0, a.X$)((e) => {
          let { option: t, checked: n, fullMonthlyAmount: s, onChange: i } = e
          const o = (0, M.Z)(),
            { months: r, amount: l, currency: c } = t,
            d = Math.floor(l / r),
            m = (0, a.Ye)(() => (s && s > d ? Math.ceil(100 - d / (s / 100)) : void 0), [s, d]),
            u = (0, a.I4)(
              (e) => {
                e.target.checked && i(r)
              },
              [r, i]
            )
          return a.ZP.createElement(
            'label',
            {
              className: (0, Q.Z)('c43s0Q6_xgGlM8sZxQ7Q', n && 'PjYaF42Oe55WgPpTP6Od'),
              dir: o.isRtl ? 'rtl' : void 0,
            },
            a.ZP.createElement('input', {
              className: 'r03M3Tzd52_D2GCAdabK',
              type: 'radio',
              name: 'gift_option',
              value: r,
              checked: n,
              onChange: u,
            }),
            a.ZP.createElement(
              'div',
              { className: 'oL_26LDnHDwJRxqKF1Kn' },
              a.ZP.createElement('div', { className: 'JmEuBQ4mFzu1MiFV5qSB' }, o('Months', r)),
              a.ZP.createElement(
                'div',
                { className: 'hssGd7AUhDhhG2_aXqe9' },
                o('PricePerMonth', (0, Ft.x)(d, c, o.code)),
                Boolean(m) &&
                  a.ZP.createElement(
                    'span',
                    { className: 'WCXGWHYNQh8lg2rIWehC', title: o('GiftDiscount') },
                    ' −',
                    m,
                    '% '
                  )
              ),
              a.ZP.createElement(
                'div',
                { className: 'mhc9AgOUiNT2QMcErpQe' },
                (0, Ft.x)(l, c, o.code)
              )
            )
          )
        }),
        xn = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
                forUserId: t,
                monthlyCurrency: n,
                monthlyAmount: a,
              } = (0, r.jU)(e).giftPremiumModal || {},
              s = t ? (0, r.dy)(e, t) : void 0
            return {
              user: s,
              gifts: s ? s.fullInfo?.premiumGifts : void 0,
              monthlyCurrency: n,
              monthlyAmount: a ? Number(a) : void 0,
              animationLevel: e.settings.byKey.animationLevel,
            }
          })((e) => {
            let {
              isOpen: t,
              user: n,
              gifts: s,
              monthlyCurrency: r,
              monthlyAmount: l,
              animationLevel: c,
            } = e
            const { openPremiumModal: d, closeGiftPremiumModal: m, openUrl: u } = (0, i.Sv)(),
              h = (0, M.Z)(),
              P = (0, et.Z)(n, !0),
              Z = (0, et.Z)(s, !0),
              [v, g] = (0, a.eJ)(),
              p = Z?.[0],
              E = (0, a.Ye)(() => {
                if (!Z || 0 === Z.length || !p) return
                const e = Z.reduce((e, t) => (t.amount < p?.amount ? t : p), p)
                return e.currency === r && l ? l : Math.floor(e.amount / e.months)
              }, [p, Z, l, r])
            ;(0, a.d4)(() => {
              t && g(p?.months)
            }, [p?.months, t])
            const C = (0, a.Ye)(() => Z?.find((e) => e.months === v), [Z, v]),
              b = (0, a.I4)(() => {
                C && (m(), u({ url: C.botUrl }))
              }, [m, u, C]),
              f = (0, a.I4)(() => {
                d()
              }, [d])
            return a.ZP.createElement(
              J.Z,
              { onClose: m, isOpen: t, className: 'K80So3B9potKGNvwdtYE' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    className: 'dxx424IZDNuP1OLbUIve',
                    color: 'translucent',
                    onClick: () => m(),
                    ariaLabel: h('Close'),
                  },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                a.ZP.createElement(De.Z, {
                  user: P,
                  size: 'jumbo',
                  className: 'qJgJ7R5NJVmAxBjT5LxT',
                  animationLevel: c,
                  withVideo: !0,
                }),
                a.ZP.createElement(
                  'h2',
                  { className: 'eqCNa8zBoMroKcepfXyE' },
                  h('GiftTelegramPremiumTitle')
                ),
                a.ZP.createElement(
                  'p',
                  { className: 'MtYhgDChavNfKIUAJPzt' },
                  (0, X.Z)(h('GiftTelegramPremiumDescription', (0, o.Vl)(P)), [
                    'emoji',
                    'simple_markdown',
                  ])
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'HyfHjS1vAds31eFcSpDg' },
                  Z?.map((e) =>
                    a.ZP.createElement(Fn, {
                      key: e.amount,
                      option: e,
                      fullMonthlyAmount: E,
                      checked: e.months === v,
                      onChange: g,
                    })
                  )
                ),
                (function () {
                  const e = h('GiftPremiumListFeaturesAndTerms').match(/([^*]*)\*([^*]+)\*(.*)/)
                  if (e && !(e.length < 4))
                    return a.ZP.createElement(
                      'p',
                      { className: 'J0hST5xsC45ZolfGpbDc' },
                      e[1],
                      a.ZP.createElement(Ln.Z, { isPrimary: !0, onClick: f }, e[2]),
                      e[3]
                    )
                })()
              ),
              a.ZP.createElement(
                $.Z,
                { className: 'sSXm9RjIQSsVFi0D1nEd', isShiny: !0, disabled: !v, onClick: b },
                h('GiftSubscriptionFor', C && (0, Ft.x)(Number(C.amount), C.currency, h.code))
              )
            )
          })
        ),
        Bn = {
          dialogFiltersChats: 'LimitReachedChatInFolders',
          uploadMaxFileparts: 'LimitReachedFileSize',
          dialogFilters: 'LimitReachedFolders',
          dialogFolderPinned: 'LimitReachedPinDialogs',
          channelsPublic: 'LimitReachedPublicLinks',
          channels: 'LimitReachedCommunities',
        },
        Dn = {
          dialogFiltersChats: 'LimitReachedChatInFoldersLocked',
          uploadMaxFileparts: 'LimitReachedFileSizeLocked',
          dialogFilters: 'LimitReachedFoldersLocked',
          dialogFolderPinned: 'LimitReachedPinDialogsLocked',
          channelsPublic: 'LimitReachedPublicLinksLocked',
          channels: 'LimitReachedCommunitiesLocked',
        },
        On = {
          dialogFiltersChats: 'LimitReachedChatInFoldersPremium',
          uploadMaxFileparts: 'LimitReachedFileSizePremium',
          dialogFilters: 'LimitReachedFoldersPremium',
          dialogFolderPinned: 'LimitReachedPinDialogsPremium',
          channelsPublic: 'LimitReachedPublicLinksPremium',
          channels: 'LimitReachedCommunitiesPremium',
        },
        Un = {
          dialogFiltersChats: 'icon-chat-badge',
          uploadMaxFileparts: 'icon-file-badge',
          dialogFilters: 'icon-folder-badge',
          dialogFolderPinned: 'icon-pin-badge',
          channelsPublic: 'icon-link-badge',
          channels: 'icon-chats-badge',
        },
        _n = {
          uploadMaxFileparts: (e, t) =>
            8e3 === t
              ? e('FileSize.GB', '4')
              : 4e3 === t
              ? e('FileSize.GB', '2')
              : (0, Ze.sS)(e, t * m.pJM),
        },
        $n = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { limit: n } = t
            const { limits: a } = e.appConfig || {},
              s = (0, r.wV)(e)
            return {
              defaultValue: n ? a?.[n][0] : void 0,
              premiumValue: n ? a?.[n][1] : void 0,
              canBuyPremium: !(0, r.oe)(e),
              isPremium: s,
            }
          })((e) => {
            let { defaultValue: t, premiumValue: n, limit: s, isPremium: o, canBuyPremium: r } = e
            const { closeLimitReachedModal: l, openPremiumModal: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u, h] = (0, I.Z)(),
              P = (0, a.I4)(() => {
                c(), u()
              }, [c, u])
            ;(0, a.d4)(() => {
              !s && m && h()
            }, [m, s, h])
            const Z = d('LimitReached'),
              v = s && _n[s],
              g = (function (e) {
                let {
                  lang: t,
                  limitType: n,
                  isPremium: a,
                  canBuyPremium: s,
                  defaultValue: i,
                  premiumValue: o,
                  valueFormatter: r,
                } = e
                if (!n) return
                const l = r ? r(t, i) : i,
                  c = r ? r(t, o) : o
                return a
                  ? t(On[n], c)
                  : s
                  ? t(Bn[n], 'channelsPublic' === n ? c : [l, c])
                  : t(Dn[n], l)
              })({
                lang: d,
                limitType: s,
                isPremium: o,
                canBuyPremium: r,
                defaultValue: t,
                premiumValue: n,
                valueFormatter: v,
              }),
              p = s && Un[s],
              E = r && !o
            return a.ZP.createElement(
              J.Z,
              {
                onClose: u,
                onCloseAnimationEnd: l,
                isOpen: Boolean(s) && !m,
                title: Z,
                className: 'iz5RJvcQyNNDQzKfXQbN',
              },
              !E &&
                a.ZP.createElement(
                  'div',
                  { className: 'womlEQglVV1w8ltVa6PQ' },
                  a.ZP.createElement('i', { className: (0, Q.Z)('q8SgjqQqlOVMSofzhdwh', p) }),
                  a.ZP.createElement(
                    'div',
                    { className: 'QC8Xe4ShGc_q82s4Tjmg' },
                    v?.(d, o ? n : t) || (o ? n : t)
                  )
                ),
              E &&
                a.ZP.createElement(Bt, {
                  className: 'az3lXhmlMfZfIQ_81jog',
                  leftValue: v?.(d, t) || t?.toString(),
                  rightValue: v?.(d, n) || n?.toString(),
                  floatingBadgeIcon: p,
                }),
              a.ZP.createElement('div', null, (0, X.Z)(g || '', ['simple_markdown', 'br'])),
              a.ZP.createElement(
                'div',
                { className: 'DgRFl7StCs4fhROb7CKH' },
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: u, color: 'primary' },
                  d(E ? 'Cancel' : 'OK')
                ),
                E &&
                  a.ZP.createElement(
                    $.Z,
                    {
                      className: (0, Q.Z)('confirm-dialog-button', 'Twnx_5clE9fKNOMo7lXf'),
                      isShiny: !0,
                      onClick: P,
                      color: 'primary',
                    },
                    d('IncreaseLimit'),
                    a.ZP.createElement('i', {
                      className: (0, Q.Z)('BW05mF5k9uq5qBi_BYzg', 'icon-double-badge'),
                    })
                  )
              )
            )
          })
        )
      var jn = n(62898),
        Gn = n(70735),
        Vn = n(60539),
        zn = n(17891),
        Hn = n(3657),
        Xn = n(78781),
        Jn = n(73547),
        qn = n(78722),
        Yn = n(17017)
      const Kn = (0, a.X$)((e) => {
        let {
          stickerSet: t,
          loadAndPlay: n,
          index: s,
          idPrefix: o,
          shouldRender: l,
          favoriteStickers: c,
          isSavedMessages: d,
          isStatusPicker: u,
          isCurrentUserPremium: h,
          shouldHideRecentHeader: P,
          withDefaultTopicIcon: Z,
          withDefaultStatusIcon: v,
          observeIntersection: g,
          onStickerSelect: p,
          onStickerUnfave: E,
          onStickerFave: C,
          onStickerRemoveRecent: b,
          onContextMenuOpen: f,
          onContextMenuClose: y,
          onContextMenuClick: S,
        } = e
        const {
            clearRecentStickers: k,
            clearRecentCustomEmoji: N,
            openPremiumModal: w,
            toggleStickerSet: T,
            loadStickers: A,
          } = (0, i.Sv)(),
          R = (0, a.sO)(null),
          L = (0, a.sO)(null),
          F = (0, a.sO)(null),
          x = (0, M.Z)(),
          [B, D, O] = (0, I.Z)(),
          { isMobile: _ } = (0, U.ZP)(),
          [j, G] = (0, a.eJ)(8),
          V = (0, Hn.Op)(R, g),
          z = (0, $t.Z)(l),
          H = _ ? 8 : 16,
          X = _ ? 8 : 10,
          J = t.id === m.s38,
          q = t.id === m.ka7,
          Y = t.isEmoji,
          K = !J && (0, r.FW)(t),
          W = (0, a.I4)(() => {
            Y ? N() : k(), O()
          }, [N, k, O, Y]),
          ee = (0, a.I4)(() => {
            K && !h ? w({ initialSection: 'animated_emoji' }) : T({ stickerSetId: t.id })
          }, [h, K, w, t, T]),
          te = (0, a.I4)(() => {
            p?.({ id: m.Zkg, isLottie: !1, isVideo: !1, stickerSetInfo: { shortName: 'dummy' } })
          }, [p]),
          ne = (0, a.I4)(() => {
            p?.({ id: m.MW8, isLottie: !1, isVideo: !1, stickerSetInfo: { shortName: 'dummy' } })
          }, [p]),
          ae = Y ? m.eXY : m.Qao,
          se = Y ? X : H,
          ie = (0, a.I4)((e) => (e ? Math.floor(e / (ae + se)) : 8), [ae, se]),
          oe = (0, a.I4)(
            (e) => {
              G(ie(e.contentRect.width))
            },
            [ie]
          )
        ;(0, qn.Z)(R, oe),
          (0, a.bt)(() => {
            R.current && G(ie(R.current.clientWidth))
          }, [ie]),
          (0, a.d4)(() => {
            V &&
              !t.stickers?.length &&
              t.accessHash &&
              A({ stickerSetInfo: { id: t.id, accessHash: t.accessHash } })
          }, [V, A, t])
        const re =
            !d &&
            !J &&
            Y &&
            !h &&
            t.stickers?.some((e) => {
              let { isFree: t } = e
              return !t
            }),
          le = t.installedDate && !t.isArchived,
          ce = !le && t.id !== m.s38,
          [de, , me] = (0, I.Z)(ce),
          ue = 3 * j - 1,
          he = Z ? t.count + 1 : t.count,
          Pe = Math.ceil(Math.min(ue, he) / j) * (ae + se),
          Ze = de ? Pe : Math.ceil(he / j) * (ae + se),
          ve = J && P,
          ge = (0, a.Ye)(
            () =>
              c
                ? new Set(
                    c.map((e) => {
                      let { id: t } = e
                      return t
                    })
                  )
                : void 0,
            [c]
          )
        return a.ZP.createElement(
          'div',
          {
            ref: R,
            key: t.id,
            id: `${o || 'sticker-set'}-${s}`,
            className: (0, Q.Z)('symbol-set', re && 'symbol-set-locked'),
          },
          !ve &&
            a.ZP.createElement(
              'div',
              { className: 'symbol-set-header' },
              a.ZP.createElement(
                'p',
                { className: 'symbol-set-name' },
                re &&
                  a.ZP.createElement('i', { className: 'symbol-set-locked-icon icon-lock-badge' }),
                t.title
              ),
              J &&
                a.ZP.createElement('i', { className: 'symbol-set-remove icon-close', onClick: D }),
              !J &&
                Y &&
                !le &&
                a.ZP.createElement(
                  $.Z,
                  {
                    className: 'symbol-set-add-button',
                    withPremiumGradient: K && !h,
                    onClick: ee,
                    pill: !0,
                    size: 'tiny',
                    fluid: !0,
                  },
                  x(K && re ? 'Unlock' : 'Add')
                )
            ),
          a.ZP.createElement(
            'div',
            {
              className: (0, Q.Z)('symbol-set-container shared-canvas-container', z),
              style: `height: ${Ze}px;`,
            },
            a.ZP.createElement('canvas', {
              ref: L,
              className: 'shared-canvas',
              style: ce ? `height: ${Pe}px;` : void 0,
            }),
            (J || q || ce) && a.ZP.createElement('canvas', { ref: F, className: 'shared-canvas' }),
            Z &&
              a.ZP.createElement(
                $.Z,
                {
                  className: 'StickerButton custom-emoji',
                  color: 'translucent',
                  onClick: te,
                  key: 'default-topic-icon',
                },
                a.ZP.createElement('img', { src: Yn, alt: 'Reset' })
              ),
            v &&
              a.ZP.createElement(
                $.Z,
                {
                  className: 'StickerButton custom-emoji status-default',
                  color: 'translucent',
                  onClick: ne,
                  key: 'default-status-icon',
                },
                a.ZP.createElement('i', { className: 'icon-premium' })
              ),
            l &&
              t.stickers &&
              t.stickers.slice(0, de ? ue : t.stickers.length).map((e, t) => {
                const s = (J || q) && (0, r.Si)((0, i.Rd)(), e.stickerSetInfo),
                  o = (ce && t >= ue) || s ? F : L
                return a.ZP.createElement(Jn.Z, {
                  key: e.id,
                  sticker: e,
                  size: ae,
                  observeIntersection: g,
                  noAnimate: !n,
                  isSavedMessages: d,
                  isStatusPicker: u,
                  canViewSet: !0,
                  isCurrentUserPremium: h,
                  sharedCanvasRef: o,
                  onClick: p,
                  clickArg: e,
                  onUnfaveClick: q && ge?.has(e.id) ? E : void 0,
                  onFaveClick: ge?.has(e.id) ? void 0 : C,
                  onRemoveRecentClick: J ? b : void 0,
                  onContextMenuOpen: f,
                  onContextMenuClose: y,
                  onContextMenuClick: S,
                })
              }),
            de &&
              he > ue &&
              a.ZP.createElement(
                $.Z,
                {
                  className: 'StickerButton custom-emoji set-expand',
                  round: !0,
                  color: 'translucent',
                  onClick: me,
                  key: 'more',
                },
                '+',
                he - ue
              )
          ),
          J &&
            a.ZP.createElement(mt.Z, {
              text: x('ClearRecentStickersAlertMessage'),
              isOpen: B,
              onClose: O,
              confirmHandler: W,
              confirmIsDestructive: !0,
            })
        )
      })
      var Wn = n(799)
      const Qn = (0, a.X$)((e) => {
          let {
            stickerSet: t,
            size: n = m.DC_,
            noAnimate: s,
            observeIntersection: l,
            sharedCanvasRef: c,
          } = e
          const { loadStickers: u } = (0, i.Sv)(),
            h = (0, a.sO)(null),
            { hasThumbnail: P, isLottie: Z, isVideos: v } = t,
            g = (0, Hn.Op)(h, l),
            p = t.stickers && v && !d.Hh,
            E = p && (0, o.RK)(t.stickers[0].id),
            C = (0, R.Z)(E, !g),
            b = ((P && !p) || Z) && `stickerSet${t.id}`,
            f = (0, R.Z)(b, !g),
            I = f || C,
            y = (0, $t.Z)(I),
            S = (0, Wn.Z)(h, c)
          return (
            (0, a.d4)(() => {
              g &&
                !t.stickers?.length &&
                u({ stickerSetInfo: { id: t.id, accessHash: t.accessHash } })
            }, [g, u, t]),
            a.ZP.createElement(
              'div',
              { ref: h, className: 'sticker-set-cover' },
              I
                ? Z
                  ? a.ZP.createElement(Yt.Z, {
                      className: y,
                      tgsUrl: f,
                      size: n || S.size,
                      play: g && !s,
                      isLowPriority: !(0, r.Si)((0, i.Rd)(), t),
                      sharedCanvas: c?.current || void 0,
                      sharedCanvasCoords: S.coords,
                    })
                  : v && !p
                  ? a.ZP.createElement(Gt.Z, {
                      className: (0, Q.Z)('h6jE3TEaqlzbs0ro0J2_', y),
                      src: f,
                      canPlay: g && !s,
                      loop: !0,
                      disablePictureInPicture: !0,
                    })
                  : a.ZP.createElement('img', { src: f || C, className: y, alt: '' })
                : (0, Ze.Xv)(t.title, 2)
            )
          )
        }),
        ea = 'custom-emoji-set',
        ta = [],
        na = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, isStatusPicker: a } = t
            const {
                stickers: { setsById: s },
                customEmojis: {
                  byId: i,
                  featuredIds: o,
                  statusRecent: { emojis: l },
                },
                recentCustomEmojis: c,
              } = e,
              d = Boolean(n && (0, r.FM)(e, n))
            return {
              customEmojisById: a ? void 0 : i,
              recentCustomEmojiIds: a ? void 0 : c,
              recentStatusEmojis: a ? l : void 0,
              stickerSetsById: s,
              addedCustomEmojiIds: e.customEmojis.added.setIds,
              canAnimate: e.settings.byKey.shouldLoopStickers,
              isSavedMessages: d,
              isCurrentUserPremium: (0, r.wV)(e),
              customEmojiFeaturedIds: o,
              defaultTopicIconsId: e.defaultTopicIconsId,
              defaultStatusIconsId: e.defaultStatusIconsId,
            }
          })((e) => {
            let {
              className: t,
              loadAndPlay: n,
              addedCustomEmojiIds: s,
              customEmojisById: o,
              recentCustomEmojiIds: l,
              recentStatusEmojis: c,
              stickerSetsById: u,
              idPrefix: h = ea,
              customEmojiFeaturedIds: P,
              canAnimate: Z,
              isStatusPicker: v,
              isSavedMessages: g,
              isCurrentUserPremium: p,
              withDefaultTopicIcons: E,
              defaultTopicIconsId: C,
              defaultStatusIconsId: b,
              onCustomEmojiSelect: f,
              onContextMenuOpen: I,
              onContextMenuClose: y,
              onContextMenuClick: S,
            } = e
            const k = (0, a.sO)(null),
              N = (0, a.sO)(null),
              w = (0, a.sO)(null),
              T = (0, a.sO)(null),
              [A, R] = (0, a.eJ)(0),
              L = (0, a.Ye)(() => (v ? c : Object.values((0, $e.q0)(o, l))), [o, v, l, c]),
              { observe: F } = (0, Hn.S1)({ rootRef: k, throttleMs: 200 }, (e) => {
                e.forEach((e) => {
                  const { id: t } = e.target
                  if (!t || !t.startsWith(h)) return
                  const n = Number(t.replace(`${h}-`, ''))
                  ta[n] = e.isIntersecting
                })
                const t = ta
                  .map((e, t) => ({ index: t, isIntersecting: e }))
                  .filter((e) => {
                    let { isIntersecting: t } = e
                    return t
                  })
                t.length && R(t[Math.floor(t.length / 2)].index)
              }),
              { observe: x } = (0, Hn.S1)({ rootRef: N }),
              B = (0, M.Z)(),
              D = Boolean(s),
              O = (0, a.Ye)(() => {
                if (!s) return Gn.D
                const e = []
                if (v) {
                  const t = u[b]
                  if (t.stickers?.length) {
                    const n = (t.stickers || []).concat(L || [])
                    e.push({
                      ...t,
                      stickers: n,
                      count: n.length,
                      id: m.s38,
                      title: B('RecentStickers'),
                    })
                  }
                } else if (E) {
                  const t = u[C]
                  t.stickers?.length && e.push({ ...t, id: m.s38, title: B('RecentStickers') })
                } else
                  L?.length &&
                    e.push({
                      id: m.s38,
                      accessHash: '0',
                      title: B('RecentStickers'),
                      stickers: L,
                      count: L.length,
                      isEmoji: !0,
                    })
                const t = (0, $e.Tw)(s.concat(P || [])),
                  n = Object.values((0, $e.q0)(u, t))
                return [...e, ...n]
              }, [s, v, E, L, P, u, b, B, C]),
              U = (0, a.Ye)(() => D && 0 === O.filter((e) => e.stickers?.length).length, [O, D]),
              _ = (0, zn.Z)([], m.Yan),
              j = D && _ && !U
            ;(0, Xn.Z)(N, !j),
              (0, a.d4)(() => {
                if (!D) return
                const e = N.current
                if (!e) return
                const t = 52 * A - (e.offsetWidth / 2 - 26)
                ;(0, Lt.Z)(e, t)
              }, [D, A])
            const G = (0, a.I4)(
                (e) => {
                  R(e)
                  const t = document.getElementById(`${h}-${e}`)
                  ;(0, Vn.Z)(k.current, t, 'start', void 0, 500)
                },
                [h]
              ),
              V = (0, a.I4)(
                (e) => {
                  f(e)
                },
                [f]
              ),
              z = (0, Q.Z)('StickerPicker', 'CustomEmojiPicker', t)
            return j
              ? a.ZP.createElement(
                  'div',
                  { className: z },
                  a.ZP.createElement(
                    'div',
                    { ref: N, className: 'StickerPicker-header no-selection no-scrollbar' },
                    a.ZP.createElement(
                      'div',
                      { className: 'shared-canvas-container' },
                      a.ZP.createElement('canvas', { ref: w, className: 'shared-canvas' }),
                      a.ZP.createElement('canvas', { ref: T, className: 'shared-canvas' }),
                      O.map(function (e, t) {
                        const s = e.stickers?.[0],
                          o = (0, Q.Z)(
                            'symbol-set-button sticker-set-button',
                            t === A && 'activated'
                          ),
                          l = t < m.uaz,
                          c = (0, r.Si)((0, i.Rd)(), e)
                        return e.id === m.s38 ||
                          e.id === m.ka7 ||
                          e.id === m.dWG ||
                          e.id === m.BRs ||
                          e.hasThumbnail ||
                          !s
                          ? a.ZP.createElement(
                              $.Z,
                              {
                                key: e.id,
                                className: o,
                                ariaLabel: e.title,
                                round: !0,
                                faded: e.id === m.s38 || e.id === m.ka7,
                                color: 'translucent',
                                onClick: () => G(t),
                              },
                              e.id === m.s38
                                ? a.ZP.createElement('i', { className: 'icon-recent' })
                                : a.ZP.createElement(Qn, {
                                    stickerSet: e,
                                    noAnimate: !Z || !n,
                                    observeIntersection: x,
                                    sharedCanvasRef: l ? (c ? T : w) : void 0,
                                  })
                            )
                          : a.ZP.createElement(Jn.Z, {
                              key: e.id,
                              sticker: s,
                              size: m.DC_,
                              title: e.title,
                              className: o,
                              noAnimate: !Z || !n,
                              observeIntersection: x,
                              noContextMenu: !0,
                              isCurrentUserPremium: !0,
                              sharedCanvasRef: l ? (c ? T : w) : void 0,
                              onClick: G,
                              clickArg: t,
                            })
                      })
                    )
                  ),
                  a.ZP.createElement(
                    'div',
                    {
                      ref: k,
                      className: (0, Q.Z)(
                        'StickerPicker-main no-selection',
                        d.$b ? 'no-scrollbar' : 'custom-scroll'
                      ),
                    },
                    O.map((e, t) =>
                      a.ZP.createElement(Kn, {
                        key: e.id,
                        stickerSet: e,
                        loadAndPlay: Boolean(Z && n),
                        index: t,
                        idPrefix: h,
                        observeIntersection: F,
                        shouldRender: A >= t - 1 && A <= t + 1,
                        isSavedMessages: g,
                        isStatusPicker: v,
                        shouldHideRecentHeader: E || v,
                        withDefaultTopicIcon: E && e.id === m.s38,
                        withDefaultStatusIcon: v && e.id === m.s38,
                        isCurrentUserPremium: p,
                        onStickerSelect: V,
                        onContextMenuOpen: I,
                        onContextMenuClose: y,
                        onContextMenuClick: S,
                      })
                    )
                  )
                )
              : a.ZP.createElement(
                  'div',
                  { className: z },
                  U
                    ? a.ZP.createElement('div', { className: 'picker-disabled' }, B('NoStickers'))
                    : a.ZP.createElement(ze.Z, null)
                )
          })
        ),
        aa = (0, a.X$)(
          (0, i.c$)((e) => ({
            areFeaturedStickersLoaded: Boolean(e.customEmojis.featuredIds?.length),
          }))((e) => {
            let {
              isOpen: t,
              statusButtonRef: n,
              areFeaturedStickersLoaded: s,
              onEmojiStatusSelect: o,
              onClose: r,
            } = e
            const { loadFeaturedEmojiStickers: l } = (0, i.Sv)(),
              c = (0, a.sO)(),
              [d, m, u] = (0, I.Z)()
            ;(0, a.d4)(() => {
              c.current = n.current.getBoundingClientRect().right
            }, [t, n]),
              (0, a.d4)(() => {
                t && !s && l()
              }, [s, t, l])
            const h = (0, a.I4)(
              (e) => {
                o(e), r()
              },
              [r, o]
            )
            return a.ZP.createElement(
              jn.Z,
              null,
              a.ZP.createElement(
                ge.Z,
                {
                  isOpen: t,
                  noCompact: !0,
                  positionX: 'right',
                  bubbleClassName: 'XWSv0Pf1SKleWNyX04yO',
                  onClose: r,
                  transformOriginX: c.current,
                  noCloseOnBackdrop: d,
                },
                a.ZP.createElement(na, {
                  idPrefix: 'status-emoji-set-',
                  loadAndPlay: t,
                  isStatusPicker: !0,
                  onContextMenuOpen: m,
                  onContextMenuClose: u,
                  onCustomEmojiSelect: h,
                  onContextMenuClick: r,
                })
              )
            )
          })
        )
      var sa = n(10088)
      const ia = (0, a.X$)((e) => {
          let { isOpen: t, onClose: n } = e
          const s = (0, M.Z)()
          return a.ZP.createElement(
            J.Z,
            { isOpen: t, onClose: n, hasCloseButton: !0, title: s('SponsoredMessageInfo') },
            a.ZP.createElement('p', null, (0, X.Z)(s('SponsoredMessageInfoDescription1'), ['br'])),
            a.ZP.createElement('p', null, (0, X.Z)(s('SponsoredMessageInfoDescription2'), ['br'])),
            a.ZP.createElement('p', null, (0, X.Z)(s('SponsoredMessageInfoDescription3'), ['br'])),
            a.ZP.createElement(
              'p',
              null,
              a.ZP.createElement(sa.Z, {
                url: s('SponsoredMessageAlertLearnMoreUrl'),
                text: s('SponsoredMessageAlertLearnMoreUrl'),
              })
            ),
            a.ZP.createElement('p', null, (0, X.Z)(s('SponsoredMessageInfoDescription4'), ['br'])),
            a.ZP.createElement(
              'div',
              { className: 'dialog-buttons mt-2' },
              a.ZP.createElement(
                $.Z,
                { className: 'confirm-dialog-button', isText: !0, onClick: n },
                s('Close')
              )
            )
          )
        }),
        oa = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, o.YC)(n),
              s = (0, r.FM)(e, n),
              i = (0, r.Z1)(e, n),
              l = Boolean(i) && (0, o.eA)(i),
              c = Boolean(i) && (0, o.G9)(i),
              d = Boolean(i) && (0, o.ZV)(i)
            return {
              isPrivateChat: a,
              isChatWithSelf: s,
              isChannel: l,
              isGroup: c,
              isSuperGroup: d,
              canPinForAll: (a && !s) || d || c,
              contactName: i && (0, o.YC)(i.id) ? (0, o.Vl)((0, r.dy)(e, (0, o.zX)(i))) : void 0,
            }
          })((e) => {
            let {
              isOpen: t,
              messageId: n,
              isChannel: s,
              isGroup: o,
              isSuperGroup: r,
              canPinForAll: l,
              contactName: c,
              onClose: d,
            } = e
            const { pinMessage: m } = (0, i.Sv)(),
              u = (0, a.I4)(() => {
                m({ messageId: n, isUnpin: !1 }), d()
              }, [m, n, d]),
              h = (0, a.I4)(() => {
                m({ messageId: n, isUnpin: !1, isOneSide: !0, isSilent: !0 }), d()
              }, [n, d, m]),
              P = (0, M.Z)()
            return a.ZP.createElement(
              J.Z,
              { isOpen: t, onClose: d, className: 'pin', title: P('PinMessageAlertTitle') },
              a.ZP.createElement(
                'p',
                null,
                P(s ? 'PinMessageAlertChannel' : o || r ? 'PinMessageAlert' : 'PinMessageAlertChat')
              ),
              a.ZP.createElement(
                'div',
                { className: 'dialog-buttons-column' },
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: h },
                  P('DialogPin')
                ),
                l &&
                  a.ZP.createElement(
                    $.Z,
                    { className: 'confirm-dialog-button', isText: !0, onClick: u },
                    c
                      ? (0, X.Z)(P('Conversation.PinMessagesFor', c))
                      : P('Conversation.PinMessageAlert.PinAndNotifyMembers')
                  ),
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: d },
                  P('Cancel')
                )
              )
            )
          })
        ),
        ra = (0, a.X$)((e) => {
          let { isOpen: t, pinnedMessagesCount: n = 0, onClose: s, onUnpin: i } = e
          const o = (0, M.Z)()
          return a.ZP.createElement(
            J.Z,
            {
              isOpen: t,
              onClose: s,
              className: 'unpin-all',
              title: o('Chat.PanelUnpinAllMessages'),
            },
            a.ZP.createElement('p', null, o('Chat.UnpinAllMessagesConfirmation', n, 'i')),
            a.ZP.createElement(
              'div',
              { className: 'dialog-buttons mt-2' },
              a.ZP.createElement(
                $.Z,
                { className: 'confirm-dialog-button', isText: !0, onClick: i },
                o('DialogUnpin')
              ),
              a.ZP.createElement(
                $.Z,
                { className: 'confirm-dialog-button', isText: !0, onClick: s },
                o('Cancel')
              )
            )
          )
        })
      var la = n(517),
        ca = n(73541)
      const da = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { isSchedule: n } = t
            const { messageIds: a } = (0, r.jU)(e).selectedMessages || {},
              { canDeleteForAll: s } = (0, r.xl)(e),
              i = (0, r.jr)(e)
            return {
              selectedMessageIds: a,
              canDeleteForAll: !n && s,
              contactName: i && (0, o.YC)(i.id) ? (0, o.Vl)((0, r.dy)(e, (0, o.zX)(i))) : void 0,
              willDeleteForCurrentUserOnly: i && (0, o.G9)(i) && !s,
              willDeleteForAll: i && (0, o.ZV)(i),
            }
          })((e) => {
            let {
              isOpen: t,
              isSchedule: n,
              selectedMessageIds: s,
              canDeleteForAll: o,
              contactName: r,
              willDeleteForCurrentUserOnly: l,
              willDeleteForAll: c,
              onClose: d,
            } = e
            const {
                deleteMessages: m,
                deleteScheduledMessages: u,
                exitMessageSelectMode: h,
              } = (0, i.Sv)(),
              P = (0, T.Z)(t),
              Z = (0, a.I4)(() => {
                d(), m({ messageIds: s, shouldDeleteForAll: !0 })
              }, [m, s, d]),
              v = (0, a.I4)(() => {
                n ? u({ messageIds: s }) : m({ messageIds: s, shouldDeleteForAll: !1 }), d()
              }, [n, d, u, s, m]),
              g = (0, M.Z)()
            if (
              ((0, a.d4)(() => {
                !t && P && h()
              }, [h, t, P]),
              s)
            )
              return a.ZP.createElement(
                J.Z,
                {
                  isOpen: t,
                  onClose: d,
                  onEnter: o ? void 0 : v,
                  className: 'delete',
                  title: g('Conversation.DeleteManyMessages'),
                },
                a.ZP.createElement('p', null, g('AreYouSureDeleteFewMessages')),
                l &&
                  a.ZP.createElement(
                    'p',
                    null,
                    'This will delete them just for you, not for other participants in the chat.'
                  ),
                c &&
                  a.ZP.createElement('p', null, 'This will delete them for everyone in this chat.'),
                a.ZP.createElement(
                  'div',
                  { className: o ? 'dialog-buttons-column' : 'dialog-buttons' },
                  o &&
                    a.ZP.createElement(
                      $.Z,
                      {
                        color: 'danger',
                        className: 'confirm-dialog-button',
                        isText: !0,
                        onClick: Z,
                      },
                      r
                        ? (0, X.Z)(g('ChatList.DeleteForEveryone', r))
                        : g('Conversation.DeleteMessagesForEveryone')
                    ),
                  a.ZP.createElement(
                    $.Z,
                    { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: v },
                    g(o ? 'ChatList.DeleteForCurrentUser' : 'Delete')
                  ),
                  a.ZP.createElement(
                    $.Z,
                    { className: 'confirm-dialog-button', isText: !0, onClick: d },
                    g('Cancel')
                  )
                )
              )
          })
        ),
        ma = (0, a.X$)(
          (0, i.c$)((e) => {
            const t = (0, r.jU)(e),
              { type: n, chatId: a } = (0, r.Bt)(e) || {},
              s = 'scheduled' === n,
              { canDelete: i } = (0, r.xl)(e),
              o = Boolean(!s && (0, r.nB)(e)),
              l = (0, r.Nu)(e),
              { messageIds: c } = t.selectedMessages || {},
              d = !!a && (0, r.ku)(e, a, c),
              m = !(s || !a) && (0, r.w9)(e, a, c),
              u = t.forwardMessages.isModalShown,
              h = Boolean(
                u || t.requestedDraft || t.requestedAttachBotInChat || t.requestedAttachBotInstall
              )
            return {
              isSchedule: s,
              selectedMessagesCount: (0, r.D7)(e),
              canDeleteMessages: i,
              canReportMessages: o,
              canDownloadMessages: l,
              canForwardMessages: m,
              selectedMessageIds: c,
              hasProtectedMessage: d,
              isAnyModalOpen: h,
            }
          })((e) => {
            let {
              canPost: t,
              isActive: n,
              messageListType: s,
              isSchedule: o,
              selectedMessagesCount: r,
              canDeleteMessages: l,
              canReportMessages: c,
              canDownloadMessages: d,
              canForwardMessages: m,
              hasProtectedMessage: u,
              isAnyModalOpen: h,
              selectedMessageIds: P,
            } = e
            const {
                exitMessageSelectMode: Z,
                openForwardMenuForSelectedMessages: v,
                downloadSelectedMessages: g,
                copySelectedMessages: p,
                showNotification: E,
              } = (0, i.Sv)(),
              C = (0, M.Z)(),
              [b, f, y] = (0, I.Z)(),
              [S, k, N] = (0, I.Z)()
            ;((e) => {
              ;(0, ca.y)(
                e
                  ? {
                      'Mod+C': function (e) {
                        e.preventDefault(), (0, i.Sv)().copySelectedMessages()
                      },
                    }
                  : void 0
              )
            })(n)
            const w = (0, a.I4)(() => {
              Z()
            }, [Z])
            ;(0, a.d4)(
              () =>
                !n || b || S || h
                  ? void 0
                  : (0, la.Z)({ onBackspace: l ? f : void 0, onDelete: l ? f : void 0, onEsc: w }),
              [n, b, S, f, w, h, l]
            )
            const A = (0, a.I4)(() => {
                p(), E({ message: C('Share.Link.Copied') }), Z()
              }, [p, Z, C, E]),
              R = (0, a.I4)(() => {
                g(), Z()
              }, [g, Z]),
              L = (0, T.Z)(r || void 0, !0),
              F = C('VoiceOver.Chat.MessagesSelected', n ? r : L, 'i'),
              x = (0, Q.Z)('MessageSelectToolbar', t && 'with-composer', n && 'shown'),
              B = (e, t, n, s) =>
                a.ZP.createElement(
                  'div',
                  {
                    role: 'button',
                    tabIndex: 0,
                    className: (0, Q.Z)('item', s && 'destructive'),
                    onClick: n,
                    title: t,
                  },
                  a.ZP.createElement('i', { className: `icon-${e}` })
                )
            return a.ZP.createElement(
              'div',
              { className: x },
              a.ZP.createElement(
                'div',
                { className: 'MessageSelectToolbar-inner' },
                a.ZP.createElement(
                  $.Z,
                  { color: 'translucent', round: !0, onClick: w, ariaLabel: 'Exit select mode' },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                a.ZP.createElement(
                  'span',
                  { className: 'MessageSelectToolbar-count', title: F },
                  F
                ),
                Boolean(r) &&
                  a.ZP.createElement(
                    'div',
                    { className: 'MessageSelectToolbar-actions' },
                    'scheduled' !== s && m && B('forward', C('Chat.ForwardActionHeader'), v),
                    c && B('flag', C('Conversation.ReportMessages'), k),
                    d && !u && B('download', C('lng_media_download'), R),
                    !u && B('copy', C('lng_context_copy_selected_items'), A),
                    l && B('delete', C('EditAdminGroupDeleteMessages'), f, !0)
                  )
              ),
              a.ZP.createElement(da, { isOpen: b, isSchedule: o, onClose: y }),
              a.ZP.createElement(_.Z, { isOpen: S, onClose: N, messageIds: P })
            )
          })
        ),
        ua = (0, a.X$)(
          (0, i.c$)((e) => {
            const { chatId: t, messageId: n } = (0, r.jU)(e).seenByModal || {}
            return t && n ? { memberIds: (0, r.hj)(e, t, n)?.seenByUserIds } : {}
          })((e) => {
            let { isOpen: t, memberIds: n } = e
            const { openChat: s, closeSeenByModal: o } = (0, i.Sv)(),
              r = (0, M.Z)(),
              l = (0, a.I4)(
                (e) => {
                  o(),
                    setTimeout(() => {
                      s({ id: e })
                    }, 100)
                },
                [o, s]
              ),
              c = (0, a.I4)(() => {
                o()
              }, [o]),
              d = (0, et.Z)(n, !0)
            return a.ZP.createElement(
              J.Z,
              { isOpen: t, onClose: o, className: 'narrow', title: `Seen by ${n?.length} users` },
              a.ZP.createElement(
                'div',
                { dir: r.isRtl ? 'rtl' : void 0 },
                d &&
                  d.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      {
                        key: e,
                        className: 'chat-item-clickable scroll-item small-icon',
                        onClick: () => l(e),
                      },
                      a.ZP.createElement(Ye.Z, { userId: e, noStatusOrTyping: !0 })
                    )
                  )
              ),
              a.ZP.createElement(
                'div',
                { className: 'dialog-buttons mt-2' },
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: c },
                  r('Close')
                )
              )
            )
          })
        )
      var ha = n(48198),
        Pa = n(2153)
      const Za = (0, a.X$)(
          (0, i.c$)((e) => {
            const { chatId: t, messageId: n } = (0, r.jU)(e).reactorModal || {},
              a = t && n ? (0, r.hj)(e, t, n) : void 0
            return {
              chatId: t,
              messageId: n,
              reactions: a?.reactions,
              reactors: a?.reactors,
              seenByUserIds: a?.seenByUserIds,
              animationLevel: e.settings.byKey.animationLevel,
              availableReactions: e.availableReactions,
            }
          })((e) => {
            let {
              isOpen: t,
              reactors: n,
              reactions: r,
              chatId: l,
              messageId: c,
              seenByUserIds: d,
              animationLevel: m,
              availableReactions: u,
            } = e
            const { loadReactors: h, closeReactorListModal: P, openChat: Z } = (0, i.Sv)(),
              v = (0, i.Rd)().users.byId,
              g = (0, M.Z)(),
              [p, E, C] = (0, I.Z)(!1),
              [b, f] = (0, a.eJ)(void 0),
              y = n && r && n.count >= 10 && r.results.length > 1,
              S = (0, a.sO)()
            ;(0, a.d4)(() => {
              t && !p && (S.current = void 0), p && !t && (C(), f(void 0))
            }, [p, t, C])
            const k = (0, a.I4)(() => {
                S.current && Z({ id: S.current }), P()
              }, [P, Z]),
              N = (0, a.I4)(() => {
                E()
              }, [E]),
              w = (0, a.I4)(
                (e) => {
                  ;(S.current = e), N()
                },
                [N]
              ),
              T = (0, a.I4)(() => {
                h({ chatId: l, messageId: c })
              }, [l, h, c]),
              A = (0, a.Ye)(() => {
                const e = []
                return (
                  n?.reactions?.forEach((t) => {
                    let { reaction: n } = t
                    e.some((e) => (0, o.Hl)(e, n)) || e.push(n)
                  }),
                  e
                )
              }, [n]),
              R = (0, a.Ye)(
                () =>
                  b
                    ? n?.reactions
                        .filter((e) => {
                          let { reaction: t } = e
                          return (0, o.Hl)(t, b)
                        })
                        .map((e) => {
                          let { userId: t } = e
                          return t
                        })
                    : (0, $e.Tw)(
                        n?.reactions
                          .map((e) => {
                            let { userId: t } = e
                            return t
                          })
                          .concat(d || []) || []
                      ),
                [b, n, d]
              ),
              [L, F] = (0, je.Z)(T, R, n && void 0 === n.nextOffset)
            return (
              (0, a.d4)(() => {
                F?.({ direction: s.Uq.Backwards })
              }, [F]),
              a.ZP.createElement(
                J.Z,
                {
                  isOpen: t && !p,
                  onClose: N,
                  className: 'ReactorListModal narrow',
                  title: g('Reactions'),
                  onCloseAnimationEnd: k,
                },
                y &&
                  a.ZP.createElement(
                    'div',
                    { className: 'Reactions' },
                    a.ZP.createElement(
                      $.Z,
                      {
                        className: (0, Q.Z)(!b && 'chosen'),
                        size: 'tiny',
                        ripple: !0,
                        onClick: () => f(void 0),
                      },
                      a.ZP.createElement('i', { className: 'icon-heart' }),
                      Boolean(n?.count) && (0, Ze.bi)(n.count)
                    ),
                    A.map((e) => {
                      const t = r?.results.find((t) => (0, o.Hl)(t.reaction, e))?.count
                      return a.ZP.createElement(
                        $.Z,
                        {
                          key: (0, o.$d)(e),
                          className: (0, Q.Z)((0, o.Hl)(b, e) && 'chosen'),
                          size: 'tiny',
                          ripple: !0,
                          onClick: () => f(e),
                        },
                        a.ZP.createElement(ha.Z, {
                          reaction: e,
                          className: 'reaction-filter-emoji',
                          availableReactions: u,
                        }),
                        Boolean(t) && (0, Ze.bi)(t)
                      )
                    })
                  ),
                a.ZP.createElement(
                  'div',
                  { dir: g.isRtl ? 'rtl' : void 0 },
                  L?.length
                    ? a.ZP.createElement(
                        Xe.Z,
                        { className: 'reactor-list custom-scroll', items: L, onLoadMore: F },
                        L?.flatMap((e) => {
                          const t = v[e],
                            s = n?.reactions.filter((t) => t.userId === e),
                            i = []
                          return (
                            s?.forEach((n) => {
                              ;(b && !(0, o.Hl)(n.reaction, b)) ||
                                i.push(
                                  a.ZP.createElement(
                                    Je.Z,
                                    {
                                      key: `${e}-${(0, o.$d)(n.reaction)}`,
                                      className: 'chat-item-clickable reactors-list-item',
                                      onClick: () => w(e),
                                    },
                                    a.ZP.createElement(De.Z, {
                                      user: t,
                                      size: 'small',
                                      animationLevel: m,
                                      withVideo: !0,
                                    }),
                                    a.ZP.createElement(Pa.Z, { peer: t, withEmojiStatus: !0 }),
                                    n.reaction &&
                                      a.ZP.createElement(ha.Z, {
                                        className: 'reactors-list-emoji',
                                        reaction: n.reaction,
                                        availableReactions: u,
                                      })
                                  )
                                )
                            }),
                            i
                          )
                        })
                      )
                    : a.ZP.createElement(ze.Z, null)
                ),
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: N },
                  g('Close')
                )
              )
            )
          })
        ),
        va = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { activeEmojiInteraction: n } = t
            const a = void 0 !== n.animatedEffect && (0, r.tH)(e, n.animatedEffect)
            return { effectAnimationId: a ? a.id : void 0 }
          })((e) => {
            let { effectAnimationId: t, activeEmojiInteraction: n } = e
            const { stopActiveEmojiInteraction: s } = (0, i.Sv)(),
              [o, r] = (0, I.Z)(!1),
              [l, c] = (0, I.Z)(!1),
              m = (0, a.sO)(),
              u = (0, a.I4)(() => {
                r(),
                  m.current && clearTimeout(m.current),
                  setTimeout(() => {
                    s({ id: n.id })
                  }, 250)
              }, [n.id, r, s]),
              h = (0, a.I4)(
                (e) => {
                  e.target?.closest('.AnimatedEmoji') || u()
                },
                [u]
              )
            ;(0, a.d4)(
              () => (
                document.addEventListener('touchstart', h),
                document.addEventListener('touchmove', h),
                document.addEventListener('mousedown', h),
                document.addEventListener('wheel', h),
                () => {
                  document.removeEventListener('touchstart', h),
                    document.removeEventListener('touchmove', h),
                    document.removeEventListener('mousedown', h),
                    document.removeEventListener('wheel', h)
                }
              ),
              [h]
            ),
              (0, a.bt)(() => {
                const e = (0, S.YW)()
                m.current = setTimeout(() => {
                  u(), e()
                }, 3e3)
              }, [u])
            const P = t && `sticker${t}`,
              Z = (0, R.Z)(P, !t)
            if (!n.startSize) return
            const v = (n.startSize || 0) / 309
            return a.ZP.createElement(
              'div',
              {
                className: (0, Q.Z)(
                  'EmojiInteractionAnimation',
                  o && 'hiding',
                  l && 'playing',
                  n.isReversed && 'reversed'
                ),
                style: `--scale: ${v}; --start-x: ${n.x}px; --start-y: ${n.y}px;`,
              },
              a.ZP.createElement(Yt.Z, {
                key: `effect_${t}`,
                size: 309,
                tgsUrl: Z,
                play: l,
                quality: d.wZ ? 0.5 : void 0,
                forceOnHeavyAnimation: !0,
                noLoop: !0,
                onLoad: c,
              })
            )
          })
        ),
        ga = (0, a.X$)(
          (0, i.c$)((e) => {
            const { chatId: t, messageId: n } = (0, r.jU)(e).messageLanguageModal || {},
              a = (0, r.rB)(e)
            return {
              chatId: t,
              messageId: n,
              activeTranslationLanguage: t && n ? (0, r.xx)(e, t, n) : void 0,
              currentLanguageCode: a,
            }
          })((e) => {
            let {
              isOpen: t,
              chatId: n,
              messageId: s,
              activeTranslationLanguage: o,
              currentLanguageCode: r,
            } = e
            const { requestMessageTranslation: l, closeMessageLanguageModal: c } = (0, i.Sv)(),
              [d, u] = (0, a.eJ)(''),
              h = (0, M.Z)(),
              P = (0, a.I4)(
                (e) => {
                  n && s && (l({ chatId: n, id: s, toLanguageCode: e }), c())
                },
                [n, c, s, l]
              ),
              Z = (0, a.I4)((e) => {
                u(e.target.value)
              }, []),
              v = (0, a.Ye)(
                () =>
                  m.D$f.map((e) => ({
                    langCode: e,
                    translatedName: new Intl.DisplayNames([r], { type: 'language' }).of(e),
                    originalName: new Intl.DisplayNames([e], { type: 'language' }).of(e),
                  })),
                [r]
              )
            ;(0, a.d4)(() => {
              t || u('')
            }, [t])
            const g = (0, a.Ye)(
              () =>
                d.trim()
                  ? v.filter((e) => {
                      let { langCode: t, translatedName: n, originalName: a } = e
                      return (
                        n.toLowerCase().includes(d.toLowerCase()) ||
                        a.toLowerCase().includes(d.toLowerCase()) ||
                        t.toLowerCase().includes(d.toLowerCase())
                      )
                    })
                  : v,
              [v, d]
            )
            return a.ZP.createElement(
              J.Z,
              {
                className: 'Ty4iYfZBkv7TFGwTrzul',
                isSlim: !0,
                isOpen: t,
                hasCloseButton: !0,
                title: h('Language'),
                onClose: c,
              },
              a.ZP.createElement(He.Z, {
                key: 'search',
                value: d,
                onChange: Z,
                placeholder: h('Search'),
                teactExperimentControlled: !0,
              }),
              a.ZP.createElement(
                'div',
                { className: (0, Q.Z)('SxqwP1DiSMFc8Gh_KgfK', 'custom-scroll') },
                g.map((e) => {
                  let { langCode: t, originalName: n, translatedName: s } = e
                  return a.ZP.createElement(
                    Je.Z,
                    {
                      key: t,
                      className: 'GXEouxz4KmZfOmlymVnB',
                      secondaryIcon: o === t ? 'check' : void 0,
                      disabled: o === t,
                      multiline: !0,
                      narrow: !0,
                      onClick: () => P(t),
                    },
                    a.ZP.createElement(
                      'span',
                      { className: (0, Q.Z)('title', 'MpKdUudmoMIsoFkDFNbJ') },
                      (0, X.Z)(n, ['highlight'], { highlight: d })
                    ),
                    a.ZP.createElement(
                      'span',
                      { className: (0, Q.Z)('subtitle', 'B0tluyEaLLlMRQ5TZMEP') },
                      (0, X.Z)(s, ['highlight'], { highlight: d })
                    )
                  )
                })
              )
            )
          })
        )
      var pa = n(93133),
        Ea = n(41470)
      const Ca = (e) => {
        const t = (0, a.sO)(null),
          n = (0, a.I4)(
            (n) => {
              'Enter' === n.key && t.current === document.activeElement && e()
            },
            [e]
          )
        return (
          (0, a.d4)(
            () => (
              window.addEventListener('keydown', n, !1),
              () => window.removeEventListener('keydown', n, !1)
            ),
            [n]
          ),
          t
        )
      }
      var ba = n(40329),
        fa = n(50742)
      const Ia = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              s = a && (0, o.zX)(a)
            return {
              chat: a,
              user: s ? (0, r.dy)(e, s) : void 0,
              isPinned: (0, r.ep)(e, n),
              isMuted: a ? (0, o.i4)(a, (0, r.dZ)(e), (0, r.NJ)(e)) : void 0,
              canChangeFolder: Boolean(e.chatFolders.orderedIds?.length),
            }
          })((e) => {
            let {
              chatId: t,
              withUsername: n,
              onClick: s,
              chat: i,
              user: r,
              isPinned: l,
              isMuted: c,
              canChangeFolder: d,
            } = e
            const [m, u, h] = (0, I.Z)(),
              [P, Z, v] = (0, I.Z)(),
              g = (0, Ea.Z)(
                {
                  chat: i,
                  user: r,
                  isPinned: l,
                  isMuted: c,
                  canChangeFolder: d,
                  handleDelete: u,
                  handleChatFolderChange: Z,
                },
                !0
              ),
              p = (0, a.I4)(() => {
                s(t)
              }, [t, s]),
              E = Ca(p)
            if (i)
              return a.ZP.createElement(
                Je.Z,
                {
                  className: 'chat-item-clickable search-result',
                  onClick: p,
                  contextActions: g,
                  buttonRef: E,
                },
                (0, o.YC)(t)
                  ? a.ZP.createElement(Ye.Z, {
                      userId: t,
                      withUsername: n,
                      avatarSize: 'large',
                      withVideoAvatar: !0,
                    })
                  : a.ZP.createElement(qe.Z, {
                      chatId: t,
                      withUsername: n,
                      avatarSize: 'large',
                      withVideoAvatar: !0,
                    }),
                a.ZP.createElement(ba.Z, { isOpen: m, onClose: h, chat: i }),
                a.ZP.createElement(fa.Z, { isOpen: P, onClose: v, chatId: t })
              )
          })
        ),
        ya = (0, ne.P2)((e) => e(), 6e4, !0),
        Sa = (0, a.X$)(
          (0, i.c$)((e) => {
            const { userIds: t } = e.topPeers,
              n = e.users.byId,
              { recentlyFoundChatIds: a } = e,
              { animationLevel: s } = e.settings.byKey
            return { topUserIds: t, usersById: n, recentlyFoundChatIds: a, animationLevel: s }
          })((e) => {
            let {
              topUserIds: t,
              usersById: n,
              recentlyFoundChatIds: s,
              animationLevel: r,
              onReset: l,
            } = e
            const {
                loadTopUsers: c,
                openChat: d,
                addRecentlyFoundChatId: m,
                clearRecentlyFoundChats: u,
              } = (0, i.Sv)(),
              h = (0, a.sO)(null)
            ;(0, a.d4)(() => {
              ya(() => {
                c()
              })
            }, [c]),
              (0, Xn.Z)(h, !t)
            const P = (0, a.I4)(
                (e) => {
                  d({ id: e, shouldReplaceHistory: !0 }),
                    l(),
                    setTimeout(() => {
                      m({ id: e })
                    }, 250)
                },
                [d, m, l]
              ),
              Z = (0, a.I4)(() => {
                u()
              }, [u]),
              v = (0, M.Z)()
            return a.ZP.createElement(
              'div',
              { className: 'RecentContacts custom-scroll' },
              t &&
                a.ZP.createElement(
                  'div',
                  { className: 'top-peers-section', dir: v.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'div',
                    { ref: h, className: 'top-peers no-selection' },
                    t.map((e) =>
                      a.ZP.createElement(
                        'div',
                        {
                          className: 'top-peer-item',
                          onClick: () => P(e),
                          dir: v.isRtl ? 'rtl' : void 0,
                        },
                        a.ZP.createElement(De.Z, { user: n[e], animationLevel: r, withVideo: !0 }),
                        a.ZP.createElement(
                          'div',
                          { className: 'top-peer-name' },
                          (0, X.Z)((0, o.Vl)(n[e]) || ' ')
                        )
                      )
                    )
                  )
                ),
              s &&
                a.ZP.createElement(
                  'div',
                  { className: 'search-section pt-1' },
                  a.ZP.createElement(
                    'h3',
                    {
                      className: 'section-heading mt-0 recent-chats-header',
                      dir: v.isRtl ? 'rtl' : void 0,
                    },
                    v('Recent'),
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        size: 'smaller',
                        color: 'translucent',
                        ariaLabel: 'Clear recent chats',
                        onClick: Z,
                        isRtl: v.isRtl,
                      },
                      a.ZP.createElement('i', { className: 'icon-close' })
                    )
                  ),
                  s.map((e) => a.ZP.createElement(Ia, { chatId: e, onClick: P }))
                )
            )
          })
        ),
        ka = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n)
            if (!a) return {}
            const s = (0, o.zX)(a)
            return {
              chat: a,
              lastSyncTime: e.lastSyncTime,
              animationLevel: e.settings.byKey.animationLevel,
              ...(s && { privateChatUser: (0, r.dy)(e, s) }),
            }
          })((e) => {
            let {
              message: t,
              searchQuery: n,
              chatId: s,
              chat: r,
              privateChatUser: l,
              animationLevel: c,
              lastSyncTime: d,
            } = e
            const { focusMessage: m } = (0, i.Sv)(),
              { isMobile: u } = (0, U.ZP)(),
              h = (0, o.bf)(t) ? void 0 : (0, o.DH)(t),
              P = (0, R.Z)((0, o.Ti)(t, 'micro')),
              Z = Boolean((0, o.Y5)(t)),
              v = (0, a.I4)(() => {
                m({ chatId: s, messageId: t.id, shouldReplaceHistory: !0 })
              }, [s, m, t.id]),
              g = (0, M.Z)(),
              p = Ca(v)
            if (r)
              return a.ZP.createElement(
                Je.Z,
                {
                  className: 'ChatMessage chat-item-clickable',
                  ripple: !u,
                  onClick: v,
                  buttonRef: p,
                },
                a.ZP.createElement(De.Z, {
                  chat: r,
                  user: l,
                  isSavedMessages: l?.isSelf,
                  lastSyncTime: d,
                  withVideo: !0,
                  animationLevel: c,
                }),
                a.ZP.createElement(
                  'div',
                  { className: 'info' },
                  a.ZP.createElement(
                    'div',
                    { className: 'info-row' },
                    a.ZP.createElement(Pa.Z, {
                      peer: l || r,
                      withEmojiStatus: !0,
                      isSavedMessages: s === l?.id && l?.isSelf,
                    }),
                    a.ZP.createElement(
                      'div',
                      { className: 'message-date' },
                      a.ZP.createElement(Ln.Z, { className: 'date' }, (0, Pe.VX)(g, 1e3 * t.date))
                    )
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'subtitle' },
                    a.ZP.createElement(
                      'div',
                      { className: 'message', dir: 'auto' },
                      (function (e, t, n, s, i) {
                        if (!n) return (0, f.e)(e, t, void 0, s)
                        const r = (0, o.NE)(t)
                        return a.ZP.createElement(
                          'span',
                          { className: 'media-preview' },
                          a.ZP.createElement('img', {
                            src: n,
                            alt: '',
                            className: (0, Q.Z)(
                              'media-preview--image',
                              i && 'round',
                              r && 'media-preview-spoiler'
                            ),
                          }),
                          (0, o.b7)(t) && a.ZP.createElement('i', { className: 'icon-play' }),
                          (0, f.e)(e, t, !0, s)
                        )
                      })(g, t, P || h, n, Z)
                    )
                  )
                )
              )
          })
        ),
        Na = (0, a.X$)((e) => {
          let { searchDate: t, onSelect: n } = e
          const s = (0, a.Ye)(
            () =>
              (function (e) {
                if (e.match(/^\d{2,4}-\d{2}-\d{2}$/g)) {
                  const t = new Date(e)
                  return [{ date: t, text: (0, Pe.xH)(t) }]
                }
                const t = [],
                  n = new Date(),
                  a = n.getFullYear(),
                  s = n.getTime() > new Date(`${a}-${e}`).getTime() ? a : a - 1
                for (let n = 0; n < 8; n++) {
                  const a = new Date(`${s - n}-${e}`)
                  t.push({ date: a, text: (0, Pe.xH)(a) })
                }
                return t
              })(t),
            [t]
          )
          return a.ZP.createElement(
            'section',
            { className: 'DateSuggest custom-scroll custom-scroll-x' },
            s.map((e) => {
              let { date: t, text: s } = e
              return a.ZP.createElement(
                'div',
                { onClick: () => n(t), className: 'date-item', key: s },
                a.ZP.createElement('i', { className: 'icon-calendar' }),
                a.ZP.createElement('span', null, s)
              )
            })
          )
        })
      var wa = n(47262),
        Ma = n(49187)
      const Ta = (0, ne.P2)((e) => e(), 500, !1),
        Aa = (0, a.X$)(
          (0, i.c$)((e) => {
            const { byId: t } = e.chats,
              { userIds: n } = e.contactList || {}
            if (!n) return { chatsById: t }
            const { currentUserId: a, messages: s, lastSyncTime: i } = e,
              {
                fetchingStatus: o,
                globalResults: l,
                localResults: c,
                resultsByType: d,
              } = (0, r.jU)(e).globalSearch,
              { chatIds: m, userIds: u } = l || {},
              { chatIds: h, userIds: P } = c || {},
              { byChatId: Z } = s,
              v = d?.text?.foundIds
            return {
              currentUserId: a,
              localContactIds: n,
              localChatIds: h,
              localUserIds: P,
              globalChatIds: m,
              globalUserIds: u,
              foundIds: v,
              globalMessagesByChatId: Z,
              chatsById: t,
              fetchingStatus: o,
              lastSyncTime: i,
            }
          })((e) => {
            let {
              searchQuery: t,
              searchDate: n,
              dateSearchQuery: r,
              currentUserId: l,
              localContactIds: c,
              localChatIds: d,
              localUserIds: m,
              globalChatIds: u,
              globalUserIds: h,
              foundIds: P,
              globalMessagesByChatId: Z,
              chatsById: v,
              fetchingStatus: g,
              lastSyncTime: p,
              onReset: E,
              onSearchDateSelect: C,
            } = e
            const {
                openChat: b,
                addRecentlyFoundChatId: I,
                searchMessagesGlobal: y,
                setGlobalSearchChatId: S,
              } = (0, i.Sv)(),
              k = (0, a.sO)(null),
              N = (0, M.Z)(),
              { isMobile: w } = (0, U.ZP)(),
              [T, A] = (0, a.eJ)(!1),
              [R, L] = (0, a.eJ)(!1),
              F = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  p &&
                    t === s.Uq.Backwards &&
                    Ta(() => {
                      y({ type: 'text' })
                    })
                },
                [p, y, t]
              ),
              x = (0, a.I4)(
                (e) => {
                  b({ id: e, shouldReplaceHistory: !0 }), e !== l && I({ id: e }), w || E()
                },
                [b, l, w, I, E]
              ),
              B = (0, a.I4)(
                (e) => {
                  S({ id: e })
                },
                [S]
              ),
              D = (0, a.Ye)(() => {
                if (!t || (t.startsWith('@') && t.length < 2)) return Gn.D
                const e = [...(l ? [l] : []), ...(c || [])],
                  n = (0, i.Rd)().users.byId,
                  a = (0, o.kK)(e, n, t, l, N('SavedMessages'))
                return [
                  ...(0, o.ih)(
                    (0, $e.Tw)([...(a || []), ...(d || []), ...(m || [])]),
                    v,
                    void 0,
                    l ? [l] : void 0
                  ),
                ]
              }, [t, l, c, N, d, m, v])
            ;(0, Xn.Z)(k, !D.length, !0)
            const O = (0, a.Ye)(
                () =>
                  !t || t.length < 4 || !u || !h
                    ? Gn.D
                    : (0, o.ih)((0, $e.Tw)([...u, ...h]), v, !0),
                [v, u, h, t]
              ),
              _ = (0, a.Ye)(
                () =>
                  (t || n) && P && 0 !== P.length
                    ? P.map((e) => {
                        const [t, n] = e.split('_')
                        return Z?.[t]?.byId[Number(n)]
                      })
                        .filter(Boolean)
                        .sort((e, t) => t.date - e.date)
                    : Gn.D,
                [P, Z, t, n]
              ),
              $ = (0, a.I4)(() => {
                A(!T)
              }, [T]),
              j = (0, a.I4)(() => {
                L(!R)
              }, [R]),
              G = g && !g.chats && !g.messages && !D.length && !O.length && !_.length
            return t || n
              ? a.ZP.createElement(
                  Xe.Z,
                  {
                    className: 'LeftSearch custom-scroll',
                    items: _,
                    onLoadMore: F,
                    noScrollRestoreOnTop: !0,
                    noFastList: !0,
                  },
                  r &&
                    a.ZP.createElement(
                      'div',
                      { className: 'chat-selection no-selection no-scrollbar' },
                      a.ZP.createElement(Na, { searchDate: r, onSelect: C })
                    ),
                  G &&
                    a.ZP.createElement(wa.Z, {
                      text: N('ChatList.Search.NoResults'),
                      description: N('ChatList.Search.NoResultsDescription'),
                    }),
                  Boolean(D.length) &&
                    a.ZP.createElement(
                      'div',
                      {
                        className: 'chat-selection no-selection no-scrollbar',
                        dir: N.isRtl ? 'rtl' : void 0,
                        ref: k,
                      },
                      D.map((e) =>
                        a.ZP.createElement(Ma.Z, { chatOrUserId: e, onClick: B, clickArg: e })
                      )
                    ),
                  Boolean(D.length) &&
                    a.ZP.createElement(
                      'div',
                      { className: 'search-section' },
                      a.ZP.createElement(
                        'h3',
                        { className: 'section-heading', dir: N.isRtl ? 'auto' : void 0 },
                        D.length > 5 &&
                          a.ZP.createElement(
                            Ln.Z,
                            { className: 'Link', onClick: $ },
                            N(T ? 'ChatList.Search.ShowLess' : 'ChatList.Search.ShowMore')
                          ),
                        N('DialogList.SearchSectionDialogs')
                      ),
                      D.map((e, t) => {
                        if (T || !(t >= 5)) return a.ZP.createElement(Ia, { chatId: e, onClick: x })
                      })
                    ),
                  Boolean(O.length) &&
                    a.ZP.createElement(
                      'div',
                      { className: 'search-section' },
                      a.ZP.createElement(
                        'h3',
                        { className: 'section-heading', dir: N.isRtl ? 'auto' : void 0 },
                        O.length > 5 &&
                          a.ZP.createElement(
                            Ln.Z,
                            { className: 'Link', onClick: j },
                            N(R ? 'ChatList.Search.ShowLess' : 'ChatList.Search.ShowMore')
                          ),
                        N('DialogList.SearchSectionGlobal')
                      ),
                      O.map((e, t) => {
                        if (R || !(t >= 5))
                          return a.ZP.createElement(Ia, { chatId: e, withUsername: !0, onClick: x })
                      })
                    ),
                  Boolean(_.length) &&
                    a.ZP.createElement(
                      'div',
                      { className: 'search-section' },
                      a.ZP.createElement(
                        'h3',
                        { className: 'section-heading', dir: N.isRtl ? 'auto' : void 0 },
                        N('SearchMessages')
                      ),
                      _.map(function (e) {
                        const n = (0, f.e)(N, e),
                          s = v[e.chatId]
                        if (n && s)
                          return a.ZP.createElement(ka, {
                            chatId: e.chatId,
                            message: e,
                            searchQuery: t,
                          })
                      })
                    )
                )
              : a.ZP.createElement(Sa, { onReset: E })
          })
        ),
        Ra = 2 * u.Gw,
        La = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, topicId: a } = t
            const s = (0, r.Z1)(e, n)?.topics?.[a]
            return { topic: s }
          })((e) => {
            let { topicId: t, topic: n, onClick: s } = e
            const i = (0, a.I4)(() => {
                s(t)
              }, [t, s]),
              o = Ca(i)
            if (n)
              return a.ZP.createElement(
                Je.Z,
                {
                  className: 'chat-item-clickable search-result',
                  onClick: i,
                  buttonClassName: 'topic-item',
                  buttonRef: o,
                },
                a.ZP.createElement(Ke.Z, {
                  size: Ra,
                  topic: n,
                  className: 'topic-icon',
                  letterClassName: 'topic-icon-letter',
                }),
                a.ZP.createElement('div', { dir: 'auto', className: 'fullName' }, (0, X.Z)(n.title))
              )
          })
        ),
        Fa = (0, ne.P2)((e) => e(), 500, !0),
        xa = (0, a.X$)(
          (0, i.c$)((e) => {
            const { byId: t } = e.chats,
              {
                currentUserId: n,
                messages: { byChatId: a },
                lastSyncTime: s,
              } = e,
              {
                fetchingStatus: i,
                resultsByType: o,
                foundTopicIds: l,
                chatId: c,
              } = (0, r.jU)(e).globalSearch,
              { foundIds: d } = o?.text || {}
            return {
              currentUserId: n,
              foundIds: d,
              globalMessagesByChatId: a,
              chatsById: t,
              fetchingStatus: i,
              foundTopicIds: l,
              lastSyncTime: s,
              searchChatId: c,
            }
          })((e) => {
            let {
              searchQuery: t,
              dateSearchQuery: n,
              foundIds: o,
              globalMessagesByChatId: r,
              chatsById: l,
              fetchingStatus: c,
              lastSyncTime: d,
              foundTopicIds: m,
              searchChatId: u,
              onSearchDateSelect: h,
              onReset: P,
            } = e
            const { searchMessagesGlobal: Z, openChat: v } = (0, i.Sv)(),
              g = (0, M.Z)(),
              { isMobile: p } = (0, U.ZP)(),
              E = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  d &&
                    t === s.Uq.Backwards &&
                    Fa(() => {
                      Z({ type: 'text' })
                    })
                },
                [d, Z, t]
              ),
              C = (0, a.I4)(
                (e) => {
                  v({ id: u, threadId: e, shouldReplaceHistory: !0 }), p || P()
                },
                [v, u, p, P]
              ),
              b = (0, a.Ye)(
                () =>
                  o && 0 !== o.length
                    ? o
                        .map((e) => {
                          const [t, n] = e.split('_')
                          return r?.[t]?.byId[Number(n)]
                        })
                        .filter(Boolean)
                        .sort((e, t) => t.date - e.date)
                    : Gn.D,
                [o, r]
              ),
              I = c && !c.chats && !c.messages && !b.length && !m?.length
            return a.ZP.createElement(
              'div',
              { className: 'LeftSearch' },
              a.ZP.createElement(
                Xe.Z,
                {
                  className: 'search-content custom-scroll chat-list',
                  items: b,
                  onLoadMore: E,
                  noFastList: !0,
                },
                n &&
                  a.ZP.createElement(
                    'div',
                    { className: 'chat-selection no-selection no-scrollbar' },
                    a.ZP.createElement(Na, { searchDate: n, onSelect: h })
                  ),
                I &&
                  a.ZP.createElement(wa.Z, {
                    text: g('ChatList.Search.NoResults'),
                    description: g('ChatList.Search.NoResultsDescription'),
                  }),
                Boolean(m?.length) &&
                  a.ZP.createElement(
                    'div',
                    { className: 'pb-2' },
                    a.ZP.createElement(
                      'h3',
                      {
                        className: 'section-heading topic-search-heading',
                        dir: g.isRtl ? 'auto' : void 0,
                      },
                      g('Topics')
                    ),
                    m.map((e) => a.ZP.createElement(La, { chatId: u, topicId: e, onClick: C }))
                  ),
                Boolean(b.length) &&
                  a.ZP.createElement(
                    'div',
                    { className: 'pb-2' },
                    a.ZP.createElement(
                      'h3',
                      {
                        className: 'section-heading topic-search-heading',
                        dir: g.isRtl ? 'auto' : void 0,
                      },
                      g('SearchMessages')
                    ),
                    b.map(function (e) {
                      const n = (0, f.e)(g, e),
                        s = l[e.chatId]
                      if (n && s)
                        return a.ZP.createElement(ka, {
                          chatId: e.chatId,
                          message: e,
                          searchQuery: t,
                        })
                    })
                  )
              )
            )
          })
        )
      function Ba(e) {
        return (t, n) => {
          const a = (0, r.jU)(t),
            { byId: s } = t.chats,
            { byId: i } = t.users,
            { fetchingStatus: o, resultsByType: l, chatId: c } = a.globalSearch,
            d = 'audio' !== e ? e : n?.isVoice ? 'voice' : 'audio',
            { byChatId: m } = t.messages,
            u = l?.[d]?.foundIds,
            h = a.activeDownloads.byChatId
          return {
            theme: (0, r.Pu)(t),
            isLoading: void 0 === u || (!!o && Boolean(o.chats || o.messages)),
            chatsById: s,
            usersById: i,
            globalMessagesByChatId: m,
            foundIds: u,
            searchChatId: c,
            activeDownloads: h,
            isChatProtected: c ? (0, r.Z1)(t, c)?.isProtected : void 0,
            lastSyncTime: t.lastSyncTime,
          }
        }
      }
      var Da = n(13709)
      const Oa = 'media',
        Ua = (0, ne.P2)((e) => e(), 500, !0),
        _a = (0, a.X$)(
          (0, i.c$)(Ba(Oa))((e) => {
            let {
              searchQuery: t,
              isLoading: n,
              globalMessagesByChatId: o,
              foundIds: r,
              lastSyncTime: l,
              isChatProtected: c,
            } = e
            const { searchMessagesGlobal: d, openMediaViewer: u } = (0, i.Sv)(),
              h = (0, a.sO)(null),
              P = (0, M.Z)(),
              { observe: Z } = (0, Hn.S1)({ rootRef: h, throttleMs: 500 }),
              v = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  l &&
                    t === s.Uq.Backwards &&
                    Ua(() => {
                      d({ type: Oa })
                    })
                },
                [l, d, t]
              ),
              g = (0, a.Ye)(
                () =>
                  r && o
                    ? r
                        .map((e) => {
                          const [t, n] = e.split('_')
                          return o[t]?.byId[Number(n)]
                        })
                        .filter(Boolean)
                    : Gn.D,
                [o, r]
              ),
              p = (0, a.I4)(
                (e, t) => {
                  u({ chatId: t, mediaId: e, origin: s.bZ.SearchResult })
                },
                [u]
              ),
              E = (0, zn.Z)([t], m.Yan) && !n,
              C = E && r && r.length > 0 && !t,
              b = E && r && r.length > 0 && t,
              f = (0, Q.Z)('search-content custom-scroll', b && 'chat-list')
            return a.ZP.createElement(
              'div',
              { ref: h, className: 'LeftSearch' },
              a.ZP.createElement(
                Xe.Z,
                {
                  className: f,
                  items: g,
                  itemSelector: t ? '.ListItem' : '.Media',
                  onLoadMore: v,
                  noFastList: !0,
                },
                !E && a.ZP.createElement(ze.Z, null),
                E &&
                  (!r || 0 === r.length) &&
                  a.ZP.createElement(wa.Z, {
                    text: P('ChatList.Search.NoResults'),
                    description: P('ChatList.Search.NoResultsDescription'),
                  }),
                C &&
                  a.ZP.createElement(
                    'div',
                    { className: 'media-list', dir: P.isRtl ? 'rtl' : void 0 },
                    g.map((e) =>
                      a.ZP.createElement(Da.Z, {
                        key: `${e.chatId}-${e.id}`,
                        idPrefix: 'search-media',
                        message: e,
                        isProtected: c || e.isProtected,
                        observeIntersection: Z,
                        onClick: p,
                      })
                    )
                  ),
                b &&
                  g.map((e) => a.ZP.createElement(ka, { key: e.id, chatId: e.chatId, message: e }))
              )
            )
          })
        )
      var $a = n(91),
        ja = n(45418)
      const Ga = 'links',
        Va = (0, ne.P2)((e) => e(), 500, !0),
        za = (0, a.X$)(
          (0, i.c$)(Ba(Ga))((e) => {
            let {
              searchQuery: t,
              isLoading: n,
              chatsById: o,
              usersById: r,
              globalMessagesByChatId: l,
              foundIds: c,
              lastSyncTime: d,
              isChatProtected: u,
            } = e
            const { searchMessagesGlobal: h, focusMessage: P } = (0, i.Sv)(),
              Z = (0, a.sO)(null),
              v = (0, M.Z)(),
              { observe: g } = (0, Hn.S1)({ rootRef: Z, throttleMs: 500 }),
              p = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  d &&
                    t === s.Uq.Backwards &&
                    Va(() => {
                      h({ type: Ga })
                    })
                },
                [d, h, t]
              ),
              E = (0, a.Ye)(
                () =>
                  c && l
                    ? c
                        .map((e) => {
                          const [t, n] = e.split('_')
                          return l[t]?.byId[Number(n)]
                        })
                        .filter(Boolean)
                    : Gn.D,
                [l, c]
              ),
              C = (0, a.I4)(
                (e, t) => {
                  P({ chatId: t, messageId: e })
                },
                [P]
              ),
              b = (0, zn.Z)([t], m.Yan) && !n
            return a.ZP.createElement(
              'div',
              { ref: Z, className: 'LeftSearch' },
              a.ZP.createElement(
                Xe.Z,
                {
                  className: 'search-content documents-list custom-scroll',
                  items: E,
                  onLoadMore: p,
                  noFastList: !0,
                },
                !b && a.ZP.createElement(ze.Z, null),
                b &&
                  (!c || 0 === c.length) &&
                  a.ZP.createElement(wa.Z, {
                    text: v('ChatList.Search.NoResults'),
                    description: v('ChatList.Search.NoResultsDescription'),
                  }),
                b &&
                  c &&
                  c.length > 0 &&
                  E.map((e, t) => {
                    const n = 0 === t || (0, Pe.kj)(e.date) !== (0, Pe.kj)(E[t - 1].date)
                    return a.ZP.createElement(
                      'div',
                      {
                        className: 'ListItem small-icon',
                        dir: v.isRtl ? 'rtl' : void 0,
                        key: e.id,
                      },
                      n &&
                        a.ZP.createElement(
                          'p',
                          { className: 'section-heading', dir: v.isRtl ? 'rtl' : void 0 },
                          (0, Pe.np)(v, new Date(1e3 * e.date))
                        ),
                      a.ZP.createElement(ja.Z, {
                        key: e.id,
                        message: e,
                        senderTitle: (0, $a.F)(v, e, o, r),
                        isProtected: u || e.isProtected,
                        observeIntersection: g,
                        onMessageClick: C,
                      })
                    )
                  })
              )
            )
          })
        )
      var Ha = n(82535)
      const Xa = 'documents',
        Ja = (0, ne.P2)((e) => e(), 500, !0),
        qa = (0, a.X$)(
          (0, i.c$)(Ba(Xa))((e) => {
            let {
              searchQuery: t,
              isLoading: n,
              chatsById: r,
              usersById: l,
              globalMessagesByChatId: c,
              foundIds: d,
              activeDownloads: u,
              lastSyncTime: h,
            } = e
            const { searchMessagesGlobal: P, focusMessage: Z } = (0, i.Sv)(),
              v = (0, a.sO)(null),
              g = (0, M.Z)(),
              { observe: p } = (0, Hn.S1)({ rootRef: v, throttleMs: 500 }),
              E = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  h &&
                    t === s.Uq.Backwards &&
                    Ja(() => {
                      P({ type: Xa })
                    })
                },
                [h, P, t]
              ),
              C = (0, a.Ye)(
                () =>
                  d && c
                    ? d
                        .map((e) => {
                          const [t, n] = e.split('_'),
                            a = c[t]?.byId[Number(n)]
                          return a && (0, o.aE)(a) ? a : void 0
                        })
                        .filter(Boolean)
                    : Gn.D,
                [c, d]
              ),
              b = (0, a.I4)(
                (e, t) => {
                  Z({ chatId: t, messageId: e })
                },
                [Z]
              ),
              f = (0, zn.Z)([t], m.Yan) && !n
            return a.ZP.createElement(
              'div',
              { ref: v, className: 'LeftSearch' },
              a.ZP.createElement(
                Xe.Z,
                {
                  className: 'search-content documents-list custom-scroll',
                  items: C,
                  onLoadMore: E,
                  noFastList: !0,
                },
                !f && a.ZP.createElement(ze.Z, null),
                f &&
                  (!d || 0 === d.length) &&
                  a.ZP.createElement(wa.Z, {
                    text: g('ChatList.Search.NoResults'),
                    description: g('ChatList.Search.NoResultsDescription'),
                  }),
                f &&
                  d &&
                  d.length > 0 &&
                  C.map((e, t) => {
                    const n = 0 === t || (0, Pe.kj)(e.date) !== (0, Pe.kj)(C[t - 1].date)
                    return a.ZP.createElement(
                      'div',
                      { className: 'ListItem small-icon', key: e.id },
                      n &&
                        a.ZP.createElement(
                          'p',
                          { className: 'section-heading' },
                          (0, Pe.np)(g, new Date(1e3 * e.date))
                        ),
                      a.ZP.createElement(Ha.Z, {
                        message: e,
                        withDate: !0,
                        datetime: e.date,
                        smaller: !0,
                        sender: (0, $a.F)(g, e, r, l),
                        className: 'scroll-item',
                        isDownloading: u[e.chatId]?.includes(e.id),
                        observeIntersection: p,
                        onDateClick: b,
                      })
                    )
                  })
              )
            )
          })
        )
      var Ya = n(54752)
      const Ka = (0, ne.P2)((e) => e(), 500, !0),
        Wa = (0, a.X$)(
          (0, i.c$)(Ba('audio'))((e) => {
            let {
              theme: t,
              isVoice: n,
              searchQuery: o,
              isLoading: r,
              chatsById: l,
              usersById: c,
              globalMessagesByChatId: d,
              foundIds: u,
              lastSyncTime: h,
              activeDownloads: P,
            } = e
            const { searchMessagesGlobal: Z, focusMessage: v, openAudioPlayer: g } = (0, i.Sv)(),
              p = (0, M.Z)(),
              E = n ? 'voice' : 'audio',
              C = (0, a.I4)(
                (e) => {
                  let { direction: t } = e
                  h &&
                    t === s.Uq.Backwards &&
                    Ka(() => {
                      Z({ type: E })
                    })
                },
                [E, h, Z, o]
              ),
              b = (0, a.Ye)(
                () =>
                  u && d
                    ? u
                        .map((e) => {
                          const [t, n] = e.split('_')
                          return d[t]?.byId[Number(n)]
                        })
                        .filter(Boolean)
                    : Gn.D,
                [d, u]
              ),
              f = (0, a.I4)(
                (e, t) => {
                  v({ chatId: t, messageId: e })
                },
                [v]
              ),
              I = (0, a.I4)(
                (e, t) => {
                  g({ chatId: t, messageId: e })
                },
                [g]
              ),
              y = (0, zn.Z)([o], m.Yan) && !r
            return a.ZP.createElement(
              'div',
              { className: 'LeftSearch' },
              a.ZP.createElement(
                Xe.Z,
                {
                  className: 'search-content documents-list custom-scroll',
                  items: b,
                  onLoadMore: C,
                  noFastList: !0,
                },
                !y && a.ZP.createElement(ze.Z, null),
                y &&
                  (!u || 0 === u.length) &&
                  a.ZP.createElement(wa.Z, {
                    text: p('ChatList.Search.NoResults'),
                    description: p('ChatList.Search.NoResultsDescription'),
                  }),
                y &&
                  u &&
                  u.length > 0 &&
                  b.map((e, n) => {
                    const i = 0 === n || (0, Pe.kj)(e.date) !== (0, Pe.kj)(b[n - 1].date)
                    return a.ZP.createElement(
                      'div',
                      { className: 'ListItem small-icon', key: e.id },
                      i &&
                        a.ZP.createElement(
                          'p',
                          { className: 'section-heading', dir: p.isRtl ? 'rtl' : void 0 },
                          (0, Pe.np)(p, new Date(1e3 * e.date))
                        ),
                      a.ZP.createElement(Ya.ZP, {
                        key: e.id,
                        theme: t,
                        message: e,
                        origin: s.Cr.Search,
                        senderTitle: (0, $a.F)(p, e, l, c),
                        date: e.date,
                        lastSyncTime: h,
                        className: 'scroll-item',
                        onPlay: I,
                        onDateClick: f,
                        canDownload: !l[e.chatId]?.isProtected && !e.isProtected,
                        isDownloading: P[e.chatId]?.includes(e.id),
                      })
                    )
                  })
              )
            )
          })
        ),
        Qa = [
          { type: s.nJ.ChatList, title: 'SearchAllChatsShort' },
          { type: s.nJ.Media, title: 'SharedMediaTab2' },
          { type: s.nJ.Links, title: 'SharedLinksTab2' },
          { type: s.nJ.Files, title: 'SharedFilesTab2' },
          { type: s.nJ.Music, title: 'SharedMusicTab2' },
          { type: s.nJ.Voice, title: 'SharedVoiceTab2' },
        ],
        es = [{ type: s.nJ.ChatList, title: 'All Messages' }, ...Qa.slice(1)],
        ts = Object.keys(s.nJ).length / 2,
        ns = (0, a.X$)(
          (0, i.c$)((e) => {
            const { currentContent: t, chatId: n } = (0, r.jU)(e).globalSearch
            return { currentContent: t, chatId: n }
          })((e) => {
            let {
              searchQuery: t,
              searchDate: n,
              isActive: o,
              currentContent: r = s.nJ.ChatList,
              chatId: l,
              onReset: c,
            } = e
            const { setGlobalSearchContent: d, setGlobalSearchDate: m } = (0, i.Sv)(),
              u = (0, M.Z)(),
              [h, P] = (0, a.eJ)(r),
              Z = (0, a.Ye)(() => (0, Pe.xk)(t), [t]),
              v = (0, a.I4)(
                (e) => {
                  const t = Qa[e]
                  d({ content: t.type }), P(e)
                },
                [d]
              ),
              g = (0, a.I4)(
                (e) => {
                  m({ date: e.getTime() / 1e3 })
                },
                [m]
              )
            ;(0, oe.Z)({ isActive: o, onBack: c })
            const p = (0, a.sO)(null),
              E = (0, Ge.Z)(p, o, void 0, '.ListItem-button', !0)
            return a.ZP.createElement(
              'div',
              { className: 'LeftSearch', ref: p, onKeyDown: E },
              a.ZP.createElement(pa.Z, { activeTab: h, tabs: l ? es : Qa, onSwitchTab: v }),
              a.ZP.createElement(
                G.Z,
                {
                  name: u.isRtl ? 'slide-optimized-rtl' : 'slide-optimized',
                  renderCount: ts,
                  activeKey: r,
                },
                (() => {
                  switch (r) {
                    case s.nJ.ChatList:
                      return l
                        ? a.ZP.createElement(xa, {
                            searchQuery: t,
                            dateSearchQuery: Z,
                            onReset: c,
                            onSearchDateSelect: g,
                          })
                        : a.ZP.createElement(Aa, {
                            searchQuery: t,
                            searchDate: n,
                            dateSearchQuery: Z,
                            onReset: c,
                            onSearchDateSelect: g,
                          })
                    case s.nJ.Media:
                      return a.ZP.createElement(_a, { searchQuery: t })
                    case s.nJ.Links:
                      return a.ZP.createElement(za, { searchQuery: t })
                    case s.nJ.Files:
                      return a.ZP.createElement(qa, { searchQuery: t })
                    case s.nJ.Music:
                      return a.ZP.createElement(Wa, { key: 'audio', searchQuery: t })
                    case s.nJ.Voice:
                      return a.ZP.createElement(Wa, { key: 'voice', isVoice: !0, searchQuery: t })
                    default:
                      return
                  }
                })()
              )
            )
          })
        )
      var as = n(91090)
      const ss = { currentPassword: '', password: '', hint: '', email: '' },
        is = (e, t) => {
          switch (t.type) {
            case 'setCurrentPassword':
              return { ...e, currentPassword: t.payload }
            case 'setPassword':
              return { ...e, password: t.payload }
            case 'setHint':
              return { ...e, hint: t.payload }
            case 'setEmail':
              return { ...e, email: t.payload }
            case 'reset':
              return ss
            default:
              return e
          }
        },
        os = (0, a.X$)((e) => {
          let {
            currentScreen: t,
            editedFolderId: n,
            onReset: o,
            onSaveFilter: r,
            onScreenSelect: l,
          } = e
          const { signOut: c, openDeleteChatFolderModal: d } = (0, i.Sv)(),
            { isMobile: m } = (0, U.ZP)(),
            [u, h] = (0, a.eJ)(!1),
            P = (function (e, t) {
              const n = (0, a.sO)(0),
                s = (0, a.sO)()
              return (0, a.I4)(() => {
                if ((n.current++, 5 === n.current)) return (n.current = 0), void t()
                s.current && clearTimeout(s.current),
                  (s.current = setTimeout(() => {
                    n.current = 0
                  }, 300))
              }, [5, t])
            })(0, () => {
              l(s.MT.Experimental)
            }),
            Z = (0, a.I4)(() => {
              h(!0)
            }, []),
            v = (0, a.I4)(() => {
              h(!1)
            }, []),
            g = (0, a.I4)(() => {
              n && d({ folderId: n })
            }, [n, d]),
            p = (0, a.I4)(() => {
              v(), c({ forceInitApi: !0 })
            }, [v, c]),
            E = (0, a.Ye)(
              () => (e) => {
                let { onTrigger: t, isOpen: n } = e
                return a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    ripple: !m,
                    size: 'smaller',
                    color: 'translucent',
                    className: n ? 'active' : '',
                    onClick: t,
                    ariaLabel: 'More actions',
                  },
                  a.ZP.createElement('i', { className: 'icon-more' })
                )
              },
              [m]
            ),
            C = (0, M.Z)()
          return a.ZP.createElement(
            'div',
            { className: 'left-header' },
            a.ZP.createElement(
              $.Z,
              {
                round: !0,
                size: 'smaller',
                color: 'translucent',
                onClick: o,
                ariaLabel: C('AccDescrGoBack'),
              },
              a.ZP.createElement('i', { className: 'icon-arrow-left' })
            ),
            (function () {
              switch (t) {
                case s.MT.EditProfile:
                  return a.ZP.createElement('h3', null, C('lng_settings_information'))
                case s.MT.General:
                  return a.ZP.createElement('h3', null, C('General'))
                case s.MT.QuickReaction:
                  return a.ZP.createElement('h3', null, C('DoubleTapSetting'))
                case s.MT.CustomEmoji:
                  return a.ZP.createElement('h3', null, C('Emoji'))
                case s.MT.Notifications:
                  return a.ZP.createElement('h3', null, C('Notifications'))
                case s.MT.DataStorage:
                  return a.ZP.createElement('h3', null, C('DataSettings'))
                case s.MT.Privacy:
                  return a.ZP.createElement('h3', null, C('PrivacySettings'))
                case s.MT.Language:
                  return a.ZP.createElement('h3', null, C('Language'))
                case s.MT.DoNotTranslate:
                  return a.ZP.createElement('h3', null, C('DoNotTranslate'))
                case s.MT.Stickers:
                  return a.ZP.createElement('h3', null, C('StickersName'))
                case s.MT.Experimental:
                  return a.ZP.createElement('h3', null, C('lng_settings_experimental'))
                case s.MT.GeneralChatBackground:
                  return a.ZP.createElement('h3', null, C('ChatBackground'))
                case s.MT.GeneralChatBackgroundColor:
                  return a.ZP.createElement('h3', null, C('SetColor'))
                case s.MT.PrivacyPhoneNumber:
                  return a.ZP.createElement('h3', null, C('PrivacyPhone'))
                case s.MT.PrivacyLastSeen:
                  return a.ZP.createElement('h3', null, C('PrivacyLastSeen'))
                case s.MT.PrivacyProfilePhoto:
                  return a.ZP.createElement('h3', null, C('Privacy.ProfilePhoto'))
                case s.MT.PrivacyForwarding:
                  return a.ZP.createElement('h3', null, C('PrivacyForwards'))
                case s.MT.PrivacyVoiceMessages:
                  return a.ZP.createElement('h3', null, C('PrivacyVoiceMessages'))
                case s.MT.PrivacyGroupChats:
                  return a.ZP.createElement('h3', null, C('AutodownloadGroupChats'))
                case s.MT.PrivacyPhoneNumberAllowedContacts:
                case s.MT.PrivacyLastSeenAllowedContacts:
                case s.MT.PrivacyProfilePhotoAllowedContacts:
                case s.MT.PrivacyForwardingAllowedContacts:
                case s.MT.PrivacyVoiceMessagesAllowedContacts:
                case s.MT.PrivacyGroupChatsAllowedContacts:
                  return a.ZP.createElement('h3', null, C('AlwaysShareWith'))
                case s.MT.PrivacyPhoneNumberDeniedContacts:
                case s.MT.PrivacyLastSeenDeniedContacts:
                case s.MT.PrivacyProfilePhotoDeniedContacts:
                case s.MT.PrivacyForwardingDeniedContacts:
                case s.MT.PrivacyVoiceMessagesDeniedContacts:
                case s.MT.PrivacyGroupChatsDeniedContacts:
                  return a.ZP.createElement('h3', null, C('NeverShareWith'))
                case s.MT.ActiveSessions:
                  return a.ZP.createElement('h3', null, C('SessionsTitle'))
                case s.MT.ActiveWebsites:
                  return a.ZP.createElement('h3', null, C('OtherWebSessions'))
                case s.MT.PrivacyBlockedUsers:
                  return a.ZP.createElement('h3', null, C('BlockedUsers'))
                case s.MT.TwoFaDisabled:
                case s.MT.TwoFaEnabled:
                  return a.ZP.createElement('h3', null, C('TwoStepVerification'))
                case s.MT.TwoFaNewPassword:
                case s.MT.TwoFaChangePasswordNew:
                case s.MT.TwoFaChangePasswordConfirm:
                  return a.ZP.createElement('h3', null, C('PleaseEnterCurrentPassword'))
                case s.MT.TwoFaNewPasswordConfirm:
                  return a.ZP.createElement('h3', null, C('PleaseReEnterPassword'))
                case s.MT.TwoFaNewPasswordHint:
                case s.MT.TwoFaChangePasswordHint:
                  return a.ZP.createElement('h3', null, C('PasswordHint'))
                case s.MT.TwoFaNewPasswordEmail:
                case s.MT.TwoFaRecoveryEmail:
                  return a.ZP.createElement('h3', null, C('RecoveryEmailTitle'))
                case s.MT.TwoFaNewPasswordEmailCode:
                case s.MT.TwoFaRecoveryEmailCode:
                  return a.ZP.createElement('h3', null, 'Recovery Email Code')
                case s.MT.TwoFaCongratulations:
                  return a.ZP.createElement('h3', null, C('TwoStepVerificationPasswordSet'))
                case s.MT.TwoFaChangePasswordCurrent:
                case s.MT.TwoFaTurnOff:
                case s.MT.TwoFaRecoveryEmailCurrentPassword:
                  return a.ZP.createElement('h3', null, C('PleaseEnterCurrentPassword'))
                case s.MT.PasscodeDisabled:
                case s.MT.PasscodeEnabled:
                case s.MT.PasscodeNewPasscode:
                case s.MT.PasscodeNewPasscodeConfirm:
                case s.MT.PasscodeCongratulations:
                  return a.ZP.createElement('h3', null, C('Passcode'))
                case s.MT.PasscodeTurnOff:
                  return a.ZP.createElement('h3', null, C('PasscodeController.Disable.Title'))
                case s.MT.PasscodeChangePasscodeCurrent:
                case s.MT.PasscodeChangePasscodeNew:
                  return a.ZP.createElement('h3', null, C('PasscodeController.Change.Title'))
                case s.MT.PasscodeChangePasscodeConfirm:
                  return a.ZP.createElement(
                    'h3',
                    null,
                    C('PasscodeController.ReEnterPasscode.Placeholder')
                  )
                case s.MT.Folders:
                  return a.ZP.createElement('h3', null, C('Filters'))
                case s.MT.FoldersCreateFolder:
                  return a.ZP.createElement('h3', null, C('FilterNew'))
                case s.MT.FoldersEditFolder:
                case s.MT.FoldersEditFolderFromChatList:
                  return a.ZP.createElement(
                    'div',
                    { className: 'settings-main-header' },
                    a.ZP.createElement('h3', null, C('FilterEdit')),
                    Boolean(n) &&
                      a.ZP.createElement(
                        V.Z,
                        { className: 'settings-more-menu', trigger: E, positionX: 'right' },
                        a.ZP.createElement(
                          z.Z,
                          { icon: 'delete', destructive: !0, onClick: g },
                          C('Delete')
                        )
                      )
                  )
                case s.MT.FoldersIncludedChats:
                case s.MT.FoldersIncludedChatsFromChatList:
                case s.MT.FoldersExcludedChats:
                case s.MT.FoldersExcludedChatsFromChatList:
                  return a.ZP.createElement(
                    'div',
                    { className: 'settings-main-header' },
                    t === s.MT.FoldersIncludedChats || t === s.MT.FoldersIncludedChatsFromChatList
                      ? a.ZP.createElement('h3', null, C('FilterInclude'))
                      : a.ZP.createElement('h3', null, C('FilterExclude')),
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        size: 'smaller',
                        color: 'translucent',
                        className: 'color-primary',
                        onClick: r,
                        ariaLabel: C('AutoDeleteConfirm'),
                      },
                      a.ZP.createElement('i', { className: 'icon-check' })
                    )
                  )
                default:
                  return a.ZP.createElement(
                    'div',
                    { className: 'settings-main-header' },
                    a.ZP.createElement('h3', { onClick: P }, C('SETTINGS')),
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        ripple: !m,
                        size: 'smaller',
                        color: 'translucent',
                        onClick: () => l(s.MT.EditProfile),
                        ariaLabel: C('lng_settings_information'),
                      },
                      a.ZP.createElement('i', { className: 'icon-edit' })
                    ),
                    a.ZP.createElement(
                      V.Z,
                      { className: 'settings-more-menu', trigger: E, positionX: 'right' },
                      a.ZP.createElement(z.Z, { icon: 'logout', onClick: Z }, C('LogOutTitle'))
                    )
                  )
              }
            })(),
            a.ZP.createElement(mt.Z, {
              isOpen: u,
              onClose: v,
              text: C('lng_sure_logout'),
              confirmLabel: C('AccountSettings.Logout'),
              confirmHandler: p,
              confirmIsDestructive: !0,
            })
          )
        })
      var rs = n(16568),
        ls = n(70180),
        cs = n(4863)
      const ds = (0, a.X$)(
        (0, i.c$)((e) => {
          const { currentUserId: t, lastSyncTime: n } = e
          return {
            sessionCount: e.activeSessions.orderedHashes.length,
            currentUser: t ? (0, r.dy)(e, t) : void 0,
            lastSyncTime: n,
            canBuyPremium: !(0, r.oe)(e),
          }
        })((e) => {
          let {
            isActive: t,
            onScreenSelect: n,
            onReset: o,
            currentUser: r,
            sessionCount: l,
            lastSyncTime: c,
            canBuyPremium: d,
          } = e
          const { loadProfilePhotos: m, loadAuthorizations: u, openPremiumModal: h } = (0, i.Sv)(),
            P = (0, M.Z)(),
            Z = r?.id
          return (
            (0, a.d4)(() => {
              Z && c && m({ profileId: Z })
            }, [c, Z, m]),
            (0, oe.Z)({ isActive: t, onBack: o }),
            (0, a.d4)(() => {
              c && u()
            }, [c, u]),
            a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-main-menu' },
                r &&
                  a.ZP.createElement(rs.Z, {
                    userId: r.id,
                    canPlayVideo: Boolean(t),
                    forceShowSelf: !0,
                  }),
                r && a.ZP.createElement(ls.Z, { chatOrUserId: r.id, forceShowSelf: !0 }),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'settings', onClick: () => n(s.MT.General) },
                  P('Telegram.GeneralSettingsViewController')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'unmute', onClick: () => n(s.MT.Notifications) },
                  P('Notifications')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'data', onClick: () => n(s.MT.DataStorage) },
                  P('DataSettings')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'lock', onClick: () => n(s.MT.Privacy) },
                  P('PrivacySettings')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'folder', onClick: () => n(s.MT.Folders) },
                  P('Filters')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'active-sessions', onClick: () => n(s.MT.ActiveSessions) },
                  P('SessionsTitle'),
                  l > 0 &&
                    a.ZP.createElement('span', { className: 'settings-item__current-value' }, l)
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'language', onClick: () => n(s.MT.Language) },
                  P('Language'),
                  a.ZP.createElement(
                    'span',
                    { className: 'settings-item__current-value' },
                    P.langName
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'stickers', onClick: () => n(s.MT.Stickers) },
                  P('StickersName')
                ),
                d &&
                  a.ZP.createElement(
                    Je.Z,
                    {
                      leftElement: a.ZP.createElement(cs.Z, { withGradient: !0, big: !0 }),
                      className: 'settings-main-menu-premium',
                      onClick: () => h(),
                    },
                    P('TelegramPremium')
                  )
              )
            )
          )
        })
      )
      var ms = n(90730),
        us = n(41151)
      const hs = /https:\/\/t\.me\/?/i,
        Ps = /^\D([a-zA-Z0-9_]+)$/,
        Zs = (0, ne.Ds)((e) => e(), 250, !1),
        vs = (0, a.X$)((e) => {
          let {
            currentUsername: t,
            asLink: n,
            isLoading: s,
            isUsernameAvailable: o,
            checkedUsername: r,
            onChange: l,
          } = e
          const { checkUsername: c, checkPublicLink: d } = (0, i.Sv)(),
            [u, h] = (0, a.eJ)(t || ''),
            P = (0, M.Z)(),
            Z = n ? 'SetUrl' : 'Username',
            v = P(n ? 'SetUrlPlaceholder' : 'Username'),
            g = (0, T.Z)(o),
            p = t !== u ? (null != o ? o : g) : void 0,
            E = u && t !== u && r !== u,
            [C, b] = (0, a.Ye)(
              () =>
                u.length
                  ? u.length < 5
                    ? [void 0, P(`${Z}InvalidShort`)]
                    : u.length > 32
                    ? [void 0, P(`${Z}InvalidLong`)]
                    : Ps.test(u)
                    ? void 0 === p || E
                      ? []
                      : [p ? P(`${Z}Available`, v) : void 0, !1 === p ? P(`${Z}InUse`) : void 0]
                    : [void 0, P(`${Z}Invalid`)]
                  : [],
              [u, p, E, P, Z, v]
            )
          ;(0, a.d4)(() => {
            h(t || '')
          }, [n, t])
          const f = (0, a.I4)(
            (e) => {
              const a = e.target.value.trim().replace(hs, '')
              h(a)
              const s = (function (e) {
                return 0 === e.length || (e.length >= 5 && e.length <= 32 && Ps.test(e))
              })(a)
              s &&
                (l?.(a),
                Zs(() => {
                  a !== t && (n ? d : c)({ username: a })
                }))
            },
            [n, d, c, t, l]
          )
          return a.ZP.createElement(He.Z, {
            value: `${n ? m.zHP : ''}${u}`,
            onChange: f,
            label: E ? P('Checking') : v,
            error: b,
            success: C,
            readOnly: s,
            teactExperimentControlled: !0,
          })
        }),
        gs = (0, a.X$)((e) => {
          let {
              ref: t,
              id: n,
              className: s,
              value: i,
              label: o,
              error: r,
              success: l,
              disabled: c,
              readOnly: d,
              placeholder: m,
              autoComplete: u,
              inputMode: h,
              maxLength: P,
              maxLengthIndicator: Z,
              tabIndex: v,
              onChange: g,
              onInput: p,
              onKeyPress: E,
              onKeyDown: C,
              onBlur: b,
              onPaste: f,
              noReplaceNewlines: I,
            } = e,
            y = (0, a.sO)(null)
          t && (y = t)
          const S = (0, M.Z)(),
            k = r || l || o,
            N = (0, Q.Z)(
              'input-group',
              i && 'touched',
              r ? 'error' : l && 'success',
              c && 'disabled',
              d && 'disabled',
              k && 'with-label',
              s
            )
          ;(0, a.d4)(() => {
            const e = y.current
            e && ((e.style.height = '0'), (e.style.height = `${e.scrollHeight}px`))
          }, [])
          const w = (0, a.I4)(
            (e) => {
              if (!I) {
                const t = e.currentTarget.selectionEnd
                ;(e.currentTarget.value = e.currentTarget.value.replace(/\n/g, ' ')),
                  (e.currentTarget.selectionEnd = t)
              }
              ;(e.currentTarget.style.height = '0'),
                (e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`),
                g?.(e)
            },
            [I, g]
          )
          return a.ZP.createElement(
            'div',
            { className: N, dir: S.isRtl ? 'rtl' : void 0 },
            a.ZP.createElement('textarea', {
              ref: y,
              className: 'form-control',
              id: n,
              dir: 'auto',
              value: i || '',
              tabIndex: v,
              placeholder: m,
              maxLength: P,
              autoComplete: u,
              inputMode: h,
              disabled: c,
              readOnly: d,
              onChange: w,
              onInput: p,
              onKeyPress: E,
              onKeyDown: C,
              onBlur: b,
              onPaste: f,
              'aria-label': k,
            }),
            k && a.ZP.createElement('label', { htmlFor: n }, k),
            Z && a.ZP.createElement('div', { className: 'max-length-indicator' }, Z)
          )
        })
      var ps = n(64319)
      var Es = n(80036)
      const Cs = { x: 0, y: 0 },
        bs = (0, a.X$)((e) => {
          let {
            children: t,
            id: n,
            onDrag: s,
            onDragEnd: i,
            style: o,
            knobStyle: r,
            isDisabled: l,
          } = e
          const c = (0, M.Z)(),
            d = (0, a.sO)(null),
            [m, u] = (0, a.eJ)({ isDragging: !1, origin: Cs, translation: Cs }),
            h = (e) => {
              e.stopPropagation(), e.preventDefault()
              const { x: t, y: n } = fs(e)
              u({
                ...m,
                isDragging: !0,
                origin: { x: t, y: n },
                width: d.current?.offsetWidth,
                height: d.current?.offsetHeight,
              })
            },
            P = (0, a.I4)(
              (e) => {
                const { x: t, y: a } = fs(e),
                  i = { x: t - m.origin.x, y: a - m.origin.y }
                u((e) => ({ ...e, translation: i })), s(i, n)
              },
              [n, s, m.origin.x, m.origin.y]
            ),
            Z = (0, a.I4)(() => {
              requestAnimationFrame(() => {
                u((e) => ({ ...e, isDragging: !1, width: void 0, height: void 0 })), i()
              })
            }, [i])
          ;(0, a.d4)(() => {
            m.isDragging && l && u((e) => ({ ...e, isDragging: !1, width: void 0, height: void 0 }))
          }, [l, m.isDragging]),
            (0, a.d4)(
              () => (
                m.isDragging
                  ? (window.addEventListener('touchmove', P),
                    window.addEventListener('mousemove', P),
                    window.addEventListener('touchend', Z),
                    window.addEventListener('touchcancel', Z),
                    window.addEventListener('mouseup', Z))
                  : (window.removeEventListener('touchmove', P),
                    window.removeEventListener('mousemove', P),
                    window.removeEventListener('touchend', Z),
                    window.removeEventListener('touchcancel', Z),
                    window.removeEventListener('mouseup', Z),
                    u((e) => ({ ...e, translation: Cs }))),
                () => {
                  m.isDragging &&
                    (window.removeEventListener('touchmove', P),
                    window.removeEventListener('mousemove', P),
                    window.removeEventListener('touchend', Z),
                    window.removeEventListener('touchcancel', Z),
                    window.removeEventListener('mouseup', Z))
                }
              ),
              [P, Z, m.isDragging]
            )
          const v = (0, Q.Z)('C9QYXaRLeCEFngOBl4S3', m.isDragging && 'vhGsRt79lQzzuXny9KG8'),
            g = (0, a.Ye)(
              () =>
                (0, Es.Z)(
                  m.isDragging &&
                    `transform: translate(${m.translation.x}px, ${m.translation.y}px)`,
                  m.width ? `width: ${m.width}px` : void 0,
                  m.height ? `height: ${m.height}px` : void 0,
                  o
                ),
              [o, m.height, m.isDragging, m.translation.x, m.translation.y, m.width]
            )
          return a.ZP.createElement(
            'div',
            { style: g, className: v, ref: d },
            t,
            !l &&
              a.ZP.createElement(
                'div',
                {
                  'aria-label': c('i18n_dragToSort'),
                  tabIndex: 0,
                  role: 'button',
                  className: (0, Q.Z)('oGgH1RraeCPayQnxA8C_', 'draggable-knob'),
                  onMouseDown: h,
                  onTouchStart: h,
                  style: r,
                },
                a.ZP.createElement('i', { className: 'icon-sort', 'aria-hidden': !0 })
              )
          )
        })
      function fs(e) {
        let t, n
        return (
          'touches' in e
            ? ((t = e.touches[0].clientX), (n = e.touches[0].clientY))
            : ((t = e.clientX), (n = e.clientY)),
          { x: t, y: n }
        )
      }
      const Is = (0, a.X$)((e) => {
          let { chatId: t, usernames: n, onEditUsername: s } = e
          const {
              showNotification: o,
              toggleUsername: r,
              toggleChatUsername: l,
              sortUsernames: c,
              sortChatUsernames: d,
            } = (0, i.Sv)(),
            m = (0, M.Z)(),
            [u, h] = (0, a.eJ)(),
            P = (0, a.Ye)(
              () =>
                n.map((e) => {
                  let { username: t } = e
                  return t
                }),
              [n]
            ),
            Z = (0, T.Z)(P),
            [v, g] = (0, a.eJ)({ orderedUsernames: P, dragOrderUsernames: P, draggedIndex: void 0 })
          ;(0, a.d4)(() => {
            Z !== P && g({ orderedUsernames: P, dragOrderUsernames: P, draggedIndex: void 0 })
          }, [Z, P])
          const p = (0, a.I4)(
              (e) => {
                ;(0, ps.TE)(`@${e}`), o({ message: m('UsernameCopied') })
              },
              [m, o]
            ),
            E = (0, a.I4)(
              (e) => {
                e.isEditable ? s(e.username) : h(e)
              },
              [s]
            ),
            C = (0, a.I4)(() => {
              h(void 0)
            }, []),
            b = (0, a.I4)(() => {
              t
                ? l({ chatId: t, username: u.username, isActive: !u.isActive })
                : r({ username: u.username, isActive: !u.isActive }),
                C()
            }, [t, C, l, r, u]),
            f = (0, a.I4)(
              (e, t) => {
                const n = Math.round(e.y / 60),
                  a = v.orderedUsernames?.indexOf(t) || 0,
                  s = v.orderedUsernames?.filter((e) => e !== t)
                s &&
                  (0, te.Kh)(a + n, 0, P.length) &&
                  (s.splice(a + n, 0, t),
                  g((e) => ({ ...e, draggedIndex: a, dragOrderUsernames: s })))
              },
              [v.orderedUsernames, P.length]
            ),
            I = (0, a.I4)(() => {
              g(
                (e) => (
                  t
                    ? d({ chatId: t, usernames: e.dragOrderUsernames })
                    : c({ usernames: e.dragOrderUsernames }),
                  { ...e, orderedUsernames: e.dragOrderUsernames, draggedIndex: void 0 }
                )
              )
            }, [t, d, c])
          return a.ZP.createElement(
            a.ZP.Fragment,
            null,
            a.ZP.createElement(
              'div',
              { className: 'u8GGVdXgbKUMvoqqs0VJ' },
              a.ZP.createElement(
                'h4',
                { className: 'sPTmRsKHnc3FL9AubUaY', dir: m.isRtl ? 'rtl' : void 0 },
                m('lng_usernames_subtitle')
              ),
              a.ZP.createElement(
                'div',
                { className: 'pWxbEJm12NZb25lGmdwA', style: `height: ${60 * n.length}px` },
                n.map((e, t) => {
                  var n, s
                  const i = v.draggedIndex === t,
                    o =
                      60 *
                      (null !== (n = v.orderedUsernames?.indexOf(e.username)) && void 0 !== n
                        ? n
                        : 0),
                    r =
                      60 *
                      (null !== (s = v.dragOrderUsernames?.indexOf(e.username)) && void 0 !== s
                        ? s
                        : 0),
                    l = e.isEditable
                      ? 'lng_usernames_edit'
                      : e.isActive
                      ? 'lng_usernames_active'
                      : 'lng_usernames_non_active'
                  return a.ZP.createElement(
                    bs,
                    {
                      key: e.username,
                      id: e.username,
                      onDrag: f,
                      onDragEnd: I,
                      style: `top: ${i ? o : r}px;`,
                      knobStyle: (m.isRtl ? 'left' : 'right') + ': 3rem;',
                      isDisabled: !e.isActive,
                    },
                    a.ZP.createElement(
                      Je.Z,
                      {
                        key: e.username,
                        className: (0, Q.Z)('mb-2 no-icon', 'AWgYeVXfLin4VAmQzhKQ'),
                        narrow: !0,
                        secondaryIcon: 'more',
                        icon: e.isActive ? 'link' : 'link-broken',
                        multiline: !0,
                        contextActions: [
                          {
                            handler: () => {
                              p(e.username)
                            },
                            title: m('Copy'),
                            icon: 'copy',
                          },
                        ],
                        onClick: () => {
                          E(e)
                        },
                      },
                      a.ZP.createElement('span', { className: 'title' }, '@', e.username),
                      a.ZP.createElement('span', { className: 'subtitle' }, m(l))
                    )
                  )
                })
              ),
              a.ZP.createElement(
                'p',
                { className: 'YqnFSIc98kYMRge1RrlJ', dir: m.isRtl ? 'rtl' : void 0 },
                m('lng_usernames_description')
              )
            ),
            a.ZP.createElement(mt.Z, {
              isOpen: Boolean(u),
              onClose: C,
              title: m(
                u?.isActive ? 'Username.DeactivateAlertTitle' : 'Username.ActivateAlertTitle'
              ),
              text: m(u?.isActive ? 'Username.DeactivateAlertText' : 'Username.ActivateAlertText'),
              confirmLabel: m(
                u?.isActive ? 'Username.DeactivateAlertHide' : 'Username.ActivateAlertShow'
              ),
              confirmHandler: b,
              confirmIsDestructive: !u?.isActive,
            })
          )
        }),
        ys = (0, ne.P2)((e) => e(), 6e4, !0),
        Ss = 'Please provide your first name',
        ks = (0, a.X$)(
          (0, i.c$)((e) => {
            const { currentUserId: t } = e,
              {
                progress: n,
                isUsernameAvailable: a,
                checkedUsername: s,
                error: i,
              } = (0, r.jU)(e).profileEdit || {},
              l = t ? (0, r.dy)(e, t) : void 0,
              c = (0, hn.M)(e, 'aboutLength')
            if (!l)
              return {
                progress: n,
                checkedUsername: s,
                isUsernameAvailable: a,
                editUsernameError: i,
                maxBioLength: c,
              }
            const { firstName: d, lastName: m, usernames: u, fullInfo: h } = l,
              { bio: P } = h || {}
            return {
              currentAvatarHash: (0, o.RT)(l),
              currentFirstName: d,
              currentLastName: m,
              currentBio: P,
              progress: n,
              isUsernameAvailable: a,
              checkedUsername: s,
              editUsernameError: i,
              maxBioLength: c,
              usernames: u,
            }
          })((e) => {
            let {
              isActive: t,
              currentAvatarHash: n,
              currentFirstName: o,
              currentLastName: r,
              currentBio: l,
              progress: c,
              checkedUsername: d,
              editUsernameError: u,
              isUsernameAvailable: h,
              maxBioLength: P,
              usernames: Z,
              onReset: v,
            } = e
            const { loadCurrentUser: g, updateProfile: p } = (0, i.Sv)(),
              E = (0, M.Z)(),
              C =
                (0, a.Ye)(
                  () =>
                    Z?.find((e) => {
                      let { isEditable: t } = e
                      return t
                    }),
                  [Z]
                )?.username || '',
              [b, f] = (0, a.eJ)(!1),
              [I, y] = (0, a.eJ)(!1),
              [S, k] = (0, a.eJ)(),
              [N, w] = (0, a.eJ)(),
              [L, F] = (0, a.eJ)(o || ''),
              [x, B] = (0, a.eJ)(r || ''),
              [D, O] = (0, a.eJ)(l || ''),
              [U, _] = (0, a.eJ)(C),
              $ = (0, R.Z)(n, !1, A.IU.BlobUrl),
              j = c === s.rN.InProgress,
              G = !1 === U,
              V = (0, T.Z)(h),
              z = null != h ? h : V,
              H = Z && Z.length > 1,
              J = (0, a.Ye)(() => !G && (Boolean(N) || I || (b && !0 === z)), [G, N, I, b, z])
            ;(0, oe.Z)({ isActive: t, onBack: v }),
              (0, a.d4)(() => {
                ys(() => {
                  g()
                })
              }, [g]),
              (0, a.d4)(() => {
                w(void 0)
              }, [$]),
              (0, a.d4)(() => {
                F(o || ''), B(r || ''), O(l || '')
              }, [o, r, l]),
              (0, a.d4)(() => {
                _(C || '')
              }, [C]),
              (0, a.d4)(() => {
                c === s.rN.Complete && (y(!1), f(!1), k(void 0))
              }, [c])
            const q = (0, a.I4)((e) => {
                w(e)
              }, []),
              Y = (0, a.I4)((e) => {
                F(e.target.value), y(!0)
              }, []),
              K = (0, a.I4)((e) => {
                B(e.target.value), y(!0)
              }, []),
              W = (0, a.I4)((e) => {
                O(e.target.value), y(!0)
              }, []),
              Q = (0, a.I4)(
                (e) => {
                  _(e), f(C !== e)
                },
                [C]
              ),
              ee = (0, a.I4)(() => {
                const e = L.trim(),
                  t = x.trim(),
                  n = D.trim()
                U &&
                  (e.length
                    ? p({
                        photo: N,
                        ...(I && { firstName: e, lastName: t, bio: n }),
                        ...(b && { username: U }),
                      })
                    : k(Ss))
              }, [N, L, x, D, I, U, b, p])
            return a.ZP.createElement(
              'div',
              { className: 'settings-fab-wrapper' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content no-border custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-edit-profile settings-item' },
                  a.ZP.createElement(ms.Z, {
                    currentAvatarBlobUrl: $,
                    onChange: q,
                    title: 'Edit your profile photo',
                    disabled: j,
                  }),
                  a.ZP.createElement(He.Z, {
                    value: L,
                    onChange: Y,
                    label: E('FirstName'),
                    disabled: j,
                    error: S === Ss ? S : void 0,
                  }),
                  a.ZP.createElement(He.Z, {
                    value: x,
                    onChange: K,
                    label: E('LastName'),
                    disabled: j,
                  }),
                  a.ZP.createElement(gs, {
                    value: D,
                    onChange: W,
                    label: E('UserBio'),
                    disabled: j,
                    maxLength: P,
                    maxLengthIndicator: P ? (P - D.length).toString() : void 0,
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'settings-item-description', dir: E.isRtl ? 'rtl' : void 0 },
                    (0, X.Z)(E('lng_settings_about_bio'), ['br', 'simple_markdown'])
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: E.isRtl ? 'rtl' : void 0 },
                    E('Username')
                  ),
                  a.ZP.createElement(vs, {
                    currentUsername: C,
                    isLoading: j,
                    isUsernameAvailable: h,
                    checkedUsername: d,
                    onChange: Q,
                  }),
                  u === m.WfZ &&
                    (function () {
                      const e = `${m.zHP}${m.LlA}`
                      return a.ZP.createElement(
                        'p',
                        { className: 'settings-item-description', dir: E.isRtl ? 'rtl' : void 0 },
                        E('lng_username_purchase_available')
                          .replace('{link}', '%PURCHASE_LINK%')
                          .split('%')
                          .map((t) =>
                            'PURCHASE_LINK' === t
                              ? a.ZP.createElement(sa.Z, { url: e, text: `@${m.LlA}` })
                              : t
                          )
                      )
                    })(),
                  a.ZP.createElement(
                    'p',
                    { className: 'settings-item-description', dir: E.isRtl ? 'rtl' : void 0 },
                    (0, X.Z)(E('UsernameHelp'), ['br', 'simple_markdown'])
                  ),
                  U &&
                    a.ZP.createElement(
                      'p',
                      { className: 'settings-item-description', dir: E.isRtl ? 'rtl' : void 0 },
                      E('lng_username_link'),
                      a.ZP.createElement('br', null),
                      a.ZP.createElement('span', { className: 'username-link' }, m.zHP, U)
                    )
                ),
                H && a.ZP.createElement(Is, { usernames: Z, onEditUsername: _ })
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: J, onClick: ee, disabled: j, ariaLabel: E('Save') },
                j
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              )
            )
          })
        ),
        Ns = (0, a.X$)(
          (0, i.c$)((e) =>
            (0, $e.ei)(e.settings.byKey, [
              'canAutoLoadPhotoFromContacts',
              'canAutoLoadPhotoInPrivateChats',
              'canAutoLoadPhotoInGroups',
              'canAutoLoadPhotoInChannels',
              'canAutoLoadVideoFromContacts',
              'canAutoLoadVideoInPrivateChats',
              'canAutoLoadVideoInGroups',
              'canAutoLoadVideoInChannels',
              'canAutoLoadFileFromContacts',
              'canAutoLoadFileInPrivateChats',
              'canAutoLoadFileInGroups',
              'canAutoLoadFileInChannels',
              'canAutoPlayGifs',
              'canAutoPlayVideos',
              'autoLoadFileMaxSizeMb',
            ])
          )((e) => {
            let {
              isActive: t,
              onReset: n,
              canAutoLoadPhotoFromContacts: s,
              canAutoLoadPhotoInPrivateChats: o,
              canAutoLoadPhotoInGroups: r,
              canAutoLoadPhotoInChannels: l,
              canAutoLoadVideoFromContacts: c,
              canAutoLoadVideoInPrivateChats: d,
              canAutoLoadVideoInGroups: u,
              canAutoLoadVideoInChannels: h,
              canAutoLoadFileFromContacts: P,
              canAutoLoadFileInPrivateChats: Z,
              canAutoLoadFileInGroups: v,
              canAutoLoadFileInChannels: g,
              canAutoPlayGifs: p,
              canAutoPlayVideos: E,
              autoLoadFileMaxSizeMb: C,
            } = e
            const { setSettingOption: b } = (0, i.Sv)(),
              f = (0, M.Z)()
            ;(0, oe.Z)({ isActive: t, onBack: n })
            const I = (0, a.I4)(
                (e) => f('AutodownloadSizeLimitUpTo', f('FileSize.MB', String(m.byK[e]), 'i')),
                [f]
              ),
              y = (0, a.I4)(
                (e) => {
                  b({ autoLoadFileMaxSizeMb: m.byK[e] })
                },
                [b]
              ),
              S = (0, a.I4)(
                (e) => {
                  b({ canAutoPlayGifs: e })
                },
                [b]
              ),
              k = (0, a.I4)(
                (e) => {
                  b({ canAutoPlayVideos: e })
                },
                [b]
              )
            function N(e, t, n, s, i, o) {
              return a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header', dir: f.isRtl ? 'rtl' : void 0 },
                  e
                ),
                a.ZP.createElement(ht.Z, {
                  label: f('AutoDownloadSettings.Contacts'),
                  checked: n,
                  onCheck: (e) => b({ [`canAutoLoad${t}FromContacts`]: e }),
                }),
                a.ZP.createElement(ht.Z, {
                  label: f('AutoDownloadSettings.PrivateChats'),
                  checked: s,
                  onCheck: (e) => b({ [`canAutoLoad${t}InPrivateChats`]: e }),
                }),
                a.ZP.createElement(ht.Z, {
                  label: f('AutoDownloadSettings.GroupChats'),
                  checked: i,
                  onCheck: (e) => b({ [`canAutoLoad${t}InGroups`]: e }),
                }),
                a.ZP.createElement(ht.Z, {
                  label: f('AutoDownloadSettings.Channels'),
                  checked: o,
                  onCheck: (e) => b({ [`canAutoLoad${t}InChannels`]: e }),
                }),
                'File' === t &&
                  (function () {
                    const e = m.byK.indexOf(C)
                    return a.ZP.createElement(
                      'div',
                      { className: 'pt-5' },
                      a.ZP.createElement(ve.Z, {
                        label: f('AutoDownloadMaxFileSize'),
                        min: 0,
                        max: 5,
                        value: -1 !== e ? e : 2,
                        renderValue: I,
                        onChange: y,
                      })
                    )
                  })()
              )
            }
            return a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              N(f('AutoDownloadPhotosTitle'), 'Photo', s, o, r, l),
              N(f('AutoDownloadVideosTitle'), 'Video', c, d, u, h),
              N('Auto-download files', 'File', P, Z, v, g),
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header', dir: f.isRtl ? 'rtl' : void 0 },
                  f('AutoplayMedia')
                ),
                a.ZP.createElement(ht.Z, { label: f('GifsTab2'), checked: p, onCheck: S }),
                a.ZP.createElement(ht.Z, {
                  label: f('DataAndStorage.Autoplay.Videos'),
                  checked: E,
                  onCheck: k,
                })
              )
            )
          })
        )
      var ws = n(62821),
        Ms = n(95616),
        Ts = n(58912)
      const As = (0, ne.P2)((e) => e(), 6e4, !0),
        Rs = (0, a.X$)(
          (0, i.c$)((e) => {
            const { orderedIds: t, byId: n, recommended: a } = e.chatFolders
            return {
              folderIds: t,
              foldersById: n,
              isPremium: (0, r.wV)(e),
              recommendedChatFolders: a,
              maxFolders: (0, hn.M)(e, 'dialogFilters'),
            }
          })((e) => {
            let {
              isActive: t,
              onCreateFolder: n,
              onEditFolder: s,
              onReset: r,
              folderIds: l,
              foldersById: c,
              isPremium: d,
              recommendedChatFolders: u,
              maxFolders: h,
            } = e
            const {
                loadRecommendedChatFolders: P,
                addChatFolder: Z,
                openLimitReachedModal: v,
                openDeleteChatFolderModal: g,
                sortChatFolders: p,
              } = (0, i.Sv)(),
              [E, C] = (0, a.eJ)({ orderedFolderIds: l, dragOrderIds: l, draggedIndex: void 0 }),
              b = (0, T.Z)(l)
            ;(0, a.d4)(() => {
              b !== l && C({ orderedFolderIds: l, dragOrderIds: l, draggedIndex: void 0 })
            }, [b, l, E.orderedFolderIds?.length]),
              (0, a.d4)(() => {
                As(() => {
                  P()
                })
              }, [P])
            const f = (0, a.I4)(() => {
                Object.keys(c).length >= h - 1 ? v({ limit: 'dialogFilters' }) : n()
              }, [c, h, n, v]),
              I = (0, M.Z)()
            ;(0, oe.Z)({ isActive: t, onBack: r })
            const y = (0, Ms.mE)(),
              S = (0, a.Ye)(() => {
                if (l)
                  return l.length <= 1
                    ? Gn.D
                    : l.map((e) => {
                        const t = c[e]
                        return e === m.NfV
                          ? { id: e, title: I('FilterAllChats') }
                          : { id: t.id, title: t.title, subtitle: (0, o.SB)(I, t, y[t.id]) }
                      })
              }, [l, c, I, y]),
              k = (0, a.I4)(
                (e) => {
                  Object.keys(c).length >= h - 1 ? v({ limit: 'dialogFilters' }) : Z({ folder: e })
                },
                [c, h, Z, v]
              ),
              N = (0, a.I4)(
                (e, t) => {
                  const n = Math.round(e.y / 68),
                    a = E.orderedFolderIds?.indexOf(t) || 0,
                    s = E.orderedFolderIds?.filter((e) => e !== t)
                  s &&
                    (0, te.Kh)(a + n, 0, l?.length || 0) &&
                    (s.splice(a + n + (d ? 0 : 1), 0, t),
                    C((e) => ({ ...e, draggedIndex: a, dragOrderIds: s })))
                },
                [l?.length, d, E.orderedFolderIds]
              ),
              w = (0, a.I4)(() => {
                C(
                  (e) => (
                    p({ folderIds: e.dragOrderIds }),
                    { ...e, orderedFolderIds: e.dragOrderIds, draggedIndex: void 0 }
                  )
                )
              }, [p]),
              A = (0, a.Ye)(() => !d || Object.keys(c).length < h - 1, [c, d, h])
            return a.ZP.createElement(
              'div',
              { className: 'settings-content no-border custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header' },
                a.ZP.createElement(Ts.Z, {
                  size: m.kuM,
                  tgsUrl: ws.l.FoldersAll,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  I('CreateNewFilterInfo')
                ),
                A &&
                  a.ZP.createElement(
                    $.Z,
                    {
                      className: 'with-icon mb-2',
                      color: 'primary',
                      size: 'smaller',
                      pill: !0,
                      fluid: !0,
                      onClick: f,
                      isRtl: I.isRtl,
                    },
                    a.ZP.createElement('i', { className: 'icon-add' }),
                    I('CreateNewFilter')
                  )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-3' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header mb-3', dir: I.isRtl ? 'rtl' : void 0 },
                  I('Filters')
                ),
                a.ZP.createElement(
                  'div',
                  {
                    className: 'settings-sortable-container',
                    style: `height: ${68 * (l?.length || 0)}px`,
                  },
                  S?.length
                    ? S.map((e, n) => {
                        var i, o
                        const r = n > h - 1,
                          l = E.draggedIndex === n,
                          u =
                            68 *
                            (null !== (i = E.orderedFolderIds?.indexOf(e.id)) && void 0 !== i
                              ? i
                              : 0),
                          P =
                            68 *
                            (null !== (o = E.dragOrderIds?.indexOf(e.id)) && void 0 !== o ? o : 0)
                        return e.id === m.NfV
                          ? a.ZP.createElement(
                              bs,
                              {
                                key: e.id,
                                id: e.id,
                                onDrag: N,
                                onDragEnd: w,
                                style: `top: ${l ? u : P}px;`,
                                knobStyle: (I.isRtl ? 'left' : 'right') + ': 0.375rem;',
                                isDisabled: !d || !t,
                              },
                              a.ZP.createElement(
                                Je.Z,
                                {
                                  key: e.id,
                                  className: 'mb-2 no-icon settings-sortable-item',
                                  narrow: !0,
                                  inactive: !0,
                                  multiline: !0,
                                  isStatic: !0,
                                },
                                a.ZP.createElement('span', { className: 'title' }, e.title),
                                a.ZP.createElement(
                                  'span',
                                  { className: 'subtitle' },
                                  I('FoldersAllChatsDesc')
                                )
                              )
                            )
                          : a.ZP.createElement(
                              bs,
                              {
                                key: e.id,
                                id: e.id,
                                onDrag: N,
                                onDragEnd: w,
                                style: `top: ${l ? u : P}px;`,
                                knobStyle: (I.isRtl ? 'left' : 'right') + ': 3rem;',
                                isDisabled: r || !t,
                              },
                              a.ZP.createElement(
                                Je.Z,
                                {
                                  className: 'mb-2 no-icon settings-sortable-item',
                                  narrow: !0,
                                  secondaryIcon: 'more',
                                  multiline: !0,
                                  contextActions: [
                                    {
                                      handler: () => {
                                        g({ folderId: e.id })
                                      },
                                      destructive: !0,
                                      title: I('Delete'),
                                      icon: 'delete',
                                    },
                                  ],
                                  onClick: () => {
                                    r ? v({ limit: 'dialogFilters' }) : s(c[e.id])
                                  },
                                },
                                a.ZP.createElement(
                                  'span',
                                  { className: 'title' },
                                  (0, X.Z)(e.title, ['emoji']),
                                  r &&
                                    a.ZP.createElement('i', {
                                      className: 'icon-lock-badge settings-folders-blocked-icon',
                                    })
                                ),
                                a.ZP.createElement('span', { className: 'subtitle' }, e.subtitle)
                              )
                            )
                      })
                    : S && !S.length
                    ? a.ZP.createElement(
                        'p',
                        { className: 'settings-item-description my-4', dir: 'auto' },
                        'You have no folders yet.'
                      )
                    : a.ZP.createElement(ze.Z, null)
                )
              ),
              u &&
                Boolean(u.length) &&
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item pt-3' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header mb-3', dir: I.isRtl ? 'rtl' : void 0 },
                    I('FilterRecommended')
                  ),
                  u.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      { className: 'mb-2', narrow: !0, onClick: () => k(e) },
                      a.ZP.createElement(
                        'div',
                        { className: 'settings-folders-recommended-item' },
                        a.ZP.createElement(
                          'div',
                          { className: 'multiline-item' },
                          a.ZP.createElement(
                            'span',
                            { className: 'title' },
                            (0, X.Z)(e.title, ['emoji'])
                          ),
                          a.ZP.createElement('span', { className: 'subtitle' }, e.description)
                        ),
                        a.ZP.createElement(
                          $.Z,
                          {
                            className: 'px-3',
                            color: 'primary',
                            size: 'tiny',
                            pill: !0,
                            fluid: !0,
                            isRtl: I.isRtl,
                          },
                          I('Add')
                        )
                      )
                    )
                  )
                )
            )
          })
        )
      var Ls = n(53455)
      const Fs = (e) => {
          let { count: t, itemName: n, itemPluralName: s, isLoading: i, onClick: o } = e
          const r = (0, M.Z)()
          return a.ZP.createElement(
            $.Z,
            {
              className: 'ShowMoreButton',
              color: 'translucent',
              size: 'smaller',
              isText: !0,
              isLoading: i,
              isRtl: r.isRtl,
              onClick: o,
            },
            a.ZP.createElement('i', { className: 'icon-down' }),
            'Show ',
            t,
            ' more ',
            t > 1 ? s || `${n}s` : n
          )
        },
        xs = 'Please provide a title for this folder.',
        Bs = 'ChatList.Filter.Error.Empty',
        Ds = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { state: n } = t
            const { listIds: a } = e.chats,
              { byId: s } = e.chatFolders
            return {
              loadedActiveChatIds: a.active,
              loadedArchivedChatIds: a.archived,
              isRemoved: void 0 !== n.folderId && !s[n.folderId],
            }
          })((e) => {
            let {
              state: t,
              dispatch: n,
              onAddIncludedChats: s,
              onAddExcludedChats: r,
              isActive: l,
              onReset: c,
              isRemoved: d,
              onBack: u,
              loadedActiveChatIds: h,
              loadedArchivedChatIds: P,
            } = e
            const { editChatFolder: Z, addChatFolder: v } = (0, i.Sv)(),
              [g, p] = (0, a.eJ)(!1),
              [E, C] = (0, a.eJ)(!1)
            ;(0, a.d4)(() => {
              d && c()
            }, [d, c])
            const { selectedChatIds: b, selectedChatTypes: f } = (0, Ls.vb)(t, 'included'),
              { selectedChatIds: I, selectedChatTypes: y } = (0, Ls.vb)(t, 'excluded')
            ;(0, a.d4)(() => {
              p(!1), C(!1)
            }, [t.folderId])
            const [S, k] = (0, a.Ye)(() => {
                const e = new Set([...(h || []), ...(P || [])]),
                  t = (0, $e.eL)(b, e),
                  n = (0, $e.eL)(I, e)
                return [g ? t : t.slice(0, 5 - f.length), E ? n : n.slice(0, 5 - y.length)]
              }, [I, b, f, y, E, g, h, P]),
              N = (0, M.Z)()
            ;(0, oe.Z)({ isActive: l, onBack: u })
            const w = (0, a.I4)(
                (e) => {
                  const { currentTarget: t } = e
                  n({ type: 'setTitle', payload: t.value.trim() })
                },
                [n]
              ),
              T = (0, a.I4)(() => {
                const { title: e } = t.folder
                e
                  ? b.length || Object.keys(f).length
                    ? (n({ type: 'setIsLoading', payload: !0 }),
                      'edit' === t.mode
                        ? Z({ id: t.folderId, folderUpdate: t.folder })
                        : v({ folder: t.folder }),
                      setTimeout(() => {
                        c()
                      }, 500))
                    : n({ type: 'setError', payload: Bs })
                  : n({ type: 'setError', payload: xs })
              }, [v, n, Z, b.length, f, c, t])
            function A(e) {
              const t = 'included' === e ? f : y,
                n = 'included' === e ? S : k,
                s = 'included' === e ? g : E,
                i = ('included' === e ? b : I).length - t.length - n.length,
                r = 'included' === e ? () => p(!0) : () => C(!0)
              return a.ZP.createElement(
                a.ZP.Fragment,
                null,
                t.map((t) =>
                  (function (e, t) {
                    const n =
                      'included' === t
                        ? Ls.fi.find((t) => {
                            let { key: n } = t
                            return n === e
                          })
                        : Ls.Yy.find((t) => {
                            let { key: n } = t
                            return n === e
                          })
                    if (n)
                      return a.ZP.createElement(
                        Je.Z,
                        {
                          key: n.key,
                          className: 'settings-folders-list-item mb-1',
                          icon: n.icon,
                          narrow: !0,
                          inactive: !0,
                        },
                        N(n.title)
                      )
                  })(t, e)
                ),
                n.map((e) =>
                  a.ZP.createElement(
                    Je.Z,
                    { className: 'settings-folders-list-item mb-1', narrow: !0, inactive: !0 },
                    (0, o.YC)(e)
                      ? a.ZP.createElement(Ye.Z, { avatarSize: 'small', userId: e })
                      : a.ZP.createElement(qe.Z, { avatarSize: 'small', chatId: e })
                  )
                ),
                !s && i > 0 && a.ZP.createElement(Fs, { count: i, itemName: 'chat', onClick: r })
              )
            }
            return a.ZP.createElement(
              'div',
              { className: 'settings-fab-wrapper' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content no-border custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-content-header' },
                  a.ZP.createElement(Ts.Z, {
                    size: m.kuM,
                    tgsUrl: ws.l.FoldersNew,
                    play: String(t.folderId),
                    className: 'settings-content-icon',
                  }),
                  'create' === t.mode &&
                    a.ZP.createElement(
                      'p',
                      {
                        className: 'settings-item-description mb-3',
                        dir: N.isRtl ? 'rtl' : void 0,
                      },
                      N('FilterIncludeInfo')
                    ),
                  a.ZP.createElement(He.Z, {
                    className: 'mb-0',
                    label: N('FilterNameHint'),
                    value: t.folder.title,
                    onChange: w,
                    error: t.error && t.error === xs ? xs : void 0,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item no-border pt-3' },
                  t.error &&
                    t.error === Bs &&
                    a.ZP.createElement(
                      'p',
                      {
                        className: 'settings-item-description color-danger mb-2',
                        dir: N.isRtl ? 'rtl' : void 0,
                      },
                      N(t.error)
                    ),
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header mb-3', dir: N.isRtl ? 'rtl' : void 0 },
                    N('FilterInclude')
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    {
                      className: 'settings-folders-list-item color-primary mb-0',
                      icon: 'add',
                      onClick: s,
                    },
                    N('FilterAddChats')
                  ),
                  A('included')
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item pt-3' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header mb-3', dir: N.isRtl ? 'rtl' : void 0 },
                    N('FilterExclude')
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    {
                      className: 'settings-folders-list-item color-primary mb-0',
                      icon: 'add',
                      onClick: r,
                    },
                    N('FilterAddChats')
                  ),
                  A('excluded')
                )
              ),
              a.ZP.createElement(
                us.Z,
                {
                  isShown: Boolean(t.isTouched),
                  disabled: t.isLoading,
                  onClick: T,
                  ariaLabel: 'edit' === t.mode ? 'Save changes' : 'Create folder',
                },
                t.isLoading
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              )
            )
          })
        ),
        Os = (0, a.X$)(
          (0, i.c$)((e) => ({ maxChats: (0, hn.M)(e, 'dialogFiltersChats') }))((e) => {
            let {
              mode: t,
              chatIds: n,
              selectedIds: s,
              selectedChatTypes: r,
              filterValue: l,
              onSelectedIdsChange: c,
              onSelectedChatTypesChange: d,
              onFilterChange: m,
              maxChats: u,
            } = e
            const { openLimitReachedModal: h } = (0, i.Sv)(),
              P = (0, a.sO)(null),
              Z = 'included' === t ? Ls.fi : Ls.Yy,
              v = s.length + r.length > 10
            ;(0, a.d4)(() => {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  P.current.focus()
                })
              }, 500)
            }, [])
            const g = (0, a.I4)(
                (e) => {
                  const n = [...s]
                  if (n.includes(e)) n.splice(n.indexOf(e), 1)
                  else {
                    if (s.length >= u && 'included' === t)
                      return void h({ limit: 'dialogFiltersChats' })
                    n.push(e)
                  }
                  c(n)
                },
                [s, c, u, t, h]
              ),
              p = (0, a.I4)(
                (e) => {
                  const t = [...r]
                  t.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e), d(t)
                },
                [r, d]
              ),
              E = (0, a.I4)(
                (e) => {
                  const { value: t } = e.currentTarget
                  m(t)
                },
                [m]
              ),
              C = (0, M.Z)(),
              [b, f] = (0, je.Z)(void 0, n, Boolean(l))
            return a.ZP.createElement(
              'div',
              { className: 'Picker SettingsFoldersChatsPicker' },
              a.ZP.createElement(
                'div',
                { className: 'picker-header custom-scroll' },
                r.map(function (e) {
                  const t = Z.find((t) => {
                    let { key: n } = t
                    return e === n
                  })
                  if (t)
                    return a.ZP.createElement(Ma.Z, {
                      icon: t.icon,
                      title: C(t.title),
                      isMinimized: v,
                      canClose: !0,
                      onClick: p,
                      clickArg: t.key,
                    })
                }),
                s.map((e, t) =>
                  a.ZP.createElement(Ma.Z, {
                    chatOrUserId: e,
                    isMinimized: v && t < s.length - 5,
                    canClose: !0,
                    onClick: g,
                    clickArg: e,
                  })
                ),
                a.ZP.createElement(He.Z, {
                  ref: P,
                  value: l,
                  onChange: E,
                  placeholder: C('Search'),
                })
              ),
              a.ZP.createElement(
                Xe.Z,
                {
                  className: 'picker-list custom-scroll',
                  itemSelector: '.chat-item',
                  items: b,
                  onLoadMore: f,
                },
                (!b || !b.length || b.includes(n[0])) &&
                  a.ZP.createElement(
                    'div',
                    { key: 'header' },
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header', dir: C.isRtl ? 'rtl' : void 0 },
                      C('FilterChatTypes')
                    ),
                    Z.map(function (e) {
                      return a.ZP.createElement(
                        Je.Z,
                        {
                          key: e.key,
                          className: 'chat-item-clickable picker-list-item chat-type-item',
                          onClick: () => p(e.key),
                          ripple: !0,
                        },
                        a.ZP.createElement('i', { className: `icon-${e.icon}` }),
                        a.ZP.createElement(
                          'h3',
                          { className: 'chat-type', dir: 'auto' },
                          C(e.title)
                        ),
                        a.ZP.createElement(ht.Z, {
                          label: '',
                          checked: r.includes(e.key),
                          round: !0,
                        })
                      )
                    }),
                    a.ZP.createElement('div', { className: 'picker-list-divider' }),
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header', dir: C.isRtl ? 'rtl' : void 0 },
                      C('FilterChats')
                    )
                  ),
                b?.length
                  ? b.map(function (e) {
                      const t = s.includes(e)
                      return a.ZP.createElement(
                        Je.Z,
                        {
                          key: e,
                          className: 'chat-item-clickable picker-list-item chat-item',
                          onClick: () => g(e),
                          ripple: !0,
                        },
                        (0, o.YC)(e)
                          ? a.ZP.createElement(Ye.Z, { userId: e })
                          : a.ZP.createElement(qe.Z, { chatId: e, withChatType: !0 }),
                        a.ZP.createElement(ht.Z, { label: '', checked: t, round: !0 })
                      )
                    })
                  : b && !b.length
                  ? a.ZP.createElement(
                      'p',
                      { className: 'no-results', key: 'no-results' },
                      'Sorry, nothing found.'
                    )
                  : a.ZP.createElement(ze.Z, { key: 'loading' })
              )
            )
          })
        ),
        Us = (0, a.X$)((e) => {
          let { mode: t, state: n, dispatch: s, isActive: r, onReset: l } = e
          const { chatFilter: c } = n,
            { selectedChatIds: d, selectedChatTypes: u } = (0, Ls.vb)(n, t, !0),
            h = (0, M.Z)(),
            P = (0, Ms.d7)(m.NfV),
            Z = (0, Ms.d7)(m.WSp),
            v = (0, a.Ye)(() => {
              const e = (0, i.Rd)().chats.byId,
                t = [...(P || []), ...(Z || [])]
              return (0, $e.Tw)([...d, ...(0, o.$l)(h, t, e, c)])
            }, [P, Z, d, h, c]),
            g = (0, a.I4)(
              (e) => {
                s({ type: 'setChatFilter', payload: e })
              },
              [s]
            ),
            p = (0, a.I4)(
              (e) => {
                s(
                  'included' === t
                    ? {
                        type: 'setIncludeFilters',
                        payload: { ...n.includeFilters, includedChatIds: e },
                      }
                    : {
                        type: 'setExcludeFilters',
                        payload: { ...n.excludeFilters, excludedChatIds: e },
                      }
                )
              },
              [t, n, s]
            ),
            E = (0, a.I4)(
              (e) => {
                const n = {}
                e.forEach((e) => {
                  n[e] = !0
                }),
                  s(
                    'included' === t
                      ? { type: 'setIncludeFilters', payload: { includedChatIds: d, ...n } }
                      : { type: 'setExcludeFilters', payload: { excludedChatIds: d, ...n } }
                  )
              },
              [t, d, s]
            )
          return (
            (0, oe.Z)({ isActive: r, onBack: l }),
            v
              ? a.ZP.createElement(Os, {
                  mode: t,
                  chatIds: v,
                  selectedIds: d,
                  selectedChatTypes: u,
                  filterValue: c,
                  onSelectedIdsChange: p,
                  onSelectedChatTypesChange: E,
                  onFilterChange: g,
                })
              : a.ZP.createElement(ze.Z, null)
          )
        }),
        _s = (0, a.X$)((e) => {
          let {
            currentScreen: t,
            shownScreen: n,
            state: i,
            dispatch: o,
            isActive: r,
            onScreenSelect: l,
            onReset: c,
          } = e
          const d = (0, a.I4)(() => {
              ;(t !== s.MT.FoldersCreateFolder &&
                t !== s.MT.FoldersEditFolder &&
                t !== s.MT.FoldersEditFolderFromChatList) ||
                setTimeout(() => {
                  o({ type: 'reset' })
                }, 200),
                t !== s.MT.FoldersIncludedChats && t !== s.MT.FoldersExcludedChats
                  ? c()
                  : 'create' === i.mode
                  ? l(s.MT.FoldersCreateFolder)
                  : l(s.MT.FoldersEditFolder)
            }, [i.mode, o, t, c, l]),
            m = (0, a.I4)(() => {
              o({ type: 'reset' }), l(s.MT.FoldersCreateFolder)
            }, [l, o]),
            u = (0, a.I4)(
              (e) => {
                o({ type: 'editFolder', payload: e }), l(s.MT.FoldersEditFolder)
              },
              [o, l]
            ),
            h = (0, a.I4)(() => {
              o({ type: 'editIncludeFilters' }),
                l(
                  t === s.MT.FoldersEditFolderFromChatList
                    ? s.MT.FoldersIncludedChatsFromChatList
                    : s.MT.FoldersIncludedChats
                )
            }, [t, o, l]),
            P = (0, a.I4)(() => {
              o({ type: 'editExcludeFilters' }),
                l(
                  t === s.MT.FoldersEditFolderFromChatList
                    ? s.MT.FoldersExcludedChatsFromChatList
                    : s.MT.FoldersExcludedChats
                )
            }, [t, o, l])
          switch (t) {
            case s.MT.Folders:
              return a.ZP.createElement(Rs, {
                onCreateFolder: m,
                onEditFolder: u,
                isActive:
                  r ||
                  [
                    s.MT.FoldersCreateFolder,
                    s.MT.FoldersEditFolder,
                    s.MT.FoldersIncludedChats,
                    s.MT.FoldersExcludedChats,
                  ].includes(n),
                onReset: c,
              })
            case s.MT.FoldersCreateFolder:
            case s.MT.FoldersEditFolder:
            case s.MT.FoldersEditFolderFromChatList:
              return a.ZP.createElement(Ds, {
                state: i,
                dispatch: o,
                onAddIncludedChats: h,
                onAddExcludedChats: P,
                onReset: d,
                isActive: r || [s.MT.FoldersIncludedChats, s.MT.FoldersExcludedChats].includes(n),
                onBack: c,
              })
            case s.MT.FoldersIncludedChats:
            case s.MT.FoldersIncludedChatsFromChatList:
              return a.ZP.createElement(Us, {
                mode: 'included',
                state: i,
                dispatch: o,
                onReset: d,
                isActive: r,
              })
            case s.MT.FoldersExcludedChats:
            case s.MT.FoldersExcludedChatsFromChatList:
              return a.ZP.createElement(Us, {
                mode: 'excluded',
                state: i,
                dispatch: o,
                onReset: d,
                isActive: r,
              })
            default:
              return
          }
        })
      var $s = n(50711),
        js = n(14434),
        Gs = n(27370)
      const Vs = ['Solid and Steady', 'Nice and Fast', 'Lots of Stuff'],
        zs = [
          { label: '12-hour', value: '12h' },
          { label: '24-hour', value: '24h' },
        ],
        Hs = (0, a.X$)(
          (0, i.c$)((e) => {
            const { theme: t, shouldUseSystemTheme: n } = e.settings.byKey
            return {
              ...(0, $e.ei)(e.settings.byKey, [
                'messageTextSize',
                'animationLevel',
                'messageSendKeyCombo',
                'isSensitiveEnabled',
                'canChangeSensitive',
                'timeFormat',
              ]),
              theme: t,
              shouldUseSystemTheme: n,
            }
          })((e) => {
            let {
              isActive: t,
              onScreenSelect: n,
              onReset: o,
              messageTextSize: r,
              animationLevel: l,
              messageSendKeyCombo: c,
              timeFormat: u,
              theme: h,
              shouldUseSystemTheme: P,
            } = e
            const { setSettingOption: Z } = (0, i.Sv)(),
              v = (0, M.Z)(),
              g = [
                { label: v('EmptyChat.Appearance.Light'), value: 'light' },
                { label: v('EmptyChat.Appearance.Dark'), value: 'dark' },
                { label: v('EmptyChat.Appearance.System'), value: 'auto' },
              ],
              p = d.$b
                ? void 0
                : [
                    {
                      value: 'enter',
                      label: v('lng_settings_send_enter'),
                      subLabel: 'New line by Shift + Enter',
                    },
                    {
                      value: 'ctrl-enter',
                      label: v(d.jm ? 'lng_settings_send_cmdenter' : 'lng_settings_send_ctrlenter'),
                      subLabel: 'New line by Enter',
                    },
                  ],
              E = (0, a.I4)(
                (e) => {
                  Vs.forEach((t, n) => {
                    document.body.classList.toggle(`animation-level-${n}`, e === n)
                  }),
                    Z({ animationLevel: e })
                },
                [Z]
              ),
              C = (0, a.I4)(
                (e) => {
                  document.documentElement.style.setProperty(
                    '--composer-text-size',
                    `${Math.max(e, d.cj ? 16 : 15)}px`
                  ),
                    document.documentElement.style.setProperty(
                      '--message-meta-height',
                      `${Math.floor(1.3125 * e)}px`
                    ),
                    document.documentElement.style.setProperty('--message-text-size', `${e}px`),
                    document.documentElement.setAttribute('data-message-text-size', e.toString()),
                    Z({ messageTextSize: e })
                },
                [Z]
              ),
              b = (0, a.I4)(
                (e) => {
                  const t = 'auto' === e ? (0, d.vn)() : e
                  Z({ theme: t }),
                    Z({ shouldUseSystemTheme: 'auto' === e }),
                    t !== h && (0, Gs.Z)(t, l === m.zy8)
                },
                [l, Z, h]
              ),
              f = (0, a.I4)(
                (e) => {
                  Z({ timeFormat: e }), Z({ wasTimeFormatSetManually: !0 }), (0, $s.qf)(e)
                },
                [Z]
              ),
              I = (0, a.I4)(
                (e) => {
                  Z({ messageSendKeyCombo: e })
                },
                [Z]
              )
            return (
              (0, oe.Z)({ isActive: t, onBack: o }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item pt-3' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                    v('SETTINGS')
                  ),
                  a.ZP.createElement(ve.Z, {
                    label: v('TextSize'),
                    min: 12,
                    max: 20,
                    value: r,
                    onChange: C,
                  }),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'photo', onClick: () => n(s.MT.GeneralChatBackground) },
                    v('ChatBackground')
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                    v('Theme')
                  ),
                  a.ZP.createElement(js.Z, {
                    name: 'theme',
                    options: g,
                    selected: P ? 'auto' : h,
                    onChange: b,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                    'Time Format'
                  ),
                  a.ZP.createElement(js.Z, {
                    name: 'timeformat',
                    options: zs,
                    selected: u,
                    onChange: f,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                    'Animation Level'
                  ),
                  a.ZP.createElement(
                    'p',
                    { className: 'settings-item-description', dir: v.isRtl ? 'rtl' : void 0 },
                    'Choose the desired animations amount.'
                  ),
                  a.ZP.createElement(ve.Z, { options: Vs, value: l, onChange: E })
                ),
                p &&
                  a.ZP.createElement(
                    'div',
                    { className: 'settings-item' },
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                      v('VoiceOver.Keyboard')
                    ),
                    a.ZP.createElement(js.Z, {
                      name: 'keyboard-send-settings',
                      options: p,
                      onChange: I,
                      selected: c,
                    })
                  )
              )
            )
          })
        )
      var Xs = n(85655),
        Js = n(75851),
        qs = n(49524)
      const Ys = (0, a.X$)((e) => {
          let { wallpaper: t, theme: n, isSelected: i, onClick: o } = e
          const { slug: r, document: l } = t,
            c = `wallpaper${l.id}`,
            d = l.previewBlobUrl,
            u = (0, R.Z)(`${c}?size=m`),
            h = (0, _t.Z)(l.thumbnail?.dataUri, Boolean(u), !0),
            { transitionClassNames: P } = (0, ue.Z)(Boolean(u || d), void 0, void 0, 'slow'),
            [Z, v] = (0, a.eJ)(!1),
            { mediaData: g, loadProgress: p } = (0, L.Z)(c, !Z),
            E = !1 === (0, T.Z)(Z),
            { shouldRender: C, transitionClassNames: b } = (0, ue.Z)(
              (Z && !g) || r === s.mp,
              void 0,
              E,
              'slow'
            ),
            f = (0, a.sO)()
          f.current = n
          const I = (0, a.I4)(() => {
            ;(async () => {
              const e = await (0, B.gm)(g)
              await qs.save(m.foQ, f.current, e), o(r)
            })()
          }, [g, o, r])
          ;(0, a.d4)(() => {
            g && I()
          }, [g, I])
          const y = (0, a.I4)(() => {
              g ? I() : v((e) => !e)
            }, [g, I]),
            S = (0, Q.Z)('WallpaperTile', i && 'selected')
          return a.ZP.createElement(
            'div',
            { className: S, onClick: y },
            a.ZP.createElement(
              'div',
              { className: 'media-inner' },
              a.ZP.createElement('canvas', { ref: h, className: 'thumbnail' }),
              a.ZP.createElement('img', {
                src: u || d,
                className: (0, Q.Z)('full-media', P),
                alt: '',
              }),
              C &&
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)('spinner-container', b) },
                  a.ZP.createElement(H.Z, { progress: p, onClick: y })
                )
            )
          )
        }),
        Ks = (0, ne.P2)((e) => e(), 6e4, !0),
        Ws = (0, a.X$)(
          (0, i.c$)((e) => {
            const t = (0, r.Pu)(e),
              { background: n, isBlurred: a } = e.settings.themes[t] || {},
              { loadedWallpapers: s } = e.settings
            return { background: n, isBlurred: a, loadedWallpapers: s, theme: t }
          })((e) => {
            let {
              isActive: t,
              onScreenSelect: n,
              onReset: o,
              background: r,
              isBlurred: l,
              loadedWallpapers: c,
              theme: d,
            } = e
            const { loadWallpapers: u, uploadWallpaper: h, setThemeSettings: P } = (0, i.Sv)(),
              Z = (0, a.sO)()
            ;(Z.current = d),
              (0, a.d4)(() => {
                Ks(() => {
                  u()
                })
              }, [u])
            const v = (0, a.I4)(
                (e) => {
                  const { files: t } = e.target,
                    n = (0, B.ox)(t)
                  n?.length && h(n[0])
                },
                [h]
              ),
              g = (0, a.I4)(() => {
                ;(0, Xs.g)('image/jpeg', v, !0)
              }, [v]),
              p = (0, a.I4)(() => {
                n(s.MT.GeneralChatBackgroundColor)
              }, [n]),
              E = (0, a.I4)(() => {
                P({
                  theme: d,
                  background: void 0,
                  backgroundColor: void 0,
                  isBlurred: !0,
                  patternColor: 'dark' === d ? m.Vvx : m.ga_,
                })
              }, [P, d]),
              C = (0, a.I4)(
                (e) => {
                  P({ theme: Z.current, background: e })
                  const t = c && c.find((t) => t.slug === e)
                  t?.document.thumbnail &&
                    (0, Js.ix)(t.document.thumbnail.dataUri).then((e) => {
                      const t = (0, Js.uR)(e),
                        n = `#${(0, Js.CO)(e)}`
                      P({ theme: Z.current, backgroundColor: n, patternColor: t })
                    })
                },
                [c, P]
              ),
              b = (0, a.I4)(
                (e) => {
                  P({ theme: Z.current, isBlurred: e.target.checked })
                },
                [P]
              ),
              f = (0, M.Z)()
            ;(0, oe.Z)({ isActive: t, onBack: o })
            const I = c?.[0] && c[0].slug === s.mp
            return a.ZP.createElement(
              'div',
              { className: 'SettingsGeneralBackground settings-content custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-3' },
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'camera-add', className: 'mb-0', disabled: I, onClick: g },
                  f('UploadImage')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'colorize', className: 'mb-0', onClick: p },
                  f('SetColor')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'favorite', onClick: E },
                  f('ThemeResetToDefaults')
                ),
                a.ZP.createElement(ht.Z, {
                  label: f('BackgroundBlurred'),
                  checked: Boolean(l),
                  onChange: b,
                })
              ),
              c
                ? a.ZP.createElement(
                    'div',
                    { className: 'settings-wallpapers' },
                    c.map((e) =>
                      a.ZP.createElement(Ys, {
                        wallpaper: e,
                        theme: d,
                        isSelected: r === e.slug,
                        onClick: C,
                      })
                    )
                  )
                : a.ZP.createElement(ze.Z, null)
            )
          })
        ),
        Qs = (0, Js.xP)((0, Js.wK)('e6ebee')),
        ei = [
          '#e6ebee',
          '#b2cee1',
          '#008dd0',
          '#c6e7cb',
          '#c4e1a6',
          '#60b16e',
          '#ccd0af',
          '#a6a997',
          '#7a7072',
          '#fdd7af',
          '#fdb76e',
          '#dd8851',
        ]
      function ti(e, t) {
        return {
          colorPosition: [
            Math.round(e[1] * (t.colorRect.width - 1)),
            Math.round((1 - e[2]) * (t.colorRect.height - 1)),
          ],
          huePosition: Math.round(e[0] * (t.hueRect.width - 1)),
        }
      }
      function ni(e, t) {
        let { colorPosition: n, huePosition: a } = e
        return [
          a / (t.hueRect.width - 1),
          n[0] / (t.colorRect.width - 1),
          1 - n[1] / (t.colorRect.height - 1),
        ]
      }
      const ai = (0, a.X$)(
        (0, i.c$)((e) => {
          const t = (0, r.Pu)(e),
            { backgroundColor: n } = e.settings.themes[t] || {}
          return { backgroundColor: n, theme: t }
        })((e) => {
          let { isActive: t, onReset: n, theme: s, backgroundColor: o } = e
          const { setThemeSettings: r } = (0, i.Sv)(),
            l = (0, a.sO)()
          l.current = s
          const c = (0, a.sO)(null),
            d = (0, a.sO)(null),
            m = (0, a.sO)(null),
            u = (0, a.sO)(!0),
            [h, P] = (0, a.eJ)(
              (function (e) {
                return e && e.startsWith('#') ? (0, Js.xP)((0, Js.wK)(e.replace('#', ''))) : Qs
              })(o)
            ),
            Z = (0, a.sO)(h)
          ;(0, a.d4)(() => {
            Z.current = h
          }, [h])
          const [v, g, p] = (0, I.Z)(),
            [E, C] = (0, a.eJ)(''),
            [b, f] = (0, a.eJ)(''),
            y = (0, a.sO)(),
            S = (0, a.sO)()
          ;(0, a.d4)(() => {
            const e = {
                offsetLeft: d.current.offsetLeft,
                ...(0, $e.ei)(d.current.getBoundingClientRect(), ['top', 'width', 'height']),
              },
              t = {
                offsetLeft: m.current.offsetLeft,
                ...(0, $e.ei)(m.current.getBoundingClientRect(), ['width']),
              }
            function n(t) {
              const n = [
                  Math.min(Math.max(0, t.pageX - e.offsetLeft), e.width - 1),
                  Math.min(Math.max(0, t.pageY - e.top + c.current.scrollTop), e.height - 1),
                ],
                { huePosition: a } = ti(Z.current, y.current)
              return P(ni({ colorPosition: n, huePosition: a }, y.current)), g(), !0
            }
            function a(e) {
              const { colorPosition: n } = ti(Z.current, y.current),
                a = Math.min(Math.max(0, e.pageX - t.offsetLeft), t.width - 1)
              return P(ni({ colorPosition: n, huePosition: a }, y.current)), g(), !0
            }
            ;(y.current = { colorRect: e, hueRect: t }),
              (0, ee.sf)(d.current, {
                onCapture: n,
                onDrag: n,
                onRelease: p,
                onClick: p,
                selectorToPreventScroll: '.SettingsGeneralBackgroundColor',
                withCursor: !0,
              }),
              (0, ee.sf)(m.current, {
                onCapture: a,
                onDrag: a,
                onRelease: p,
                onClick: p,
                selectorToPreventScroll: '.SettingsGeneralBackgroundColor',
                withCursor: !0,
              })
          }, [g, p])
          const { colorPosition: k = [0, 0], huePosition: N = 0 } = y.current
              ? ti(h, y.current)
              : {},
            w = (0, Js.CO)((0, Js.eb)(h)),
            M = h[0],
            T = (0, Js.CO)((0, Js.eb)([M, 1, 1]))
          ;(0, a.d4)(() => {
            const e = (0, Js.eb)(h),
              t = `#${(0, Js.CO)(e)}`
            if ((C(e.join(', ')), f(t), !u.current)) {
              const n = (0, Js.uR)(e)
              r({ theme: l.current, background: void 0, backgroundColor: t, patternColor: n })
            }
            u.current = !1
          }, [h, r]),
            (0, a.d4)(() => {
              !(function (e, t, n, a) {
                let s, i, o
                n.current && a.current
                  ? ((s = a.current.colorRect.width),
                    (i = a.current.colorRect.height),
                    (o = n.current))
                  : ((s = e.offsetWidth),
                    (i = e.offsetHeight),
                    (o = e.getContext('2d')),
                    (e.width = s),
                    (e.height = i),
                    (n.current = o))
                const r = o.createImageData(s, i),
                  l = r.data,
                  c = (0, Js.eb)([t, 1, 1])
                let d = 0
                for (let e = 0; e < i; e++) {
                  const t = 1 - e / (i - 1),
                    n = [255 * t, 255 * t, 255 * t],
                    a = [c[0] * t, c[1] * t, c[2] * t]
                  for (let e = 0; e < s; e++) {
                    const t = e / (s - 1)
                    ;(l[d++] = n[0] + (a[0] - n[0]) * t),
                      (l[d++] = n[1] + (a[1] - n[1]) * t),
                      (l[d++] = n[2] + (a[2] - n[2]) * t),
                      (l[d++] = 255)
                  }
                }
                o.putImageData(r, 0, 0)
              })(d.current.firstChild, M, S, y)
            }, [M]),
            (0, a.d4)(() => {
              !(function (e) {
                const t = e.offsetWidth
                ;(e.width = t), (e.height = 1)
                const n = e.getContext('2d'),
                  a = n.createImageData(t, 1),
                  s = a.data
                let i = 0
                for (let e = 0; e < t; e++) {
                  const n = e / (t - 1),
                    a = (0, Js.eb)([n, 1, 1])
                  ;(s[i++] = a[0]), (s[i++] = a[1]), (s[i++] = a[2]), (s[i++] = 255)
                }
                n.putImageData(a, 0, 0)
              })(m.current.firstChild)
            }, [])
          const A = (0, a.I4)((e) => {
              const t = e.currentTarget.value.replace(/[^\d, ]/g, '').slice(0, 13)
              if (t.match(/^\d{1,3},\s?\d{1,3},\s?\d{1,3}$/)) {
                const e = t.split(',').map((e) => Number(e.trim()))
                P((0, Js.xP)(e))
              }
              e.currentTarget.value = t
            }, []),
            R = (0, a.I4)((e) => {
              const t = e.currentTarget.value.replace(/[^0-9a-fA-F]/g, '').slice(0, 6)
              t.match(/^#?[0-9a-fA-F]{6}$/) && P((0, Js.xP)((0, Js.wK)(t.replace('#', '')))),
                (e.currentTarget.value = t)
            }, []),
            L = (0, a.I4)((e) => {
              P((0, Js.xP)((0, Js.wK)(e.currentTarget.dataset.color.replace('#', ''))))
            }, []),
            F = (0, Q.Z)(
              'SettingsGeneralBackgroundColor settings-content custom-scroll',
              v && 'is-dragging'
            )
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { ref: c, className: F },
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-3' },
                a.ZP.createElement(
                  'div',
                  { ref: d, className: 'color-picker' },
                  a.ZP.createElement('canvas', null),
                  a.ZP.createElement('div', {
                    className: 'handle',
                    style: `transform: translate(${k[0]}px, ${k[1]}px); background-color: #${w};`,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { ref: m, className: 'hue-picker' },
                  a.ZP.createElement('canvas', null),
                  a.ZP.createElement('div', {
                    className: 'handle',
                    style: `transform: translateX(${N}px); background-color: #${T};`,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'tools' },
                  a.ZP.createElement(He.Z, { value: b, label: 'HEX', onChange: R }),
                  a.ZP.createElement(He.Z, { value: E, label: 'RGB', onChange: A })
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'predefined-colors' },
                ei.map((e) =>
                  a.ZP.createElement('div', {
                    className: e === `#${w}` ? 'active' : void 0,
                    'data-color': e,
                    style: `background-color: ${e};`,
                    onClick: L,
                  })
                )
              )
            )
          )
        })
      )
      var si = n(88957),
        ii = n(28406)
      const oi = (0, a.X$)(
          (0, i.c$)((e) => ({
            hasPrivateChatsNotifications: Boolean(e.settings.byKey.hasPrivateChatsNotifications),
            hasPrivateChatsMessagePreview: Boolean(e.settings.byKey.hasPrivateChatsMessagePreview),
            hasGroupNotifications: Boolean(e.settings.byKey.hasGroupNotifications),
            hasGroupMessagePreview: Boolean(e.settings.byKey.hasGroupMessagePreview),
            hasBroadcastNotifications: Boolean(e.settings.byKey.hasBroadcastNotifications),
            hasBroadcastMessagePreview: Boolean(e.settings.byKey.hasBroadcastMessagePreview),
            hasContactJoinedNotifications: Boolean(e.settings.byKey.hasContactJoinedNotifications),
            hasWebNotifications: e.settings.byKey.hasWebNotifications,
            hasPushNotifications: e.settings.byKey.hasPushNotifications,
            notificationSoundVolume: e.settings.byKey.notificationSoundVolume,
          }))((e) => {
            let {
              isActive: t,
              onReset: n,
              hasPrivateChatsNotifications: s,
              hasPrivateChatsMessagePreview: o,
              hasGroupNotifications: r,
              hasGroupMessagePreview: l,
              hasBroadcastNotifications: c,
              hasBroadcastMessagePreview: d,
              hasContactJoinedNotifications: m,
              hasPushNotifications: u,
              hasWebNotifications: h,
              notificationSoundVolume: P,
            } = e
            const {
              loadNotificationSettings: Z,
              updateContactSignUpNotification: v,
              updateNotificationSettings: g,
              updateWebNotificationSettings: p,
            } = (0, i.Sv)()
            ;(0, a.d4)(() => {
              Z()
            }, [Z])
            const E = (0, si.Z)(500, !0),
              C = (0, a.I4)(
                (e, t, n) => {
                  const a = 'contact' === t ? !s : !('group' === t ? r : c),
                    i = 'contact' === t ? o : 'group' === t ? l : d
                  g({
                    peerType: t,
                    ...('silent' === n && { isSilent: !e.target.checked, shouldShowPreviews: i }),
                    ...('showPreviews' === n && {
                      shouldShowPreviews: e.target.checked,
                      isSilent: a,
                    }),
                  })
                },
                [d, c, l, r, o, s, g]
              ),
              b = (0, a.I4)(
                (e) => {
                  p({ hasWebNotifications: e.target.checked })
                },
                [p]
              ),
              f = (0, a.I4)(
                (e) => {
                  p({ hasPushNotifications: e.target.checked })
                },
                [p]
              ),
              I = (0, a.I4)(
                (e) => {
                  C(e, 'contact', 'silent')
                },
                [C]
              ),
              y = (0, a.I4)(
                (e) => {
                  C(e, 'contact', 'showPreviews')
                },
                [C]
              ),
              S = (0, a.I4)(
                (e) => {
                  C(e, 'group', 'silent')
                },
                [C]
              ),
              k = (0, a.I4)(
                (e) => {
                  C(e, 'group', 'showPreviews')
                },
                [C]
              ),
              N = (0, a.I4)(
                (e) => {
                  C(e, 'broadcast', 'silent')
                },
                [C]
              ),
              w = (0, a.I4)(
                (e) => {
                  C(e, 'broadcast', 'showPreviews')
                },
                [C]
              ),
              T = (0, a.I4)(
                (e) => {
                  v({ isSilent: !e.target.checked })
                },
                [v]
              ),
              A = (0, a.I4)(
                (e) => {
                  p({ notificationSoundVolume: e }), E(() => (0, ii.q3)(void 0, e))
                },
                [E, p]
              ),
              R = (0, M.Z)()
            return (
              (0, oe.Z)({ isActive: t, onBack: n }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: R.isRtl ? 'rtl' : void 0 },
                    'Web notifications'
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: 'Web notifications',
                    subLabel: R(
                      h ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: h,
                    onChange: b,
                  }),
                  a.ZP.createElement(ht.Z, {
                    label: 'Offline notifications',
                    disabled: !h,
                    subLabel: R(
                      u ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: u,
                    onChange: f,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: 'settings-item-slider' },
                    a.ZP.createElement(ve.Z, {
                      label: 'Sound',
                      min: 0,
                      max: 10,
                      value: P,
                      onChange: A,
                    })
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: R.isRtl ? 'rtl' : void 0 },
                    R('AutodownloadPrivateChats')
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: R('NotificationsForPrivateChats'),
                    subLabel: R(
                      s ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: s,
                    onChange: I,
                  }),
                  a.ZP.createElement(ht.Z, {
                    label: R('MessagePreview'),
                    disabled: !s,
                    subLabel: R(
                      o ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: o,
                    onChange: y,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: R.isRtl ? 'rtl' : void 0 },
                    R('FilterGroups')
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: R('NotificationsForGroups'),
                    subLabel: R(
                      r ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: r,
                    onChange: S,
                  }),
                  a.ZP.createElement(ht.Z, {
                    label: R('MessagePreview'),
                    disabled: !r,
                    subLabel: R(
                      l ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: l,
                    onChange: k,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: R.isRtl ? 'rtl' : void 0 },
                    R('FilterChannels')
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: R('NotificationsForChannels'),
                    subLabel: R(
                      c ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: c,
                    onChange: N,
                  }),
                  a.ZP.createElement(ht.Z, {
                    label: R('MessagePreview'),
                    disabled: !c,
                    subLabel: R(
                      d ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                    ),
                    checked: d,
                    onChange: w,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: R.isRtl ? 'rtl' : void 0 },
                    R('PhoneOther')
                  ),
                  a.ZP.createElement(ht.Z, { label: R('ContactJoined'), checked: m, onChange: T })
                )
              )
            )
          })
        ),
        ri = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
              settings: {
                byKey: {
                  hasPassword: t,
                  isSensitiveEnabled: n,
                  canChangeSensitive: a,
                  shouldArchiveAndMuteNewNonContact: s,
                  canDisplayChatInTitle: i,
                },
                privacy: o,
              },
              blocked: l,
              passcode: { hasPasscode: c },
              appConfig: d,
            } = e
            return {
              isCurrentUserPremium: (0, r.wV)(e),
              hasPassword: t,
              hasPasscode: Boolean(c),
              blockedCount: l.totalCount,
              webAuthCount: e.activeWebSessions.orderedHashes.length,
              isSensitiveEnabled: n,
              canDisplayAutoarchiveSetting: Boolean(d?.canDisplayAutoarchiveSetting),
              shouldArchiveAndMuteNewNonContact: s,
              canChangeSensitive: a,
              privacyPhoneNumber: o.phoneNumber,
              privacyLastSeen: o.lastSeen,
              privacyProfilePhoto: o.profilePhoto,
              privacyForwarding: o.forwards,
              privacyVoiceMessages: o.voiceMessages,
              privacyGroupChats: o.chatInvite,
              privacyPhoneCall: o.phoneCall,
              privacyPhoneP2P: o.phoneP2P,
              canDisplayChatInTitle: i,
              isAuthRememberMe: e.authRememberMe,
            }
          })((e) => {
            let {
              isActive: t,
              isCurrentUserPremium: n,
              hasPassword: o,
              hasPasscode: r,
              blockedCount: l,
              webAuthCount: c,
              isSensitiveEnabled: d,
              canChangeSensitive: m,
              canDisplayAutoarchiveSetting: u,
              shouldArchiveAndMuteNewNonContact: h,
              canDisplayChatInTitle: P,
              privacyPhoneNumber: Z,
              privacyLastSeen: v,
              privacyProfilePhoto: g,
              privacyForwarding: p,
              privacyVoiceMessages: E,
              privacyGroupChats: C,
              privacyPhoneCall: b,
              privacyPhoneP2P: f,
              onScreenSelect: I,
              onReset: y,
              isAuthRememberMe: S,
            } = e
            const {
              loadPrivacySettings: k,
              loadBlockedContacts: N,
              loadAuthorizations: w,
              loadContentSettings: T,
              updateContentSettings: A,
              loadGlobalPrivacySettings: R,
              updateGlobalPrivacySettings: L,
              loadWebAuthorizations: F,
              showNotification: x,
              setSettingOption: B,
            } = (0, i.Sv)()
            ;(0, a.d4)(() => {
              N(), w(), k(), T(), F()
            }, [N, w, k, T, F]),
              (0, a.d4)(() => {
                t && R()
              }, [t, R])
            const D = (0, M.Z)()
            ;(0, oe.Z)({ isActive: t, onBack: y })
            const O = (0, a.I4)(
                (e) => {
                  L({ shouldArchiveAndMuteNewNonContact: e })
                },
                [L]
              ),
              U = (0, a.I4)(() => {
                n
                  ? I(s.MT.PrivacyVoiceMessages)
                  : x({ message: D('PrivacyVoiceMessagesPremiumOnly') })
              }, [n, D, I, x]),
              _ = (0, a.I4)((e) => {
                B({ canDisplayChatInTitle: e })
              }, []),
              $ = (0, a.I4)(
                (e) => {
                  A(e)
                },
                [A]
              )
            function j(e) {
              const { visibility: t } = e || {},
                n = e ? e.blockChatIds.length + e.blockUserIds.length : 0,
                a = e ? e.allowChatIds.length + e.allowUserIds.length : 0,
                s = []
              n && s.push(`-${n}`), a && s.push(`+${a}`)
              const i = s.length ? `(${s.join(',')})` : ''
              switch (t) {
                case 'everybody':
                  return `${D('P2PEverybody')} ${i}`
                case 'contacts':
                  return `${D('P2PContacts')} ${i}`
                case 'nobody':
                  return `${D('P2PNobody')} ${i}`
              }
            }
            return a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-3' },
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'delete-user', onClick: () => I(s.MT.PrivacyBlockedUsers) },
                  D('BlockedUsers'),
                  a.ZP.createElement('span', { className: 'settings-item__current-value' }, l || '')
                ),
                S &&
                  a.ZP.createElement(
                    Je.Z,
                    {
                      icon: 'key',
                      narrow: !0,
                      onClick: () => I(r ? s.MT.PasscodeEnabled : s.MT.PasscodeDisabled),
                    },
                    a.ZP.createElement(
                      'div',
                      { className: 'multiline-menu-item' },
                      a.ZP.createElement('span', { className: 'title' }, D('Passcode')),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle', dir: 'auto' },
                        D(r ? 'PasswordOn' : 'PasswordOff')
                      )
                    )
                  ),
                a.ZP.createElement(
                  Je.Z,
                  {
                    icon: 'lock',
                    narrow: !0,
                    onClick: () => I(o ? s.MT.TwoFaEnabled : s.MT.TwoFaDisabled),
                  },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('TwoStepVerification')),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle', dir: 'auto' },
                      D(o ? 'PasswordOn' : 'PasswordOff')
                    )
                  )
                ),
                c > 0 &&
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'web', onClick: () => I(s.MT.ActiveWebsites) },
                    D('PrivacySettings.WebSessions'),
                    a.ZP.createElement('span', { className: 'settings-item__current-value' }, c)
                  )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header mb-4', dir: D.isRtl ? 'rtl' : void 0 },
                  D('PrivacyTitle')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyPhoneNumber) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('PrivacyPhoneTitle')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(Z))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyLastSeen) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('LastSeenTitle')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(v))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyProfilePhoto) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement(
                      'span',
                      { className: 'title' },
                      D('PrivacyProfilePhotoTitle')
                    ),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(g))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyPhoneCall) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('WhoCanCallMe')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(b))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyPhoneP2P) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('PrivacyP2P')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(f))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyForwarding) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('PrivacyForwardsTitle')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(p))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  {
                    narrow: !0,
                    disabled: !n,
                    allowDisabledClick: !0,
                    rightElement:
                      !n &&
                      a.ZP.createElement('i', {
                        className: 'icon-lock-badge settings-icon-locked',
                      }),
                    className: 'no-icon',
                    onClick: U,
                  },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('PrivacyVoiceMessages')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(E))
                  )
                ),
                a.ZP.createElement(
                  Je.Z,
                  { narrow: !0, className: 'no-icon', onClick: () => I(s.MT.PrivacyGroupChats) },
                  a.ZP.createElement(
                    'div',
                    { className: 'multiline-menu-item' },
                    a.ZP.createElement('span', { className: 'title' }, D('WhoCanAddMe')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, j(C))
                  )
                )
              ),
              u &&
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: D.isRtl ? 'rtl' : void 0 },
                    D('NewChatsFromNonContacts')
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: D('ArchiveAndMute'),
                    subLabel: D('ArchiveAndMuteInfo'),
                    checked: Boolean(h),
                    onCheck: O,
                  })
                ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header', dir: D.isRtl ? 'rtl' : void 0 },
                  D('lng_settings_window_system')
                ),
                a.ZP.createElement(ht.Z, {
                  label: D('lng_settings_title_chat_name'),
                  checked: Boolean(P),
                  onCheck: _,
                })
              ),
              m &&
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header', dir: D.isRtl ? 'rtl' : void 0 },
                    D('lng_settings_sensitive_title')
                  ),
                  a.ZP.createElement(ht.Z, {
                    label: D('lng_settings_sensitive_disable_filtering'),
                    subLabel: D('lng_settings_sensitive_about'),
                    checked: Boolean(d),
                    disabled: !m,
                    onCheck: $,
                  })
                )
            )
          })
        ),
        li = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
              language: t,
              languages: n,
              canTranslate: a,
              doNotTranslate: s,
            } = e.settings.byKey
            return {
              lastSyncTime: e.lastSyncTime,
              languages: n,
              language: t,
              canTranslate: a,
              doNotTranslate: s,
            }
          })((e) => {
            let {
              isActive: t,
              languages: n,
              language: o,
              canTranslate: r,
              doNotTranslate: l,
              lastSyncTime: c,
              onScreenSelect: d,
              onReset: m,
            } = e
            const { loadLanguages: u, loadAttachBots: h, setSettingOption: P } = (0, i.Sv)(),
              [Z, v] = (0, a.eJ)(o),
              [g, p, E] = (0, I.Z)(),
              C = (0, M.Z)()
            ;(0, a.d4)(() => {
              c && !n?.length && u()
            }, [n, c, u])
            const b = (0, a.I4)(
                (e) => {
                  v(e),
                    p(),
                    (0, $s.m0)(e, () => {
                      E(), P({ language: e }), h()
                    })
                },
                [p, E, P, h]
              ),
              f = (0, a.Ye)(
                () =>
                  n
                    ? (function (e) {
                        const t = (window.navigator.language || 'en').toLowerCase(),
                          n = t.substr(0, 2)
                        return e
                          .map((e) => {
                            let { langCode: t, nativeName: n, name: a } = e
                            return { value: t, label: n, subLabel: a }
                          })
                          .sort((e) => (!t || (e.value !== t && e.value !== n) ? 0 : -1))
                      })(n)
                    : void 0,
                [n]
              ),
              y = (0, a.I4)(
                (e) => {
                  P({ canTranslate: e })
                },
                [P]
              ),
              S = (0, a.Ye)(() => {
                if (l.length)
                  return 1 === l.length
                    ? n
                      ? n.find((e) => {
                          let { langCode: t } = e
                          return t === l[0]
                        })?.nativeName
                      : C('Loading')
                    : C('Languages', l.length)
              }, [l, C, n]),
              k = (0, a.I4)(() => {
                d(s.MT.DoNotTranslate)
              }, [d])
            return (
              (0, oe.Z)({ isActive: t, onBack: m }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content settings-language custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(ht.Z, {
                    label: C('ShowTranslateButton'),
                    checked: r,
                    onCheck: y,
                  }),
                  r &&
                    a.ZP.createElement(
                      Je.Z,
                      { onClick: k },
                      C('DoNotTranslate'),
                      a.ZP.createElement('span', { className: 'settings-item__current-value' }, S)
                    ),
                  a.ZP.createElement(
                    'p',
                    { className: 'settings-item-description mb-0 mt-1' },
                    C('lng_translate_settings_about')
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  f
                    ? a.ZP.createElement(js.Z, {
                        name: 'language-settings',
                        options: f,
                        selected: Z,
                        loadingOption: g ? Z : void 0,
                        onChange: b,
                      })
                    : a.ZP.createElement(ze.Z, null)
                )
              )
            )
          })
        )
      function ci(e) {
        switch (e) {
          case s.MT.PrivacyPhoneNumber:
          case s.MT.PrivacyPhoneNumberAllowedContacts:
          case s.MT.PrivacyPhoneNumberDeniedContacts:
            return 'phoneNumber'
          case s.MT.PrivacyLastSeen:
          case s.MT.PrivacyLastSeenAllowedContacts:
          case s.MT.PrivacyLastSeenDeniedContacts:
            return 'lastSeen'
          case s.MT.PrivacyProfilePhoto:
          case s.MT.PrivacyProfilePhotoAllowedContacts:
          case s.MT.PrivacyProfilePhotoDeniedContacts:
            return 'profilePhoto'
          case s.MT.PrivacyForwarding:
          case s.MT.PrivacyForwardingAllowedContacts:
          case s.MT.PrivacyForwardingDeniedContacts:
            return 'forwards'
          case s.MT.PrivacyVoiceMessages:
          case s.MT.PrivacyVoiceMessagesAllowedContacts:
          case s.MT.PrivacyVoiceMessagesDeniedContacts:
            return 'voiceMessages'
          case s.MT.PrivacyGroupChats:
          case s.MT.PrivacyGroupChatsAllowedContacts:
          case s.MT.PrivacyGroupChatsDeniedContacts:
            return 'chatInvite'
          case s.MT.PrivacyPhoneCall:
          case s.MT.PrivacyPhoneCallAllowedContacts:
          case s.MT.PrivacyPhoneCallDeniedContacts:
            return 'phoneCall'
          case s.MT.PrivacyPhoneP2P:
          case s.MT.PrivacyPhoneP2PAllowedContacts:
          case s.MT.PrivacyPhoneP2PDeniedContacts:
            return 'phoneP2P'
        }
      }
      var di = n(66735)
      const mi = (0, a.X$)((e) => {
          let { onChange: t, inputRef: n } = e
          const [s, i] = (0, a.eJ)(),
            o = (0, a.I4)(
              (e) => {
                i(void 0), t(e)
              },
              [t]
            ),
            r = (0, a.I4)(() => {
              i(void 0)
            }, [])
          return a.ZP.createElement(
            a.ZP.Fragment,
            null,
            a.ZP.createElement('input', {
              type: 'file',
              onChange: function (e) {
                const t = e.target
                t?.files?.[0] && (i(t.files[0]), (t.value = ''))
              },
              accept: 'image/png, image/jpeg',
              ref: n,
              className: 'fb5F16dNcZnOl5zZNuRC',
            }),
            a.ZP.createElement(di.Z, { file: s, onClose: r, onChange: o })
          )
        }),
        ui = (0, a.X$)((e) => {
          let { currentUser: t } = e
          const {
              loadFullUser: n,
              uploadProfilePhoto: s,
              deleteProfilePhoto: o,
              showNotification: r,
            } = (0, i.Sv)(),
            l = (0, M.Z)(),
            c = t.fullInfo?.fallbackPhoto,
            [d, m, u] = (0, I.Z)(!1),
            h = (0, a.sO)(null)
          ;(0, a.d4)(() => {
            t.fullInfo || n({ userId: t.id })
          }, [t.fullInfo, t.id, n])
          const P = (0, a.I4)(
              (e) => {
                s({ file: e, isFallback: !0 }),
                  r({ message: l('Privacy.ProfilePhoto.PublicPhotoSuccess') })
              },
              [l, r, s]
            ),
            Z = (0, a.I4)(() => {
              u(), o({ photo: c })
            }, [u, o, c]),
            v = (0, a.I4)(() => {
              h.current?.click()
            }, [])
          return a.ZP.createElement(
            'div',
            { className: 'settings-item' },
            a.ZP.createElement(
              Je.Z,
              { icon: 'camera-add', onClick: v },
              a.ZP.createElement(mi, { onChange: P, inputRef: h }),
              l(
                c ? 'Privacy.ProfilePhoto.UpdatePublicPhoto' : 'Privacy.ProfilePhoto.SetPublicPhoto'
              )
            ),
            c &&
              a.ZP.createElement(
                Je.Z,
                {
                  leftElement: a.ZP.createElement(De.Z, {
                    photo: c,
                    size: 'mini',
                    className: 'pqiopoENn7dO3E8DQI3e',
                  }),
                  onClick: m,
                  destructive: !0,
                },
                l(
                  c.isVideo
                    ? 'Privacy.ProfilePhoto.RemovePublicVideo'
                    : 'Privacy.ProfilePhoto.RemovePublicPhoto'
                ),
                a.ZP.createElement(mt.Z, {
                  isOpen: d,
                  onClose: u,
                  text: l('Privacy.ResetPhoto.Confirm'),
                  confirmLabel: l('Delete'),
                  confirmHandler: Z,
                  confirmIsDestructive: !0,
                })
              ),
            a.ZP.createElement(
              'p',
              { className: 'settings-item-description-larger', dir: l.isRtl ? 'rtl' : void 0 },
              l('Privacy.ProfilePhoto.PublicPhotoInfo')
            )
          )
        }),
        hi = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let n,
              { screen: a } = t
            const {
                chats: { byId: i },
                settings: { privacy: o },
              } = e,
              l = (0, r.dy)(e, e.currentUserId)
            switch (a) {
              case s.MT.PrivacyPhoneNumber:
                n = o.phoneNumber
                break
              case s.MT.PrivacyLastSeen:
                n = o.lastSeen
                break
              case s.MT.PrivacyProfilePhoto:
                n = o.profilePhoto
                break
              case s.MT.PrivacyPhoneCall:
                n = o.phoneCall
                break
              case s.MT.PrivacyPhoneP2P:
                n = o.phoneP2P
                break
              case s.MT.PrivacyForwarding:
                n = o.forwards
                break
              case s.MT.PrivacyVoiceMessages:
                n = o.voiceMessages
                break
              case s.MT.PrivacyGroupChats:
                n = o.chatInvite
            }
            return n ? { ...n, chatsById: i, currentUser: l } : { currentUser: l }
          })((e) => {
            let {
              screen: t,
              isActive: n,
              onScreenSelect: o,
              onReset: r,
              visibility: l,
              allowUserIds: c,
              allowChatIds: d,
              blockUserIds: m,
              blockChatIds: u,
              chatsById: h,
              currentUser: P,
            } = e
            const { setPrivacyVisibility: Z } = (0, i.Sv)(),
              v = (0, M.Z)(),
              g = (0, a.Ye)(
                () =>
                  t === s.MT.PrivacyGroupChats
                    ? [
                        { value: 'everybody', label: v('P2PEverybody') },
                        { value: 'contacts', label: v('P2PContacts') },
                      ]
                    : [
                        { value: 'everybody', label: v('P2PEverybody') },
                        { value: 'contacts', label: v('P2PContacts') },
                        { value: 'nobody', label: v('P2PNobody') },
                      ],
                [v, t]
              ),
              p = { shouldShowDenied: 'nobody' !== l, shouldShowAllowed: 'everybody' !== l },
              E = ci(t),
              C = (0, a.Ye)(() => {
                switch (t) {
                  case s.MT.PrivacyPhoneNumber:
                    return v('PrivacyPhoneTitle')
                  case s.MT.PrivacyLastSeen:
                    return v('LastSeenTitle')
                  case s.MT.PrivacyProfilePhoto:
                    return v('PrivacyProfilePhotoTitle')
                  case s.MT.PrivacyForwarding:
                    return v('PrivacyForwardsTitle')
                  case s.MT.PrivacyVoiceMessages:
                    return v('PrivacyVoiceMessagesTitle')
                  case s.MT.PrivacyGroupChats:
                    return v('WhoCanAddMe')
                  case s.MT.PrivacyPhoneCall:
                    return v('WhoCanCallMe')
                  case s.MT.PrivacyPhoneP2P:
                    return v('PrivacyP2P')
                  default:
                    return
                }
              }, [v, t])
            ;(0, oe.Z)({ isActive: n, onBack: r })
            const b = (0, a.Ye)(() => {
                if (t === s.MT.PrivacyLastSeen) return v('CustomHelp')
              }, [v, t]),
              f = (() => {
                switch (t) {
                  case s.MT.PrivacyPhoneNumber:
                    return s.MT.PrivacyPhoneNumberAllowedContacts
                  case s.MT.PrivacyLastSeen:
                    return s.MT.PrivacyLastSeenAllowedContacts
                  case s.MT.PrivacyProfilePhoto:
                    return s.MT.PrivacyProfilePhotoAllowedContacts
                  case s.MT.PrivacyForwarding:
                    return s.MT.PrivacyForwardingAllowedContacts
                  case s.MT.PrivacyPhoneCall:
                    return s.MT.PrivacyPhoneCallAllowedContacts
                  case s.MT.PrivacyPhoneP2P:
                    return s.MT.PrivacyPhoneP2PAllowedContacts
                  case s.MT.PrivacyVoiceMessages:
                    return s.MT.PrivacyVoiceMessagesAllowedContacts
                  default:
                    return s.MT.PrivacyGroupChatsAllowedContacts
                }
              })(),
              I = (() => {
                switch (t) {
                  case s.MT.PrivacyPhoneNumber:
                    return s.MT.PrivacyPhoneNumberDeniedContacts
                  case s.MT.PrivacyLastSeen:
                    return s.MT.PrivacyLastSeenDeniedContacts
                  case s.MT.PrivacyProfilePhoto:
                    return s.MT.PrivacyProfilePhotoDeniedContacts
                  case s.MT.PrivacyForwarding:
                    return s.MT.PrivacyForwardingDeniedContacts
                  case s.MT.PrivacyPhoneCall:
                    return s.MT.PrivacyPhoneCallDeniedContacts
                  case s.MT.PrivacyPhoneP2P:
                    return s.MT.PrivacyPhoneP2PDeniedContacts
                  case s.MT.PrivacyVoiceMessages:
                    return s.MT.PrivacyVoiceMessagesDeniedContacts
                  default:
                    return s.MT.PrivacyGroupChatsDeniedContacts
                }
              })(),
              y = (0, a.Ye)(
                () =>
                  c && d && h
                    ? d.reduce((e, t) => e + (h[t] ? h[t].membersCount : 0), c.length)
                    : 0,
                [d, c, h]
              ),
              S = (0, a.Ye)(
                () =>
                  m && u && h
                    ? u.reduce((e, t) => e + (h[t] ? h[t].membersCount : 0), m.length)
                    : 0,
                [u, m, h]
              ),
              k = (0, a.I4)(
                (e) => {
                  Z({ privacyKey: E, visibility: e })
                },
                [E, Z]
              )
            return a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                  C
                ),
                a.ZP.createElement(js.Z, {
                  name: `visibility-${E}`,
                  options: g,
                  onChange: k,
                  selected: l,
                }),
                b &&
                  a.ZP.createElement(
                    'p',
                    {
                      className: 'settings-item-description-larger',
                      dir: v.isRtl ? 'rtl' : void 0,
                    },
                    b
                  )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  'h4',
                  { className: 'settings-item-header mb-4', dir: v.isRtl ? 'rtl' : void 0 },
                  v('PrivacyExceptions')
                ),
                p.shouldShowAllowed &&
                  a.ZP.createElement(
                    Je.Z,
                    {
                      narrow: !0,
                      icon: 'add-user',
                      onClick: () => {
                        o(f)
                      },
                    },
                    a.ZP.createElement(
                      'div',
                      { className: 'multiline-menu-item full-size' },
                      y > 0 &&
                        a.ZP.createElement('span', { className: 'date', dir: 'auto' }, '+', y),
                      a.ZP.createElement('span', { className: 'title' }, v('AlwaysAllow')),
                      a.ZP.createElement('span', { className: 'subtitle' }, v('EditAdminAddUsers'))
                    )
                  ),
                p.shouldShowDenied &&
                  a.ZP.createElement(
                    Je.Z,
                    {
                      narrow: !0,
                      icon: 'delete-user',
                      onClick: () => {
                        o(I)
                      },
                    },
                    a.ZP.createElement(
                      'div',
                      { className: 'multiline-menu-item full-size' },
                      S > 0 &&
                        a.ZP.createElement('span', { className: 'date', dir: 'auto' }, '−', S),
                      a.ZP.createElement('span', { className: 'title' }, v('NeverAllow')),
                      a.ZP.createElement('span', { className: 'subtitle' }, v('EditAdminAddUsers'))
                    )
                  )
              ),
              t === s.MT.PrivacyProfilePhoto &&
                p.shouldShowAllowed &&
                a.ZP.createElement(ui, { currentUser: P })
            )
          })
        )
      function Pi(e) {
        const t = e.platform.toLowerCase(),
          n = e.deviceModel.toLowerCase(),
          a = e.systemVersion.toLowerCase()
        return n.includes('xbox')
          ? 'xbox'
          : n.includes('chrome') && !n.includes('chromebook')
          ? 'chrome'
          : n.includes('brave')
          ? 'brave'
          : n.includes('vivaldi')
          ? 'vivaldi'
          : n.includes('safari')
          ? 'safari'
          : n.includes('firefox')
          ? 'firefox'
          : n.includes('opera')
          ? 'opera'
          : n.includes('samsungbrowser')
          ? 'samsung'
          : t.includes('android')
          ? 'android'
          : n.includes('iphone') ||
            n.includes('ipad') ||
            t.includes('ios') ||
            t.includes('macos') ||
            a.includes('macos')
          ? 'apple'
          : t.includes('ubuntu') || a.includes('ubuntu')
          ? 'ubuntu'
          : t.includes('linux') || a.includes('linux')
          ? 'linux'
          : t.includes('windows') || a.includes('windows')
          ? 'windows'
          : 'unknown'
      }
      var Zi = n(83321)
      const vi = {
          SettingsActiveSession: 'P9I8aybVU7NyFiMWiyU2',
          settingsActiveSession: 'P9I8aybVU7NyFiMWiyU2',
          iconDevice: 'a633Zas_0v2MAAY277vj',
          iconDevice__android: 'GUI0ogXbRdxQ2RGy8fGv',
          iconDeviceAndroid: 'GUI0ogXbRdxQ2RGy8fGv',
          iconDevice__apple: 'emCcCPeQ7_9DHBonyO02',
          iconDeviceApple: 'emCcCPeQ7_9DHBonyO02',
          iconDevice__brave: 'OMEQQMEIcjln7GIyfO3Q',
          iconDeviceBrave: 'OMEQQMEIcjln7GIyfO3Q',
          iconDevice__chrome: 'XEQtza6nFt8ptPkvbi2w',
          iconDeviceChrome: 'XEQtza6nFt8ptPkvbi2w',
          iconDevice__edge: 'iHueuVDDSF_BaK2Wa06i',
          iconDeviceEdge: 'iHueuVDDSF_BaK2Wa06i',
          iconDevice__firefox: 'KM9rrbhNSrNOW8roXGo_',
          iconDeviceFirefox: 'KM9rrbhNSrNOW8roXGo_',
          iconDevice__linux: 'JzdHedSfMsVcaa8u4X6O',
          iconDeviceLinux: 'JzdHedSfMsVcaa8u4X6O',
          iconDevice__opera: 'McukeiFuIkeZbxMNzQKK',
          iconDeviceOpera: 'McukeiFuIkeZbxMNzQKK',
          iconDevice__safari: 'XGWuju_22haQw0Qraor7',
          iconDeviceSafari: 'XGWuju_22haQw0Qraor7',
          iconDevice__samsung: 'ZZGcTr3P3RJrOwOwFX6r',
          iconDeviceSamsung: 'ZZGcTr3P3RJrOwOwFX6r',
          iconDevice__ubuntu: 'OPtbMfpfiWN3dxilMOPX',
          iconDeviceUbuntu: 'OPtbMfpfiWN3dxilMOPX',
          iconDevice__unknown: 'xoc1kuf1XAKh_dhO758U',
          iconDeviceUnknown: 'xoc1kuf1XAKh_dhO758U',
          iconDevice__vivaldi: 'Y25gBvz9xzZicoJgQf8Y',
          iconDeviceVivaldi: 'Y25gBvz9xzZicoJgQf8Y',
          iconDevice__windows: 'dKbtoO2xjdhL8W2mqyxr',
          iconDeviceWindows: 'dKbtoO2xjdhL8W2mqyxr',
          iconDevice__xbox: 'FhLv8AIUHzsoTX8b0zdA',
          iconDeviceXbox: 'FhLv8AIUHzsoTX8b0zdA',
          title: 'b9iUjEhCpOrQ4dPhn2KU',
          note: 'hTTCWbngkwJoEwtGFD9o',
          date: 'pUv5oVVNDZ5lBRzNzx3X',
          box: 'e32uLjclYAYuxxW1CAex',
          actionHeader: 'xwSMwr4aHsrRVIVInLEo',
          actionName: 'tSrCe7E_Iom1nGuh2Gs3',
          headerButton: 'N0buK669iHOZ1hN_H7Ik',
        },
        gi = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { hash: n } = t
            return { session: n ? e.activeSessions.byHash[n] : void 0 }
          })((e) => {
            let { isOpen: t, session: n, onClose: s } = e
            const { changeSessionSettings: o, terminateAuthorization: r } = (0, i.Sv)(),
              l = (0, M.Z)(),
              c = (0, et.Z)(n, !0),
              d = (0, a.I4)(() => {
                o({ hash: n.hash, areSecretChatsEnabled: !n.areSecretChatsEnabled })
              }, [o, n]),
              m = (0, a.I4)(() => {
                o({ hash: n.hash, areCallsEnabled: !n.areCallsEnabled })
              }, [o, n]),
              u = (0, a.I4)(() => {
                r({ hash: n.hash }), s()
              }, [s, n, r])
            if (c)
              return a.ZP.createElement(
                J.Z,
                {
                  header: a.ZP.createElement(
                    'div',
                    { className: 'modal-header-condensed', dir: l.isRtl ? 'rtl' : void 0 },
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        color: 'translucent',
                        size: 'smaller',
                        ariaLabel: l('Close'),
                        onClick: s,
                      },
                      a.ZP.createElement('i', { className: 'icon-close' })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'modal-title' },
                      l('SessionPreview.Title')
                    ),
                    a.ZP.createElement(
                      $.Z,
                      {
                        color: 'danger',
                        onClick: u,
                        className: (0, Q.Z)('modal-action-button', vi.headerButton),
                      },
                      l('SessionPreview.TerminateSession')
                    )
                  ),
                  isOpen: t,
                  hasCloseButton: !0,
                  onClose: s,
                  className: vi.SettingsActiveSession,
                },
                a.ZP.createElement('div', {
                  className: (0, Q.Z)(vi.iconDevice, c && vi[`iconDevice__${Pi(c)}`]),
                }),
                a.ZP.createElement('h3', { className: vi.title, dir: 'auto' }, c?.deviceModel),
                a.ZP.createElement(
                  'div',
                  { className: vi.date, 'aria-label': l('PrivacySettings.LastSeen') },
                  (0, Pe.SA)(1e3 * c.dateActive, l.code)
                ),
                a.ZP.createElement(
                  'dl',
                  { className: vi.box },
                  a.ZP.createElement('dt', null, l('SessionPreview.App')),
                  a.ZP.createElement(
                    'dd',
                    null,
                    c?.appName,
                    ' ',
                    c?.appVersion,
                    ',',
                    ' ',
                    c?.platform,
                    ' ',
                    c?.systemVersion
                  ),
                  a.ZP.createElement('dt', null, l('SessionPreview.Ip')),
                  a.ZP.createElement('dd', null, c?.ip),
                  a.ZP.createElement('dt', null, l('SessionPreview.Location')),
                  a.ZP.createElement(
                    'dd',
                    null,
                    c &&
                      (function (e) {
                        return [e.region, e.country].filter(Boolean).join(', ')
                      })(c)
                  )
                ),
                a.ZP.createElement('p', { className: vi.note }, l('SessionPreview.IpDesc')),
                a.ZP.createElement(
                  'h4',
                  { className: vi.actionHeader },
                  l('AuthSessions.View.AcceptTitle')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { onClick: d },
                  a.ZP.createElement(
                    'span',
                    { className: vi.actionName },
                    l('SessionPreview.Accept.Secret')
                  ),
                  a.ZP.createElement(Zi.Z, {
                    id: 'accept_secrets',
                    label: 'On',
                    checked: c.areSecretChatsEnabled,
                  })
                ),
                a.ZP.createElement(
                  Je.Z,
                  { onClick: m },
                  a.ZP.createElement(
                    'span',
                    { className: vi.actionName },
                    l('SessionPreview.Accept.Calls')
                  ),
                  a.ZP.createElement(Zi.Z, {
                    id: 'accept_calls',
                    label: 'On',
                    checked: c.areCallsEnabled,
                  })
                )
              )
          })
        )
      function pi(e) {
        return [e.region, e.country].filter(Boolean).join(', ')
      }
      const Ei = (0, a.X$)(
          (0, i.c$)((e) => e.activeSessions)((e) => {
            let { isActive: t, onReset: n, byHash: s, orderedHashes: o, ttlDays: r } = e
            const {
                terminateAuthorization: l,
                terminateAllAuthorizations: c,
                changeSessionTtl: d,
              } = (0, i.Sv)(),
              m = (0, M.Z)(),
              [u, h, P] = (0, I.Z)(),
              [Z, v] = (0, a.eJ)(),
              [g, p, E] = (0, I.Z)(),
              C = (0, a.Ye)(() => {
                if (void 0 !== r)
                  return r <= 7
                    ? '7'
                    : r <= 30
                    ? '30'
                    : r <= 93
                    ? '90'
                    : r <= 183
                    ? '183'
                    : r > 183
                    ? '365'
                    : void 0
              }, [r]),
              b = (0, a.Ye)(() => {
                const e = [
                  { label: m('Weeks', 1, 'i'), value: '7' },
                  { label: m('Months', 1, 'i'), value: '30' },
                  { label: m('Months', 3, 'i'), value: '90' },
                  { label: m('Months', 6, 'i'), value: '183' },
                ]
                return r && r >= 365 && e.push({ label: m('Years', 1, 'i'), value: '365' }), e
              }, [m, r]),
              f = (0, a.I4)(
                (e) => {
                  l({ hash: e })
                },
                [l]
              ),
              y = (0, a.I4)(() => {
                P(), c()
              }, [P, c]),
              S = (0, a.I4)(
                (e) => {
                  v(e), p()
                },
                [p]
              ),
              k = (0, a.I4)(() => {
                v(void 0), E()
              }, [E]),
              N = (0, a.I4)(
                (e) => {
                  d({ days: Number(e) })
                },
                [d]
              ),
              w = (0, a.Ye)(() => {
                const e = o.find((e) => s[e].isCurrent)
                return e ? s[e] : void 0
              }, [s, o]),
              T = (0, a.Ye)(() => o.filter((e) => !s[e].isCurrent), [s, o]),
              A = Boolean(T.length)
            return (
              (0, oe.Z)({ isActive: t, onBack: n }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content custom-scroll SettingsActiveSessions' },
                w &&
                  ((L = w),
                  a.ZP.createElement(
                    'div',
                    { className: 'settings-item' },
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header mb-4', dir: m.isRtl ? 'rtl' : void 0 },
                      m('AuthSessions.CurrentSession')
                    ),
                    a.ZP.createElement(
                      Je.Z,
                      { narrow: !0, inactive: !0, icon: `device-${Pi(L)} icon-device` },
                      a.ZP.createElement(
                        'div',
                        { className: 'multiline-menu-item', dir: 'auto' },
                        a.ZP.createElement(
                          'span',
                          { className: 'title', dir: 'auto' },
                          L.deviceModel
                        ),
                        a.ZP.createElement(
                          'span',
                          { className: 'subtitle black tight' },
                          L.appName,
                          ' ',
                          L.appVersion,
                          ', ',
                          L.platform,
                          ' ',
                          L.systemVersion
                        ),
                        a.ZP.createElement('span', { className: 'subtitle' }, L.ip, ' - ', pi(L))
                      )
                    ),
                    A &&
                      a.ZP.createElement(
                        Je.Z,
                        {
                          className: 'destructive mb-0 no-icon',
                          icon: 'stop',
                          ripple: !0,
                          narrow: !0,
                          onClick: h,
                        },
                        m('TerminateAllSessions')
                      )
                  )),
                A &&
                  ((R = T),
                  a.ZP.createElement(
                    'div',
                    { className: 'settings-item' },
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header mb-4', dir: m.isRtl ? 'rtl' : void 0 },
                      m('OtherSessions')
                    ),
                    R.map(function (e) {
                      const t = s[e]
                      return a.ZP.createElement(
                        Je.Z,
                        {
                          key: t.hash,
                          ripple: !0,
                          narrow: !0,
                          contextActions: [
                            {
                              title: 'Terminate',
                              icon: 'stop',
                              destructive: !0,
                              handler: () => {
                                f(t.hash)
                              },
                            },
                          ],
                          icon: `device-${Pi(t)} icon-device`,
                          onClick: () => {
                            S(t.hash)
                          },
                        },
                        a.ZP.createElement(
                          'div',
                          { className: 'multiline-menu-item full-size', dir: 'auto' },
                          a.ZP.createElement(
                            'span',
                            { className: 'date' },
                            (0, Pe.VX)(m, 1e3 * t.dateActive)
                          ),
                          a.ZP.createElement('span', { className: 'title' }, t.deviceModel),
                          a.ZP.createElement(
                            'span',
                            { className: 'subtitle black tight' },
                            t.appName,
                            ' ',
                            t.appVersion,
                            ', ',
                            t.platform,
                            ' ',
                            t.systemVersion
                          ),
                          a.ZP.createElement('span', { className: 'subtitle' }, t.ip, ' ', pi(t))
                        )
                      )
                    })
                  )),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header mb-4', dir: m.isRtl ? 'rtl' : void 0 },
                    m('TerminateOldSessionHeader')
                  ),
                  a.ZP.createElement('p', null, m('IfInactiveFor')),
                  a.ZP.createElement(js.Z, {
                    name: 'session_ttl',
                    options: b,
                    selected: C,
                    onChange: N,
                  })
                ),
                A &&
                  a.ZP.createElement(mt.Z, {
                    isOpen: u,
                    onClose: P,
                    text: m('AreYouSureSessions'),
                    confirmLabel: m('TerminateAllSessions'),
                    confirmHandler: y,
                    confirmIsDestructive: !0,
                    areButtonsInColumn: !0,
                  }),
                a.ZP.createElement(gi, { isOpen: g, hash: Z, onClose: k })
              )
            )
            var R, L
          })
        ),
        Ci = 'TgiK64wG1hkOWSiXybQf',
        bi = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { hash: n } = t
            const a = n ? e.activeWebSessions.byHash[n] : void 0
            return {
              session: a,
              bot: a ? e.users.byId[a.botId] : void 0,
              animationLevel: e.settings.byKey.animationLevel,
            }
          })((e) => {
            let { isOpen: t, session: n, bot: s, animationLevel: o, onClose: r } = e
            const { terminateWebAuthorization: l } = (0, i.Sv)(),
              c = (0, M.Z)(),
              d = (0, et.Z)(n, !0),
              m = (0, et.Z)(s, !0),
              u = (0, a.I4)(() => {
                l({ hash: n.hash }), r()
              }, [r, n, l])
            if (d)
              return a.ZP.createElement(
                J.Z,
                {
                  header: a.ZP.createElement(
                    'div',
                    { className: 'modal-header-condensed', dir: c.isRtl ? 'rtl' : void 0 },
                    a.ZP.createElement(
                      $.Z,
                      {
                        round: !0,
                        color: 'translucent',
                        size: 'smaller',
                        ariaLabel: c('Close'),
                        onClick: r,
                      },
                      a.ZP.createElement('i', { className: 'icon-close' })
                    ),
                    a.ZP.createElement('div', { className: 'modal-title' }, c('WebSessionsTitle')),
                    a.ZP.createElement(
                      $.Z,
                      {
                        color: 'danger',
                        onClick: u,
                        className: (0, Q.Z)('modal-action-button', 'hlKLEbMQAsx572pUREy0'),
                      },
                      c('AuthSessions.LogOut')
                    )
                  ),
                  isOpen: t,
                  hasCloseButton: !0,
                  onClose: r,
                  className: 'OeRWKjYQC6t7Uxv8I3j0',
                },
                a.ZP.createElement(De.Z, {
                  className: 'oy_023CG29VsnL9L5ulf',
                  user: m,
                  size: 'large',
                  animationLevel: o,
                  withVideo: !0,
                }),
                m && a.ZP.createElement(Pa.Z, { className: 'bg8UD_Pu2JWogmjuvVXg', peer: m }),
                a.ZP.createElement('div', { className: Ci }, d?.domain),
                a.ZP.createElement(
                  'dl',
                  { className: 'HSyJbRkyhkeT0s2QA4Ku' },
                  a.ZP.createElement('dt', null, c('AuthSessions.View.Browser')),
                  a.ZP.createElement('dd', null, d?.browser),
                  a.ZP.createElement('dt', null, c('SessionPreview.Ip')),
                  a.ZP.createElement('dd', null, d?.ip),
                  a.ZP.createElement('dt', null, c('SessionPreview.Location')),
                  a.ZP.createElement('dd', null, d?.region)
                ),
                a.ZP.createElement('p', { className: Ci }, c('AuthSessions.View.LocationInfo'))
              )
          })
        ),
        fi = {
          avatar: 'n3bBygyO4j5MQyJ70Twt',
          'clear-help': 'vUICy6ZQCYFSrvvxXe7f',
          clearHelp: 'vUICy6ZQCYFSrvvxXe7f',
        },
        Ii = (0, a.X$)(
          (0, i.c$)((e) => {
            const { byHash: t, orderedHashes: n } = e.activeWebSessions
            return { byHash: t, orderedHashes: n, animationLevel: e.settings.byKey.animationLevel }
          })((e) => {
            let { isActive: t, byHash: n, orderedHashes: s, animationLevel: o, onReset: r } = e
            const { terminateWebAuthorization: l, terminateAllWebAuthorizations: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u, h] = (0, I.Z)(),
              [P, Z] = (0, a.eJ)(),
              [v, g, p] = (0, I.Z)(),
              E = (0, a.I4)(
                (e) => {
                  l({ hash: e })
                },
                [l]
              ),
              C = (0, a.I4)(() => {
                h(), c()
              }, [h, c]),
              b = (0, a.I4)(
                (e) => {
                  Z(e), g()
                },
                [g]
              ),
              f = (0, a.I4)(() => {
                Z(void 0), p()
              }, [p])
            var y
            if (
              ((0, a.d4)(() => {
                s.length || r()
              }, [r, s]),
              (0, oe.Z)({ isActive: t, onBack: r }),
              s.length)
            )
              return a.ZP.createElement(
                'div',
                { className: 'settings-content custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    Je.Z,
                    {
                      className: 'destructive mb-0 no-icon',
                      icon: 'stop',
                      ripple: !0,
                      narrow: !0,
                      onClick: u,
                    },
                    d('AuthSessions.LogOutApplications')
                  ),
                  a.ZP.createElement(
                    'p',
                    { className: (0, Q.Z)('settings-item-description', fi.clearHelp) },
                    d('ClearOtherWebSessionsHelp')
                  )
                ),
                ((y = s),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(
                    'h4',
                    { className: 'settings-item-header mb-4', dir: d.isRtl ? 'rtl' : void 0 },
                    d('WebSessionsTitle')
                  ),
                  y.map(function (e) {
                    const t = n[e],
                      s = (0, i.Rd)().users.byId[t.botId]
                    return a.ZP.createElement(
                      Je.Z,
                      {
                        key: t.hash,
                        ripple: !0,
                        narrow: !0,
                        contextActions: [
                          {
                            title: 'Terminate',
                            icon: 'stop',
                            destructive: !0,
                            handler: () => {
                              E(t.hash)
                            },
                          },
                        ],
                        onClick: () => b(t.hash),
                      },
                      a.ZP.createElement(De.Z, {
                        className: fi.avatar,
                        user: s,
                        size: 'tiny',
                        animationLevel: o,
                        withVideo: !0,
                      }),
                      a.ZP.createElement(
                        'div',
                        { className: 'multiline-menu-item full-size', dir: 'auto' },
                        a.ZP.createElement(
                          'span',
                          { className: 'date' },
                          (0, Pe.VX)(d, 1e3 * t.dateActive)
                        ),
                        s && a.ZP.createElement(Pa.Z, { className: fi.title, peer: s }),
                        a.ZP.createElement(
                          'span',
                          { className: (0, Q.Z)('subtitle', 'black', 'tight', fi.platform) },
                          t.domain,
                          ', ',
                          t.browser,
                          ', ',
                          t.platform
                        ),
                        a.ZP.createElement('span', { className: 'subtitle' }, t.ip, ' ', t.region)
                      )
                    )
                  })
                )),
                a.ZP.createElement(mt.Z, {
                  isOpen: m,
                  onClose: h,
                  title: d('AuthSessions.LogOutApplications'),
                  text: d('AreYouSureWebSessions'),
                  confirmHandler: C,
                  confirmIsDestructive: !0,
                }),
                a.ZP.createElement(bi, { isOpen: v, hash: P, onClose: f })
              )
          })
        ),
        yi = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
              users: { byId: t },
              blocked: { ids: n },
              contactList: a,
              currentUserId: s,
            } = e
            return {
              usersById: t,
              blockedIds: n,
              contactIds: a?.userIds,
              localContactIds: (0, r.jU)(e).userSearch.localUserIds,
              currentUserId: s,
            }
          })((e) => {
            let {
              usersById: t,
              blockedIds: n,
              contactIds: s,
              localContactIds: r,
              currentUserId: l,
              isOpen: c,
              onClose: d,
            } = e
            const { setUserSearchQuery: m, blockContact: u } = (0, i.Sv)(),
              h = (0, M.Z)(),
              [P, Z] = (0, a.eJ)('')
            ;(0, a.d4)(() => {
              m({ query: P })
            }, [P, m])
            const v = (0, a.Ye)(() => {
                const e = (0, $e.Tw)(
                  [...(s || []), ...(r || [])].filter((e) => e !== l && !n.includes(e))
                )
                return (0, o.kK)(e, t, P).sort((e, n) => {
                  const a = (0, o.Js)(t[e]) || '',
                    s = (0, o.Js)(t[n]) || ''
                  return a.localeCompare(s)
                })
              }, [n, s, l, P, r, t]),
              g = (0, a.I4)(
                (e) => {
                  const { id: n, accessHash: a } = t[e] || {}
                  n && a && (u({ contactId: n, accessHash: a }), d())
                },
                [u, d, t]
              )
            return a.ZP.createElement(Qe, {
              isOpen: c,
              chatOrUserIds: v,
              searchPlaceholder: h('BlockedUsers.BlockUser'),
              search: P,
              onSearchChange: Z,
              onSelectChatOrUser: g,
              onClose: d,
            })
          })
        ),
        Si = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
              chats: { byId: t },
              users: { byId: n },
              blocked: { ids: a },
              countryList: { phoneCodes: s },
            } = e
            return { chatsByIds: t, usersByIds: n, blockedIds: a, phoneCodeList: s }
          })((e) => {
            let {
              isActive: t,
              onReset: n,
              chatsByIds: s,
              usersByIds: r,
              blockedIds: l,
              phoneCodeList: c,
            } = e
            const { unblockContact: d } = (0, i.Sv)(),
              u = (0, M.Z)(),
              [h, P, Z] = (0, I.Z)(),
              v = (0, a.I4)(
                (e) => {
                  d({ contactId: e })
                },
                [d]
              )
            ;(0, oe.Z)({ isActive: t, onBack: n })
            const g = (0, a.Ye)(
              () =>
                l.reduce((e, t) => {
                  const n = (0, o.YC)(t) ? r[t] : void 0,
                    a = n && !n.phoneNumber && (0, o.WS)(n)
                  return a && (e[t] = a), e
                }, {}),
              [l, r]
            )
            return a.ZP.createElement(
              'div',
              { className: 'settings-fab-wrapper' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content infinite-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item no-border' },
                  a.ZP.createElement(
                    'p',
                    {
                      className: 'settings-item-description-larger mt-0 mb-2',
                      dir: u.isRtl ? 'rtl' : void 0,
                    },
                    u('BlockedUsersInfo')
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'chat-list custom-scroll' },
                  l?.length
                    ? a.ZP.createElement(
                        'div',
                        { className: 'scroll-container' },
                        l.map((e, t) =>
                          (function (e, t, n) {
                            const i = (0, o.YC)(e),
                              l = i ? r[e] : void 0,
                              d = i ? void 0 : s[e],
                              u = l || d,
                              h = (0, Q.Z)(
                                'Chat chat-item-clickable blocked-list-item small-icon',
                                i ? 'private' : 'group'
                              ),
                              P = g[e]
                            return a.ZP.createElement(
                              Je.Z,
                              {
                                key: e,
                                className: h,
                                ripple: !0,
                                narrow: !0,
                                contextActions: [
                                  {
                                    title: 'Unblock',
                                    icon: 'unlock',
                                    handler: () => {
                                      v(e)
                                    },
                                  },
                                ],
                                style: `top: ${(0 + t) * m.rSj}px;`,
                              },
                              a.ZP.createElement(De.Z, { size: 'medium', user: l, chat: d }),
                              a.ZP.createElement(
                                'div',
                                { className: 'contact-info', dir: 'auto' },
                                u && a.ZP.createElement(Pa.Z, { peer: u }),
                                l?.phoneNumber &&
                                  a.ZP.createElement(
                                    'div',
                                    { className: 'contact-phone', dir: 'auto' },
                                    (0, It.WZ)(c, l.phoneNumber)
                                  ),
                                P &&
                                  a.ZP.createElement(
                                    'div',
                                    { className: 'contact-username', dir: 'auto' },
                                    '@',
                                    P
                                  )
                              )
                            )
                          })(e, t)
                        )
                      )
                    : l && !l.length
                    ? a.ZP.createElement(
                        'div',
                        { className: 'no-results', dir: 'auto' },
                        u('NoBlocked')
                      )
                    : a.ZP.createElement(ze.Z, { key: 'loading' })
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: !0, onClick: P, ariaLabel: u('BlockContact') },
                a.ZP.createElement('i', { className: 'icon-add' })
              ),
              a.ZP.createElement(yi, { isOpen: h, onClose: Z })
            )
          })
        )
      var ki = n(21179),
        Ni = n(2092)
      const wi = (0, a.X$)((e) => {
        let { isActive: t, onReset: n, onScreenSelect: i } = e
        const o = (0, M.Z)()
        return (
          (0, oe.Z)({ isActive: t, onBack: n }),
          a.ZP.createElement(
            'div',
            { className: 'settings-content two-fa custom-scroll' },
            a.ZP.createElement(
              'div',
              { className: 'settings-content-header no-border' },
              a.ZP.createElement(ki.Z, {
                tgsUrl: ws.l.Lock,
                previewUrl: Ni,
                size: 160,
                className: 'settings-content-icon',
              }),
              a.ZP.createElement(
                'p',
                { className: 'settings-item-description mb-3', dir: 'auto' },
                (0, X.Z)(o('EnabledPasswordText'), ['br'])
              )
            ),
            a.ZP.createElement(
              'div',
              { className: 'settings-item pt-0' },
              a.ZP.createElement(
                Je.Z,
                { icon: 'edit', onClick: () => i(s.MT.TwoFaChangePasswordCurrent) },
                o('ChangePassword')
              ),
              a.ZP.createElement(
                Je.Z,
                { icon: 'password-off', onClick: () => i(s.MT.TwoFaTurnOff) },
                o('TurnPasswordOff')
              ),
              a.ZP.createElement(
                Je.Z,
                { icon: 'email', onClick: () => i(s.MT.TwoFaRecoveryEmailCurrentPassword) },
                o('SetRecoveryEmail')
              )
            )
          )
        )
      })
      var Mi = n(93490),
        Ti = n(99364)
      const Ai = (0, a.X$)((e) => {
          let {
            isActive: t,
            onReset: n,
            error: s,
            isLoading: i,
            shouldDisablePasswordManager: o,
            expectedPassword: r,
            placeholder: l = 'Current Password',
            hint: c,
            submitLabel: d,
            clearError: m,
            onSubmit: u,
          } = e
          const [h, P] = (0, a.eJ)(''),
            [Z, v] = (0, a.eJ)(!1),
            g = (0, a.I4)(
              (e) => {
                r && e !== r ? P('Passwords Should Be Equal') : u(e)
              },
              [u, r]
            ),
            p = (0, a.I4)(() => {
              m && m(), P('')
            }, [m]),
            E = (0, M.Z)()
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content password-form custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(Mi.Z, { isBig: !0, isPasswordVisible: Z })
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement(Ti.Z, {
                  error: h || s,
                  hint: c,
                  placeholder: l,
                  shouldDisablePasswordManager: o,
                  submitLabel: d || E('Next'),
                  clearError: p,
                  isLoading: i,
                  isPasswordVisible: Z,
                  shouldResetValue: t,
                  onChangePasswordVisibility: v,
                  onSubmit: g,
                })
              )
            )
          )
        }),
        Ri = (0, a.X$)((e) => {
          let { isActive: t, onReset: n, onStart: s } = e
          const i = (0, M.Z)()
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content two-fa custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(ki.Z, {
                  tgsUrl: ws.l.Lock,
                  previewUrl: Ni,
                  size: 160,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  i('SetAdditionalPasswordInfo')
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement($.Z, { onClick: s }, i('EditAdminTransferSetPassword'))
              )
            )
          )
        })
      var Li = n(45601)
      const Fi = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { icon: n } = t
            return { animatedEmoji: (0, r.zB)(e, 'email' === n ? '💌' : '💡') }
          })((e) => {
            let {
              animatedEmoji: t,
              type: n = 'text',
              isLoading: s,
              error: i,
              placeholder: o,
              shouldConfirm: r,
              clearError: l,
              onSubmit: c,
              isActive: m,
              onReset: u,
            } = e
            const h = (0, a.sO)(null),
              { isMobile: P } = (0, U.ZP)(),
              Z = P ? 550 : 400,
              [v, g] = (0, a.eJ)(''),
              [p, E, C] = (0, I.Z)(!1)
            ;(0, a.d4)(() => {
              d.$b ||
                setTimeout(() => {
                  h.current.focus()
                }, Z)
            }, [Z])
            const b = (0, a.I4)(
                (e) => {
                  i && l && l(), g(e.target.value)
                },
                [l, i]
              ),
              f = (0, a.I4)(() => {
                c()
              }, [c]),
              y = (0, a.I4)(() => {
                C(), c()
              }, [c, C]),
              S = (0, M.Z)()
            return (
              (0, oe.Z)({ isActive: m, onBack: u }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content two-fa custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-content-header no-border' },
                  a.ZP.createElement(Li.Z, {
                    sticker: t,
                    size: 160,
                    className: 'settings-content-icon',
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item pt-0' },
                  a.ZP.createElement(
                    'form',
                    {
                      action: '',
                      onSubmit: (e) => {
                        e.preventDefault(), h.current && c(v)
                      },
                    },
                    a.ZP.createElement(He.Z, {
                      ref: h,
                      value: v,
                      inputMode: n,
                      label: o,
                      error: i,
                      onChange: b,
                    }),
                    v
                      ? a.ZP.createElement(
                          $.Z,
                          { type: 'submit', isLoading: s, ripple: !0 },
                          S('Continue')
                        )
                      : a.ZP.createElement(
                          $.Z,
                          { isText: !0, isLoading: s, ripple: !0, onClick: r ? E : f },
                          S('YourEmailSkip')
                        )
                  ),
                  r &&
                    a.ZP.createElement(
                      J.Z,
                      {
                        className: 'narrow',
                        isOpen: p,
                        title: S('YourEmailSkipWarning'),
                        onClose: C,
                      },
                      (0, X.Z)(S('YourEmailSkipWarningText'), ['br', 'simple_markdown']),
                      a.ZP.createElement(
                        'div',
                        { className: 'dialog-buttons' },
                        a.ZP.createElement(
                          $.Z,
                          {
                            color: 'danger',
                            ripple: !0,
                            isText: !0,
                            className: 'confirm-dialog-button',
                            onClick: y,
                          },
                          S('YourEmailSkip')
                        ),
                        a.ZP.createElement(
                          $.Z,
                          {
                            color: 'primary',
                            ripple: !0,
                            isText: !0,
                            className: 'confirm-dialog-button',
                            onClick: C,
                          },
                          S('Cancel')
                        )
                      )
                    )
                )
              )
            )
          })
        ),
        xi = (0, a.X$)((e) => {
          let { isActive: t, onReset: n, onScreenSelect: i } = e
          const o = (0, M.Z)(),
            r = (0, a.I4)(() => {
              i(s.MT.Privacy)
            }, [i])
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content two-fa custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(Ts.Z, {
                  size: m.K2q,
                  tgsUrl: ws.l.Congratulations,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  o('TwoStepVerificationPasswordSetInfo')
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement(
                  $.Z,
                  { onClick: r },
                  o('TwoStepVerificationPasswordReturnSettings')
                )
              )
            )
          )
        }),
        Bi = (0, a.X$)(
          (0, i.c$)((e) => ({
            animatedEmoji: (0, r.zB)(e, '💌'),
            codeLength: e.twoFaSettings.waitingEmailCodeLength,
          }))((e) => {
            let {
              animatedEmoji: t,
              codeLength: n,
              isLoading: s,
              error: i,
              clearError: o,
              onSubmit: r,
              isActive: l,
              onReset: c,
            } = e
            const m = (0, a.sO)(null),
              { isMobile: u } = (0, U.ZP)(),
              h = u ? 550 : 400,
              [P, Z] = (0, a.eJ)('')
            ;(0, a.d4)(() => {
              d.$b ||
                setTimeout(() => {
                  m.current.focus()
                }, h)
            }, [h])
            const v = (0, M.Z)()
            ;(0, oe.Z)({ isActive: l, onBack: c })
            const g = (0, a.I4)(
              (e) => {
                i && o && o()
                const t = e.target.value.slice(0, n)
                t.length === n && r(t), Z(t), (e.target.value = t)
              },
              [o, n, i, r]
            )
            return a.ZP.createElement(
              'div',
              { className: 'settings-content two-fa custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(Li.Z, {
                  sticker: t,
                  size: 160,
                  className: 'settings-content-icon',
                })
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement(He.Z, {
                  value: P,
                  ref: m,
                  inputMode: 'decimal',
                  label: v('YourEmailCode'),
                  error: i,
                  onChange: g,
                }),
                s && a.ZP.createElement(ze.Z, null)
              )
            )
          })
        ),
        Di = (0, a.X$)(
          (0, i.c$)((e) => ({ ...e.twoFaSettings }))((e) => {
            let {
              currentScreen: t,
              shownScreen: n,
              state: o,
              hint: r,
              isLoading: l,
              error: c,
              waitingEmailCodeLength: d,
              dispatch: m,
              isActive: u,
              onScreenSelect: h,
              onReset: P,
            } = e
            const {
              updatePassword: Z,
              checkPassword: v,
              clearTwoFaError: g,
              updateRecoveryEmail: p,
              provideTwoFaEmailCode: E,
              clearPassword: C,
            } = (0, i.Sv)()
            ;(0, a.d4)(() => {
              d &&
                (t === s.MT.TwoFaNewPasswordEmail
                  ? h(s.MT.TwoFaNewPasswordEmailCode)
                  : t === s.MT.TwoFaRecoveryEmail && h(s.MT.TwoFaRecoveryEmailCode))
            }, [t, h, d])
            const b = (0, a.I4)(() => {
                m({ type: 'reset' }), h(s.MT.TwoFaNewPassword)
              }, [m, h]),
              f = (0, a.I4)(
                (e) => {
                  m({ type: 'setPassword', payload: e }), h(s.MT.TwoFaNewPasswordConfirm)
                },
                [m, h]
              ),
              I = (0, a.I4)(() => {
                h(s.MT.TwoFaNewPasswordHint)
              }, [h]),
              y = (0, a.I4)(
                (e) => {
                  m({ type: 'setHint', payload: e }), h(s.MT.TwoFaNewPasswordEmail)
                },
                [m, h]
              ),
              S = (0, a.I4)(
                (e) => {
                  m({ type: 'setEmail', payload: e }),
                    Z({
                      ...o,
                      email: e,
                      onSuccess: () => {
                        h(s.MT.TwoFaCongratulations)
                      },
                    })
                },
                [m, h, o, Z]
              ),
              k = (0, a.I4)(
                (e) => {
                  m({ type: 'setCurrentPassword', payload: e }),
                    v({
                      currentPassword: e,
                      onSuccess: () => {
                        h(s.MT.TwoFaChangePasswordNew)
                      },
                    })
                },
                [v, m, h]
              ),
              N = (0, a.I4)(
                (e) => {
                  m({ type: 'setPassword', payload: e }), h(s.MT.TwoFaChangePasswordConfirm)
                },
                [m, h]
              ),
              w = (0, a.I4)(() => {
                h(s.MT.TwoFaChangePasswordHint)
              }, [h]),
              T = (0, a.I4)(
                (e) => {
                  m({ type: 'setHint', payload: e }),
                    Z({
                      ...o,
                      hint: e,
                      onSuccess: () => {
                        h(s.MT.TwoFaCongratulations)
                      },
                    })
                },
                [m, h, o, Z]
              ),
              A = (0, a.I4)(
                (e) => {
                  C({
                    currentPassword: e,
                    onSuccess: () => {
                      h(s.MT.Privacy)
                    },
                  })
                },
                [C, h]
              ),
              R = (0, a.I4)(
                (e) => {
                  m({ type: 'setCurrentPassword', payload: e }),
                    v({
                      currentPassword: e,
                      onSuccess: () => {
                        h(s.MT.TwoFaRecoveryEmail)
                      },
                    })
                },
                [v, m, h]
              ),
              L = (0, a.I4)(
                (e) => {
                  m({ type: 'setEmail', payload: e }),
                    p({
                      ...o,
                      email: e,
                      onSuccess: () => {
                        h(s.MT.TwoFaCongratulations)
                      },
                    })
                },
                [m, h, o, p]
              ),
              F = (0, a.I4)(
                (e) => {
                  E({ code: e })
                },
                [E]
              ),
              x = (0, M.Z)()
            switch (t) {
              case s.MT.TwoFaDisabled:
                return a.ZP.createElement(Ri, {
                  onStart: b,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaNewPassword,
                      s.MT.TwoFaNewPasswordConfirm,
                      s.MT.TwoFaNewPasswordHint,
                      s.MT.TwoFaNewPasswordEmail,
                      s.MT.TwoFaNewPasswordEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaNewPassword:
                return a.ZP.createElement(Ai, {
                  placeholder: x('PleaseEnterPassword'),
                  submitLabel: x('Continue'),
                  onSubmit: f,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaNewPasswordConfirm,
                      s.MT.TwoFaNewPasswordHint,
                      s.MT.TwoFaNewPasswordEmail,
                      s.MT.TwoFaNewPasswordEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaNewPasswordConfirm:
                return a.ZP.createElement(Ai, {
                  expectedPassword: o.password,
                  placeholder: x('PleaseReEnterPassword'),
                  submitLabel: x('Continue'),
                  onSubmit: I,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaNewPasswordHint,
                      s.MT.TwoFaNewPasswordEmail,
                      s.MT.TwoFaNewPasswordEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaNewPasswordHint:
                return a.ZP.createElement(Fi, {
                  icon: 'hint',
                  placeholder: x('PasswordHintPlaceholder'),
                  onSubmit: y,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaNewPasswordEmail,
                      s.MT.TwoFaNewPasswordEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaNewPasswordEmail:
                return a.ZP.createElement(Fi, {
                  icon: 'email',
                  type: 'email',
                  isLoading: l,
                  error: c,
                  clearError: g,
                  placeholder: x('RecoveryEmailTitle'),
                  shouldConfirm: !0,
                  onSubmit: S,
                  isActive:
                    u || [s.MT.TwoFaNewPasswordEmailCode, s.MT.TwoFaCongratulations].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaNewPasswordEmailCode:
                return a.ZP.createElement(Bi, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  onSubmit: F,
                  isActive: u || n === s.MT.TwoFaCongratulations,
                  onReset: P,
                })
              case s.MT.TwoFaCongratulations:
                return a.ZP.createElement(xi, { onScreenSelect: h, isActive: u, onReset: P })
              case s.MT.TwoFaEnabled:
                return a.ZP.createElement(wi, {
                  onScreenSelect: h,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaChangePasswordCurrent,
                      s.MT.TwoFaChangePasswordNew,
                      s.MT.TwoFaChangePasswordConfirm,
                      s.MT.TwoFaChangePasswordHint,
                      s.MT.TwoFaTurnOff,
                      s.MT.TwoFaRecoveryEmailCurrentPassword,
                      s.MT.TwoFaRecoveryEmail,
                      s.MT.TwoFaRecoveryEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaChangePasswordCurrent:
                return a.ZP.createElement(Ai, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  hint: r,
                  onSubmit: k,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaChangePasswordNew,
                      s.MT.TwoFaChangePasswordConfirm,
                      s.MT.TwoFaChangePasswordHint,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaChangePasswordNew:
                return a.ZP.createElement(Ai, {
                  placeholder: x('PleaseEnterNewFirstPassword'),
                  onSubmit: N,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaChangePasswordConfirm,
                      s.MT.TwoFaChangePasswordHint,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaChangePasswordConfirm:
                return a.ZP.createElement(Ai, {
                  expectedPassword: o.password,
                  placeholder: x('PleaseReEnterPassword'),
                  onSubmit: w,
                  isActive:
                    u || [s.MT.TwoFaChangePasswordHint, s.MT.TwoFaCongratulations].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaChangePasswordHint:
                return a.ZP.createElement(Fi, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  icon: 'hint',
                  placeholder: x('PasswordHintPlaceholder'),
                  onSubmit: T,
                  isActive: u || n === s.MT.TwoFaCongratulations,
                  onReset: P,
                })
              case s.MT.TwoFaTurnOff:
                return a.ZP.createElement(Ai, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  hint: r,
                  onSubmit: A,
                  isActive: u,
                  onReset: P,
                })
              case s.MT.TwoFaRecoveryEmailCurrentPassword:
                return a.ZP.createElement(Ai, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  hint: r,
                  onSubmit: R,
                  isActive:
                    u ||
                    [
                      s.MT.TwoFaRecoveryEmail,
                      s.MT.TwoFaRecoveryEmailCode,
                      s.MT.TwoFaCongratulations,
                    ].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaRecoveryEmail:
                return a.ZP.createElement(Fi, {
                  icon: 'email',
                  type: 'email',
                  placeholder: x('RecoveryEmailTitle'),
                  onSubmit: L,
                  isActive:
                    u || [s.MT.TwoFaRecoveryEmailCode, s.MT.TwoFaCongratulations].includes(n),
                  onReset: P,
                })
              case s.MT.TwoFaRecoveryEmailCode:
                return a.ZP.createElement(Bi, {
                  isLoading: l,
                  error: c,
                  clearError: g,
                  onSubmit: F,
                  isActive: u || n === s.MT.TwoFaCongratulations,
                  onReset: P,
                })
              default:
                return
            }
          })
        )
      var Oi = n(11820)
      function Ui(e, t) {
        const { privacy: n } = e.settings
        switch (t) {
          case s.MT.PrivacyPhoneNumberAllowedContacts:
          case s.MT.PrivacyPhoneNumberDeniedContacts:
            return n.phoneNumber
          case s.MT.PrivacyLastSeenAllowedContacts:
          case s.MT.PrivacyLastSeenDeniedContacts:
            return n.lastSeen
          case s.MT.PrivacyProfilePhotoAllowedContacts:
          case s.MT.PrivacyProfilePhotoDeniedContacts:
            return n.profilePhoto
          case s.MT.PrivacyPhoneCallAllowedContacts:
          case s.MT.PrivacyPhoneCallDeniedContacts:
            return n.phoneCall
          case s.MT.PrivacyPhoneP2PAllowedContacts:
          case s.MT.PrivacyPhoneP2PDeniedContacts:
            return n.phoneP2P
          case s.MT.PrivacyForwardingAllowedContacts:
          case s.MT.PrivacyForwardingDeniedContacts:
            return n.forwards
          case s.MT.PrivacyVoiceMessagesAllowedContacts:
          case s.MT.PrivacyVoiceMessagesDeniedContacts:
            return n.voiceMessages
          case s.MT.PrivacyGroupChatsDeniedContacts:
          case s.MT.PrivacyGroupChatsAllowedContacts:
            return n.chatInvite
        }
      }
      const _i = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { screen: n } = t
            return { currentUserId: e.currentUserId, settings: Ui(e, n) }
          })((e) => {
            let {
              isAllowList: t,
              screen: n,
              isActive: r,
              onScreenSelect: l,
              onReset: c,
              currentUserId: d,
              settings: u,
            } = e
            const { setPrivacySettings: h } = (0, i.Sv)(),
              P = (0, M.Z)(),
              Z = (0, a.Ye)(
                () =>
                  u
                    ? t
                      ? [...u.allowUserIds, ...u.allowChatIds]
                      : [...u.blockUserIds, ...u.blockChatIds]
                    : [],
                [t, u]
              ),
              [v, g] = (0, a.eJ)(''),
              [p, E] = (0, a.eJ)(!1),
              [C, b] = (0, a.eJ)(Z),
              f = (0, Ms.d7)(m.NfV),
              I = (0, Ms.d7)(m.WSp),
              y = (0, a.Ye)(() => {
                const e = (0, i.Rd)().chats.byId,
                  t = (0, $e.Tw)([...(f || []), ...(I || [])]).filter((t) => {
                    const n = e[t]
                    return n && (0, o.YC)(n.id) && n.id !== d
                  })
                return (0, $e.Tw)([...Z, ...(0, o.$l)(P, t, e, v)])
              }, [f, I, Z, P, v, d]),
              S = (0, a.I4)((e) => {
                b(e), E(!0)
              }, []),
              k = (0, a.I4)(() => {
                h({ privacyKey: ci(n), isAllowList: Boolean(t), contactsIds: C }), l(s.MT.Privacy)
              }, [t, C, l, n, h])
            return (
              (0, oe.Z)({ isActive: r, onBack: c }),
              a.ZP.createElement(
                'div',
                { className: 'NewChat-inner step-1' },
                a.ZP.createElement(Oi.Z, {
                  itemIds: y || [],
                  selectedIds: C,
                  filterValue: v,
                  filterPlaceholder: P(t ? 'AlwaysAllowPlaceholder' : 'NeverAllowPlaceholder'),
                  searchInputId: 'new-group-picker-search',
                  onSelectedIdsChange: S,
                  onFilterChange: g,
                }),
                a.ZP.createElement(
                  us.Z,
                  { isShown: p, onClick: k, ariaLabel: P(t ? 'AlwaysAllow' : 'NeverAllow') },
                  a.ZP.createElement('i', { className: 'icon-arrow-right' })
                )
              )
            )
          })
        ),
        $i = (0, a.X$)(
          (0, i.c$)((e) => {
            const { availableReactions: t, config: n } = e
            return { availableReactions: t, selectedReaction: n?.defaultReaction }
          })((e) => {
            let { isActive: t, availableReactions: n, selectedReaction: s, onReset: o } = e
            const { setDefaultReaction: r } = (0, i.Sv)()
            ;(0, oe.Z)({ isActive: t, onBack: o })
            const l = (0, a.Ye)(
                () =>
                  (n || [])
                    .filter((e) => !e.isInactive)
                    .map((e) => ({
                      label: a.ZP.createElement(
                        a.ZP.Fragment,
                        null,
                        a.ZP.createElement(ha.Z, { reaction: e.reaction, availableReactions: n }),
                        e.title
                      ),
                      value: e.reaction.emoticon,
                    })),
                [n]
              ),
              c = (0, a.I4)(
                (e) => {
                  r({ reaction: { emoticon: e } })
                },
                [r]
              )
            return a.ZP.createElement(
              'div',
              { className: 'settings-content settings-item custom-scroll settings-quick-reaction' },
              a.ZP.createElement(js.Z, {
                name: 'quick-reaction-settings',
                options: l,
                selected: s,
                onChange: c,
              })
            )
          })
        )
      var ji = n(95281)
      const Gi = (0, a.X$)((e) => {
          let { isActive: t, onReset: n, onStart: s } = e
          const i = (0, M.Z)()
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content local-passcode custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(ki.Z, {
                  tgsUrl: ws.l.Lock,
                  previewUrl: Ni,
                  size: m.moH,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description', dir: 'auto' },
                  'When you set up an additional passcode, a lock icon will appear on the chats page. Tap it to lock and unlock your Teamgram WebZ.'
                ),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  "Note: if you forget your local passcode, you'll need to log out of Teamgram WebZ and log in again."
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement($.Z, { onClick: s }, i('EnablePasscode'))
              )
            )
          )
        }),
        Vi = (0, a.X$)((e) => {
          let { isActive: t, onReset: n, onScreenSelect: i } = e
          const o = (0, M.Z)()
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content local-passcode custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(ki.Z, {
                  tgsUrl: ws.l.Lock,
                  previewUrl: Ni,
                  size: 160,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  'Local passcode is enabled.'
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'edit', onClick: () => i(s.MT.PasscodeChangePasscodeCurrent) },
                  o('Passcode.Change')
                ),
                a.ZP.createElement(
                  Je.Z,
                  { icon: 'password-off', onClick: () => i(s.MT.PasscodeTurnOff) },
                  o('Passcode.TurnOff')
                )
              )
            )
          )
        }),
        zi = (0, a.X$)((e) => {
          let { isActive: t, onReset: n } = e
          const s = (0, M.Z)(),
            i = (0, a.I4)(() => {
              n(!0)
            }, [n])
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content local-passcode custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(Ts.Z, {
                  size: m.moH,
                  tgsUrl: ws.l.Congratulations,
                  className: 'settings-content-icon',
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  'Congratulations!'
                ),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description mb-3', dir: 'auto' },
                  "Now you can lock the app with a passcode so that others can't open it."
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item pt-0' },
                a.ZP.createElement($.Z, { onClick: i }, s('Back'))
              )
            )
          )
        }),
        Hi = (0, a.X$)(
          (0, i.c$)((e) => ({ ...e.passcode }))((e) => {
            let {
              passcode: t,
              currentScreen: n,
              shownScreen: o,
              error: r,
              isActive: l,
              isLoading: c,
              onScreenSelect: d,
              onSetPasscode: m,
              onReset: u,
            } = e
            const {
                setPasscode: h,
                clearPasscode: P,
                setPasscodeError: Z,
                clearPasscodeError: v,
              } = (0, i.Sv)(),
              g = (0, M.Z)(),
              p = (0, a.I4)(() => {
                m(''), d(s.MT.PasscodeNewPasscode)
              }, [d, m]),
              E = (0, a.I4)(
                (e) => {
                  m(e), d(s.MT.PasscodeNewPasscodeConfirm)
                },
                [d, m]
              ),
              C = (0, a.I4)(() => {
                h({ passcode: t }), m(''), d(s.MT.PasscodeCongratulations)
              }, [d, m, t, h]),
              b = (0, a.I4)(
                (e) => {
                  m(''),
                    (0, ji.so)(e).then(
                      () => {
                        d(s.MT.PasscodeChangePasscodeNew)
                      },
                      () => {
                        Z({ error: g('PasscodeController.Error.Current') })
                      }
                    )
                },
                [g, d, m, Z]
              ),
              f = (0, a.I4)(
                (e) => {
                  m(e), d(s.MT.PasscodeChangePasscodeConfirm)
                },
                [d, m]
              ),
              I = (0, a.I4)(
                (e) => {
                  ;(0, ji.so)(e).then(
                    () => {
                      P(), d(s.MT.Privacy)
                    },
                    () => {
                      Z({ error: g('PasscodeController.Error.Current') })
                    }
                  )
                },
                [P, g, d, Z]
              )
            switch (n) {
              case s.MT.PasscodeDisabled:
                return a.ZP.createElement(Gi, {
                  onStart: p,
                  isActive:
                    l ||
                    [
                      s.MT.PasscodeNewPasscode,
                      s.MT.PasscodeNewPasscodeConfirm,
                      s.MT.PasscodeCongratulations,
                    ].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeNewPasscode:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  placeholder: g('EnterNewPasscode'),
                  submitLabel: g('Continue'),
                  onSubmit: E,
                  isActive:
                    l ||
                    [s.MT.PasscodeNewPasscodeConfirm, s.MT.PasscodeCongratulations].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeNewPasscodeConfirm:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  expectedPassword: t,
                  placeholder: g('ReEnterYourPasscode'),
                  submitLabel: g('Continue'),
                  isLoading: c,
                  onSubmit: C,
                  isActive: l || [s.MT.PasscodeCongratulations].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeCongratulations:
                return a.ZP.createElement(zi, { isActive: l, onReset: u })
              case s.MT.PasscodeEnabled:
                return a.ZP.createElement(Vi, {
                  onScreenSelect: d,
                  isActive:
                    l ||
                    [
                      s.MT.PasscodeChangePasscodeCurrent,
                      s.MT.PasscodeChangePasscodeNew,
                      s.MT.PasscodeChangePasscodeConfirm,
                      s.MT.PasscodeCongratulations,
                      s.MT.PasscodeTurnOff,
                    ].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeChangePasscodeCurrent:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  error: r,
                  clearError: v,
                  placeholder: g('PasscodeController.Current.Placeholder'),
                  onSubmit: b,
                  isActive:
                    l ||
                    [
                      s.MT.PasscodeChangePasscodeNew,
                      s.MT.PasscodeChangePasscodeConfirm,
                      s.MT.PasscodeCongratulations,
                    ].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeChangePasscodeNew:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  placeholder: g('PleaseEnterNewFirstPassword'),
                  onSubmit: f,
                  isActive:
                    l ||
                    [s.MT.PasscodeChangePasscodeConfirm, s.MT.PasscodeCongratulations].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeChangePasscodeConfirm:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  expectedPassword: t,
                  placeholder: g('PasscodeController.ReEnterPasscode.Placeholder'),
                  isLoading: c,
                  onSubmit: C,
                  isActive: l || [s.MT.PasscodeCongratulations].includes(o),
                  onReset: u,
                })
              case s.MT.PasscodeTurnOff:
                return a.ZP.createElement(Ai, {
                  shouldDisablePasswordManager: !0,
                  error: r ? g(r) : void 0,
                  clearError: v,
                  placeholder: g('PasscodeController.Current.Placeholder'),
                  onSubmit: I,
                  isActive: l,
                  onReset: u,
                })
              default:
                return
            }
          })
        ),
        Xi = (0, a.X$)((e) => {
          let { stickerSet: t, noAnimate: n, className: s, observeIntersection: i, onClick: o } = e
          const r = (0, M.Z)(),
            l = t?.stickers?.[0],
            c = (0, a.I4)(() => {
              l && o(l)
            }, [l, o])
          if (t && t.stickers)
            return a.ZP.createElement(
              Je.Z,
              { narrow: !0, className: (0, Q.Z)('StickerSetCard', s), inactive: !l, onClick: c },
              (function () {
                if (t)
                  return t.hasThumbnail || !l
                    ? a.ZP.createElement(
                        $.Z,
                        { ariaLabel: t.title, color: 'translucent', isRtl: r.isRtl },
                        a.ZP.createElement(Qn, {
                          stickerSet: t,
                          size: m.Mwe,
                          noAnimate: n,
                          observeIntersection: i,
                        })
                      )
                    : a.ZP.createElement(Jn.Z, {
                        sticker: l,
                        size: m.Mwe,
                        title: t.title,
                        noAnimate: n,
                        observeIntersection: i,
                        noContextMenu: !0,
                        isCurrentUserPremium: !0,
                        clickArg: void 0,
                      })
              })(),
              a.ZP.createElement(
                'div',
                { className: 'multiline-menu-item' },
                a.ZP.createElement('div', { className: 'title' }, t.title),
                a.ZP.createElement(
                  'div',
                  { className: 'subtitle' },
                  r('StickerPack.StickerCount', t.count, 'i')
                )
              )
            )
        }),
        Ji = 1.5 * u.Gw,
        qi = (0, a.X$)(
          (0, i.c$)((e) => ({
            ...(0, $e.ei)(e.settings.byKey, ['shouldSuggestStickers', 'shouldLoopStickers']),
            addedSetIds: e.stickers.added.setIds,
            customEmojiSetIds: e.customEmojis.added.setIds,
            stickerSetsById: e.stickers.setsById,
            defaultReaction: e.config?.defaultReaction,
            availableReactions: e.availableReactions,
          }))((e) => {
            let {
              isActive: t,
              addedSetIds: n,
              customEmojiSetIds: o,
              stickerSetsById: r,
              defaultReaction: l,
              shouldSuggestStickers: c,
              shouldLoopStickers: d,
              availableReactions: m,
              onReset: u,
              onScreenSelect: h,
            } = e
            const { setSettingOption: P, openStickerSet: Z } = (0, i.Sv)(),
              v = (0, M.Z)(),
              g = (0, a.sO)(null),
              { observe: p } = (0, Hn.S1)({ rootRef: g }),
              E = (0, a.I4)(
                (e) => {
                  Z({ stickerSetInfo: e.stickerSetInfo })
                },
                [Z]
              ),
              C = (0, a.I4)(
                (e) => {
                  P({ shouldSuggestStickers: e })
                },
                [P]
              ),
              b = (0, a.I4)(
                (e) => {
                  P({ shouldLoopStickers: e })
                },
                [P]
              ),
              f = (0, a.Ye)(() => n && Object.values((0, $e.ei)(r, n)), [n, r])
            return (
              (0, oe.Z)({ isActive: t, onBack: u }),
              a.ZP.createElement(
                'div',
                { className: 'settings-content custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(ht.Z, { label: v('SuggestStickers'), checked: c, onCheck: C }),
                  a.ZP.createElement(ht.Z, {
                    label: v('LoopAnimatedStickers'),
                    checked: d,
                    onCheck: b,
                  }),
                  a.ZP.createElement(
                    Je.Z,
                    { className: 'mt-4', onClick: () => h(s.MT.CustomEmoji), icon: 'smile' },
                    v('StickersList.EmojiItem'),
                    o &&
                      a.ZP.createElement(
                        'span',
                        { className: 'settings-item__current-value' },
                        o.length
                      )
                  ),
                  l &&
                    a.ZP.createElement(
                      Je.Z,
                      {
                        className: 'SettingsDefaultReaction',
                        onClick: () => h(s.MT.QuickReaction),
                      },
                      a.ZP.createElement(ha.Z, {
                        reaction: l,
                        className: 'current-default-reaction',
                        size: Ji,
                        availableReactions: m,
                      }),
                      a.ZP.createElement('div', { className: 'title' }, v('DoubleTapSetting'))
                    )
                ),
                f &&
                  a.ZP.createElement(
                    'div',
                    { className: 'settings-item' },
                    a.ZP.createElement(
                      'h4',
                      { className: 'settings-item-header', dir: v.isRtl ? 'rtl' : void 0 },
                      v('ChooseStickerMyStickerSets')
                    ),
                    a.ZP.createElement(
                      'div',
                      { ref: g },
                      f.map((e) =>
                        a.ZP.createElement(Xi, {
                          key: e.id,
                          stickerSet: e,
                          observeIntersection: p,
                          onClick: E,
                        })
                      )
                    ),
                    a.ZP.createElement(
                      'p',
                      { className: 'settings-item-description mt-3', dir: 'auto' },
                      (0, X.Z)(v('StickersBotInfo'), ['links'])
                    )
                  )
              )
            )
          })
        ),
        Yi = (0, a.X$)(
          (0, i.c$)((e) => ({
            ...(0, $e.ei)(e.settings.byKey, ['shouldSuggestCustomEmoji']),
            customEmojiSetIds: e.customEmojis.added.setIds,
            stickerSetsById: e.stickers.setsById,
          }))((e) => {
            let {
              isActive: t,
              customEmojiSetIds: n,
              stickerSetsById: s,
              shouldSuggestCustomEmoji: o,
              onReset: r,
            } = e
            const { openStickerSet: l, setSettingOption: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              m = (0, a.sO)(null),
              { observe: u } = (0, Hn.S1)({ rootRef: m })
            ;(0, oe.Z)({ isActive: t, onBack: r })
            const h = (0, a.I4)(
                (e) => {
                  l({ stickerSetInfo: e.stickerSetInfo })
                },
                [l]
              ),
              P = (0, a.I4)(
                (e) => {
                  c({ shouldSuggestCustomEmoji: e })
                },
                [c]
              ),
              Z = (0, a.Ye)(() => n && Object.values((0, $e.ei)(s, n)), [n, s])
            return a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              Z &&
                a.ZP.createElement(
                  'div',
                  { className: 'settings-item' },
                  a.ZP.createElement(ht.Z, {
                    label: d('SuggestAnimatedEmoji'),
                    checked: o,
                    onCheck: P,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: 'mt-4', ref: m },
                    Z.map((e) =>
                      a.ZP.createElement(Xi, {
                        key: e.id,
                        stickerSet: e,
                        observeIntersection: u,
                        onClick: h,
                      })
                    )
                  ),
                  a.ZP.createElement(
                    'p',
                    { className: 'settings-item-description mt-3', dir: 'auto' },
                    (0, X.Z)(d('EmojiBotInfo'), ['links'])
                  )
                )
            )
          })
        )
      var Ki = n(274)
      const Wi = [
          'af',
          'als',
          'am',
          'an',
          'ar',
          'arz',
          'as',
          'ast',
          'av',
          'az',
          'azb',
          'ba',
          'bar',
          'bcl',
          'be',
          'bg',
          'bh',
          'bn',
          'bo',
          'bpy',
          'br',
          'bs',
          'bxr',
          'ca',
          'cbk',
          'ce',
          'ceb',
          'ckb',
          'co',
          'cs',
          'cv',
          'cy',
          'da',
          'de',
          'diq',
          'dsb',
          'dty',
          'dv',
          'el',
          'eml',
          'en',
          'eo',
          'es',
          'et',
          'eu',
          'fa',
          'fi',
          'fr',
          'frr',
          'fy',
          'ga',
          'gd',
          'gl',
          'gn',
          'gom',
          'gu',
          'gv',
          'he',
          'hi',
          'hif',
          'hr',
          'hsb',
          'ht',
          'hu',
          'hy',
          'ia',
          'id',
          'ie',
          'ilo',
          'io',
          'is',
          'it',
          'ja',
          'jbo',
          'jv',
          'ka',
          'kk',
          'km',
          'kn',
          'ko',
          'krc',
          'ku',
          'kv',
          'kw',
          'ky',
          'la',
          'lb',
          'lez',
          'li',
          'lmo',
          'lo',
          'lrc',
          'lt',
          'lv',
          'mai',
          'mg',
          'mhr',
          'min',
          'mk',
          'ml',
          'mn',
          'mr',
          'mrj',
          'ms',
          'mt',
          'mwl',
          'my',
          'myv',
          'mzn',
          'nah',
          'nap',
          'nds',
          'ne',
          'new',
          'nl',
          'nn',
          'no',
          'oc',
          'or',
          'os',
          'pa',
          'pam',
          'pfl',
          'pl',
          'pms',
          'pnb',
          'ps',
          'pt',
          'qu',
          'rm',
          'ro',
          'ru',
          'rue',
          'sa',
          'sah',
          'sc',
          'scn',
          'sco',
          'sd',
          'sh',
          'si',
          'sk',
          'sl',
          'so',
          'sq',
          'sr',
          'su',
          'sv',
          'sw',
          'ta',
          'te',
          'tg',
          'th',
          'tk',
          'tl',
          'tr',
          'tt',
          'tyv',
          'ug',
          'uk',
          'ur',
          'uz',
          'vec',
          'vep',
          'vi',
          'vls',
          'vo',
          'wa',
          'war',
          'wuu',
          'xal',
          'xmf',
          'yi',
          'yo',
          'yue',
          'zh',
        ],
        Qi = m.D$f.filter((e) => Wi.includes(e)),
        eo = (0, a.X$)(
          (0, i.c$)((e) => {
            const { language: t, doNotTranslate: n } = e.settings.byKey
            return { language: t, doNotTranslate: n }
          })((e) => {
            let { isActive: t, language: n, doNotTranslate: s, onReset: o } = e
            const { setSettingOption: r } = (0, i.Sv)(),
              l = (0, M.Z)(),
              [c, d] = (0, a.eJ)([]),
              [m, u] = (0, a.eJ)(''),
              h = (0, a.Ye)(
                () =>
                  Qi.map((e) => ({
                    langCode: e,
                    translatedName: new Intl.DisplayNames([n], { type: 'language' }).of(e),
                    originalName: new Intl.DisplayNames([e], { type: 'language' }).of(e),
                  })).map((e) => {
                    let { langCode: t, translatedName: n, originalName: a } = e
                    return { label: n, subLabel: a, value: t }
                  }),
                [n]
              )
            ;(0, a.d4)(() => {
              t || u('')
            }, [t]),
              (0, Ki.Z)(
                (e) => {
                  let [a] = e
                  if (a === t) return
                  if (t && c.length) return
                  const i = h.find((e) => e.value === n),
                    o = h.filter((e) => e.value !== n),
                    [r, l] = (0, $e.uK)(o, (e) => s.includes(e.value))
                  d([i, ...r, ...l])
                },
                [t, s, c.length, n, h]
              )
            const P = (0, a.I4)(
                (e) => {
                  const { value: t, checked: n } = e.currentTarget
                  let a
                  ;(a = n ? (0, $e.Tw)([...s, t]) : s.filter((e) => e !== t)),
                    r({ doNotTranslate: a })
                },
                [s, r]
              ),
              Z = (0, a.I4)((e) => {
                u(e.target.value)
              }, []),
              v = (0, a.Ye)(
                () =>
                  m.trim()
                    ? c.filter(
                        (e) =>
                          e.label.toLowerCase().includes(m.toLowerCase()) ||
                          e.subLabel?.toLowerCase().includes(m.toLowerCase()) ||
                          e.value.toLowerCase().includes(m.toLowerCase())
                      )
                    : c,
                [c, m]
              )
            return (
              (0, oe.Z)({ isActive: t, onBack: o }),
              a.ZP.createElement(
                'div',
                { className: (0, Q.Z)('obOZMv8VwZgTltdIBhFA', 'settings-content custom-scroll') },
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)('lDWs17bpqtGWDX0EJr0y', 'settings-item') },
                  a.ZP.createElement(He.Z, {
                    key: 'search',
                    value: m,
                    onChange: Z,
                    placeholder: l('Search'),
                    teactExperimentControlled: !0,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)('whcbPSSJLGdGCaY66qfR', 'radio-group custom-scroll') },
                    v.map((e) =>
                      a.ZP.createElement(ht.Z, {
                        className: 'BShBwPkgjleuDsjyfnNk',
                        label: e.label,
                        subLabel: e.subLabel,
                        checked: s.includes(e.value),
                        value: e.value,
                        key: e.value,
                        onChange: P,
                      })
                    )
                  )
                )
              )
            )
          })
        ),
        to = (0, a.X$)((e) => {
          let { isActive: t, onReset: n } = e
          const { requestConfetti: s } = (0, i.Sv)(),
            o = (0, M.Z)()
          return (
            (0, oe.Z)({ isActive: t, onBack: n }),
            a.ZP.createElement(
              'div',
              { className: 'settings-content custom-scroll' },
              a.ZP.createElement(
                'div',
                { className: 'settings-content-header no-border' },
                a.ZP.createElement(Ts.Z, {
                  tgsUrl: ws.l.Experimental,
                  size: 200,
                  className: 'experimental-duck',
                  nonInteractive: !0,
                  noLoop: !1,
                }),
                a.ZP.createElement(
                  'p',
                  { className: 'settings-item-description', dir: 'auto' },
                  o('lng_settings_experimental_about')
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'settings-item' },
                a.ZP.createElement(
                  Je.Z,
                  { onClick: () => s(), icon: 'animations' },
                  a.ZP.createElement('div', { className: 'title' }, 'Launch some confetti!')
                )
              )
            )
          )
        }),
        no = Object.keys(s.MT).length / 2,
        ao = [
          s.MT.TwoFaDisabled,
          s.MT.TwoFaNewPassword,
          s.MT.TwoFaNewPasswordConfirm,
          s.MT.TwoFaNewPasswordHint,
          s.MT.TwoFaNewPasswordEmail,
          s.MT.TwoFaNewPasswordEmailCode,
          s.MT.TwoFaCongratulations,
          s.MT.TwoFaEnabled,
          s.MT.TwoFaChangePasswordCurrent,
          s.MT.TwoFaChangePasswordNew,
          s.MT.TwoFaChangePasswordConfirm,
          s.MT.TwoFaChangePasswordHint,
          s.MT.TwoFaTurnOff,
          s.MT.TwoFaRecoveryEmailCurrentPassword,
          s.MT.TwoFaRecoveryEmail,
          s.MT.TwoFaRecoveryEmailCode,
        ],
        so = [s.MT.PasscodeDisabled, s.MT.PasscodeEnabled],
        io = [
          s.MT.Folders,
          s.MT.FoldersCreateFolder,
          s.MT.FoldersEditFolder,
          s.MT.FoldersEditFolderFromChatList,
          s.MT.FoldersIncludedChats,
          s.MT.FoldersIncludedChatsFromChatList,
          s.MT.FoldersExcludedChats,
          s.MT.FoldersExcludedChatsFromChatList,
        ],
        oo = [s.MT.PrivacyBlockedUsers, s.MT.ActiveWebsites],
        ro = [s.MT.PrivacyPhoneNumberAllowedContacts, s.MT.PrivacyPhoneNumberDeniedContacts],
        lo = [s.MT.PrivacyLastSeenAllowedContacts, s.MT.PrivacyLastSeenDeniedContacts],
        co = [s.MT.PrivacyProfilePhotoAllowedContacts, s.MT.PrivacyProfilePhotoDeniedContacts],
        mo = [s.MT.PrivacyPhoneCallAllowedContacts, s.MT.PrivacyPhoneCallDeniedContacts],
        uo = [s.MT.PrivacyPhoneP2PAllowedContacts, s.MT.PrivacyPhoneP2PDeniedContacts],
        ho = [s.MT.PrivacyForwardingAllowedContacts, s.MT.PrivacyForwardingDeniedContacts],
        Po = [s.MT.PrivacyVoiceMessagesAllowedContacts, s.MT.PrivacyVoiceMessagesDeniedContacts],
        Zo = [s.MT.PrivacyGroupChatsAllowedContacts, s.MT.PrivacyGroupChatsDeniedContacts],
        vo = (0, a.X$)((e) => {
          let {
            isActive: t,
            currentScreen: n,
            foldersState: i,
            foldersDispatch: o,
            onScreenSelect: r,
            onReset: l,
            shouldSkipTransition: c,
          } = e
          const [m, u] = (0, as.Z)(is, ss),
            [h, P] = (0, a.eJ)(''),
            Z = (0, a.I4)(
              (e) => {
                !0 !== e
                  ? ((n !== s.MT.FoldersCreateFolder &&
                      n !== s.MT.FoldersEditFolder &&
                      n !== s.MT.FoldersEditFolderFromChatList) ||
                      setTimeout(() => {
                        o({ type: 'reset' })
                      }, 200),
                    n !== s.MT.FoldersIncludedChats && n !== s.MT.FoldersExcludedChats
                      ? l()
                      : 'create' === i.mode
                      ? r(s.MT.FoldersCreateFolder)
                      : r(s.MT.FoldersEditFolder))
                  : l(!0)
              },
              [i.mode, o, n, l, r]
            ),
            v = (0, a.I4)(() => {
              o({ type: 'saveFilters' }), Z()
            }, [o, Z])
          function g(e, l, c) {
            return a.ZP.createElement(
              a.ZP.Fragment,
              null,
              a.ZP.createElement(os, {
                currentScreen: n,
                onReset: Z,
                onSaveFilter: v,
                onScreenSelect: r,
                editedFolderId: i.folderId,
              }),
              (function (e, l) {
                const c = {
                    [s.MT.PrivacyPhoneNumber]: ro.includes(l),
                    [s.MT.PrivacyLastSeen]: lo.includes(l),
                    [s.MT.PrivacyProfilePhoto]: co.includes(l),
                    [s.MT.PrivacyPhoneCall]: mo.includes(l),
                    [s.MT.PrivacyPhoneP2P]: uo.includes(l),
                    [s.MT.PrivacyForwarding]: ho.includes(l),
                    [s.MT.PrivacyVoiceMessages]: Po.includes(l),
                    [s.MT.PrivacyGroupChats]: Zo.includes(l),
                  },
                  d = ao.includes(l),
                  v = so.includes(l),
                  g = io.includes(l),
                  p =
                    oo.includes(l) ||
                    d ||
                    v ||
                    Object.keys(c).includes(l.toString()) ||
                    Object.values(c).find((e) => !0 === e)
                switch (n) {
                  case s.MT.Main:
                    return a.ZP.createElement(ds, { onScreenSelect: r, isActive: t, onReset: Z })
                  case s.MT.EditProfile:
                    return a.ZP.createElement(ks, { isActive: t && e, onReset: Z })
                  case s.MT.General:
                    return a.ZP.createElement(Hs, {
                      onScreenSelect: r,
                      isActive:
                        e ||
                        l === s.MT.GeneralChatBackgroundColor ||
                        l === s.MT.GeneralChatBackground ||
                        l === s.MT.QuickReaction ||
                        l === s.MT.CustomEmoji ||
                        p ||
                        g,
                      onReset: Z,
                    })
                  case s.MT.QuickReaction:
                    return a.ZP.createElement($i, { isActive: e, onReset: Z })
                  case s.MT.CustomEmoji:
                    return a.ZP.createElement(Yi, { isActive: e, onReset: Z })
                  case s.MT.Notifications:
                    return a.ZP.createElement(oi, { isActive: e, onReset: Z })
                  case s.MT.DataStorage:
                    return a.ZP.createElement(Ns, { isActive: e, onReset: Z })
                  case s.MT.Privacy:
                    return a.ZP.createElement(ri, {
                      onScreenSelect: r,
                      isActive: e || p,
                      onReset: Z,
                    })
                  case s.MT.Language:
                    return a.ZP.createElement(li, {
                      isActive: e || l === s.MT.DoNotTranslate,
                      onReset: Z,
                      onScreenSelect: r,
                    })
                  case s.MT.DoNotTranslate:
                    return a.ZP.createElement(eo, { isActive: e, onReset: Z })
                  case s.MT.Stickers:
                    return a.ZP.createElement(qi, { isActive: e, onReset: Z, onScreenSelect: r })
                  case s.MT.Experimental:
                    return a.ZP.createElement(to, { isActive: e, onReset: Z })
                  case s.MT.GeneralChatBackground:
                    return a.ZP.createElement(Ws, {
                      onScreenSelect: r,
                      isActive: e || l === s.MT.GeneralChatBackgroundColor,
                      onReset: Z,
                    })
                  case s.MT.GeneralChatBackgroundColor:
                    return a.ZP.createElement(ai, { isActive: e, onReset: Z })
                  case s.MT.ActiveSessions:
                    return a.ZP.createElement(Ei, { isActive: e, onReset: Z })
                  case s.MT.ActiveWebsites:
                    return a.ZP.createElement(Ii, { isActive: e, onReset: Z })
                  case s.MT.PrivacyBlockedUsers:
                    return a.ZP.createElement(Si, { isActive: e, onReset: Z })
                  case s.MT.PrivacyPhoneNumber:
                  case s.MT.PrivacyLastSeen:
                  case s.MT.PrivacyProfilePhoto:
                  case s.MT.PrivacyPhoneCall:
                  case s.MT.PrivacyPhoneP2P:
                  case s.MT.PrivacyForwarding:
                  case s.MT.PrivacyVoiceMessages:
                  case s.MT.PrivacyGroupChats:
                    return a.ZP.createElement(hi, {
                      screen: n,
                      onScreenSelect: r,
                      isActive: e || c[n],
                      onReset: Z,
                    })
                  case s.MT.PrivacyPhoneNumberAllowedContacts:
                  case s.MT.PrivacyLastSeenAllowedContacts:
                  case s.MT.PrivacyProfilePhotoAllowedContacts:
                  case s.MT.PrivacyPhoneCallAllowedContacts:
                  case s.MT.PrivacyPhoneP2PAllowedContacts:
                  case s.MT.PrivacyForwardingAllowedContacts:
                  case s.MT.PrivacyVoiceMessagesAllowedContacts:
                  case s.MT.PrivacyGroupChatsAllowedContacts:
                    return a.ZP.createElement(_i, {
                      isAllowList: !0,
                      screen: n,
                      onScreenSelect: r,
                      isActive: e || c[n],
                      onReset: Z,
                    })
                  case s.MT.PrivacyPhoneNumberDeniedContacts:
                  case s.MT.PrivacyLastSeenDeniedContacts:
                  case s.MT.PrivacyProfilePhotoDeniedContacts:
                  case s.MT.PrivacyPhoneCallDeniedContacts:
                  case s.MT.PrivacyPhoneP2PDeniedContacts:
                  case s.MT.PrivacyForwardingDeniedContacts:
                  case s.MT.PrivacyVoiceMessagesDeniedContacts:
                  case s.MT.PrivacyGroupChatsDeniedContacts:
                    return a.ZP.createElement(_i, {
                      screen: n,
                      onScreenSelect: r,
                      isActive: e,
                      onReset: Z,
                    })
                  case s.MT.Folders:
                  case s.MT.FoldersCreateFolder:
                  case s.MT.FoldersEditFolder:
                  case s.MT.FoldersEditFolderFromChatList:
                  case s.MT.FoldersIncludedChats:
                  case s.MT.FoldersIncludedChatsFromChatList:
                  case s.MT.FoldersExcludedChats:
                  case s.MT.FoldersExcludedChatsFromChatList:
                    return a.ZP.createElement(_s, {
                      currentScreen: n,
                      shownScreen: l,
                      state: i,
                      dispatch: o,
                      isActive: e,
                      onScreenSelect: r,
                      onReset: Z,
                    })
                  case s.MT.TwoFaDisabled:
                  case s.MT.TwoFaNewPassword:
                  case s.MT.TwoFaNewPasswordConfirm:
                  case s.MT.TwoFaNewPasswordHint:
                  case s.MT.TwoFaNewPasswordEmail:
                  case s.MT.TwoFaNewPasswordEmailCode:
                  case s.MT.TwoFaCongratulations:
                  case s.MT.TwoFaEnabled:
                  case s.MT.TwoFaChangePasswordCurrent:
                  case s.MT.TwoFaChangePasswordNew:
                  case s.MT.TwoFaChangePasswordConfirm:
                  case s.MT.TwoFaChangePasswordHint:
                  case s.MT.TwoFaTurnOff:
                  case s.MT.TwoFaRecoveryEmailCurrentPassword:
                  case s.MT.TwoFaRecoveryEmail:
                  case s.MT.TwoFaRecoveryEmailCode:
                    return a.ZP.createElement(Di, {
                      currentScreen: n,
                      state: m,
                      dispatch: u,
                      shownScreen: l,
                      isActive: e,
                      onScreenSelect: r,
                      onReset: Z,
                    })
                  case s.MT.PasscodeDisabled:
                  case s.MT.PasscodeNewPasscode:
                  case s.MT.PasscodeNewPasscodeConfirm:
                  case s.MT.PasscodeChangePasscodeCurrent:
                  case s.MT.PasscodeChangePasscodeNew:
                  case s.MT.PasscodeChangePasscodeConfirm:
                  case s.MT.PasscodeCongratulations:
                  case s.MT.PasscodeEnabled:
                  case s.MT.PasscodeTurnOff:
                    return a.ZP.createElement(Hi, {
                      currentScreen: n,
                      passcode: h,
                      onSetPasscode: P,
                      shownScreen: l,
                      isActive: e,
                      onScreenSelect: r,
                      onReset: Z,
                    })
                  default:
                    return
                }
              })(e, c)
            )
          }
          return a.ZP.createElement(
            G.Z,
            { id: 'Settings', name: c ? 'none' : d.s0, activeKey: n, renderCount: no },
            g
          )
        }),
        go = (0, a.X$)(
          (0, i.c$)((e) => {
            const { userIds: t } = e.contactList || {},
              { byId: n, statusesById: a } = e.users
            return { usersById: n, userStatusesById: a, contactIds: t }
          })((e) => {
            let {
              isActive: t,
              filter: n,
              usersById: s,
              userStatusesById: r,
              contactIds: l,
              onReset: c,
            } = e
            const { openChat: d, openNewContactDialog: m } = (0, i.Sv)(),
              u = (0, M.Z)(),
              { isMobile: h } = (0, U.ZP)()
            ;(0, oe.Z)({ isActive: t, onBack: c })
            const P = (0, a.I4)(
                (e) => {
                  d({ id: e, shouldReplaceHistory: !0 })
                },
                [d]
              ),
              Z = (0, a.Ye)(() => {
                if (!l) return
                const e = (0, o.kK)(l, s, n)
                return (0, o.Z0)(e, s, r)
              }, [l, n, s, r]),
              [v, g] = (0, je.Z)(void 0, Z, Boolean(n))
            return a.ZP.createElement(
              Xe.Z,
              { items: v, onLoadMore: g, className: 'chat-list custom-scroll' },
              v?.length
                ? v.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      { key: e, className: 'chat-item-clickable', onClick: () => P(e), ripple: !h },
                      a.ZP.createElement(Ye.Z, {
                        userId: e,
                        forceShowSelf: !0,
                        avatarSize: 'large',
                      })
                    )
                  )
                : v && !v.length
                ? a.ZP.createElement(
                    'p',
                    { className: 'no-results', key: 'no-results', dir: 'auto' },
                    n.length ? 'No contacts matched your search.' : 'Contact list is empty.'
                  )
                : a.ZP.createElement(ze.Z, { key: 'loading' }),
              a.ZP.createElement(
                us.Z,
                {
                  key: 'create-new-contact',
                  isShown: !0,
                  onClick: m,
                  ariaLabel: u('CreateNewContact'),
                },
                a.ZP.createElement('i', { className: 'icon-add-user-filled' })
              )
            )
          })
        ),
        po = (0, a.X$)(
          (0, i.c$)((e) => {
            const { userIds: t } = e.contactList || {},
              { byId: n } = e.chats,
              {
                query: a,
                fetchingStatus: s,
                globalResults: i,
                localResults: o,
              } = (0, r.jU)(e).globalSearch,
              { userIds: l } = i || {},
              { userIds: c } = o || {}
            return {
              chatsById: n,
              localContactIds: t,
              searchQuery: a,
              isSearching: s?.chats,
              globalUserIds: l,
              localUserIds: c,
            }
          })((e) => {
            let {
              isChannel: t,
              isActive: n,
              selectedMemberIds: s,
              onSelectedMemberIdsChange: r,
              onNextStep: l,
              onReset: c,
              chatsById: d,
              localContactIds: m,
              searchQuery: u,
              isSearching: h,
              localUserIds: P,
              globalUserIds: Z,
            } = e
            const { setGlobalSearchQuery: v } = (0, i.Sv)(),
              g = (0, M.Z)()
            ;(0, oe.Z)({ isActive: n, onBack: c })
            const p = (0, a.I4)(
                (e) => {
                  v({ query: e })
                },
                [v]
              ),
              E = (0, a.Ye)(() => {
                const e = (0, i.Rd)().users.byId,
                  t = m ? (0, o.kK)(m, e, u) : []
                return (0, o.ih)(
                  (0, $e.Tw)([...t, ...(P || []), ...(Z || [])]).filter((t) => {
                    const n = e[t]
                    return !n || (!n.isSelf && (n.canBeInvitedToGroup || !(0, o.cS)(n)))
                  }),
                  d,
                  !1,
                  s
                )
              }, [m, d, u, P, Z, s]),
              C = (0, a.I4)(() => {
                ;(s.length || t) && (v({ query: '' }), l())
              }, [s.length, t, v, l])
            return a.ZP.createElement(
              'div',
              { className: 'NewChat step-1' },
              a.ZP.createElement(
                'div',
                { className: 'left-header' },
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    onClick: c,
                    ariaLabel: 'Return to Chat List',
                  },
                  a.ZP.createElement('i', { className: 'icon-arrow-left' })
                ),
                a.ZP.createElement('h3', null, g('GroupAddMembers'))
              ),
              a.ZP.createElement(
                'div',
                { className: 'NewChat-inner step-1' },
                a.ZP.createElement(Oi.Z, {
                  itemIds: E,
                  selectedIds: s,
                  filterValue: u,
                  filterPlaceholder: g('SendMessageTo'),
                  searchInputId: 'new-group-picker-search',
                  isLoading: h,
                  onSelectedIdsChange: r,
                  onFilterChange: p,
                }),
                a.ZP.createElement(
                  us.Z,
                  {
                    isShown: Boolean(s.length || t),
                    onClick: C,
                    ariaLabel: t ? 'Continue To Channel Info' : 'Continue To Group Info',
                  },
                  a.ZP.createElement('i', { className: 'icon-arrow-right' })
                )
              )
            )
          })
        ),
        Eo = (0, a.X$)(
          (0, i.c$)((e) => {
            const { progress: t, error: n } = (0, r.jU)(e).chatCreation || {}
            return { creationProgress: t, creationError: n, maxGroupSize: e.config?.maxGroupSize }
          })((e) => {
            let {
              isChannel: t,
              isActive: n,
              memberIds: o,
              maxGroupSize: r,
              creationProgress: l,
              creationError: c,
              onReset: d,
            } = e
            const { createGroupChat: m, createChannel: u } = (0, i.Sv)(),
              h = (0, M.Z)()
            ;(0, oe.Z)({ isActive: n, onBack: d })
            const [P, Z] = (0, a.eJ)(''),
              [v, g] = (0, a.eJ)(''),
              [p, E] = (0, a.eJ)(),
              [C, b] = (0, a.eJ)(),
              f = "Chat title can't be empty",
              I = "Channel title can't be empty",
              y = l === s.Nh.InProgress,
              S = (0, a.I4)((e) => {
                const { value: t } = e.currentTarget,
                  n = t.replace(/^\s+/, '')
                Z(n), n !== t && (e.currentTarget.value = n)
              }, []),
              k = (0, a.I4)((e) => {
                g(e.currentTarget.value)
              }, []),
              N = (0, a.I4)(() => {
                P.length
                  ? r && o.length >= r
                    ? b('Sorry, creating supergroups is not yet supported')
                    : m({ title: P, photo: p, memberIds: o })
                  : b(f)
              }, [P, o, r, m, p]),
              w = (0, a.I4)(() => {
                P.length ? u({ title: P, about: v, photo: p, memberIds: o }) : b(I)
              }, [P, u, v, p, o, I])
            ;(0, a.d4)(() => {
              l === s.Nh.Complete && d(!0)
            }, [l, d])
            const T = (c && h(c)) || (C !== f && C !== I ? C : void 0)
            return a.ZP.createElement(
              'div',
              { className: 'NewChat' },
              a.ZP.createElement(
                'div',
                { className: 'left-header' },
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    onClick: () => d(),
                    ariaLabel: 'Return to member selection',
                  },
                  a.ZP.createElement('i', { className: 'icon-arrow-left' })
                ),
                a.ZP.createElement('h3', null, h(t ? 'NewChannel' : 'NewGroup'))
              ),
              a.ZP.createElement(
                'div',
                { className: 'NewChat-inner step-2' },
                a.ZP.createElement(ms.Z, { onChange: E, title: h('AddPhoto') }),
                a.ZP.createElement(He.Z, {
                  value: P,
                  onChange: S,
                  label: h(t ? 'EnterChannelName' : 'GroupName'),
                  error: C === f || C === I ? C : void 0,
                }),
                t &&
                  a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(He.Z, {
                      value: v,
                      onChange: k,
                      label: h('DescriptionOptionalPlaceholder'),
                    }),
                    a.ZP.createElement('p', { className: 'note' }, h('DescriptionInfo'))
                  ),
                T && a.ZP.createElement('p', { className: 'error' }, T),
                o.length > 0 &&
                  a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(
                      'h3',
                      { className: 'chat-members-heading' },
                      h('GroupInfo.ParticipantCount', o.length, 'i')
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'chat-members-list custom-scroll' },
                      o.map((e) =>
                        a.ZP.createElement(
                          Je.Z,
                          { inactive: !0, className: 'chat-item-clickable' },
                          a.ZP.createElement(Ye.Z, { userId: e })
                        )
                      )
                    )
                  )
              ),
              a.ZP.createElement(
                us.Z,
                {
                  isShown: 0 !== P.length,
                  onClick: t ? w : N,
                  disabled: y,
                  ariaLabel: t ? h('ChannelIntro.CreateChannel') : 'Create Group',
                },
                y
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-arrow-right' })
              )
            )
          })
        ),
        Co = Object.keys(s.du).length / 2,
        bo = (0, a.X$)((e) => {
          let { isActive: t, isChannel: n = !1, content: i, onContentChange: o, onReset: r } = e
          const [l, c] = (0, a.eJ)([]),
            m = (0, a.I4)(() => {
              o(n ? s.du.NewChannelStep2 : s.du.NewGroupStep2)
            }, [n, o])
          return a.ZP.createElement(
            G.Z,
            { id: 'NewChat', name: d.s0, renderCount: Co, activeKey: i },
            (e) => {
              switch (i) {
                case s.du.NewChannelStep1:
                case s.du.NewGroupStep1:
                  return a.ZP.createElement(po, {
                    isChannel: n,
                    isActive: t,
                    selectedMemberIds: l,
                    onSelectedMemberIdsChange: c,
                    onNextStep: m,
                    onReset: r,
                  })
                case s.du.NewChannelStep2:
                case s.du.NewGroupStep2:
                  return a.ZP.createElement(Eo, {
                    isChannel: n,
                    isActive: e && t,
                    memberIds: l,
                    onReset: r,
                  })
                default:
                  return
              }
            }
          )
        })
      var fo = n(73217),
        Io = n(54416),
        yo = n(46915),
        So = n(59690)
      const ko = (0, a.X$)((e) => {
        let {
          isActive: t,
          isForumPanelOpen: n,
          archiveSettings: s,
          onReset: o,
          onTopicSearch: r,
          onSettingsScreenSelect: l,
          onLeftColumnContentChange: c,
          foldersDispatch: d,
        } = e
        const { updateArchiveSettings: m } = (0, i.Sv)(),
          u = (0, M.Z)()
        ;(0, oe.Z)({ isActive: t, onBack: o })
        const h = (0, a.I4)(() => {
            m({ isHidden: !1 })
          }, [m]),
          { shouldDisableDropdownMenuTransitionRef: P, handleDropdownMenuTransitionEnd: Z } = (0,
          fo.Z)(n),
          { shouldRender: v, transitionClassNames: g } = (0, ue.Z)(!n),
          { shouldRenderForumPanel: p, handleForumPanelAnimationEnd: E } = (0, Io.Z)(n)
        return a.ZP.createElement(
          'div',
          { className: 'ArchivedChats' },
          a.ZP.createElement(
            'div',
            { className: 'left-header' },
            u.isRtl && a.ZP.createElement('div', { className: 'DropdownMenuFiller' }),
            a.ZP.createElement(
              $.Z,
              {
                round: !0,
                size: 'smaller',
                color: 'translucent',
                onClick: o,
                ariaLabel: 'Return to chat list',
                className: (0, Q.Z)(
                  u.isRtl && 'rtl',
                  n && u.isRtl && 'right-aligned',
                  P.current && u.isRtl && 'disable-transition'
                ),
                onTransitionEnd: Z,
              },
              a.ZP.createElement('i', { className: 'icon-arrow-left' })
            ),
            v && a.ZP.createElement('h3', { className: g }, u('ArchivedChats')),
            s.isHidden &&
              a.ZP.createElement(
                V.Z,
                {
                  className: 'archived-chats-more-menu',
                  positionX: 'right',
                  onTransitionEnd: u.isRtl ? Z : void 0,
                },
                a.ZP.createElement(
                  z.Z,
                  { icon: 'archive-from-main', onClick: h },
                  u('lng_context_archive_to_list')
                )
              )
          ),
          a.ZP.createElement(yo.Z, {
            folderType: 'archived',
            isActive: t,
            isForumPanelOpen: n,
            onSettingsScreenSelect: l,
            onLeftColumnContentChange: c,
            foldersDispatch: d,
            archiveSettings: s,
          }),
          p && a.ZP.createElement(So.Z, { isOpen: n, onTopicSearch: r, onCloseAnimationEnd: E })
        )
      })
      var No = n(51218)
      const wo = (0, a.X$)(
        (0, i.c$)((e) => {
          const { byId: t, orderedIds: n } = e.chatFolders
          return { foldersById: t, folderOrderedIds: n }
        })((e) => {
          let {
            isOpen: t,
            chatId: n,
            foldersById: s,
            folderOrderedIds: o,
            onClose: r,
            onCloseAnimationEnd: l,
          } = e
          const { editChatFolders: c } = (0, i.Sv)(),
            d = (0, M.Z)(),
            u = (0, a.Ye)(
              () =>
                s
                  ? Object.keys(s).reduce((e, t) => {
                      const { includedChatIds: a, pinnedChatIds: i } = s[Number(t)]
                      return (a.includes(n) || i?.includes(n)) && e.push(t), e
                    }, [])
                  : [],
              [n, s]
            ),
            [h, P] = (0, a.eJ)(u),
            Z = (0, a.Ye)(
              () =>
                o
                  ?.filter((e) => e !== m.NfV)
                  .map((e) => ({ label: s ? s[e].title : '', value: String(e) })) || [],
              [o, s]
            ),
            v = (0, a.I4)(() => {
              const e = u.filter((e) => !h.includes(e)).map(Number),
                t = h.filter((e) => !u.includes(e)).map(Number)
              c({ chatId: n, idsToRemove: e, idsToAdd: t }), r()
            }, [n, c, u, r, h])
          if (s && o)
            return a.ZP.createElement(
              J.Z,
              {
                isOpen: t,
                onClose: r,
                onCloseAnimationEnd: l,
                onEnter: v,
                className: 'delete',
                title: d('FilterAddTo'),
              },
              a.ZP.createElement(No.Z, { options: Z, selected: h, onChange: P, round: !0 }),
              a.ZP.createElement(
                'div',
                { className: 'dialog-buttons' },
                a.ZP.createElement(
                  $.Z,
                  { color: 'primary', className: 'confirm-dialog-button', isText: !0, onClick: v },
                  d('FilterAddTo')
                ),
                a.ZP.createElement(
                  $.Z,
                  { className: 'confirm-dialog-button', isText: !0, onClick: r },
                  d('Cancel')
                )
              )
            )
        })
      )
      var Mo = n(33057),
        To = n(40647),
        Ao = n(60998)
      function Ro(e) {
        return e ? 'lng_context_copy_selected' : 'lng_context_copy_text'
      }
      let Lo, Fo
      const xo = {
          Down: !0,
          ArrowDown: !0,
          Up: !0,
          ArrowUp: !0,
          Left: !0,
          ArrowLeft: !0,
          Right: !0,
          ArrowRight: !0,
          ' ': !0,
          PageUp: !0,
          PageDown: !0,
          End: !0,
          Home: !0,
          Tab: !0,
        },
        Bo = (e) => ('changedTouches' in e ? e.changedTouches[0].clientY : 0),
        Do = (e) => {
          const t = 'deltaY' in e ? e.deltaY : Bo(e)
          if (
            !Lo ||
            !Lo.contains(e.target) ||
            (Lo.scrollTop <= 0 && t <= 0) ||
            (Lo.scrollTop >= Lo.scrollHeight - Lo.offsetHeight && t >= 0)
          ) {
            if (Fo && e.target.closest(Fo)) return
            e.preventDefault()
          }
        }
      function Oo(e) {
        xo[e.key] &&
          !(function (e) {
            if (!(e && e instanceof HTMLElement)) return !1
            const t = e,
              n = t.tagName.toLowerCase()
            if ('textarea' === n) return !0
            if ('input' !== n) return !1
            const a = t.getAttribute('type')
            return (
              !!a &&
              [
                'text',
                'password',
                'number',
                'email',
                'tel',
                'url',
                'search',
                'date',
                'datetime',
                'datetime-local',
                'time',
                'month',
                'week',
              ].indexOf(a.toLowerCase()) > -1
            )
          })(e.target) &&
          e.preventDefault()
      }
      function Uo(e, t) {
        ;(Lo = e),
          (Fo = t),
          document.addEventListener('wheel', Do, { passive: !1 }),
          document.addEventListener('touchmove', Do, { passive: !1 }),
          (document.onkeydown = Oo)
      }
      function _o() {
        ;(Lo = void 0),
          (Fo = void 0),
          document.removeEventListener('wheel', Do),
          document.removeEventListener('touchmove', Do),
          (document.onkeydown = null)
      }
      var $o = n(63394),
        jo = n(66902),
        Go = n(17921)
      const Vo = d.FW ? 24 : 32,
        zo = (0, Q.y)('ReactionSelectorReaction'),
        Ho = (0, a.X$)((e) => {
          let { reaction: t, previewIndex: n, isReady: s, chosen: i, onToggleReaction: o } = e
          const r = (0, R.Z)(`document${t.selectAnimation?.id}`, !s),
            [l, c, m] = (0, I.Z)(),
            [u, h] = (0, I.Z)(),
            P = !s || !u,
            Z = Boolean(s && r)
          return a.ZP.createElement(
            'div',
            {
              className: zo('&', d.FW && 'compact', i && 'chosen'),
              onClick: function () {
                o(t.reaction)
              },
              onMouseEnter: s ? c : void 0,
            },
            P &&
              a.ZP.createElement('div', {
                className: zo('static'),
                style: `background-position-x: ${n * -Vo}px;`,
              }),
            Z &&
              a.ZP.createElement(Yt.Z, {
                tgsUrl: r,
                play: l,
                noLoop: !0,
                size: Vo,
                onLoad: h,
                onEnded: m,
              })
          )
        }),
        Xo = (0, Q.y)('ReactionSelector'),
        Jo = (0, a.X$)((e) => {
          let {
            availableReactions: t,
            enabledReactions: n,
            currentReactions: s,
            maxUniqueReactions: i,
            isPrivate: r,
            isReady: l,
            onToggleReaction: c,
          } = e
          const m = (0, a.sO)(null)
          ;(0, Xn.Z)(m)
          const u = (e) => {
              ;('deltaY' in e ? e.deltaY : Bo(e)) && e.cancelable && e.preventDefault()
            },
            h = (0, a.Ye)(
              () =>
                t?.map((e) => {
                  if (
                    !e.isInactive &&
                    (r || (n && (0, o.XU)(e.reaction, n))) &&
                    (!(i && s && s.length >= i) ||
                      s.some((t) => {
                        let { reaction: n } = t
                        return (0, o.Hl)(n, e.reaction)
                      }))
                  )
                    return e
                }) || [],
              [t, s, n, r, i]
            ),
            P = (0, a.Ye)(() => {
              const e =
                s?.filter((e) => {
                  let { chosenOrder: t } = e
                  return void 0 !== t
                }) || []
              return new Set(
                e.map((e) => {
                  let { reaction: t } = e
                  return h.findIndex((e) => e && (0, o.Hl)(e.reaction, t))
                })
              )
            }, [s, h])
          if (h.length)
            return a.ZP.createElement(
              'div',
              { className: Xo('&', d.FW && 'compact'), onWheelCapture: u, onTouchMove: u },
              a.ZP.createElement('div', { className: Xo('bubble-big') }),
              a.ZP.createElement('div', { className: Xo('bubble-small') }),
              a.ZP.createElement(
                'div',
                { className: Xo('items-wrapper') },
                a.ZP.createElement(
                  'div',
                  { className: Xo('items', ['no-scrollbar']), ref: m },
                  h.map((e, t) => {
                    if (e)
                      return a.ZP.createElement(Ho, {
                        key: (0, o.$d)(e.reaction),
                        previewIndex: t,
                        isReady: l,
                        onToggleReaction: c,
                        reaction: e,
                        chosen: P.has(t),
                      })
                  })
                )
              )
            )
        }),
        qo = (0, a.X$)((e) => {
          let {
            availableReactions: t,
            isOpen: n,
            message: s,
            isPrivate: r,
            isCurrentUserPremium: l,
            enabledReactions: c,
            maxUniqueReactions: d,
            anchor: m,
            canSendNow: u,
            canReschedule: h,
            canBuyPremium: P,
            canReply: Z,
            canEdit: v,
            noReplies: g,
            canPin: p,
            canUnpin: E,
            canDelete: C,
            canReport: b,
            canForward: y,
            canFaveSticker: S,
            canUnfaveSticker: k,
            canCopy: N,
            canCopyLink: w,
            canSelect: T,
            canDownload: R,
            canSaveGif: L,
            canRevote: F,
            canClosePoll: x,
            canTranslate: B,
            canShowOriginal: D,
            canSelectLanguage: O,
            isDownloading: _,
            repliesThreadInfo: $,
            canShowSeenBy: j,
            canShowReactionsCount: G,
            canShowReactionList: V,
            seenByRecentUsers: H,
            hasCustomEmoji: J,
            customEmojiSets: q,
            onReply: Y,
            onOpenThread: K,
            onEdit: W,
            onPin: ee,
            onUnpin: te,
            onForward: ne,
            onDelete: ae,
            onReport: se,
            onFaveSticker: ie,
            onUnfaveSticker: oe,
            onSelect: re,
            onSend: le,
            onReschedule: ce,
            onClose: de,
            onCloseAnimationEnd: me,
            onCopyLink: ue,
            onCopyNumber: he,
            onDownload: Pe,
            onSaveGif: Ze,
            onCancelVote: ve,
            onClosePoll: pe,
            onShowSeenBy: Ee,
            onShowReactors: Ce,
            onToggleReaction: be,
            onCopyMessages: fe,
            onAboutAds: Ie,
            onSponsoredHide: ye,
            onTranslate: Se,
            onShowOriginal: ke,
            onSelectLanguage: Ne,
          } = e
          const { showNotification: we, openStickerSet: Me, openCustomEmojiSets: Te } = (0, i.Sv)(),
            Ae = (0, a.sO)(null),
            Re = (0, a.sO)(null),
            Le = (0, M.Z)(),
            Fe = V && !(!r && !c),
            xe = !('id' in s),
            Be = xe ? '' : s.id,
            [Oe, Ue, _e] = (0, I.Z)(),
            { isMobile: $e } = (0, U.ZP)(),
            je = (0, a.I4)(() => {
              we({ message: Le('Share.Link.Copied') }), de()
            }, [Le, de, we]),
            Ge = (0, a.I4)(() => {
              q &&
                (1 === q.length
                  ? Me({ stickerSetInfo: { shortName: q[0].shortName } })
                  : Te({ setIds: q.map((e) => e.id) }),
                de())
            }, [q, de, Te, Me]),
            Ve = xe
              ? []
              : (function (e, t, n, a, s) {
                  const i = [],
                    r = (0, o.UD)(e),
                    l = (0, o.O$)(e) || ((0, o.Cg)(e) ? void 0 : (0, o.F$)(e)),
                    c = (0, o.nl)(e),
                    d = (0, o.Ti)(e, 'inline'),
                    m = l && (d || (0, o.BM)(e)) && ps.yl,
                    u = window.getSelection()
                  if (
                    (m &&
                      i.push({
                        label: 'lng_context_copy_image',
                        icon: 'copy-media',
                        handler: () => {
                          Promise.resolve(d ? To.he(d, A.IU.BlobUrl) : l.blobUrl).then(ps.VP), t?.()
                        },
                      }),
                    r)
                  ) {
                    const n = Boolean(
                      u?.anchorNode?.parentNode &&
                        u.anchorNode.parentNode.closest('.Message .content-inner') &&
                        '' !== u.toString().replace(/(?:\r\n|\r|\n)/g, '')
                    )
                    i.push({
                      label: Ro(n),
                      icon: 'copy',
                      handler: () => {
                        const s = (0, Ao.Z)()
                        if (s?.length && a) a(s)
                        else if (n) document.execCommand('copy')
                        else {
                          const t = (0, f.X)(e, void 0, void 0, void 0, void 0, void 0, !0)
                          t && (0, ps.qN)(t.join(''), (0, o.EU)(e))
                        }
                        t?.()
                      },
                    })
                  }
                  return (
                    n &&
                      i.push({
                        label: 'lng_context_copy_message_link',
                        icon: 'link',
                        handler: () => {
                          n(), t?.()
                        },
                      }),
                    c &&
                      s &&
                      i.push({
                        label: 'lng_profile_copy_phone',
                        icon: 'copy',
                        handler: () => {
                          s(), t?.()
                        },
                      }),
                    i
                  )
                })(s, je, w ? ue : void 0, fe, he),
            ze = (0, a.I4)(
              () =>
                xe
                  ? document.querySelector(
                      '.Transition__slide--active > .MessageList .SponsoredMessage'
                    )
                  : document.querySelector(
                      `.Transition__slide--active > .MessageList div[data-message-id="${Be}"]`
                    ),
              [xe, Be]
            ),
            He = (0, a.I4)(
              () => document.querySelector('.Transition__slide--active > .MessageList'),
              []
            ),
            Xe = (0, a.I4)(() => document.querySelector('.MessageContextMenu .bubble'), []),
            Je = (0, a.I4)(() => {
              const e = ($e && document.querySelector('.AudioPlayer-content')?.offsetHeight) || 0,
                t = document.querySelector('.HeaderPinnedMessage-wrapper'),
                n =
                  ((($e && !e) || (!$e && t?.classList.contains('full-width'))) &&
                    t?.offsetHeight) ||
                  0
              return {
                extraPaddingX: 10,
                extraTopPadding: document.querySelector('.MiddleHeader').offsetHeight,
                marginSides: Fe ? 32 : void 0,
                extraMarginTop: n + e,
              }
            }, [$e, Fe])
          ;(0, a.d4)(() => {
            n
              ? setTimeout(() => {
                  Ue()
                }, 200)
              : _e()
          }, [n, Ue, _e])
          const {
            positionX: qe,
            positionY: Ye,
            transformOriginX: Ke,
            transformOriginY: We,
            style: Qe,
            menuStyle: et,
            withScroll: tt,
          } = (0, $o.Z)(m, ze, He, Xe, Je)
          return (
            (0, a.d4)(() => (Uo(tt ? Re.current : void 0, '.ReactionSelector'), _o), [tt]),
            a.ZP.createElement(
              ge.Z,
              {
                ref: Ae,
                isOpen: n,
                transformOriginX: Ke,
                transformOriginY: We,
                positionX: qe,
                positionY: Ye,
                style: Qe,
                bubbleStyle: et,
                className: (0, Q.Z)('MessageContextMenu', 'fluid', Fe && 'with-reactions'),
                onClose: de,
                onCloseAnimationEnd: me,
              },
              Fe &&
                a.ZP.createElement(Jo, {
                  enabledReactions: c,
                  currentReactions: xe ? void 0 : s.reactions?.results,
                  maxUniqueReactions: d,
                  onToggleReaction: be,
                  isPrivate: r,
                  availableReactions: t,
                  isReady: Oe,
                  canBuyPremium: P,
                  isCurrentUserPremium: l,
                }),
              a.ZP.createElement(
                'div',
                { className: 'scrollable-content custom-scroll', style: et, ref: Re },
                u &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'send-outline', onClick: le },
                    Le('MessageScheduleSend')
                  ),
                h &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'schedule', onClick: ce },
                    Le('MessageScheduleEditTime')
                  ),
                Z && a.ZP.createElement(z.Z, { icon: 'reply', onClick: Y }, Le('Reply')),
                !g &&
                  Boolean($?.messagesCount) &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'replies', onClick: K },
                    Le('Conversation.ContextViewReplies', $.messagesCount, 'i')
                  ),
                v && a.ZP.createElement(z.Z, { icon: 'edit', onClick: W }, Le('Edit')),
                S &&
                  a.ZP.createElement(z.Z, { icon: 'favorite', onClick: ie }, Le('AddToFavorites')),
                k &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'favorite', onClick: oe },
                    Le('Stickers.RemoveFromFavorites')
                  ),
                B &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'language', onClick: Se },
                    Le('TranslateMessage')
                  ),
                D &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'language', onClick: ke },
                    Le('ShowOriginalButton')
                  ),
                O &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'web', onClick: Ne },
                    Le('lng_settings_change_lang')
                  ),
                N &&
                  Ve.map((e) =>
                    a.ZP.createElement(
                      z.Z,
                      { key: e.label, icon: e.icon, onClick: e.handler },
                      Le(e.label)
                    )
                  ),
                p && a.ZP.createElement(z.Z, { icon: 'pin', onClick: ee }, Le('DialogPin')),
                E && a.ZP.createElement(z.Z, { icon: 'unpin', onClick: te }, Le('DialogUnpin')),
                L &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'gifs', onClick: Ze },
                    Le('lng_context_save_gif')
                  ),
                F &&
                  a.ZP.createElement(z.Z, { icon: 'revote', onClick: ve }, Le('lng_polls_retract')),
                x && a.ZP.createElement(z.Z, { icon: 'stop', onClick: pe }, Le('lng_polls_stop')),
                R &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'download', onClick: Pe },
                    Le(_ ? 'lng_context_cancel_download' : 'lng_media_download')
                  ),
                y && a.ZP.createElement(z.Z, { icon: 'forward', onClick: ne }, Le('Forward')),
                T && a.ZP.createElement(z.Z, { icon: 'select', onClick: re }, Le('Common.Select')),
                b &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'flag', onClick: se },
                    Le('lng_context_report_msg')
                  ),
                (j || G) &&
                  !xe &&
                  a.ZP.createElement(
                    z.Z,
                    {
                      className: 'MessageContextMenu--seen-by',
                      icon: G ? 'heart-outline' : 'group',
                      onClick: G ? Ce : Ee,
                      disabled: !G && !s.seenByUserIds?.length,
                    },
                    a.ZP.createElement(
                      'span',
                      { className: 'MessageContextMenu--seen-by-label' },
                      G && s.reactors?.count
                        ? j && s.seenByUserIds?.length
                          ? Le('Chat.OutgoingContextMixedReactionCount', [
                              s.reactors.count,
                              s.seenByUserIds.length,
                            ])
                          : Le('Chat.ContextReactionCount', s.reactors.count, 'i')
                        : 1 === s.seenByUserIds?.length && H
                        ? (0, X.Z)((0, o.Js)(H[0]))
                        : s.seenByUserIds?.length
                        ? Le('Conversation.ContextMenuSeen', s.seenByUserIds.length, 'i')
                        : Le('Conversation.ContextMenuNoViews')
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'avatars' },
                      H?.map((e) => a.ZP.createElement(De.Z, { size: 'micro', user: e }))
                    )
                  ),
                C &&
                  a.ZP.createElement(
                    z.Z,
                    { destructive: !0, icon: 'delete', onClick: ae },
                    Le('Delete')
                  ),
                J &&
                  a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(jo.Z, null),
                    !q &&
                      a.ZP.createElement(
                        a.ZP.Fragment,
                        null,
                        a.ZP.createElement(Go.Z, { inline: !0, className: 'menu-loading-row' }),
                        a.ZP.createElement(Go.Z, { inline: !0, className: 'menu-loading-row' })
                      ),
                    q &&
                      1 === q.length &&
                      a.ZP.createElement(
                        z.Z,
                        { withWrap: !0, onClick: Ge, className: 'menu-custom-emoji-sets' },
                        (0, X.Z)(Le('MessageContainsEmojiPack', q[0].title), [
                          'simple_markdown',
                          'emoji',
                        ])
                      ),
                    q &&
                      q.length > 1 &&
                      a.ZP.createElement(
                        z.Z,
                        { withWrap: !0, onClick: Ge, className: 'menu-custom-emoji-sets' },
                        (0, X.Z)(Le('MessageContainsEmojiPacks', q.length), ['simple_markdown'])
                      )
                  ),
                xe &&
                  a.ZP.createElement(
                    z.Z,
                    { icon: 'help', onClick: Ie },
                    Le('SponsoredMessageInfo')
                  ),
                xe && ye && a.ZP.createElement(z.Z, { icon: 'stop', onClick: ye }, Le('HideAd'))
              )
            )
          )
        }),
        Yo = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { message: n, messageListType: a, detectedLanguage: s } = t
            const { threadId: i } = (0, r.Bt)(e) || {},
              l = (0, r.xs)(e, n.chatId),
              c = (0, r.Z1)(e, n.chatId),
              {
                seenByExpiresAt: u,
                seenByMaxChatMembers: h,
                maxUniqueReactions: P,
              } = e.appConfig || {},
              {
                noOptions: Z,
                canReply: v,
                canPin: g,
                canUnpin: p,
                canDelete: E,
                canReport: C,
                canEdit: b,
                canForward: f,
                canFaveSticker: I,
                canUnfaveSticker: y,
                canCopy: S,
                canCopyLink: k,
                canSelect: N,
                canDownload: w,
                canSaveGif: M,
                canRevote: T,
                canClosePoll: A,
              } = (i && (0, r._k)(e, n, i)) || {},
              R = (0, o.B4)(n),
              L = 'pinned' === a,
              F = 'scheduled' === a,
              x = c && (0, o.eA)(c),
              B = (0, o.CI)(n),
              D = Boolean(
                c &&
                  h &&
                  u &&
                  (0, o.Bf)(c) &&
                  R &&
                  !F &&
                  c.membersCount &&
                  c.membersCount <= h &&
                  n.date > Date.now() / 1e3 - u
              ),
              O = c && (0, o.YC)(c.id),
              U = (0, o.FT)(n),
              _ =
                !B &&
                !x &&
                !F &&
                !U &&
                !O &&
                n.reactions &&
                !(0, o.JE)(n.reactions) &&
                n.reactions.canSeeList,
              $ = (0, r.EV)(e, n),
              j = Boolean(n.content.contact),
              G = (0, r.wV)(e),
              V = (0, r.q_)(e, n),
              z = V?.map((t) => (0, r.Ny)(e, t)),
              H = z?.every(Boolean) ? z : void 0,
              X = (0, r.xx)(e, n.chatId, n.id),
              J = X ? Boolean((0, r.HG)(e, n.chatId, X)[n.id]?.text) : void 0,
              { canTranslate: q, doNotTranslate: Y } = e.settings.byKey,
              K = !s || !Y.includes(s),
              W = d.SX && q && n.content.text && K && !B && !F && !U && !J && !n.emojiOnlyCount
            return {
              availableReactions: e.availableReactions,
              noOptions: Z,
              canSendNow: F,
              canReschedule: F,
              canReply: !L && !F && v,
              canPin: !F && g,
              canUnpin: !F && p,
              canDelete: E,
              canReport: C,
              canEdit: !L && b,
              canForward: !F && f,
              canFaveSticker: !F && I,
              canUnfaveSticker: !F && y,
              canCopy: j || (!$ && S),
              canCopyLink: !F && k,
              canSelect: N,
              canDownload: !$ && w,
              canSaveGif: !$ && M,
              canRevote: T,
              canClosePoll: !F && A,
              activeDownloads: l,
              canShowSeenBy: D,
              enabledReactions: c?.isForbidden ? void 0 : c?.fullInfo?.enabledReactions,
              maxUniqueReactions: P,
              isPrivate: O,
              isCurrentUserPremium: G,
              hasFullInfo: Boolean(c?.fullInfo),
              canShowReactionsCount: _,
              canShowReactionList: !B && !U && !F && c?.id !== m.awM,
              canBuyPremium: !G && !(0, r.oe)(e),
              customEmojiSetsInfo: V,
              customEmojiSets: H,
              canScheduleUntilOnline: (0, r.Eh)(e, n.chatId),
              threadId: i,
              canTranslate: W,
              canShowOriginal: J,
              canSelectLanguage: J,
            }
          })((e) => {
            let {
              availableReactions: t,
              isOpen: n,
              messageListType: s,
              chatUsername: r,
              message: l,
              customEmojiSetsInfo: c,
              customEmojiSets: d,
              album: m,
              anchor: u,
              noOptions: h,
              canSendNow: P,
              hasFullInfo: Z,
              canReschedule: v,
              canReply: g,
              canPin: p,
              repliesThreadInfo: E,
              canUnpin: C,
              canDelete: b,
              canReport: f,
              canShowReactionsCount: y,
              canShowReactionList: S,
              canEdit: k,
              enabledReactions: N,
              maxUniqueReactions: w,
              isPrivate: T,
              isCurrentUserPremium: A,
              canForward: R,
              canBuyPremium: L,
              canFaveSticker: F,
              canUnfaveSticker: x,
              canCopy: B,
              canCopyLink: D,
              canSelect: O,
              canDownload: U,
              canSaveGif: $,
              canRevote: j,
              canClosePoll: G,
              activeDownloads: V,
              noReplies: z,
              canShowSeenBy: H,
              canScheduleUntilOnline: X,
              canTranslate: J,
              canShowOriginal: Y,
              canSelectLanguage: K,
              threadId: W,
              onClose: ee,
              onCloseAnimationEnd: te,
            } = e
            const {
                openChat: ne,
                setReplyingToId: ae,
                setEditingId: se,
                pinMessage: ie,
                openForwardMenu: oe,
                faveSticker: re,
                unfaveSticker: le,
                toggleMessageSelection: ce,
                sendScheduledMessages: de,
                rescheduleMessage: me,
                downloadMessageMedia: he,
                cancelMessageMediaDownload: Pe,
                loadSeenBy: Ze,
                openSeenByModal: ve,
                openReactorListModal: ge,
                loadFullChat: pe,
                loadReactors: Ee,
                copyMessagesByIds: Ce,
                saveGif: be,
                loadStickers: fe,
                cancelPollVote: Ie,
                closePoll: ye,
                toggleReaction: Se,
                requestMessageTranslation: ke,
                showOriginalMessage: Ne,
                openMessageLanguageModal: we,
              } = (0, i.Sv)(),
              Me = (0, M.Z)(),
              { transitionClassNames: Te } = (0, ue.Z)(n, te, void 0, !1),
              [Ae, Re] = (0, a.eJ)(!0),
              [Le, Fe] = (0, a.eJ)(!1),
              [xe, Be] = (0, a.eJ)(!1),
              [De, Oe] = (0, a.eJ)(!1),
              [Ue, _e, $e] = (0, I.Z)(),
              [je, Ge] = (0, Mo.Z)(X, ee, l.date),
              Ve = void 0 === c || Boolean(c.length)
            ;(0, a.d4)(() => {
              H && n && Ze({ chatId: l.chatId, messageId: l.id })
            }, [Ze, n, l.chatId, l.id, H]),
              (0, a.d4)(() => {
                y && n && Ee({ chatId: l.chatId, messageId: l.id })
              }, [y, n, Ee, l.chatId, l.id]),
              (0, a.d4)(() => {
                c?.length &&
                  d?.length !== c.length &&
                  c.forEach((e) => {
                    fe({ stickerSetInfo: e })
                  })
              }, [c, d, fe]),
              (0, a.d4)(() => {
                Z || T || !n || pe({ chatId: l.chatId })
              }, [Z, n, T, pe, l.chatId])
            const ze = (0, a.Ye)(() => {
                if (l.reactions?.recentReactions?.length) {
                  const e = (0, i.Rd)().users.byId,
                    t = new Set(
                      l.reactions?.recentReactions?.map((t) => {
                        let { userId: n } = t
                        return e[n]
                      })
                    )
                  return Array.from(t).filter(Boolean).slice(0, 3)
                }
                if (!l.seenByUserIds) return
                const e = (0, i.Rd)().users.byId
                return l.seenByUserIds
                  ?.slice(0, 3)
                  .map((t) => e[t])
                  .filter(Boolean)
              }, [l.reactions?.recentReactions, l.seenByUserIds]),
              He = m ? m.messages.some((e) => V.includes(e.id)) : V.includes(l.id),
              Xe = (0, a.I4)(() => {
                Re(!1), Fe(!0)
              }, []),
              Je = (0, a.I4)(() => {
                Re(!1), Be(!0)
              }, []),
              qe = (0, a.I4)(() => {
                Re(!1), ee()
              }, [ee]),
              Ye = (0, a.I4)(() => {
                Fe(!1), ee()
              }, [ee]),
              Ke = (0, a.I4)(() => {
                Be(!1), ee()
              }, [ee]),
              We = (0, a.I4)(() => {
                Oe(!1), ee()
              }, [ee]),
              Qe = (0, a.I4)(() => {
                ae({ messageId: l.id }), qe()
              }, [ae, l.id, qe]),
              et = (0, a.I4)(() => {
                ne({ id: l.chatId, threadId: l.id }), qe()
              }, [qe, l.chatId, l.id, ne]),
              tt = (0, a.I4)(() => {
                se({ messageId: l.id }), qe()
              }, [se, l.id, qe]),
              nt = (0, a.I4)(() => {
                Re(!1), Oe(!0)
              }, []),
              at = (0, a.I4)(() => {
                ie({ messageId: l.id, isUnpin: !0 }), qe()
              }, [ie, l.id, qe]),
              st = (0, a.I4)(() => {
                if ((qe(), m?.messages)) {
                  const e = m.messages.map((e) => {
                    let { id: t } = e
                    return t
                  })
                  oe({ fromChatId: l.chatId, messageIds: e })
                } else oe({ fromChatId: l.chatId, messageIds: [l.id] })
              }, [oe, l, qe, m]),
              it = (0, a.I4)(() => {
                qe(), re({ sticker: l.content.sticker })
              }, [qe, l.content.sticker, re]),
              ot = (0, a.I4)(() => {
                qe(), le({ sticker: l.content.sticker })
              }, [qe, l.content.sticker, le]),
              rt = (0, a.I4)(() => {
                qe(), Ie({ chatId: l.chatId, messageId: l.id })
              }, [qe, l, Ie]),
              lt = (0, a.I4)(() => {
                qe(), ye({ chatId: l.chatId, messageId: l.id })
              }, [qe, l, ye]),
              ct = (0, a.I4)(() => {
                const e = m?.messages
                  ? {
                      messageId: l.id,
                      childMessageIds: m.messages.map((e) => {
                        let { id: t } = e
                        return t
                      }),
                      withShift: !1,
                    }
                  : { messageId: l.id, withShift: !1 }
                ce(e), qe()
              }, [qe, l.id, ce, m]),
              dt = (0, a.I4)(() => {
                de({ chatId: l.chatId, id: l.id }), qe()
              }, [qe, l.chatId, l.id, de]),
              ut = (0, a.I4)(
                (e) => {
                  me({ chatId: l.chatId, messageId: l.id, scheduledAt: e }), ee()
                },
                [l.chatId, l.id, ee, me]
              ),
              ht = (0, a.I4)(() => {
                Re(!1), je(ut)
              }, [ut, je]),
              Pt = (0, a.I4)(() => {
                qe(), ve({ chatId: l.chatId, messageId: l.id })
              }, [qe, l.chatId, l.id, ve]),
              Zt = (0, a.I4)(() => {
                qe(), ge({ chatId: l.chatId, messageId: l.id })
              }, [qe, ge, l.chatId, l.id]),
              vt = (0, a.I4)(
                (e) => {
                  Ce({ messageIds: e }), qe()
                },
                [qe, Ce]
              ),
              gt = (0, a.I4)(() => {
                ;(0, ps.TE)((0, o.BV)(l.chatId, r, W, l.id)), qe()
              }, [r, qe, l, W]),
              pt = (0, a.I4)(() => {
                ;(0, ps.TE)(l.content.contact.phoneNumber), qe()
              }, [qe, l]),
              Et = (0, a.I4)(() => {
                ;(m?.messages || [l]).forEach((e) => {
                  He ? Pe({ message: e }) : he({ message: e })
                }),
                  qe()
              }, [m, l, qe, He, Pe, he]),
              Ct = (0, a.I4)(() => {
                const e = (0, o.b7)(l)
                be({ gif: e }), qe()
              }, [qe, l, be]),
              bt = (0, a.I4)(
                (e) => {
                  Se({ chatId: l.chatId, messageId: l.id, reaction: e }), qe()
                },
                [qe, l, Se]
              ),
              ft = (0, a.I4)(() => {
                ke({ chatId: l.chatId, id: l.id }), qe()
              }, [qe, l, ke]),
              It = (0, a.I4)(() => {
                Ne({ chatId: l.chatId, id: l.id }), qe()
              }, [qe, l, Ne]),
              yt = (0, a.I4)(() => {
                we({ chatId: l.chatId, id: l.id }), qe()
              }, [qe, l.chatId, l.id, we]),
              St = (0, a.Ye)(
                () =>
                  (m ? m.messages : [l]).map((e) => {
                    let { id: t } = e
                    return t
                  }),
                [m, l]
              )
            if (h) return void qe()
            const kt = new Date()
            return (
              kt.setFullYear(kt.getFullYear() + 1),
              a.ZP.createElement(
                'div',
                { className: (0, Q.Z)('ContextMenuContainer', Te) },
                a.ZP.createElement(qo, {
                  availableReactions: t,
                  message: l,
                  isPrivate: T,
                  isCurrentUserPremium: A,
                  canBuyPremium: L,
                  isOpen: Ae,
                  enabledReactions: N,
                  maxUniqueReactions: w,
                  anchor: u,
                  canShowReactionsCount: y,
                  canShowReactionList: S,
                  canSendNow: P,
                  canReschedule: v,
                  canReply: g,
                  canDelete: b,
                  canReport: f,
                  canPin: p,
                  repliesThreadInfo: E,
                  canUnpin: C,
                  canEdit: k,
                  canForward: R,
                  canFaveSticker: F,
                  canUnfaveSticker: x,
                  canCopy: B,
                  canCopyLink: D,
                  canSelect: O,
                  canDownload: U,
                  canSaveGif: $,
                  canRevote: j,
                  canClosePoll: G,
                  canShowSeenBy: H,
                  canTranslate: J,
                  canShowOriginal: Y,
                  canSelectLanguage: K,
                  hasCustomEmoji: Ve,
                  customEmojiSets: d,
                  isDownloading: He,
                  seenByRecentUsers: ze,
                  noReplies: z,
                  onOpenThread: et,
                  onReply: Qe,
                  onEdit: tt,
                  onPin: nt,
                  onUnpin: at,
                  onForward: st,
                  onDelete: Xe,
                  onReport: Je,
                  onFaveSticker: it,
                  onUnfaveSticker: ot,
                  onSelect: ct,
                  onSend: dt,
                  onReschedule: ht,
                  onClose: qe,
                  onCopyLink: gt,
                  onCopyMessages: vt,
                  onCopyNumber: pt,
                  onDownload: Et,
                  onSaveGif: Ct,
                  onCancelVote: rt,
                  onClosePoll: _e,
                  onShowSeenBy: Pt,
                  onToggleReaction: bt,
                  onShowReactors: Zt,
                  onTranslate: ft,
                  onShowOriginal: It,
                  onSelectLanguage: yt,
                }),
                a.ZP.createElement(q, {
                  isOpen: Le,
                  isSchedule: 'scheduled' === s,
                  onClose: Ye,
                  album: m,
                  message: l,
                }),
                a.ZP.createElement(_.Z, { isOpen: xe, onClose: Ke, messageIds: St }),
                a.ZP.createElement(oa, {
                  isOpen: De,
                  messageId: l.id,
                  chatId: l.chatId,
                  onClose: We,
                }),
                a.ZP.createElement(mt.Z, {
                  isOpen: Ue,
                  onClose: $e,
                  text: Me('lng_polls_stop_warning'),
                  confirmLabel: Me('lng_polls_stop_sure'),
                  confirmHandler: lt,
                }),
                v && Ge
              )
            )
          })
        ),
        Ko = (0, a.X$)(
          (0, i.c$)((e) => ({ canBuyPremium: !(0, r.wV)(e) && !(0, r.oe)(e) }))((e) => {
            let {
              message: t,
              anchor: n,
              onAboutAds: s,
              onClose: o,
              onCloseAnimationEnd: r,
              canBuyPremium: l,
            } = e
            const { openPremiumModal: c } = (0, i.Sv)(),
              [d, , m] = (0, I.Z)(!0),
              { transitionClassNames: u } = (0, ue.Z)(d, r, void 0, !1),
              h = (0, a.I4)(() => {
                s(), m()
              }, [m, s]),
              P = (0, a.I4)(() => {
                m(), c(), o()
              }, [m, o, c])
            if (n)
              return a.ZP.createElement(
                'div',
                { className: (0, Q.Z)('ContextMenuContainer', u) },
                a.ZP.createElement(qo, {
                  isOpen: d,
                  anchor: n,
                  message: t,
                  onClose: m,
                  onCloseAnimationEnd: m,
                  onAboutAds: h,
                  onSponsoredHide: l ? P : void 0,
                })
              )
          })
        ),
        Wo = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { fromSticker: n, stickerSetShortName: a } = t
            const s = (0, r.Bt)(e),
              { chatId: i, threadId: l } = s || {},
              c = i && (0, r.Z1)(e, i),
              d = c ? (0, o.H5)(c) : void 0,
              m = i && l ? (0, r.tZ)(e, i, l) : void 0,
              u = Boolean(m?.originChannelId),
              h = Boolean(c && l && (0, o.Qm)(c, l, u) && d?.canSendStickers),
              P = Boolean(i) && (0, r.FM)(e, i),
              Z = n ? n.stickerSetInfo : a ? { shortName: a } : void 0,
              v = Z ? (0, r.Ny)(e, Z) : void 0
            return {
              canScheduleUntilOnline: Boolean(i) && (0, r.Eh)(e, i),
              canSendStickers: h,
              isSavedMessages: P,
              shouldSchedule: (0, r.Aq)(e),
              stickerSet: v,
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              isOpen: t,
              fromSticker: n,
              stickerSetShortName: s,
              stickerSet: o,
              canSendStickers: r,
              canScheduleUntilOnline: l,
              shouldSchedule: c,
              isSavedMessages: d,
              isCurrentUserPremium: u,
              onClose: h,
            } = e
            const {
                loadStickers: P,
                toggleStickerSet: Z,
                sendMessage: v,
                showNotification: g,
              } = (0, i.Sv)(),
              p = (0, a.sO)(null),
              E = (0, a.sO)(null),
              C = (0, M.Z)(),
              { isMobile: b } = (0, U.ZP)(),
              f = (0, T.Z)(o),
              I = o || f,
              y = Boolean(!I?.isArchived && I?.installedDate),
              S = I?.isEmoji,
              [k, N] = (0, Mo.Z)(l),
              { observe: w } = (0, Hn.S1)({ rootRef: p, throttleMs: 200, isDisabled: !t })
            ;(0, a.d4)(() => {
              t && !I?.stickers && P({ stickerSetInfo: n ? n.stickerSetInfo : { shortName: s } })
            }, [t, n, P, s, I])
            const A = (0, a.I4)(
                (e, t, n) => {
                  ;(e = { ...e, isPreloadedGlobally: !0 }),
                    c || n
                      ? k((n) => {
                          v({ sticker: e, isSilent: t, scheduledAt: n }), h()
                        })
                      : (v({ sticker: e, isSilent: t, shouldUpdateStickerSetsOrder: y }), h())
                },
                [h, k, v, c, y]
              ),
              R = (0, a.I4)(() => {
                I && (Z({ stickerSetId: I.id }), h())
              }, [h, I, Z]),
              L = (0, a.I4)(() => {
                if (!I) return
                const { shortName: e } = I,
                  t = S ? 'addemoji' : 'addstickers',
                  n = `${m.zHP}${t}/${e}`
                ;(0, ps.TE)(n), g({ message: C('LinkCopied') })
              }, [S, C, I, g]),
              F = (0, a.Ye)(
                () => (e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      ripple: !b,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : '',
                      onClick: t,
                      ariaLabel: 'More actions',
                    },
                    a.ZP.createElement('i', { className: 'icon-more' })
                  )
                },
                [b]
              )
            return a.ZP.createElement(
              J.Z,
              {
                className: 'StickerSetModal',
                isOpen: t,
                onClose: h,
                header: a.ZP.createElement(
                  'div',
                  { className: 'modal-header', dir: C.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      color: 'translucent',
                      size: 'smaller',
                      ariaLabel: C('Close'),
                      onClick: h,
                    },
                    a.ZP.createElement('i', { className: 'icon-close' })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'modal-title' },
                    I ? (0, X.Z)(I.title, ['emoji', 'links']) : C('AccDescrStickerSet')
                  ),
                  a.ZP.createElement(
                    V.Z,
                    {
                      className: 'stickers-more-menu with-menu-transitions',
                      trigger: F,
                      positionX: 'right',
                    },
                    a.ZP.createElement(z.Z, { icon: 'copy', onClick: L }, C('StickersCopy'))
                  )
                ),
              },
              I?.stickers
                ? a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(
                      'div',
                      { ref: p, className: 'stickers custom-scroll' },
                      a.ZP.createElement(
                        'div',
                        { className: 'shared-canvas-container' },
                        a.ZP.createElement('canvas', { ref: E, className: 'shared-canvas' }),
                        I.stickers.map((e) =>
                          a.ZP.createElement(Jn.Z, {
                            sticker: e,
                            size: S ? m.lHp : m.yK2,
                            observeIntersection: w,
                            onClick: r && !S ? A : void 0,
                            clickArg: e,
                            isSavedMessages: d,
                            isCurrentUserPremium: u,
                            sharedCanvasRef: E,
                          })
                        )
                      )
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'button-wrapper' },
                      a.ZP.createElement(
                        $.Z,
                        { size: 'smaller', fluid: !0, color: y ? 'danger' : 'primary', onClick: R },
                        (() => {
                          if (!I) return C('Loading')
                          const e = S ? 'Emoji' : 'Sticker'
                          return C(
                            y ? `StickerPack.Remove${e}Count` : `StickerPack.Add${e}Count`,
                            I.count,
                            'i'
                          )
                        })()
                      )
                    )
                  )
                : a.ZP.createElement(ze.Z, null),
              N
            )
          })
        ),
        Qo = { root: 'Qzt_zq5gWHne6P2rw7Wj', sets: 'Ay41sqhq2QmXdgDHnt2E' },
        er = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { customEmojiSetIds: n } = t
            const a = n?.map((t) => e.stickers.setsById[t])
            return { customEmojiSets: a }
          })((e) => {
            let { customEmojiSets: t, onClose: n } = e
            const { openStickerSet: s } = (0, i.Sv)(),
              o = (0, M.Z)(),
              r = (0, a.sO)(null),
              { observe: l } = (0, Hn.S1)({ rootRef: r, isDisabled: !t }),
              c = (0, T.Z)(t),
              d = t || c,
              m = (0, a.I4)(
                (e) => {
                  s({ stickerSetInfo: e.stickerSetInfo })
                },
                [s]
              )
            return a.ZP.createElement(
              J.Z,
              {
                isOpen: Boolean(t),
                className: Qo.root,
                onClose: n,
                hasCloseButton: !0,
                title: o('lng_custom_emoji_used_sets'),
              },
              a.ZP.createElement(
                'div',
                { className: (0, Q.Z)(Qo.sets, 'custom-scroll'), ref: r, teactFastList: !0 },
                d?.map((e) =>
                  a.ZP.createElement(Xi, {
                    key: e.id,
                    className: Qo.setCard,
                    stickerSet: e,
                    onClick: m,
                    observeIntersection: l,
                  })
                )
              )
            )
          })
        )
      var tr = n(52678)
      const nr = {
          settings: { icon: 'bots', label: 'BotSettings' },
          privacy: { icon: 'info', label: 'Privacy' },
          help: { icon: 'help', label: 'BotHelp' },
        },
        ar = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, threadId: a } = t
            const s = (0, r.Z1)(e, n)
            if (!s || s.isRestricted) return {}
            const i = (0, o.YC)(s.id),
              l = i ? (0, r.dy)(e, n) : void 0,
              c = l && (0, o.kw)(l),
              d = a === A._f,
              u = d && ((0, o.eA)(s) || (0, o.Bf)(s) || (l && !l.isSelf)),
              { chatId: h, threadId: P } = (0, r.Bt)(e) || {},
              Z = n !== m.FVh ? (0, r.IK)(e, n) : void 0,
              v = Boolean(e.lastSyncTime && l?.fullInfo?.premiumGifts?.length && !(0, r.oe)(e)),
              g = s?.topics?.[a],
              p =
                s.isForum &&
                (s.isCreator || !(0, o.Mg)(s, 'manageTopics') || (0, o.VE)(s, 'manageTopics')),
              E = g && (0, o.GU)(s, g)
            return {
              chat: s,
              isMuted: (0, o.i4)(s, (0, r.dZ)(e), (0, r.NJ)(e)),
              isPrivate: i,
              isTopic: s?.isForum && !d,
              isForum: s?.isForum,
              canAddContact: c,
              canReportChat: u,
              canDeleteChat: (0, o.cc)(s),
              canGiftPremium: v,
              hasLinkedChat: Boolean(s?.fullInfo?.linkedChatId),
              botCommands: Z?.fullInfo?.botInfo?.commands,
              isChatInfoShown: (0, r.jU)(e).isChatInfoShown && h === n && P === a,
              canCreateTopic: p,
              canEditTopic: E,
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              isOpen: s,
              withExtraActions: o,
              anchor: r,
              isChannel: l,
              botCommands: c,
              withForumActions: d,
              isTopic: m,
              isForum: u,
              isChatInfoShown: h,
              canStartBot: P,
              canRestartBot: Z,
              canSubscribe: v,
              canSearch: g,
              canCall: p,
              canMute: E,
              canViewStatistics: C,
              pendingJoinRequests: b,
              canLeave: f,
              canEnterVoiceChat: I,
              canCreateVoiceChat: y,
              chat: S,
              isPrivate: k,
              isMuted: N,
              canReportChat: w,
              canDeleteChat: T,
              canGiftPremium: A,
              hasLinkedChat: R,
              canAddContact: L,
              canCreateTopic: F,
              canEditTopic: x,
              onJoinRequestsClick: B,
              onSubscribeChannel: D,
              onSearchClick: O,
              onAsMessagesClick: $,
              onClose: j,
              onCloseAnimationEnd: G,
            } = e
            const {
                updateChatMutedState: V,
                enterMessageSelectMode: H,
                sendBotCommand: X,
                restartBot: J,
                requestMasterAndJoinGroupCall: q,
                createGroupCall: Y,
                openLinkedChat: K,
                openAddContactDialog: W,
                requestMasterAndRequestCall: Q,
                toggleStatistics: ee,
                openGiftPremiumModal: te,
                openChatWithInfo: ne,
                openCreateTopicPanel: ae,
                openEditTopicPanel: se,
                openChat: ie,
              } = (0, i.Sv)(),
              { isMobile: oe } = (0, U.ZP)(),
              [re, le] = (0, a.eJ)(!0),
              [ce, de] = (0, a.eJ)(!1),
              [me, he] = (0, a.eJ)(!1),
              { x: Pe, y: Ze } = r
            ;(0, ue.Z)(s, G, void 0, !1)
            const ve = (0, tr.Z)(!(h || !u) || void 0, 200),
              pe = (0, a.I4)(() => {
                le(!1), he(!0)
              }, []),
              Ee = (0, a.I4)(() => {
                he(!1), j()
              }, [j]),
              Ce = (0, a.I4)(() => {
                le(!1), de(!0)
              }, []),
              be = (0, a.I4)(() => {
                le(!1), j()
              }, [j]),
              fe = (0, a.I4)(() => {
                ne({ id: t, threadId: n }), be()
              }, [t, be, ne, n]),
              Ie = (0, a.I4)(() => {
                de(!1), j()
              }, [j]),
              ye = (0, a.I4)(() => {
                X({ command: '/start' })
              }, [X]),
              Se = (0, a.I4)(() => {
                J({ chatId: t })
              }, [t, J]),
              ke = (0, a.I4)(() => {
                V({ chatId: t, isMuted: !N }), be()
              }, [t, be, N, V]),
              Ne = (0, a.I4)(() => {
                ae({ chatId: t }), be()
              }, [ae, t, be]),
              we = (0, a.I4)(() => {
                se({ chatId: t, topicId: n }), be()
              }, [se, t, n, be]),
              Me = (0, a.I4)(() => {
                ie({ id: void 0 }), be()
              }, [be, ie]),
              Te = (0, a.I4)(() => {
                y ? Y({ chatId: t }) : q({ chatId: t }), be()
              }, [be, y, t, q, Y]),
              Ae = (0, a.I4)(() => {
                K({ id: t }), be()
              }, [t, be, K]),
              Re = (0, a.I4)(() => {
                te({ forUserId: t }), be()
              }, [te, t, be]),
              Le = (0, a.I4)(() => {
                W({ userId: t }), be()
              }, [W, t, be]),
              Fe = (0, a.I4)(() => {
                D(), be()
              }, [be, D]),
              xe = (0, a.I4)(() => {
                Q({ userId: t, isVideo: !0 }), be()
              }, [t, be, Q]),
              Be = (0, a.I4)(() => {
                Q({ userId: t }), be()
              }, [t, be, Q]),
              De = (0, a.I4)(() => {
                O(), be()
              }, [be, O]),
              Oe = (0, a.I4)(() => {
                ee(), be()
              }, [be, ee]),
              Ue = (0, a.I4)(() => {
                H(), be()
              }, [be, H]),
              _e = (0, a.I4)(() => {
                $(), be()
              }, [be, $])
            ;(0, a.d4)(() => (Uo(), _o), [])
            const $e = (0, M.Z)(),
              je = (0, a.Ye)(
                () =>
                  c?.map((e) => {
                    let { command: t } = e
                    const n = nr[t]
                    if (n)
                      return a.ZP.createElement(
                        z.Z,
                        {
                          key: t,
                          icon: n.icon,
                          onClick: () => {
                            X({ command: `/${t}` }), be()
                          },
                        },
                        $e(n.label)
                      )
                  }),
                [c, be, $e, X]
              )
            return a.ZP.createElement(
              jn.Z,
              null,
              a.ZP.createElement(
                'div',
                { className: 'HeaderMenuContainer' },
                a.ZP.createElement(
                  ge.Z,
                  {
                    isOpen: re,
                    positionX: 'right',
                    style: `left: ${Pe}px;top: ${Ze}px;`,
                    onClose: be,
                  },
                  oe && g && a.ZP.createElement(z.Z, { icon: 'search', onClick: De }, $e('Search')),
                  d &&
                    F &&
                    a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      a.ZP.createElement(
                        z.Z,
                        { icon: 'comments', onClick: Ne },
                        $e('lng_forum_create_topic')
                      ),
                      a.ZP.createElement(jo.Z, null)
                    ),
                  ve &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'info', onClick: fe },
                      $e(m ? 'lng_context_view_topic' : 'lng_context_view_group')
                    ),
                  x &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'edit', onClick: we },
                      $e('lng_forum_topic_edit')
                    ),
                  oe &&
                    !d &&
                    u &&
                    !m &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'forums', onClick: Me },
                      $e('Chat.ContextViewAsTopics')
                    ),
                  d &&
                    Boolean(b) &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'user', onClick: B },
                      $e(l ? 'SubscribeRequests' : 'MemberRequests'),
                      a.ZP.createElement('div', { className: 'right-badge' }, b)
                    ),
                  d &&
                    !m &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'message', onClick: _e },
                      $e('lng_forum_view_as_messages')
                    ),
                  o && P && a.ZP.createElement(z.Z, { icon: 'bots', onClick: ye }, $e('BotStart')),
                  o &&
                    Z &&
                    a.ZP.createElement(z.Z, { icon: 'bots', onClick: Se }, $e('BotRestart')),
                  o &&
                    v &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: l ? 'channel' : 'group', onClick: Fe },
                      $e(l ? 'ProfileJoinChannel' : 'ProfileJoinGroup')
                    ),
                  L && a.ZP.createElement(z.Z, { icon: 'add-user', onClick: Le }, $e('AddContact')),
                  oe && p && a.ZP.createElement(z.Z, { icon: 'phone', onClick: Be }, $e('Call')),
                  p &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'video-outlined', onClick: xe },
                      $e('VideoCall')
                    ),
                  E &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: N ? 'unmute' : 'mute', onClick: ke },
                      $e(N ? 'ChatsUnmute' : 'ChatsMute')
                    ),
                  (I || y) &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'voice-chat', onClick: Te },
                      $e(y ? 'StartVoipChat' : 'VoipGroupJoinCall')
                    ),
                  R &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: l ? 'comments' : 'channel', onClick: Ae },
                      $e(l ? 'ViewDiscussion' : 'lng_profile_view_channel')
                    ),
                  !d &&
                    a.ZP.createElement(
                      z.Z,
                      { icon: 'select', onClick: Ue },
                      $e('ReportSelectMessages')
                    ),
                  C && a.ZP.createElement(z.Z, { icon: 'stats', onClick: Oe }, $e('Statistics')),
                  w &&
                    a.ZP.createElement(z.Z, { icon: 'flag', onClick: pe }, $e('ReportPeer.Report')),
                  je,
                  A && a.ZP.createElement(z.Z, { icon: 'gift', onClick: Re }, $e('GiftPremium')),
                  f &&
                    a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      a.ZP.createElement(jo.Z, null),
                      a.ZP.createElement(
                        z.Z,
                        { destructive: !0, icon: 'delete', onClick: Ce },
                        $e(
                          k
                            ? 'DeleteChatUser'
                            : T
                            ? 'GroupInfo.DeleteAndExit'
                            : l
                            ? 'LeaveChannel'
                            : 'Group.LeaveGroup'
                        )
                      )
                    )
                ),
                S && a.ZP.createElement(ba.Z, { isOpen: ce, onClose: Ie, chat: S }),
                w &&
                  S?.id &&
                  a.ZP.createElement(_.Z, {
                    isOpen: me,
                    onClose: Ee,
                    subject: 'peer',
                    chatId: S.id,
                  })
              )
            )
          })
        )
      var sr = n(69589)
      const ir = (0, ne.Ds)((e) => e(), 200, !1),
        or = (0, a.X$)(
          (0, i.c$)((e) => {
            const t = (0, r.jr)(e)
            if (!t) return {}
            const { query: n, results: a } = (0, r.n5)(e) || {},
              { threadId: s } = (0, r.Bt)(e) || {},
              { totalCount: i, foundIds: o } = a || {}
            return {
              chat: t,
              query: n,
              totalCount: i,
              threadId: s,
              foundIds: o,
              isHistoryCalendarOpen: Boolean((0, r.jU)(e).historyCalendarSelectedAt),
            }
          })((e) => {
            let {
              isActive: t,
              chat: n,
              threadId: s,
              query: o,
              totalCount: r,
              foundIds: l,
              isHistoryCalendarOpen: c,
            } = e
            const {
                setLocalTextSearchQuery: d,
                searchTextMessagesLocal: m,
                focusMessage: u,
                closeLocalTextSearch: h,
                openHistoryCalendar: P,
              } = (0, i.Sv)(),
              Z = (0, a.sO)(null),
              [v, g] = (0, a.eJ)(0)
            ;(0, a.d4)(() => {
              const { visualViewport: e } = window
              if (!e) return
              const t = document.getElementById('Main'),
                n = () => {
                  const { activeElement: n } = document
                  if (n && n === Z.current) {
                    const { pageTop: n, height: a } = e
                    ;(t.style.transform = `translateY(${n}px)`),
                      (t.style.height = `${a}px`),
                      (document.documentElement.scrollTop = n)
                  } else (t.style.transform = ''), (t.style.height = '')
                }
              return (
                e.addEventListener('resize', n),
                () => {
                  e.removeEventListener('resize', n)
                }
              )
            }, []),
              (0, a.d4)(() => {
                n?.id && l?.length
                  ? (u({ chatId: n.id, messageId: l[0], threadId: s }), g(0))
                  : g(-1)
              }, [n?.id, u, l, s]),
              (0, a.d4)(() => {
                Array.from(document.querySelectorAll('input')).forEach((e) => {
                  e.disabled = Boolean(t && e !== Z.current)
                }),
                  Array.from(document.querySelectorAll('div[contenteditable]')).forEach((e) => {
                    e.contentEditable = t ? 'false' : 'true'
                  })
              }, [t]),
              (0, a.d4)(() => {
                t || Z.current.blur()
              }, [t]),
              (0, a.bt)(() => {
                document.querySelector('#MobileSearch input').blur()
              }, [c])
            const p = (0, a.I4)(
                (e) => {
                  d({ query: e }), e.length && ir(m)
                },
                [m, d]
              ),
              E = (0, a.I4)(() => {
                if (n && l) {
                  const e = v + 1
                  u({ chatId: n.id, messageId: l[e], threadId: s }), g(e)
                }
              }, [n, l, v, s]),
              C = (0, a.I4)(() => {
                if (n && l) {
                  const e = v - 1
                  u({ chatId: n.id, messageId: l[e], threadId: s }), g(e)
                }
              }, [n, l, v, s]),
              b = (0, a.I4)(() => {
                h()
              }, [h])
            return a.ZP.createElement(
              'div',
              { id: 'MobileSearch', className: t ? 'active' : '' },
              a.ZP.createElement(
                'div',
                { className: 'header' },
                a.ZP.createElement(
                  $.Z,
                  { size: 'smaller', round: !0, color: 'translucent', onClick: b },
                  a.ZP.createElement('i', { className: 'icon-arrow-left' })
                ),
                a.ZP.createElement(sr.Z, { ref: Z, value: o, onChange: p })
              ),
              a.ZP.createElement(
                'div',
                { className: 'footer' },
                a.ZP.createElement(
                  'div',
                  { className: 'counter' },
                  o
                    ? l?.length
                      ? `${v + 1} of ${r}`
                      : l && !l.length
                      ? 'No results'
                      : ''
                    : a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          size: 'smaller',
                          color: 'translucent',
                          onClick: () => P({ selectedAt: (0, Pe._F)(Date.now()) }),
                          ariaLabel: 'Search messages by date',
                        },
                        a.ZP.createElement('i', { className: 'icon-calendar' })
                      )
                ),
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    onClick: E,
                    disabled: !l || !l.length || v === l.length - 1,
                  },
                  a.ZP.createElement('i', { className: 'icon-up' })
                ),
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    onClick: C,
                    disabled: !l || !l.length || 0 === v,
                  },
                  a.ZP.createElement('i', { className: 'icon-down' })
                )
              )
            )
          })
        )
      var rr = n(21262),
        lr = n(83099)
      const cr = document.createElement('div')
      var dr = n(29295),
        mr = n(28353),
        ur = n(17240),
        hr = n(60130)
      function Pr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
        const [t, n] = (0, a.eJ)(!0),
          [s, i] = (0, a.eJ)(!0),
          o = (0, a.I4)(
            (t) => {
              const { scrollHeight: a, scrollTop: s, clientHeight: o } = t.target
              n(s < e), i(a - s - o < e)
            },
            [e]
          )
        return { isAtBeginning: t, isAtEnd: s, handleScroll: o }
      }
      var Zr = n(69156),
        vr = n(86203),
        gr = n(49841)
      function pr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
        const o = e[i ? 'scrollLeft' : 'scrollTop'],
          r = o + e[i ? 'offsetWidth' : 'offsetHeight'],
          l = 'string' == typeof t ? e.querySelectorAll(t) : t,
          { length: c } = l,
          d = []
        let m = !1
        for (let e = 0; e < c; e++) {
          const t = l[e],
            c = t[i ? 'offsetLeft' : 'offsetTop'],
            u = c + t[i ? 'offsetWidth' : 'offsetHeight']
          if (s ? u >= o - n && u <= r + n : c <= r + n && u >= o - n) d.push(e), (m = !0)
          else if (m && !a) break
        }
        return { allElements: l, visibleIndexes: d }
      }
      const Er = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const a = e[n ? 'scrollLeft' : 'scrollTop'],
          s = a + e[n ? 'offsetWidth' : 'offsetHeight'],
          i = t[n ? 'offsetLeft' : 'offsetTop'],
          o = i + t[n ? 'offsetWidth' : 'offsetHeight']
        return i > a && o < s
      }
      function Cr(e, t, n) {
        const a = n.current
        if (!a || t < 0) return
        const { visibleIndexes: s, allElements: i } = pr(a, e, 8, !0, !0)
        if (!i.length || !i[t]) return
        const o = s[0]
        if (!s.includes(t) || (t === o && !Er(a, i[o]))) {
          const e = t > s[s.length - 1] ? 'start' : 'end'
          ;(0, Vn.Z)(a, i[t], e, 10)
        }
      }
      function br(e) {
        let {
          isActive: t,
          isHorizontal: n,
          shouldSaveSelectionOnUpdateItems: s,
          shouldRemoveSelectionOnReset: i,
          noArrowNavigation: o,
          items: r,
          shouldSelectOnTab: l,
          onSelect: c,
          onClose: d,
        } = e
        const [m, u] = (0, a.eJ)(-1),
          h = (0, a.I4)((e) => (r ? (0, qt.Z)(r.length, e) : -1), [r]),
          P = (0, a.I4)(
            (e, t) => {
              t.preventDefault(), u((t) => h(t + e))
            },
            [u, h]
          ),
          Z = (0, a.I4)(
            (e) => {
              if (r && r.length && m > -1) {
                const t = r[m]
                if (t) {
                  if (!1 === c(t)) return !1
                  e.preventDefault()
                }
              }
              return !0
            },
            [r, c, m]
          ),
          v = !r || m > r.length - 1
        return (
          (0, a.d4)(() => {
            ;(s && !v) || u(i ? -1 : 0)
          }, [v, i, s]),
          (0, a.d4)(
            () =>
              t
                ? (0, la.Z)({
                    onEsc: d,
                    onUp: o || n ? void 0 : (e) => P(-1, e),
                    onDown: o || n ? void 0 : (e) => P(1, e),
                    onLeft: o || !n ? void 0 : (e) => P(-1, e),
                    onRight: o || !n ? void 0 : (e) => P(1, e),
                    onTab: l ? Z : void 0,
                    onEnter: Z,
                  })
                : void 0,
            [o, P, Z, t, n, d, l]
          ),
          m
        )
      }
      const fr = (0, a.X$)((e) => {
        let { isOpen: t, onClose: n, onInsertUserName: s, filteredUsers: o } = e
        const r = (0, a.sO)(null),
          { shouldRender: l, transitionClassNames: c } = (0, ue.Z)(t, void 0, void 0, !1),
          d = (0, a.I4)(
            function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              const n = (0, i.Rd)().users.byId,
                a = n[e]
              a && s(a, t)
            },
            [s]
          ),
          m = (0, a.I4)(
            (e) => {
              d(e.id, !0)
            },
            [d]
          ),
          u = br({
            isActive: t,
            items: o,
            onSelect: m,
            shouldSelectOnTab: !0,
            shouldSaveSelectionOnUpdateItems: !0,
            onClose: n,
          })
        ;(0, a.d4)(() => {
          Cr('.chat-item-clickable', u, r)
        }, [u]),
          (0, a.d4)(() => {
            o && !o.length && n()
          }, [o, n])
        const h = (0, T.Z)(o?.length ? o : void 0, l),
          P = o && !o.length ? h : o
        if (!l || (P && !P.length)) return
        const Z = (0, Q.Z)('MentionTooltip composer-tooltip custom-scroll', c)
        return a.ZP.createElement(
          'div',
          { className: Z, ref: r },
          P?.map((e, t) => {
            let { id: n } = e
            return a.ZP.createElement(
              Je.Z,
              {
                key: n,
                className: 'chat-item-clickable scroll-item',
                onClick: () => d(n),
                focus: u === t,
              },
              a.ZP.createElement(Ye.Z, { userId: n, avatarSize: 'small', withUsername: !0 })
            )
          })
        )
      })
      var Ir = n(19830),
        yr = n(67146),
        Sr = n(93219),
        kr = n(15376),
        Nr = n(47002),
        wr = n(62230)
      const Mr = 'FfTpBGrctDEiFLXC4aqP',
        Tr = 'y5JLmIFtCzK05l40rdHJ',
        Ar = 15 * u.Gw,
        Rr = (0, a.X$)((e) => {
          let {
            attachment: t,
            className: n,
            isSingle: s,
            shouldDisplayCompressed: i,
            shouldDisplayGrouped: o,
            index: r,
            onDelete: l,
            onToggleSpoiler: c,
          } = e
          const d = (function (e, t) {
              if (t && e.quick) {
                if (m.oGt.has(e.mimeType)) return 'image'
                if (m.wGh.has(e.mimeType)) return 'video'
              }
              return 'file'
            })(t, i),
            u = (0, a.I4)(() => {
              c?.(r)
            }, [r, c]),
            h = (0, a.Ye)(() => {
              switch (d) {
                case 'image':
                  return a.ZP.createElement('img', {
                    className: Mr,
                    src: t.blobUrl,
                    alt: '',
                    draggable: !1,
                  })
                case 'video':
                  return a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    Boolean(t.quick?.duration) &&
                      a.ZP.createElement(
                        'div',
                        { className: 'Igo3Vsou5areTsmh2Ng3' },
                        (0, Pe.k9)(t.quick.duration)
                      ),
                    a.ZP.createElement('video', {
                      className: Mr,
                      src: t.blobUrl,
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      disablePictureInPicture: !0,
                    })
                  )
                default:
                  return a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    a.ZP.createElement(Nr.Z, {
                      className: 'QAlzNLWBYdWR4UMMaiGm',
                      name: t.filename,
                      extension: (0, kr.mD)(t.filename, t.mimeType),
                      previewData: t.previewBlobUrl,
                      size: t.size,
                      smaller: !0,
                    }),
                    l &&
                      a.ZP.createElement('i', {
                        className: (0, Q.Z)('icon-delete', Tr, 'Qqp72_dWGSui9ORCN3MT'),
                        onClick: () => l(r),
                      })
                  )
              }
            }, [t, d, r, l]),
            P = 'file' === d || !o,
            Z = Boolean('file' !== d && t.shouldSendAsSpoiler),
            v = 'file' !== d,
            g = (0, Q.Z)(
              n,
              'ZqafRENXro3B4A2UTp9s',
              s && 'ZJNnn8HUzq8cC3WwTzY0',
              P && 'Aj1qc6z4t_pSWrsXi0qf'
            )
          return a.ZP.createElement(
            'div',
            { className: g },
            h,
            a.ZP.createElement(wr.Z, {
              isVisible: Z,
              thumbDataUri: t.previewBlobUrl || t.blobUrl,
              width: Ar,
              height: Ar,
            }),
            v &&
              a.ZP.createElement(
                'div',
                { className: 'YOoQRXIFINVsu3FFIKR0' },
                a.ZP.createElement('i', {
                  className: (0, Q.Z)(
                    t.shouldSendAsSpoiler ? 'icon-spoiler-disable' : 'icon-spoiler',
                    Tr
                  ),
                  onClick: u,
                }),
                l &&
                  a.ZP.createElement('i', {
                    className: (0, Q.Z)('icon-delete', Tr),
                    onClick: () => l(r),
                  })
              )
          )
        })
      var Lr = n(23522)
      const Fr = 'iWmxxlUXOjTzbvJzWF8g',
        xr = 'B5wzgwCPupbnO1XB5Rwc',
        Br = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { currentUserId: a, recentEmojis: s, customEmojis: i, attachmentSettings: o } = e,
              l = (0, r.Z1)(e, n),
              c = (0, r.FM)(e, n),
              { language: d, shouldSuggestCustomEmoji: u } = e.settings.byKey,
              h = e.emojiKeywords[m.pRL],
              P = d !== m.pRL ? e.emojiKeywords[d] : void 0
            return {
              isChatWithSelf: c,
              currentUserId: a,
              groupChatMembers: l?.fullInfo?.members,
              recentEmojis: s,
              baseEmojiKeywords: h?.keywords,
              emojiKeywords: P?.keywords,
              shouldSuggestCustomEmoji: u,
              customEmojiForEmoji: i.forEmoji.stickers,
              captionLimit: (0, hn.M)(e, 'captionLength'),
              attachmentSettings: o,
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              attachments: s,
              getHtml: o,
              canShowCustomSendMenu: r,
              captionLimit: l,
              isReady: d,
              isChatWithSelf: u,
              currentUserId: h,
              groupChatMembers: P,
              recentEmojis: Z,
              baseEmojiKeywords: v,
              emojiKeywords: g,
              shouldSchedule: p,
              shouldSuggestCustomEmoji: E,
              customEmojiForEmoji: C,
              attachmentSettings: b,
              shouldSuggestCompression: f,
              shouldForceCompression: y,
              shouldForceAsFile: S,
              isForCurrentMessageList: k,
              onAttachmentsUpdate: N,
              onCaptionUpdate: w,
              onSend: A,
              onFileAppend: R,
              onClear: L,
              onSendSilent: F,
              onSendScheduled: x,
              onCustomEmojiSelect: D,
              onRemoveSymbol: O,
              onEmojiSelect: _,
            } = e
            const {
                addRecentCustomEmoji: j,
                addRecentEmoji: G,
                updateAttachmentSettings: H,
              } = (0, i.Sv)(),
              X = (0, M.Z)(),
              q = (0, a.sO)(null),
              Y = (0, a.sO)(null),
              K = (0, a.sO)(),
              W = (0, T.Z)(s),
              ee = s.length ? s : W,
              { isMobile: te } = (0, U.ZP)(),
              [ne, ae, se] = (0, I.Z)(),
              [ie, oe] = (0, a.eJ)(null != f ? f : b.shouldCompress),
              re = Boolean((ie || y) && !S),
              [le, ce] = (0, a.eJ)(b.shouldSendGrouped),
              { handleScroll: de, isAtBeginning: me, isAtEnd: ue } = Pr(),
              { handleScroll: he, isAtBeginning: Pe } = Pr(),
              Ze = Boolean(s.length),
              ve = Boolean(ee?.length),
              [ge, pe, Ee] = (0, I.Z)()
            ;(0, a.d4)(() => {
              Ze || se()
            }, [se, Ze])
            const [Ce, be] = (0, a.Ye)(
                () =>
                  Boolean(ee?.every((e) => e.quick || e.audio))
                    ? [!0, !0]
                    : [Boolean(ee?.some((e) => e.quick || e.audio)), !1],
                [ee]
              ),
              [fe, Ie] = (0, a.Ye)(
                () =>
                  Boolean(ee?.every((e) => e.shouldSendAsSpoiler))
                    ? [!0, !0]
                    : [Boolean(ee?.some((e) => e.shouldSendAsSpoiler)), !1],
                [ee]
              ),
              ye = (0, Zr.Z)(`#${m.nYf}`),
              {
                isEmojiTooltipOpen: Se,
                filteredEmojis: ke,
                filteredCustomEmojis: Ne,
                insertEmoji: we,
                closeEmojiTooltip: Me,
              } = (0, mr.Z)(Boolean(d && k && ve), o, w, m.nYf, Z, v, g),
              {
                isCustomEmojiTooltipOpen: Te,
                insertCustomEmoji: Ae,
                closeCustomEmojiTooltip: Re,
              } = (0, hr.Z)(Boolean(d && k && ve && E), o, w, ye, Y, C),
              {
                isMentionTooltipOpen: Le,
                closeMentionTooltip: Fe,
                insertMention: xe,
                mentionFilteredUsers: Be,
              } = (0, dr.Z)(Boolean(d && k && ve), o, w, ye, Y, P, void 0, h)
            ;(0, a.d4)(() => (Ze ? (0, c.Z)(L) : void 0), [Ze, L]),
              (0, a.d4)(() => {
                Ze && (oe(null != f ? f : b.shouldCompress), ce(b.shouldSendGrouped))
              }, [b, Ze, f])
            const {
                isContextMenuOpen: De,
                handleContextMenu: Oe,
                handleContextMenuClose: Ue,
                handleContextMenuHide: _e,
              } = (0, ur.Z)(q, !r || !Ze),
              $e = (0, a.I4)(
                (e, t) => {
                  Ze &&
                    ((p || t ? x : e ? F : A)(re, le),
                    H({ shouldCompress: re, shouldSendGrouped: le }))
                },
                [Ze, p, x, F, A, re, le, H]
              ),
              je = (0, a.I4)(() => {
                $e(!0)
              }, [$e]),
              Ge = (0, a.I4)(() => {
                $e()
              }, [$e]),
              Ve = (0, a.I4)(() => {
                $e(!1, !0)
              }, [$e]),
              ze = (0, a.I4)(
                async (e) => {
                  e.preventDefault(), Ee()
                  const { dataTransfer: t } = e,
                    n = await (0, rr.Z)(t.items)
                  n?.length && R(n, Ie)
                },
                [Ie, R, Ee]
              ),
              He = (0, a.I4)(
                (e) => {
                  const { files: t } = e.target,
                    n = (0, B.ox)(t)
                  n?.length && R(n, Ie)
                },
                [Ie, R]
              ),
              Xe = (0, a.I4)(() => {
                ;(0, Xs.g)('*', (e) => He(e))
              }, [He]),
              Je = (0, a.I4)(
                (e) => {
                  N(s.filter((t, n) => n !== e))
                },
                [s, N]
              ),
              qe = (0, a.I4)(() => {
                N(s.map((e) => ({ ...e, shouldSendAsSpoiler: !0 })))
              }, [s, N]),
              Ye = (0, a.I4)(() => {
                N(s.map((e) => ({ ...e, shouldSendAsSpoiler: void 0 })))
              }, [s, N]),
              Ke = (0, a.I4)(
                (e) => {
                  N(
                    s.map((t, n) =>
                      n === e ? { ...t, shouldSendAsSpoiler: !t.shouldSendAsSpoiler || void 0 } : t
                    )
                  )
                },
                [s, N]
              ),
              We = (0, a.Ye)(
                () => (e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      ripple: !te,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : '',
                      onClick: t,
                      ariaLabel: 'More actions',
                    },
                    a.ZP.createElement('i', { className: 'icon-more' })
                  )
                },
                [te]
              ),
              Qe = (0, vr.Z)(() => {
                if (!ve) return
                const e =
                  l -
                  ((t = o()),
                  (cr.innerHTML = t),
                  (0, lr.fu)(cr),
                  cr.querySelectorAll('br').forEach((e) => {
                    e.replaceWith('\n')
                  }),
                  cr.textContent?.trim().length || 0)
                var t
                return e <= 100 ? e : void 0
              }, [l, o, ve]),
              et = re && be,
              [tt, nt, at] = (0, a.Ye)(
                () =>
                  et && ee
                    ? [
                        ee.every((e) => m.oGt.has(e.mimeType)),
                        ee.every((e) => m.wGh.has(e.mimeType)),
                        ee.every((e) => m.e74.has(e.mimeType)),
                      ]
                    : [!1, !1, !1],
                [ee, et]
              )
            if (!ee) return
            const st = ee.length > 1
            let it = ''
            it = X(
              tt
                ? 'PreviewSender.SendPhoto'
                : nt
                ? 'PreviewSender.SendVideo'
                : at
                ? 'PreviewSender.SendAudio'
                : 'PreviewSender.SendFile',
              ee.length,
              'i'
            )
            const ot = !ue || !Pe
            return a.ZP.createElement(
              J.Z,
              {
                isOpen: Ze,
                onClose: L,
                header: (function () {
                  if (ee)
                    return a.ZP.createElement(
                      'div',
                      { className: 'modal-header-condensed', dir: X.isRtl ? 'rtl' : void 0 },
                      a.ZP.createElement(
                        $.Z,
                        {
                          round: !0,
                          color: 'translucent',
                          size: 'smaller',
                          ariaLabel: 'Cancel attachments',
                          onClick: L,
                        },
                        a.ZP.createElement('i', { className: 'icon-close' })
                      ),
                      a.ZP.createElement('div', { className: 'modal-title' }, it),
                      a.ZP.createElement(
                        V.Z,
                        {
                          className: 'attachment-modal-more-menu with-menu-transitions',
                          trigger: We,
                          positionX: 'right',
                        },
                        a.ZP.createElement(z.Z, { icon: 'add', onClick: Xe }, X('Add')),
                        Ce &&
                          a.ZP.createElement(
                            a.ZP.Fragment,
                            null,
                            !S &&
                              !y &&
                              (re
                                ? a.ZP.createElement(
                                    z.Z,
                                    { icon: 'document', onClick: () => oe(!1) },
                                    X(st ? 'Attachment.SendAsFiles' : 'Attachment.SendAsFile')
                                  )
                                : a.ZP.createElement(
                                    z.Z,
                                    { icon: 'photo', onClick: () => oe(!0) },
                                    st ? 'Send All as Media' : 'Send as Media'
                                  )),
                            re &&
                              (fe
                                ? a.ZP.createElement(
                                    z.Z,
                                    { icon: 'spoiler-disable', onClick: Ye },
                                    X('Attachment.DisableSpoiler')
                                  )
                                : a.ZP.createElement(
                                    z.Z,
                                    { icon: 'spoiler', onClick: qe },
                                    X('Attachment.EnableSpoiler')
                                  ))
                          ),
                        st &&
                          (le
                            ? a.ZP.createElement(
                                z.Z,
                                { icon: 'grouped-disable', onClick: () => ce(!1) },
                                'Ungroup All Media'
                              )
                            : a.ZP.createElement(
                                z.Z,
                                { icon: 'grouped', onClick: () => ce(!0) },
                                'Group All Media'
                              ))
                      )
                    )
                })(),
                className: (0, Q.Z)(
                  'VncEpkgqABgA8MUCarxh',
                  ge && xr,
                  !me && 'u08mL9ikB7S0oRZKxvsA',
                  te && 'EBYYWwiG6Uj4Aqt4DKGy',
                  ne && 'eVLBe8iLKwjR6B31YwJj'
                ),
                noBackdropClose: !0,
              },
              a.ZP.createElement(
                'div',
                {
                  className: Fr,
                  onDragEnter: pe,
                  onDrop: ze,
                  onDragOver: function (e) {
                    e.preventDefault(),
                      K.current && (window.clearTimeout(K.current), (K.current = void 0))
                  },
                  onDragLeave: (e) => {
                    const { relatedTarget: t, target: n } = e
                    n.matches('.iWmxxlUXOjTzbvJzWF8g') &&
                      !t &&
                      (K.current = window.setTimeout(Ee, 150)),
                      (n && n.closest('.B5wzgwCPupbnO1XB5Rwc')) || (t && e.stopPropagation(), Ee())
                  },
                  onClick: Ee,
                  'data-attach-description': X('Preview.Dragging.AddItems', 10),
                  'data-dropzone': !0,
                },
                a.ZP.createElement(
                  'div',
                  {
                    className: (0, Q.Z)(
                      'd_uMaJ26HlkCfSn5XiQp',
                      'custom-scroll',
                      ot && 'DUGHCuTKi7H5d_1_vYqj'
                    ),
                    onScroll: de,
                  },
                  ee.map((e, t) =>
                    a.ZP.createElement(Rr, {
                      attachment: e,
                      shouldDisplayCompressed: re,
                      shouldDisplayGrouped: le,
                      isSingle: 1 === ee.length,
                      index: t,
                      key: e.uniqueId || t,
                      onDelete: Je,
                      onToggleSpoiler: Ke,
                    })
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)('BKyeut4mBbq_uw8uGfSU', ot && 'UrYInfws7roRktEiMxvT') },
                  a.ZP.createElement(fr, {
                    isOpen: Le,
                    filteredUsers: Be,
                    onInsertUserName: xe,
                    onClose: Fe,
                  }),
                  a.ZP.createElement(Ir.Z, {
                    isOpen: Se,
                    emojis: ke,
                    customEmojis: Ne,
                    addRecentEmoji: G,
                    addRecentCustomEmoji: j,
                    onEmojiSelect: we,
                    onCustomEmojiSelect: we,
                    onClose: Me,
                  }),
                  a.ZP.createElement(Sr.Z, {
                    chatId: t,
                    isOpen: Te,
                    addRecentCustomEmoji: j,
                    onCustomEmojiSelect: Ae,
                    onClose: Re,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: 'c4dyk1Emgpla8BvDJMAz' },
                    a.ZP.createElement(Lr.Z, {
                      chatId: t,
                      threadId: n,
                      isMobile: te,
                      isReady: d,
                      isSymbolMenuOpen: ne,
                      openSymbolMenu: ae,
                      closeSymbolMenu: se,
                      onCustomEmojiSelect: D,
                      onRemoveSymbol: O,
                      onEmojiSelect: _,
                      isAttachmentModal: !0,
                      canSendPlainText: !0,
                      className: 'attachment-modal-symbol-menu with-menu-transitions',
                    }),
                    a.ZP.createElement(gr.Z, {
                      ref: Y,
                      id: 'caption-input-text',
                      chatId: t,
                      threadId: n,
                      isAttachmentModalInput: !0,
                      isActive: Ze,
                      getHtml: o,
                      editableInputId: m.nYf,
                      placeholder: X('AddCaption'),
                      onUpdate: w,
                      onSend: Ge,
                      onScroll: he,
                      canAutoFocus: Boolean(d && k && s.length),
                      captionLimit: Qe,
                      shouldSuppressFocus: te && ne,
                      onSuppressedFocus: se,
                    }),
                    a.ZP.createElement(
                      'div',
                      { className: 'z4wF5bBjL74eNUj_UYeu' },
                      a.ZP.createElement(
                        $.Z,
                        {
                          ref: q,
                          className: 'eFD46lVH5GCILXEOx9BO',
                          onClick: Ge,
                          onContextMenu: r ? Oe : void 0,
                        },
                        X(p ? 'Next' : 'Send')
                      ),
                      r &&
                        a.ZP.createElement(yr.Z, {
                          isOpen: De,
                          onSendSilent: u ? void 0 : je,
                          onSendSchedule: Ve,
                          onClose: Ue,
                          onCloseAnimationEnd: _e,
                          isSavedMessages: u,
                        })
                    )
                  )
                )
              )
            )
          })
        ),
        Dr = (0, a.X$)((e) => {
          let { isOpen: t, isQuiz: n, shouldBeAnonymous: s, onSend: i, onClear: o } = e
          const r = (0, a.sO)(null),
            l = (0, a.sO)(null),
            d = (0, a.sO)(null),
            [m, u] = (0, a.eJ)(''),
            [h, P] = (0, a.eJ)(['']),
            [Z, v] = (0, a.eJ)(!0),
            [g, p] = (0, a.eJ)(!1),
            [E, C] = (0, a.eJ)(n || !1),
            [b, f] = (0, a.eJ)(''),
            [I, y] = (0, a.eJ)(),
            [S, k] = (0, a.eJ)(!1),
            N = (0, M.Z)(),
            w = (0, a.I4)(
              (e) => {
                t && e.current && e.current.focus()
              },
              [t]
            )
          ;(0, a.d4)(() => (t ? (0, c.Z)(o) : void 0), [t, o]),
            (0, a.d4)(() => {
              t || (u(''), P(['']), v(!0), p(!1), C(n || !1), f(''), y(void 0), k(!1))
            }, [n, t]),
            (0, a.d4)(() => w(r), [w, t]),
            (0, a.bt)(() => {
              const e = d.current
              e && b !== e.innerHTML && (e.innerHTML = b)
            }, [b])
          const T = (0, a.I4)(function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              P([...e, '']),
                requestAnimationFrame(() => {
                  const e = l.current
                  e &&
                    (e.classList.toggle('overflown', e.scrollHeight > 320),
                    e.scrollTo({ top: e.scrollHeight, behavior: 'smooth' }))
                })
            }, []),
            A = (0, a.I4)(() => {
              if ((k(!1), !t)) return
              const e = m.trim().substring(0, 255),
                n = h.map((e) => e.trim().substring(0, 100)).filter((e) => e.length)
              if (!e || n.length < 2)
                return u(e), n.length ? (n.length < 2 ? T(n) : P(n)) : T(), void k(!0)
              if (E && (void 0 === I || !n[I])) return void k(!0)
              const a = {
                summary: {
                  question: e,
                  answers: n.map((e, t) => ({
                    text: e.trim(),
                    option: String(t),
                    ...(t === I && { correct: !0 }),
                  })),
                  ...(!Z && { isPublic: !0 }),
                  ...(g && { multipleChoice: !0 }),
                  ...(E && { quiz: !0 }),
                },
              }
              if (E) {
                const { text: e, entities: t } = (b && (0, lr.ZP)(b.substring(0, 200))) || {}
                a.quiz = {
                  correctAnswers: [String(I)],
                  ...(e && { solution: e }),
                  ...(t && { solutionEntities: t }),
                }
              }
              i(a)
            }, [t, m, h, E, I, Z, g, i, T, b]),
            R = (0, a.I4)(
              (e, t) => {
                const n = [...h]
                ;(n[e] = t), n[n.length - 1].trim().length && n.length < 10 ? T(n) : P(n)
              },
              [h, T]
            ),
            L = (0, a.I4)(
              (e) => {
                const t = [...h]
                t.splice(e, 1),
                  P(t),
                  void 0 !== I && (I === e ? y(void 0) : e < I && y(I - 1)),
                  requestAnimationFrame(() => {
                    l.current &&
                      l.current.classList.toggle('overflown', l.current.scrollHeight > 320)
                  })
              },
              [I, h]
            ),
            F = (0, a.I4)(
              (e) => {
                y(Number(e))
              },
              [y]
            ),
            x = (0, a.I4)((e) => {
              v(e.target.checked)
            }, []),
            B = (0, a.I4)((e) => {
              p(e.target.checked)
            }, []),
            D = (0, a.I4)((e) => {
              C(e.target.checked)
            }, []),
            O = (0, a.I4)(
              (e) => {
                13 === e.keyCode && A()
              },
              [A]
            ),
            U = (0, a.I4)((e) => {
              u(e.target.value)
            }, []),
            _ = (0, a.I4)(() => {
              if (S && !m.trim().length) return N('lng_polls_choose_question')
            }, [S, N, m]),
            j = (0, a.I4)(
              (e) => {
                const t = h.map((e) => e.trim()).filter((e) => e.length)
                if (S && t.length < 2 && !h[e].trim().length) return N('lng_polls_choose_answers')
              },
              [S, N, h]
            )
          function G() {
            return h.map((e, t) =>
              a.ZP.createElement(
                'div',
                { className: 'option-wrapper' },
                a.ZP.createElement(He.Z, {
                  label:
                    t !== h.length - 1 || 10 === h.length
                      ? N('OptionHint')
                      : N('CreatePoll.AddOption'),
                  error: j(t),
                  value: e,
                  onChange: (e) => R(t, e.currentTarget.value),
                  onKeyPress: O,
                }),
                t !== h.length - 1 &&
                  a.ZP.createElement(
                    $.Z,
                    {
                      className: 'option-remove-button',
                      round: !0,
                      color: 'translucent',
                      size: 'smaller',
                      ariaLabel: N('Delete'),
                      onClick: () => L(t),
                    },
                    a.ZP.createElement('i', { className: 'icon-close' })
                  )
              )
            )
          }
          return a.ZP.createElement(
            J.Z,
            {
              isOpen: t,
              onClose: o,
              header: a.ZP.createElement(
                'div',
                { className: 'modal-header-condensed' },
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    color: 'translucent',
                    size: 'smaller',
                    ariaLabel: 'Cancel poll creation',
                    onClick: o,
                  },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                a.ZP.createElement('div', { className: 'modal-title' }, N('NewPoll')),
                a.ZP.createElement(
                  $.Z,
                  {
                    color: 'primary',
                    size: 'smaller',
                    className: 'modal-action-button',
                    onClick: A,
                  },
                  N('Create')
                )
              ),
              className: 'PollModal',
            },
            a.ZP.createElement(He.Z, {
              ref: r,
              label: N('AskAQuestion'),
              value: m,
              error: _(),
              onChange: U,
              onKeyPress: O,
            }),
            a.ZP.createElement('div', { className: 'options-divider' }),
            a.ZP.createElement(
              'div',
              { className: 'options-list custom-scroll', ref: l },
              a.ZP.createElement('h3', { className: 'options-header' }, N('PollOptions')),
              S &&
                (function () {
                  const e = h.map((e) => e.trim()).filter((e) => e.length)
                  return (
                    E &&
                    (void 0 === I || !e[I]) &&
                    a.ZP.createElement(
                      'p',
                      { className: 'poll-error' },
                      N('lng_polls_choose_correct')
                    )
                  )
                })(),
              E
                ? a.ZP.createElement(js.Z, {
                    name: 'correctOption',
                    options: G().map((e, t) => ({
                      value: String(t),
                      label: e,
                      hidden: t === h.length - 1,
                    })),
                    selected: String(I),
                    onChange: F,
                  })
                : G()
            ),
            a.ZP.createElement('div', { className: 'options-divider' }),
            a.ZP.createElement(
              'div',
              { className: 'quiz-mode' },
              !s &&
                a.ZP.createElement(ht.Z, { label: N('PollAnonymous'), checked: Z, onChange: x }),
              a.ZP.createElement(ht.Z, {
                label: N('PollMultiple'),
                checked: g,
                disabled: E,
                onChange: B,
              }),
              a.ZP.createElement(ht.Z, {
                label: N('PollQuiz'),
                checked: E,
                disabled: g || void 0 !== n,
                onChange: D,
              }),
              E &&
                a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement(
                    'h3',
                    { className: 'options-header' },
                    N('lng_polls_solution_title')
                  ),
                  a.ZP.createElement('div', {
                    ref: d,
                    className: 'form-control',
                    contentEditable: !0,
                    dir: 'auto',
                    onChange: (e) => f(e.currentTarget.innerHTML),
                  }),
                  a.ZP.createElement('div', { className: 'note' }, N('CreatePoll.ExplanationInfo'))
                )
            )
          )
        })
      var Or = n(56503),
        Ur = n(34284)
      const _r = (0, a.X$)((e) => {
          let { emoji: t, focus: n, onClick: s } = e
          const i = (0, a.I4)(
              (e) => {
                e.preventDefault(), s(t.native, t.id)
              },
              [t, s]
            ),
            o = (0, Q.Z)('EmojiButton', n && 'focus'),
            r = `./img-apple-64/${t.image}.png`,
            l = Ur.Uz.has(r)
          return a.ZP.createElement(
            'div',
            { className: o, onMouseDown: i, title: `:${t.names[0]}:` },
            d.op
              ? t.native
              : a.ZP.createElement('img', {
                  src: r,
                  className: l ? void 0 : 'opacity-transition shown',
                  alt: t.native,
                  loading: 'lazy',
                  'data-path': r,
                  onLoad: l ? void 0 : Ur.mE,
                })
          )
        }),
        $r = (0, a.X$)((e) => {
          let {
            category: t,
            index: n,
            allEmojis: s,
            observeIntersection: i,
            shouldRender: o,
            onEmojiSelect: r,
          } = e
          const l = (0, a.sO)(null)
          ;(0, Hn._N)(l, i)
          const c = (0, $t.Z)(o),
            d = (0, M.Z)(),
            { isMobile: u } = (0, U.ZP)(),
            h = u ? Math.floor((P.Z.get().width - 8) / 50) : 8,
            Z = 50 * Math.ceil(t.emojis.length / h)
          return a.ZP.createElement(
            'div',
            { ref: l, key: t.id, id: `emoji-category-${n}`, className: 'symbol-set' },
            a.ZP.createElement(
              'div',
              { className: 'symbol-set-header' },
              a.ZP.createElement(
                'p',
                { className: 'symbol-set-name', dir: 'auto' },
                d(t.id === m.s38 ? 'RecentStickers' : `Emoji${n}`)
              )
            ),
            a.ZP.createElement(
              'div',
              {
                className: (0, Q.Z)('symbol-set-container', c),
                style: `height: ${Z}px;`,
                dir: d.isRtl ? 'rtl' : void 0,
              },
              o &&
                t.emojis.map((e) => {
                  const t = s[e]
                  if (!t) return
                  const n = 'id' in t ? t : t[1]
                  return a.ZP.createElement(_r, { key: n.id, emoji: n, onClick: r })
                })
            )
          )
        }),
        jr = {
          recent: 'icon-recent',
          people: 'icon-smile',
          nature: 'icon-animals',
          foods: 'icon-eats',
          activity: 'icon-sport',
          places: 'icon-car',
          objects: 'icon-lamp',
          symbols: 'icon-language',
          flags: 'icon-flag',
        },
        Gr = []
      let Vr, zr, Hr
      const Xr = (0, a.X$)(
        (0, i.c$)((e) => (0, $e.ei)(e, ['recentEmojis']))((e) => {
          let { className: t, recentEmojis: s, onEmojiSelect: i } = e
          const o = (0, a.sO)(null),
            r = (0, a.sO)(null),
            [l, c] = (0, a.eJ)(),
            [u, h] = (0, a.eJ)(),
            [P, Z] = (0, a.eJ)(0),
            { isMobile: v } = (0, U.ZP)(),
            { observe: g } = (0, Hn.S1)({ rootRef: o, throttleMs: 200 }, (e) => {
              e.forEach((e) => {
                const { id: t } = e.target
                if (!t || !t.startsWith('emoji-category-')) return
                const n = Number(t.replace('emoji-category-', ''))
                Gr[n] = e.isIntersecting
              })
              const t = Gr.map((e, t) => ({ index: t, isIntersecting: e })).filter((e) => {
                let { isIntersecting: t } = e
                return t
              })
              t.length && Z(t[Math.floor(t.length / 2)].index)
            }),
            p = (0, zn.Z)([], m.kUR),
            E = u && p
          ;(0, Xn.Z)(r, !(v && E)),
            (0, a.d4)(() => {
              if (!l) return
              const e = r.current
              if (!e) return
              const t = 42 * P - e.offsetWidth / 2 + 21
              ;(0, Lt.Z)(e, t)
            }, [l, P])
          const C = (0, M.Z)(),
            b = (0, a.Ye)(() => {
              if (!l) return Gn.D
              const e = [...l]
              return s?.length && e.unshift({ id: m.s38, name: C('RecentStickers'), emojis: s }), e
            }, [l, C, s])
          ;(0, a.d4)(() => {
            setTimeout(() => {
              const e = () => {
                c(Hr.categories), h(Hr.emojis)
              }
              Hr
                ? e()
                : (async function () {
                    return (
                      Vr ||
                        ((Vr = n.e(7501).then(n.t.bind(n, 47501, 19))),
                        (zr = (await Vr).default),
                        (Hr = (0, Ur.NM)(zr))),
                      Vr
                    )
                  })().then(e)
            }, 200)
          }, [])
          const f = (0, a.I4)((e) => {
              Z(e)
              const t = o.current.closest('.SymbolMenu-main').querySelector(`#emoji-category-${e}`)
              ;(0, Vn.Z)(o.current, t, 'start', 50, 800)
            }, []),
            I = (0, a.I4)(
              (e, t) => {
                i(e, t)
              },
              [i]
            ),
            y = (0, Q.Z)('EmojiPicker', t)
          return E
            ? a.ZP.createElement(
                'div',
                { className: y },
                a.ZP.createElement(
                  'div',
                  { ref: r, className: 'EmojiPicker-header', dir: C.isRtl ? 'rtl' : '' },
                  b.map(function (e, t) {
                    const n = jr[e.id]
                    return (
                      n &&
                      a.ZP.createElement(
                        $.Z,
                        {
                          className: 'symbol-set-button ' + (t === P ? 'activated' : ''),
                          round: !0,
                          faded: !0,
                          color: 'translucent',
                          onClick: () => f(t),
                          ariaLabel: e.name,
                        },
                        a.ZP.createElement('i', { className: n })
                      )
                    )
                  })
                ),
                a.ZP.createElement(
                  'div',
                  {
                    ref: o,
                    className: (0, Q.Z)(
                      'EmojiPicker-main no-selection',
                      d.$b ? 'no-scrollbar' : 'custom-scroll'
                    ),
                  },
                  b.map((e, t) =>
                    a.ZP.createElement($r, {
                      category: e,
                      index: t,
                      allEmojis: u,
                      observeIntersection: g,
                      shouldRender: P >= t - 1 && P <= t + 1,
                      onEmojiSelect: I,
                    })
                  )
                )
              )
            : a.ZP.createElement('div', { className: y }, a.ZP.createElement(ze.Z, null))
        })
      )
      var Jr = n(56389)
      const qr = [],
        Yr = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { setsById: a, added: s, recent: i, favorite: o, premiumSet: l } = e.stickers,
              c = (0, r.FM)(e, n)
            return {
              chat: (0, r.Z1)(e, n),
              recentStickers: i.stickers,
              favoriteStickers: o.stickers,
              premiumStickers: l.stickers,
              stickerSetsById: a,
              addedSetIds: s.setIds,
              canAnimate: e.settings.byKey.shouldLoopStickers,
              isSavedMessages: c,
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              chat: t,
              threadId: n,
              className: s,
              loadAndPlay: o,
              canSendStickers: r,
              recentStickers: l,
              favoriteStickers: c,
              premiumStickers: u,
              addedSetIds: h,
              stickerSetsById: P,
              canAnimate: Z,
              isSavedMessages: v,
              isCurrentUserPremium: g,
              onStickerSelect: p,
            } = e
            const {
                loadRecentStickers: E,
                addRecentSticker: C,
                unfaveSticker: b,
                faveSticker: f,
                removeRecentSticker: I,
              } = (0, i.Sv)(),
              y = (0, a.sO)(null),
              S = (0, a.sO)(null),
              k = (0, a.sO)(null),
              [N, w] = (0, a.eJ)(0),
              T = (0, Jr.Z)(t.id, n),
              { observe: A } = (0, Hn.S1)({ rootRef: y, throttleMs: 200 }, (e) => {
                e.forEach((e) => {
                  const { id: t } = e.target
                  if (!t || !t.startsWith('sticker-set-')) return
                  const n = Number(t.replace('sticker-set-', ''))
                  qr[n] = e.isIntersecting
                })
                const t = qr
                  .map((e, t) => ({ index: t, isIntersecting: e }))
                  .filter((e) => {
                    let { isIntersecting: t } = e
                    return t
                  })
                t.length && w(t[Math.floor(t.length / 2)].index)
              }),
              { observe: R } = (0, Hn.S1)({ rootRef: S }),
              L = (0, M.Z)(),
              F = Boolean(h),
              x = (0, a.Ye)(() => {
                if (!h) return Gn.D
                const e = [],
                  n = Object.values((0, $e.q0)(P, h))
                if (
                  (c.length &&
                    e.push({
                      id: m.ka7,
                      accessHash: '0',
                      title: L('FavoriteStickers'),
                      stickers: c,
                      count: c.length,
                    }),
                  l.length &&
                    e.push({
                      id: m.s38,
                      accessHash: '0',
                      title: L('RecentStickers'),
                      stickers: l,
                      count: l.length,
                    }),
                  g)
                ) {
                  const t = n
                      .map((e) => {
                        let { stickers: t } = e
                        return t?.filter((e) => e.hasEffect)
                      })
                      .flat()
                      .filter(Boolean),
                    a = (0, $e.od)([...t, ...u], 'id')
                  a.length &&
                    e.push({
                      id: m.BRs,
                      accessHash: '0',
                      title: L('PremiumStickers'),
                      stickers: a,
                      count: a.length,
                    })
                }
                if (t?.fullInfo?.stickerSet) {
                  const n = P[t.fullInfo.stickerSet.id]
                  n &&
                    e.push({
                      id: m.dWG,
                      accessHash: n.accessHash,
                      title: L('GroupStickers'),
                      stickers: n.stickers,
                      count: n.stickers.length,
                    })
                }
                return [...e, ...n]
              }, [h, P, c, l, g, t, L, u]),
              B = (0, a.Ye)(() => F && 0 === x.filter((e) => e.stickers?.length).length, [x, F])
            ;(0, a.d4)(() => {
              o && (E(), r && T({ type: 'chooseSticker' }))
            }, [r, o, E, T])
            const D = (0, zn.Z)([], m.Yan),
              O = F && D && !B && r
            ;(0, Xn.Z)(S, !O),
              (0, a.d4)(() => {
                if (!F) return
                const e = S.current
                if (!e) return
                const t = 52 * N - (e.offsetWidth / 2 - 26)
                ;(0, Lt.Z)(e, t)
              }, [F, N])
            const U = (0, a.I4)((e) => {
                w(e)
                const t = document.getElementById(`sticker-set-${e}`)
                ;(0, Vn.Z)(y.current, t, 'start', void 0, 500)
              }, []),
              _ = (0, a.I4)(
                (e, t, n) => {
                  p(e, t, n, !0), C({ sticker: e })
                },
                [C, p]
              ),
              j = (0, a.I4)(
                (e) => {
                  b({ sticker: e })
                },
                [b]
              ),
              G = (0, a.I4)(
                (e) => {
                  f({ sticker: e })
                },
                [f]
              ),
              V = (0, a.I4)(() => {
                r && T({ type: 'chooseSticker' })
              }, [r, T]),
              z = (0, a.I4)(
                (e) => {
                  I({ sticker: e })
                },
                [I]
              ),
              H = (0, Q.Z)('StickerPicker', s)
            return O
              ? a.ZP.createElement(
                  'div',
                  { className: H },
                  a.ZP.createElement(
                    'div',
                    { ref: S, className: 'StickerPicker-header no-selection no-scrollbar' },
                    a.ZP.createElement(
                      'div',
                      { className: 'shared-canvas-container' },
                      a.ZP.createElement('canvas', { ref: k, className: 'shared-canvas' }),
                      x.map(function (e, n) {
                        const s = e.stickers?.[0],
                          i = (0, Q.Z)(
                            'symbol-set-button sticker-set-button',
                            n === N && 'activated'
                          ),
                          r = n < m.uaz
                        return e.id === m.s38 ||
                          e.id === m.ka7 ||
                          e.id === m.dWG ||
                          e.id === m.BRs ||
                          e.hasThumbnail ||
                          !s
                          ? a.ZP.createElement(
                              $.Z,
                              {
                                key: e.id,
                                className: i,
                                ariaLabel: e.title,
                                round: !0,
                                faded: e.id === m.s38 || e.id === m.ka7,
                                color: 'translucent',
                                onClick: () => U(n),
                              },
                              e.id === m.BRs
                                ? a.ZP.createElement(cs.Z, { withGradient: !0, big: !0 })
                                : e.id === m.s38
                                ? a.ZP.createElement('i', { className: 'icon-recent' })
                                : e.id === m.ka7
                                ? a.ZP.createElement('i', { className: 'icon-favorite' })
                                : e.id === m.dWG
                                ? a.ZP.createElement(De.Z, { chat: t, size: 'small' })
                                : a.ZP.createElement(Qn, {
                                    stickerSet: e,
                                    noAnimate: !Z || !o,
                                    observeIntersection: R,
                                    sharedCanvasRef: r ? k : void 0,
                                  })
                            )
                          : a.ZP.createElement(Jn.Z, {
                              key: e.id,
                              sticker: s,
                              size: m.DC_,
                              title: e.title,
                              className: i,
                              noAnimate: !Z || !o,
                              observeIntersection: R,
                              noContextMenu: !0,
                              isCurrentUserPremium: !0,
                              sharedCanvasRef: r ? k : void 0,
                              onClick: U,
                              clickArg: n,
                            })
                      })
                    )
                  ),
                  a.ZP.createElement(
                    'div',
                    {
                      ref: y,
                      onMouseMove: V,
                      className: (0, Q.Z)(
                        'StickerPicker-main no-selection',
                        d.$b ? 'no-scrollbar' : 'custom-scroll'
                      ),
                    },
                    x.map((e, t) =>
                      a.ZP.createElement(Kn, {
                        key: e.id,
                        stickerSet: e,
                        loadAndPlay: Boolean(Z && o),
                        index: t,
                        observeIntersection: A,
                        shouldRender: N >= t - 1 && N <= t + 1,
                        favoriteStickers: c,
                        isSavedMessages: v,
                        isCurrentUserPremium: g,
                        onStickerSelect: _,
                        onStickerUnfave: j,
                        onStickerFave: G,
                        onStickerRemoveRecent: z,
                      })
                    )
                  )
                )
              : a.ZP.createElement(
                  'div',
                  { className: H },
                  r
                    ? B
                      ? a.ZP.createElement('div', { className: 'picker-disabled' }, L('NoStickers'))
                      : a.ZP.createElement(ze.Z, null)
                    : a.ZP.createElement(
                        'div',
                        { className: 'picker-disabled' },
                        L('ErrorSendRestrictedStickersAll')
                      )
                )
          })
        )
      var Kr = n(30386)
      function Wr() {
        return (
          (Wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          Wr.apply(this, arguments)
        )
      }
      const Qr = (0, a.X$)((e) => {
          let {
            gif: t,
            isDisabled: n,
            className: s,
            observeIntersection: i,
            onClick: o,
            onUnsaveClick: r,
            isSavedMessages: l,
          } = e
          const c = (0, a.sO)(null),
            m = (0, M.Z)(),
            u = `gif${t.id}`,
            h = (0, Hn.Op)(c, i) && !n,
            P = (0, R.Z)(`${u}?size=m`, !h, A.IU.BlobUrl),
            [Z] = (0, a.eJ)(t.thumbnail?.dataUri && !P),
            v = (0, _t.Z)(t.thumbnail?.dataUri, !Z),
            g = (0, R.Z)(u, !h, A.IU.BlobUrl),
            p = Boolean(h && g),
            { isBuffered: E, bufferingHandlers: C } = (0, me.Z)(!0),
            b = h && !E,
            f = h && E,
            {
              isContextMenuOpen: I,
              contextMenuPosition: y,
              handleBeforeContextMenu: S,
              handleContextMenu: k,
              handleContextMenuClose: N,
              handleContextMenuHide: w,
            } = (0, ur.Z)(c),
            T = (0, a.I4)(() => c.current, []),
            L = (0, a.I4)(() => c.current.closest('.custom-scroll, .no-scrollbar'), []),
            F = (0, a.I4)(() => c.current.querySelector('.gif-context-menu .bubble'), []),
            {
              positionX: x,
              positionY: B,
              transformOriginX: D,
              transformOriginY: O,
              style: U,
            } = (0, $o.Z)(y, T, L, F),
            _ = (0, a.I4)(() => {
              !I && o && o({ ...t, blobUrl: g })
            }, [I, o, t, g]),
            j = (0, a.I4)(
              (e) => {
                e.stopPropagation(), e.preventDefault(), r(t)
              },
              [r, t]
            ),
            G = (0, a.I4)(() => {
              r?.(t)
            }, [t, r]),
            V = (0, a.I4)(() => {
              o({ ...t, blobUrl: g }, !0)
            }, [t, o, g]),
            H = (0, a.I4)(() => {
              o({ ...t, blobUrl: g }, void 0, !0)
            }, [t, o, g]),
            X = (0, a.I4)(
              (e) => {
                ;(0, Kr.b)(e), S(e)
              },
              [S]
            )
          ;(0, a.d4)(() => {
            n && N()
          }, [N, n])
          const J = (0, Q.Z)(
            'GifButton',
            t.width && t.height && t.width < t.height ? 'vertical' : 'horizontal',
            o && 'interactive',
            u,
            s
          )
          return a.ZP.createElement(
            'div',
            { ref: c, className: J, onMouseDown: X, onClick: _, onContextMenu: k },
            !d.$b &&
              r &&
              a.ZP.createElement(
                $.Z,
                { className: 'gif-unsave-button', color: 'dark', pill: !0, onClick: j },
                a.ZP.createElement('i', { className: 'icon-close gif-unsave-button-icon' })
              ),
            Z &&
              a.ZP.createElement('canvas', {
                ref: v,
                className: 'thumbnail',
                style: f ? 'display: none;' : void 0,
              }),
            P && !f && a.ZP.createElement('img', { src: P, alt: '', className: 'preview' }),
            p &&
              a.ZP.createElement(
                Gt.Z,
                Wr(
                  {
                    canPlay: !0,
                    src: g,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    disablePictureInPicture: !0,
                    playsInline: !0,
                    preload: 'none',
                  },
                  C
                )
              ),
            b && a.ZP.createElement(ce.Z, { color: P || Z ? 'white' : 'black' }),
            o &&
              void 0 !== y &&
              a.ZP.createElement(
                ge.Z,
                {
                  isOpen: I,
                  transformOriginX: D,
                  transformOriginY: O,
                  positionX: x,
                  positionY: B,
                  style: U,
                  className: 'gif-context-menu',
                  autoClose: !0,
                  onClose: N,
                  onCloseAnimationEnd: w,
                },
                !l && a.ZP.createElement(z.Z, { onClick: V, icon: 'mute' }, m('SendWithoutSound')),
                a.ZP.createElement(
                  z.Z,
                  { onClick: H, icon: 'calendar' },
                  m(l ? 'SetReminder' : 'ScheduleMessage')
                ),
                r &&
                  a.ZP.createElement(
                    z.Z,
                    { destructive: !0, icon: 'delete', onClick: G },
                    m('Delete')
                  )
              )
          )
        }),
        el = (0, a.X$)(
          (0, i.c$)((e) => {
            const { chatId: t } = (0, r.Bt)(e) || {},
              n = Boolean(t) && (0, r.FM)(e, t)
            return { savedGifs: e.gifs.saved.gifs, isSavedMessages: n }
          })((e) => {
            let {
              className: t,
              loadAndPlay: n,
              canSendGifs: s,
              savedGifs: o,
              isSavedMessages: r,
              onGifSelect: l,
            } = e
            const { loadSavedGifs: c, saveGif: u } = (0, i.Sv)(),
              h = (0, a.sO)(null),
              { observe: P } = (0, Hn.S1)({ rootRef: h, debounceMs: 300 })
            ;(0, a.d4)(() => {
              n && c()
            }, [n, c])
            const Z = (0, a.I4)(
                (e) => {
                  u({ gif: e, shouldUnsave: !0 })
                },
                [u]
              ),
              v = (0, zn.Z)([], m.Yan)
            return a.ZP.createElement(
              'div',
              {
                ref: h,
                className: (0, Q.Z)('GifPicker', t, d.$b ? 'no-scrollbar' : 'custom-scroll'),
              },
              s
                ? v && o && o.length
                  ? o.map((e) =>
                      a.ZP.createElement(Qr, {
                        key: e.id,
                        gif: e,
                        observeIntersection: P,
                        isDisabled: !n,
                        onClick: s ? l : void 0,
                        onUnsaveClick: Z,
                        isSavedMessages: r,
                      })
                    )
                  : v && o
                  ? a.ZP.createElement('div', { className: 'picker-disabled' }, 'No saved GIFs.')
                  : a.ZP.createElement(ze.Z, null)
                : a.ZP.createElement(
                    'div',
                    { className: 'picker-disabled' },
                    'Sending GIFs is not allowed in this chat.'
                  )
            )
          })
        )
      let tl
      !(function (e) {
        ;(e[(e.Emoji = 0)] = 'Emoji'),
          (e[(e.CustomEmoji = 1)] = 'CustomEmoji'),
          (e[(e.Stickers = 2)] = 'Stickers'),
          (e[(e.GIFs = 3)] = 'GIFs')
      })(tl || (tl = {}))
      const nl = {
          [tl.Emoji]: 'Emoji',
          [tl.CustomEmoji]: 'StickersList.EmojiItem',
          [tl.Stickers]: 'AccDescrStickers',
          [tl.GIFs]: 'GifsTab',
        },
        al = {
          [tl.Emoji]: 'icon-smile',
          [tl.CustomEmoji]: 'icon-favorite',
          [tl.Stickers]: 'icon-stickers',
          [tl.GIFs]: 'icon-gifs',
        },
        sl = (0, a.X$)((e) => {
          let {
            activeTab: t,
            onSwitchTab: n,
            onRemoveSymbol: s,
            onSearchOpen: i,
            isAttachmentModal: o,
            canSendPlainText: r,
          } = e
          const l = (0, M.Z)()
          function c(e) {
            return a.ZP.createElement(
              $.Z,
              {
                className: 'symbol-tab-button ' + (t === e ? 'activated' : ''),
                onClick: () => n(e),
                ariaLabel: l(nl[e]),
                round: !0,
                faded: !0,
                color: 'translucent',
              },
              a.ZP.createElement('i', { className: al[e] })
            )
          }
          const d = (0, a.I4)(() => {
            i(t === tl.Stickers ? 'stickers' : 'gifs')
          }, [t, i])
          return a.ZP.createElement(
            'div',
            {
              className: 'SymbolMenu-footer',
              onClick: function (e) {
                e.stopPropagation()
              },
              dir: l.isRtl ? 'rtl' : void 0,
            },
            t !== tl.Emoji &&
              t !== tl.CustomEmoji &&
              a.ZP.createElement(
                $.Z,
                {
                  className: 'symbol-search-button',
                  ariaLabel: t === tl.Stickers ? 'Search Stickers' : 'Search GIFs',
                  round: !0,
                  faded: !0,
                  color: 'translucent',
                  onClick: d,
                },
                a.ZP.createElement('i', { className: 'icon-search' })
              ),
            r && c(tl.Emoji),
            r && c(tl.CustomEmoji),
            !o && c(tl.Stickers),
            !o && c(tl.GIFs),
            (t === tl.Emoji || t === tl.CustomEmoji) &&
              a.ZP.createElement(
                $.Z,
                {
                  className: 'symbol-delete-button',
                  onClick: s,
                  ariaLabel: 'Remove Symbol',
                  round: !0,
                  faded: !0,
                  color: 'translucent',
                },
                a.ZP.createElement('i', { className: 'icon-delete-left' })
              )
          )
        })
      let il = !1
      const ol = (0, a.X$)(
          (0, i.c$)((e) => ({
            isLeftColumnShown: (0, r.jU)(e).isLeftColumnShown,
            isCurrentUserPremium: (0, r.wV)(e),
            lastSyncTime: e.lastSyncTime,
          }))((e) => {
            let {
              chatId: t,
              threadId: n,
              isOpen: s,
              canSendStickers: o,
              canSendGifs: r,
              isLeftColumnShown: l,
              isCurrentUserPremium: c,
              lastSyncTime: m,
              onLoad: u,
              onClose: h,
              onEmojiSelect: P,
              isAttachmentModal: Z,
              canSendPlainText: v,
              onCustomEmojiSelect: g,
              onStickerSelect: p,
              className: E,
              onGifSelect: C,
              onRemoveSymbol: b,
              onSearchOpen: f,
              addRecentEmoji: I,
              addRecentCustomEmoji: y,
              positionX: S,
              positionY: k,
              transformOriginX: N,
              transformOriginY: w,
              style: T,
            } = e
            const { loadPremiumSetStickers: A, loadFeaturedEmojiStickers: R } = (0, i.Sv)(),
              [L, F] = (0, a.eJ)(0),
              [x, B] = (0, a.eJ)([]),
              [D, O] = (0, a.eJ)([]),
              { isMobile: _ } = (0, U.ZP)(),
              [j, V] = (0, Or.Z)(s, h, void 0, _),
              { shouldRender: z, transitionClassNames: H } = (0, ue.Z)(s, h, !1, !1)
            !il && s && (il = !0),
              (0, a.d4)(() => {
                u()
              }, [u]),
              (0, a.d4)(() => {
                v || F(2)
              }, [v]),
              (0, a.d4)(() => {
                m && (c && A(), R())
              }, [c, m, R, A]),
              (0, a.bt)(() => {
                if (_ && !Z)
                  return (
                    s &&
                      (document.body.classList.add('enable-symbol-menu-transforms'),
                      document.body.classList.add('is-symbol-menu-open')),
                    () => {
                      s &&
                        (0, ne.T2)(() => {
                          document.body.classList.remove('is-symbol-menu-open'),
                            setTimeout(() => {
                              document.body.classList.remove('enable-symbol-menu-transforms')
                            }, 350)
                        })
                    }
                  )
              }, [Z, _, s])
            const X = (0, a.sO)(x)
            ;(X.current = x),
              (0, a.d4)(() => {
                X.current.length &&
                  !s &&
                  (X.current.forEach((e) => {
                    I({ emoji: e })
                  }),
                  B([]))
              }, [s, I])
            const J = (0, a.I4)(
                (e, t) => {
                  B((e) => [...e, t]), P(e)
                },
                [P]
              ),
              q = (0, a.sO)(D)
            ;(q.current = D),
              (0, a.d4)(() => {
                q.current.length &&
                  !s &&
                  (q.current.forEach((e) => {
                    y({ documentId: e })
                  }),
                  B([]))
              }, [s, y])
            const Y = (0, a.I4)(
                (e) => {
                  O((t) => [...t, e.id]), g(e)
                },
                [g]
              ),
              K = (0, a.I4)(
                (e) => {
                  h(), f(e)
                },
                [h, f]
              ),
              W = (0, a.I4)(
                (e, t, n, a) => {
                  p?.(e, t, n, !0, a)
                },
                [p]
              ),
              ee = (0, M.Z)()
            function te(e, i) {
              switch (L) {
                case tl.Emoji:
                  return a.ZP.createElement(Xr, { className: 'picker-tab', onEmojiSelect: J })
                case tl.CustomEmoji:
                  return a.ZP.createElement(na, {
                    className: 'picker-tab',
                    loadAndPlay: s && (e || i),
                    onCustomEmojiSelect: Y,
                    chatId: t,
                  })
                case tl.Stickers:
                  return a.ZP.createElement(Yr, {
                    className: 'picker-tab',
                    loadAndPlay: !!o && s && (e || i),
                    canSendStickers: o,
                    onStickerSelect: W,
                    chatId: t,
                    threadId: n,
                  })
                case tl.GIFs:
                  return a.ZP.createElement(el, {
                    className: 'picker-tab',
                    loadAndPlay: !!r && s && (e || i),
                    canSendGifs: r,
                    onGifSelect: C,
                  })
              }
            }
            const ae = a.ZP.createElement(
              a.ZP.Fragment,
              null,
              a.ZP.createElement(
                'div',
                {
                  className: 'SymbolMenu-main',
                  onClick: function (e) {
                    e.stopPropagation()
                  },
                },
                il &&
                  a.ZP.createElement(
                    G.Z,
                    { name: 'slide', activeKey: L, renderCount: Object.values(nl).length },
                    te
                  )
              ),
              _ &&
                a.ZP.createElement(
                  $.Z,
                  {
                    round: !0,
                    faded: !0,
                    color: 'translucent',
                    ariaLabel: ee('Close'),
                    className: 'symbol-close-button',
                    size: 'tiny',
                    onClick: h,
                  },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
              a.ZP.createElement(sl, {
                activeTab: L,
                onSwitchTab: F,
                onRemoveSymbol: b,
                onSearchOpen: K,
                isAttachmentModal: Z,
                canSendPlainText: v,
              })
            )
            if (_) {
              if (!z) return
              const e = (0, Q.Z)(
                'SymbolMenu mobile-menu',
                H,
                l && 'left-column-open',
                Z && 'in-attachment-modal'
              )
              return Z
                ? a.ZP.createElement('div', { className: e }, ae)
                : a.ZP.createElement(jn.Z, null, a.ZP.createElement('div', { className: e }, ae))
            }
            return a.ZP.createElement(
              ge.Z,
              {
                isOpen: s,
                positionX: Z ? S : 'left',
                positionY: Z ? k : 'bottom',
                onClose: h,
                withPortal: Z,
                className: (0, Q.Z)('SymbolMenu', E),
                onCloseAnimationEnd: h,
                onMouseEnter: d.$b ? void 0 : j,
                onMouseLeave: d.$b ? void 0 : V,
                noCloseOnBackdrop: !d.$b,
                noCompact: !0,
                transformOriginX: N,
                transformOriginY: w,
                style: T,
              },
              ae
            )
          })
        ),
        rl = (0, a.X$)((e) => {
          let { withAvatar: t, focus: n, botCommand: s, bot: i, onClick: o } = e
          return a.ZP.createElement(
            Je.Z,
            {
              key: s.command,
              className: (0, Q.Z)('BotCommand chat-item-clickable scroll-item', t && 'with-avatar'),
              multiline: !0,
              onClick: () => o(s),
              focus: n,
            },
            t && a.ZP.createElement(De.Z, { size: 'small', user: i }),
            a.ZP.createElement(
              'div',
              { className: 'content-inner' },
              a.ZP.createElement('span', { className: 'title' }, '/', s.command),
              a.ZP.createElement('span', { className: 'subtitle' }, (0, X.Z)(s.description))
            )
          )
        }),
        ll = (0, a.X$)(
          (0, i.c$)((e) => ({ usersById: e.users.byId }))((e) => {
            let {
              usersById: t,
              isOpen: n,
              withUsername: s,
              botCommands: o,
              getHtml: r,
              onClick: l,
              onClose: c,
            } = e
            const { sendBotCommand: d } = (0, i.Sv)(),
              m = (0, a.sO)(null),
              { shouldRender: u, transitionClassNames: h } = (0, ue.Z)(n, void 0, void 0, !1),
              P = (0, a.I4)(
                (e) => {
                  let { botId: n, command: a } = e
                  const i = t[n]
                  d({ command: `/${a}${s && i ? `@${i.usernames[0].username}` : ''}` }), l()
                },
                [l, d, t, s]
              ),
              Z = (0, a.I4)((e) => !!e.command.startsWith(r().slice(1)) && (P(e), !0), [r, P]),
              v = br({ isActive: n, items: o, onSelect: Z, onClose: c })
            ;(0, a.d4)(() => {
              o && !o.length && c()
            }, [o, c]),
              (0, a.d4)(() => {
                Cr('.chat-item-clickable', v, m)
              }, [v])
            const g = (0, T.Z)(o && o.length ? o : void 0, u),
              p = o && !o.length ? g : o
            if (!u || (p && !p.length)) return
            const E = (0, Q.Z)('BotCommandTooltip composer-tooltip custom-scroll', h)
            return a.ZP.createElement(
              'div',
              { className: E, ref: m },
              p &&
                p.map((e, n) =>
                  a.ZP.createElement(rl, {
                    key: `${e.botId}_${e.command}`,
                    botCommand: e,
                    bot: t[e.botId],
                    withAvatar: !0,
                    onClick: P,
                    focus: v === n,
                  })
                )
            )
          })
        ),
        cl = (0, a.X$)((e) => {
          let { isOpen: t, botCommands: n, onClose: s } = e
          const { sendBotCommand: o } = (0, i.Sv)(),
            { isMobile: r } = (0, U.ZP)(),
            [l, c] = (0, Or.Z)(t, s, void 0, r),
            m = (0, a.I4)(
              (e) => {
                o({ command: `/${e.command}` }), s()
              },
              [s, o]
            )
          return a.ZP.createElement(
            ge.Z,
            {
              isOpen: t,
              positionX: 'left',
              positionY: 'bottom',
              onClose: s,
              className: 'BotCommandMenu',
              onCloseAnimationEnd: s,
              onMouseEnter: d.$b ? void 0 : l,
              onMouseLeave: d.$b ? void 0 : c,
              noCloseOnBackdrop: !d.$b,
              noCompact: !0,
            },
            n.map((e) => a.ZP.createElement(rl, { key: e.command, botCommand: e, onClick: m }))
          )
        }),
        dl = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { stickers: a } = e.stickers.forEmoji
            return {
              stickers: a,
              isSavedMessages: (0, r.FM)(e, n),
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              isOpen: s,
              onStickerSelect: i,
              onClose: o,
              stickers: r,
              isSavedMessages: l,
              isCurrentUserPremium: d,
            } = e
            const u = (0, a.sO)(null),
              { shouldRender: h, transitionClassNames: P } = (0, ue.Z)(s, void 0, void 0, !1),
              Z = (0, T.Z)(r, !0),
              v = r || Z,
              g = (0, Jr.Z)(t, n),
              { observe: p } = (0, Hn.S1)({ rootRef: u, throttleMs: 200 })
            ;(0, a.d4)(() => (s ? (0, c.Z)(o) : void 0), [s, o])
            const E = (0, Q.Z)(
              'StickerTooltip composer-tooltip custom-scroll',
              P,
              !v?.length && 'hidden'
            )
            return a.ZP.createElement(
              'div',
              {
                ref: u,
                className: E,
                onMouseMove: () => {
                  g({ type: 'chooseSticker' })
                },
              },
              h && v
                ? v.map((e) =>
                    a.ZP.createElement(Jn.Z, {
                      key: e.id,
                      sticker: e,
                      size: m.Qao,
                      observeIntersection: p,
                      onClick: s ? i : void 0,
                      clickArg: e,
                      isSavedMessages: l,
                      canViewSet: !0,
                      isCurrentUserPremium: d,
                    })
                  )
                : h
                ? a.ZP.createElement(ze.Z, null)
                : void 0
            )
          })
        ),
        ml = { root: 'o7fHB9vMHP_k5l9rZC2R', emojiButton: 'LzdBMbvLbmND0s2zfaff' },
        ul = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { stickers: a } = e.customEmojis.forEmoji
            return {
              customEmoji: a,
              isSavedMessages: (0, r.FM)(e, n),
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              isOpen: t,
              addRecentCustomEmoji: n,
              onCustomEmojiSelect: s,
              onClose: o,
              customEmoji: r,
              isSavedMessages: l,
              isCurrentUserPremium: d,
            } = e
            const { clearCustomEmojiForEmoji: u } = (0, i.Sv)(),
              h = (0, a.sO)(null),
              { shouldRender: P, transitionClassNames: Z } = (0, ue.Z)(t, void 0, void 0, !1),
              v = (0, T.Z)(r, !0),
              g = r || v
            ;(0, Xn.Z)(h)
            const { observe: p } = (0, Hn.S1)({ rootRef: h, throttleMs: 200, isDisabled: !t })
            ;(0, a.d4)(() => (t ? (0, c.Z)(o) : void 0), [t, o])
            const E = (0, a.I4)(
                (e) => {
                  t && (s(e), n({ documentId: e.id }), u())
                },
                [n, u, t, s]
              ),
              C = (0, Q.Z)(ml.root, 'composer-tooltip custom-scroll-x', Z, !g?.length && ml.hidden)
            return a.ZP.createElement(
              'div',
              { ref: h, className: C },
              P && g
                ? g.map((e) =>
                    a.ZP.createElement(Jn.Z, {
                      key: e.id,
                      sticker: e,
                      className: ml.emojiButton,
                      size: m.NjN,
                      observeIntersection: p,
                      onClick: E,
                      clickArg: e,
                      isSavedMessages: l,
                      canViewSet: !0,
                      isCurrentUserPremium: d,
                    })
                  )
                : P
                ? a.ZP.createElement(ze.Z, null)
                : void 0
            )
          })
        ),
        hl = (0, a.X$)((e) => {
          let {
            isOpen: t,
            isOpenToBottom: n = !1,
            isSavedMessages: s,
            onSendSilent: i,
            onSendSchedule: o,
            onClose: r,
            onCloseAnimationEnd: l,
          } = e
          const [c, m] = (0, Or.Z)(t, r),
            u = (0, M.Z)()
          return a.ZP.createElement(
            ge.Z,
            {
              isOpen: t,
              autoClose: !0,
              positionX: 'right',
              positionY: n ? 'top' : 'bottom',
              className: 'CustomSendMenu with-menu-transitions',
              onClose: r,
              onCloseAnimationEnd: l,
              onMouseEnter: d.$b ? void 0 : c,
              onMouseLeave: d.$b ? void 0 : m,
              noCloseOnBackdrop: !d.$b,
            },
            i && a.ZP.createElement(z.Z, { icon: 'mute', onClick: i }, u('SendWithoutSound')),
            o &&
              a.ZP.createElement(
                z.Z,
                { icon: 'schedule', onClick: o },
                u(s ? 'SetReminder' : 'ScheduleMessage')
              )
          )
        })
      var Pl = n(12420),
        Zl = n(72087),
        vl = n(96459)
      const gl = (0, a.X$)((e) => {
          let { emoji: t, focus: n, onClick: s, observeIntersection: i } = e
          const o = (0, a.I4)(
              (e) => {
                e.preventDefault(), s?.(t)
              },
              [t, s]
            ),
            r = (0, Q.Z)('EmojiButton', n && 'focus')
          return a.ZP.createElement(
            'div',
            { className: r, onMouseDown: o, title: t.emoji },
            a.ZP.createElement(vl.Z, {
              documentId: t.id,
              size: 32,
              withSharedAnimation: !0,
              shouldPreloadPreview: !0,
              observeIntersectionForPlaying: i,
            })
          )
        }),
        pl = (0, a.X$)((e) => {
          let {
            isOpen: t,
            emojis: n,
            customEmojis: s,
            onClose: i,
            onEmojiSelect: o,
            onCustomEmojiSelect: r,
            addRecentEmoji: l,
            addRecentCustomEmoji: c,
          } = e
          const d = (0, a.sO)(null),
            { shouldRender: m, transitionClassNames: u } = (0, ue.Z)(t, void 0, void 0, !1),
            h = (0, tr.Z)(n.length ? [...s, ...n] : void 0, 350) || []
          ;(0, Xn.Z)(d)
          const { observe: P } = (0, Hn.S1)({ rootRef: d, throttleMs: 200, isDisabled: !t }),
            Z = (0, a.I4)(
              (e) => {
                o(e.native), l({ emoji: e.id })
              },
              [l, o]
            ),
            v = (0, a.I4)(
              (e) => {
                r(e), c({ documentId: e.id })
              },
              [c, r]
            ),
            g = (0, a.I4)(
              (e) => {
                'native' in e ? Z(e) : v(e)
              },
              [v, Z]
            ),
            p = (0, a.I4)(
              (e, t) => {
                o(e), l({ emoji: t })
              },
              [l, o]
            ),
            E = (0, a.I4)(
              (e) => {
                r(e), c({ documentId: e.id })
              },
              [c, r]
            ),
            C = br({ isActive: t, isHorizontal: !0, items: h, onSelect: g, onClose: i })
          ;(0, a.d4)(() => {
            !(function (e, t) {
              const n = t.current
              if (!n) return
              const { visibleIndexes: a, allElements: s } = pr(n, '.EmojiButton', 8, !0, !0, !0)
              if (!s.length || !s[e]) return
              const i = a[0]
              if (!a.includes(e) || (e === i && !Er(n, s[i], !0))) {
                const t = 'start' == (e > a[a.length - 1] ? 'start' : 'end') ? 44 * e : 0
                ;(0, Lt.Z)(n, t)
              }
            })(C, d)
          }, [C])
          const b = (0, Q.Z)('EmojiTooltip composer-tooltip custom-scroll-x', u)
          return a.ZP.createElement(
            'div',
            { ref: d, className: b },
            m && h
              ? h.map((e, t) =>
                  'native' in e
                    ? a.ZP.createElement(_r, { key: e.id, emoji: e, focus: C === t, onClick: p })
                    : a.ZP.createElement(gl, {
                        key: e.id,
                        emoji: e,
                        focus: C === t,
                        onClick: E,
                        observeIntersection: P,
                      })
                )
              : m
              ? a.ZP.createElement(ze.Z, null)
              : void 0
          )
        }),
        El = (0, a.X$)((e) => {
          let t,
            {
              title: n,
              description: s,
              thumbnail: i,
              thumbUrl: o,
              focus: r,
              transitionClassNames: l = '',
              onClick: c,
            } = e
          const d = (0, R.Z)(i ? `webDocument:${i.url}` : void 0)
          return (
            (o = o || d),
            o
              ? (t = a.ZP.createElement('img', {
                  src: o,
                  className: l,
                  alt: '',
                  decoding: 'async',
                  draggable: !1,
                }))
              : n && (t = (0, Ze.Xv)(n, 1)),
            a.ZP.createElement(
              Je.Z,
              {
                focus: r,
                className: 'BaseResult chat-item-clickable',
                onMouseDown: Kr.b,
                onClick: c,
              },
              a.ZP.createElement(
                'span',
                { className: 'thumb' },
                'string' == typeof t ? (0, X.Z)(t) : t
              ),
              a.ZP.createElement(
                'div',
                { className: 'content-inner' },
                n && a.ZP.createElement('div', { className: 'title' }, n),
                s && a.ZP.createElement('div', { className: 'description' }, s)
              )
            )
          )
        }),
        Cl = (0, a.X$)((e) => {
          let t,
            n,
            s,
            { focus: i, isForGallery: o, inlineResult: r, onClick: l } = e
          'photo' in r && (t = r.photo),
            'thumbnail' in r && (n = r.thumbnail),
            'webThumbnail' in r && o && (s = r.webThumbnail)
          const c = (0, R.Z)(s ? `webDocument:${s.url}` : void 0),
            d = (0, R.Z)(t && `photo${t.id}?size=m`),
            m = (0, $t.Z)(d),
            u = (0, a.I4)(() => {
              l(r)
            }, [r, l])
          if (o)
            return a.ZP.createElement(
              'div',
              { className: 'MediaResult chat-item-clickable', onClick: u },
              a.ZP.createElement('img', { src: t?.thumbnail?.dataUri || c, alt: '' }),
              a.ZP.createElement('img', { src: d, className: (0, Q.Z)('full-media', m), alt: '' })
            )
          const { title: h, description: P } = r
          return a.ZP.createElement(El, {
            focus: i,
            thumbUrl: d || n?.dataUri || c,
            transitionClassNames: m,
            title: h,
            description: P,
            onClick: u,
          })
        }),
        bl = (0, a.X$)((e) => {
          let { focus: t, inlineResult: n, onClick: s } = e
          const { title: i, url: o, description: r, webThumbnail: l } = n,
            c = (0, a.I4)(() => {
              s(n)
            }, [n, s])
          return a.ZP.createElement(El, {
            focus: t,
            thumbnail: l,
            title: i || o,
            description: r,
            onClick: c,
          })
        }),
        fl = (0, a.X$)((e) => {
          let {
            inlineResult: t,
            isSavedMessages: n,
            canSendGifs: s,
            observeIntersection: i,
            onClick: o,
          } = e
          const { gif: r } = t,
            l = (0, a.I4)(
              (e, n, a) => {
                o(t, n, a)
              },
              [t, o]
            )
          if (r)
            return a.ZP.createElement(Qr, {
              gif: r,
              observeIntersection: i,
              className: 'chat-item-clickable',
              onClick: s ? l : void 0,
              isSavedMessages: n,
            })
        }),
        Il = (0, a.X$)((e) => {
          let {
            inlineResult: t,
            isSavedMessages: n,
            observeIntersection: s,
            onClick: i,
            isCurrentUserPremium: o,
          } = e
          const { sticker: r } = t
          if (r)
            return a.ZP.createElement(Jn.Z, {
              sticker: r,
              size: m.zqK,
              observeIntersection: s,
              title: r.emoji,
              className: 'chat-item-clickable',
              onClick: i,
              clickArg: t,
              isSavedMessages: n,
              canViewSet: !0,
              noShowPremium: !0,
              isCurrentUserPremium: o,
            })
        }),
        yl = (0, ne.P2)((e) => e(), 500, !0),
        Sl = (0, a.X$)((e) => {
          let {
            isOpen: t,
            botId: n,
            isGallery: o,
            inlineBotResults: r,
            switchPm: l,
            isSavedMessages: c,
            canSendGifs: m,
            loadMore: u,
            onClose: h,
            onSelectResult: P,
            isCurrentUserPremium: Z,
          } = e
          const { openChat: v, startBot: g } = (0, i.Sv)(),
            p = (0, a.sO)(null),
            { shouldRender: E, transitionClassNames: C } = (0, ue.Z)(t, void 0, void 0, !1),
            b = (0, et.Z)(o, E),
            { observe: f } = (0, Hn.S1)({ rootRef: p, debounceMs: 200, isDisabled: !t }),
            I = (0, a.I4)(
              (e) => {
                let { direction: t } = e
                t === s.Uq.Backwards && yl(u)
              },
              [u]
            ),
            y = br({
              isActive: t,
              shouldRemoveSelectionOnReset: b,
              noArrowNavigation: b,
              items: r,
              onSelect: P,
              onClose: h,
            })
          ;(0, a.d4)(() => {
            Cr('.chat-item-clickable', y, p)
          }, [y])
          const S = (0, a.I4)(() => {
              v({ id: n }), g({ botId: n, param: l.startParam })
            }, [n, v, g, l]),
            k = (0, T.Z)(r?.length ? r : void 0, E),
            N = r?.length ? r : k
          if (!E || (!N?.length && !l)) return
          const w = (0, Q.Z)(
            'InlineBotTooltip composer-tooltip',
            d.$b ? 'no-scrollbar' : 'custom-scroll',
            b && 'gallery',
            C
          )
          return a.ZP.createElement(
            Xe.Z,
            {
              ref: p,
              className: w,
              items: N,
              itemSelector: '.chat-item-clickable',
              noFastList: !0,
              onLoadMore: I,
              sensitiveArea: 160,
            },
            l &&
              a.ZP.createElement(
                Je.Z,
                { ripple: !0, className: 'switch-pm scroll-item', onClick: S },
                a.ZP.createElement('span', { className: 'title' }, l.text)
              ),
            Boolean(N?.length) &&
              N.map((e, t) => {
                switch (e.type) {
                  case 'gif':
                    return a.ZP.createElement(fl, {
                      key: e.id,
                      inlineResult: e,
                      observeIntersection: f,
                      onClick: P,
                      isSavedMessages: c,
                      canSendGifs: m,
                    })
                  case 'photo':
                    return a.ZP.createElement(Cl, {
                      key: e.id,
                      isForGallery: b,
                      inlineResult: e,
                      onClick: P,
                    })
                  case 'sticker':
                    return a.ZP.createElement(Il, {
                      key: e.id,
                      inlineResult: e,
                      observeIntersection: f,
                      onClick: P,
                      isSavedMessages: c,
                      isCurrentUserPremium: Z,
                    })
                  case 'video':
                  case 'file':
                  case 'game':
                    return a.ZP.createElement(Cl, {
                      key: e.id,
                      focus: y === t,
                      inlineResult: e,
                      onClick: P,
                    })
                  case 'article':
                  case 'audio':
                    return a.ZP.createElement(bl, {
                      key: e.id,
                      focus: y === t,
                      inlineResult: e,
                      onClick: P,
                    })
                  default:
                    return
                }
              })
          )
        }),
        kl = (0, a.X$)((e) => {
          let {
            isOpen: t,
            chatId: n,
            selectedSendAsId: s,
            sendAsPeerIds: r,
            isCurrentUserPremium: l,
            onClose: c,
          } = e
          const { saveDefaultSendAs: m, showNotification: u } = (0, i.Sv)(),
            h = (0, i.Rd)().users.byId,
            P = (0, i.Rd)().chats.byId,
            Z = (0, M.Z)(),
            v = (0, a.sO)(null),
            [g, p, E] = (0, Or.Z)(t, c, void 0)
          ;(0, a.d4)(() => {
            t && E()
          }, [t, E])
          const C = (0, a.I4)(
              (e) => {
                c(), m({ chatId: n, sendAsId: e })
              },
              [n, c, m]
            ),
            b = br({
              isActive: t,
              items: r,
              onSelect: C,
              shouldSelectOnTab: !0,
              shouldSaveSelectionOnUpdateItems: !0,
              onClose: c,
            })
          return (
            (0, a.d4)(() => {
              Cr('.chat-item-clickable', b, v)
            }, [b]),
            (0, a.d4)(() => {
              r && !r.length && c()
            }, [r, c]),
            a.ZP.createElement(
              ge.Z,
              {
                isOpen: t,
                positionX: 'left',
                positionY: 'bottom',
                onClose: c,
                className: 'SendAsMenu',
                onCloseAnimationEnd: c,
                onMouseEnter: d.$b ? void 0 : g,
                onMouseLeave: d.$b ? void 0 : p,
                noCloseOnBackdrop: !d.$b,
                noCompact: !0,
              },
              a.ZP.createElement(
                'div',
                { className: 'send-as-title', dir: 'auto' },
                Z('SendMessageAsTitle')
              ),
              h &&
                P &&
                r?.map((e, t) => {
                  let { id: n, isPremium: i } = e
                  const r = (0, o.YC)(n) ? h[n] : void 0,
                    c = r ? void 0 : P[n],
                    d = r || c
                  return a.ZP.createElement(
                    Je.Z,
                    {
                      key: n,
                      className: 'SendAsItem chat-item-clickable scroll-item with-avatar',
                      onClick: () => {
                        !i || l
                          ? C(n)
                          : u({
                              message: Z('SelectSendAsPeerPremiumHint'),
                              actionText: Z('Open'),
                              action: { action: 'openPremiumModal', payload: {} },
                            })
                      },
                      focus: b === t,
                      rightElement:
                        !l &&
                        i &&
                        a.ZP.createElement('i', {
                          className: 'icon-lock-badge send-as-icon-locked',
                        }),
                    },
                    a.ZP.createElement(De.Z, {
                      size: 'small',
                      user: r,
                      chat: c,
                      className: (0, Q.Z)(s === n && 'selected'),
                    }),
                    a.ZP.createElement(
                      'div',
                      { className: 'info' },
                      d && a.ZP.createElement(Pa.Z, { peer: d, noFake: !0 }),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        r ? Z('VoipGroupPersonalAccount') : Z('Subscribers', c?.membersCount, 'i')
                      )
                    )
                  )
                })
            )
          )
        })
      var Nl = n(76844)
      const wl = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              s = a && (0, r.Zw)(e, a.id)
            if (!a || !s) return {}
            const { query: i, results: o } = (0, r.n5)(e) || {},
              { totalCount: l, foundIds: c } = o || {}
            return {
              chat: a,
              messagesById: s,
              query: i,
              totalCount: l,
              foundIds: c,
              animationLevel: e.settings.byKey.animationLevel,
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              isActive: s,
              chat: l,
              messagesById: c,
              query: d,
              totalCount: m,
              foundIds: u,
              animationLevel: P,
              onClose: Z,
            } = e
            const { searchTextMessagesLocal: v, focusMessage: g } = (0, i.Sv)(),
              p = (0, a.sO)(null),
              E = (0, M.Z)()
            ;(0, oe.Z)({ isActive: s, onBack: Z }),
              (0, a.d4)(() => {
                if (s) return (0, h.l_)(), h.In
              }, [s])
            const C = (0, a.I4)(() => {
                v()
              }, [v]),
              [b, I] = (0, je.Z)(C, u),
              y = (0, a.Ye)(
                () =>
                  d && b?.length && c
                    ? b
                        .map((e) => {
                          const a = c[e]
                          if (!a) return
                          const s = a.senderId ? (0, r.dy)((0, i.Rd)(), a.senderId) : void 0
                          let d
                          if (l && (0, o.eA)(l)) d = l
                          else if (a.forwardInfo) {
                            const { isChannelPost: e, fromChatId: t } = a.forwardInfo
                            d = e && t ? (0, r.Z1)((0, i.Rd)(), t) : void 0
                          } else d = a.senderId ? (0, r.Z1)((0, i.Rd)(), a.senderId) : void 0
                          return {
                            message: a,
                            senderUser: s,
                            senderChat: d,
                            onClick: () => g({ chatId: t, threadId: n, messageId: e }),
                          }
                        })
                        .filter(Boolean)
                    : Gn.D,
                [d, b, c, l, g, t, n]
              ),
              S = (0, Ge.Z)(
                p,
                !0,
                (e) => {
                  const t = y?.[-1 === e ? 0 : e]
                  t && t.onClick()
                },
                '.ListItem-button',
                !0
              ),
              k = b?.[0] === u?.[0]
            return a.ZP.createElement(
              Xe.Z,
              {
                ref: p,
                className: 'RightSearch custom-scroll',
                items: y,
                preloadBackwards: 0,
                onLoadMore: I,
                onKeyDown: S,
              },
              k &&
                a.ZP.createElement(
                  'p',
                  { key: 'helper-text', className: 'helper-text', dir: 'auto' },
                  d
                    ? 0 !== m && y.length
                      ? 1 === m
                        ? '1 message found'
                        : `${y.length && (m || y.length)} messages found`
                      : E('lng_search_no_results')
                    : E('lng_dlg_search_for_messages')
                ),
              y.map((e) => {
                let { message: t, senderUser: n, senderChat: s, onClick: i } = e
                const o = (0, f.e)(E, t, void 0, d)
                return a.ZP.createElement(
                  Je.Z,
                  {
                    key: t.id,
                    teactOrderKey: -t.date,
                    className: 'chat-item-clickable search-result-message m-0',
                    onClick: i,
                  },
                  a.ZP.createElement(De.Z, { chat: s, user: n, animationLevel: P, withVideo: !0 }),
                  a.ZP.createElement(
                    'div',
                    { className: 'info' },
                    a.ZP.createElement(
                      'div',
                      { className: 'search-result-message-top' },
                      a.ZP.createElement(Pa.Z, { peer: n || s }),
                      a.ZP.createElement(Nl.Z, { message: t })
                    ),
                    a.ZP.createElement('div', { className: 'subtitle', dir: 'auto' }, o)
                  )
                )
              })
            )
          })
        ),
        Ml = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { stickerSetId: n } = t
            return {
              set: (0, r.Ny)(e, n),
              shouldPlay: (0, r.Cy)(e),
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              stickerSetId: t,
              observeIntersection: n,
              set: s,
              shouldPlay: o,
              isModalOpen: r,
              isCurrentUserPremium: l,
            } = e
            const { loadStickers: c, toggleStickerSet: d, openStickerSet: u } = (0, i.Sv)(),
              h = (0, a.sO)(null),
              P = (0, M.Z)(),
              Z = s && !s.isArchived && Boolean(s.installedDate),
              v = Boolean(s?.stickers),
              g = (0, a.Ye)(() => {
                var e
                if (!s) return []
                const t = (
                    null !==
                      (e = s.stickers?.filter((e) => {
                        let { hasEffect: t } = e
                        return t
                      })) && void 0 !== e
                      ? e
                      : []
                  ).slice(0, 3),
                  n = (s.covers || []).map((e) => {
                    let { id: t } = e
                    return t
                  }),
                  a = s.stickers
                    ? s.stickers.filter((e) => {
                        let { id: t } = e
                        return !n.includes(t)
                      })
                    : []
                return [...t, ...(s.covers || []), ...a].slice(0, 5)
              }, [s])
            ;(0, a.d4)(() => {
              !v && g.length < 5 && s && c({ stickerSetInfo: { shortName: s.shortName } })
            }, [v, g.length, c, s, t])
            const p = (0, a.I4)(() => {
                d({ stickerSetId: t })
              }, [d, t]),
              E = (0, a.I4)(
                (e) => {
                  u({ stickerSetInfo: e.stickerSetInfo })
                },
                [u]
              )
            if (!s) return
            const C = g.length > 0
            return a.ZP.createElement(
              'div',
              { key: s.id, className: 'sticker-set', dir: P.isRtl ? 'rtl' : void 0 },
              a.ZP.createElement(
                'div',
                { className: 'sticker-set-header' },
                a.ZP.createElement(
                  'div',
                  { className: 'title-wrapper' },
                  a.ZP.createElement('h3', { className: 'title', dir: 'auto' }, s.title),
                  a.ZP.createElement(
                    'p',
                    { className: 'count', dir: 'auto' },
                    P('Stickers', s.count, 'i')
                  )
                ),
                a.ZP.createElement(
                  $.Z,
                  {
                    className: Z ? 'is-added' : void 0,
                    color: 'primary',
                    size: 'tiny',
                    pill: !0,
                    fluid: !0,
                    onClick: p,
                  },
                  P(Z ? 'Stickers.Installed' : 'Stickers.Install')
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'sticker-set-main shared-canvas-container' },
                a.ZP.createElement('canvas', { ref: h, className: 'shared-canvas' }),
                !C && a.ZP.createElement(ce.Z, null),
                C &&
                  g.map((e) =>
                    a.ZP.createElement(Jn.Z, {
                      sticker: e,
                      size: m.Y7U,
                      observeIntersection: n,
                      noAnimate: !o || r,
                      clickArg: e,
                      onClick: E,
                      noContextMenu: !0,
                      isCurrentUserPremium: l,
                      sharedCanvasRef: h,
                    })
                  )
              )
            )
          })
        ),
        Tl = (0, ne.P2)((e) => e(), 6e4, !0),
        Al = (0, a.X$)(
          (0, i.c$)((e) => {
            const t = (0, r.y5)(e),
              { query: n, resultIds: a } = t || {},
              { featured: s } = e.stickers
            return {
              query: n,
              featuredIds: s.setIds,
              resultIds: a,
              isModalOpen: Boolean((0, r.jU)(e).openedStickerSetShortName),
            }
          })((e) => {
            let {
              isActive: t,
              query: n,
              featuredIds: s,
              resultIds: o,
              isModalOpen: r,
              onClose: l,
            } = e
            const { loadFeaturedStickers: c } = (0, i.Sv)(),
              d = (0, a.sO)(null),
              m = (0, M.Z)(),
              { observe: u } = (0, Hn.S1)({ rootRef: d, throttleMs: 200 })
            return (
              (0, a.d4)(() => {
                Tl(() => {
                  c()
                })
              }),
              (0, oe.Z)({ isActive: t, onBack: l }),
              a.ZP.createElement(
                'div',
                { ref: d, className: 'StickerSearch custom-scroll', dir: m.isRtl ? 'rtl' : void 0 },
                (function () {
                  if (void 0 !== n)
                    return !n && s
                      ? s.map((e) =>
                          a.ZP.createElement(Ml, {
                            key: e,
                            stickerSetId: e,
                            observeIntersection: u,
                            isModalOpen: r,
                          })
                        )
                      : o
                      ? o.length
                        ? o.map((e) =>
                            a.ZP.createElement(Ml, {
                              key: e,
                              stickerSetId: e,
                              observeIntersection: u,
                              isModalOpen: r,
                            })
                          )
                        : a.ZP.createElement(
                            'p',
                            { className: 'helper-text', dir: 'auto' },
                            'Nothing found.'
                          )
                      : a.ZP.createElement(ze.Z, null)
                })()
              )
            )
          })
        ),
        Rl = (0, a.X$)(
          (0, i.c$)((e) => {
            const t = (0, r.yN)(e),
              { query: n, results: a } = t || {},
              { chatId: s, threadId: i } = (0, r.Bt)(e) || {},
              l = s ? (0, r.Z1)(e, s) : void 0,
              c = l ? (0, r.xo)(e, l) : void 0,
              d = Boolean(s) && (0, r.FM)(e, s),
              m = s && i ? (0, r.tZ)(e, s, i) : void 0,
              u = Boolean(m?.originChannelId)
            return {
              query: n,
              results: a,
              chat: l,
              isChatWithBot: c,
              isSavedMessages: d,
              canPostInChat: Boolean(l) && Boolean(i) && (0, o.Qm)(l, i, u),
              canScheduleUntilOnline: Boolean(s) && (0, r.Eh)(e, s),
            }
          })((e) => {
            let {
              isActive: t,
              query: n,
              results: s,
              chat: r,
              isChatWithBot: l,
              canScheduleUntilOnline: c,
              isSavedMessages: m,
              canPostInChat: u,
              onClose: h,
            } = e
            const { searchMoreGifs: P, sendMessage: Z, setGifSearchQuery: v } = (0, i.Sv)(),
              g = (0, a.sO)(null),
              [p, E] = (0, Mo.Z)(c),
              { observe: C } = (0, Hn.S1)({ rootRef: g, debounceMs: 300 }),
              b = u && (0, o.H5)(r, l).canSendGifs,
              f = (0, a.I4)(
                (e, t, n) => {
                  b &&
                    (n
                      ? p((n) => {
                          Z({ gif: e, scheduledAt: n, isSilent: t })
                        })
                      : Z({ gif: e, isSilent: t })),
                    d.$b && v({ query: void 0 })
                },
                [b, p, Z, v]
              ),
              I = (0, a.I4)(() => {
                P()
              }, [P]),
              y = (0, M.Z)()
            ;(0, oe.Z)({ isActive: t, onBack: h })
            const S = Boolean(void 0 !== n && s && s.length)
            return a.ZP.createElement(
              'div',
              { className: 'GifSearch', dir: y.isRtl ? 'rtl' : void 0 },
              a.ZP.createElement(
                Xe.Z,
                {
                  ref: g,
                  className: (0, Q.Z)('gif-container custom-scroll', S && 'grid'),
                  items: s,
                  itemSelector: '.GifButton',
                  preloadBackwards: 96,
                  noFastList: !0,
                  onLoadMore: I,
                },
                (function () {
                  if (void 0 !== n)
                    return s
                      ? s.length
                        ? s.map((e) =>
                            a.ZP.createElement(Qr, {
                              key: e.id,
                              gif: e,
                              observeIntersection: C,
                              onClick: b ? f : void 0,
                              isSavedMessages: m,
                            })
                          )
                        : a.ZP.createElement(
                            'p',
                            { className: 'helper-text', dir: 'auto' },
                            y('NoGIFsFound')
                          )
                      : a.ZP.createElement(ze.Z, null)
                })()
              ),
              E
            )
          })
        )
      var Ll = n(71226)
      const Fl = [
          [
            { name: 'followers', title: 'ChannelStats.Overview.Followers' },
            {
              name: 'enabledNotifications',
              title: 'ChannelStats.Overview.EnabledNotifications',
              isPercentage: !0,
            },
          ],
          [
            { name: 'viewsPerPost', title: 'ChannelStats.Overview.ViewsPerPost' },
            { name: 'sharesPerPost', title: 'ChannelStats.Overview.SharesPerPost' },
          ],
        ],
        xl = [
          [
            { name: 'members', title: 'Stats.GroupMembers' },
            { name: 'messages', title: 'Stats.GroupMessages' },
          ],
          [
            { name: 'viewers', title: 'Stats.GroupViewers' },
            { name: 'posters', title: 'Stats.GroupPosters' },
          ],
        ],
        Bl = [
          [
            { name: 'views', title: 'Stats.Message.Views', isPlain: !0 },
            {
              name: 'forwards',
              title: 'Stats.Message.PrivateShares',
              isPlain: !0,
              isApproximate: !0,
            },
          ],
          [{ name: 'publicForwards', title: 'Stats.Message.PublicShares', isPlain: !0 }],
        ],
        Dl = (0, a.X$)((e) => {
          let { isGroup: t, isMessage: n, statistics: s } = e
          const i = (0, M.Z)(),
            { period: o } = s
          return a.ZP.createElement(
            'div',
            { className: 'StatisticsOverview' },
            a.ZP.createElement(
              'div',
              { className: 'StatisticsOverview__header' },
              a.ZP.createElement(
                'div',
                { className: 'StatisticsOverview__title' },
                i('StatisticOverview')
              ),
              o &&
                a.ZP.createElement(
                  'div',
                  { className: 'StatisticsOverview__caption' },
                  (0, Pe.Tu)(i, 1e3 * o.minDate),
                  ' — ',
                  (0, Pe.Tu)(i, 1e3 * o.maxDate)
                )
            ),
            a.ZP.createElement(
              'table',
              { className: 'StatisticsOverview__table' },
              (n ? Bl : t ? xl : Fl).map((e) =>
                a.ZP.createElement(
                  'tr',
                  null,
                  e.map((e) => {
                    const t = s[e.name]
                    return e.isPlain
                      ? a.ZP.createElement(
                          'td',
                          { className: 'StatisticsOverview__table-cell' },
                          a.ZP.createElement(
                            'b',
                            { className: 'StatisticsOverview__table-value' },
                            e.isApproximate ? `≈${(0, Ze.kh)(t)}` : (0, Ze.kh)(t)
                          ),
                          a.ZP.createElement(
                            'h3',
                            { className: 'StatisticsOverview__table-heading' },
                            i(e.title)
                          )
                        )
                      : e.isPercentage
                      ? a.ZP.createElement(
                          'td',
                          { className: 'StatisticsOverview__table-cell' },
                          a.ZP.createElement(
                            'b',
                            { className: 'StatisticsOverview__table-value' },
                            t.percentage,
                            '%'
                          ),
                          a.ZP.createElement(
                            'h3',
                            { className: 'StatisticsOverview__table-heading' },
                            i(e.title)
                          )
                        )
                      : a.ZP.createElement(
                          'td',
                          { className: 'StatisticsOverview__table-cell' },
                          a.ZP.createElement(
                            'b',
                            { className: 'StatisticsOverview__table-value' },
                            (0, Ze.bi)(t.current)
                          ),
                          ' ',
                          ((e) => {
                            let { change: t, percentage: n } = e
                            if (!t) return
                            const s = Number(t) < 0
                            return a.ZP.createElement(
                              'span',
                              { className: (0, Q.Z)('StatisticsOverview__value', s && 'negative') },
                              s ? `-${(0, Ze.bi)(Math.abs(t))}` : `+${(0, Ze.bi)(t)}`,
                              n && a.ZP.createElement(a.ZP.Fragment, null, ' ', '(', n, '%)')
                            )
                          })(t),
                          a.ZP.createElement(
                            'h3',
                            { className: 'StatisticsOverview__table-heading' },
                            i(e.title)
                          )
                        )
                  })
                )
              )
            )
          )
        }),
        Ol = (0, a.X$)((e) => {
          let { message: t } = e
          const n = (0, M.Z)(),
            { toggleMessageStatistics: s } = (0, i.Sv)(),
            r = (0, o.DH)(t),
            l = (0, R.Z)((0, o.Ti)(t, 'micro')),
            c = Boolean((0, o.Y5)(t)),
            d = (0, a.I4)(() => {
              s({ messageId: t.id })
            }, [s, t.id])
          return a.ZP.createElement(
            'div',
            {
              className: (0, Q.Z)(
                'StatisticsRecentMessage',
                Boolean(l || r) && 'StatisticsRecentMessage--with-image'
              ),
              onClick: d,
            },
            a.ZP.createElement(
              'div',
              { className: 'StatisticsRecentMessage__title' },
              a.ZP.createElement(
                'div',
                { className: 'StatisticsRecentMessage__summary' },
                (function (e, t, n, s) {
                  return n
                    ? a.ZP.createElement(
                        'span',
                        { className: 'media-preview' },
                        a.ZP.createElement('img', {
                          src: n,
                          alt: '',
                          className: (0, Q.Z)('media-preview__image', s && 'round'),
                        }),
                        (0, o.b7)(t) && a.ZP.createElement('i', { className: 'icon-play' }),
                        (0, f.e)(e, t, !0)
                      )
                    : (0, f.e)(e, t)
                })(n, t, l || r, c)
              ),
              a.ZP.createElement(
                'div',
                { className: 'StatisticsRecentMessage__meta' },
                n('ChannelStats.ViewsCount', t.views, 'i')
              )
            ),
            a.ZP.createElement(
              'div',
              { className: 'StatisticsRecentMessage__info' },
              a.ZP.createElement(
                'div',
                { className: 'StatisticsRecentMessage__date' },
                (0, Pe.SA)(1e3 * t.date, n.code)
              ),
              a.ZP.createElement(
                'div',
                { className: 'StatisticsRecentMessage__meta' },
                t.forwards ? n('ChannelStats.SharesCount', t.forwards) : 'No shares'
              )
            )
          )
        })
      let Ul, _l
      const $l = {
          growthGraph: 'ChannelStats.Graph.Growth',
          followersGraph: 'ChannelStats.Graph.Followers',
          muteGraph: 'ChannelStats.Graph.Notifications',
          topHoursGraph: 'ChannelStats.Graph.ViewsByHours',
          viewsBySourceGraph: 'ChannelStats.Graph.ViewsBySource',
          newFollowersBySourceGraph: 'ChannelStats.Graph.NewFollowersBySource',
          languagesGraph: 'ChannelStats.Graph.Language',
          interactionsGraph: 'ChannelStats.Graph.Interactions',
        },
        jl = Object.keys($l),
        Gl = {
          growthGraph: 'Stats.GroupGrowthTitle',
          membersGraph: 'Stats.GroupMembersTitle',
          languagesGraph: 'Stats.GroupLanguagesTitle',
          messagesGraph: 'Stats.GroupMessagesTitle',
          actionsGraph: 'Stats.GroupActionsTitle',
          topHoursGraph: 'Stats.GroupTopHoursTitle',
        },
        Vl = Object.keys(Gl),
        zl = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.aT)(e, n),
              s = (0, r.Z1)(e, n),
              i = s?.fullInfo?.statisticsDcId
            return { statistics: a, dcId: i, isGroup: 'chatTypeSuperGroup' === s?.type }
          })((e) => {
            let { chatId: t, statistics: s, dcId: o, isGroup: r } = e
            const l = (0, M.Z)(),
              c = (0, a.sO)(null),
              [d, m] = (0, a.eJ)(!1),
              u = (0, a.sO)([]),
              { loadStatistics: h, loadStatisticsAsyncGraph: P } = (0, i.Sv)(),
              Z = (0, y.Z)()
            ;(0, a.d4)(() => {
              h({ chatId: t, isGroup: r })
            }, [t, h, r])
            const v = (0, a.Ye)(() => (r ? Vl : jl), [r]),
              g = (0, a.Ye)(() => (r ? Gl : $l), [r])
            return (
              (0, a.d4)(() => {
                s &&
                  v.forEach((e) => {
                    const n = s[e]
                    'string' == typeof n &&
                      P({ name: e, chatId: t, token: n, isPercentage: 'languagesGraph' === e })
                  })
              }, [v, t, s, P]),
              (0, a.d4)(() => {
                ;(async () => {
                  await (async function () {
                    return Ul || ((Ul = n.e(8878).then(n.bind(n, 18878))), (_l = await Ul)), Ul
                  })(),
                    d
                      ? s &&
                        c.current &&
                        (v.forEach((e, t) => {
                          const n = s[e]
                          if ('string' == typeof n || u.current.includes(e)) return
                          if (!n) return void u.current.push(e)
                          const { zoomToken: a } = n
                          _l.create(c.current.children[t], {
                            title: l(g[e]),
                            ...(a
                              ? {
                                  onZoom: (e) =>
                                    (0, Ll.t9)('fetchStatisticsAsyncGraph', {
                                      token: a,
                                      x: e,
                                      dcId: o,
                                    }),
                                  zoomOutLabel: l('Graph.ZoomOut'),
                                }
                              : {}),
                            ...n,
                          }),
                            u.current.push(e),
                            c.current.children[t].classList.remove('hidden')
                        }),
                        Z())
                      : m(!0)
                })()
              }, [v, g, d, s, l, t, P, o, Z]),
              d && s
                ? a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)('Statistics custom-scroll', d && 'ready') },
                    a.ZP.createElement(Dl, { statistics: s, isGroup: r }),
                    !u.current.length && a.ZP.createElement(ze.Z, null),
                    a.ZP.createElement(
                      'div',
                      { ref: c },
                      v.map((e) =>
                        a.ZP.createElement('div', { key: e, className: 'Statistics__graph hidden' })
                      )
                    ),
                    Boolean(s.recentTopMessages?.length) &&
                      a.ZP.createElement(
                        'div',
                        { className: 'Statistics__messages' },
                        a.ZP.createElement(
                          'h2',
                          { className: 'Statistics__messages-title' },
                          l('ChannelStats.Recent.Header')
                        ),
                        s.recentTopMessages.map((e) => a.ZP.createElement(Ol, { message: e }))
                      )
                  )
                : a.ZP.createElement(ze.Z, null)
            )
          })
        ),
        Hl = (0, a.X$)((e) => {
          let { data: t } = e
          const n = (0, M.Z)(),
            { openChatByUsername: s } = (0, i.Sv)(),
            r = (0, a.Ye)(() => (0, o.WS)(t.chat), [t.chat]),
            l = (0, a.I4)(() => {
              s({ username: r, messageId: t.messageId })
            }, [t.messageId, s, r])
          return a.ZP.createElement(
            'div',
            { className: 'StatisticsPublicForward', onClick: l },
            a.ZP.createElement(De.Z, { size: 'medium', chat: t.chat }),
            a.ZP.createElement(
              'div',
              { className: 'StatisticsPublicForward__info' },
              a.ZP.createElement('div', { className: 'StatisticsPublicForward__title' }, t.title),
              a.ZP.createElement(
                'div',
                { className: 'StatisticsPublicForward__views' },
                n('ChannelStats.ViewsCount', t.views, 'i')
              )
            )
          )
        })
      let Xl, Jl
      const ql = { viewsGraph: 'Stats.MessageInteractionsTitle' },
        Yl = Object.keys(ql),
        Kl = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n)?.fullInfo?.statisticsDcId,
              s = (0, r.jU)(e)
            return {
              statistics: s.statistics.currentMessage,
              dcId: a,
              messageId: s.statistics.currentMessageId,
            }
          })((e) => {
            let { chatId: t, isActive: s, statistics: o, dcId: r, messageId: l } = e
            const c = (0, M.Z)(),
              d = (0, a.sO)(null),
              [m, u] = (0, a.eJ)(!1),
              h = (0, a.sO)([]),
              { loadMessageStatistics: P, loadStatisticsAsyncGraph: Z } = (0, i.Sv)(),
              v = (0, y.Z)()
            return (
              (0, a.d4)(() => {
                l && P({ chatId: t, messageId: l })
              }, [t, P, l]),
              (0, a.d4)(() => {
                ;(s && !l) || ((h.current = []), u(!1))
              }, [s, l]),
              (0, a.d4)(() => {
                o &&
                  Yl.forEach((e) => {
                    const n = o[e]
                    'string' == typeof n && Z({ name: e, chatId: t, token: n })
                  })
              }, [t, o, Z]),
              (0, a.d4)(() => {
                ;(async () => {
                  await (async function () {
                    return Xl || ((Xl = n.e(8878).then(n.bind(n, 18878))), (Jl = await Xl)), Xl
                  })(),
                    m
                      ? o &&
                        d.current &&
                        (Yl.forEach((e, t) => {
                          const n = o[e]
                          if ('string' == typeof n || h.current.includes(e)) return
                          if (!n) return void h.current.push(e)
                          const { zoomToken: a } = n
                          Jl.create(d.current.children[t], {
                            title: c(ql[e]),
                            ...(a
                              ? {
                                  onZoom: (e) =>
                                    (0, Ll.t9)('fetchStatisticsAsyncGraph', {
                                      token: a,
                                      x: e,
                                      dcId: r,
                                    }),
                                  zoomOutLabel: c('Graph.ZoomOut'),
                                }
                              : {}),
                            ...n,
                          }),
                            h.current.push(e)
                        }),
                        v())
                      : u(!0)
                })()
              }, [m, o, c, t, l, Z, r, v]),
              m && o && l
                ? a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)('Statistics custom-scroll', m && 'ready') },
                    a.ZP.createElement(Dl, { statistics: o, isMessage: !0 }),
                    !h.current.length && a.ZP.createElement(ze.Z, null),
                    a.ZP.createElement(
                      'div',
                      { ref: d },
                      Yl.map((e) =>
                        a.ZP.createElement('div', {
                          className: (0, Q.Z)(
                            'Statistics__graph',
                            !h.current.includes(e) && 'hidden'
                          ),
                        })
                      )
                    ),
                    Boolean(o.publicForwards) &&
                      a.ZP.createElement(
                        'div',
                        { className: 'Statistics__public-forwards' },
                        a.ZP.createElement(
                          'h2',
                          { className: 'Statistics__public-forwards-title' },
                          c('Stats.Message.PublicShares')
                        ),
                        o.publicForwardsData.map((e) => a.ZP.createElement(Hl, { data: e }))
                      )
                  )
                : a.ZP.createElement(ze.Z, null)
            )
          })
        ),
        Wl = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { answer: n } = t
            const { voters: a, offsets: s } = (0, r.jU)(e).pollResults
            return { voters: a?.[n.option], offset: s?.[n.option] || '' }
          })((e) => {
            let {
              chat: t,
              message: n,
              answer: s,
              answerVote: o,
              totalVoters: r,
              voters: l,
              offset: c,
            } = e
            const { loadPollOptionResults: d, openChat: m, closePollResults: u } = (0, i.Sv)(),
              h = (0, T.Z)(o.votersCount),
              [P, Z] = (0, a.eJ)(!0),
              v = Boolean(l),
              { option: g, text: p } = s,
              E = (0, M.Z)()
            ;(0, a.d4)(() => {
              ;(v && h === o.votersCount) ||
                d({
                  chat: t,
                  messageId: n.id,
                  option: g,
                  offset: c,
                  limit: 4,
                  shouldResetVoters: !0,
                })
            }, [o.votersCount, v])
            const C = (0, a.I4)(() => {
              Z(!0), d({ chat: t, messageId: n.id, option: g, offset: c, limit: 50 })
            }, [t, d, n.id, c, g])
            ;(0, a.d4)(() => {
              Z(!1)
            }, [l])
            const b = (0, a.I4)(
              (e) => {
                m({ id: e }), u()
              },
              [u, m]
            )
            return a.ZP.createElement(
              'div',
              { className: 'PollAnswerResults' },
              a.ZP.createElement(
                'div',
                { className: 'poll-voters' },
                l
                  ? l.map((e) =>
                      a.ZP.createElement(
                        Je.Z,
                        { key: e, className: 'chat-item-clickable', onClick: () => b(e) },
                        a.ZP.createElement(Ye.Z, {
                          avatarSize: 'tiny',
                          userId: e,
                          forceShowSelf: !0,
                          noStatusOrTyping: !0,
                        })
                      )
                    )
                  : a.ZP.createElement(ze.Z, null),
                l &&
                  (function () {
                    const e = o.votersCount - l.length
                    return (
                      o.votersCount > 4 &&
                      e > 0 &&
                      a.ZP.createElement(Fs, {
                        count: e,
                        itemName: 'voter',
                        isLoading: P,
                        onClick: C,
                      })
                    )
                  })()
              ),
              a.ZP.createElement(
                'div',
                { className: 'answer-head', dir: E.isRtl ? 'rtl' : void 0 },
                a.ZP.createElement('span', { className: 'answer-title', dir: 'auto' }, p),
                a.ZP.createElement(
                  'span',
                  { className: 'answer-percent', dir: E.isRtl ? 'auto' : void 0 },
                  ((f = o.votersCount), (I = r) > 0 ? ((f / I) * 100).toFixed() : 0),
                  '%'
                )
              )
            )
            var f, I
          })
        ),
        Ql = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
                pollResults: { chatId: t, messageId: n },
              } = (0, r.jU)(e),
              { lastSyncTime: a } = e
            return t && n
              ? { chat: (0, r.Z1)(e, t), message: (0, r.hj)(e, t, n), lastSyncTime: a }
              : {}
          })((e) => {
            let { onClose: t, isActive: n, chat: s, message: i, lastSyncTime: r } = e
            const l = (0, M.Z)()
            if (((0, oe.Z)({ isActive: n, onBack: t }), !i || !s))
              return a.ZP.createElement(ze.Z, null)
            const { summary: c, results: d } = (0, o.t9)(i)
            if (!d.results) return
            const m = (0, $e.ee)(d.results, 'option')
            return a.ZP.createElement(
              'div',
              { className: 'PollResults', dir: l.isRtl ? 'rtl' : void 0 },
              a.ZP.createElement(
                'h3',
                { className: 'poll-question', dir: 'auto' },
                (0, X.Z)(c.question, ['emoji', 'br'])
              ),
              a.ZP.createElement(
                'div',
                { className: 'poll-results-list custom-scroll' },
                Boolean(r) &&
                  c.answers.map((e) =>
                    a.ZP.createElement(Wl, {
                      key: `${i.id}-${e.option}`,
                      chat: s,
                      message: i,
                      answer: e,
                      answerVote: m[e.option],
                      totalVoters: d.totalVoters,
                    })
                  ),
                !r && a.ZP.createElement(ze.Z, null)
              )
            )
          })
        )
      var ec = n(98138)
      const tc = 'Qj1MQaLfhumlxACIpkUl',
        nc = 'ph5g3hCSQ_72FnZ3YkuA',
        ac = 'bYZBp9H7Ks8tqaBvQm57',
        sc = 'sV6D57DhbsFwQhRNzw9K',
        ic = 'pUkmozcBdIn4yWGGPoX1',
        oc = 'JT0__kgf23rGv5BWQF2s',
        rc = 'gx85t_IsGh2fgS2yDGtk',
        lc = 'o9l56jP2uXfAul061gXq',
        cc = 'ByQF8Qg3NcYnBCvGwoH0',
        dc = 5 * u.Gw,
        mc = (0, a.X$)(
          (0, i.c$)((e) => {
            const { createTopicPanel: t } = (0, r.jU)(e)
            return {
              chat: t?.chatId ? (0, r.Z1)(e, t.chatId) : void 0,
              createTopicPanel: t,
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              isActive: t,
              chat: n,
              createTopicPanel: s,
              isCurrentUserPremium: o,
              onClose: r,
            } = e
            const { createTopic: l, openPremiumModal: c } = (0, i.Sv)(),
              [d, u] = (0, a.eJ)(''),
              [h, P] = (0, a.eJ)(0),
              [Z, v] = (0, a.eJ)(void 0),
              g = (0, M.Z)(),
              p = Boolean(d),
              E = Boolean(s?.isLoading)
            ;(0, oe.Z)({ isActive: t, onBack: r })
            const C = (0, a.I4)((e) => {
                u(e.target.value)
              }, []),
              b = (0, a.I4)(() => {
                P((e) => (0, qt.Z)((0, ec.fB)().length, e + 1))
              }, []),
              f = (0, a.I4)(() => {
                l({ chatId: n.id, title: d, iconColor: (0, ec.fB)()[h], iconEmojiId: Z })
              }, [n, l, h, Z, d]),
              I = (0, a.I4)(
                (e) => {
                  e.isFree || o || e.id === m.Zkg
                    ? e.id !== m.Zkg
                      ? v(e.id)
                      : v(void 0)
                    : c({ initialSection: 'animated_emoji' })
                },
                [o, c]
              ),
              y = (0, a.Ye)(
                () => ({ id: 0, title: d, iconColor: (0, ec.fB)()[h], iconEmojiId: Z }),
                [h, Z, d]
              )
            if (n?.isForum)
              return a.ZP.createElement(
                'div',
                { className: tc },
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)(nc, 'custom-scroll') },
                  a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)(ac, sc) },
                    a.ZP.createElement('span', { className: lc }, g('CreateTopicTitle')),
                    a.ZP.createElement(
                      G.Z,
                      {
                        name: 'zoom-fade',
                        activeKey: Number(y.iconEmojiId) || 0,
                        shouldCleanup: !0,
                        direction: 1,
                        className: oc,
                      },
                      a.ZP.createElement(Ke.Z, {
                        topic: y,
                        className: (0, Q.Z)(rc, 'TVwtYFuxdwJH5LZ7yvwu'),
                        onClick: b,
                        size: dc,
                        noLoopLimit: !0,
                      })
                    ),
                    a.ZP.createElement(He.Z, {
                      value: d,
                      onChange: C,
                      label: g('lng_forum_topic_title'),
                      disabled: E,
                      teactExperimentControlled: !0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)(ac, ic) },
                    a.ZP.createElement(na, {
                      idPrefix: 'create-topic-icons-set-',
                      loadAndPlay: t,
                      onCustomEmojiSelect: I,
                      className: cc,
                      withDefaultTopicIcons: !0,
                    })
                  )
                ),
                a.ZP.createElement(
                  us.Z,
                  { isShown: p, disabled: E, onClick: f, ariaLabel: g('Save') },
                  E
                    ? a.ZP.createElement(ce.Z, { color: 'white' })
                    : a.ZP.createElement('i', { className: 'icon-check' })
                )
              )
          })
        ),
        uc = 5 * u.Gw,
        hc = (0, a.X$)(
          (0, i.c$)((e) => {
            const { editTopicPanel: t } = (0, r.jU)(e),
              n = t?.chatId ? (0, r.Z1)(e, t.chatId) : void 0
            return {
              chat: n,
              topic: t?.topicId ? n?.topics?.[t?.topicId] : void 0,
              editTopicPanel: t,
              isCurrentUserPremium: (0, r.wV)(e),
            }
          })((e) => {
            let {
              isActive: t,
              chat: n,
              topic: s,
              editTopicPanel: o,
              isCurrentUserPremium: r,
              onClose: l,
            } = e
            const { editTopic: c, openPremiumModal: d } = (0, i.Sv)(),
              [u, h] = (0, a.eJ)(''),
              [P, Z] = (0, a.eJ)(void 0),
              v = (0, M.Z)(),
              g = Boolean(o?.isLoading),
              p = s?.id === m.OxA
            ;(0, oe.Z)({ isActive: t, onBack: l }),
              (0, a.d4)(() => {
                ;(s?.title || s?.iconEmojiId) && (h(s.title), Z(s.iconEmojiId))
              }, [s])
            const E = (0, a.Ye)(
                () => u !== s?.title || P !== s?.iconEmojiId,
                [P, u, s?.iconEmojiId, s?.title]
              ),
              C = (0, a.I4)((e) => {
                const t = e.target.value
                h(t)
              }, []),
              b = (0, a.I4)(() => {
                c({ chatId: n.id, title: u, topicId: s.id, iconEmojiId: P })
              }, [n, c, P, u, s]),
              f = (0, a.I4)(
                (e) => {
                  e.isFree || r || e.id === m.Zkg
                    ? e.id !== m.Zkg
                      ? Z(e.id)
                      : Z('0')
                    : d({ initialSection: 'animated_emoji' })
                },
                [r, d]
              ),
              I = (0, a.Ye)(() => ({ ...s, title: u, iconEmojiId: P }), [P, u, s])
            if (n?.isForum)
              return a.ZP.createElement(
                'div',
                { className: tc },
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)(nc, 'custom-scroll') },
                  !s && a.ZP.createElement(ze.Z, null),
                  s &&
                    a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      a.ZP.createElement(
                        'div',
                        { className: (0, Q.Z)(ac, sc) },
                        a.ZP.createElement('span', { className: lc }, v('CreateTopicTitle')),
                        a.ZP.createElement(
                          G.Z,
                          {
                            name: 'zoom-fade',
                            activeKey: Number(I.iconEmojiId) || 0,
                            shouldCleanup: !0,
                            direction: 1,
                            className: oc,
                          },
                          a.ZP.createElement(Ke.Z, {
                            topic: I,
                            className: rc,
                            size: uc,
                            noLoopLimit: !0,
                          })
                        ),
                        a.ZP.createElement(He.Z, {
                          value: u,
                          onChange: C,
                          label: v('lng_forum_topic_title'),
                          disabled: g,
                          teactExperimentControlled: !0,
                        })
                      ),
                      !p &&
                        a.ZP.createElement(
                          'div',
                          { className: (0, Q.Z)(ac, ic) },
                          a.ZP.createElement(na, {
                            idPrefix: 'edit-topic-icons-set-',
                            loadAndPlay: t,
                            onCustomEmojiSelect: f,
                            className: cc,
                            withDefaultTopicIcons: !0,
                          })
                        )
                    )
                ),
                a.ZP.createElement(
                  us.Z,
                  { isShown: E, disabled: g, onClick: b, ariaLabel: v('Save') },
                  g
                    ? a.ZP.createElement(ce.Z, { color: 'white' })
                    : a.ZP.createElement('i', { className: 'icon-check' })
                )
              )
          })
        ),
        Pc = 'Please provide first name',
        Zc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { userId: n } = t
            const a = (0, r.dy)(e, n),
              s = (0, r.Z1)(e, n),
              { progress: i } = (0, r.jU)(e).management
            return { user: a, progress: i, isMuted: s && (0, o.i4)(s, (0, r.dZ)(e), (0, r.NJ)(e)) }
          })((e) => {
            let { userId: t, user: n, progress: r, isMuted: l, onClose: c, isActive: d } = e
            const {
                updateContact: u,
                deleteContact: h,
                closeManagement: P,
                uploadContactProfilePhoto: Z,
              } = (0, i.Sv)(),
              [v, g, p] = (0, I.Z)(),
              [E, C, b] = (0, I.Z)(),
              [f, y] = (0, a.eJ)(!1),
              [S, k] = (0, a.eJ)(),
              N = (0, M.Z)()
            ;(0, oe.Z)({ isActive: d, onBack: c })
            const w = (n && n.firstName) || '',
              T = (n && n.lastName) || '',
              [A, R] = (0, a.eJ)(w),
              [L, F] = (0, a.eJ)(T),
              [x, B] = (0, a.eJ)(!l)
            ;(0, a.d4)(() => {
              B(!l)
            }, [l]),
              (0, a.d4)(() => {
                y(!1), p()
              }, [p, t]),
              (0, a.d4)(() => {
                R(w), F(T)
              }, [w, T, n]),
              (0, a.d4)(() => {
                r === s.wv.Complete && (y(!1), k(void 0), p())
              }, [p, r])
            const D = (0, a.I4)(
                (e) => {
                  R(e.target.value), y(!0), S === Pc && k(void 0)
                },
                [S]
              ),
              O = (0, a.I4)((e) => {
                F(e.target.value), y(!0)
              }, []),
              U = (0, a.I4)((e) => {
                B(e.target.checked), y(!0)
              }, []),
              _ = (0, a.I4)(() => {
                const e = A.trim(),
                  n = L.trim()
                e.length ? u({ userId: t, isMuted: !x, firstName: e, lastName: n }) : k(Pc)
              }, [A, L, u, t, x]),
              $ = (0, a.I4)(() => {
                h({ userId: t }), p(), P()
              }, [p, P, h, t]),
              j = (0, a.sO)(null),
              G = (0, a.sO)(!1),
              V = (0, a.I4)(() => {
                j.current?.click(), (G.current = !0)
              }, []),
              z = (0, a.I4)(() => {
                j.current?.click(), (G.current = !1)
              }, []),
              H = (0, a.I4)(() => {
                b(), y(!0), Z({ userId: t })
              }, [b, Z, t]),
              X = (0, a.I4)(
                (e) => {
                  y(!0), Z({ userId: t, file: e, isSuggest: G.current })
                },
                [Z, t]
              )
            if (!n) return
            const J = !(0, o.cS)(n) && n.id !== m.awM,
              q = r === s.wv.InProgress,
              Y = n.fullInfo?.personalPhoto,
              K = n.fullInfo?.profilePhoto || n.fullInfo?.fallbackPhoto
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(Ye.Z, {
                    userId: n.id,
                    avatarSize: 'jumbo',
                    status: 'original name',
                    withFullInfo: !0,
                  }),
                  a.ZP.createElement(He.Z, {
                    id: 'user-first-name',
                    label: N('UserInfo.FirstNamePlaceholder'),
                    onChange: D,
                    value: A,
                    error: S === Pc ? S : void 0,
                  }),
                  a.ZP.createElement(He.Z, {
                    id: 'user-last-name',
                    label: N('UserInfo.LastNamePlaceholder'),
                    onChange: O,
                    value: L,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection narrow' },
                    a.ZP.createElement(ht.Z, {
                      checked: x,
                      label: N('Notifications'),
                      subLabel: N(
                        x ? 'UserInfo.NotificationsEnabled' : 'UserInfo.NotificationsDisabled'
                      ),
                      onChange: U,
                    })
                  )
                ),
                J &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'camera-add', ripple: !0, onClick: V },
                      N('UserInfo.SuggestPhoto', n.firstName)
                    ),
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'camera-add', ripple: !0, onClick: z },
                      N('UserInfo.SetCustomPhoto', n.firstName)
                    ),
                    Y &&
                      a.ZP.createElement(
                        Je.Z,
                        {
                          leftElement: a.ZP.createElement(De.Z, {
                            photo: K,
                            noPersonalPhoto: !0,
                            user: n,
                            size: 'mini',
                            className: 'personal-photo',
                          }),
                          ripple: !0,
                          onClick: C,
                        },
                        N('UserInfo.ResetCustomPhoto')
                      ),
                    a.ZP.createElement(
                      'p',
                      { className: 'text-muted', dir: 'auto' },
                      N('UserInfo.CustomPhotoInfo', n.firstName)
                    )
                  ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'delete', ripple: !0, destructive: !0, onClick: g },
                    N('DeleteContact')
                  )
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: f, onClick: _, disabled: q, ariaLabel: N('Save') },
                q
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: v,
                onClose: p,
                text: N('AreYouSureDeleteContact'),
                confirmLabel: N('DeleteContact'),
                confirmHandler: $,
                confirmIsDestructive: !0,
              }),
              a.ZP.createElement(mt.Z, {
                isOpen: E,
                onClose: b,
                text: N('UserInfo.ResetToOriginalAlertText', n.firstName),
                confirmLabel: N('Reset'),
                confirmHandler: H,
                confirmIsDestructive: !0,
              }),
              a.ZP.createElement(mi, { onChange: X, inputRef: j })
            )
          })
        ),
        vc = "Group title can't be empty",
        gc = [
          'sendMessages',
          'embedLinks',
          'sendPolls',
          'changeInfo',
          'inviteUsers',
          'pinMessages',
          'manageTopics',
          'sendPhotos',
          'sendVideos',
          'sendRoundvideos',
          'sendVoices',
          'sendAudios',
          'sendDocs',
        ],
        pc = gc.length + 1,
        Ec = (0, ne.Ds)((e) => e(), 500, !1),
        Cc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { management: s, limitReachedModal: i } = (0, r.jU)(e),
              { progress: l } = s,
              c = Boolean(a.fullInfo?.linkedChatId),
              d = (0, o.G9)(a),
              { invites: m } = s.byChatId[n] || {},
              u = !c && ((0, o.VE)(a, 'changeInfo') || a.isCreator)
            return {
              chat: a,
              progress: l,
              isBasicGroup: d,
              hasLinkedChannel: c,
              canChangeInfo: d ? a.isCreator : (0, o.VE)(a, 'changeInfo'),
              canBanUsers: d ? a.isCreator : (0, o.VE)(a, 'banUsers'),
              canInvite: d ? a.isCreator : (0, o.VE)(a, 'inviteUsers'),
              exportedInvites: m,
              lastSyncTime: e.lastSyncTime,
              isChannelsPremiumLimitReached: 'channels' === i?.limit,
              availableReactions: e.availableReactions,
              canEditForum: u,
            }
          })((e) => {
            var t
            let {
              chatId: n,
              chat: r,
              progress: l,
              isBasicGroup: c,
              hasLinkedChannel: d,
              canChangeInfo: m,
              canBanUsers: u,
              canInvite: h,
              canEditForum: P,
              isActive: Z,
              exportedInvites: v,
              lastSyncTime: g,
              isChannelsPremiumLimitReached: p,
              availableReactions: E,
              onScreenSelect: C,
              onClose: b,
            } = e
            const {
                togglePreHistoryHidden: f,
                updateChat: y,
                deleteChat: S,
                leaveChannel: k,
                deleteChannel: N,
                closeManagement: w,
                openChat: T,
                loadExportedChatInvites: L,
                loadChatJoinRequests: F,
                toggleForum: x,
              } = (0, i.Sv)(),
              [B, D, O] = (0, I.Z)(),
              U = r.title,
              _ = (r.fullInfo && r.fullInfo.about) || '',
              [$, j] = (0, a.eJ)(!1),
              [G, V] = (0, a.eJ)(U),
              [z, H] = (0, a.eJ)(_),
              [J, q] = (0, a.eJ)(),
              [Y, K] = (0, a.eJ)(),
              [W, Q] = (0, a.eJ)(r.isForum),
              ee = (0, o.RT)(r),
              te = (0, R.Z)(ee, !1, A.IU.BlobUrl),
              ne = (0, a.Ye)(() => d || (0, o.Sb)(r), [r, d]),
              ae = (0, M.Z)(),
              se = (0, a.sO)(null)
            ;(0, oe.Z)({ isActive: Z, onBack: b }),
              (0, a.d4)(() => {
                g && h && (L({ chatId: n }), L({ chatId: n, isRevoked: !0 }), F({ chatId: n }))
              }, [n, L, g, h, F]),
              (0, a.d4)(() => {
                Q(Boolean(r.isForum))
              }, [r.isForum]),
              (0, a.d4)(() => {
                l === s.wv.Complete && (j(!1), K(void 0))
              }, [l])
            const ie = (0, a.I4)(() => {
                C(s.u1.ChatPrivacyType)
              }, [C]),
              re = (0, a.I4)(() => {
                C(s.u1.Discussion)
              }, [C]),
              le = (0, a.I4)(() => {
                C(s.u1.Reactions)
              }, [C]),
              de = (0, a.I4)(() => {
                C(s.u1.GroupPermissions)
              }, [C]),
              me = (0, a.I4)(() => {
                C(s.u1.ChatAdministrators)
              }, [C]),
              ue = (0, a.I4)(() => {
                C(s.u1.Invites)
              }, [C]),
              he = (0, a.I4)(() => {
                C(s.u1.JoinRequests)
              }, [C]),
              Pe = (0, a.I4)((e) => {
                q(e), j(!0)
              }, []),
              ve = (0, a.I4)((e) => {
                V(e.target.value), j(!0)
              }, []),
              ge = (0, a.I4)((e) => {
                H(e.target.value), j(!0)
              }, []),
              pe = (0, a.I4)(() => {
                const e = G.trim(),
                  t = z.trim()
                e.length ? y({ chatId: n, title: e, about: t, photo: J }) : K(vc)
              }, [z, n, J, G, y]),
              Ee = (0, a.I4)(() => {
                C(s.u1.GroupMembers)
              }, [C]),
              Ce = (0, a.I4)(() => {
                if (!r.fullInfo) return
                const { isPreHistoryHidden: e } = r.fullInfo
                f({ chatId: r.id, isEnabled: !e })
              }, [r, f]),
              be = (0, a.I4)(() => {
                Q((e) => {
                  const t = !e
                  return (
                    Ec(() => {
                      x({ chatId: n, isEnabled: t })
                    }),
                    t
                  )
                })
              }, [n, x])
            ;(0, a.d4)(() => {
              if (!p) return
              const e = se.current?.querySelector('input')
              e.checked = !r.fullInfo?.isPreHistoryHidden
            }, [p, r.fullInfo?.isPreHistoryHidden])
            const fe = (0, a.Ye)(() => {
                if (!r.fullInfo?.enabledReactions) return ae('ReactionsOff')
                if ('all' === r.fullInfo.enabledReactions.type) return ae('ReactionsAll')
                const e = r.fullInfo.enabledReactions.allowed.length,
                  t = E?.filter((e) => !e.isInactive).length || 0
                return t ? `${e} / ${t}` : `${e}`
              }, [E, r, ae]),
              Ie = (0, a.Ye)(() => {
                if (!r.defaultBannedRights) return 0
                let e = gc.filter((e) => !r.defaultBannedRights[e]).length
                const { sendStickers: t, sendGifs: n } = r.defaultBannedRights
                return t || n || (e += 1), e
              }, [r]),
              ye = (0, a.Ye)(
                () => Object.keys(r.fullInfo?.adminMembersById || {}).length,
                [r.fullInfo?.adminMembersById]
              ),
              Se = (0, a.I4)(() => {
                c ? S({ chatId: r.id }) : r.isCreator ? N({ chatId: r.id }) : k({ chatId: r.id }),
                  O(),
                  w(),
                  T({ id: void 0 })
              }, [c, r.isCreator, r.id, O, w, k, N, S, T])
            if (r.isRestricted || r.isForbidden) return
            const ke = l === s.wv.InProgress
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(ms.Z, {
                    isForForum: W,
                    currentAvatarBlobUrl: te,
                    onChange: Pe,
                    disabled: !m,
                  }),
                  a.ZP.createElement(He.Z, {
                    id: 'group-title',
                    label: ae('GroupName'),
                    onChange: ve,
                    value: G,
                    error: Y === vc ? Y : void 0,
                    disabled: !m,
                  }),
                  a.ZP.createElement(gs, {
                    id: 'group-about',
                    className: 'mb-2',
                    label: ae('DescriptionPlaceholder'),
                    maxLength: 255,
                    maxLengthIndicator: (255 - z.length).toString(),
                    onChange: ge,
                    value: z,
                    disabled: !m,
                    noReplaceNewlines: !0,
                  }),
                  r.isCreator &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'lock', multiline: !0, onClick: ie },
                      a.ZP.createElement('span', { className: 'title' }, ae('GroupType')),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        ae(ne ? 'TypePublic' : 'TypePrivate')
                      )
                    ),
                  d &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'message', multiline: !0, onClick: re },
                      a.ZP.createElement('span', { className: 'title' }, ae('LinkedChannel')),
                      a.ZP.createElement('span', { className: 'subtitle' }, ae('DiscussionUnlink'))
                    ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'permissions', multiline: !0, onClick: de, disabled: !u },
                    a.ZP.createElement('span', { className: 'title' }, ae('ChannelPermissions')),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle', dir: 'auto' },
                      Ie,
                      '/',
                      pc - (W ? 0 : 1)
                    )
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'heart-outline', multiline: !0, onClick: le, disabled: !m },
                    a.ZP.createElement('span', { className: 'title' }, ae('Reactions')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, fe)
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'admin', multiline: !0, onClick: me },
                    a.ZP.createElement('span', { className: 'title' }, ae('ChannelAdministrators')),
                    a.ZP.createElement('span', { className: 'subtitle' }, (0, Ze.kh)(ye))
                  ),
                  h &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'link', onClick: ue, multiline: !0, disabled: !v },
                      a.ZP.createElement(
                        'span',
                        { className: 'title' },
                        ae('GroupInfo.InviteLinks')
                      ),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        v ? (0, Ze.kh)(v.length) : ae('Loading')
                      )
                    ),
                  Boolean(r.joinRequests?.length) &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'add-user-filled', onClick: he, multiline: !0 },
                      a.ZP.createElement('span', { className: 'title' }, ae('MemberRequests')),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        (0, Ze.kh)(r.joinRequests.length)
                      )
                    ),
                  P &&
                    a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      a.ZP.createElement(
                        Je.Z,
                        { icon: 'forums', ripple: !0, onClick: be },
                        a.ZP.createElement('span', null, ae('ChannelTopics')),
                        a.ZP.createElement(Zi.Z, {
                          id: 'group-notifications',
                          label: ae('ChannelTopics'),
                          checked: W,
                          inactive: !0,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'section-info section-info_push' },
                        ae('ForumToggleDescription')
                      )
                    )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'group', multiline: !0, onClick: Ee },
                    a.ZP.createElement('span', { className: 'title' }, ae('GroupMembers')),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle' },
                      (0, Ze.kh)(null !== (t = r.membersCount) && void 0 !== t ? t : 0)
                    )
                  ),
                  !ne &&
                    r.fullInfo &&
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem narrow no-selection', ref: se },
                      a.ZP.createElement(ht.Z, {
                        checked: !r.fullInfo.isPreHistoryHidden,
                        label: ae('ChatHistory'),
                        onChange: Ce,
                        disabled: !u,
                      })
                    )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'delete', ripple: !0, destructive: !0, onClick: D },
                    ae('DeleteMega')
                  )
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: $, onClick: pe, disabled: ke, ariaLabel: ae('Save') },
                ke
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: B,
                onClose: O,
                textParts: (0, X.Z)(
                  c || !r.isCreator
                    ? ae('AreYouSureDeleteAndExit')
                    : ae('AreYouSureDeleteThisChatWithGroup', r.title),
                  ['br', 'simple_markdown']
                ),
                confirmLabel: c || !r.isCreator ? ae('DeleteMega') : ae('DeleteGroupForAll'),
                confirmHandler: Se,
                confirmIsDestructive: !0,
              })
            )
          })
        ),
        bc = [
          'embedLinks',
          'sendPolls',
          'sendPhotos',
          'sendVideos',
          'sendRoundvideos',
          'sendVoices',
          'sendAudios',
          'sendDocs',
          'sendStickers',
          'sendGifs',
        ],
        fc = [...bc, 'sendPlain']
      function Ic(e) {
        const [t, n] = (0, a.eJ)({}),
          [s, i] = (0, a.eJ)(!1),
          [o, r] = (0, a.eJ)(!1)
        ;(0, a.d4)(() => {
          n(e || {}),
            i(!1),
            setTimeout(() => {
              r(!1)
            }, 250)
        }, [e])
        const l = (0, a.I4)(
          (a) => {
            const { name: s } = a.target,
              o = s
            function r(e) {
              return !e || void 0
            }
            const l = t
            let c = { ...l, [o]: r(l[o]), ...('sendStickers' === o && { sendGifs: r(l[o]) }) }
            const d = () => {
              const e = bc.map((e) => c[e])
              e.some((e) => !e)
                ? (c = { ...c, sendMedia: void 0 })
                : e.every(Boolean) && (c = { ...c, sendMedia: !0 })
            }
            'sendMedia' !== o
              ? d()
              : (c = { ...c, ...bc.reduce((e, t) => Object.assign(e, { [t]: c.sendMedia }), {}) }),
              'embedLinks' !== o && !c.embedLinks && c.sendPlain && (c = { ...c, embedLinks: !0 }),
              'sendPlain' !== o &&
                !c.embedLinks &&
                c.sendPlain &&
                (c = { ...c, sendPlain: void 0 }),
              'sendMedia' !== o && d()
            const m = fc.every((e) => c[e])
            ;(c = { ...c, sendMessages: !!m || void 0 }),
              n(c),
              i(
                !e ||
                  Object.keys(c).some((t) => {
                    const n = t
                    return Boolean(e[n]) !== Boolean(c[n])
                  })
              )
          },
          [e, t]
        )
        return {
          permissions: t,
          isLoading: o,
          havePermissionChanged: s,
          handlePermissionChange: l,
          setIsLoading: r,
        }
      }
      const yc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              s = Boolean(a?.fullInfo?.linkedChatId)
            return { chat: a, currentUserId: e.currentUserId, hasLinkedChat: s }
          })((e) => {
            let {
              onScreenSelect: t,
              onChatMemberSelect: n,
              chat: r,
              currentUserId: l,
              hasLinkedChat: c,
              onClose: d,
              isActive: m,
            } = e
            const { updateChatDefaultBannedRights: u, showNotification: h } = (0, i.Sv)(),
              {
                permissions: P,
                havePermissionChanged: v,
                isLoading: g,
                handlePermissionChange: p,
                setIsLoading: E,
              } = Ic(r?.defaultBannedRights),
              C = (0, M.Z)(),
              { isForum: b } = r || {},
              f = (0, a.Ye)(() => r && (0, o.Sb)(r), [r]),
              I = c || f
            ;(0, oe.Z)({ isActive: m, onBack: d })
            const y = (0, a.I4)(() => {
                t(s.u1.GroupRemovedUsers)
              }, [t]),
              S = (0, a.I4)(() => {
                t(s.u1.GroupUserPermissionsCreate)
              }, [t]),
              k = (0, a.I4)(
                (e) => {
                  n(e.userId, e.promotedByUserId === l), t(s.u1.GroupUserPermissions)
                },
                [l, n, t]
              ),
              [N, w] = (0, a.eJ)(!1),
              T = (0, a.I4)(
                (e) => {
                  ;(0, Z.Z)(e), w(!N)
                },
                [N]
              ),
              A = (0, a.I4)(() => {
                h({ message: C('lng_rights_permission_unavailable') })
              }, [C, h]),
              R = (0, a.I4)(() => {
                r && (E(!0), u({ chatId: r.id, bannedRights: P }))
              }, [r, P, E, u]),
              L = (0, a.Ye)(
                () =>
                  r && r.fullInfo && r.fullInfo.kickedMembers ? r.fullInfo.kickedMembers.length : 0,
                [r]
              ),
              F = (0, a.Ye)(
                () =>
                  r && r.fullInfo && r.fullInfo.members
                    ? r.fullInfo.members.filter((e) => {
                        let { bannedRights: t } = e
                        return Boolean(t)
                      })
                    : [],
                [r]
              ),
              x = (0, a.I4)(
                (e) => {
                  const { bannedRights: t } = e
                  if (!t || !r) return
                  const { defaultBannedRights: n } = r
                  return Object.keys(t).reduce((e, a) => {
                    const s = a
                    if (
                      !t[s] ||
                      n?.[s] ||
                      'sendInline' === s ||
                      'viewMessages' === s ||
                      'sendGames' === s
                    )
                      return e
                    const i = (function (e) {
                      switch (e) {
                        case 'sendMessages':
                          return 'UserRestrictionsNoSend'
                        case 'sendMedia':
                          return 'UserRestrictionsNoSendMedia'
                        case 'sendStickers':
                          return 'UserRestrictionsNoSendStickers'
                        case 'embedLinks':
                          return 'UserRestrictionsNoEmbedLinks'
                        case 'sendPolls':
                          return 'UserRestrictionsNoSendPolls'
                        case 'changeInfo':
                          return 'UserRestrictionsNoChangeInfo'
                        case 'inviteUsers':
                          return 'UserRestrictionsInviteUsers'
                        case 'pinMessages':
                          return 'UserRestrictionsPinMessages'
                        case 'manageTopics':
                          return 'GroupPermission.NoManageTopics'
                        case 'sendPlain':
                          return 'UserRestrictionsNoSendText'
                        case 'sendDocs':
                          return 'UserRestrictionsNoSendDocs'
                        case 'sendRoundvideos':
                          return 'UserRestrictionsNoSendRound'
                        case 'sendVoices':
                          return 'UserRestrictionsNoSendVoice'
                        case 'sendAudios':
                          return 'UserRestrictionsNoSendMusic'
                        case 'sendVideos':
                          return 'UserRestrictionsNoSendVideos'
                        case 'sendPhotos':
                          return 'UserRestrictionsNoSendPhotos'
                        default:
                          return
                      }
                    })(s)
                    if (!i) return e
                    const o = C(i)
                    return `${e}${e.length ? `, ${o}` : o}`
                  }, '')
                },
                [r, C]
              )
            return a.ZP.createElement(
              'div',
              {
                className: 'Management with-shifted-dropdown',
                style: '--shift-height: 504px;--before-shift-height: 112px;',
              },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section without-bottom-shadow' },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading', dir: 'auto' },
                    C('ChannelPermissionsHeader')
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection with-checkbox' },
                    a.ZP.createElement(ht.Z, {
                      name: 'sendPlain',
                      checked: !P.sendPlain,
                      label: C('UserRestrictionsSend'),
                      blocking: !0,
                      onChange: p,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection with-checkbox' },
                    a.ZP.createElement(ht.Z, {
                      name: 'sendMedia',
                      checked: !P.sendMedia,
                      label: C('UserRestrictionsSendMedia'),
                      blocking: !0,
                      rightIcon: N ? 'up' : 'down',
                      onChange: p,
                      onClickLabel: T,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'DropdownListTrap' },
                    a.ZP.createElement(
                      'div',
                      { className: (0, Q.Z)('DropdownList', N && 'DropdownList--open') },
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendPhotos',
                          checked: !P.sendPhotos,
                          label: C('UserRestrictionsSendPhotos'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendVideos',
                          checked: !P.sendVideos,
                          label: C('UserRestrictionsSendVideos'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendStickers',
                          checked: !P.sendStickers && !P.sendGifs,
                          label: C('UserRestrictionsSendStickers'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendAudios',
                          checked: !P.sendAudios,
                          label: C('UserRestrictionsSendMusic'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendDocs',
                          checked: !P.sendDocs,
                          label: C('UserRestrictionsSendFiles'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendVoices',
                          checked: !P.sendVoices,
                          label: C('UserRestrictionsSendVoices'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendRoundvideos',
                          checked: !P.sendRoundvideos,
                          label: C('UserRestrictionsSendRound'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'embedLinks',
                          checked: !P.embedLinks,
                          label: C('UserRestrictionsEmbedLinks'),
                          blocking: !0,
                          onChange: p,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'sendPolls',
                          checked: !P.sendPolls,
                          label: C('UserRestrictionsSendPolls'),
                          blocking: !0,
                          onChange: p,
                        })
                      )
                    )
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: (0, Q.Z)('part', N && 'shifted') },
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection with-checkbox' },
                      a.ZP.createElement(ht.Z, {
                        name: 'inviteUsers',
                        checked: !P.inviteUsers,
                        label: C('UserRestrictionsInviteUsers'),
                        blocking: !0,
                        onChange: p,
                      })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection with-checkbox', onClick: I ? A : void 0 },
                      a.ZP.createElement(ht.Z, {
                        name: 'pinMessages',
                        checked: !P.pinMessages,
                        label: C('UserRestrictionsPinMessages'),
                        disabled: I,
                        blocking: !0,
                        onChange: p,
                      })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection with-checkbox', onClick: I ? A : void 0 },
                      a.ZP.createElement(ht.Z, {
                        name: 'changeInfo',
                        checked: !P.changeInfo,
                        label: C('UserRestrictionsChangeInfo'),
                        blocking: !0,
                        disabled: I,
                        onChange: p,
                      })
                    ),
                    b &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection with-checkbox' },
                        a.ZP.createElement(ht.Z, {
                          name: 'manageTopics',
                          checked: !P.manageTopics,
                          label: C('CreateTopicsPermission'),
                          blocking: !0,
                          onChange: p,
                        })
                      )
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)('section', N && 'shifted') },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'delete-user', multiline: !0, narrow: !0, onClick: y },
                    a.ZP.createElement('span', { className: 'title' }, C('ChannelBlockedUsers')),
                    a.ZP.createElement('span', { className: 'subtitle' }, L)
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: (0, Q.Z)('section', N && 'shifted') },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading', dir: 'auto' },
                    C('PrivacyExceptions')
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'add-user', onClick: S },
                    C('ChannelAddException')
                  ),
                  F.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      {
                        key: e.userId,
                        className: 'chat-item-clickable exceptions-member',
                        onClick: () => k(e),
                      },
                      a.ZP.createElement(Ye.Z, {
                        userId: e.userId,
                        status: x(e),
                        forceShowSelf: !0,
                      })
                    )
                  )
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: v, onClick: R, ariaLabel: C('Save'), disabled: g },
                g
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              )
            )
          })
        ),
        Sc = (0, a.X$)(
          (0, i.c$)((e) => {
            const { currentUserId: t } = e
            return { currentUserId: t }
          })((e) => {
            let { chat: t, currentUserId: n, isOpen: s, onClose: r } = e
            const { loadMoreMembers: l, deleteChatMember: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u] = (0, a.eJ)(''),
              h = (0, a.Ye)(() => {
                const e = (t.fullInfo?.members || []).reduce(
                    (e, t) => (t.isAdmin || t.isOwner || t.userId === n || e.push(t.userId), e),
                    []
                  ),
                  a = (0, i.Rd)().users.byId
                return (0, o.kK)(e, a, m)
              }, [t.fullInfo?.members, n, m]),
              P = (0, a.I4)(
                (e) => {
                  c({ chatId: t.id, userId: e }), r()
                },
                [t.id, c, r]
              )
            return a.ZP.createElement(Qe, {
              isOpen: s,
              chatOrUserIds: h,
              searchPlaceholder: d('ChannelBlockUser'),
              search: m,
              onSearchChange: u,
              loadMore: l,
              onSelectChatOrUser: P,
              onClose: r,
            })
          })
        ),
        kc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { byId: s } = e.users
            return {
              chat: a,
              usersById: s,
              canDeleteMembers: a && ((0, o.VE)(a, 'banUsers') || a.isCreator),
              isChannel: a && (0, o.eA)(a),
            }
          })((e) => {
            let {
              chat: t,
              usersById: n,
              canDeleteMembers: s,
              isChannel: r,
              onClose: l,
              isActive: c,
            } = e
            const { updateChatMemberBannedRights: d } = (0, i.Sv)(),
              m = (0, M.Z)(),
              [u, h, P] = (0, I.Z)()
            ;(0, oe.Z)({ isActive: c, onBack: l })
            const Z = (0, a.Ye)(
                () => (t && t.fullInfo && t.fullInfo.kickedMembers ? t.fullInfo.kickedMembers : []),
                [t]
              ),
              v = (0, a.I4)(
                (e) => {
                  if (!e.kickedByUserId) return
                  const t = n[e.kickedByUserId]
                  return t ? m('UserRemovedBy', (0, o.Js)(t)) : void 0
                },
                [m, n]
              ),
              g = (0, a.I4)(
                (e) => {
                  if (t)
                    return [
                      {
                        title: m('Unblock'),
                        icon: 'delete',
                        destructive: !0,
                        handler: () => d({ chatId: t.id, userId: e.userId, bannedRights: {} }),
                      },
                    ]
                },
                [m, t, d]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section', dir: m.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'p',
                    { className: 'text-muted' },
                    m(r ? 'NoBlockedChannel2' : 'NoBlockedGroup2')
                  ),
                  Z.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      {
                        key: e.userId,
                        className: 'chat-item-clickable',
                        ripple: !0,
                        contextActions: g(e),
                      },
                      a.ZP.createElement(Ye.Z, {
                        userId: e.userId,
                        status: v(e),
                        forceShowSelf: !0,
                      })
                    )
                  ),
                  s &&
                    a.ZP.createElement(
                      us.Z,
                      {
                        isShown: !0,
                        onClick: h,
                        ariaLabel: m('Channel.EditAdmin.Permission.BanUsers'),
                      },
                      a.ZP.createElement('i', { className: 'icon-add-user-filled' })
                    ),
                  t && s && a.ZP.createElement(Sc, { chat: t, isOpen: u, onClose: P })
                )
              )
            )
          })
        ),
        Nc = "Channel title can't be empty",
        wc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { management: s } = (0, r.jU)(e),
              { progress: i } = s,
              l = Boolean(a?.isSignaturesShown),
              { invites: c } = s.byChatId[n] || {}
            return {
              chat: a,
              progress: i,
              isSignaturesShown: l,
              canChangeInfo: (0, o.VE)(a, 'changeInfo'),
              canInvite: (0, o.VE)(a, 'inviteUsers'),
              lastSyncTime: e.lastSyncTime,
              exportedInvites: c,
              availableReactions: e.availableReactions,
            }
          })((e) => {
            var t
            let {
              chatId: n,
              chat: r,
              progress: l,
              isSignaturesShown: c,
              canChangeInfo: d,
              canInvite: m,
              exportedInvites: u,
              lastSyncTime: h,
              isActive: P,
              availableReactions: Z,
              onScreenSelect: v,
              onClose: g,
            } = e
            const {
                updateChat: p,
                toggleSignatures: E,
                closeManagement: C,
                leaveChannel: b,
                deleteChannel: f,
                openChat: y,
                loadExportedChatInvites: S,
                loadChatJoinRequests: k,
              } = (0, i.Sv)(),
              N = r?.title || '',
              w = (r?.fullInfo && r.fullInfo.about) || '',
              T = r?.fullInfo?.linkedChatId,
              [L, F, x] = (0, I.Z)(),
              [B, D] = (0, a.eJ)(!1),
              [O, U] = (0, a.eJ)(N),
              [_, $] = (0, a.eJ)(w),
              [j, G] = (0, a.eJ)(),
              [V, z] = (0, a.eJ)(),
              H = r && (0, o.RT)(r),
              X = (0, R.Z)(H, !1, A.IU.BlobUrl),
              J = (0, M.Z)()
            ;(0, oe.Z)({ isActive: P, onBack: g }),
              (0, a.d4)(() => {
                h && (S({ chatId: n }), S({ chatId: n, isRevoked: !0 }), k({ chatId: n }))
              }, [n, S, h, k]),
              (0, a.d4)(() => {
                l === s.wv.Complete && (D(!1), z(void 0))
              }, [l])
            const q = Object.keys(r.fullInfo?.adminMembersById || {}).length,
              Y = r?.fullInfo?.kickedMembers?.length || 0,
              K = (0, a.I4)(() => {
                v(s.u1.ChatPrivacyType)
              }, [v]),
              W = (0, a.I4)(() => {
                v(s.u1.Discussion)
              }, [v]),
              Q = (0, a.I4)(() => {
                v(s.u1.Reactions)
              }, [v]),
              ee = (0, a.I4)(() => {
                v(s.u1.ChatAdministrators)
              }, [v]),
              te = (0, a.I4)(() => {
                v(s.u1.Invites)
              }, [v]),
              ne = (0, a.I4)(() => {
                v(s.u1.JoinRequests)
              }, [v]),
              ae = (0, a.I4)((e) => {
                G(e), D(!0)
              }, []),
              se = (0, a.I4)((e) => {
                U(e.target.value), D(!0)
              }, []),
              ie = (0, a.I4)((e) => {
                $(e.target.value), D(!0)
              }, []),
              re = (0, a.I4)(() => {
                const e = O.trim(),
                  t = _.trim()
                e.length ? p({ chatId: n, title: e, about: t, photo: j }) : z(Nc)
              }, [_, n, j, O, p]),
              le = (0, a.I4)(() => {
                E({ chatId: n, isEnabled: !c })
              }, [n, c, E]),
              de = (0, a.I4)(() => {
                v(s.u1.ChannelSubscribers)
              }, [v]),
              me = (0, a.I4)(() => {
                v(s.u1.ChannelRemovedUsers)
              }, [v]),
              ue = (0, a.I4)(() => {
                r.isCreator ? f({ chatId: r.id }) : b({ chatId: r.id }), x(), C(), y({ id: void 0 })
              }, [r.isCreator, r.id, x, C, b, f, y]),
              he = (0, a.Ye)(() => {
                if (!r.fullInfo?.enabledReactions) return J('ReactionsOff')
                if ('all' === r.fullInfo.enabledReactions.type) return J('ReactionsAll')
                const e = r.fullInfo.enabledReactions.allowed.length,
                  t = Z?.filter((e) => !e.isInactive).length || 0
                return t ? `${e} / ${t}` : `${e}`
              }, [Z, r, J]),
              Pe = (0, a.Ye)(() => (0, o.Sb)(r), [r])
            if (r.isRestricted || r.isForbidden) return
            const ve = l === s.wv.InProgress
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(ms.Z, { currentAvatarBlobUrl: X, onChange: ae, disabled: !d }),
                  a.ZP.createElement(He.Z, {
                    id: 'channel-title',
                    label: J('EnterChannelName'),
                    onChange: se,
                    value: O,
                    error: V === Nc ? V : void 0,
                    disabled: !d,
                  }),
                  a.ZP.createElement(gs, {
                    id: 'channel-about',
                    className: 'mb-2',
                    label: J('DescriptionPlaceholder'),
                    onChange: ie,
                    value: _,
                    maxLength: 255,
                    maxLengthIndicator: (255 - _.length).toString(),
                    disabled: !d,
                    noReplaceNewlines: !0,
                  }),
                  r.isCreator &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'lock', multiline: !0, onClick: K },
                      a.ZP.createElement('span', { className: 'title' }, J('ChannelType')),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        J(Pe ? 'TypePublic' : 'TypePrivate')
                      )
                    ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'message', multiline: !0, onClick: W, disabled: !d },
                    a.ZP.createElement('span', { className: 'title' }, J('Discussion')),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle' },
                      J(T ? 'DiscussionUnlink' : 'Add')
                    )
                  ),
                  m &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'link', onClick: te, multiline: !0, disabled: !u },
                      a.ZP.createElement(
                        'span',
                        { className: 'title' },
                        J('GroupInfo.InviteLinks')
                      ),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        u ? (0, Ze.kh)(u.length) : J('Loading')
                      )
                    ),
                  Boolean(r.joinRequests?.length) &&
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'add-user-filled', onClick: ne, multiline: !0 },
                      a.ZP.createElement('span', { className: 'title' }, J('SubscribeRequests')),
                      a.ZP.createElement(
                        'span',
                        { className: 'subtitle' },
                        (0, Ze.kh)(r.joinRequests.length)
                      )
                    ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'heart-outline', multiline: !0, onClick: Q, disabled: !d },
                    a.ZP.createElement('span', { className: 'title' }, J('Reactions')),
                    a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, he)
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection narrow' },
                    a.ZP.createElement(ht.Z, {
                      checked: c,
                      label: J('ChannelSignMessages'),
                      onChange: le,
                    })
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'admin', multiline: !0, onClick: ee },
                    a.ZP.createElement('span', { className: 'title' }, J('ChannelAdministrators')),
                    a.ZP.createElement('span', { className: 'subtitle' }, q)
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'group', multiline: !0, onClick: de },
                    a.ZP.createElement(
                      'span',
                      { className: 'title', dir: 'auto' },
                      J('ChannelSubscribers')
                    ),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle', dir: 'auto' },
                      J('Subscribers', null !== (t = r.membersCount) && void 0 !== t ? t : 0, 'i')
                    )
                  ),
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'delete-user', multiline: !0, narrow: !0, onClick: me },
                    a.ZP.createElement('span', { className: 'title' }, J('ChannelBlockedUsers')),
                    a.ZP.createElement('span', { className: 'subtitle' }, Y)
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'delete', ripple: !0, destructive: !0, onClick: F },
                    r.isCreator ? J('ChannelDelete') : J('LeaveChannel')
                  )
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: B, onClick: re, disabled: ve, ariaLabel: J('Save') },
                ve
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: L,
                onClose: x,
                text: r.isCreator ? J('ChannelDeleteAlert') : J('ChannelLeaveAlert'),
                confirmLabel: r.isCreator ? J('ChannelDelete') : J('LeaveChannel'),
                confirmHandler: ue,
                confirmIsDestructive: !0,
              })
            )
          })
        ),
        Mc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { isUsernameAvailable: s, checkedUsername: i, error: l } = (0, r.aW)(e, n)
            return {
              chat: a,
              isChannel: (0, o.eA)(a),
              progress: (0, r.jU)(e).management.progress,
              error: l,
              isUsernameAvailable: s,
              checkedUsername: i,
              isProtected: a?.isProtected,
              maxPublicLinks: (0, hn.M)(e, 'channelsPublic'),
            }
          })((e) => {
            let {
              chat: t,
              isActive: n,
              isChannel: r,
              progress: l,
              isUsernameAvailable: c,
              checkedUsername: d,
              error: u,
              isProtected: h,
              maxPublicLinks: P,
              onClose: Z,
            } = e
            const {
                updatePublicLink: v,
                updatePrivateLink: g,
                toggleIsProtected: p,
                openLimitReachedModal: E,
              } = (0, i.Sv)(),
              C =
                (0, a.Ye)(
                  () =>
                    t.usernames?.find((e) => {
                      let { isEditable: t } = e
                      return t
                    }),
                  [t.usernames]
                )?.username || '',
              b = (0, a.Ye)(() => (0, o.Sb)(t), [t]),
              f = t.fullInfo?.inviteLink,
              [y, S] = (0, a.eJ)(!1),
              [k, N] = (0, a.eJ)(b ? 'public' : 'private'),
              [w, A] = (0, a.eJ)(),
              [R, L, F] = (0, I.Z)(),
              [x, B, D] = (0, I.Z)(),
              O = (0, T.Z)(c),
              U =
                y &&
                Boolean(
                  ('public' === k && (w || (C && '' === w)) && (null != c ? c : O)) ||
                    ('private' === k && b)
                )
            ;(0, oe.Z)({ isActive: n, onBack: Z }),
              (0, a.d4)(() => {
                S(!1)
              }, [C]),
              (0, a.d4)(() => {
                k && !f && g()
              }, [k, f, g])
            const _ = (0, a.I4)((e) => {
                A(e), S(!0)
              }, []),
              $ = (0, a.I4)(
                (e, t) => {
                  if (
                    Object.values((0, i.Rd)().chats.byId).filter((e) => {
                      let { isCreator: t, usernames: n } = e
                      return t && n?.some((e) => e.isActive)
                    }).length >= P &&
                    'public' === e
                  ) {
                    E({ limit: 'channelsPublic' })
                    const e = t.currentTarget.closest('.radio-group')
                    return (
                      (e.querySelector('[value=public]').checked = !1),
                      void (e.querySelector('[value=private]').checked = !0)
                    )
                  }
                  N(e), S(!0)
                },
                [P, E]
              ),
              j = (0, a.I4)(
                (e) => {
                  p({ chatId: t.id, isProtected: 'protected' === e })
                },
                [t.id, p]
              ),
              G = (0, a.I4)(() => {
                b && 'private' === k ? B() : v({ username: 'public' === k ? w : '' })
              }, [b, B, k, v, w]),
              V = (0, a.I4)(() => {
                v({ username: '' }), D()
              }, [D, v]),
              z = (0, a.I4)(() => {
                F(), g()
              }, [F, g]),
              H = (0, M.Z)(),
              X = r ? 'Channel' : 'Mega',
              J = r ? 'Channel' : 'Group',
              q = [
                { value: 'private', label: H(`${X}Private`), subLabel: H(`${X}PrivateInfo`) },
                { value: 'public', label: H(`${X}Public`), subLabel: H(`${X}PublicInfo`) },
              ],
              Y = [
                { value: 'allowed', label: H('ChannelVisibility.Forwarding.Enabled') },
                { value: 'protected', label: H('ChannelVisibility.Forwarding.Disabled') },
              ],
              K = l === s.wv.InProgress,
              W = 'public' === k && t.usernames && t.usernames.length > 1
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section', dir: H.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement('h3', { className: 'section-heading' }, H(`${J}Type`)),
                  a.ZP.createElement(js.Z, {
                    selected: k,
                    name: 'channel-type',
                    options: q,
                    onChange: $,
                  })
                ),
                'private' === k
                  ? a.ZP.createElement(
                      'div',
                      { className: 'section', dir: H.isRtl ? 'rtl' : void 0 },
                      f
                        ? a.ZP.createElement(
                            a.ZP.Fragment,
                            null,
                            a.ZP.createElement(sa.Z, { url: f, className: 'group-link', text: f }),
                            a.ZP.createElement(
                              'p',
                              { className: 'section-info', dir: H.isRtl ? 'rtl' : void 0 },
                              H(`${X}PrivateLinkHelp`)
                            ),
                            a.ZP.createElement(
                              Je.Z,
                              { icon: 'delete', ripple: !0, destructive: !0, onClick: L },
                              H('RevokeLink')
                            ),
                            a.ZP.createElement(mt.Z, {
                              isOpen: R,
                              onClose: F,
                              text: H('RevokeAlert'),
                              confirmLabel: H('RevokeButton'),
                              confirmHandler: z,
                              confirmIsDestructive: !0,
                            })
                          )
                        : a.ZP.createElement(ze.Z, null)
                    )
                  : a.ZP.createElement(
                      'div',
                      { className: 'section no-border' },
                      a.ZP.createElement(vs, {
                        asLink: !0,
                        currentUsername: C,
                        isLoading: K,
                        isUsernameAvailable: c,
                        checkedUsername: d,
                        onChange: _,
                      }),
                      u === m.WfZ &&
                        (function () {
                          const e = `${m.zHP}${m.LlA}`
                          return a.ZP.createElement(
                            'p',
                            { className: 'section-info', dir: 'auto' },
                            H('lng_username_purchase_available')
                              .replace('{link}', '%PURCHASE_LINK%')
                              .split('%')
                              .map((t) =>
                                'PURCHASE_LINK' === t
                                  ? a.ZP.createElement(sa.Z, { url: e, text: `@${m.LlA}` })
                                  : t
                              )
                          )
                        })(),
                      a.ZP.createElement(
                        'p',
                        { className: 'section-info', dir: 'auto' },
                        H(`${J}.Username.CreatePublicLinkHelp`)
                      )
                    ),
                W &&
                  a.ZP.createElement(Is, {
                    chatId: t.id,
                    usernames: t.usernames,
                    onEditUsername: _,
                  }),
                a.ZP.createElement(
                  'div',
                  { className: 'section', dir: H.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading' },
                    H(
                      r
                        ? 'ChannelVisibility.Forwarding.ChannelTitle'
                        : 'ChannelVisibility.Forwarding.GroupTitle'
                    )
                  ),
                  a.ZP.createElement(js.Z, {
                    selected: h ? 'protected' : 'allowed',
                    name: 'forwarding-type',
                    options: Y,
                    onChange: j,
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'section-info' },
                    H(
                      r
                        ? 'ChannelVisibility.Forwarding.ChannelInfo'
                        : 'ChannelVisibility.Forwarding.GroupInfo'
                    )
                  )
                )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: U, disabled: K, ariaLabel: H('Save'), onClick: G },
                K
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: x,
                onClose: D,
                text: H('ChannelVisibility.Confirm.MakePrivate.Channel', C),
                confirmHandler: V,
                confirmIsDestructive: !0,
              })
            )
          })
        ),
        Tc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { forDiscussionIds: s, byId: i } = e.chats
            return {
              chat: a,
              chatsByIds: i,
              forDiscussionIds: s,
              linkedChat: a?.fullInfo?.linkedChatId
                ? (0, r.Z1)(e, a.fullInfo.linkedChatId)
                : void 0,
              isChannel: a && (0, o.eA)(a),
            }
          })((e) => {
            let {
              chat: t,
              onClose: n,
              isActive: o,
              chatId: r,
              chatsByIds: l,
              linkedChat: c,
              forDiscussionIds: d,
              isChannel: u,
              onScreenSelect: h,
            } = e
            const {
                loadGroupsForDiscussion: P,
                linkDiscussionGroup: Z,
                unlinkDiscussionGroup: v,
                toggleJoinRequest: g,
                toggleJoinToSend: p,
              } = (0, i.Sv)(),
              [E, C] = (0, a.eJ)(),
              [b, f, y] = (0, I.Z)(),
              [S, k, N] = (0, I.Z)(),
              [w, T] = (0, a.eJ)(c?.isJoinToSend),
              [A, R] = (0, a.eJ)(c?.isJoinRequest),
              L = (0, M.Z)(),
              F = c?.id
            ;(0, oe.Z)({ isActive: o, onBack: n }),
              (0, a.d4)(() => {
                P()
              }, [P]),
              (0, a.d4)(() => {
                o && (T(c?.isJoinToSend || !1), R(c?.isJoinRequest || !1))
              }, [c, o])
            const x = (0, a.I4)(() => {
                y(), v({ channelId: u ? r : F }), u || h(s.u1.Initial)
              }, [y, v, u, r, F, h]),
              B = (0, a.I4)(() => {
                N(), Z({ channelId: r, chatId: E })
              }, [N, Z, r, E]),
              D = (0, a.I4)(
                (e) => {
                  T(e), p({ chatId: F, isEnabled: e }), e || R(!1)
                },
                [F, p]
              ),
              O = (0, a.I4)(
                (e) => {
                  R(e), g({ chatId: F, isEnabled: e })
                },
                [F, g]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(Ts.Z, {
                    tgsUrl: ws.l.DiscussionGroups,
                    size: m.bMi,
                    className: 'section-icon',
                  }),
                  c &&
                    a.ZP.createElement(
                      'div',
                      null,
                      a.ZP.createElement(
                        Je.Z,
                        { className: 'chat-item-clickable', inactive: !0 },
                        a.ZP.createElement(qe.Z, { chatId: c.id })
                      ),
                      a.ZP.createElement(
                        Je.Z,
                        { icon: 'delete', ripple: !0, destructive: !0, onClick: f },
                        L(u ? 'DiscussionUnlinkGroup' : 'DiscussionUnlinkChannel')
                      ),
                      a.ZP.createElement(mt.Z, {
                        isOpen: b,
                        onClose: y,
                        header: a.ZP.createElement(
                          'div',
                          { className: 'modal-header' },
                          a.ZP.createElement(De.Z, { size: 'tiny', chat: c }),
                          a.ZP.createElement(
                            'div',
                            { className: 'modal-title' },
                            L(u ? 'DiscussionUnlinkGroup' : 'DiscussionUnlinkChannel')
                          )
                        ),
                        textParts: (0, X.Z)(
                          L(
                            u ? 'DiscussionUnlinkChannelAlert' : 'DiscussionUnlinkGroupAlert',
                            c.title
                          ),
                          ['br', 'simple_markdown']
                        ),
                        confirmLabel: L(u ? 'DiscussionUnlinkGroup' : 'DiscussionUnlinkChannel'),
                        confirmHandler: x,
                        confirmIsDestructive: !0,
                      })
                    ),
                  !c &&
                    a.ZP.createElement(
                      'div',
                      null,
                      a.ZP.createElement(
                        'p',
                        { className: 'section-help', dir: 'auto' },
                        L('DiscussionChannelHelp')
                      ),
                      a.ZP.createElement(
                        'div',
                        { teactFastList: !0 },
                        a.ZP.createElement(
                          Je.Z,
                          {
                            key: 'create-group',
                            icon: 'group',
                            ripple: !0,
                            teactOrderKey: 0,
                            className: 'not-implemented',
                          },
                          L('DiscussionCreateGroup')
                        ),
                        d
                          ? d.map((e, t) =>
                              a.ZP.createElement(
                                Je.Z,
                                {
                                  key: e,
                                  teactOrderKey: t + 1,
                                  className: 'chat-item-clickable scroll-item',
                                  onClick: () => {
                                    C(e), k()
                                  },
                                },
                                a.ZP.createElement(qe.Z, { chatId: e })
                              )
                            )
                          : a.ZP.createElement(wa.Z, {
                              key: 'nothing-found',
                              teactOrderKey: 0,
                              text: 'No discussion groups found',
                            })
                      ),
                      a.ZP.createElement(
                        'p',
                        { className: 'mt-4 mb-0 section-help', dir: 'auto' },
                        L('DiscussionChannelHelp2')
                      ),
                      a.ZP.createElement(mt.Z, {
                        isOpen: S,
                        onClose: N,
                        header: (function () {
                          const e = l[E]
                          if (e)
                            return a.ZP.createElement(
                              'div',
                              { className: 'modal-header' },
                              a.ZP.createElement(De.Z, { size: 'tiny', chat: e }),
                              a.ZP.createElement(
                                'div',
                                { className: 'modal-title' },
                                L('Channel.DiscussionGroup.LinkGroup')
                              )
                            )
                        })(),
                        textParts: (function () {
                          const e = l[E]
                          if (e)
                            return e.hasPrivateLink
                              ? (0, X.Z)(
                                  `Do you want to make **${e.title}** the discussion board for **${t.title}**?`,
                                  ['br', 'simple_markdown']
                                )
                              : (0, X.Z)(
                                  `Do you want to make **${e.title}** the discussion board for **${t.title}**?\n\nAnyone from the channel will be able to see messages in this group.`,
                                  ['br', 'simple_markdown']
                                )
                        })(),
                        confirmLabel: L('DiscussionLinkGroup'),
                        confirmHandler: B,
                      })
                    )
                ),
                c &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      'h3',
                      { className: 'section-heading' },
                      L('ChannelSettingsJoinTitle')
                    ),
                    a.ZP.createElement(ht.Z, {
                      checked: w,
                      onCheck: D,
                      label: L('ChannelSettingsJoinToSend'),
                    }),
                    w &&
                      a.ZP.createElement(ht.Z, {
                        checked: A,
                        onCheck: O,
                        label: L('ChannelSettingsJoinRequest'),
                      }),
                    a.ZP.createElement(
                      'p',
                      { className: 'text-muted' },
                      L(w ? 'ChannelSettingsJoinRequestInfo' : 'ChannelSettingsJoinToSendInfo')
                    )
                  )
              )
            )
          })
        ),
        Ac = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, isPromotedByCurrentUser: a } = t
            const s = (0, r.Z1)(e, n)
            return { chat: s, isFormFullyDisabled: !(s.isCreator || a) }
          })((e) => {
            let {
              chat: t,
              selectedChatMemberId: n,
              onScreenSelect: o,
              isFormFullyDisabled: r,
              onClose: l,
              isActive: c,
            } = e
            const { updateChatMemberBannedRights: d } = (0, i.Sv)(),
              m = (0, a.Ye)(() => {
                if (t && t.fullInfo && t.fullInfo.members)
                  return t.fullInfo.members.find((e) => {
                    let { userId: t } = e
                    return t === n
                  })
              }, [t, n]),
              {
                permissions: u,
                havePermissionChanged: h,
                isLoading: P,
                handlePermissionChange: v,
                setIsLoading: g,
              } = Ic(m?.bannedRights || t?.defaultBannedRights),
              [p, E, C] = (0, I.Z)(),
              b = (0, M.Z)(),
              { isForum: f } = t || {}
            ;(0, oe.Z)({ isActive: c, onBack: l }),
              (0, a.d4)(() => {
                t?.fullInfo && n && !m && o(s.u1.GroupPermissions)
              }, [t, o, m, n])
            const y = (0, a.I4)(() => {
                t && n && (g(!0), d({ chatId: t.id, userId: n, bannedRights: u }))
              }, [t, n, g, d, u]),
              S = (0, a.I4)(() => {
                t && n && d({ chatId: t.id, userId: n, bannedRights: { viewMessages: !0 } })
              }, [t, n, d]),
              k = (0, a.I4)(
                (e) => !!r || (!(!t || !t.defaultBannedRights) && t.defaultBannedRights[e]),
                [t, r]
              ),
              [N, w] = (0, a.eJ)(!1),
              T = (0, a.I4)(
                (e) => {
                  ;(0, Z.Z)(e), w(!N)
                },
                [N]
              )
            if (m)
              return a.ZP.createElement(
                'div',
                {
                  className: 'Management with-shifted-dropdown',
                  style: '--shift-height: 503px;--before-shift-height: 208px;',
                },
                a.ZP.createElement(
                  'div',
                  { className: 'custom-scroll' },
                  a.ZP.createElement(
                    'div',
                    { className: 'section without-bottom-shadow' },
                    a.ZP.createElement(
                      Je.Z,
                      { inactive: !0, className: 'chat-item-clickable' },
                      a.ZP.createElement(Ye.Z, { userId: m.userId, forceShowSelf: !0 })
                    ),
                    a.ZP.createElement(
                      'h3',
                      { className: 'section-heading mt-4', dir: 'auto' },
                      b('UserRestrictionsCanDo')
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'sendPlain',
                        checked: !u.sendPlain,
                        label: b('UserRestrictionsSend'),
                        blocking: !0,
                        disabled: k('sendPlain'),
                        onChange: v,
                      })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'sendMedia',
                        checked: !u.sendMedia,
                        label: b('UserRestrictionsSendMedia'),
                        blocking: !0,
                        rightIcon: N ? 'up' : 'down',
                        disabled: k('sendMedia'),
                        onChange: v,
                        onClickLabel: T,
                      })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'DropdownListTrap' },
                      a.ZP.createElement(
                        'div',
                        { className: (0, Q.Z)('DropdownList', N && 'DropdownList--open') },
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendPhotos',
                            checked: !u.sendPhotos,
                            label: b('UserRestrictionsSendPhotos'),
                            blocking: !0,
                            disabled: k('sendPhotos'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendVideos',
                            checked: !u.sendVideos,
                            label: b('UserRestrictionsSendVideos'),
                            blocking: !0,
                            disabled: k('sendVideos'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendStickers',
                            checked: !u.sendStickers && !u.sendGifs,
                            label: b('UserRestrictionsSendStickers'),
                            blocking: !0,
                            disabled: k('sendStickers'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendAudios',
                            checked: !u.sendAudios,
                            label: b('UserRestrictionsSendMusic'),
                            blocking: !0,
                            disabled: k('sendAudios'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendDocs',
                            checked: !u.sendDocs,
                            label: b('UserRestrictionsSendFiles'),
                            blocking: !0,
                            disabled: k('sendDocs'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendVoices',
                            checked: !u.sendVoices,
                            label: b('UserRestrictionsSendVoices'),
                            blocking: !0,
                            disabled: k('sendVoices'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendRoundvideos',
                            checked: !u.sendRoundvideos,
                            label: b('UserRestrictionsSendRound'),
                            blocking: !0,
                            disabled: k('sendRoundvideos'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'embedLinks',
                            checked: !u.embedLinks,
                            label: b('UserRestrictionsEmbedLinks'),
                            blocking: !0,
                            disabled: k('embedLinks'),
                            onChange: v,
                          })
                        ),
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'sendPolls',
                            checked: !u.sendPolls,
                            label: b('UserRestrictionsSendPolls'),
                            blocking: !0,
                            disabled: k('sendPolls'),
                            onChange: v,
                          })
                        )
                      )
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: (0, Q.Z)('part', N && 'shifted') },
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'inviteUsers',
                          checked: !u.inviteUsers,
                          label: b('UserRestrictionsInviteUsers'),
                          blocking: !0,
                          disabled: k('inviteUsers'),
                          onChange: v,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'pinMessages',
                          checked: !u.pinMessages,
                          label: b('UserRestrictionsPinMessages'),
                          blocking: !0,
                          disabled: k('pinMessages'),
                          onChange: v,
                        })
                      ),
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'changeInfo',
                          checked: !u.changeInfo,
                          label: b('UserRestrictionsChangeInfo'),
                          blocking: !0,
                          disabled: k('changeInfo'),
                          onChange: v,
                        })
                      ),
                      f &&
                        a.ZP.createElement(
                          'div',
                          { className: 'ListItem no-selection' },
                          a.ZP.createElement(ht.Z, {
                            name: 'manageTopics',
                            checked: !u.manageTopics,
                            label: b('CreateTopicsPermission'),
                            blocking: !0,
                            disabled: k('manageTopics'),
                            onChange: v,
                          })
                        )
                    )
                  ),
                  !r &&
                    a.ZP.createElement(
                      'div',
                      { className: (0, Q.Z)('section', N && 'shifted') },
                      a.ZP.createElement(
                        Je.Z,
                        { icon: 'delete-user', ripple: !0, destructive: !0, onClick: E },
                        b('UserRestrictionsBlock')
                      )
                    )
                ),
                a.ZP.createElement(
                  us.Z,
                  { isShown: h, onClick: y, ariaLabel: b('Save'), disabled: P },
                  P
                    ? a.ZP.createElement(ce.Z, { color: 'white' })
                    : a.ZP.createElement('i', { className: 'icon-check' })
                ),
                a.ZP.createElement(mt.Z, {
                  isOpen: p,
                  onClose: C,
                  text: 'Are you sure you want to ban and remove this user from the group?',
                  confirmLabel: 'Remove',
                  confirmHandler: S,
                  confirmIsDestructive: !0,
                })
              )
          })
        ),
        Rc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n)
            return { chat: a, currentUserId: e.currentUserId, isChannel: (0, o.eA)(a) }
          })((e) => {
            let {
              chat: t,
              isChannel: n,
              currentUserId: r,
              onScreenSelect: l,
              onChatMemberSelect: c,
              onClose: d,
              isActive: m,
            } = e
            const u = (0, M.Z)()
            ;(0, oe.Z)({ isActive: m, onBack: d })
            const h = (0, a.I4)(() => {
                l(s.u1.GroupRecentActions)
              }, [l]),
              P = Boolean(t.isCreator || t.adminRights?.addAdmins),
              Z = (0, a.Ye)(
                () =>
                  t.fullInfo?.adminMembersById
                    ? Object.values(t.fullInfo.adminMembersById).sort((e, t) =>
                        e.isOwner ? -1 : t.isOwner ? 1 : 0
                      )
                    : [],
                [t]
              ),
              v = (0, a.I4)(
                (e) => {
                  c(e.userId, e.promotedByUserId === r), l(s.u1.ChatAdminRights)
                },
                [r, c, l]
              ),
              g = (0, a.I4)(() => {
                l(s.u1.GroupAddAdmins)
              }, [l]),
              p = (0, a.I4)(
                (e) => {
                  if (e.isOwner) return u('ChannelCreator')
                  const t = (0, i.Rd)().users.byId,
                    n = e.promotedByUserId ? t[e.promotedByUserId] : void 0
                  return n ? u('EditAdminPromotedBy', (0, o.Js)(n)) : u('ChannelAdmin')
                },
                [u]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    Je.Z,
                    { icon: 'recent', multiline: !0, onClick: h },
                    a.ZP.createElement('span', { className: 'title' }, u('EventLog')),
                    a.ZP.createElement(
                      'span',
                      { className: 'subtitle' },
                      u(n ? 'EventLogInfoDetailChannel' : 'EventLogInfoDetail')
                    )
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section', dir: u.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'p',
                    { className: 'text-muted', dir: 'auto' },
                    n
                      ? 'You can add administrators to help you manage your channel.'
                      : 'You can add administrators to help you manage your group.'
                  ),
                  Z.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      { key: e.userId, className: 'chat-item-clickable', onClick: () => v(e) },
                      a.ZP.createElement(Ye.Z, {
                        userId: e.userId,
                        status: p(e),
                        forceShowSelf: !0,
                      })
                    )
                  ),
                  a.ZP.createElement(
                    us.Z,
                    { isShown: P, onClick: g, ariaLabel: u('Channel.Management.AddModerator') },
                    a.ZP.createElement('i', { className: 'icon-add-user-filled' })
                  )
                )
              )
            )
          })
        ),
        Lc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            return { chat: (0, r.Z1)(e, n) }
          })((e) => {
            let { chat: t, onClose: n, isActive: s } = e
            const i = (0, M.Z)()
            ;(0, oe.Z)({ isActive: s, onBack: n })
            const o = (0, a.Ye)(
                () =>
                  t?.fullInfo?.adminMembersById
                    ? Object.values(t.fullInfo.adminMembersById).sort((e, t) =>
                        e.isOwner ? -1 : t.isOwner ? 1 : 0
                      )
                    : [],
                [t]
              ),
              r = (0, a.I4)((e) => (e.isOwner ? i('ChannelCreator') : i('ChannelAdmin')), [i])
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section not-implemented', dir: i.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading', dir: 'auto' },
                    'Actions'
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogAllEvents'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterNewAdmins'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterNewMembers'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterChannelInfo'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterDeletedMessages'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterEditedMessages'),
                      onChange: void 0,
                    })
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogFilterLeavingMembers'),
                      onChange: void 0,
                    })
                  )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section not-implemented', dir: i.isRtl ? 'rtl' : void 0 },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading', dir: 'auto' },
                    i('Channel.Management.Title')
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'ListItem no-selection' },
                    a.ZP.createElement(ht.Z, {
                      name: 'changeInfo',
                      checked: !0,
                      label: i('EventLogAllAdmins'),
                      onChange: void 0,
                    })
                  ),
                  o.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      {
                        key: e.userId,
                        className: 'chat-item-clickable picker-list-item',
                        onClick: void 0,
                        ripple: !0,
                      },
                      a.ZP.createElement(ht.Z, { label: '', checked: !0 }),
                      a.ZP.createElement(Ye.Z, {
                        userId: e.userId,
                        status: r(e),
                        forceShowSelf: !0,
                      })
                    )
                  )
                )
              )
            )
          })
        ),
        Fc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, isPromotedByCurrentUser: a } = t
            const s = (0, r.Z1)(e, n),
              { byId: i } = e.users,
              { currentUserId: l } = e,
              c = (0, o.eA)(s),
              d = !(s.isCreator || a)
            return {
              chat: s,
              usersById: i,
              currentUserId: l,
              isChannel: c,
              isForum: s.isForum,
              isFormFullyDisabled: d,
              defaultRights: s.adminRights,
            }
          })((e) => {
            let {
              isNewAdmin: t,
              selectedUserId: n,
              defaultRights: r,
              onScreenSelect: l,
              chat: c,
              usersById: d,
              currentUserId: m,
              isChannel: u,
              isForum: h,
              isFormFullyDisabled: P,
              onClose: Z,
              isActive: v,
            } = e
            const { updateChatAdmin: g } = (0, i.Sv)(),
              [p, E] = (0, a.eJ)({}),
              [C, b] = (0, a.eJ)(Boolean(t)),
              [f, y] = (0, a.eJ)(!1),
              [S, k, N] = (0, I.Z)(),
              [w, T] = (0, a.eJ)(''),
              A = (0, M.Z)()
            ;(0, oe.Z)({ isActive: v, onBack: Z })
            const R = (0, a.Ye)(() => {
              const e = n ? c.fullInfo?.adminMembersById?.[n] : void 0
              if (!t || (!e && n)) {
                if (t) {
                  const e = (0, i.Rd)().users.byId[n]
                  return e
                    ? {
                        userId: e.id,
                        adminRights: r,
                        customTitle: A('ChannelAdmin'),
                        isOwner: !1,
                        promotedByUserId: void 0,
                      }
                    : void 0
                }
                return e
              }
            }, [c.fullInfo?.adminMembersById, r, t, A, n])
            ;(0, a.d4)(() => {
              c?.fullInfo && n && !R && l(s.u1.ChatAdministrators)
            }, [c, l, R, n]),
              (0, a.d4)(() => {
                E(R?.adminRights || {}),
                  T((R?.customTitle || '').substr(0, 16)),
                  b(Boolean(t)),
                  y(!1)
              }, [r, t, R])
            const L = (0, a.I4)((e) => {
                const { name: t } = e.target
                E((e) => {
                  return { ...e, [t]: ((n = e[t]), !n || void 0) }
                  var n
                }),
                  b(!0)
              }, []),
              F = (0, a.I4)(() => {
                n && (y(!0), g({ chatId: c.id, userId: n, adminRights: p, customTitle: w }))
              }, [n, g, c.id, p, w]),
              x = (0, a.I4)(() => {
                n && (g({ chatId: c.id, userId: n, adminRights: {} }), N())
              }, [c.id, N, n, g]),
              B = (0, a.I4)(
                (e) =>
                  !((0, o.G9)(c) || (!P && c.adminRights && (c.isCreator || c.adminRights[e]))),
                [c, P]
              ),
              D = (0, a.Ye)(() => {
                if (t || !R) return
                if (R.isOwner) return A('ChannelCreator')
                const e = R.promotedByUserId ? d[R.promotedByUserId] : void 0
                return e ? A('EditAdminPromotedBy', (0, o.Js)(e)) : A('ChannelAdmin')
              }, [t, R, d, A]),
              O = (0, a.I4)((e) => {
                const { value: t } = e.target
                T(t), b(!0)
              }, [])
            if (R)
              return a.ZP.createElement(
                'div',
                { className: 'Management' },
                a.ZP.createElement(
                  'div',
                  { className: 'custom-scroll' },
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      Je.Z,
                      { inactive: !0, className: 'chat-item-clickable' },
                      a.ZP.createElement(Ye.Z, { userId: R.userId, status: D, forceShowSelf: !0 })
                    ),
                    a.ZP.createElement(
                      'h3',
                      { className: 'section-heading mt-4', dir: 'auto' },
                      A('EditAdminWhatCanDo')
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'changeInfo',
                        checked: Boolean(p.changeInfo),
                        label: A(u ? 'EditAdminChangeChannelInfo' : 'EditAdminChangeGroupInfo'),
                        blocking: !0,
                        disabled: B('changeInfo'),
                        onChange: L,
                      })
                    ),
                    u &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'postMessages',
                          checked: Boolean(p.postMessages),
                          label: A('EditAdminPostMessages'),
                          blocking: !0,
                          disabled: B('postMessages'),
                          onChange: L,
                        })
                      ),
                    u &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'editMessages',
                          checked: Boolean(p.editMessages),
                          label: A('EditAdminEditMessages'),
                          blocking: !0,
                          disabled: B('editMessages'),
                          onChange: L,
                        })
                      ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'deleteMessages',
                        checked: Boolean(p.deleteMessages),
                        label: A(u ? 'EditAdminDeleteMessages' : 'EditAdminGroupDeleteMessages'),
                        blocking: !0,
                        disabled: B('deleteMessages'),
                        onChange: L,
                      })
                    ),
                    !u &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'banUsers',
                          checked: Boolean(p.banUsers),
                          label: A('EditAdminBanUsers'),
                          blocking: !0,
                          disabled: B('banUsers'),
                          onChange: L,
                        })
                      ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'inviteUsers',
                        checked: Boolean(p.inviteUsers),
                        label: A('EditAdminAddUsers'),
                        blocking: !0,
                        disabled: B('inviteUsers'),
                        onChange: L,
                      })
                    ),
                    !u &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'pinMessages',
                          checked: Boolean(p.pinMessages),
                          label: A('EditAdminPinMessages'),
                          blocking: !0,
                          disabled: B('pinMessages'),
                          onChange: L,
                        })
                      ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'addAdmins',
                        checked: Boolean(p.addAdmins),
                        label: A('EditAdminAddAdmins'),
                        blocking: !0,
                        disabled: B('addAdmins'),
                        onChange: L,
                      })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'ListItem no-selection' },
                      a.ZP.createElement(ht.Z, {
                        name: 'manageCall',
                        checked: Boolean(p.manageCall),
                        label: A('StartVoipChatPermission'),
                        blocking: !0,
                        disabled: B('manageCall'),
                        onChange: L,
                      })
                    ),
                    h &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'manageTopics',
                          checked: Boolean(p.manageTopics),
                          label: A('ManageTopicsPermission'),
                          blocking: !0,
                          disabled: B('manageTopics'),
                          onChange: L,
                        })
                      ),
                    !u &&
                      a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: 'anonymous',
                          checked: Boolean(p.anonymous),
                          label: A('EditAdminSendAnonymously'),
                          blocking: !0,
                          disabled: B('anonymous'),
                          onChange: L,
                        })
                      ),
                    P &&
                      a.ZP.createElement(
                        'p',
                        { className: 'section-info mb-4', dir: 'auto' },
                        A('Channel.EditAdmin.CannotEdit')
                      ),
                    !u &&
                      a.ZP.createElement(He.Z, {
                        id: 'admin-title',
                        label: A('EditAdminRank'),
                        onChange: O,
                        value: w,
                        disabled: P,
                        maxLength: 16,
                      }),
                    m !== n &&
                      !P &&
                      !t &&
                      a.ZP.createElement(
                        Je.Z,
                        { icon: 'delete', ripple: !0, destructive: !0, onClick: k },
                        A('EditAdminRemoveAdmin')
                      )
                  )
                ),
                a.ZP.createElement(
                  us.Z,
                  { isShown: C, onClick: F, ariaLabel: A('Save'), disabled: f },
                  f
                    ? a.ZP.createElement(ce.Z, { color: 'white' })
                    : a.ZP.createElement('i', { className: 'icon-check' })
                ),
                !t &&
                  a.ZP.createElement(mt.Z, {
                    isOpen: S,
                    onClose: N,
                    text: 'Are you sure you want to dismiss this admin?',
                    confirmLabel: A('Channel.Admin.Dismiss'),
                    confirmHandler: x,
                    confirmIsDestructive: !0,
                  })
              )
          })
        )
      var xc = n(22275)
      const Bc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { statusesById: s } = e.users,
              i = a?.fullInfo?.members,
              l = a?.fullInfo?.adminMembersById,
              c = a && (0, o.eA)(a),
              { userIds: d } = e.contactList || {},
              m = e.appConfig?.hiddenMembersMinCount,
              u = a && (a.isCreator || (0, o.VE)(a, 'banUsers')),
              h =
                u &&
                !(0, o.G9)(a) &&
                void 0 !== a.membersCount &&
                void 0 !== m &&
                a.membersCount >= m,
              {
                query: P,
                fetchingStatus: Z,
                globalUserIds: v,
                localUserIds: g,
              } = (0, r.jU)(e).userSearch
            return {
              areParticipantsHidden: Boolean(a && a.fullInfo?.areParticipantsHidden),
              members: i,
              adminMembersById: l,
              userStatusesById: s,
              isChannel: c,
              localContactIds: d,
              searchQuery: P,
              isSearching: Z,
              globalUserIds: v,
              localUserIds: g,
              canDeleteMembers: u,
              currentUserId: e.currentUserId,
              canHideParticipants: h,
            }
          })((e) => {
            let {
              chatId: t,
              noAdmins: n,
              members: r,
              adminMembersById: l,
              userStatusesById: c,
              isChannel: d,
              isActive: m,
              globalUserIds: u,
              localContactIds: h,
              localUserIds: P,
              isSearching: Z,
              searchQuery: v,
              currentUserId: g,
              canDeleteMembers: p,
              areParticipantsHidden: E,
              canHideParticipants: C,
              onClose: b,
              onScreenSelect: f,
              onChatMemberSelect: I,
            } = e
            const {
                openChat: y,
                setUserSearchQuery: S,
                closeManagement: k,
                toggleParticipantsHidden: N,
              } = (0, i.Sv)(),
              w = (0, M.Z)(),
              T = (0, a.sO)(null),
              A = (0, a.sO)(null),
              [R, L] = (0, a.eJ)(),
              F = (0, a.Ye)(() => (n && l ? Object.keys(l) : []), [l, n]),
              x = (0, a.Ye)(() => {
                const e = (0, i.Rd)().users.byId
                if (!r || !e) return []
                const t = (0, o.Z0)(
                  r.map((e) => {
                    let { userId: t } = e
                    return t
                  }),
                  e,
                  c
                )
                return n ? t.filter((e) => !F.includes(e)) : t
              }, [r, c, n, F]),
              B = (0, a.Ye)(() => {
                const e = (0, i.Rd)().users.byId,
                  t = (0, i.Rd)().chats.byId,
                  a = Boolean(v),
                  s = a ? (h ? (0, o.kK)(h, e, v) : []) : x
                return (0, o.ih)(
                  (0, $e.Tw)([...s, ...((a && P) || []), ...((a && u) || [])]).filter((t) => {
                    const a = e[t]
                    return (
                      !a ||
                      ((d || a.canBeInvitedToGroup || !(0, o.cS)(a)) && (!n || !F.includes(t)))
                    )
                  }),
                  t,
                  !0
                )
              }, [x, h, v, P, u, d, n, F]),
              [D, O] = (0, je.Z)(void 0, B, Boolean(v)),
              U = (0, a.I4)(
                (e) => {
                  n ? (I(e, !0), f(s.u1.ChatNewAdminRights)) : (k(), y({ id: e }))
                },
                [k, n, I, f, y]
              ),
              _ = (0, a.I4)(
                (e) => {
                  S({ query: e.target.value })
                },
                [S]
              ),
              $ = (0, Ge.Z)(
                A,
                m,
                (e) => {
                  D && D.length > 0 && U(D[-1 === e ? 0 : e])
                },
                '.ListItem-button',
                !0
              ),
              j = (0, a.I4)(() => {
                L(void 0)
              }, []),
              G = (0, a.I4)(() => {
                N({ chatId: t, isEnabled: !E })
              }, [E, t, N])
            return (
              (0, oe.Z)({ isActive: m, onBack: b }),
              a.ZP.createElement(
                'div',
                { className: 'Management' },
                n &&
                  a.ZP.createElement(
                    'div',
                    { className: 'Management__filter', dir: w.isRtl ? 'rtl' : void 0 },
                    a.ZP.createElement(He.Z, {
                      ref: T,
                      value: v,
                      onChange: _,
                      placeholder: w('Search'),
                    })
                  ),
                a.ZP.createElement(
                  'div',
                  { className: 'custom-scroll' },
                  C &&
                    a.ZP.createElement(
                      'div',
                      { className: 'section' },
                      a.ZP.createElement(
                        Je.Z,
                        { icon: 'group', ripple: !0, onClick: G },
                        a.ZP.createElement('span', null, w('ChannelHideMembers')),
                        a.ZP.createElement(Zi.Z, { label: w('ChannelHideMembers'), checked: E })
                      ),
                      a.ZP.createElement(
                        'p',
                        { className: 'section-info' },
                        w(E ? 'GroupMembers.MembersHiddenOn' : 'GroupMembers.MembersHiddenOff')
                      )
                    ),
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    D?.length
                      ? a.ZP.createElement(
                          Xe.Z,
                          {
                            className: 'picker-list custom-scroll',
                            items: B,
                            onLoadMore: O,
                            noScrollRestore: Boolean(v),
                            ref: A,
                            onKeyDown: $,
                          },
                          D.map((e) => {
                            return a.ZP.createElement(
                              Je.Z,
                              {
                                key: e,
                                className: 'chat-item-clickable scroll-item',
                                onClick: () => U(e),
                                contextActions:
                                  ((t = e),
                                  t !== g && p
                                    ? [
                                        {
                                          title: w('lng_context_remove_from_group'),
                                          icon: 'stop',
                                          handler: () => {
                                            L(t)
                                          },
                                        },
                                      ]
                                    : void 0),
                              },
                              a.ZP.createElement(Ye.Z, { userId: e, forceShowSelf: !0 })
                            )
                            var t
                          })
                        )
                      : Z || !D || D.length
                      ? a.ZP.createElement(ze.Z, null)
                      : a.ZP.createElement(wa.Z, {
                          teactOrderKey: 0,
                          key: 'nothing-found',
                          text: d ? 'No subscribers found' : 'No members found',
                        })
                  )
                ),
                p && a.ZP.createElement(xc.Z, { isOpen: Boolean(R), userId: R, onClose: j })
              )
            )
          })
        ),
        Dc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n),
              { byId: s, statusesById: i } = e.users,
              l = a?.fullInfo?.members
            return { members: l, usersById: s, userStatusesById: i, isChannel: a && (0, o.eA)(a) }
          })((e) => {
            let {
              usersById: t,
              userStatusesById: n,
              members: i,
              isChannel: r,
              onScreenSelect: l,
              onChatMemberSelect: c,
              onClose: d,
              isActive: m,
            } = e
            ;(0, oe.Z)({ isActive: m, onBack: d })
            const u = (0, a.Ye)(() => {
                if (i && t)
                  return (0, o.Z0)(
                    i
                      .filter((e) => !e.isOwner)
                      .map((e) => {
                        let { userId: t } = e
                        return t
                      }),
                    t,
                    n
                  )
              }, [i, t, n]),
              h = (0, a.I4)(
                (e) => {
                  c(e), l(s.u1.GroupUserPermissions)
                },
                [c, l]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section', teactFastList: !0 },
                  u
                    ? u.map((e, t) =>
                        a.ZP.createElement(
                          Je.Z,
                          {
                            key: e,
                            teactOrderKey: t,
                            className: 'chat-item-clickable scroll-item',
                            onClick: () => h(e),
                          },
                          a.ZP.createElement(Ye.Z, { userId: e, forceShowSelf: !0 })
                        )
                      )
                    : a.ZP.createElement(wa.Z, {
                        teactOrderKey: 0,
                        key: 'nothing-found',
                        text: r ? 'No subscribers found' : 'No members found',
                      })
                )
              )
            )
          })
        )
      var Oc = n(82267)
      function Uc(e, t) {
        const { isPermanent: n, usage: a = 0, date: s } = e,
          { isPermanent: i, usage: o = 0, date: r } = t
        return n || i ? Number(n) - Number(i) : a || o ? o - a : r - s
      }
      const _c = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { invites: a, revokedInvites: s } = (0, r.jU)(e).management.byChatId[n],
              i = (0, r.Z1)(e, n)
            return {
              exportedInvites: a,
              revokedExportedInvites: s,
              chat: i,
              isChannel: i && (0, o.eA)(i),
            }
          })((e) => {
            let {
              chatId: t,
              chat: n,
              exportedInvites: r,
              revokedExportedInvites: l,
              isActive: c,
              isChannel: d,
              onClose: u,
              onScreenSelect: h,
            } = e
            const {
                setEditingExportedInvite: P,
                showNotification: Z,
                editExportedChatInvite: v,
                deleteExportedChatInvite: g,
                deleteRevokedExportedChatInvites: p,
                setOpenedInviteInfo: E,
              } = (0, i.Sv)(),
              C = (0, M.Z)(),
              [b, f, S] = (0, I.Z)(),
              [k, N, w] = (0, I.Z)(),
              [T, A] = (0, a.eJ)(),
              [R, L, F] = (0, I.Z)(),
              [x, B] = (0, a.eJ)(),
              { isMobile: D } = (0, U.ZP)()
            ;(0, oe.Z)({ isActive: c, onBack: u })
            const O = (0, a.Ye)(() => {
                if (r)
                  return r.some((e) => {
                    let { expireDate: t } = e
                    return t && t - (0, Oc.bp)() < Pe.xR / 1e3
                  })
              }, [r]),
              _ = (0, y.Z)()
            ;(0, kt.Z)(
              () => {
                _()
              },
              O ? 1e3 : void 0
            )
            const j = (0, a.Ye)(() => n && (0, o.WS)(n), [n]),
              G = r?.find((e) => {
                let { isPermanent: t } = e
                return t
              }),
              H = j ? `${m.zHP}${j}` : G?.link,
              X = (0, a.Ye)(
                () =>
                  (n?.usernames
                    ? r
                    : r?.filter((e) => {
                        let { isPermanent: t } = e
                        return !t
                      })
                  )?.sort(Uc),
                [n?.usernames, r]
              ),
              J = (0, a.I4)(
                (e) => {
                  const { link: n, title: a, isRequestNeeded: s, expireDate: i, usageLimit: o } = e
                  v({
                    chatId: t,
                    link: n,
                    title: a,
                    isRequestNeeded: s,
                    expireDate: i,
                    usageLimit: o,
                    isRevoked: !0,
                  })
                },
                [t, v]
              ),
              q = (0, a.I4)(
                (e) => {
                  A(e), N()
                },
                [N]
              ),
              Y = (0, a.I4)(() => {
                T && (J(T), A(void 0), w())
              }, [w, J, T]),
              K = (0, a.I4)(() => {
                h(s.u1.EditInvite)
              }, [h]),
              W = (0, a.I4)(() => {
                G && q(G)
              }, [q, G]),
              Q = (0, a.I4)(() => {
                p({ chatId: t }), S()
              }, [t, S, p]),
              ee = (0, a.I4)(
                (e) => {
                  E({ chatId: t, invite: e }), h(s.u1.InviteInfo)
                },
                [t, h, E]
              ),
              te = (0, a.I4)(
                (e) => {
                  g({ chatId: t, link: e.link })
                },
                [t, g]
              ),
              ne = (0, a.I4)(
                (e) => {
                  B(e), L()
                },
                [L]
              ),
              ae = (0, a.I4)(() => {
                x && (te(x), B(void 0), F())
              }, [F, te, x]),
              se = (0, a.I4)(
                (e) => {
                  ;(0, ps.TE)(e), Z({ message: C('LinkCopied') })
                },
                [C, Z]
              ),
              ie = (0, a.I4)(() => {
                se(H)
              }, [se, H]),
              re = (e) => {
                const {
                  usage: t = 0,
                  usageLimit: n,
                  expireDate: a,
                  isPermanent: s,
                  requested: i,
                  isRevoked: o,
                } = e
                let r = ''
                if (
                  ((r =
                    !o && n && t < n
                      ? C('CanJoin', n - t)
                      : t
                      ? C('PeopleJoined', t)
                      : C('NoOneJoined')),
                  o)
                )
                  return (r += ` • ${C('Revoked')}`), r
                if ((i && (r += ` • ${C('JoinRequests', i)}`), void 0 !== n && t === n))
                  r += ` • ${C('LinkLimitReached')}`
                else if (a) {
                  const e = 1e3 * (a - (0, Oc.bp)())
                  ;(r += ' • '),
                    (r +=
                      e > 0 ? C('InviteLink.ExpiresIn', (0, Pe.D)(C, e)) : C('InviteLink.Expired'))
                } else s && (r += ` • ${C('Permanent')}`)
                return r
              },
              le = (e) => {
                const { usage: t = 0, usageLimit: n, isRevoked: a, expireDate: s } = e
                return a
                  ? 'link-status-icon-gray'
                  : n && t < n
                  ? 'link-status-icon-green'
                  : s && 1e3 * (s - (0, Oc.bp)()) <= 0
                  ? 'link-status-icon-red'
                  : 'link-status-icon-blue'
              },
              ce = (e) => {
                const n = []
                return (
                  n.push({ title: C('Copy'), icon: 'copy', handler: () => se(e.link) }),
                  e.isPermanent ||
                    e.isRevoked ||
                    n.push({
                      title: C('Edit'),
                      icon: 'edit',
                      handler: () =>
                        ((e) => {
                          P({ chatId: t, invite: e }), h(s.u1.EditInvite)
                        })(e),
                    }),
                  e.isRevoked
                    ? n.push({
                        title: C('DeleteLink'),
                        icon: 'delete',
                        handler: () => ne(e),
                        destructive: !0,
                      })
                    : n.push({
                        title: C('RevokeButton'),
                        icon: 'delete',
                        handler: () => q(e),
                        destructive: !0,
                      }),
                  n
                )
              },
              de = (0, a.Ye)(
                () => (e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return a.ZP.createElement(
                    $.Z,
                    {
                      round: !0,
                      ripple: !D,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : '',
                      onClick: t,
                      ariaLabel: 'Actions',
                    },
                    a.ZP.createElement('i', { className: 'icon-more' })
                  )
                },
                [D]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management ManageInvites' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(Ts.Z, {
                    tgsUrl: ws.l.Invite,
                    size: m.jVS,
                    className: 'section-icon',
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'text-muted' },
                    C(d ? 'PrimaryLinkHelpChannel' : 'PrimaryLinkHelp')
                  )
                ),
                H &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      'p',
                      { className: 'text-muted' },
                      C(n?.usernames ? 'PublicLink' : 'lng_create_permanent_link_title')
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'primary-link' },
                      a.ZP.createElement('input', {
                        className: 'form-control primary-link-input',
                        value: H,
                        readOnly: !0,
                        onClick: ie,
                      }),
                      a.ZP.createElement(
                        V.Z,
                        { className: 'primary-link-more-menu', trigger: de, positionX: 'right' },
                        a.ZP.createElement(z.Z, { icon: 'copy', onClick: ie }, C('Copy')),
                        !n?.usernames &&
                          a.ZP.createElement(
                            z.Z,
                            { icon: 'delete', onClick: W, destructive: !0 },
                            C('RevokeButton')
                          )
                      )
                    ),
                    a.ZP.createElement($.Z, { onClick: ie }, C('CopyLink'))
                  ),
                a.ZP.createElement(
                  'div',
                  { className: 'section', teactFastList: !0 },
                  a.ZP.createElement(
                    $.Z,
                    { isText: !0, key: 'create', className: 'create-link', onClick: K },
                    C('CreateNewLink')
                  ),
                  (!X || !X.length) &&
                    a.ZP.createElement(wa.Z, { text: 'No links found', key: 'nothing' }),
                  X?.map((e) =>
                    a.ZP.createElement(
                      Je.Z,
                      {
                        leftElement: a.ZP.createElement('i', {
                          className: `icon-link link-status-icon ${le(e)}`,
                        }),
                        secondaryIcon: 'more',
                        multiline: !0,
                        onClick: () => ee(e),
                        contextActions: ce(e),
                        key: e.link,
                      },
                      a.ZP.createElement(
                        'span',
                        { className: 'title invite-title' },
                        e.title || e.link
                      ),
                      a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, re(e))
                    )
                  ),
                  a.ZP.createElement(
                    'p',
                    { className: 'text-muted hint', key: 'links-hint' },
                    C('ManageLinksInfoHelp')
                  )
                ),
                l &&
                  Boolean(l.length) &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section', teactFastList: !0 },
                    a.ZP.createElement(
                      'p',
                      { className: 'text-muted', key: 'title' },
                      C('RevokedLinks')
                    ),
                    a.ZP.createElement(
                      Je.Z,
                      { icon: 'delete', destructive: !0, key: 'delete', onClick: f },
                      a.ZP.createElement('span', { className: 'title' }, C('DeleteAllRevokedLinks'))
                    ),
                    l?.map((e) =>
                      a.ZP.createElement(
                        Je.Z,
                        {
                          leftElement: a.ZP.createElement('i', {
                            className: `icon-link link-status-icon ${le(e)}`,
                          }),
                          secondaryIcon: 'more',
                          multiline: !0,
                          onClick: () => ee(e),
                          contextActions: ce(e),
                          key: e.link,
                        },
                        a.ZP.createElement('span', { className: 'title' }, e.title || e.link),
                        a.ZP.createElement('span', { className: 'subtitle', dir: 'auto' }, re(e))
                      )
                    )
                  )
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: b,
                onClose: S,
                title: C('DeleteAllRevokedLinks'),
                text: C('DeleteAllRevokedLinkHelp'),
                confirmIsDestructive: !0,
                confirmLabel: C('DeleteAll'),
                confirmHandler: Q,
              }),
              a.ZP.createElement(mt.Z, {
                isOpen: k,
                onClose: w,
                title: C('RevokeLink'),
                text: C('RevokeAlert'),
                confirmIsDestructive: !0,
                confirmLabel: C('RevokeButton'),
                confirmHandler: Y,
              }),
              a.ZP.createElement(mt.Z, {
                isOpen: R,
                onClose: F,
                title: C('DeleteLink'),
                text: C('DeleteLinkHelp'),
                confirmIsDestructive: !0,
                confirmLabel: C('Delete'),
                confirmHandler: ae,
              })
            )
          })
        ),
        $c = [1, 10, 100],
        jc = { hour: 36e5, day: 864e5, week: 6048e5 },
        Gc = jc.hour,
        Vc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { editingInvite: a } = (0, r.jU)(e).management.byChatId[n]
            return { editingInvite: a }
          })((e) => {
            let { chatId: t, editingInvite: n, isActive: o, onClose: r, onScreenSelect: l } = e
            const { editExportedChatInvite: c, exportChatInvite: d } = (0, i.Sv)(),
              m = (0, M.Z)(),
              [u, h, P] = (0, I.Z)(),
              [Z, v] = (0, a.eJ)(!1),
              [g, p] = (0, a.eJ)(''),
              [E, C] = (0, a.eJ)(Date.now() + Gc),
              [b, f] = (0, a.eJ)('unlimited'),
              [y, S] = (0, a.eJ)(10),
              [k, N] = (0, a.eJ)('0'),
              [w, T] = (0, a.eJ)(!1)
            ;(0, oe.Z)({ isActive: o, onBack: r }),
              (0, x.Z)(
                (e) => {
                  let [t] = e
                  if (t !== n)
                    if (n) {
                      const { title: e, usageLimit: t, expireDate: a, isRequestNeeded: s } = n
                      if (
                        (e && p(e), t && (N($c.includes(t) ? t.toString() : 'custom'), S(t)), a)
                      ) {
                        const e = (0, Oc.bp)() + Gc
                        f('custom'), C(1e3 * Math.max(a, e))
                      }
                      s && v(!0)
                    } else p(''), f('unlimited'), N('0'), C(1e3 * (0, Oc.bp)() + Gc), S(10), v(!1)
                },
                [n]
              )
            const A = (0, a.I4)((e) => {
                v(e.target.checked)
              }, []),
              R = (0, a.I4)((e) => {
                p(e.target.value)
              }, []),
              L = (0, a.I4)((e) => {
                S(Number.parseInt(e.target.value, 10))
              }, []),
              F = (0, a.I4)(
                (e) => {
                  C(e.getTime()), P()
                },
                [P]
              ),
              B = (0, a.I4)(() => {
                T(!0)
                const e = 'custom' === k ? y : Number(k)
                let a
                switch (b) {
                  case 'custom':
                    a = (0, Oc.bp)() + (E - Date.now()) / 1e3
                    break
                  case 'hour':
                  case 'day':
                  case 'week':
                    a = (0, Oc.bp)() + jc[b] / 1e3
                    break
                  case 'unlimited':
                    a = 0
                    break
                  default:
                    a = void 0
                }
                n
                  ? c({
                      link: n.link,
                      chatId: t,
                      title: g,
                      isRequestNeeded: Z,
                      expireDate: a,
                      usageLimit: e,
                    })
                  : d({ chatId: t, title: g, isRequestNeeded: Z, expireDate: a, usageLimit: e }),
                  l(s.u1.Invites)
              }, [t, E, y, c, n, d, Z, b, k, g, l])
            return a.ZP.createElement(
              'div',
              { className: 'Management ManageInvite' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(ht.Z, {
                    label: m('ApproveNewMembers'),
                    subLabel: m('ApproveNewMembersDescription'),
                    checked: Z,
                    onChange: A,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(He.Z, {
                    className: 'link-name',
                    placeholder: m('LinkNameHint'),
                    value: g,
                    onChange: R,
                  }),
                  a.ZP.createElement('p', { className: 'text-muted hint' }, m('LinkNameHelp'))
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement('div', { className: 'section-header' }, m('LimitByPeriod')),
                  a.ZP.createElement(js.Z, {
                    name: 'expireOptions',
                    options: [
                      { value: 'hour', label: m('Hours', 1) },
                      { value: 'day', label: m('Days', 1) },
                      { value: 'week', label: m('Weeks', 1) },
                      { value: 'unlimited', label: m('NoLimit') },
                      { value: 'custom', label: m('lng_group_invite_expire_custom') },
                    ],
                    onChange: f,
                    selected: b,
                  }),
                  'custom' === b &&
                    a.ZP.createElement(
                      $.Z,
                      { className: 'expire-limit', isText: !0, onClick: h },
                      (0, Pe.Tu)(m, E),
                      ' ',
                      (0, Pe.mr)(m, E)
                    ),
                  a.ZP.createElement('p', { className: 'text-muted hint' }, m('TimeLimitHelp'))
                ),
                !Z &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      'div',
                      { className: 'section-header' },
                      m('LimitNumberOfUses')
                    ),
                    a.ZP.createElement(js.Z, {
                      name: 'usageOptions',
                      options: [
                        ...$c.map((e) => ({ value: e.toString(), label: e })),
                        { value: '0', label: m('NoLimit') },
                        { value: 'custom', label: m('lng_group_invite_usage_custom') },
                      ],
                      onChange: N,
                      selected: k,
                    }),
                    'custom' === k &&
                      a.ZP.createElement('input', {
                        className: 'form-control usage-limit',
                        type: 'number',
                        min: '1',
                        max: '99999',
                        value: y,
                        onChange: L,
                      }),
                    a.ZP.createElement('p', { className: 'text-muted hint' }, m('UsesLimitHelp'))
                  ),
                a.ZP.createElement(
                  us.Z,
                  {
                    isShown: !0,
                    onClick: B,
                    disabled: w,
                    ariaLabel: m(n ? 'SaveLink' : 'CreateLink'),
                  },
                  a.ZP.createElement('i', { className: 'icon-check' })
                )
              ),
              a.ZP.createElement(bt, {
                isOpen: u,
                isFutureMode: !0,
                withTimePicker: !0,
                onClose: P,
                onSubmit: F,
                selectedAt: E,
                submitButtonLabel: m('Save'),
              })
            )
          })
        ),
        zc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n)
            return {
              enabledReactions: a.fullInfo?.enabledReactions,
              availableReactions: e.availableReactions,
              chat: a,
            }
          })((e) => {
            let { availableReactions: t, enabledReactions: n, chat: s, isActive: r, onClose: l } = e
            const { setChatEnabledReactions: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u] = (0, a.eJ)(!1),
              [h, P] = (0, a.eJ)(!1),
              [Z, v] = (0, a.eJ)(n)
            ;(0, oe.Z)({ isActive: r, onBack: l })
            const g = (0, a.Ye)(
                () => [
                  { value: 'all', label: d('AllReactions') },
                  { value: 'some', label: d('SomeReactions') },
                  { value: 'none', label: d('NoReactions') },
                ],
                [d]
              ),
              p = (0, a.I4)(() => {
                s && (P(!0), c({ chatId: s.id, enabledReactions: Z }))
              }, [s, Z, c])
            ;(0, a.d4)(() => {
              P(!1), u(!1), v(n)
            }, [n])
            const E = (0, a.Ye)(
                () =>
                  t?.filter((e) => {
                    let { isInactive: t } = e
                    return !t
                  }),
                [t]
              ),
              C = (0, a.I4)(
                (e) => {
                  v(
                    'all' === e
                      ? { type: 'all' }
                      : 'some' === e
                      ? { type: 'some', allowed: 'some' === n?.type ? n.allowed : [] }
                      : void 0
                  ),
                    u(!0)
                },
                [n]
              ),
              b = (0, a.I4)(
                (e) => {
                  if (!s || !E) return
                  const { name: t, checked: n } = e.currentTarget
                  if ('some' === Z?.type) {
                    const e = { emoticon: t }
                    v(
                      n
                        ? { type: 'some', allowed: [...Z.allowed, e] }
                        : { type: 'some', allowed: Z.allowed.filter((t) => !(0, o.Hl)(t, e)) }
                    )
                  }
                  u(!0)
                },
                [E, s, Z]
              )
            return a.ZP.createElement(
              'div',
              { className: 'Management' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(
                    'h3',
                    { className: 'section-heading' },
                    d('AvailableReactions')
                  ),
                  a.ZP.createElement(js.Z, {
                    selected: Z?.type || 'none',
                    name: 'reactions',
                    options: g,
                    onChange: C,
                  }),
                  a.ZP.createElement(
                    'p',
                    { className: 'section-info mt-4' },
                    'all' === Z?.type && d('EnableAllReactionsInfo'),
                    'some' === Z?.type && d('EnableSomeReactionsInfo'),
                    !Z && d('DisableReactionsInfo')
                  )
                ),
                'some' === Z?.type &&
                  a.ZP.createElement(
                    'div',
                    { className: 'section' },
                    a.ZP.createElement(
                      'h3',
                      { className: 'section-heading' },
                      d('AvailableReactions')
                    ),
                    E?.map((e) => {
                      let { reaction: n, title: s } = e
                      return a.ZP.createElement(
                        'div',
                        { className: 'ListItem no-selection' },
                        a.ZP.createElement(ht.Z, {
                          name: n.emoticon,
                          checked: Z?.allowed.some((e) => (0, o.Hl)(n, e)),
                          label: a.ZP.createElement(
                            'div',
                            { className: 'Reaction' },
                            a.ZP.createElement(ha.Z, { reaction: n, availableReactions: t }),
                            s
                          ),
                          onChange: b,
                        })
                      )
                    })
                  )
              ),
              a.ZP.createElement(
                us.Z,
                { isShown: m, onClick: p, ariaLabel: d('Save'), disabled: h },
                h
                  ? a.ZP.createElement(ce.Z, { color: 'white' })
                  : a.ZP.createElement('i', { className: 'icon-check' })
              )
            )
          })
        ),
        Hc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const { inviteInfo: a } = (0, r.jU)(e).management.byChatId[n],
              { invite: s, importers: i, requesters: l } = a || {},
              c = (0, r.Z1)(e, n)
            return { invite: s, importers: i, requesters: l, isChannel: c && (0, o.eA)(c) }
          })((e) => {
            let {
              chatId: t,
              invite: n,
              importers: s,
              requesters: o,
              isChannel: r,
              isActive: l,
              onClose: c,
            } = e
            const {
                showNotification: d,
                loadChatInviteImporters: m,
                loadChatInviteRequesters: u,
                openChat: h,
              } = (0, i.Sv)(),
              P = (0, M.Z)(),
              { usage: Z = 0, usageLimit: v, link: g, adminId: p } = n || {},
              E = n?.expireDate && 1e3 * (n.expireDate - (0, Oc.bp)()) + Date.now(),
              C = (n?.expireDate || 0) - (0, Oc.bp)() < 0
            ;(0, a.d4)(() => {
              g && (m({ chatId: t, link: g }), u({ chatId: t, link: g }))
            }, [t, g, m, u])
            const b = (0, a.I4)(() => {
              ;(0, ps.TE)(n.link), d({ message: P('LinkCopied') })
            }, [n, P, d])
            return (
              (0, oe.Z)({ isActive: l, onBack: c }),
              a.ZP.createElement(
                'div',
                { className: 'Management ManageInviteInfo' },
                a.ZP.createElement(
                  'div',
                  { className: 'custom-scroll' },
                  !n && a.ZP.createElement('p', { className: 'text-muted' }, P('Loading')),
                  n &&
                    a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      a.ZP.createElement(
                        'div',
                        { className: 'section' },
                        a.ZP.createElement('h3', { className: 'link-title' }, n.title || n.link),
                        a.ZP.createElement('input', {
                          className: 'form-control',
                          value: n.link,
                          readOnly: !0,
                          onClick: b,
                        }),
                        a.ZP.createElement(
                          $.Z,
                          { className: 'copy-link', onClick: b },
                          P('CopyLink')
                        ),
                        Boolean(E) &&
                          a.ZP.createElement(
                            'p',
                            { className: 'text-muted' },
                            C
                              ? P('ExpiredLink')
                              : P('LinkExpiresIn', `${(0, Pe.Tu)(P, E)} ${(0, Pe.mr)(P, E)}`)
                          )
                      ),
                      p &&
                        a.ZP.createElement(
                          'div',
                          { className: 'section' },
                          a.ZP.createElement('p', null, P('LinkCreatedeBy')),
                          a.ZP.createElement(
                            Je.Z,
                            {
                              className: 'chat-item-clickable scroll-item small-icon',
                              onClick: () => h({ id: p }),
                            },
                            a.ZP.createElement(Ye.Z, {
                              userId: p,
                              status: (0, Pe.ZK)(P, 1e3 * n.date, !0),
                              forceShowSelf: !0,
                            })
                          )
                        ),
                      (() => {
                        if (s?.length || !o?.length)
                          return s
                            ? a.ZP.createElement(
                                'div',
                                { className: 'section' },
                                a.ZP.createElement(
                                  'p',
                                  null,
                                  s.length ? P('PeopleJoined', Z) : P('NoOneJoined')
                                ),
                                a.ZP.createElement(
                                  'p',
                                  { className: 'text-muted' },
                                  !s.length &&
                                    (v
                                      ? P('PeopleCanJoinViaLinkCount', v - Z)
                                      : P('NoOneJoinedYet')),
                                  s.map((e) =>
                                    a.ZP.createElement(
                                      Je.Z,
                                      {
                                        className: 'chat-item-clickable scroll-item small-icon',
                                        onClick: () => h({ id: e.userId }),
                                      },
                                      a.ZP.createElement(Ye.Z, {
                                        userId: e.userId,
                                        status: (0, Pe.ZK)(P, 1e3 * e.date, !0),
                                        forceShowSelf: !0,
                                      })
                                    )
                                  )
                                )
                              )
                            : a.ZP.createElement(ce.Z, null)
                      })(),
                      (() => {
                        if (!n?.isRevoked) {
                          if (!o && s) return a.ZP.createElement(ce.Z, null)
                          if (o?.length)
                            return a.ZP.createElement(
                              'div',
                              { className: 'section' },
                              a.ZP.createElement(
                                'p',
                                null,
                                P(r ? 'SubscribeRequests' : 'MemberRequests')
                              ),
                              a.ZP.createElement(
                                'p',
                                { className: 'text-muted' },
                                o.map((e) =>
                                  a.ZP.createElement(
                                    Je.Z,
                                    {
                                      className: 'chat-item-clickable scroll-item small-icon',
                                      onClick: () => h({ id: e.userId }),
                                    },
                                    a.ZP.createElement(Ye.Z, {
                                      userId: e.userId,
                                      status: (0, Pe.ZK)(P, 1e3 * e.date, !0),
                                      forceShowSelf: !0,
                                    })
                                  )
                                )
                              )
                            )
                        }
                      })()
                    )
                )
              )
            )
          })
        ),
        Xc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { userId: n } = t
            return { user: (0, r.dy)(e, n), animationLevel: e.settings.byKey.animationLevel }
          })((e) => {
            let {
              userId: t,
              chatId: n,
              about: s,
              date: r,
              isChannel: l,
              user: c,
              animationLevel: d,
            } = e
            const { openChat: m, hideChatJoinRequest: u } = (0, i.Sv)(),
              h = (0, Q.y)('JoinRequest'),
              P = (0, M.Z)(),
              Z = (0, o.Js)(c),
              v = 1e3 * (r - (0, Oc.bp)()) + Date.now(),
              g = (0, Pe.zk)(new Date(v)) ? (0, Pe.mr)(P, v) : (0, Pe.j1)(P, v, !0, !1, !0),
              p = (0, a.I4)(() => {
                u({ chatId: n, userId: t, isApproved: !0 })
              }, [n, u, t]),
              E = (0, a.I4)(() => {
                u({ chatId: n, userId: t, isApproved: !1 })
              }, [n, u, t])
            return a.ZP.createElement(
              'div',
              { className: h('&') },
              a.ZP.createElement(
                'div',
                { className: h('top') },
                a.ZP.createElement(
                  'div',
                  {
                    className: h('user'),
                    onClick: () => {
                      m({ id: t })
                    },
                  },
                  a.ZP.createElement(De.Z, {
                    key: t,
                    size: 'medium',
                    user: c,
                    animationLevel: d,
                    withVideo: !0,
                  }),
                  a.ZP.createElement(
                    'div',
                    { className: h('user-info') },
                    a.ZP.createElement('div', { className: h('user-name') }, Z),
                    a.ZP.createElement('div', { className: h('user-subtitle') }, s)
                  )
                ),
                a.ZP.createElement('div', { className: h('date') }, g)
              ),
              a.ZP.createElement(
                'div',
                { className: h('buttons') },
                a.ZP.createElement(
                  $.Z,
                  { className: h('button'), onClick: p },
                  P(l ? 'ChannelAddToChannel' : 'ChannelAddToGroup')
                ),
                a.ZP.createElement(
                  $.Z,
                  { className: h('button'), isText: !0, onClick: E },
                  P('DismissRequest')
                )
              )
            )
          })
        ),
        Jc = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, r.Z1)(e, n)
            return { chat: a, isChannel: a && (0, o.eA)(a) }
          })((e) => {
            let { chat: t, chatId: n, isActive: s, isChannel: r, onClose: l } = e
            const { hideAllChatJoinRequests: c, loadChatJoinRequests: d } = (0, i.Sv)(),
              [u, h, P] = (0, I.Z)(),
              [Z, v, g] = (0, I.Z)(),
              p = (0, M.Z)()
            ;(0, oe.Z)({ isActive: s, onBack: l }),
              (0, a.d4)(() => {
                t?.joinRequests || (0, o.YC)(n) || d({ chatId: n })
              }, [t, n, d])
            const E = (0, a.I4)(() => {
                c({ chatId: n, isApproved: !0 }), P()
              }, [c, n, P]),
              C = (0, a.I4)(() => {
                c({ chatId: n, isApproved: !1 }), g()
              }, [c, n, g])
            return a.ZP.createElement(
              'div',
              { className: 'Management ManageJoinRequests' },
              a.ZP.createElement(
                'div',
                { className: 'custom-scroll' },
                a.ZP.createElement(
                  'div',
                  { className: 'section' },
                  a.ZP.createElement(Ts.Z, {
                    tgsUrl: ws.l.JoinRequest,
                    size: m.PMB,
                    className: 'section-icon',
                  }),
                  Boolean(t?.joinRequests?.length) &&
                    a.ZP.createElement(
                      'div',
                      { className: 'bulk-actions' },
                      a.ZP.createElement(
                        $.Z,
                        { className: 'bulk-action-button', onClick: h },
                        'Accept all'
                      ),
                      a.ZP.createElement(
                        $.Z,
                        { className: 'bulk-action-button', onClick: v, isText: !0 },
                        'Dismiss all'
                      )
                    )
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'section', teactFastList: !0 },
                  a.ZP.createElement(
                    'p',
                    { key: 'title' },
                    t?.joinRequests
                      ? t.joinRequests.length
                        ? p('JoinRequests', t.joinRequests.length)
                        : p('NoMemberRequests')
                      : p('Loading')
                  ),
                  !t?.joinRequests && a.ZP.createElement(ce.Z, { key: 'loading' }),
                  0 === t?.joinRequests?.length &&
                    a.ZP.createElement(
                      'p',
                      { className: 'text-muted', key: 'empty' },
                      p(r ? 'NoSubscribeRequestsDescription' : 'NoMemberRequestsDescription')
                    ),
                  t?.joinRequests?.map((e) => {
                    let { userId: t, about: s, date: i } = e
                    return a.ZP.createElement(Xc, {
                      userId: t,
                      about: s,
                      date: i,
                      isChannel: r,
                      chatId: n,
                      key: t,
                    })
                  })
                )
              ),
              a.ZP.createElement(mt.Z, {
                isOpen: u,
                onClose: P,
                title: 'Accept all requests?',
                text: 'Are you sure you want to accept all requests?',
                confirmHandler: E,
              }),
              a.ZP.createElement(mt.Z, {
                isOpen: Z,
                onClose: g,
                title: 'Reject all requests?',
                text: 'Are you sure you want to reject all requests?',
                confirmHandler: C,
              })
            )
          })
        ),
        qc = (0, a.X$)(
          (0, i.c$)((e) => ({ managementType: (0, r.pP)(e) }))((e) => {
            let {
              chatId: t,
              currentScreen: n,
              selectedChatMemberId: i,
              isPromotedByCurrentUser: o,
              onScreenSelect: r,
              onChatMemberSelect: l,
              onClose: c,
              isActive: d,
              managementType: m,
            } = e
            switch (n) {
              case s.u1.Initial:
                switch (m) {
                  case 'user':
                    return a.ZP.createElement(Zc, { key: t, userId: t, onClose: c, isActive: d })
                  case 'group':
                    return a.ZP.createElement(Cc, {
                      key: t,
                      chatId: t,
                      onScreenSelect: r,
                      onClose: c,
                      isActive:
                        d ||
                        [
                          s.u1.ChatPrivacyType,
                          s.u1.Discussion,
                          s.u1.GroupPermissions,
                          s.u1.ChatAdministrators,
                          s.u1.GroupRemovedUsers,
                          s.u1.GroupUserPermissionsCreate,
                          s.u1.GroupUserPermissions,
                          s.u1.ChatAdminRights,
                          s.u1.ChatNewAdminRights,
                          s.u1.GroupRecentActions,
                        ].includes(n),
                    })
                  case 'channel':
                    return a.ZP.createElement(wc, {
                      key: t,
                      chatId: t,
                      onScreenSelect: r,
                      onClose: c,
                      isActive:
                        d ||
                        [
                          s.u1.ChannelSubscribers,
                          s.u1.ChatAdministrators,
                          s.u1.ChannelRemovedUsers,
                          s.u1.Discussion,
                          s.u1.ChatPrivacyType,
                          s.u1.ChatAdminRights,
                          s.u1.ChatNewAdminRights,
                          s.u1.GroupRecentActions,
                        ].includes(n),
                    })
                }
                break
              case s.u1.ChatPrivacyType:
                return a.ZP.createElement(Mc, { chatId: t, isActive: d, onClose: c })
              case s.u1.Discussion:
                return a.ZP.createElement(Tc, {
                  chatId: t,
                  onScreenSelect: r,
                  isActive: d,
                  onClose: c,
                })
              case s.u1.GroupPermissions:
                return a.ZP.createElement(yc, {
                  chatId: t,
                  onScreenSelect: r,
                  onChatMemberSelect: l,
                  isActive:
                    d ||
                    [
                      s.u1.GroupRemovedUsers,
                      s.u1.GroupUserPermissionsCreate,
                      s.u1.GroupUserPermissions,
                    ].includes(n),
                  onClose: c,
                })
              case s.u1.ChannelRemovedUsers:
              case s.u1.GroupRemovedUsers:
                return a.ZP.createElement(kc, { chatId: t, isActive: d, onClose: c })
              case s.u1.GroupUserPermissionsCreate:
                return a.ZP.createElement(Dc, {
                  chatId: t,
                  onChatMemberSelect: l,
                  onScreenSelect: r,
                  isActive: d || [s.u1.GroupUserPermissions].includes(n),
                  onClose: c,
                })
              case s.u1.GroupUserPermissions:
                return a.ZP.createElement(Ac, {
                  chatId: t,
                  selectedChatMemberId: i,
                  isPromotedByCurrentUser: o,
                  onScreenSelect: r,
                  isActive: d,
                  onClose: c,
                })
              case s.u1.ChatAdministrators:
                return a.ZP.createElement(Rc, {
                  chatId: t,
                  onScreenSelect: r,
                  onChatMemberSelect: l,
                  isActive:
                    d ||
                    [
                      s.u1.ChatAdminRights,
                      s.u1.ChatNewAdminRights,
                      s.u1.GroupRecentActions,
                    ].includes(n),
                  onClose: c,
                })
              case s.u1.GroupRecentActions:
                return a.ZP.createElement(Lc, { chatId: t, isActive: d, onClose: c })
              case s.u1.ChatNewAdminRights:
              case s.u1.ChatAdminRights:
                return a.ZP.createElement(Fc, {
                  chatId: t,
                  isNewAdmin: n === s.u1.ChatNewAdminRights,
                  selectedUserId: i,
                  isPromotedByCurrentUser: o,
                  onScreenSelect: r,
                  isActive: d,
                  onClose: c,
                })
              case s.u1.ChannelSubscribers:
              case s.u1.GroupMembers:
                return a.ZP.createElement(Bc, { chatId: t, isActive: d, onClose: c })
              case s.u1.Invites:
                return a.ZP.createElement(_c, {
                  chatId: t,
                  isActive: d,
                  onClose: c,
                  onScreenSelect: r,
                })
              case s.u1.EditInvite:
                return a.ZP.createElement(Vc, {
                  chatId: t,
                  isActive: d,
                  onClose: c,
                  onScreenSelect: r,
                })
              case s.u1.GroupAddAdmins:
                return a.ZP.createElement(Bc, {
                  chatId: t,
                  noAdmins: !0,
                  isActive: d,
                  onClose: c,
                  onScreenSelect: r,
                  onChatMemberSelect: l,
                })
              case s.u1.Reactions:
                return a.ZP.createElement(zc, { chatId: t, isActive: d, onClose: c })
              case s.u1.InviteInfo:
                return a.ZP.createElement(Hc, { chatId: t, isActive: d, onClose: c })
              case s.u1.JoinRequests:
                return a.ZP.createElement(Jc, { chatId: t, isActive: d, onClose: c })
            }
          })
        ),
        Yc = /^4\d/,
        Kc = /^5[1-5]/,
        Wc = /^2[2-7]\d{2}/,
        Qc = /^220[0-4]/
      let ed
      !(function (e) {
        ;(e[(e.Default = 0)] = 'Default'),
          (e[(e.Visa = 1)] = 'Visa'),
          (e[(e.Mastercard = 2)] = 'Mastercard'),
          (e[(e.Mir = 3)] = 'Mir')
      })(ed || (ed = {}))
      const td = {
        [ed.Default]: '',
        [ed.Visa]: 'visa',
        [ed.Mastercard]: 'mastercard',
        [ed.Mir]: 'mir',
      }
      function nd(e) {
        return (
          (e = e.replace(/\s/g, '')),
          Yc.test(e)
            ? ed.Visa
            : Qc.test(e)
            ? ed.Mir
            : Kc.test(e) || Wc.test(e)
            ? ed.Mastercard
            : ed.Default
        )
      }
      const ad = {
          streetLine1: '',
          streetLine2: '',
          city: '',
          state: '',
          countryIso2: '',
          postCode: '',
          fullName: '',
          email: '',
          phone: '',
          shipping: '',
          cardNumber: '',
          cardholder: '',
          expiry: '',
          cvv: '',
          billingCountry: '',
          billingZip: '',
          saveInfo: !0,
          saveCredentials: !1,
          formErrors: {},
          tipAmount: 0,
          savedCredentialId: '',
        },
        sd = (e, t) => {
          switch (t.type) {
            case 'changeAddress1':
              return {
                ...e,
                streetLine1: t.payload,
                formErrors: { ...e.formErrors, streetLine1: void 0 },
              }
            case 'changeAddress2':
              return {
                ...e,
                streetLine2: t.payload,
                formErrors: { ...e.formErrors, streetLine2: void 0 },
              }
            case 'changeCity':
              return { ...e, city: t.payload, formErrors: { ...e.formErrors, city: void 0 } }
            case 'changeState':
              return { ...e, state: t.payload, formErrors: { ...e.formErrors, state: void 0 } }
            case 'changeCountry':
              return {
                ...e,
                countryIso2: t.payload.iso2,
                billingCountry: t.payload.defaultName,
                formErrors: { ...e.formErrors, countryIso2: void 0 },
              }
            case 'changePostCode':
              return {
                ...e,
                postCode: t.payload,
                formErrors: { ...e.formErrors, postCode: void 0 },
              }
            case 'changeFullName':
              return {
                ...e,
                fullName: t.payload,
                formErrors: { ...e.formErrors, fullName: void 0 },
              }
            case 'changeEmail':
              return { ...e, email: t.payload, formErrors: { ...e.formErrors, email: void 0 } }
            case 'changePhone':
              return { ...e, phone: t.payload, formErrors: { ...e.formErrors, phone: void 0 } }
            case 'changeShipping':
              return { ...e, shipping: t.payload }
            case 'changeCardNumber':
              return {
                ...e,
                cardNumber: t.payload,
                formErrors: { ...e.formErrors, cardNumber: void 0 },
              }
            case 'changeCardholder':
              return {
                ...e,
                cardholder: t.payload,
                formErrors: { ...e.formErrors, cardholder: void 0 },
              }
            case 'changeExpiryDate':
              return { ...e, expiry: t.payload, formErrors: { ...e.formErrors, expiry: void 0 } }
            case 'changeCvvCode':
              return { ...e, cvv: t.payload, formErrors: { ...e.formErrors, cvv: void 0 } }
            case 'changeBillingCountry':
              return {
                ...e,
                billingCountry: t.payload,
                formErrors: { ...e.formErrors, billingCountry: void 0 },
              }
            case 'changeBillingZip':
              return {
                ...e,
                billingZip: t.payload,
                formErrors: { ...e.formErrors, billingZip: void 0 },
              }
            case 'changeSaveInfo':
              return { ...e, saveInfo: t.payload }
            case 'changeSaveCredentials':
              return { ...e, saveCredentials: t.payload }
            case 'updateUserInfo':
              return t.payload.country
                ? { ...e, ...t.payload, billingCountry: t.payload.country }
                : { ...e, ...t.payload }
            case 'setFormErrors':
              return { ...e, formErrors: { ...e.formErrors, ...t.payload } }
            case 'setTipAmount':
              return { ...e, tipAmount: t.payload }
            case 'changeSavedCredentialId':
              return { ...e, savedCredentialId: t.payload }
            case 'resetState':
              return { ...ad }
            default:
              return e
          }
        }
      function id(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400
        ;(0, a.d4)(() => {
          d.$b ||
            setTimeout(() => {
              ;(0, ne.T2)(() => {
                e.current && e.current.focus()
              })
            }, t)
        }, [e, t])
      }
      const od = (0, a.X$)((e) => {
          const {
              id: t,
              value: n,
              label: s,
              hasArrow: i,
              error: o,
              ref: r,
              placeholder: l,
              tabIndex: c,
              onChange: d,
              children: m,
            } = e,
            u = o || s,
            h = (0, Q.Z)(
              'input-group',
              n && 'touched',
              o && 'error',
              u && 'with-label',
              i && 'with-arrow',
              'input-group'
            )
          return a.ZP.createElement(
            'div',
            { className: h },
            a.ZP.createElement(
              'select',
              {
                className: 'form-control',
                id: t,
                value: n || '',
                onChange: d,
                placeholder: l || s,
                tabIndex: c,
                ref: r,
              },
              m
            ),
            u && t && a.ZP.createElement('label', { htmlFor: t }, u)
          )
        }),
        rd = (0, a.X$)((e) => {
          let {
            state: t,
            needEmail: n,
            needPhone: s,
            needName: i,
            needAddress: o,
            countryList: r,
            dispatch: l,
          } = e
          const c = (0, a.sO)(null),
            d = (0, a.sO)(null),
            m = (0, a.sO)(null)
          ;(0, a.d4)(() => {
            m.current && m.current.value !== t.countryIso2 && (m.current.value = t.countryIso2)
          }, [t.countryIso2])
          const u = (0, M.Z)()
          id(c)
          const h = (0, a.I4)(
              (e) => {
                l({ type: 'changeAddress1', payload: e.target.value })
              },
              [l]
            ),
            P = (0, a.I4)(
              (e) => {
                l({ type: 'changeAddress2', payload: e.target.value })
              },
              [l]
            ),
            Z = (0, a.I4)(
              (e) => {
                l({ type: 'changeCity', payload: e.target.value })
              },
              [l]
            ),
            v = (0, a.I4)(
              (e) => {
                l({ type: 'changeState', payload: e.target.value })
              },
              [l]
            ),
            g = (0, a.I4)(
              (e) => {
                l({ type: 'changeCountry', payload: r.find((t) => t.iso2 === e.target.value) })
              },
              [r, l]
            ),
            p = (0, a.I4)(
              (e) => {
                l({ type: 'changePostCode', payload: e.target.value })
              },
              [l]
            ),
            E = (0, a.I4)(
              (e) => {
                l({ type: 'changeFullName', payload: e.target.value })
              },
              [l]
            ),
            C = (0, a.I4)(
              (e) => {
                l({ type: 'changeEmail', payload: e.target.value })
              },
              [l]
            ),
            b = (0, a.I4)(
              (e) => {
                let { value: t } = e.target
                ;(t = `+${t.replace(/\D/g, '')}`),
                  d.current && (d.current.value = t),
                  l({ type: 'changePhone', payload: t })
              },
              [l]
            ),
            f = (0, a.I4)(
              (e) => {
                l({ type: 'changeSaveInfo', payload: e.target.value })
              },
              [l]
            ),
            { formErrors: I } = t
          return a.ZP.createElement(
            'div',
            { className: 'ShippingInfo' },
            a.ZP.createElement(
              'form',
              null,
              o
                ? a.ZP.createElement(
                    'div',
                    null,
                    a.ZP.createElement('h5', null, u('PaymentShippingAddress')),
                    a.ZP.createElement(He.Z, {
                      ref: c,
                      label: u('PaymentShippingAddress1Placeholder'),
                      onChange: h,
                      value: t.streetLine1,
                      inputMode: 'text',
                      tabIndex: 0,
                      error: I.streetLine1,
                    }),
                    a.ZP.createElement(He.Z, {
                      label: u('PaymentShippingAddress2Placeholder'),
                      onChange: P,
                      value: t.streetLine2,
                      inputMode: 'text',
                      tabIndex: 0,
                      error: I.streetLine2,
                    }),
                    a.ZP.createElement(He.Z, {
                      label: u('PaymentShippingCityPlaceholder'),
                      onChange: Z,
                      value: t.city,
                      inputMode: 'text',
                      tabIndex: 0,
                      error: I.city,
                    }),
                    a.ZP.createElement(He.Z, {
                      label: u('PaymentShippingStatePlaceholder'),
                      onChange: v,
                      value: t.state,
                      inputMode: 'text',
                      error: I.state,
                    }),
                    a.ZP.createElement(
                      od,
                      {
                        label: u('PaymentShippingCountry'),
                        placeholder: u('PaymentShippingCountry'),
                        onChange: g,
                        value: t.countryIso2,
                        hasArrow: Boolean(!0),
                        id: 'shipping-country',
                        error: I.countryIso2,
                        ref: m,
                        tabIndex: 0,
                      },
                      r.map((e) => {
                        let { defaultName: n, name: s, iso2: i } = e
                        return a.ZP.createElement(
                          'option',
                          { value: i, className: 'county-item', selected: i === t.countryIso2 },
                          n || s
                        )
                      })
                    ),
                    a.ZP.createElement(He.Z, {
                      label: u('PaymentShippingZipPlaceholder'),
                      onChange: p,
                      value: t.postCode,
                      inputMode: 'text',
                      tabIndex: 0,
                      error: I.postCode,
                    })
                  )
                : void 0,
              i || n || s ? a.ZP.createElement('h5', null, u('PaymentShippingReceiver')) : void 0,
              i &&
                a.ZP.createElement(He.Z, {
                  label: u('PaymentShippingName'),
                  onChange: E,
                  value: t.fullName,
                  inputMode: 'text',
                  tabIndex: 0,
                  error: I.fullName,
                }),
              n &&
                a.ZP.createElement(He.Z, {
                  label: u('PaymentShippingEmailPlaceholder'),
                  onChange: C,
                  value: t.email,
                  inputMode: 'email',
                  tabIndex: 0,
                  error: I.email,
                }),
              s &&
                a.ZP.createElement(He.Z, {
                  label: u('PaymentShippingPhoneNumber'),
                  onChange: b,
                  value: t.phone,
                  inputMode: 'tel',
                  tabIndex: 0,
                  error: I.phone,
                  ref: d,
                }),
              a.ZP.createElement(ht.Z, {
                label: u('PaymentShippingSave'),
                subLabel: u('PaymentShippingSaveInfo'),
                checked: Boolean(t.saveInfo),
                tabIndex: 0,
                onChange: f,
              })
            )
          )
        }),
        ld = (0, a.X$)((e) => {
          let { state: t, shippingOptions: n, currency: s, dispatch: i } = e
          const o = (0, M.Z)()
          ;(0, a.d4)(() => {
            n && n.length && !t.shipping && i({ type: 'changeShipping', payload: n[0].id })
          }, [n, t.shipping, i])
          const r = (0, a.I4)(
              (e) => {
                i({ type: 'changeShipping', payload: e })
              },
              [i]
            ),
            l = (0, a.Ye)(
              () =>
                n.map((e) => {
                  let { id: t, title: n, amount: a } = e
                  return { label: n, subLabel: (0, Ft.x)(a, s, o.code), value: t }
                }),
              [n, s, o.code]
            )
          return a.ZP.createElement(
            'div',
            { className: 'Shipping' },
            a.ZP.createElement(
              'form',
              null,
              a.ZP.createElement('p', null, o('PaymentShippingMethod')),
              a.ZP.createElement(js.Z, {
                name: 'shipping-options',
                options: l,
                onChange: r,
                selected: t.shipping,
              })
            )
          )
        }),
        cd = {
          root: 'SM3T4awhZJvKn_c8aRuY',
          description: 'RWoBZem6PCNMF5hu6Shs',
          'checkout-picture': 'prUKJGh6W9LIyjSnRbZc',
          checkoutPicture: 'prUKJGh6W9LIyjSnRbZc',
          text: 'xUG3uFeTiPPFkWHQELCc',
          'checkout-title': 'MO45Rkd2ksVxfzAONvQ6',
          checkoutTitle: 'MO45Rkd2ksVxfzAONvQ6',
          'checkout-description': 'LqaZe1TRdNI17BEa1gcl',
          checkoutDescription: 'LqaZe1TRdNI17BEa1gcl',
          'price-info': 'mz2vhtmYPNRaJbeUrXKA',
          priceInfo: 'mz2vhtmYPNRaJbeUrXKA',
          'price-info-item': 'Ct9Ine31cu5h7FCjtRWa',
          priceInfoItem: 'Ct9Ine31cu5h7FCjtRWa',
          'price-info-item-main': 'JduVB3d3NxN9TybmxIgS',
          priceInfoItemMain: 'JduVB3d3NxN9TybmxIgS',
          'price-info-item-title': 'O7d8G4OQ_yTJSHiHbgBR',
          priceInfoItemTitle: 'O7d8G4OQ_yTJSHiHbgBR',
          tipsList: 'zsSyrAOxg0qs0nPJWSEe',
          tipsItem: 'lcjeIUsdqs95BdK_oysT',
          tipsItem_active: 'XRnGKO5ClzA_4S8i81wC',
          tipsItemActive: 'XRnGKO5ClzA_4S8i81wC',
          'invoice-info': 'MyMLGHhiEKOVIoG3aQTS',
          invoiceInfo: 'MyMLGHhiEKOVIoG3aQTS',
          provider: 'hLVHJSaVspSZdzxNlBJk',
          stripe: 'nrKVVKzRmr7s0TE15uG1',
          smartglocal: 'oONvjFUTa5AbWvrbzbWn',
          'checkout-info-item-info-title': 'bkIqUpVUAY04wdT8fySX',
          checkoutInfoItemInfoTitle: 'bkIqUpVUAY04wdT8fySX',
          'checkout-info-item-info-data': 'VAzhVfK6c1pUriepo4Ga',
          checkoutInfoItemInfoData: 'VAzhVfK6c1pUriepo4Ga',
          'tos-checkbox': 'WjrdCzbl3hROmSBGGnjy',
          tosCheckbox: 'WjrdCzbl3hROmSBGGnjy',
        },
        dd = (0, a.X$)((e) => {
          let {
            chat: t,
            invoice: n,
            prices: r,
            shippingPrices: l,
            checkoutInfo: c,
            currency: d,
            totalPrice: m,
            isTosAccepted: u,
            dispatch: h,
            onAcceptTos: P,
            tipAmount: Z,
            needAddress: v,
            hasShippingOptions: g,
            savedCredentials: p,
          } = e
          const { setPaymentStep: E } = (0, i.Sv)(),
            C = (0, M.Z)(),
            b = Boolean(h),
            {
              photo: f,
              title: I,
              text: y,
              isRecurring: S,
              recurringTermsUrl: k,
              suggestedTipAmounts: N,
              maxTipAmount: w,
            } = n || {},
            {
              paymentMethod: T,
              paymentProvider: A,
              shippingAddress: L,
              name: F,
              phone: x,
              shippingMethod: B,
            } = c || {},
            D = (0, R.Z)((0, o.O9)(f)),
            O = (0, a.I4)(
              (e) => {
                h({ type: 'setTipAmount', payload: w ? Math.min(e, w) : e })
              },
              [h, w]
            ),
            U = (0, a.I4)(() => {
              E({ step: p?.length ? s.KB.SavedPayments : s.KB.PaymentInfo })
            }, [p?.length, E]),
            _ = (0, a.I4)(() => {
              E({ step: s.KB.ShippingInfo })
            }, [E]),
            $ = (0, a.I4)(() => {
              E({ step: s.KB.Shipping })
            }, [E])
          return a.ZP.createElement(
            'div',
            { className: cd.root },
            a.ZP.createElement(
              'div',
              { className: cd.description },
              D && a.ZP.createElement('img', { className: cd.checkoutPicture, src: D, alt: '' }),
              !D &&
                f &&
                a.ZP.createElement(Go.Z, {
                  width: f.dimensions?.width,
                  height: f.dimensions?.height,
                  className: cd.checkoutPicture,
                  forceAspectRatio: !0,
                }),
              a.ZP.createElement(
                'div',
                { className: cd.text },
                a.ZP.createElement('h5', { className: cd.checkoutTitle }, I),
                y &&
                  a.ZP.createElement(
                    'div',
                    { className: cd.checkoutDescription },
                    (0, X.Z)(y, ['br', 'links', 'emoji'])
                  )
              )
            ),
            a.ZP.createElement(
              'div',
              { className: cd.priceInfo },
              r && r.map((e) => md(C.code, e.label, e.amount, d)),
              l && l.map((e) => md(C.code, e.label, e.amount, d)),
              N &&
                N.length > 0 &&
                a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement(
                    'div',
                    { className: cd.priceInfoItem },
                    a.ZP.createElement('div', { className: cd.priceInfoItemTitle }, I),
                    a.ZP.createElement('div', null, (0, Ft.x)(Z, d, C.code))
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: cd.tipsList },
                    N.map((e) =>
                      a.ZP.createElement(
                        'div',
                        {
                          key: e,
                          className: (0, Q.Z)(cd.tipsItem, e === Z && cd.tipsItem_active),
                          onClick: h ? () => O(e === Z ? 0 : e) : void 0,
                        },
                        (0, Ft.x)(e, d, C.code, !0)
                      )
                    )
                  )
                ),
              void 0 !== m && md(C.code, C('Checkout.TotalAmount'), m, d, !0)
            ),
            a.ZP.createElement(
              'div',
              { className: cd.invoiceInfo },
              ud({
                title: T || p?.[0].title,
                label: C('PaymentCheckoutMethod'),
                icon: 'card',
                onClick: b ? U : void 0,
              }),
              A &&
                ud({
                  title: A,
                  label: C('PaymentCheckoutProvider'),
                  customIcon: (0, Q.Z)(cd.provider, cd[A.toLowerCase()]),
                }),
              (v || !b) &&
                ud({
                  title: L,
                  label: C('PaymentShippingAddress'),
                  icon: 'location',
                  onClick: b ? _ : void 0,
                }),
              F && ud({ title: F, label: C('PaymentCheckoutName'), icon: 'user' }),
              x && ud({ title: x, label: C('PaymentCheckoutPhoneNumber'), icon: 'phone' }),
              (g || !b) &&
                ud({
                  title: B,
                  label: C('PaymentCheckoutShippingMethod'),
                  icon: 'truck',
                  onClick: b ? $ : void 0,
                }),
              S &&
                ((j = k),
                a.ZP.createElement(ht.Z, {
                  label: (function (e, n) {
                    const s = C('PaymentCheckoutAcceptRecurrent', t?.title).split('*')
                    return a.ZP.createElement(
                      a.ZP.Fragment,
                      null,
                      s[0],
                      a.ZP.createElement(sa.Z, { url: e, text: s[1], isRtl: n }),
                      s.slice(2)
                    )
                  })(j, C.isRtl),
                  name: 'checkout_tos',
                  checked: Boolean(u),
                  className: cd.tosCheckbox,
                  tabIndex: 0,
                  onCheck: P,
                }))
            )
          )
          var j
        })
      function md(e, t, n, s) {
        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
        return a.ZP.createElement(
          'div',
          { className: (0, Q.Z)(cd.priceInfoItem, i && cd.priceInfoItemMain) },
          a.ZP.createElement('div', { className: cd.priceInfoItemTitle }, t),
          a.ZP.createElement('div', null, (0, Ft.x)(n, s, e))
        )
      }
      function ud(e) {
        let { title: t, label: n, icon: s, customIcon: i, onClick: o } = e
        return a.ZP.createElement(
          Je.Z,
          { multiline: Boolean(t && n !== t), icon: s, inactive: !o, onClick: o },
          i && a.ZP.createElement('i', { className: i }),
          a.ZP.createElement('div', { className: cd.checkoutInfoItemInfoTitle }, t || n),
          t && n !== t && a.ZP.createElement('p', { className: cd.checkoutInfoItemInfoData }, n)
        )
      }
      const hd = (0, a.X$)((e) => {
          let { value: t, error: n, onChange: s } = e
          const i = (0, M.Z)(),
            o = (0, a.I4)(
              (e) => {
                const n = e.target.value
                t.endsWith('/') && t.length > n.length
                  ? s(n)
                  : s(
                      (function (e) {
                        const t = (e = e.replace(/[^\d]/g, '').slice(0, 4)).match(/.{1,2}/g)
                        return (
                          t?.[0] && Number(t[0]) > 12 && (t[0] = '12'),
                          t?.[0] && 2 === t[0].length && !t[1] && (t[1] = ''),
                          t ? t.join('/') : ''
                        )
                      })(e.target.value)
                    )
              },
              [s, t]
            )
          return a.ZP.createElement(He.Z, {
            label: i('PaymentCardExpireDate'),
            onChange: o,
            value: t,
            error: n,
            inputMode: 'numeric',
            tabIndex: 0,
            maxLength: 5,
            teactExperimentControlled: !0,
          })
        }),
        Pd = n.p + 'mastercard.790db81f7978635f77d8.svg',
        Zd = n.p + 'visa.538e537ba818f53b0a8f.svg',
        vd = n.p + 'mir.e3a390b90e2e3e292621.svg',
        gd = (0, a.X$)((e) => {
          let { value: t, error: n, onChange: s } = e
          const i = (0, M.Z)(),
            o = (0, a.sO)(null)
          id(o)
          const [r, l] = (0, a.eJ)(ed.Default)
          ;(0, a.d4)(() => {
            const e = nd(t)
            l(e)
          }, [])
          const c = (0, a.I4)(
              (e) => {
                const t = (function (e) {
                    const t = (e = e.replace(/[^\d]/g, '')).match(/.{1,4}/g)
                    return t ? t.join(' ') : ''
                  })(e.target.value),
                  n = nd(e.target.value)
                l(n), s(t)
              },
              [s]
            ),
            d = (function (e) {
              switch (e) {
                case ed.Mastercard:
                  return a.ZP.createElement('img', { src: Pd, alt: '' })
                case ed.Visa:
                  return a.ZP.createElement('img', { src: Zd, alt: '' })
                case ed.Mir:
                  return a.ZP.createElement('img', { src: vd, alt: '' })
                default:
                  return
              }
            })(r)
          return a.ZP.createElement(
            'div',
            { className: 'CardInput' },
            a.ZP.createElement(He.Z, {
              ref: o,
              label: i('PaymentCardNumber'),
              onChange: c,
              value: t,
              inputMode: 'numeric',
              className: r ? 'has-right-addon' : '',
              error: n,
              tabIndex: 0,
              maxLength: 23,
              teactExperimentControlled: !0,
            }),
            a.ZP.createElement('span', { className: 'right-addon' }, d)
          )
        }),
        pd = (0, a.X$)((e) => {
          let {
            state: t,
            canSaveCredentials: n,
            needCardholderName: s,
            needCountry: i,
            needZip: o,
            countryList: r,
            dispatch: l,
          } = e
          const c = (0, a.sO)(null)
          ;(0, a.d4)(() => {
            c.current &&
              c.current.value !== t.billingCountry &&
              (c.current.value = t.billingCountry)
          }, [t.billingCountry])
          const d = (0, a.I4)(
              (e) => {
                l({ type: 'changeCardNumber', payload: e })
              },
              [l]
            ),
            m = (0, a.I4)(
              (e) => {
                l({ type: 'changeCardholder', payload: e.target.value.toUpperCase() })
              },
              [l]
            ),
            u = (0, a.I4)(
              (e) => {
                l({ type: 'changeExpiryDate', payload: e })
              },
              [l]
            ),
            h = (0, a.I4)(
              (e) => {
                const t = e.target.value.replace(/[^0-9]/g, '')
                l({ type: 'changeCvvCode', payload: t })
              },
              [l]
            ),
            P = (0, a.I4)(
              (e) => {
                l({ type: 'changeBillingCountry', payload: e.target.value })
              },
              [l]
            ),
            Z = (0, a.I4)(
              (e) => {
                l({ type: 'changeBillingZip', payload: e.target.value })
              },
              [l]
            ),
            v = (0, a.I4)(
              (e) => {
                l({ type: 'changeSaveCredentials', payload: e.target.value })
              },
              [l]
            ),
            g = (0, M.Z)(),
            { formErrors: p = {} } = t
          return a.ZP.createElement(
            'div',
            { className: 'PaymentInfo' },
            a.ZP.createElement(
              'form',
              null,
              a.ZP.createElement('h5', null, g('PaymentCardTitle')),
              a.ZP.createElement(gd, { onChange: d, value: t.cardNumber, error: p.cardNumber }),
              s &&
                a.ZP.createElement(He.Z, {
                  label: g('Checkout.NewCard.CardholderNamePlaceholder'),
                  onChange: m,
                  value: t.cardholder,
                  inputMode: 'text',
                  tabIndex: 0,
                  error: p.cardholder,
                }),
              a.ZP.createElement(
                'section',
                { className: 'inline-inputs' },
                a.ZP.createElement(hd, { value: t.expiry, onChange: u, error: p.expiry }),
                a.ZP.createElement(He.Z, {
                  label: g('lng_payments_card_cvc'),
                  onChange: h,
                  value: t.cvv,
                  inputMode: 'numeric',
                  maxLength: 3,
                  tabIndex: 0,
                  error: p.cvv,
                  teactExperimentControlled: !0,
                })
              ),
              i || o ? a.ZP.createElement('h5', null, g('PaymentBillingAddress')) : void 0,
              i &&
                a.ZP.createElement(
                  od,
                  {
                    label: g('PaymentShippingCountry'),
                    placeholder: g('PaymentShippingCountry'),
                    onChange: P,
                    value: t.billingCountry,
                    hasArrow: Boolean(!0),
                    id: 'billing-country',
                    error: p.billingCountry,
                    tabIndex: 0,
                    ref: c,
                  },
                  r.map((e) => {
                    let { defaultName: n, name: s } = e
                    return a.ZP.createElement(
                      'option',
                      { value: n, className: 'county-item', selected: n === t.billingCountry },
                      n || s
                    )
                  })
                ),
              o &&
                a.ZP.createElement(He.Z, {
                  label: g('PaymentShippingZipPlaceholder'),
                  onChange: Z,
                  value: t.billingZip,
                  inputMode: 'text',
                  tabIndex: 0,
                  maxLength: 12,
                  error: p.billingZip,
                }),
              a.ZP.createElement(ht.Z, {
                label: g('PaymentCardSavePaymentInformation'),
                checked: !!n && t.saveCredentials,
                tabIndex: 0,
                onChange: v,
                disabled: !n,
              }),
              a.ZP.createElement(
                'p',
                { className: 'description' },
                g(n ? 'Checkout.NewCard.SaveInfoHelp' : 'Checkout.2FA.Text')
              )
            )
          )
        }),
        Ed = (0, a.X$)((e) => {
          let { url: t, noRedirect: n, onClose: s } = e
          const { openTelegramLink: o } = (0, i.Sv)(),
            r = (0, M.Z)(),
            l = (0, a.I4)(
              (e) => {
                try {
                  const t = JSON.parse(e.data),
                    { eventType: a, eventData: i } = t
                  if ('web_app_open_tg_link' !== a) return
                  if (!n) {
                    const e = m.zHP + i.path_full
                    o({ url: e })
                  }
                  s()
                } catch (e) {}
              },
              [s, n, o]
            )
          return (
            (0, a.d4)(
              () => (
                window.addEventListener('message', l),
                () => window.removeEventListener('message', l)
              ),
              [l]
            ),
            a.ZP.createElement(
              'div',
              { className: 'ConfirmPayment' },
              a.ZP.createElement('iframe', {
                src: t,
                title: r('Checkout.WebConfirmation.Title'),
                allow: 'payment',
                sandbox:
                  'allow-modals allow-forms allow-scripts allow-same-origin allow-top-navigation',
                className: 'ConfirmPayment__content',
              })
            )
          )
        }),
        Cd = (0, a.X$)((e) => {
          let { state: t, savedCredentials: n, dispatch: s, onNewCardClick: i } = e
          const o = (0, M.Z)(),
            r = (0, a.Ye)(
              () =>
                n?.length
                  ? n.map((e) => {
                      let { id: t, title: n } = e
                      return { label: n, value: t }
                    })
                  : Gn.D,
              [n]
            ),
            l = (0, a.I4)(
              (e) => {
                s({ type: 'changeSavedCredentialId', payload: e })
              },
              [s]
            )
          return a.ZP.createElement(
            'div',
            { className: 'PaymentInfo' },
            a.ZP.createElement(
              'form',
              null,
              a.ZP.createElement('h5', null, o('PaymentCardTitle')),
              a.ZP.createElement(js.Z, {
                name: 'saved-credentials',
                options: r,
                selected: t.savedCredentialId,
                onChange: l,
              }),
              a.ZP.createElement($.Z, { isText: !0, onClick: i }, o('PaymentCheckoutMethodNewCard'))
            )
          )
        }),
        bd = (0, a.X$)(
          (0, i.c$)((e) => {
            const { payment: t } = (0, r.jU)(e)
            return {
              error: t.error?.message,
              passwordHint: e.twoFaSettings.hint,
              savedCredentials: t.savedCredentials,
            }
          })((e) => {
            let {
              isActive: t,
              error: n,
              state: s,
              savedCredentials: o,
              passwordHint: r,
              onPasswordChange: l,
            } = e
            const { clearPaymentError: c } = (0, i.Sv)(),
              d = (0, M.Z)(),
              [m, u] = (0, a.eJ)(!1),
              h = (0, a.Ye)(
                () =>
                  o?.length && s.savedCredentialId
                    ? o.find((e) => {
                        let { id: t } = e
                        return t === s.savedCredentialId
                      })?.title
                    : void 0,
                [o, s.savedCredentialId]
              )
            return a.ZP.createElement(
              'div',
              { className: 'PaymentInfo' },
              a.ZP.createElement(Mi.Z, { isBig: !0, isPasswordVisible: m }),
              a.ZP.createElement(Ti.Z, {
                error: n ? d(n) : void 0,
                hint: r,
                description: d('PaymentConfirmationMessage', h),
                placeholder: d('Password'),
                clearError: c,
                shouldShowSubmit: !1,
                shouldResetValue: t,
                isPasswordVisible: m,
                onChangePasswordVisibility: u,
                onInputChange: l,
              })
            )
          })
        ),
        fd = 'stripe',
        Id = 'smartglocal',
        yd = new Set([fd, Id]),
        Sd = (0, a.X$)(
          (0, i.c$)((e) => {
            const {
                step: t,
                shippingOptions: n,
                savedInfo: a,
                canSaveCredentials: s,
                invoice: i,
                invoiceContainer: o,
                nativeProvider: l,
                nativeParams: c,
                passwordMissing: d,
                error: m,
                confirmPaymentUrl: u,
                inputInvoice: h,
                requestId: P,
                stripeCredentials: Z,
                smartGlocalCredentials: v,
                savedCredentials: g,
                temporaryPassword: p,
                isExtendedMedia: E,
              } = (0, r.jU)(e).payment,
              C = h && 'chatId' in h ? (0, r.Z1)(e, h.chatId) : void 0,
              b = Boolean(i && (!l || !yd.has(l))),
              { needCardholderName: f, needCountry: I, needZip: y } = c || {},
              {
                isNameRequested: S,
                isShippingAddressRequested: k,
                isPhoneRequested: N,
                isEmailRequested: w,
                shouldSendPhoneToProvider: M,
                shouldSendEmailToProvider: T,
                currency: A,
                prices: R,
              } = o || {}
            return {
              step: t,
              chat: C,
              shippingOptions: n,
              savedInfo: a,
              canSaveCredentials: s,
              nativeProvider: l,
              passwordMissing: d,
              isNameRequested: S,
              isShippingAddressRequested: k,
              isPhoneRequested: N,
              isEmailRequested: w,
              shouldSendPhoneToProvider: M,
              shouldSendEmailToProvider: T,
              currency: A,
              prices: R,
              isProviderError: b,
              invoice: i,
              needCardholderName: f,
              needCountry: I,
              needZip: y,
              error: m,
              confirmPaymentUrl: u,
              countryList: e.countryList.general,
              requestId: P,
              hasShippingOptions: Boolean(n?.length),
              smartGlocalToken: v?.token,
              stripeId: Z?.id,
              savedCredentials: g,
              passwordValidUntil: p?.validUntil,
              isExtendedMedia: E,
            }
          })((e) => {
            let {
              isOpen: t,
              onClose: n,
              step: o,
              chat: r,
              shippingOptions: l,
              savedInfo: c,
              canSaveCredentials: d,
              isNameRequested: m,
              isShippingAddressRequested: u,
              isPhoneRequested: h,
              isEmailRequested: P,
              shouldSendPhoneToProvider: Z,
              shouldSendEmailToProvider: v,
              currency: g,
              passwordMissing: p,
              isProviderError: E,
              invoice: C,
              nativeProvider: b,
              prices: f,
              needCardholderName: y,
              needCountry: S,
              needZip: k,
              confirmPaymentUrl: N,
              error: w,
              countryList: T,
              hasShippingOptions: A,
              requestId: R,
              smartGlocalToken: L,
              stripeId: F,
              savedCredentials: x,
              passwordValidUntil: B,
              isExtendedMedia: D,
            } = e
            const {
                loadPasswordInfo: O,
                validateRequestedInfo: U,
                sendPaymentForm: _,
                setPaymentStep: j,
                sendCredentialsInfo: V,
                clearPaymentError: z,
                validatePaymentPassword: H,
              } = (0, i.Sv)(),
              X = (0, M.Z)(),
              [q, Y, K] = (0, I.Z)(),
              [W, ee] = (0, as.Z)(sd, ad),
              [te, ne] = (0, a.eJ)(!1),
              [ae, se] = (0, a.eJ)(!1),
              [ie, oe] = (0, a.eJ)(''),
              re = o !== s.KB.ConfirmPayment,
              le = (0, a.I4)(
                (e) => {
                  j({ step: e })
                },
                [j]
              )
            ;(0, a.d4)(() => {
              t && (oe(''), O(), Y())
            }, [t, O, Y]),
              (0, a.d4)(() => {
                !t && q && K()
              }, [K, q, t]),
              (0, a.d4)(() => {
                ;(void 0 !== o || w) && ne(!1)
              }, [o, w]),
              (0, a.d4)(() => {
                w?.field && ee({ type: 'setFormErrors', payload: { [w.field]: w.message } })
              }, [w, ee]),
              (0, a.d4)(() => {
                if (c) {
                  const { name: e, phone: t, email: n, shippingAddress: a } = c,
                    { countryIso2: s, ...i } = a || {},
                    o =
                      s &&
                      T.find((e) => {
                        let { iso2: t } = e
                        return t === s
                      }).defaultName
                  ee({
                    type: 'updateUserInfo',
                    payload: {
                      fullName: e,
                      phone: t && '+' !== t.charAt(0) ? `+${t}` : t,
                      email: n,
                      ...(o && { country: o, countryIso2: s, ...i }),
                    },
                  })
                }
              }, [c, ee, T]),
              (0, a.d4)(() => {
                x?.length && ee({ type: 'changeSavedCredentialId', payload: x[0].id })
              }, [ee, x])
            const de = (0, a.I4)(() => {
                z()
              }, [z]),
              me = (0, a.Ye)(
                () =>
                  o !== s.KB.Checkout
                    ? 0
                    : (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          t = arguments.length > 1 ? arguments[1] : void 0,
                          n = arguments.length > 2 ? arguments[2] : void 0,
                          a = arguments.length > 3 ? arguments[3] : void 0
                        const s = t ? Nd(t, n) : []
                        let i = a
                        const o = e.concat(s || [])
                        return (i = o.reduce((e, t) => e + t.amount, i)), i
                      })(f, l, W.shipping, W.tipAmount),
                [o, f, l, W.shipping, W.tipAmount]
              ),
              ue = (0, a.Ye)(() => {
                if (o === s.KB.Checkout)
                  return (function (e, t, n) {
                    const a = (function (e) {
                        const t = nd(e)
                        return td[t] || ''
                      })(e.cardNumber),
                      s = a && e.cardNumber ? `${a} *${e.cardNumber.slice(-4)}` : void 0,
                      i = e.streetLine1 ? `${e.streetLine1}, ${e.city}, ${e.countryIso2}` : void 0,
                      { phone: o, fullName: r } = e,
                      l = (t ? kd(t, e.shipping) : void 0)?.title
                    return {
                      paymentMethod: s,
                      paymentProvider: n,
                      shippingAddress: i,
                      name: r,
                      phone: o,
                      shippingMethod: l,
                    }
                  })(W, l, b || '')
              }, [o, W, l, b]),
              he = (0, a.I4)(() => {
                le(s.KB.PaymentInfo)
              }, [le]),
              Pe = (0, a.I4)(() => {
                z()
              }, [z]),
              Ze = (0, a.I4)(() => {
                const { saveInfo: e } = W,
                  t = (function (e) {
                    const {
                      streetLine1: t,
                      streetLine2: n,
                      city: a,
                      state: s,
                      countryIso2: i,
                      postCode: o,
                      fullName: r,
                      phone: l,
                      email: c,
                    } = e
                    return {
                      name: r,
                      phone: l,
                      email: c,
                      shippingAddress: {
                        streetLine1: t,
                        streetLine2: n,
                        city: a,
                        state: s,
                        countryIso2: i,
                        postCode: o,
                      },
                    }
                  })(W)
                U({ requestInfo: t, saveInfo: e })
              }, [U, W]),
              ve = (0, a.I4)(() => {
                const e = (function (e) {
                  const {
                      cardNumber: t,
                      cardholder: n,
                      expiry: a,
                      cvv: s,
                      billingCountry: i,
                      billingZip: o,
                    } = e,
                    [r, l] = a.split('/')
                  return {
                    data: {
                      cardNumber: t,
                      cardholder: n,
                      expiryMonth: r,
                      expiryYear: l,
                      cvv: s,
                      country: i,
                      zip: o,
                    },
                  }
                })(W)
                V({ credentials: e })
              }, [V, W]),
              ge = (0, a.I4)(() => {
                _({
                  shippingOptionId: W.shipping,
                  saveCredentials: W.saveCredentials,
                  savedCredentialId: W.savedCredentialId,
                  tipAmount: W.tipAmount,
                })
              }, [_, W]),
              pe = (0, a.I4)(() => {
                switch (o) {
                  case s.KB.ShippingInfo:
                    ne(!0), Ze()
                    break
                  case s.KB.Shipping:
                    le(s.KB.Checkout)
                    break
                  case s.KB.SavedPayments:
                    le(s.KB.ConfirmPassword)
                    break
                  case s.KB.ConfirmPassword:
                    if ('' === ie) return
                    ne(!0), H({ password: ie })
                    break
                  case s.KB.PaymentInfo:
                    ne(!0), ve(), ee({ type: 'changeSavedCredentialId', payload: '' })
                    break
                  case s.KB.Checkout: {
                    if (c && !R && !W.shipping) return ne(!0), void Ze()
                    if (W.savedCredentialId && (!B || B <= Date.now() / 1e3 - 3))
                      return void le(s.KB.ConfirmPassword)
                    if (!W.savedCredentialId && ((b === fd && !F) || (b === Id && !L)))
                      return void le(s.KB.PaymentInfo)
                    const { phone: e, email: t, fullName: n } = W,
                      a = (P && !t) || (h && !e) || (m && !n)
                    if ((u && !R) || a) return void le(s.KB.ShippingInfo)
                    if (u && !W.shipping) return void le(s.KB.Shipping)
                    ne(!0), ge()
                    break
                  }
                }
              }, [P, m, h, u, b, B, ee, W, R, c, ve, ge, le, L, o, F, ie, H, Ze])
            ;(0, a.d4)(
              () => (o === s.KB.ConfirmPassword ? (0, la.Z)({ onEnter: pe }) : void 0),
              [pe, o]
            )
            const Ee = (0, a.I4)(() => {
                ee({ type: 'resetState' }), se(!1), n()
              }, [n, ee]),
              Ce = (0, a.I4)(() => {
                le(o === s.KB.ConfirmPassword ? s.KB.SavedPayments : s.KB.Checkout)
              }, [le, o]),
              be = (0, a.Ye)(() => {
                switch (o) {
                  case s.KB.Checkout:
                    return X('PaymentCheckout')
                  case s.KB.ShippingInfo:
                    return X('PaymentShippingInfo')
                  case s.KB.Shipping:
                    return X('PaymentShippingMethod')
                  case s.KB.SavedPayments:
                    return X('PaymentCheckoutMethod')
                  case s.KB.ConfirmPassword:
                    return X('Checkout.PasswordEntry.Title')
                  case s.KB.PaymentInfo:
                    return X('PaymentCardInfo')
                  case s.KB.ConfirmPayment:
                    return X('Checkout.WebConfirmation.Title')
                  default:
                    return ''
                }
              }, [o, X]),
              fe =
                o === s.KB.Checkout ? X('Checkout.PayPrice', (0, Ft.x)(me, g, X.code)) : X('Next')
            if (E)
              return a.ZP.createElement(
                J.Z,
                { className: 'error', isOpen: q, onClose: K, onCloseAnimationEnd: Ee },
                a.ZP.createElement(
                  'p',
                  null,
                  "Sorry, Teamgram WebZ doesn't support payments with this provider yet. ",
                  a.ZP.createElement('br', null),
                  'Please use one of our mobile apps to do this.'
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'dialog-buttons mt-2' },
                  a.ZP.createElement($.Z, { isText: !0, onClick: K }, X('OK'))
                )
              )
            const Ie = (function () {
              if (te) return !0
              switch (o) {
                case s.KB.Checkout:
                  return Boolean(C?.isRecurring && !ae)
                case s.KB.PaymentInfo:
                  return Boolean(
                    '' === W.cardNumber ||
                      (y && '' === W.cardholder) ||
                      '' === W.cvv ||
                      '' === W.expiry
                  )
                default:
                  return !1
              }
            })()
            return a.ZP.createElement(
              J.Z,
              {
                className: (0, Q.Z)('PaymentModal', C?.isRecurring && 'recurring'),
                isOpen: q,
                onClose: K,
                onCloseAnimationEnd: Ee,
              },
              a.ZP.createElement(
                'div',
                { className: 'header', dir: X.isRtl ? 'rtl' : void 0 },
                a.ZP.createElement(
                  $.Z,
                  {
                    className: 'close-button',
                    color: 'translucent',
                    round: !0,
                    size: 'smaller',
                    onClick: o === s.KB.Checkout ? K : Ce,
                    ariaLabel: 'Close',
                  },
                  a.ZP.createElement('i', {
                    className: o === s.KB.Checkout ? 'icon-close' : 'icon-arrow-left',
                  })
                ),
                a.ZP.createElement('h3', null, be)
              ),
              void 0 !== o
                ? a.ZP.createElement(
                    G.Z,
                    { name: 'slide', activeKey: o },
                    a.ZP.createElement(
                      'div',
                      { className: 'content custom-scroll' },
                      (function (e) {
                        switch (e) {
                          case s.KB.Checkout:
                            return a.ZP.createElement(dd, {
                              chat: r,
                              prices: f,
                              dispatch: ee,
                              shippingPrices: W.shipping && l ? Nd(l, W.shipping) : void 0,
                              totalPrice: me,
                              invoice: C,
                              checkoutInfo: ue,
                              currency: g,
                              hasShippingOptions: A,
                              tipAmount: W.tipAmount,
                              needAddress: Boolean(u),
                              savedCredentials: x,
                              isTosAccepted: ae,
                              onAcceptTos: se,
                            })
                          case s.KB.SavedPayments:
                            return a.ZP.createElement(Cd, {
                              state: W,
                              savedCredentials: x,
                              dispatch: ee,
                              onNewCardClick: he,
                            })
                          case s.KB.ConfirmPassword:
                            return a.ZP.createElement(bd, {
                              state: W,
                              savedCredentials: x,
                              onPasswordChange: oe,
                              isActive: e === o,
                            })
                          case s.KB.PaymentInfo:
                            return a.ZP.createElement(pd, {
                              state: W,
                              dispatch: ee,
                              canSaveCredentials: Boolean(!p && d),
                              needCardholderName: y,
                              needCountry: S,
                              needZip: k,
                              countryList: T,
                            })
                          case s.KB.ShippingInfo:
                            return a.ZP.createElement(rd, {
                              state: W,
                              dispatch: ee,
                              needAddress: Boolean(u),
                              needEmail: Boolean(P || v),
                              needPhone: Boolean(h || Z),
                              needName: Boolean(m),
                              countryList: T,
                            })
                          case s.KB.Shipping:
                            return a.ZP.createElement(ld, {
                              state: W,
                              dispatch: ee,
                              shippingOptions: l || [],
                              currency: g,
                            })
                          case s.KB.ConfirmPayment:
                            return a.ZP.createElement(Ed, { url: N, noRedirect: D, onClose: K })
                          default:
                            return
                        }
                      })(o)
                    )
                  )
                : a.ZP.createElement(
                    'div',
                    { className: 'empty-content' },
                    a.ZP.createElement(ce.Z, { color: 'gray' })
                  ),
              re &&
                a.ZP.createElement(
                  'div',
                  { className: 'footer' },
                  a.ZP.createElement(
                    $.Z,
                    { type: 'submit', onClick: pe, disabled: Ie, isLoading: te },
                    fe
                  )
                ),
              w &&
                !w.field &&
                (function () {
                  if (w)
                    return a.ZP.createElement(
                      J.Z,
                      { className: 'error', isOpen: Boolean(w), onClose: de },
                      a.ZP.createElement('h4', null, w.description || 'Error'),
                      a.ZP.createElement('p', null, w.description || 'Error'),
                      a.ZP.createElement(
                        'div',
                        { className: 'dialog-buttons mt-2' },
                        a.ZP.createElement($.Z, { isText: !0, onClick: Pe }, X('OK'))
                      )
                    )
                })()
            )
          })
        )
      function kd(e, t) {
        return e.find((e) => {
          let { id: n } = e
          return n === t
        })
      }
      function Nd(e, t) {
        return kd(e, t)?.prices
      }
      const wd = (0, a.X$)(
        (0, i.c$)((e) => {
          const { receipt: t } = (0, r.jU)(e).payment,
            {
              currency: n,
              prices: a,
              info: s,
              totalAmount: i,
              credentialsTitle: o,
              shippingPrices: l,
              shippingMethod: c,
              photo: d,
              text: m,
              title: u,
              tipAmount: h,
            } = t || {}
          return {
            currency: n,
            prices: a,
            info: s,
            tipAmount: h,
            totalAmount: i,
            credentialsTitle: o,
            shippingPrices: l,
            shippingMethod: c,
            photo: d,
            text: m,
            title: u,
          }
        })((e) => {
          let {
            isOpen: t,
            onClose: n,
            prices: s,
            shippingPrices: i,
            tipAmount: o,
            totalAmount: r,
            currency: l,
            info: c,
            photo: d,
            text: m,
            title: u,
            credentialsTitle: h,
            shippingMethod: P,
          } = e
          const Z = (0, M.Z)(),
            [v, g, p] = (0, I.Z)()
          ;(0, a.d4)(() => {
            t && g()
          }, [t, g])
          const E = (0, a.Ye)(
              () =>
                (function (e, t, n) {
                  if (!t) return { paymentMethod: e }
                  const { shippingAddress: a } = t,
                    s = a?.streetLine1 ? `${a.streetLine1}, ${a.city}, ${a.countryIso2}` : void 0,
                    { phone: i, name: o } = t
                  return {
                    paymentMethod: e,
                    shippingAddress: s,
                    name: o,
                    phone: i,
                    shippingMethod: n,
                  }
                })(h, c, P),
              [c, P, h]
            ),
            C = (0, a.Ye)(
              () => ({ photo: d, text: m, title: u, amount: r, currency: l }),
              [l, d, m, u, r]
            )
          return a.ZP.createElement(
            J.Z,
            {
              className: 'PaymentModal PaymentModal-receipt',
              isOpen: v,
              onClose: p,
              onCloseAnimationEnd: n,
            },
            a.ZP.createElement(
              'div',
              null,
              a.ZP.createElement(
                'div',
                { className: 'header', dir: Z.isRtl ? 'rtl' : void 0 },
                a.ZP.createElement(
                  $.Z,
                  {
                    className: 'close-button',
                    color: 'translucent',
                    round: !0,
                    size: 'smaller',
                    onClick: p,
                    ariaLabel: 'Close',
                  },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                a.ZP.createElement('h3', null, ' ', Z('PaymentReceipt'), ' ')
              ),
              a.ZP.createElement(
                'div',
                { className: 'receipt-content custom-scroll' },
                a.ZP.createElement(dd, {
                  prices: s,
                  shippingPrices: i,
                  totalPrice: r,
                  tipAmount: o,
                  invoice: C,
                  checkoutInfo: E,
                  currency: l,
                })
              )
            )
          )
        })
      )
    },
    93490: (e, t, n) => {
      n.d(t, { Z: () => h })
      var a = n(60748),
        s = n(83716),
        i = n(62821),
        o = n(97799),
        r = n(28183),
        l = n(60706),
        c = n(42797)
      const d = [0, 50],
        m = [0, 20],
        u = [20, 0],
        h = (0, a.X$)((e) => {
          let { isPasswordVisible: t, isBig: n } = e
          const [h, P] = (0, l.Z)(!1),
            [Z, v] = (0, l.Z)(!1),
            { isMobile: g } = (0, c.ZP)(),
            p = g ? s.qpg : s.z7m
          ;(0, r.Z)(v, 2e3)
          const E = (0, a.I4)(P, [P])
          return a.ZP.createElement(
            'div',
            { id: 'monkey', className: n ? 'big' : '' },
            !h && a.ZP.createElement('div', { className: 'monkey-preview' }),
            a.ZP.createElement(o.Z, {
              size: n ? s.K2q : p,
              className: Z ? 'hidden' : 'shown',
              tgsUrl: i.l.MonkeyClose,
              playSegment: d,
              noLoop: !0,
              onLoad: E,
            }),
            a.ZP.createElement(o.Z, {
              size: n ? s.K2q : p,
              className: Z ? 'shown' : 'hidden',
              tgsUrl: i.l.MonkeyPeek,
              playSegment: t ? m : u,
              noLoop: !0,
            })
          )
        })
    },
    90730: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        s = n(46752),
        i = n(66735)
      const o = (0, a.X$)((e) => {
        let {
          title: t = 'Change your profile picture',
          disabled: n,
          isForForum: o,
          currentAvatarBlobUrl: r,
          onChange: l,
        } = e
        const [c, d] = (0, a.eJ)(),
          [m, u] = (0, a.eJ)(r)
        ;(0, a.d4)(() => {
          u(r)
        }, [r])
        const h = (0, a.I4)(
            (e) => {
              d(void 0), l(e), m && m !== r && URL.revokeObjectURL(m), u(URL.createObjectURL(e))
            },
            [m, r, l]
          ),
          P = (0, a.I4)(() => {
            d(void 0)
          }, []),
          Z = (0, s.Z)(m && 'filled', n && 'disabled', o && 'rounded-square')
        return a.ZP.createElement(
          'div',
          { className: 'AvatarEditable' },
          a.ZP.createElement(
            'label',
            { className: Z, role: 'button', tabIndex: 0, title: t },
            a.ZP.createElement('input', {
              type: 'file',
              onChange: function (e) {
                const t = e.target
                t?.files?.[0] && (d(t.files[0]), (t.value = ''))
              },
              accept: 'image/png, image/jpeg',
            }),
            a.ZP.createElement('i', { className: 'icon-camera-add' }),
            m && a.ZP.createElement('img', { src: m, alt: 'Avatar' })
          ),
          a.ZP.createElement(i.Z, { file: c, onClose: P, onChange: h })
        )
      })
    },
  },
])
//# sourceMappingURL=3779.84903e41a952a6c8b92a.js.map
