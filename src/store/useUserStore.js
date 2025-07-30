// store/useUserStore.js
import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const useUserStore = create((set) => ({
  user: null,      
  userDoc: null,    
  loading: true,
  error: null,

  observeAuth: () => {
    set({ loading: true });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const snapshot = await getDoc(userRef);
          const userData = snapshot.exists() ? snapshot.data() : null;

          set({
            user,
            userDoc: userData,
            loading: false,
            error: null,
          });
        } else {
          set({ user: null, userDoc: null, loading: false });
        }
      } catch (error) {
        set({ error, loading: false });
      }
    });

    //Cleanup function
    return unsubscribe; 
  },
}));
export default useUserStore;