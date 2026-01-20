"use client";

import { ResponsivePie } from "@nivo/pie";
import { collection, getDocs } from "firebase/firestore";
import { LayoutGrid, Users } from "lucide-react";
import { useEffect } from "react";
import { db } from "@/services/firebaseConfig";
import GraficoPizzaTasks from "../GraficoPizzaTasks";

export default function DashboardHomeComponent() {
  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksCollection = collection(db, "tasks");
        const tasksSnapshot = await getDocs(tasksCollection);

        const tasksList = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Todas as tarefas:", tasksList);
        console.log("Total de tarefas:", tasksList.length);

        // Se quiser ver cada tarefa individualmente:
        tasksList.forEach((task, index) => {
          console.log(`Tarefa ${index + 1}:`, task);
        });
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <StatCard
          title="Total de Projetos"
          value="12"
          icon={<LayoutGrid size={20} />}
          color="text-cyan-400"
        />
        {/* <StatCard
          title="Commits (Mês)"
          value="248"
          icon={<GitCommit size={20} />}
          color="text-emerald-400"
        />
        <StatCard
          title="Tempo Ativo"
          value="164h"
          icon={<BarChart3 size={20} />}
          color="text-purple-400"
        /> */}
        <StatCard
          title="Colaboradores"
          value="5"
          icon={<Users size={20} />}
          color="text-orange-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="font-bold text-slate-300 mb-4">Tarefas por Status</h3>

          <GraficoPizzaTasks />
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

// function LegendItem({ color, label }) {
//   return (
//     <div className="flex items-center gap-2">
//       <div className={`w-3 h-3 rounded-sm ${color}`} />
//       <span className="text-sm text-slate-400">{label}</span>
//     </div>
//   );
// }
