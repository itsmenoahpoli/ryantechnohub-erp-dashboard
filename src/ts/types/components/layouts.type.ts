import { ReactNode } from 'react'

export type TAppLayoutProps = {
  type: 'dashboard' | 'auth' | 'error'
  isAuthCapture?: boolean
  children: ReactNode
}

export type TAuthLayoutProps = {
  isAuthCapture?: boolean
  children: ReactNode
}

export type TDashboardLayoutProps = {
  children: ReactNode
}