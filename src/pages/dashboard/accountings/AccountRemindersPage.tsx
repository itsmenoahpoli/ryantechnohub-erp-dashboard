import React from 'react'
import { Button } from 'antd'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { ACCOUNTING_SERVICE } from '@services/index'
import { AccountingRemindersList } from '@components/features/accountings/AccountingRemindersList'

export const AccountRemindersPage: React.FC = () => {
  const [searchParams] = useSearchParams()

  const fetchAccountReminders = async () => {
    return await ACCOUNTING_SERVICE.getRemindersList({ type: searchParams.get('type') })
  }

  const { isFetching, data, refetch } = useQuery({
    queryKey: ['account-reminders'],
    queryFn: fetchAccountReminders,
    select: (data) => data.data,
  })

  const refreshList = () => {
    refetch()
  }

  const exportListToCSV = () => {
    //
  }

  React.useEffect(() => {
    refreshList()
  }, [searchParams])

  return (
    <div>
      <div className="list-filters">
        <div className="list-filters-panel">
          <Button type="default" onClick={refreshList}>
            Refresh List
          </Button>
          <Button type="default">Export Data</Button>
          <Button type="default">Import Data</Button>
          <Button type="default">Filters</Button>
        </div>

        <div className="list-filters-panel">
          <Button type="default" className="primary">
            Create Reminder
          </Button>
        </div>
      </div>

      <AccountingRemindersList data={data} loading={isFetching} />
    </div>
  )
}
