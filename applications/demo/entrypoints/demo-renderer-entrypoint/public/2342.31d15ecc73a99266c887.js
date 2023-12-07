;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [2342],
  {
    54658: (e) => {
      function a(e, a = {}) {
        return (a.variants = e), a
      }
      e.exports = function (e) {
        const n = e.regex,
          t = '[A-Za-z0-9_$]+',
          s = a([
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.COMMENT('/\\*\\*', '\\*/', {
              relevance: 0,
              contains: [
                { begin: /\w+@/, relevance: 0 },
                { className: 'doctag', begin: '@[A-Za-z]+' },
              ],
            }),
          ]),
          l = { className: 'regexp', begin: /~?\/[^\/\n]+\//, contains: [e.BACKSLASH_ESCAPE] },
          r = a([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
          i = a(
            [
              { begin: /"""/, end: /"""/ },
              { begin: /'''/, end: /'''/ },
              { begin: '\\$/', end: '/\\$', relevance: 10 },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
            ],
            { className: 'string' }
          ),
          c = {
            match: [
              /(class|interface|trait|enum|extends|implements)/,
              /\s+/,
              e.UNDERSCORE_IDENT_RE,
            ],
            scope: { 1: 'keyword', 3: 'title.class' },
          }
        return {
          name: 'Groovy',
          keywords: {
            'variable.language': 'this super',
            literal: 'true false null',
            type: ['byte', 'short', 'char', 'int', 'long', 'boolean', 'float', 'double', 'void'],
            keyword: [
              'def',
              'as',
              'in',
              'assert',
              'trait',
              'abstract',
              'static',
              'volatile',
              'transient',
              'public',
              'private',
              'protected',
              'synchronized',
              'final',
              'class',
              'interface',
              'enum',
              'if',
              'else',
              'for',
              'while',
              'switch',
              'case',
              'break',
              'default',
              'continue',
              'throw',
              'throws',
              'try',
              'catch',
              'finally',
              'implements',
              'extends',
              'new',
              'import',
              'package',
              'return',
              'instanceof',
            ],
          },
          contains: [
            e.SHEBANG({ binary: 'groovy', relevance: 10 }),
            s,
            i,
            l,
            r,
            c,
            { className: 'meta', begin: '@[A-Za-z]+', relevance: 0 },
            { className: 'attr', begin: t + '[ \t]*:', relevance: 0 },
            { begin: /\?/, end: /:/, relevance: 0, contains: [s, i, l, r, 'self'] },
            {
              className: 'symbol',
              begin: '^[ \t]*' + n.lookahead(t + ':'),
              excludeBegin: !0,
              end: t + ':',
              relevance: 0,
            },
          ],
          illegal: /#|<\//,
        }
      }
    },
  },
])
//# sourceMappingURL=2342.31d15ecc73a99266c887.js.map
