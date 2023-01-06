export interface IAccountReminder {
  id?: number
  type: 'payables' | 'receivables' | 'monthly-expenses'
  title: string
  remarks: string
  amount: number
  reminder_type: string | string[]
  reminder_date: Date
  created_at?: Date
  updated_at?: Date
}
