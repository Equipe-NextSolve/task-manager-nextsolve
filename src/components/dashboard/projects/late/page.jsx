"use client";

import { AlertCircle } from "lucide-react";
import CardTask from "@/components/CardTask";
import { tarefasAtrasadas } from "@/mock/tarefas";

export default function AtrasadosPageComponent() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-start">
      <header className="w-full mb-10">
        <div className="flex items-center justify-between border-b border-red-900/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <AlertCircle className="text-red-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white italic">
                Projetos Atrasados
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Atenção: Itens que ultrapassaram o prazo estimado.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-red-900/30 px-4 py-2 rounded-xl shadow-sm">
            <span className="text-red-400 font-mono font-bold text-lg">
              {tarefasAtrasadas.length.toString().padStart(2, "0")}
            </span>
            <span className="text-slate-500 text-xs uppercase tracking-widest ml-2 font-semibold">
              Críticos
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-8 justify-start w-full">
        {tarefasAtrasadas.length > 0 ? (
          tarefasAtrasadas.map((tarefa) => (
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
          ))
        ) : (
          <div className="py-10 px-6 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-500">
              Tudo em dia! Nenhum projeto atrasado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
