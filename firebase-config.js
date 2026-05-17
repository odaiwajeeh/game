/*
  ضع بيانات Firebase الخاصة بك هنا.
  Firebase Console > Project settings > General > Your apps > Web app > Firebase SDK snippet > Config
*/
window.FIREBASE_CONFIG = {

  apiKey: "AIzaSyCPdDXp_kDa5eqhRkVxzIR8n_z2TwwQpzg",
  authDomain: "axial-silicon-464218-u4.firebaseapp.com",
  projectId: "axial-silicon-464218-u4",
  storageBucket: "axial-silicon-464218-u4.firebasestorage.app",
  messagingSenderId: "668579392641",
  appId: "1:668579392641:web:d5686e43af45dc2b157180"
};

window.FIREBASE_ROOM_ID = "default-room";

(function () {
  "use strict";

  if (!window.firebase || !window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === "PASTE_API_KEY_HERE") {
    window.classroomFeudDb = null;
    window.classroomFeudFirebaseReady = false;
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(window.FIREBASE_CONFIG);
  }

  window.classroomFeudDb = firebase.database();
  window.classroomFeudFirebaseReady = true;
})();
