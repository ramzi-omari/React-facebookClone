import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCFPO4L9ReykbDFXBPW8SsbwjXI4ZgFY0E",
    authDomain: "facebook-clone-4ddeb.firebaseapp.com",
    projectId: "facebook-clone-4ddeb",
    storageBucket: "facebook-clone-4ddeb.appspot.com",
    messagingSenderId: "93560674515",
    appId: "1:93560674515:web:5628bcb625c076da3b1c26"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth= firebase.auth()

  const provider= new firebase.auth.GoogleAuthProvider()
  
  export { auth, provider}
  export default db