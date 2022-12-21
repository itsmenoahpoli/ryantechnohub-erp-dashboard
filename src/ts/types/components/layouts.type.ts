import { ReactNode } from 'react'

export type IAppLayoutProps = {
  type: 'dashboard' | 'auth' | 'error'
  children: ReactNode
}

export type ILayoutProps = {
  children: ReactNode
}

export type ILayoutSidebarItem = {

}