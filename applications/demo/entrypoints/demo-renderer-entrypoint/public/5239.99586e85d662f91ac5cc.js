;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [5239],
  {
    15762: (e) => {
      e.exports = function (e) {
        const n = e.regex,
          t = [
            'div',
            'mod',
            'in',
            'and',
            'or',
            'not',
            'xor',
            'asserterror',
            'begin',
            'case',
            'do',
            'downto',
            'else',
            'end',
            'exit',
            'for',
            'local',
            'if',
            'of',
            'repeat',
            'then',
            'to',
            'until',
            'while',
            'with',
            'var',
          ],
          a = [
            e.C_LINE_COMMENT_MODE,
            e.COMMENT(/\{/, /\}/, { relevance: 0 }),
            e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 }),
          ],
          r = { className: 'string', begin: /'/, end: /'/, contains: [{ begin: /''/ }] },
          s = { className: 'string', begin: /(#\d+)+/ },
          i = {
            match: [/procedure/, /\s+/, /[a-zA-Z_][\w@]*/, /\s*/],
            scope: { 1: 'keyword', 3: 'title.function' },
            contains: [
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: [r, s, e.NUMBER_MODE],
              },
              ...a,
            ],
          },
          o = {
            match: [
              /OBJECT/,
              /\s+/,
              n.either(
                'Table',
                'Form',
                'Report',
                'Dataport',
                'Codeunit',
                'XMLport',
                'MenuSuite',
                'Page',
                'Query'
              ),
              /\s+/,
              /\d+/,
              /\s+(?=[^\s])/,
              /.*/,
              /$/,
            ],
            relevance: 3,
            scope: { 1: 'keyword', 3: 'type', 5: 'number', 7: 'title' },
          }
        return {
          name: 'C/AL',
          case_insensitive: !0,
          keywords: { keyword: t, literal: 'false true' },
          illegal: /\/\*/,
          contains: [
            { match: /[\w]+(?=\=)/, scope: 'attribute', relevance: 0 },
            r,
            s,
            { className: 'number', begin: '\\b\\d+(\\.\\d+)?(DT|D|T)', relevance: 0 },
            { className: 'string', begin: '"', end: '"' },
            e.NUMBER_MODE,
            o,
            i,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=5239.99586e85d662f91ac5cc.js.map
