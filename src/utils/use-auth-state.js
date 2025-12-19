"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/services/firebaseConfig";

export function useAuthState() {
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuthState(false);
    });

    return () => checkUser();
  }, []);

  return { user, loadingAuthState, isAuthenticated: !!user };
}
