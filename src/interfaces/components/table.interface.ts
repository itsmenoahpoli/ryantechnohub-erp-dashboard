import React from 'react'

export interface IBaseTableProps<T> {
  onSelectRows?: (rowIds: React.Key[]) => void
  onUpdateRow?: (rowId: React.Key) => void
  onDeleteRow?: (rowId: React.Key) => void
  loading?: boolean
  data: T
}
