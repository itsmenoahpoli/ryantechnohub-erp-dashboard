import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { IAccountingsStore } from '@interfaces/store/accountings-store.interface'

export const useAccountingsStore = create<IAccountingsStore>((set, get) => ({
  accountReminders: [],
  setAccountReminders: (accountReminders: IAccountReminder[]) => {
    set(() => ({
      accountReminders,
    }))
  },
}))

export const { getState, setState, subscribe, destroy } = useAccountingsStore

mountStoreDevtool('useAccountingsStore', useAccountingsStore)
