import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { TUserStore } from '@ts/types/store/user.type'
import { storage } from '@utils/index'


export const useUserStore = create<TUserStore>((set, get) => ({
  user: storage.get('user'),
  accessToken: storage.get('accessToken'),
}))

mountStoreDevtool('userStore', useUserStore)