import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDjVanUt1avR9zh3jI2Kyld6nAdGtFLBr8",
  authDomain: "xperios-8dda8.firebaseapp.com",
  projectId: "xperios-8dda8",
  storageBucket: "xperios-8dda8.appspot.com",
  messagingSenderId: "507370985844",
  appId: "1:507370985844:web:9d8d33791d6b19bab2f421",
  measurementId: "G-HJCNG0WCZW",
  databaseURL:
    "https://xperios-8dda8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

export const firebaseConfig1 = {
  apiKey: "AIzaSyDjVanUt1avR9zh3jI2Kyld6nAdGtFLBr8",
  authDomain: "xperios-8dda8.firebaseapp.com",
  projectId: "xperios-8dda8",
  storageBucket: "xperios-8dda8.appspot.com",
  messagingSenderId: "507370985844",
  appId: "1:507370985844:web:9d8d33791d6b19bab2f421",
  measurementId: "G-HJCNG0WCZW",
  databaseURL:
    "https://xperios-traveldata.asia-southeast1.firebasedatabase.app/",
};

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig1);
}
const db1 = getDatabase(app);

export { db1 };

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
const db = getDatabase(app);

export { db };
