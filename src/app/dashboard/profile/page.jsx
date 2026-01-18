"use client";
import { auth } from "@/services/firebaseConfig";
import { UserCircle, Mail, Calendar } from "lucide-react";

export default function ProfilePage() {
  const user = auth.currentUser;

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-slate-200 mb-8">Meu Perfil</h1>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border-2 border-cyan-500">
            <UserCircle size={48} className="text-slate-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.displayName || "Desenvolvedor Fulls Stack"}</h2>
            <p className="text-slate-500 text-sm">Nível: Desenvolvedor Jr</p>
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <Mail className="text-cyan-400" size={18} />
            <span className="text-slate-300">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <Calendar className="text-cyan-400" size={18} />
            <span className="text-slate-300">Membro desde Jan 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}