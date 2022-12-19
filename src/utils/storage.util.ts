export const storage = {
  set: (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify({ data }))
  },
  get: (key: string) => {
    let item: any = localStorage.getItem(key)

    if (item) {
      return JSON.parse(item).data
    }

    return null
  },
  remove: (key: string) => {
    //
  },
  removeAll: () => {
    //
  }
}