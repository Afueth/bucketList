// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCKOX8amv4Ahw6Q-i0GEWmPsBMgE9oW2IM",
  authDomain: "bucket-list-afueth.firebaseapp.com",
  projectId: "bucket-list-afueth",
  storageBucket: "bucket-list-afueth.appspot.com",
  messagingSenderId: "895572865463",
  appId: "1:895572865463:web:1d018f1a6329aa22c0b832",
  measurementId: "G-TSP3VS2Z25"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
