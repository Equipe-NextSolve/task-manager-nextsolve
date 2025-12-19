"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "./use-auth-state";

export function requireLoginOrRedirect() {
  const { isAuthenticated, loadingAuthState } = useAuthState();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loadingAuthState && !isAuthenticated) {
      router.push("/login");
    }

    if (!loadingAuthState && isAuthenticated && pathname === "/login") {
      router.push("/dashboard");
    }
  }, [isAuthenticated, loadingAuthState, pathname, router]);
}
