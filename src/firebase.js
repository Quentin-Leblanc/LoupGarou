/** import */
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  /* doc, */
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

export { db };

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "room");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

setTimeout(() => console.log(getCities(db)), 2000);
getCities(db).then(console.log);
const rooms1 = getCities(db).then();
console.log(rooms1);

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
