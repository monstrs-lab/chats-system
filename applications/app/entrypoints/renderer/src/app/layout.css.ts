import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  overscrollBehavior: 'contain',
  backgroundColor: '#ffffff',
  height: '100%',
})

globalStyle('body', {
  margin: 0,
  overflowX: 'hidden',
  height: '100%',
})
