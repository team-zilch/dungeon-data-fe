'use strict';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCh-0EPSDNygvfYTgzTFKI-WRKRpsXOYKY",
  authDomain: "dungeon-data.firebaseapp.com",
  databaseURL: "https://dungeon-data.firebaseio.com",
  projectId: "dungeon-data",
  storageBucket: "dungeon-data.appspot.com",
  messagingSenderId: "161064897759",
  appId: "1:161064897759:web:bd78f20ef55a4806"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;