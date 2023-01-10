export interface IAppLayoutProps {
  type: 'auth' | 'dashboard' | 'error'
  width?: string | number
  children: React.ReactNode
  isAuthCapture?: boolean
}

export interface IAuthLayoutProps {
  children: React.ReactNode
  isAuthCapture?: boolean
}

export interface IDashboardLayoutProps {
  children: React.ReactNode
  width?: string | number
}

export interface IErrorLayoutProps {
  children: React.ReactNode
}

export interface ISidebarProps {
  user: any
}
