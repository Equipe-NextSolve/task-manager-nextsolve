"use client";
import CardTask from "@/components/CardTask";
import { Clock } from "lucide-react";

export default function ProjectsInProgress() {
  const tarefasAndamento = [
    { 
      id: 1, 
      title: "Desenvolver componente de Tabela de Dados", 
      description: "Tabela reutilizável com ordenação, paginação e filtro para ser usada em relatórios." 
    },
    { 
      id: 2, 
      title: "Desenvolver componente de Tabela de Dados", 
      description: "Tabela reutilizável com ordenação, paginação e filtro para ser usada em relatórios." 
    },
  ];

  return (
    <div className="min-h-screen ml-64 p-10 bg-[#020617] text-slate-100 flex flex-col items-start">
      
      <header className="w-full max-w-5xl mb-12">
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Clock className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white italic">
                Projetos em Andamento
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Acompanhe o progresso das tarefas atuais.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl shadow-sm">
            <span className="text-cyan-400 font-mono font-bold text-lg">
              {tarefasAndamento.length.toString().padStart(2, '0')}
            </span>
            <span className="text-slate-500 text-xs uppercase tracking-widest ml-2 font-semibold">
              Ativos
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-8 justify-start w-full max-w-7xl">
        {tarefasAndamento.map((tarefa) => (
          <div key={tarefa.id} className="w-80 shrink-0 transition-all duration-300 hover:-translate-y-2">
            <CardTask 
              status="andamento" 
              title={tarefa.title}
              description={tarefa.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}