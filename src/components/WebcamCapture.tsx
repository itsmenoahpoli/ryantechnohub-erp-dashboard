import React from 'react'
import Webcam from 'react-webcam'
import { Button } from 'antd'

const webcamConfig = {
  height: 500,
  width: 700,
  facingMode: 'user',
}

const WebcamCapturedView = (props: any) => {
  return (
    <>
      <div className="webcam-component-captured">
        <img src={props.picture} height={500} width={700} />
        <Button type="primary" onClick={props.reset}>
          Reset
        </Button>
      </div>
    </>
  )
}

export const WebcamCapture: React.FC = () => {
  return <div></div>
}
