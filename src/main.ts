import { bootstrapApplication } from '@angular/platform-browser';
import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const firebaseConfig = {
  apiKey: 'AIzaSyBBz0WrM0VKmA4gm_aFRnI7ASQi1yCzR_M',
  authDomain: 'previewly-519d7.firebaseapp.com',
  projectId: 'previewly-519d7',
  storageBucket: 'previewly-519d7.appspot.com',
  messagingSenderId: '681645155571',
  appId: '1:681645155571:web:8684a11d148acdf7704386',
  measurementId: 'G-H8ZBJZX3X3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
