import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import products from "../json/products.json";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

//Reference collection
const productsCollection = collection(db, "products");

export const feedProducts = async () => {
  //Delete all existing docs
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (products) => {
    await deleteDoc(doc(db, "products", products.id));
  });
  //Add new docs
  products.forEach(async (products) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...products, id: docRef.id });
  });
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (products) => {
    await result.push(products.data());
  });
  console.log({ result });
  return result;
};

export const getProductById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    productsCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
  });
  return result;
};
