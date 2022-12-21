import React from 'react'
import { Input, Button } from 'antd'

export const PayableRemindersPage: React.FC = () => {
  return (
    <div>
      <div className="dt-actions">
        <div className="dt-actions-left">
          <Input placeholder="Search" />
          <Button type="ghost"></Button>
        </div>
        <div className="dt-actions-right"></div>
      </div>
    </div>
  )
}
