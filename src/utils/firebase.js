import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDktuOf9D3NPtAH3IDmOO4ANJ9uFZKdZzk",
    authDomain: "uweather-8599d.firebaseapp.com",
    projectId: "uweather-8599d",
    storageBucket: "uweather-8599d.appspot.com",
    messagingSenderId: "60034889914",
    appId: "1:60034889914:web:02149885b0ea2e2ca92a83"
  };
  
  export const firebaseApp= firebase.initializeApp(firebaseConfig);