import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { getCurrentUser } from './auth_service';

export const addNewUser = async (userData, uid) => {
    const docRef = doc(db, "users", uid);
    try {
        await setDoc((db, docRef), {
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            role: null
        })

    } catch (error) {
        console.log(error)
    }
}

export const getCurrentUserDoc = async (user) => {
 
    const docRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(docRef);
    if (!user) {
        throw new Error("No user is currently logged in.");
    }
    return userSnapshot.data();
}

export const updateUserRole = async (uid, role) => {
const docRef = doc(db, "users", uid);
    try {
        await setDoc(docRef, { role: role }, { merge: true });
    } catch (error) {
        console.error("Error updating user role:", error);
    }
}