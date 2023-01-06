import moment from 'moment'

export const generateCSVFilename = (moduleName: string) => {
  return `ERP-${moduleName}-${moment().format('L')}.csv`
}
