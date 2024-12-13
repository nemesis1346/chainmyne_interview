// Importing required functions from Firebase v9
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, orderBy, query, setDoc } from 'firebase/firestore';
import { getDatabase, ref, get, child, query as dbQuery, orderByKey, equalTo, once, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import Firebase configuration
import FirebaseConfig from './FirebaseConfig';

// Ensure Firebase is initialized only once
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(FirebaseConfig);
} else {
    firebaseApp = getApp(); // If already initialized, use that one
}

// Initialize Firebase services
const firestore = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

class FirebaseApi {
    // Get values from Realtime Database
    static async getValues(path) {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, path));
        return snapshot.val(); // Returns the data at the path
    }

    // Get all documents from Firestore collection
    static async getDocuments(path) {
        const colRef = collection(firestore, path);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Return documents with IDs
    }

    // Get a single document from Firestore
    static async getDocument(path, nameDoc) {
        const docRef = doc(firestore, path, nameDoc);
        const snapshot = await getDoc(docRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null; // Return document data if exists
    }

    // Get value by key from Realtime Database
    static async getValueByKey(path, key) {
        const dbRef = ref(database);
        const queryRef = dbQuery(dbRef, orderByKey(), equalTo(key));
        const snapshot = await get(queryRef);
        return snapshot.val(); // Return data for the matching key
    }

    // Get documents ordered by a specific property from Firestore
    static async getDocumentsOrderedBy(path, property, orderDirection = 'asc') {
        const colRef = collection(firestore, path);
        const orderedQuery = query(colRef, orderBy(property, orderDirection));
        const snapshot = await getDocs(orderedQuery);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Return ordered documents
    }

    // Set a value in the Realtime Database
    static async setValue(path, value) {
        const dbRef = ref(database, path);
        await set(dbRef, value); // Set value at the specified path
    }

  
}

export default FirebaseApi;
