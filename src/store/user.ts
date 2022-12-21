import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { storage } from '@utils/index'

export type IUserStore = {
  user: {
    name: string,
    email: string,
    email_verified_at: boolean
  },
  accessToken: string,
}

export const useUserStore = create<IUserStore>((set, get) => ({
  user: storage.get('user'),
  accessToken: storage.get('accessToken'),
}))

mountStoreDevtool('userStore', useUserStore)