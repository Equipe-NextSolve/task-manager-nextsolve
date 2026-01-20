"use client";

import { Clock } from "lucide-react";
import CardTask from "@/components/CardTask";
import { tarefasAndamento } from "@/mock/tarefas";

export default function ProjectsInProgressComponent() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-start">
      <header className="w-full mb-10">
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
              {tarefasAndamento.length.toString().padStart(2, "0")}
            </span>
            <span className="text-slate-500 text-xs uppercase tracking-widest ml-2 font-semibold">
              Ativos
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-8 justify-start w-full max-w-7xl">
        {tarefasAndamento.map((tarefa) => (
          <div
            key={tarefa.id}
          >
            <CardTask
              status={tarefa.status}
              titulo={tarefa.title}
              descricao={tarefa.description}
              devResponsavel={tarefa.devResponsavel}
              prazo={tarefa.prazo}
              prioridade={tarefa.prioridade}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
