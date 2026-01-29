import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, Timestamp, query, where } from "firebase/firestore";

const COLLECTION_NAME = "tasks";

// Função GET
export const getTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasks;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
};

// Função POST
export const createTask = async (taskData) => {
  try {
    // Adicionando a data de criação automaticamente
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...taskData,
      createdAt: Timestamp.now(),
    });
    console.log("Tarefa criada com ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    throw error;
  }
};

export const getTasksByStatus = async (status) => {
  try {
    // Cria uma query que busca apenas documentos onde o campo "status" é igual ao solicitado
    const q = query(collection(db, COLLECTION_NAME), where("status", "==", status));
    
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasks;
  } catch (error) {
    console.error(`Erro ao buscar tarefas com status ${status}:`, error);
    return [];
  }
};