export default function CardTask({
  titulo,
  descricao,
  prazo,
  prioridade,
  devResponsavel,
  status,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-900 border-2 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition shadow-lg p-5 min-w-90">
      <div className="flex gap-2">
        <h3 className="text-xl font-bold text-slate-100 w-full">{titulo}</h3>
          {/* Adicionado Optional Chaining (?.) para evitar erros de undefined */}
        <div
          className={`px-2 py-1 rounded-lg w-fit self-start ${prioridade?.tagColor?.bgAndBorderStyles}`}
        >
          <p
            className={`text-sm ${prioridade?.tagColor?.textStyles} font-bold whitespace-nowrap`}
          >
            {prioridade?.tagName}
          </p>
        </div>
      </div>

      <p className="text-slate-400 text-base line-clamp-2">{descricao}</p>

      <div className="space-y-1">
        <p className="text-sm flex gap-2">
          <span className="text-slate-100 font-medium">Prazo:</span>
          <span className="text-slate-400">{prazo}</span>
        </p>
        <p className="text-sm flex gap-2">
          <span className="text-slate-100 font-medium">Desenvolvedor:</span>
          <span className="text-gray-400">{devResponsavel}</span>
        </p>
        <p className="text-sm flex gap-2">
          <span className="text-slate-100 font-medium">Status:</span>
          <span className="text-gray-400">{status}</span>
        </p>
      </div>
    </div>
  );
}
