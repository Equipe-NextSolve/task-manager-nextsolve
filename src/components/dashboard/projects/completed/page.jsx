"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import CardTask from "@/components/CardTask";
import { getTasksByStatus } from "@/services/taskService";

export default function ConcluidosPageComponent() {
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
        // Busca pelo status: "concluido"
        const dados = await getTasksByStatus("concluido");
        setTasks(dados);
      } catch (error) {
        console.error("Erro ao carregar concluídos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <header className="mb-10 pb-6 border-b border-slate-800/60">
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

      <main className="flex flex-wrap gap-6 justify-start items-start">
        {loading ? (
          <p className="text-slate-500 italic">Carregando histórico...</p>
        ) : tasks.length > 0 ? (
          tasks.map((tarefa) => (
            <div key={tarefa.id}>
              <CardTask
                status={tarefa.status}
                titulo={tarefa.title || tarefa.titulo || "Sem Título"}
                descricao={tarefa.description || tarefa.descricao || "Sem descrição"}
                devResponsavel={tarefa.devResponsavel || "Equipe"}
                prazo={tarefa.prazo || "Finalizado"}
                prioridade={getStyleByPriority(tarefa.prioridade)}
              />
            </div>
          ))
        ) : (
          <p className="text-slate-500 italic">Nenhum projeto concluído encontrado.</p>
        )}
      </main>
    </div>
  );
}