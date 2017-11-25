# kindling

An easy-to-use GUI for interacting with firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Add Firebase Keys:
### Be sure to add `firebase.ts` to your `/environments` folder. It should contain the following code:
```
export const FIREBASE_DEV_KEYS = {
    apiKey: 'XYZ',
    authDomain: 'XYZ.firebaseapp.com',
    databaseURL: 'https://XYZ.firebaseio.com',
    storageBucket: 'XYZ.appspot.com',
    projectId: 'XYZ' // <--- make sure project ID is here 
}

export const FIREBASE_PROD_KEYS = {
    apiKey: 'XYZ',
    authDomain: 'XYZ.firebaseapp.com',
    databaseURL: 'https://XYZ.firebaseio.com',
    storageBucket: 'XYZ.appspot.com',
    projectId: 'XYZ' // <--- make sure project ID is here 
}
```

If you don't need separate Dev / Prod environments, just use the same keys for both

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
