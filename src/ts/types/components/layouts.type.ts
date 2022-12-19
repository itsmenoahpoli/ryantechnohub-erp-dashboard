import { ReactNode } from 'react'

export type IAppLayoutProps = {
  type: 'dashboard' | 'auth'
  children: ReactNode
}

export type ILayoutProps = {
  children: ReactNode
}

export type ILayoutSidebarItem = {

}