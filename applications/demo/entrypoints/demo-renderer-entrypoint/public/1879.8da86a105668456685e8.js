;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1879],
  {
    57604: (e) => {
      e.exports = function (e) {
        return {
          name: 'LDIF',
          contains: [
            { className: 'attribute', match: '^dn(?=:)', relevance: 10 },
            { className: 'attribute', match: '^\\w+(?=:)' },
            { className: 'literal', match: '^-' },
            e.HASH_COMMENT_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1879.8da86a105668456685e8.js.map
