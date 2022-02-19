/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlausibleScript } from './Plausible'
import siteMetadata from '@/data/siteMetadata'

declare global {
  interface Window {
    plausible?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

export const Analytics = () =>
  isProduction && siteMetadata.analytics.plausibleDataDomain && <PlausibleScript />
