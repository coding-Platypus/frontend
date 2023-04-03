import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAVBdJ_Qyc011EruWOQZ4BM5e8Y93gMtwE',
  authDomain: 'clone-71e93.firebaseapp.com',
  databaseURL: 'https://clone-71e93-default-rtdb.firebaseio.com',
  projectId: 'clone-71e93',
  storageBucket: 'clone-71e93.appspot.com',
  messagingSenderId: '170654166696',
  appId: '1:170654166696:web:86331b1d8d5236b5491c9d',
  measurementId: 'G-QWZC951TY7',
};

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
