import * as nextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '@/styles/globals.scss'

// Mock nextjs/image with regular image
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  }
}
