import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyABKt4Aa0Qgl1xqBt60mE7hchvUs3Jpyg8",
    authDomain: "linkedin-clone-yt-fc1ed.firebaseapp.com",
    projectId: "linkedin-clone-yt-fc1ed",
    storageBucket: "linkedin-clone-yt-fc1ed.appspot.com",
    messagingSenderId: "95556013007",
    appId: "1:95556013007:web:694a0a0db5f2a109f3a0ba"
  };

  const fireBaseApp = firebase.initializeApp(firebaseConfig);
  const db = fireBaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };