import { create } from 'zustand'

import useUserStore from './zustand';

const useChatStore = create((set) => ({
  chatID: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatID, user) => {
    const currentUser = useUserStore.getState().currentUser

    console.log(user)
    if (user.blocked_list.includes(currentUser.id)) {
      return set({ 
        chatID,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
       })
    }
    else if (currentUser.blocked_list.includes(user.id)) {
        return set({ 
          chatID,
          user: user,
          isCurrentUserBlocked: false,
          isReceiverBlocked: true,
         })
      }

    else {
        return set({chatID,
            user,
            isCurrentUserBlocked: false,
            isReceiverBlocked: false,
        })
    }


  },
  changeBlockStatus: () => {
    set(state => ({
        ...state, isReceiverBlocked: !state.isReceiverBlocked
    }))
  }
}))

export default useChatStore