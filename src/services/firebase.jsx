import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const firebaseConfig = {
     apiKey: "AIzaSyDOZBp4ioaVJ_YLoWOPwRgsw4uqDArPMDw",
     authDomain: "jaihinddigitallibrary.firebaseapp.com",
     databaseURL: "https://jaihinddigitallibrary-default-rtdb.firebaseio.com",
     projectId: "jaihinddigitallibrary",
     storageBucket: "jaihinddigitallibrary.appspot.com",
     messagingSenderId: "848328064175",
     appId: "1:848328064175:web:08974f5ae0b8c5b446285a",
     measurementId: "G-LHBY1P2H4P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);

export { db, storage };
export { auth, signInWithEmailAndPassword };
