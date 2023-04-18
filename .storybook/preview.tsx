import * as React from 'react'

import type { Preview } from '@storybook/react'
import { useDarkMode } from 'storybook-dark-mode'

import { VecUIProvider, darkTheme, lightTheme, styled } from '../src/theme'

const Box = styled('div', {
  display: 'flex',
  background: '$background',
  color: '$text',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100vw',
  height: '100vh',
})

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <VecUIProvider>
        <Box className={useDarkMode() ? darkTheme : lightTheme}>
          <Story />
        </Box>
      </VecUIProvider>
    ),
  ],
}

export default preview
