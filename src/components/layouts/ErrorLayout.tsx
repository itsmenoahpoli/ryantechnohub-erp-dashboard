import React from 'react'

import type { IErrorLayoutProps } from '@interfaces/components/layouts.interface'

export const ErrorLayout: React.FC<IErrorLayoutProps> = (props) => {
  return <div className="wrapper-error">{props.children}</div>
}
