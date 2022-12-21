import React from 'react'
import { Breadcrumb, Button } from 'antd'
import { BsFullscreenExit, BsArrowsFullscreen } from 'react-icons/bs'

import { AUTH_SERVICE } from '@services/index'

export const Header: React.FC = (props: any) => {
  const [isFullscreen, setIsFullsreen] = React.useState<boolean>(false)

  const requestWindowFullscreen = () => {
    setIsFullsreen((prevState) => !prevState)
    if (isFullscreen) {
      document.exitFullscreen()
    }

    document.documentElement.requestFullscreen()
  }

  const handleLogout = () => {
    AUTH_SERVICE.logout()
  }

  return (
    <div className="header">
      <div className="header-nav">
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Data Monitoring</Breadcrumb.Item>
          <Breadcrumb.Item>Sales Monitoring</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="header-nav">
        <Button
          type="ghost"
          className="px-1"
          title={isFullscreen ? 'Exit Fullscreen' : 'Go to fullscreen'}
          onClick={requestWindowFullscreen}>
          {isFullscreen ? <BsFullscreenExit /> : <BsArrowsFullscreen />}
        </Button>
        <Button type="ghost">Session History</Button>
        <Button type="ghost">My Account</Button>
        <Button type="default" onClick={handleLogout}>
          End Session
        </Button>
      </div>
    </div>
  )
}
