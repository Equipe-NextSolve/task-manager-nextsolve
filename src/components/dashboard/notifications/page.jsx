import { Bell, CheckCircle2, Info } from "lucide-react";

export default function NotificationsPageComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-200 mb-6">Notificações</h1>
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border-l-4 border-cyan-500 rounded-r-xl flex items-center gap-3">
          <Info className="text-cyan-500 shrink-0" size={20} />
          <div>
            <p className="text-sm font-medium">
              Seu deploy para produção foi concluído.
            </p>
            <p className="text-xs text-slate-500">Há 2 minutos</p>
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border-l-4 border-emerald-500 rounded-r-xl flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
          <div>
            <p className="text-sm font-medium">
              Projeto "App Mobile" marcado como concluído.
            </p>
            <p className="text-xs text-slate-500">Há 1 hora</p>
          </div>
        </div>
      </div>
    </div>
  );
}
