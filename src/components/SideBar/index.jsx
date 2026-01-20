"use client";

import { signOut } from "firebase/auth";
import {
  AlertCircle,
  Bell,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  FileText,
  FolderKanban,
  GitBranch,
  LayoutDashboard,
  LogOut,
  Rocket,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/services/firebaseConfig";
import { requireLoginOrRedirect } from "@/utils/require-login-or-redirect";

export default function SideBar() {
  const router = useRouter();
  const [openProjetos, setOpenProjetos] = useState(true);
  const [openDev, setOpenDev] = useState(false);

  requireLoginOrRedirect()

  async function handleLogout() {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Erro ao sair:", err.message);
    }
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-30">
      <div className="p-6">
        <h2 className="text-cyan-400 font-bold text-xl tracking-tighter">
          NEXTSOLVE
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
        {/* Link Principal Dashboard */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg transition-all group"
        >
          <LayoutDashboard size={18} className="group-hover:text-cyan-400" />
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* Menu Projetos */}
        <div>
          <button
            type="button"
            onClick={() => setOpenProjetos(!openProjetos)}
            className="flex items-center justify-between w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <FolderKanban size={18} />
              <span className="font-medium">Projetos</span>
            </div>
            {openProjetos ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          {openProjetos && (
            <div className="ml-9 mt-1 space-y-1">
              <Link
                href="/dashboard/projects/router"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Clock size={14} /> Em andamento
              </Link>
              <Link
                href="/dashboard/projects/completed"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors"
              >
                <CheckCircle size={14} /> Concluídos
              </Link>
              <Link
                href="/dashboard/projects/late"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-red-400 transition-colors"
              >
                <AlertCircle size={14} /> Atrasados
              </Link>
            </div>
          )}
        </div>

        {/* Menu Dev */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setOpenDev(!openDev)}
            className="flex items-center justify-between w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <Code2 size={18} />
              <span className="font-medium">Dev</span>
            </div>
            {openDev ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {openDev && (
            <div className="ml-9 mt-1 space-y-1">
              <Link
                href="/dashboard/dev/repositories"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <GitBranch size={14} /> Repositórios
              </Link>
              <Link
                href="/dashboard/dev/docs"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <FileText size={14} /> Docs / API
              </Link>
              {/* NOVO LINK DE DEPLOY ADICIONADO AQUI */}
              <Link
                href="/dashboard/dev/deploy"
                className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-orange-400 transition-colors"
              >
                <Rocket size={14} /> Deploy
              </Link>
            </div>
          )}
        </div>

        <div className="h-px bg-slate-800 my-4"></div>

        <Link
          href="/dashboard/notifications"
          className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg"
        >
          <Bell size={18} />
          <span className="font-medium">Notificações</span>
        </Link>
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg"
        >
          <UserCircle size={18} />
          <span className="font-medium">Perfil</span>
        </Link>
      </nav>

      {/* Botão de Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-3 text-red-400 hover:bg-red-400/10 transition-all rounded-lg cursor-pointer"
        >
          <LogOut size={18} /> <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}
