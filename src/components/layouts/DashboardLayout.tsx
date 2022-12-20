import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Button, Divider, Avatar } from 'antd'
import {
  BsColumns,
  BsFileBarGraph,
  BsBell,
  BsCalendar2Week,
  BsListCheck,
  BsReplyAll,
  BsFileText,
  BsFileEarmarkPdf,
  BsPersonLinesFill,
  BsFileRuled,
  BsClockHistory,
  BsHddStack,
} from 'react-icons/bs'

import { DEFAULT_META } from '@config/meta.config'
import { storage } from '@utils/index'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title

    if (storage.get('accessToken') === null && storage.get('user') === null) {
      navigate('/system/login')
    }
  }, [])

  return (
    <Layout className="wrapper-dashboard" hasSider>
      <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
        <div className="wrapper-dashboard-sidebar-header px-2">
          <Avatar size={48}>JD</Avatar>
          <div>
            <p>John Doe</p>
            <small>ADMINISTRATOR</small>
          </div>
        </div>
        <div className="wrapper-dashboard-sidebar-body px-2">
          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Data Monitoring
            </Divider>
            <Button type="ghost" block>
              <BsColumns />
              Sales Monitoring
            </Button>
            <Button type="ghost" block>
              <BsColumns />
              Stocks Monitoring
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Reports
            </Divider>
            <Button type="ghost" block>
              <BsFileBarGraph />
              Sales Reports
            </Button>
            <Button type="ghost" block>
              <BsFileBarGraph />
              Inventory Reports
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Accountings
            </Divider>
            <Button type="ghost" block>
              <BsBell />
              Receivables Reminder
            </Button>
            <Button type="ghost" block>
              <BsBell />
              Payables Reminder
            </Button>
            <Button type="ghost" block>
              <BsBell />
              Monthly Expenses Reminder
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Warehouse Inventory
            </Divider>
            <Button type="ghost" block>
              <BsListCheck />
              Inventory Stocks
            </Button>
            <Button type="ghost" block>
              <BsReplyAll />
              Stocks Online Requests
            </Button>
            <Button type="ghost" block>
              <BsCalendar2Week />
              Delivery Schedules
            </Button>
            <Button type="ghost" block>
              <BsFileText />
              Purchase Order Schedules
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Files & Documents
            </Divider>
            <Button type="ghost" block>
              <BsFileEarmarkPdf />
              Order Invoices
            </Button>
            <Button type="ghost" block>
              <BsFileEarmarkPdf />
              Product Warranties
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Customers
            </Divider>
            <Button type="ghost" block>
              <BsPersonLinesFill />
              Customers List
            </Button>
            <Button type="ghost" block>
              <BsFileRuled />
              Transactions History
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Time Keeping
            </Divider>
            <Button type="ghost" block>
              <BsClockHistory />
              Employees Log
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              System Maintenance
            </Divider>
            <Button type="ghost" block>
              <BsHddStack />
              Database Archives
            </Button>
          </div>
        </div>
      </Sider>

      <Layout className="wrapper-dashboard-main">
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  )
}
