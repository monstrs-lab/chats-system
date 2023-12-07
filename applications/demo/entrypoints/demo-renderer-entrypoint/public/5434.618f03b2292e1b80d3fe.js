;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [5434],
  {
    30906: (e) => {
      e.exports = function (e) {
        const t = ['bool', 'byte', 'i16', 'i32', 'i64', 'double', 'string', 'binary']
        return {
          name: 'Thrift',
          keywords: {
            keyword: [
              'namespace',
              'const',
              'typedef',
              'struct',
              'enum',
              'service',
              'exception',
              'void',
              'oneway',
              'set',
              'list',
              'map',
              'required',
              'optional',
            ],
            type: t,
            literal: 'true false',
          },
          contains: [
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
              className: 'class',
              beginKeywords: 'struct enum service exception',
              end: /\{/,
              illegal: /\n/,
              contains: [
                e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, excludeEnd: !0 } }),
              ],
            },
            {
              begin: '\\b(set|list|map)\\s*<',
              keywords: { type: [...t, 'set', 'list', 'map'] },
              end: '>',
              contains: ['self'],
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=5434.618f03b2292e1b80d3fe.js.map