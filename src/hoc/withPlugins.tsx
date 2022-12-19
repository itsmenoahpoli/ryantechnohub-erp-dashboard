import React from 'react'
import { useNavigate } from 'react-router-dom'

export const withPlugins = (Component: React.ComponentType) => (props: any) => {
  const navigate = useNavigate()

  return <Component navigate={navigate} {...props} />
}
