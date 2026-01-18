import CardTask from "@/components/CardTask";

export default function ProjectsInProgress() {
  return (
    <div className="flex flex-col">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-cyan-400 italic">
          Projetos em Andamento
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardTask 
          status="andamento" 
          title="Desenvolver componente de Tabela de Dados" 
          description="Tabela reutilizável com ordenação, paginação e filtro para ser usada em relatórios." 
        />
        <CardTask 
          status="andamento" 
          title="Desenvolver componente de Tabela de Dados" 
          description="Tabela reutilizável com ordenação, paginação e filtro para ser usada em relatórios." 
        />
      </div>
    </div>
  );
}