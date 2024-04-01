// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSJ5Zt1D0cnVVOE9dGTKBAlDLXS7WNHpM",
  authDomain: "cricfranzy.firebaseapp.com",
  projectId: "cricfranzy",
  storageBucket: "cricfranzy.appspot.com",
  messagingSenderId: "803956525408",
  appId: "1:803956525408:web:d75be4161bfe77916af605",
  measurementId: "G-JSZQ9HVS3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;