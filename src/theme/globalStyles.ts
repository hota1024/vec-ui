import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent',
  },
})
