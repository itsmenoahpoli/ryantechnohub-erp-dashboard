import React from 'react'
import { Button, Divider, Avatar } from 'antd'

import { SIDEBAR_ITEMS } from '@statics/index'

export const Sidebar: React.FC<{ navigate: (params: any) => void }> = (props) => {
  return (
    <React.Fragment>
      <div className="wrapper-dashboard-sidebar-header px-2">
        <Avatar size={48}>JD</Avatar>
        <div>
          <p>John Doe</p>
          <small>ADMINISTRATOR</small>
        </div>
      </div>
      <div className="wrapper-dashboard-sidebar-body px-2">
        {SIDEBAR_ITEMS.map((item: any) => (
          <div className="mb-5" key={'sidebar-group-' + item.group.toLowerCase().replaceAll(' ', '-')}>
            <Divider orientation="left" orientationMargin={10}>
              {item.group}
            </Divider>
            {item.items.map((btn: any) => (
              <Button type="ghost" onClick={() => props.navigate(btn.path)} key={btn.path} block>
                {btn.icon}
                {btn.label}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
