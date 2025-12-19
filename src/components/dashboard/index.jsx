"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";
import { requireLoginOrRedirect } from "@/utils/require-login-or-redirect";

export default function DashboardComponent() {
  requireLoginOrRedirect();

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex w-full p-3 gap-3">
      <div className="w-1/5 bg-app-alternative-darkBlue rounded-lg">
        <div className="flex flex-col gap-2 min-h-screen items-center justify-center text-app-secundary-white">
          <h2 className="text-xl">SIDE-BAR</h2>
          <h3 className="text-xs">COMMING...</h3>
        </div>
      </div>
      <div className="w-4/5 bg-app-alternative-darkBlue rounded-lg">
        <div className="flex flex-col gap-2 min-h-screen items-center justify-center text-app-secundary-white">
          <h1 className="text-5xl">Dashboard</h1>
          <h2 className="text-xl">/dashboard</h2>
          <button
            className="bg-red-500 rounded-lg p-3 cursor-pointer hover:bg-red-700 transition"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
