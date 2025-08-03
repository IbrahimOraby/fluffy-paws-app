// store/useUserStore.js
import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const useUserStore = create((set) => ({
  user: null,      
  userDoc: null,    
  loading: true,
  error: null,

  observeAuth: () => {
    set({ loading: true });
  
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        
        const unsubscribeDoc = onSnapshot(userRef, (snapshot) => {
          const userData = snapshot.exists() ? snapshot.data() : null;
  
          set({
            user,
            userDoc: userData,
            loading: false,
            error: null,
          });
        });
  
        // Unsubscribe Firestore listener when auth state changes
        return () => {
          unsubscribeDoc();
        };
      } else {
        set({ user: null, userDoc: null, loading: false });
      }
    });
  
    return unsubscribeAuth; // Cleanup function
  }
  
}));
export default useUserStore;