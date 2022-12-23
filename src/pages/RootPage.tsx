import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { storage } from '@utils/index'

export const RootPage: React.FC = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    // if (storage.get('accessToken') && storage.get('user')) {
    //   return navigate('/dashboard')
    // }
    // if (
    //   ((storage.get('accessToken') === null && storage.get('user')) === null &&
    //     window.location.pathname === '/system/auth/login') ||
    //   window.location.pathname === '/system/auth/capture'
    // ) {
    //   return
    // }
  }, [])

  return <Outlet />
}
