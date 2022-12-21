import React from 'react'
import { Button, Divider, Avatar } from 'antd'

import { SIDEBAR_ITEMS } from '@statics/index'
import { getInitials } from '@utils/index'

export const Sidebar: React.FC<{ navigate: (params: any) => void; user: any }> = (props) => {
  return (
    <React.Fragment>
      <div className="wrapper-dashboard-sidebar-header px-2">
        <Avatar size={48}>{getInitials(props.user?.name)}</Avatar>
        <div>
          <p>{props.user?.name}</p>
          <small>ADMINISTRATOR</small>
        </div>
      </div>
      <div className="wrapper-dashboard-sidebar-body px-2">
        {SIDEBAR_ITEMS.map((item: any) => (
          <div className="mb-5" key={'sidebar-group-' + item.group.toLowerCase().replaceAll(' ', '-')}>
            <Divider orientation="left" orientationMargin={10}>
              {item.group}
            </Divider>
            {item.items.map((btn: any, idx: number) => (
              <Button type="ghost" onClick={() => props.navigate(btn.url)} key={idx} block>
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
