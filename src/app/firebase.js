import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCC41BJIhBP_OB45j1ilmlv7KwY8i8dup8",
    authDomain: "mi-base-datos-firestore.firebaseapp.com",
    projectId: "mi-base-datos-firestore",
    storageBucket: "mi-base-datos-firestore.firebasestorage.app",
    messagingSenderId: "749560763217",
    appId: "1:749560763217:web:068113f5b519420e07b970",
    measurementId: "G-YVMG81B9VM"
};

// Initialize Firebase with a specific name
const ratingApp = initializeApp(firebaseConfig, 'ratings');

// Initialize Firestore and export it
export const db = getFirestore(ratingApp);