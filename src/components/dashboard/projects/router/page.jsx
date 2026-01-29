"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import CardTask from "@/components/CardTask";
import { getTasksByStatus } from "@/services/taskService";

export default function ProjectsInProgressComponent() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const stylesPrioridade = {
    ALTA: { tagName: "ALTA", tagColor: { bgAndBorderStyles: "bg-red-500/10 border border-red-500/20", textStyles: "text-red-500" }},
    MEDIA: { tagName: "MÉDIA", tagColor: { bgAndBorderStyles: "bg-orange-500/10 border border-orange-500/20", textStyles: "text-orange-500" }},
    BAIXA: { tagName: "BAIXA", tagColor: { bgAndBorderStyles: "bg-emerald-500/10 border border-emerald-500/20", textStyles: "text-emerald-500" }}
  };

  const getStyleByPriority = (prio) => {
    if (!prio) return stylesPrioridade.BAIXA;
    const key = prio.toUpperCase();
    if (key.includes("ALTA")) return stylesPrioridade.ALTA;
    if (key.includes("MÉDIA") || key.includes("MEDIA")) return stylesPrioridade.MEDIA;
    return stylesPrioridade.BAIXA;
  };

  useEffect(() => {
    async function fetchTasks() {
      try {
        const [aFazer, fazendo, emTeste] = await Promise.all([
          getTasksByStatus("aFazer"),    // A fazer
          getTasksByStatus("fazendo"),   // Em Progresso
          getTasksByStatus("paraTeste")  // QA/Teste
        ]);
        
        setTasks([...aFazer, ...fazendo, ...emTeste]);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-start p-6">
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
              {loading ? "--" : tasks.length.toString().padStart(2, "0")}
            </span>
            <span className="text-slate-500 text-xs uppercase tracking-widest ml-2 font-semibold">
              Total
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-8 justify-start w-full max-w-7xl">
        {loading ? (
          <p className="text-slate-500 pl-2">Carregando projetos...</p>
        ) : tasks.length === 0 ? (
          <p className="text-slate-500 pl-2">Nenhum projeto ativo encontrado.</p>
        ) : (
          tasks.map((tarefa) => (
            <div key={tarefa.id}>
              <CardTask
              // Tratamento para campos em PT ou EN
                titulo={tarefa.title || tarefa.titulo || "Sem Título"}
                descricao={tarefa.description || tarefa.descricao || "Sem descrição"}
                devResponsavel={tarefa.devResponsavel || "Equipe"}
                prazo={tarefa.prazo || "Indefinido"}
                status={tarefa.status}
                prioridade={getStyleByPriority(tarefa.prioridade)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}