// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8zXnTTRZwg_SaJMKasLiOGmV3KcEdTPQ",
  authDomain: "nengovhela-badb4.firebaseapp.com",
  projectId: "nengovhela-badb4",
  storageBucket: "nengovhela-badb4.firebasestorage.app",
  messagingSenderId: "277739146084",
  appId: "1:277739146084:web:a8b6bcdf9a36703f2bc871",
  measurementId: "G-4PYBPVD6G5",
};

// Prevent re-initialization during hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics only runs in the browser
export const analyticsPromise = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

export default app;
