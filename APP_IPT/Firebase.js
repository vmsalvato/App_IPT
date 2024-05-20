import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  databaseURL: "#",
  projectId: "ipt-toledo"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;