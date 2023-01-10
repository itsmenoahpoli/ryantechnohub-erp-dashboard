import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { storage } from '@utils/index'

export const useUserStore = create((set, get) => ({
  user: storage.get('user'),
  accessToken: storage.get('accessToken'),
}))

mountStoreDevtool('userStore', useUserStore)
