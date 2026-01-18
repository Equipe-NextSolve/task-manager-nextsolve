"use client";
import { Rocket, CheckCircle2, Clock, Terminal, Activity, Globe } from "lucide-react";

export default function DeployPage() {
  const servers = [
    { name: "Production", status: "Online", version: "v1.2.4", uptime: "12 dias" },
    { name: "Staging", status: "Building", version: "v1.3.0-rc", uptime: "---" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-200">Ambientes de Deploy</h1>
        <p className="text-slate-500">Gerencie suas instâncias e monitore builds em tempo real.</p>
      </div>

      {/* Grid de Servidores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servers.map((server) => (
          <div key={server.name} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <Globe className={server.status === "Online" ? "text-emerald-400" : "text-amber-400"} size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                server.status === "Online" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
              }`}>
                {server.status}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">{server.name}</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Versão:</span>
                <span className="text-slate-300 font-mono">{server.version}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Uptime:</span>
                <span className="text-slate-300">{server.uptime}</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-bold transition-all">
              Ver Logs do Console
            </button>
          </div>
        ))}
      </div>

      {/* Histórico de Builds */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex items-center gap-2">
          <Terminal size={18} className="text-cyan-400" />
          <h2 className="font-bold text-sm">Pipeline de Atividade</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-4 text-sm">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span className="text-slate-300 font-medium">Build concluído com sucesso</span>
            <span className="text-slate-500 text-xs ml-auto">há 2 horas</span>
          </div>
          <div className="flex items-center gap-4 text-sm border-t border-slate-800 pt-4">
            <Activity size={16} className="text-amber-500 animate-pulse" />
            <span className="text-slate-300 font-medium">Otimizando assets da aplicação...</span>
            <span className="text-slate-500 text-xs ml-auto">em andamento</span>
          </div>
        </div>
      </div>
    </div>
  );
}