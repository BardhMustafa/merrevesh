// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChQFRyugK5KjW9eBgtq2KAaM4nzMU0Y7I",
  authDomain: "mso-tu-u-knaq-d8b13.firebaseapp.com",
  projectId: "mso-tu-u-knaq-d8b13",
  storageBucket: "mso-tu-u-knaq-d8b13.appspot.com",
  messagingSenderId: "742321570197",
  appId: "1:742321570197:web:66f5f5a71f5e032e6e769c",
  measurementId: "G-5BYYHPGNM2"
};


firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let db = firebase.firestore();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}










