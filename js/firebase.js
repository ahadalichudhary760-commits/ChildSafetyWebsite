import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkh7EzM_BjLGb7Nz6bUp8QgFEPNeiSrys",
  authDomain: "childsafetywebsite.firebaseapp.com",
  projectId: "childsafetywebsite",
  storageBucket: "childsafetywebsite.firebasestorage.app",
  messagingSenderId: "869628543159",
  appId: "1:869628543159:web:811c54f9acb61be82e4d32"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);