"use client";
import { 
  Rocket, 
  CheckCircle2, 
  RefreshCcw, 
  ExternalLink, 
  Clock, 
  Server,
  Activity
} from "lucide-react";

export default function DeployPage() {
  const activeDeploys = [
    {
      id: 1,
      env: "Produção",
      status: "Sucesso",
      version: "v2.4.0-stable",
      updated: "Há 2 horas",
      url: "nextsolve.com",
    },
    {
      id: 2,
      env: "Staging",
      status: "Building",
      version: "v2.5.0-rc.1",
      updated: "Agora",
      url: "staging.nextsolve.com",
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold italic text-slate-200 flex items-center gap-3">
          <Rocket className="text-cyan-400" /> Deploy & CI/CD
        </h1>
        <p className="text-slate-500">Monitore seus ambientes e pipelines de publicação.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeDeploys.map((deploy) => (
          <div key={deploy.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">
                  {deploy.env}
                </span>
                <h3 className="text-xl font-bold mt-2 text-slate-100">{deploy.version}</h3>
              </div>
              <div className={`flex items-center gap-2 text-sm font-medium ${
                deploy.status === "Sucesso" ? "text-emerald-400" : "text-amber-400"
              }`}>
                {deploy.status === "Sucesso" ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <RefreshCcw size={16} className="animate-spin" />
                )}
                {deploy.status}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Domínio principal:</span>
                <a href={`https://${deploy.url}`} target="_blank" className="text-slate-300 flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  {deploy.url} <ExternalLink size={12} />
                </a>
              </div>
              <div className={`flex items-center justify-between text-sm`}>
                <span className="text-slate-500">Último build:</span>
                <span className="text-slate-300">{deploy.updated}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold py-2.5 rounded-lg transition">
                Logs do Build
              </button>
              <button className="flex-1 border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-bold py-2.5 rounded-lg transition">
                Rollback
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
          <h2 className="font-bold text-slate-200 flex items-center gap-2 text-sm">
            <Activity size={16} className="text-slate-400" /> Atividade Recente da Pipeline
          </h2>
          <span className="text-[10px] text-slate-500 font-mono">ID: CI-99283</span>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between text-xs border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-4">
                <Server size={14} className="text-slate-600" />
                <span className="text-slate-300 font-mono">commit-a7d2f{i}</span>
                <span className="text-slate-500 hidden md:inline">Merged branch 'main' into production</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Há {i * 5} horas</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}