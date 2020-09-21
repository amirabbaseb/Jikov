import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCffaz1fKMiEffoIR5vhvp2a7HNqdlkfEw",
  authDomain: "jikov-app-run.firebaseapp.com",
  databaseURL: "https://jikov-app-run.firebaseio.com",
  projectId: "jikov-app-run",
  storageBucket: "jikov-app-run.appspot.com",
  messagingSenderId: "201576358187",
  appId: "1:201576358187:web:abf9edbc883f40942ee56e",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
