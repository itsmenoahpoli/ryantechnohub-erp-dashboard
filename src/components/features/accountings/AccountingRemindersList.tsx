import React from 'react'

interface IProps {
  title: string
  type?: 'payables' | 'receivables' | 'monthly-expenses'
}

export const AccountingRemindersList: React.FC<IProps> = (props) => {
  return (
    <div className="table-container">
      <div className="table-container-header"></div>
      <div className="table-container-body"></div>
      <div className="table-container-footer"></div>
    </div>
  )
}
