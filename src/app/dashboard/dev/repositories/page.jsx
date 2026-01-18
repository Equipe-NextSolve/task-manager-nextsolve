"use client";
import { GitBranch, Star, Lock, Globe } from "lucide-react";

export default function RepositoriesPage() {
  const repos = [
    { id: 1, name: "nextsolve-web", type: "private", lang: "TypeScript" },
    { id: 2, name: "backend-firebase-api", type: "private", lang: "Node.js" },
    { id: 3, name: "landing-page-v3", type: "public", lang: "HTML/CSS" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-200 mb-6">Repositórios Git</h1>
      <div className="grid gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between hover:border-cyan-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-800 rounded-lg">
                <GitBranch className="text-cyan-400" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 flex items-center gap-2">
                  {repo.name}
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded-full border border-slate-700 text-slate-500">
                    {repo.type === 'private' ? <Lock size={10} className="inline mr-1"/> : <Globe size={10} className="inline mr-1"/>}
                    {repo.type}
                  </span>
                </h3>
                <p className="text-sm text-slate-500">{repo.lang}</p>
              </div>
            </div>
            <button className="text-xs font-bold text-cyan-400 hover:underline">Acessar GitHub</button>
          </div>
        ))}
      </div>
    </div>
  );
}