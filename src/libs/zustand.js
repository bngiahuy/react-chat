import { create } from 'zustand'
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase';

const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false})
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            set({ currentUser: docSnap.data(), isLoading: false})
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            set({ currentUser: null, isLoading: false})
          }

    } catch (error) {
        console.log('Error fetching user info: ', error)
        return set({ currentUser: null, isLoading: false})
    }
  }
}))

export default useUserStore