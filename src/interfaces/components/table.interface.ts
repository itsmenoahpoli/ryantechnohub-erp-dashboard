export interface IBaseTableProps<T> {
  onSelectRows: (rowIds: React.Key[]) => void
  loading?: boolean
  data: T
}