import {
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addNewUser = async (userData, uid) => {
  const docRef = doc(db, "users", uid);
  try {
    await setDoc((db, docRef), {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: null,
      createdAt: serverTimestamp(),
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

export const updateClientData = async (uid, updatedData) => {
  const userRef = doc(db, "users", uid);
  try {
    await setDoc(userRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
export const addOrgnizationDoc = async (orgData, uid) => {
  const docRef = doc(db, "organizations", uid);
  await setDoc(
    docRef,
    {
      ...orgData,
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );
};

export const updateOrganizationGallery = async (uid, galleryArray) => {
  const docRef = doc(db, "organizations", uid);
  try {
    await setDoc(
      docRef,
      {
        gallery: galleryArray,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error updating gallery images:", error);
  }
};

export const getOrginzationDoc = async (uid) => {
  const docRef = doc(db, "organizations", uid);
  const orgSnapshot = await getDoc(docRef);
  return orgSnapshot.data();
};

export const getPersonalSitterDoc = async (uid) => {
  const docRef = doc(db, "personalSitters", uid);
  const sitterSnapshot = await getDoc(docRef);
  return sitterSnapshot.data();
};

export const updatePersonalSitterData = async (uid, updatedData) => {
  const docRef = doc(db, "personalSitters", uid);
  try {
    await setDoc(docRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating personal sitter data:", error);
    throw error;
  }
};

export const getAllCollectionDocs = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
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
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.log("Error: Something wrong happened while submitting", err);
  }
};

export const updatePersonalSitterGallery = async (uid, galleryArray) => {
  const docRef = doc(db, "personalSitters", uid);
  try {
    await setDoc(
      docRef,
      {
        gallery: galleryArray,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error updating sitter gallery images:", error);
  }
};

export const getPetDocs = async (uid) => {
  try {
    const petsCollectionRef = collection(db, "users", uid, "pets");
    const querySnapshot = await getDocs(petsCollectionRef);
    const pets = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return pets;
  } catch (error) {
    console.error("Error fetching pets for user:", error);
    return [];
  }
};

export const getFullNameFromUserBySitterId = async (sitterId) => {
  if (!sitterId) return null;

  try {
    const userRef = doc(db, "users", sitterId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      return `${data.firstName} ${data.lastName}`.trim();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch full name:", error);
    return null;
  }
};

export const addUserNameToPersonalSitters = async () => {
  try {
    const sittersRef = collection(db, "personalSitters");
    const sittersSnapshot = await getDocs(sittersRef);

    for (const sitterDoc of sittersSnapshot.docs) {
      const sitterId = sitterDoc.id;
      const userRef = doc(db, "users", sitterId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const firstName = userData.firstName || "";
        const lastName = userData.lastName || "";
        const fullName = `${firstName} ${lastName}`.trim();

        const sitterRef = doc(db, "personalSitters", sitterId);
        await updateDoc(sitterRef, {
          userName: fullName,
        });

        console.log(`Updated ${sitterId} with userName: ${fullName}`);
      } else {
        console.warn(`User with ID ${sitterId} not found in users collection`);
      }
    }
  } catch (error) {
    console.error("Error updating userName fields:", error);
  }
};

export const addPetDoc = async (uid, petData) => {
  try {
    const petsRef = collection(db, "users", uid, "pets");
    const docRef = await addDoc(petsRef, {
      ...petData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("Error adding pet:", err);
    throw err;
  }
};

export const addOrganizationReview = async (orgId, reviewData) => {
  const reviewsRef = collection(db, "organizations", orgId, "reviews");
  await addDoc(reviewsRef, {
    ...reviewData,
    createdAt: serverTimestamp(),
  });
};

export const listenOrgReviews = (orgId, callback) => {
  const q = query(
    collection(db, "organizations", orgId, "reviews"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};
