// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { FIREBASE_DEV_KEYS } from "./firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: FIREBASE_DEV_KEYS.apiKey,
    authDomain: FIREBASE_DEV_KEYS.authDomain,
    databaseURL: FIREBASE_DEV_KEYS.databaseURL,
    projectId: FIREBASE_DEV_KEYS.projectId,
    storageBucket: FIREBASE_DEV_KEYS.storageBucket,
    messagingSenderId: FIREBASE_DEV_KEYS.messagingSenderId
  }
};
