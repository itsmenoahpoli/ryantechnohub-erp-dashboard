import React from 'react'

interface IProps {
  paginationParams: object
}

export const AccountRemindersList: React.FC<IProps> = (props) => {
  return <div>{JSON.stringify(props.paginationParams)}</div>
}
