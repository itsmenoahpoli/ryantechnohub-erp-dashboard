import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Layout, Card, Modal } from 'antd'

import { DEFAULT_META } from '@config/meta.config'
import { storage } from '@utils/index'
import { useUserStore, IUserStore } from '@store/user'
import { Header, Sidebar } from '@components/layouts/navigations'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const navigate = useNavigate()
  const { user }: IUserStore = useUserStore()
  const [captureModal, setCaptureModal] = React.useState<{ show: boolean }>({
    show: false,
  })

  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title

    // if (!storage.get('user-face-captured')) {
    //   setCaptureModal({ ...captureModal, show: true })
    // }
  }, [])

  const closeModal = () => {
    setCaptureModal({ ...captureModal, show: false })
  }

  if (storage.get('accessToken') === null && storage.get('user') === null) {
    return <Navigate to="/system/auth/login?status=unauthorized" />
  }

  return (
    <React.Fragment>
      <Layout className="wrapper-dashboard" hasSider>
        <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
          <Sidebar navigate={navigate} user={user} />
        </Sider>

        <Layout className="wrapper-dashboard-main animate__animated animate__faster animate__fadeIn">
          <Content>
            <div className="top-container">
              <Header />
              {/* <h1 className="page-name">[[Page_name]]</h1> */}
            </div>
            <Card className="page-content-container">{props.children}</Card>
          </Content>
        </Layout>
      </Layout>

      <Modal open={captureModal.show} title="Employee Capture Log" onCancel={closeModal} centered></Modal>
    </React.Fragment>
  )
}
