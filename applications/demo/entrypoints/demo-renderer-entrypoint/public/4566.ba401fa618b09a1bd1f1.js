;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4566],
  {
    68563: (e) => {
      e.exports = function (e) {
        const a = e.regex,
          s = /[a-zA-Z]\w*/,
          t = [
            'as',
            'break',
            'class',
            'construct',
            'continue',
            'else',
            'for',
            'foreign',
            'if',
            'import',
            'in',
            'is',
            'return',
            'static',
            'var',
            'while',
          ],
          c = ['true', 'false', 'null'],
          n = ['this', 'super'],
          i = [
            '-',
            '~',
            /\*/,
            '%',
            /\.\.\./,
            /\.\./,
            /\+/,
            '<<',
            '>>',
            '>=',
            '<=',
            '<',
            '>',
            /\^/,
            /!=/,
            /!/,
            /\bis\b/,
            '==',
            '&&',
            '&',
            /\|\|/,
            /\|/,
            /\?:/,
            '=',
          ],
          r = {
            relevance: 0,
            match: a.concat(/\b(?!(if|while|for|else|super)\b)/, s, /(?=\s*[({])/),
            className: 'title.function',
          },
          o = {
            match: a.concat(
              a.either(a.concat(/\b(?!(if|while|for|else|super)\b)/, s), a.either(...i)),
              /(?=\s*\([^)]+\)\s*\{)/
            ),
            className: 'title.function',
            starts: {
              contains: [
                { begin: /\(/, end: /\)/, contains: [{ relevance: 0, scope: 'params', match: s }] },
              ],
            },
          },
          l = {
            variants: [{ match: [/class\s+/, s, /\s+is\s+/, s] }, { match: [/class\s+/, s] }],
            scope: { 2: 'title.class', 4: 'title.class.inherited' },
            keywords: t,
          },
          m = { relevance: 0, match: a.either(...i), className: 'operator' },
          b = {
            className: 'property',
            begin: a.concat(/\./, a.lookahead(s)),
            end: s,
            excludeBegin: !0,
            relevance: 0,
          },
          h = { relevance: 0, match: a.concat(/\b_/, s), scope: 'variable' },
          p = {
            relevance: 0,
            match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
            scope: 'title.class',
            keywords: {
              _: [
                'Bool',
                'Class',
                'Fiber',
                'Fn',
                'List',
                'Map',
                'Null',
                'Num',
                'Object',
                'Range',
                'Sequence',
                'String',
                'System',
              ],
            },
          },
          u = e.C_NUMBER_MODE,
          g = {
            match: [s, /\s*/, /=/, /\s*/, /\(/, s, /\)\s*\{/],
            scope: { 1: 'title.function', 3: 'operator', 6: 'params' },
          },
          d = e.COMMENT(/\/\*\*/, /\*\//, {
            contains: [{ match: /@[a-z]+/, scope: 'doctag' }, 'self'],
          }),
          f = { scope: 'subst', begin: /%\(/, end: /\)/, contains: [u, p, r, h, m] },
          v = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [
              f,
              {
                scope: 'char.escape',
                variants: [
                  { match: /\\\\|\\["0%abefnrtv]/ },
                  { match: /\\x[0-9A-F]{2}/ },
                  { match: /\\u[0-9A-F]{4}/ },
                  { match: /\\U[0-9A-F]{8}/ },
                ],
              },
            ],
          }
        f.contains.push(v)
        const _ = [...t, ...n, ...c],
          N = {
            relevance: 0,
            match: a.concat('\\b(?!', _.join('|'), '\\b)', /[a-zA-Z_]\w*(?:[?!]|\b)/),
            className: 'variable',
          }
        return {
          name: 'Wren',
          keywords: { keyword: t, 'variable.language': n, literal: c },
          contains: [
            {
              scope: 'comment',
              variants: [
                {
                  begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                  beginScope: {},
                  keywords: { literal: c },
                  contains: [],
                  end: /\)/,
                },
                { begin: [/#!?/, /[A-Za-z_]+/], beginScope: {}, end: /$/ },
              ],
            },
            u,
            v,
            { className: 'string', begin: /"""/, end: /"""/ },
            d,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            p,
            l,
            g,
            o,
            r,
            m,
            h,
            b,
            N,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=4566.ba401fa618b09a1bd1f1.js.map
