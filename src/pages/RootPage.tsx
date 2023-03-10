import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const RootPage: React.FC = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/dashboard')
    }
  }, [])

  return <Outlet />
}
