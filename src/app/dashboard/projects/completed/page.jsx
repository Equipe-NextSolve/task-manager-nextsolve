"use client";
import CardTask from "@/components/CardTask";

export default function ConcluidosPage() {
  return (
    <div className="p-8 ml-64 bg-slate-950 min-h-screen text-slate-100">
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Projetos Concluídos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardTask 
          status="concluido" 
          title="App Mobile" 
          description="Finalizado o deploy na App Store e Play Store." 
        />
      </div>
    </div>
  );
}