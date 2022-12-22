import React from 'react'

import { AppLayout } from '@components/layouts'
import { WebcamCapture } from '@components/WebcamCapture'

export const CaptureAuthPage: React.FC = () => {
  return (
    <AppLayout type="auth" isAuthCapture>
      <WebcamCapture />
    </AppLayout>
  )
}
