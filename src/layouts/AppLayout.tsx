import React from 'react'

import { withPlugins } from '@hoc/withPlugins'

const AppLayout: React.FC = (props: any) => {
  return <div>{props.children}</div>
}

export default withPlugins(AppLayout)
