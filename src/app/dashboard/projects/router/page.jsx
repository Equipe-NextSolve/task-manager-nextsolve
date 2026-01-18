"use client";
import CardTask from "@/components/CardTask";

export default function AndamentoPage() {
  return (
    <div className="p-8 ml-64 bg-slate-950 min-h-screen text-slate-100">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Projetos em Andamento</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardTask 
          status="andamento" 
          title="Site Institucional" 
          description="Desenvolvimento da home page e integração com Firebase." 
        />
        <CardTask 
          status="andamento" 
          title="Dashboard Financeiro" 
          description="Criação de gráficos com Chart.js." 
        />
      </div>
    </div>
  );
}