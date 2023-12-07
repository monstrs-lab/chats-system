'use strict'
;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [3191],
  {
    63191: (a, s, e) => {
      e.r(s), e.d(s, { default: () => t })
      const t = (a) => ({
        name: 'TypeLanguage',
        aliases: ['tl'],
        case_insensitive: !1,
        contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.C_NUMBER_MODE].concat([
          { className: 'keyword', begin: '---', end: '---' },
          { className: 'number', begin: '#', end: '\\s', excludeBegin: !0, excludeEnd: !0 },
          { className: 'punctuation', match: '[:#?=<>]' },
          { className: 'symbol', match: 'flags\\d*\\.\\d*' },
          { className: 'built_in', match: 'flags:#' },
          { className: 'title.class', match: '^[a-zA-Z_0-9]+(?=\\.)' },
          { className: 'title.function', match: '^[a-zA-Z_0-9]+(?=[\\s#])' },
          { className: 'title.function', match: '(?<=\\.)[a-zA-Z_0-9]+(?=[\\s#])' },
          { className: 'params', match: '(?<=\\s)[a-zA-Z_0-9]+(?=:)' },
          { className: 'type', match: '(?<=[:?])[a-zA-Z_0-9.]+(?=\\s)' },
          { className: 'variable.constant', match: '(?<=[:?])[a-zA-Z_0-9]+(?=<)' },
          { className: 'type', match: '(?<=<)[a-zA-Z_0-9]+(?=>)' },
          { className: 'title.function.invoke', match: '(?<==\\s)[a-zA-Z_0-9]+(?=;)' },
          { className: 'title.class', match: '(?<==\\s)[a-zA-Z_0-9]+(?=\\.)' },
          {
            className: 'title.function.invoke',
            match: '(?<==\\s[a-zA-Z_0-9]+\\.)[a-zA-Z_0-9]+(?=;)',
          },
        ]),
      })
    },
  },
])
//# sourceMappingURL=3191.5a05fd1ea5d41ae92707.js.map
