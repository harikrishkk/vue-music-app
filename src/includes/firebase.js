/* eslint-disable */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNxPfVQ9up33nmMQaqyvtL_-fnzduKewI',
  authDomain: 'music-9afe3.firebaseapp.com',
  projectId: 'music-9afe3',
  storageBucket: 'music-9afe3.appspot.com',
  appId: '1:436123483124:web:7cbe01306bfa8e7d89d7a1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((err) => {
  console.log('Firebase persistance error');
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
