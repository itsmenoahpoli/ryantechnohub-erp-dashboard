export interface IAppLayoutProps {
  type: 'auth' | 'dashboard' | 'error'
  children: React.ReactNode
  isAuthCapture?: boolean
}

export interface IAuthLayoutProps {
  children: React.ReactNode
  isAuthCapture?: boolean
}

export interface IDashboardLayoutProps {
  children: React.ReactNode
}

export interface IErrorLayoutProps {
  children: React.ReactNode
}