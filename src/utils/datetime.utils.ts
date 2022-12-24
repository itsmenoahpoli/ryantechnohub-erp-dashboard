import moment from 'moment'

export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

export const formatDate = (datetime: string) => {
  return moment(datetime).format('MMM D, Y @ h:mm A')
}