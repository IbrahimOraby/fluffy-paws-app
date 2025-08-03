import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addNewUser = async (userData, uid) => {
  const docRef = doc(db, "users", uid);
  try {
    await setDoc((db, docRef), {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: null,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUserDoc = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(docRef);
  if (!user) {
    throw new Error("No user is currently logged in.");
  }
  return userSnapshot.data();
};

export const updateUserRole = async (uid, role) => {
  const docRef = doc(db, "users", uid);
  try {
    await setDoc(docRef, { role: role }, { merge: true });
  } catch (error) {
    console.error("Error updating user role:", error);
  }
};
export const addOrgnizationDoc = async (orgData, uid) => {
  const docRef = doc(db, "organizations", uid);
  await setDoc(
    docRef,
    {
      ...orgData,
      createdAt: serverTimestamp()
    },
    { merge: true }
  );
};

export const getOrginzationDoc = async (uid) => {
  const docRef = doc(db, 'organizations', uid)
  const orgSnapshot = await getDoc(docRef);
  return orgSnapshot.data();
}

export const getAllCollectionDocs = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return docs;
  } catch (error) {
    console.error(`Error fetching documents from ${collectionName}:`, error);
    return [];
  }
};
export const addPersonalSitterDoc = async (personalFormData, uid) => {
  try {
    const docRef = doc(db, "personalSitters", uid);
    await setDoc(
      docRef,
      {
        ...personalFormData,
        createdAt: serverTimestamp()
      },
      { merge: true }
    );
  } catch (err) {
    console.log("Error: Something wrong happened while submitting", err);
  }
};
