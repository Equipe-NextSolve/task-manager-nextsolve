import { prioridadeTarefas } from "@/utils/prioridade-tarefas";
import { statusTasks } from "@/utils/status-tasks";

export const tarefasAtrasadas = [
  {
    id: 1,
    title: "App Mobile 4",
    description: "Lorem ipsum 5.",
    devResponsavel: "Guilherme",
    prazo: "29/01/2025",
    prioridade: prioridadeTarefas.media,
    status: statusTasks.aFazer,
  },
];

export const tarefasAndamento = [
  {
    id: 1,
    title: "App Mobile 3",
    description: "Lorem ipsum 1.",
    devResponsavel: "Guilherme",
    prazo: "30/01/2025",
    prioridade: prioridadeTarefas.baixa,
    status: statusTasks.fazendo,
  },
  {
    id: 2,
    title: "App Mobile 2",
    description: "Lorem ipsum 2.",
    devResponsavel: "Gustavo",
    prazo: "28/01/2025",
    prioridade: prioridadeTarefas.alta,
    status: statusTasks.paraTeste,
  },
];

export const tarefasConcluidas = [
  {
    id: 1,
    title: "App Mobile 1",
    description: "Lorem ipsum 3.",
    devResponsavel: "Lucas",
    prazo: "25/01/2025",
    prioridade: prioridadeTarefas.baixa,
    status: statusTasks.concluido,
  },
];
