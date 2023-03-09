import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtRIMLkSVfptH4ASinlEfnKhP-mBwUV24",
    authDomain: "react-register-12564.firebaseapp.com",
    projectId: "react-register-12564",
    storageBucket: "react-register-12564.appspot.com",
    messagingSenderId: "1074586181097",
    appId: "1:1074586181097:web:47236fd450006cd1fabf78",
    measurementId: "G-JSN76LC2EC"
};
// construct // start up th lib by giving it credentials
const app = initializeApp(firebaseConfig);
// get auth is one of the function -> login, register, logut, forgot password  etc 
export const authentication = getAuth(app);
export default app;