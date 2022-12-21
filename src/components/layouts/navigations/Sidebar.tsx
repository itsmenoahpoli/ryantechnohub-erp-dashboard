import React from 'react'

import { Button, Divider, Avatar, Breadcrumb } from 'antd'
import {
  BsColumns,
  BsFileBarGraph,
  BsBell,
  BsCalendar2Week,
  BsListCheck,
  BsUiChecks,
  BsFileText,
  BsFileEarmarkPdf,
  BsPersonLinesFill,
  BsFileRuled,
  BsClockHistory,
  BsHddStack,
} from 'react-icons/bs'

export const Sidebar: React.FC<{ navigate: (params: any) => void }> = (props) => {
  return (
    <React.Fragment>
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
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsColumns />
            Sales Monitoring
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsColumns />
            Stocks Monitoring
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Reports
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileBarGraph />
            Sales Reports
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileBarGraph />
            Inventory Reports
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Accountings
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/accountings/receivable-reminders')} block>
            <BsBell />
            Receivables Reminder
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/accountings/payable-reminders')} block>
            <BsBell />
            Payables Reminder
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/accountings/monthly-reminders')} block>
            <BsBell />
            Monthly Expenses Reminder
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Warehouse Inventory
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsListCheck />
            Inventory Stocks
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsUiChecks />
            Stocks Online Requests
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsCalendar2Week />
            Delivery Schedules
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileText />
            Purchase Order Schedules
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Files & Documents
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileEarmarkPdf />
            Order Invoices
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileEarmarkPdf />
            Product Warranties
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Customers
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsPersonLinesFill />
            Customers List
          </Button>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsFileRuled />
            Transactions History
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            Time Keeping
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsClockHistory />
            Employees Log
          </Button>
        </div>

        <div className="mb-5">
          <Divider orientation="left" orientationMargin={10}>
            System Maintenance
          </Divider>
          <Button type="ghost" onClick={() => props.navigate('/dashboard/')} block>
            <BsHddStack />
            Database Archives
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}
