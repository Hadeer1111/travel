// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtGAz1D6JoMTeSY65xYm5QnXUX1Ezt_eY",
  authDomain: "packages-d71ec.firebaseapp.com",
  projectId: "packages-d71ec",
  storageBucket: "packages-d71ec.appspot.com",
  messagingSenderId: "173023229553",
  appId: "1:173023229553:web:dc5437bc39ee6c35310dd0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};
