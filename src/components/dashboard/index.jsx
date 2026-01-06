"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, LogOut, CheckCircle, Settings, Bell, 
  FolderKanban, Code2, UserCircle, ChevronDown, ChevronRight,
  GitBranch, FileText, Rocket, Clock, AlertCircle
} from "lucide-react"; 
import CardTask from "../CardTask"; 

export default function DashboardContent() {
  const router = useRouter();
  
  const [openProjetos, setOpenProjetos] = useState(true);
  const [openDev, setOpenDev] = useState(false);

  async function handleLogout() {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
        <div className="p-6">
          <h2 className="text-cyan-400 font-bold text-xl tracking-tighter">NEXTSOLVE</h2>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg transition-all">
            <LayoutDashboard size={18} />
            <span className="font-medium">Dashboard</span>
          </button>

          <div>
            <button 
              onClick={() => setOpenProjetos(!openProjetos)}
              className="flex items-center justify-between w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <FolderKanban size={18} />
                <span className="font-medium">Projetos</span>
              </div>
              {openProjetos ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {openProjetos && (
              <div className="ml-9 mt-1 space-y-1">
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <Clock size={14} /> Em andamento
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                  <CheckCircle size={14} /> Concluídos
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-red-400 transition-colors">
                  <AlertCircle size={14} /> Atrasados
                </button>
              </div>
            )}
          </div>

          <div className="mt-2">
            <button 
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
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <GitBranch size={14} /> Repositórios
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <FileText size={14} /> Docs / API
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <Rocket size={14} /> Deploy
                </button>
              </div>
            )}
          </div>

          <div className="h-px bg-slate-800 my-4"></div>

          <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg">
            <Bell size={18} />
            <span className="font-medium">Notificações</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-lg">
            <UserCircle size={18} />
            <span className="font-medium">Perfil</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 text-red-400 hover:bg-red-400/10 transition-all rounded-lg"
          >
            <LogOut size={18} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold italic tracking-tight text-slate-200">Visão Geral</h1>
            <p className="text-slate-500 mt-1">Status atual dos seus projetos e desenvolvimento.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2 px-4 rounded-full flex items-center gap-2 text-emerald-500">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-bold uppercase tracking-widest">Live System</span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CardTask status="andamento" title="Site Institucional" description="Desenvolvimento da home page e integração com Firebase." />
          <CardTask status="concluido" title="App Mobile" description="Finalizado o deploy na App Store." />
          <CardTask status="atrasado" title="Refatoração de API" description="Atrasado devido a bugs no middleware de autenticação." />
          <CardTask status="andamento" title="Dashboard Financeiro" description="Criação de gráficos com Chart.js." />
        </div>
      </main>
    </div>
  );
}