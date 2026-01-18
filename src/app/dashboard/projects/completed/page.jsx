"use client";
import CardTask from "@/components/CardTask";
import { CheckCircle2 } from "lucide-react";

export default function ConcluidosPage() {
  const tarefasConcluidas = [
    { id: 1, title: "App Mobile", description: "Finalizado o deploy na App Store e Play Store." },
  ];

  return (
    <div className="min-h-screen ml-64 p-8 bg-[#020617] text-slate-100">
      
      <header className="max-w-7xl mb-10 pb-6 border-b border-slate-800/60">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="text-emerald-500 w-5 h-5" />
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Projetos Concluídos
              </h1>
            </div>
            <p className="text-slate-400 text-sm">
              Gerencie e visualize todos os seus marcos finalizados.
            </p>
          </div>
          
          <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-semibold">
            {tarefasConcluidas.length} {tarefasConcluidas.length === 1 ? 'PROJETO' : 'PROJETOS'}
          </div>
        </div>
      </header>

      <main className="flex flex-wrap gap-6 justify-start items-start">
        {tarefasConcluidas.length > 0 ? (
          tarefasConcluidas.map((tarefa) => (
            <div 
              key={tarefa.id} 
              className="w-full max-w-[320px] transition-all duration-300 hover:scale-[1.02]"
            >
               <CardTask 
                status="concluido" 
                title={tarefa.title}
                description={tarefa.description} 
              />
            </div>
          ))
        ) : (
          <p className="text-slate-500 italic">Nenhum projeto encontrado.</p>
        )}
      </main>
    </div>
  );
}