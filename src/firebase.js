/** import */
import { store } from "@/store";
import router from "@/router";
import { initializeApp } from "firebase/app";
import {
  /* eslint-disable */
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";

/** config */
const firebaseConfig = {
  apiKey: "AIzaSyAaqLwBShCNL0Zb8BVpwA_JXb8j-1c9YUs",
  authDomain: "garoloup2.firebaseapp.com",
  projectId: "garoloup2",
  storageBucket: "garoloup2.appspot.com",
  messagingSenderId: "826364983543",
  appId: "1:826364983543:web:070fed213e200aaffabbf2",
};

/** Initialize Firebase */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**  Ajout de données username vers la bdd **/
async function sendPseudoToDb() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: store.form.pseudo,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/**  Ajout du nom de la partie créer vers la bdd **/
async function createLobbyToDb() {
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      name: store.lobby.name,
      open: store.lobby.open,
    });
    let docID = docRef.id;
    console.log("Document written with ID: ", docRef.id);
    router.push({ path: "/partie/" + docID });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


async function getCities(db) {
  console.log('why')
  const querySnapshot = await getDocs(collection(db, "rooms"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return querySnapshot
}

export { db, sendPseudoToDb, createLobbyToDb, getCities };


/*
const rooms1 = getCities(db);

rooms1.then((data) => {
  console.log(Object.keys(data));
});


const q = query(collection(db, "rooms"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const rooms = [];
  querySnapshot.forEach((doc) => {
    rooms.push(doc.data().name);
  });
  console.log("q :", q);
  console.log("rooms: ", rooms.join(", "));
  console.log("unsubscribe = ", unsubscribe);
});
*/
