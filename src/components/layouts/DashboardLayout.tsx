import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Button, Divider } from 'antd'
import { BsCalendar4Week } from 'react-icons/bs'
import { AiOutlineFileText } from 'react-icons/ai'
import { MdOutlineInventory, MdOutlinePlaylistAddCheck } from 'react-icons/md'
import { TbTruckLoading } from 'react-icons/tb'

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
    <Layout className="wrapper-dashboard">
      <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
        <div className="px-2">
          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Data Monitoring
            </Divider>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Sales Monitoring
            </Button>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Stocks Monitoring
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Reports
            </Divider>
            <Button type="ghost" block>
              <AiOutlineFileText /> Sales Reports
            </Button>
            <Button type="ghost" block>
              <MdOutlineInventory />
              Inventory Reports (In/Out)
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Accountings
            </Divider>
            <Button type="ghost" block>
              <BsCalendar4Week /> Receivables Reminder
            </Button>
            <Button type="ghost" block>
              <BsCalendar4Week />
              Payables Reminder
            </Button>
            <Button type="ghost" block>
              <BsCalendar4Week />
              Monthly Expenses Reminder
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Warehouse Inventory
            </Divider>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Inventory Stocks
            </Button>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Stocks Requests
            </Button>
            <Button type="ghost" block>
              <TbTruckLoading /> Delivery Schedules
            </Button>
            <Button type="ghost" block>
              <MdOutlineInventory />
              Purchase Order Schedules
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Documents
            </Divider>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Order Invoices
            </Button>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Customer Warranties
            </Button>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Product Warranties
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Customers
            </Divider>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Transactions History
            </Button>
          </div>

          <div className="mb-5">
            <Divider orientation="left" orientationMargin={10}>
              Time Keeping
            </Divider>
            <Button type="ghost" block>
              <MdOutlinePlaylistAddCheck /> Employees Log
            </Button>
          </div>
        </div>
      </Sider>

      <Layout className="wrapper-dashboard-main">
        <Content></Content>
      </Layout>
    </Layout>
  )
}
