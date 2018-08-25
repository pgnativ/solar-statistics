// import * as firebase from 'firebase';
import {database, initializeApp} from 'firebase';
import {environment} from './src/environments/environment';
import {dbData} from './db.data';
import {Observable} from 'rxjs';

const firebase = initializeApp(environment.firebaseConfig);
// firebase.initializeApp(environment.firebaseConfig);

// const statsRef = database().ref('stats');

/*statsRef.push('', function () {
  console.log('test');
});*/

console.log('Starting populate DB...');

/*function get(populateItem: object): Observable<any> {
  return statsRef.push({
    day: '',
    sizeSet: populateItem.sizeSet,
    sizeGet: populateItem.sizeGet
  }, console.log(populateItem.sizeSet));
}*/

const obPush: Observable<any>;

/*import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable,
} from 'angularfire2/database';

@ Component ({
  selector: 'book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})

export class BookInfoComponent implements OnInit {}*/
  /*dbData.stats.forEach( item => {
    get(item);
    //
  }, function () {
    console.log('end');
    // database().goOffline();
  });*/

// Create observer object
/* const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};*/

// Execute with the observer object
// myObservable.subscribe(myObserver);
// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification

/*pushData(list):Observable {
  //
}

const zzz = new Observable((observer) => {

  // observable execution
  observer.next("bla bla bla");
  observer.complete();
});

*/
console.log('Ending populate DB...');

