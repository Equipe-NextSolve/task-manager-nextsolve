export default function CardTask() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-app-background border-2 border-app-details-cyan p-5">
      <div className="flex gap-2">
        <h3 className="text-lg font-bold text-app-secundary-white w-full">
          Desenvolver componente de Tabela de Dados
        </h3>
        <div className="px-2 py-1 bg-red-800 border-2 border-red-400 rounded-lg w-fit self-start">
          <p className="text-xs text-red-300 font-bold">Alta</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm">
        Tabela reutilizável com ordenação, paginação e filtro para ser usada em
        relatórios.
      </p>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">Prazo:</span>
          <span className="text-gray-400">DD/MM/YYYY</span>
        </p>
      </div>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">
            Desenvolvedor respondsavel:
          </span>
          <span className="text-gray-400">Lorem ipsum</span>
        </p>
      </div>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">Status:</span>
          <span className="text-gray-400">A Fazer</span>
        </p>
      </div>
    </div>
  );
}
