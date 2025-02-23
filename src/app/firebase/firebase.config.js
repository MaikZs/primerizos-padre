'use client';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCHqa6nZr4kicTmSz-w4c1X69taVDr52ak",
    authDomain: "my-proyecto-01-23144.firebaseapp.com",
    projectId: "my-proyecto-01-23144",
    storageBucket: "my-proyecto-01-23144.firebasestorage.app",
    messagingSenderId: "434304040467",
    appId: "1:434304040467:web:949b61c4bdca34977cc9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;