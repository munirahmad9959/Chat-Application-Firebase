import { doc, getDoc } from 'firebase/firestore'
import { create } from 'zustand'
import { db } from './firebase'

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) {
      // Corrected the early return: Now properly sets currentUser to null and isLoading to false, then returns
      set({ currentUser: null, isLoading: false })
      return
    }

    try {
      // Fixed the doc call: Changed "uid" to uid to use the actual user ID passed to the function
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false })
      } else {
        set({ currentUser: null, isLoading: false })
      }

    } catch (error) {
      console.log(error)
      set({ currentUser: null, isLoading: false })
    }
  }
}))
