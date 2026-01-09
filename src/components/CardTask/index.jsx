export default function CardTask({
  titulo,
  descricao,
  prazo,
  prioridade,
  devResponsavel,
  status,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-app-background border-2 border-app-details-cyan hover:shadow-xl/10 transition shadow-app-details-cyan p-5">
      <div className="flex gap-2">
        <h3 className="text-lg font-bold text-app-secundary-white w-full">
          {titulo}
        </h3>
        <div
          className={`px-2 py-1 rounded-lg w-fit self-start ${prioridade.tagColor.bgAndBorderStyles}`}
        >
          <p className={`text-xs ${prioridade.tagColor.textStyles} font-bold`}>
            {prioridade.tagName}
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-sm">{descricao}</p>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">Prazo:</span>
          <span className="text-gray-400">{prazo}</span>
        </p>
      </div>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">
            Desenvolvedor respondsavel:
          </span>
          <span className="text-gray-400">{devResponsavel}</span>
        </p>
      </div>

      <div>
        <p className="text-sm flex gap-1">
          <span className="text-app-secundary-white">Status:</span>
          <span className="text-gray-400">{status}</span>
        </p>
      </div>
    </div>
  );
}
