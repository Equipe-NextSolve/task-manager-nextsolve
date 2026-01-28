"use client";

import { useEffect, useState } from "react";
import { LayoutGrid, Users } from "lucide-react";
import GraficoPizzaTasks from "../GraficoPizzaTasks";
import CardTask from "@/components/CardTask"; // Importando o Card
import { getTasks } from "@/services/taskService"; // Usando seu Service para ficar organizado

export default function DashboardHomeComponent() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca as tarefas assim que carrega
  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks(); // Usa a função do seu service
        setTasks(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  // Função auxiliar de Estilo (igual a que estava no page.jsx)
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

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      {/* CABEÇALHO */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold italic text-slate-200 tracking-tight">
            Visão Geral
          </h1>
          <p className="text-slate-500">
            Bem-vindo de volta! Aqui está o resumo dos seus projetos.
          </p>
        </div>
      </div>

      {/* ESTATÍSTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <StatCard
          title="Total de Projetos"
          value={tasks.length} // Agora mostra o número real!
          icon={<LayoutGrid size={20} />}
          color="text-cyan-400"
        />
        <StatCard
          title="Colaboradores"
          value="5"
          icon={<Users size={20} />}
          color="text-orange-400"
        />
      </div>

      {/* GRÁFICO */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="font-bold text-slate-300 mb-4">Tarefas por Status</h3>
          <GraficoPizzaTasks />
        </div>
      </div>

      {/* --- AQUI É A PARTE NOVA: LISTA DE TAREFAS (CARDS) --- */}
      <div>
        <h2 className="text-xl font-bold text-slate-300 mb-4">Projetos Recentes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading ? (
            <p className="text-slate-500">Carregando tarefas...</p>
          ) : tasks.length === 0 ? (
            <p className="text-slate-500">Nenhuma tarefa encontrada.</p>
          ) : (
            tasks.map((task) => (
              <CardTask 
                key={task.id}
                // Tratamento para campos em PT ou EN
                titulo={task.titulo || task.title || "Sem Título"} 
                descricao={task.descricao || task.description || "Sem descrição"}
                prazo={task.prazo || "Indefinido"}
                devResponsavel={task.devResponsavel || "Equipe"} 
                status={task.status || "Pendente"}
                prioridade={getStyleByPriority(task.prioridade || task.priority)}
              />
            ))
          )}
        </div>
      </div>

    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
      <div className="flex justify-between items-start mb-4">
        <span className={`p-2 bg-slate-950 rounded-lg ${color}`}>{icon}</span>
      </div>
      <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-slate-100 mt-1">{value}</p>
    </div>
  );
}