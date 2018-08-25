// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBwMkf0EenUvNvRPPBb46EqyscnVOZpyh4',
    authDomain: 'solar-statistics-test.firebaseapp.com',
    databaseURL: 'https://solar-statistics-test.firebaseio.com',
    projectId: 'solar-statistics-test',
    storageBucket: 'solar-statistics-test.appspot.com',
    messagingSenderId: '239587634838'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
