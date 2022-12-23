import {
  BsHouse,
  BsColumns,
  BsFileBarGraph,
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

export const SIDEBAR_ITEMS: Array<object> = [
  {
    group: 'Dashboard',
    items: [
      {
        icon: <BsHouse />,
        label: 'General Overview',
        url: '/dashboard',
      },
    ],
  },
  {
    group: 'Data Monitoring',
    items: [
      {
        icon: <BsColumns />,
        label: 'Sales Monitoring',
        url: '/dashboard/data-monitoring/sales',
      },
      {
        icon: <BsFileBarGraph />,
        label: 'Stocks Monitoring',
        url: '/dashboard/data-monitoring/stocks',
      },
    ],
  },
  {
    group: 'Reports',
    items: [
      {
        icon: <BsFileBarGraph />,
        label: 'Sales Reports',
        url: '/dashboard/reports/sales',
      },
      {
        icon: <BsFileBarGraph />,
        label: 'Inventory Reports',
        url: '/dashboard/reports/inventory-reports',
      },
    ],
  },
  {
    group: 'Accountings',
    items: [
      {
        icon: <BsCalendar2Week />,
        label: 'Receivables Reminders',
        url: '/dashboard/accountings/account-reminders?type=receivables',
      },
      {
        icon: <BsCalendar2Week />,
        label: 'Payables Reminders',
        url: '/dashboard/accountings/account-reminders?type=payables',
      },
      {
        icon: <BsCalendar2Week />,
        label: 'Monthly Expenses Reminders',
        url: '/dashboard/accountings/account-reminders?type=monthly-expenses',
      },
    ],
  },
  {
    group: 'Warehouse Inventory',
    items: [
      {
        icon: <BsListCheck />,
        label: 'Inventory Stocks',
        url: '/dashboard/warehouse/receivables-reminders',
      },
      {
        icon: <BsUiChecks />,
        label: 'Stocks Online Requests',
        url: '/dashboard/warehouse/payables-reminders',
      },
      {
        icon: <BsCalendar2Week />,
        label: 'Delivery Schedules',
        url: '/dashboard/warehouse/month-expenses-reminders',
      },
      {
        icon: <BsFileText />,
        label: 'Purchase Order Schedules',
        url: '/dashboard/warehouse/month-expenses-reminders',
      },
    ],
  },
  {
    group: 'Files & Documents',
    items: [
      {
        icon: <BsFileEarmarkPdf />,
        label: 'Order Invoices',
        url: '/dashboard/reports/invoices',
      },
      {
        icon: <BsFileEarmarkPdf />,
        label: 'Product Warranties',
        url: '/dashboard/reports/warranties',
      },
    ],
  },
  {
    group: 'Customers',
    items: [
      {
        icon: <BsPersonLinesFill />,
        label: 'Customers List',
        url: '/dashboard/customers/list',
      },
      {
        icon: <BsFileRuled />,
        label: 'Transactions History',
        url: '/dashboard/customers/transactions',
      },
    ],
  },
  {
    group: 'Time-Keeping',
    items: [
      {
        icon: <BsClockHistory />,
        label: 'Employees Log',
        url: '/dashboard/time-keeping/employees-log',
      },
    ],
  },
  {
    group: 'System Maintenance',
    items: [
      {
        icon: <BsHddStack />,
        label: 'Database Archives',
        url: '/dashboard/maintenance/database-archives',
      },
    ],
  },
]
