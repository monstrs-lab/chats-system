;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [3411],
  {
    30422: (e) => {
      e.exports = function (e) {
        return {
          name: 'Test Anything Protocol',
          case_insensitive: !0,
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: 'meta',
              variants: [{ begin: '^TAP version (\\d+)$' }, { begin: '^1\\.\\.(\\d+)$' }],
            },
            { begin: /---$/, end: '\\.\\.\\.$', subLanguage: 'yaml', relevance: 0 },
            { className: 'number', begin: ' (\\d+) ' },
            { className: 'symbol', variants: [{ begin: '^ok' }, { begin: '^not ok' }] },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=3411.e5c43dc629aa0a71a24f.js.map
