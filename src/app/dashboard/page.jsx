import DashboardContent from "@/components/dashboard";

export default function DashboardPage() {
  return <DashboardContent />;
}
"use client";
import { BarChart3, GitCommit, LayoutGrid, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import CardTask from "@/components/CardTask";

export default function DashboardHome() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold italic text-slate-200 tracking-tight">Visão Geral</h1>
          <p className="text-slate-500">Bem-vindo de volta! Aqui está o resumo dos seus projetos.</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">Status do Sistema</p>
          <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Operacional
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total de Projetos" value="12" trend="+2" icon={<LayoutGrid size={20}/>} color="text-cyan-400" />
        <StatCard title="Commits (Mês)" value="248" trend="+18%" icon={<GitCommit size={20}/>} color="text-emerald-400" />
        <StatCard title="Tempo Ativo" value="164h" trend="-4%" icon={<BarChart3 size={20}/>} color="text-purple-400" />
        <StatCard title="Colaboradores" value="5" trend="0" icon={<Users size={20}/>} color="text-orange-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-300 flex items-center gap-2">
              <TrendingUp size={18} className="text-cyan-400" /> Produtividade Semanal
            </h3>
            <span className="text-xs text-slate-500">Últimos 7 dias</span>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
              <div key={i} className="group relative w-full flex flex-col items-center">
                <div 
                  style={{ height: `${height}%` }} 
                  className="w-full bg-slate-800 group-hover:bg-cyan-500/50 rounded-t-md transition-all duration-300"
                />
                <span className="text-[10px] text-slate-600 mt-2">S{i+1}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="font-bold text-slate-300 mb-6">Tarefas por Status</h3>
          <div className="flex-1 flex items-center justify-around">
            <div className="relative w-36 h-36 rounded-full border-[12px] border-slate-800 border-t-cyan-500 border-r-emerald-500 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-100">84%</p>
                <p className="text-[10px] text-slate-500 uppercase">Concluído</p>
              </div>
            </div>
            <div className="space-y-2">
              <LegendItem color="bg-cyan-500" label="Em andamento" />
              <LegendItem color="bg-emerald-500" label="Concluído" />
              <LegendItem color="bg-red-500" label="Atrasado" />
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in slide-in-from-bottom-4 duration-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-300">Projetos Prioritários</h2>
          <button className="text-sm text-cyan-400 hover:underline flex items-center gap-1">
            Ver todos <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardTask status="andamento" title="Dashboard NextSolve" description="Finalizar integração dos gráficos com dados reais do Firebase." />
          <CardTask status="atrasado" title="Refatoração de API" description="Corrigir gargalo de performance no endpoint de autenticação." />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color, trend }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:bg-slate-800/50 transition-colors group cursor-default">
      <div className="flex justify-between items-start mb-4">
        <span className={`p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-slate-700 ${color}`}>
          {icon}
        </span>
        {trend !== "0" && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-slate-100 mt-1 tracking-tight">{value}</p>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-sm ${color}`} />
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}
