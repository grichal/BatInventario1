import {deleteDoc,doc, getDocs, collection, addDoc,updateDoc,getDoc} from "firebase/firestore";
import db from '../firebase/config'

const collectionName = 'articulos'

export const deleteData = (id)=> deleteDoc(doc(db, collectionName, id));

export const getData = ()=> getDocs(collection(db, collectionName));

export const adNewDevice = (articulo)=> addDoc(collection(db, collectionName), articulo);

export const update = (articulo, currentId)=> updateDoc(doc(db, collectionName, currentId), articulo);

export const getdoc = (id)=> getDoc(doc(db, collectionName, id))