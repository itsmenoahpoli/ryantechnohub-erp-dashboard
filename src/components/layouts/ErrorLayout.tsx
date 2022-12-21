import React from 'react'

export const ErrorLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="wrapper-error">{props.children}</div>
}
