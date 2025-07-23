import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from "firebase/auth";
import { auth } from "../firebaseConfig";

// sign up
export const createUserAccount = async (userName, email, password) => {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	await updateProfile(userCredential.user, {
		displayName: userName
	});
	return userCredential;
};

//sign in
export const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

//sign out
export const logoutUser = () => {
	return signOut(auth);
};
