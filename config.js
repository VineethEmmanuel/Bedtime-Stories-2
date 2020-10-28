
import * as firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvXtsg9L8NvNJdRt6B4E2q6PGiOtoAgCs",
    authDomain: "story-hub-3.firebaseapp.com",
    databaseURL: "https://story-hub-3.firebaseio.com",
    projectId: "story-hub-3",
    storageBucket: "story-hub-3.appspot.com",
    messagingSenderId: "918792453387",
    appId: "1:918792453387:web:28dbf0840dab9a9973f60e"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();