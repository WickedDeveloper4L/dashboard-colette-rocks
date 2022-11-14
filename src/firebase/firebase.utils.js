import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD-QJ3x8U6wooxFPAAXcQ1u0fVpie6-1mw",
  authDomain: "colette-rocks.firebaseapp.com",
  projectId: "colette-rocks",
  storageBucket: "colette-rocks.appspot.com",
  messagingSenderId: "1004911610708",
  appId: "1:1004911610708:web:1693987a1747b0d7c116c1",
  measurementId: "G-PDH6B65REK"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return 

    const userRef = doc(database,`/users/${userAuth.uid}`)

    const snapShot = await getDoc(userRef)

    if(!snapShot.exists()) {
    const{  email  } = userAuth
    const createdAt = new Date()

    try {
        await setDoc(userRef, {
            email:email,
            createdAt:createdAt,
            ...additionalData
        })
    } catch(error) {
        console.log('error creating user', error.message)
    }
    }
    return userRef
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getFirestore(app)
export const auth = getAuth()