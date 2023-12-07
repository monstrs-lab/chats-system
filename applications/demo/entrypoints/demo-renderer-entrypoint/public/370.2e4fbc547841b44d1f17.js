;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [370],
  {
    41874: (e) => {
      e.exports = function (e) {
        const n = '[a-zA-Z-_][^\\n{]+\\{',
          a = {
            className: 'attribute',
            begin: /[a-zA-Z-_]+/,
            end: /\s*:/,
            excludeEnd: !0,
            starts: {
              end: ';',
              relevance: 0,
              contains: [
                { className: 'variable', begin: /\.[a-zA-Z-_]+/ },
                { className: 'keyword', begin: /\(optional\)/ },
              ],
            },
          }
        return {
          name: 'Roboconf',
          aliases: ['graph', 'instances'],
          case_insensitive: !0,
          keywords: 'import',
          contains: [
            {
              begin: '^facet ' + n,
              end: /\}/,
              keywords: 'facet',
              contains: [a, e.HASH_COMMENT_MODE],
            },
            {
              begin: '^\\s*instance of ' + n,
              end: /\}/,
              keywords: 'name count channels instance-data instance-state instance of',
              illegal: /\S/,
              contains: ['self', a, e.HASH_COMMENT_MODE],
            },
            { begin: '^' + n, end: /\}/, contains: [a, e.HASH_COMMENT_MODE] },
            e.HASH_COMMENT_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=370.2e4fbc547841b44d1f17.js.map
