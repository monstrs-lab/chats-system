;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4850],
  {
    40014: (e) => {
      e.exports = function (e) {
        const a = ['true', 'false', 'null'],
          l = { scope: 'literal', beginKeywords: a.join(' ') }
        return {
          name: 'JSON',
          keywords: { literal: a },
          contains: [
            { className: 'attr', begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
            { match: /[{}[\],:]/, className: 'punctuation', relevance: 0 },
            e.QUOTE_STRING_MODE,
            l,
            e.C_NUMBER_MODE,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
          illegal: '\\S',
        }
      }
    },
  },
])
//# sourceMappingURL=4850.0be1c8c65b8523eba3c1.js.map
