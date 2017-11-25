import { FIREBASE_PROD_KEYS } from "./firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: FIREBASE_PROD_KEYS.apiKey,
    authDomain: FIREBASE_PROD_KEYS.authDomain,
    databaseURL: FIREBASE_PROD_KEYS.databaseURL,
    projectId: FIREBASE_PROD_KEYS.projectId,
    storageBucket: FIREBASE_PROD_KEYS.storageBucket,
    messagingSenderId: FIREBASE_PROD_KEYS.messagingSenderId
  }
};
