;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [2137],
  {
    17659: (e) => {
      e.exports = function (e) {
        const n = '[a-z][a-zA-Z0-9_]*',
          a = { className: 'string', begin: '\\$.{1}' },
          s = { className: 'symbol', begin: '#' + e.UNDERSCORE_IDENT_RE }
        return {
          name: 'Smalltalk',
          aliases: ['st'],
          keywords: ['self', 'super', 'nil', 'true', 'false', 'thisContext'],
          contains: [
            e.COMMENT('"', '"'),
            e.APOS_STRING_MODE,
            { className: 'type', begin: '\\b[A-Z][A-Za-z0-9_]*', relevance: 0 },
            { begin: n + ':', relevance: 0 },
            e.C_NUMBER_MODE,
            s,
            a,
            {
              begin: '\\|[ ]*' + n + '([ ]+' + n + ')*[ ]*\\|',
              returnBegin: !0,
              end: /\|/,
              illegal: /\S/,
              contains: [{ begin: '(\\|[ ]*)?' + n }],
            },
            { begin: '#\\(', end: '\\)', contains: [e.APOS_STRING_MODE, a, e.C_NUMBER_MODE, s] },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=2137.c17500b3e8e270f64616.js.map
