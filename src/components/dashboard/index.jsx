"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";
import { requireLoginOrRedirect } from "@/utils/require-login-or-redirect";
import CardTask from "../CardTask";

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
    <div className="flex w-full p-2 gap-2">
      <div className="w-1/5 bg-app-alternative-darkBlue rounded-lg">
        <div className="flex flex-col gap-2 min-h-screen items-center justify-center text-app-secundary-white">
          <h2 className="text-xl">SIDE-BAR</h2>
          <h3 className="text-xs">COMMING...</h3>
        </div>
      </div>
      <div className="w-4/5 bg-app-alternative-darkBlue rounded-lg">
        <div className="flex flex-col gap-4 min-h-screen text-app-secundary-white p-4">
          <div className="flex justify-end">
            <button
              className="min-w-32 bg-red-500 rounded-lg p-3 cursor-pointer hover:bg-red-700 transition"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="grid max-[600px]:grid-cols-1 max-[950px]:grid-cols-2 min-[951px]:grid-cols-3 gap-3">
            <CardTask />
            <CardTask />
            <CardTask />
            <CardTask />
            <CardTask />
          </div>
        </div>
      </div>
    </div>
  );
}
