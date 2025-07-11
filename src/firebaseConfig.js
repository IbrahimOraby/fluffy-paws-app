// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBfm_0iIWfSXGt5Wn7KPy1dCjqp9twvvEs",
	authDomain: "fluffy-paws-app.firebaseapp.com",
	projectId: "fluffy-paws-app",
	storageBucket: "fluffy-paws-app.firebasestorage.app",
	messagingSenderId: "302741275110",
	appId: "1:302741275110:web:c4a05802932b2c5f025627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
