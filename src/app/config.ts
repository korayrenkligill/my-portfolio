import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBD6bSR-NcvuhXo61hfgyWJ5iuOiu2go_o",
  authDomain: "portfolio-2024-d661a.firebaseapp.com",
  projectId: "portfolio-2024-d661a",
  storageBucket: "portfolio-2024-d661a.appspot.com",
  messagingSenderId: "1050905149665",
  appId: "1:1050905149665:web:28efb1b2df8b9902ee37a0",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
