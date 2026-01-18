"use client";
import CardTask from "@/components/CardTask";

export default function AtrasadosPage() {
  return (
    <div className="p-8 ml-64 bg-slate-950 min-h-screen text-slate-100">
      <h1 className="text-3xl font-bold text-red-400 mb-6">Projetos Atrasados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardTask 
          status="atrasado" 
          title="Refatoração de API" 
          description="Atrasado devido a bugs no middleware de autenticação." 
        />
      </div>
    </div>
  );
}