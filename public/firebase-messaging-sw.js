importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyDf59TCYGX2zfmhpy5tr08ZGfDBI_lBOKY',
  authDomain: 'quiz-app-6efb5.firebaseapp.com',
  databaseURL: 'https://quiz-app-6efb5.firebaseio.com',
  projectId: 'quiz-app-6efb5',
  storageBucket: 'quiz-app-6efb5.appspot.com',
  messagingSenderId: '230531173080',
  appId: '1:230531173080:web:29a258495320107702e5ad',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
