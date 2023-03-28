import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCsIlR5EiahYKdNgjk_8-98rzkD6xQ5_3w",
    authDomain: "clima-invernadero.firebaseapp.com",
    databaseURL: "https://clima-invernadero-default-rtdb.firebaseio.com",
    projectId: "clima-invernadero",
    storageBucket: "clima-invernadero.appspot.com",
    messagingSenderId: "827139045447",
    appId: "1:827139045447:web:5b8b3587350a5669bf9962",
    measurementId: "G-XVRGP5GR2S"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;