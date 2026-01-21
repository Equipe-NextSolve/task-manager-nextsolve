"use client";

import { addDoc, collection } from "firebase/firestore";
import {
  Calendar,
  FileText,
  NotebookText,
  PlusCircle,
  Tag,
  User,
} from "lucide-react";
import { useState } from "react";
import { db } from "@/services/firebaseConfig";
import { prioridadeTarefas } from "@/utils/prioridade-tarefas";
import { statusTasks } from "@/utils/status-tasks";

export default function NewTaskComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    prazo: "",
    prioridade: prioridadeTarefas.baixa.tagName,
    status: statusTasks.aFazer,
    devResponsavel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit() {
    setIsLoading(true);
    console.log("Formdata submitted:", formData);

    try {
      const docRef = await addDoc(collection(db, "tasks"), formData);
      console.log("Created Task ID:", docRef.id);

      alert("Tarefa criada com sucesso!");
      setFormData({
        titulo: "",
        descricao: "",
        prazo: "",
        prioridade: prioridadeTarefas.baixa.tagName,
        status: statusTasks.aFazer,
        devResponsavel: "",
      });
    } catch (error) {
      console.error("Erro ao criar tarefa: ", error);
      alert("Erro ao criar tarefa. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-app-primary-navyblue text-app-secundary-white px-10 py-20">
      <div className="flex flex-col gap-10 w-full max-w-2xl">
        <header className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-widest text-shadow-md text-shadow-app-details-cyan/50 text-app-details-cyan">
            NOVA TAREFA
          </h1>
          <p className="text-app-glass-transparent">
            Adicione uma nova demanda ao fluxo de trabalho da equipe.
          </p>
        </header>

        <form className="flex flex-col gap-6 bg-app-primary-navyBlack border border-app-details-cyan shadow-app-details-cyan/50 p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="titulo"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <FileText size={14} />
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="O que precisa ser feito?"
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <FileText size={14} />
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Detalhes adicionais..."
              rows={3}
              className="w-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="prazo"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <Calendar size={14} />
              Prazo
            </label>
            <input
              type="date"
              id="prazo"
              name="prazo"
              value={formData.prazo}
              onChange={handleChange}
              required
              className="w-full h-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="prioridade"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <Tag size={14} />
              Prioridade
            </label>
            <select
              id="prioridade"
              name="prioridade"
              value={formData.prioridade}
              onChange={handleChange}
              className="w-full h-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all cursor-pointer"
            >
              {Object.entries(prioridadeTarefas).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.tagName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="status"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <NotebookText size={14} />
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full h-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all cursor-pointer"
            >
              {Object.entries(statusTasks).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="devResponsavel"
              className="flex items-center gap-2 text-sm font-bold text-app-details-cyan tracking-tighter"
            >
              <User size={14} />
              Responsável
            </label>
            <select
              id="devResponsavel"
              name="devResponsavel"
              value={formData.devResponsavel}
              onChange={handleChange}
              className="w-full h-full p-3 bg-app-primary-navyblue border border-app-glass-transparent rounded-lg focus:outline-none focus:border-app-details-cyan focus:ring-1 focus:ring-app-details-cyan transition-all cursor-pointer"
            >
              <option value="">Selecione um desenvolvedor</option>
              <option value="Desenvolvedor 1">Desenvolvedor 1</option>
              <option value="Desenvolvedor 2">Desenvolvedor 2</option>
              <option value="Desenvolvedor 3">Desenvolvedor 3</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSubmit}
              className="disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full py-4 bg-app-details-cyan hover:bg-app-details-cyan/90 text-app-primary-navyblue font-bold rounded-lg transition-all shadow-lg shadow-cyan-400/10 active:scale-[0.98] cursor-pointer"
            >
              {isLoading ? (
                "CRIANDO TAREFA..."
              ) : (
                <>
                  <PlusCircle size={18} />
                  CRIAR TAREFA
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
