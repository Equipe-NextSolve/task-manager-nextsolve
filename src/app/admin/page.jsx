"use client";
import { BarChart3, Users, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Membros Ativos", value: "08", icon: Users, color: "text-blue-400" },
    { label: "Produtividade", value: "+12%", icon: BarChart3, color: "text-emerald-400" },
    { label: "Gargalos (Atrasos)", value: "02", icon: AlertCircle, color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen ml-64 p-10 bg-[#020617] text-slate-100 flex flex-col items-start">
      <header className="w-full max-w-5xl mb-12 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-extrabold text-white">Dashboard Administrativo</h1>
        <p className="text-slate-400 mt-2">Visão geral do desempenho da equipe e prazos.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {stats.map((s, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <s.icon className={`${s.color} mb-4 w-8 h-8`} />
            <h3 className="text-2xl font-bold">{s.value}</h3>
            <p className="text-slate-500 text-sm uppercase tracking-tighter">{s.label}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 w-full max-w-5xl bg-slate-900/50 rounded-xl p-6 border border-slate-800">
        <h2 className="font-semibold mb-4 text-emerald-400">Atividade Recente do Time</h2>
        <div className="text-sm text-slate-400 space-y-3">
          <p>• <span className="text-white">Luiz</span> concluiu "Refatoração de API"</p>
          <p>• <span className="text-white">Admin</span> criou nova tarefa para "NextSolve"</p>
        </div>
      </div>
    </div>
  );
}