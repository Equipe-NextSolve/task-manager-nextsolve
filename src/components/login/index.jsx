"use client";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
// Importação dos ícones de olho
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, db } from "../../services/firebaseConfig";

export default function LoginComponent() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para o olho

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess("Login realizado com sucesso!");
      router.push("/dashboard");
    } catch (err) {
      setError(`Erro no login: ${err.message}`);
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Senhas não coincidem");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError(
        "Senha deve ter pelo menos 8 caracteres, 1 maiúscula e 1 caracter especial",
      );
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      await addDoc(collection(db, "users"), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date().toISOString(),
      });

      setSuccess("Usuário cadastrado com sucesso!");
      setMode("login");
    } catch (err) {
      setError(`Erro no cadastro: ${err.message}`);
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setSuccess("Email de redefinição enviado!");
    } catch (err) {
      setError(`Erro ao enviar email: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 bg-linear-to-br from-slate-950 to-cyan-900/20 border-r border-slate-800">
        <div className="max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400 uppercase tracking-wider">
            Sistema de Gestão de Atividades
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Acompanhe métricas, gerencie equipes e otimize seu fluxo de
            trabalho.
          </p>

          <div className="flex justify-center">
            <Image
              width={420}
              height={447}
              src="/assets/imgLogin.png"
              alt="Visualização do Sistema de Gestão"
              className="w-full max-w-md h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-100">
              {mode === "login"
                ? "Acessar Plataforma"
                : mode === "register"
                  ? "Criar Conta"
                  : "Recuperar Senha"}
            </h1>
            <p className="mt-2 text-slate-500">
              {mode === "login"
                ? "Entre com suas credenciais."
                : "Preencha os dados para começar."}
            </p>
          </div>

          <div className="mt-8">
            {error && (
              <div className="p-3 mb-4 text-sm bg-red-900/20 border border-red-500/50 text-red-400 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 mb-4 text-sm bg-emerald-900/20 border border-emerald-500/50 text-emerald-400 rounded-lg">
                {success}
              </div>
            )}

            <form
              onSubmit={
                mode === "login"
                  ? handleLogin
                  : mode === "register"
                    ? handleRegister
                    : handleForgotPassword
              }
              className="space-y-5"
            >
              {mode === "register" && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-slate-300"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-slate-300"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="nome@nextsolve.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Campo de Senha Ajustado com Olho */}
              {mode !== "forgot" && (
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1 text-slate-300"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors p-1 focus:outline-none"
                      aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={20} strokeWidth={2} />
                      ) : (
                        <Eye size={20} strokeWidth={2} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Campo de Confirmar Senha Ajustado com Olho */}
              {mode === "register" && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-1 text-slate-300"
                  >
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 pr-12"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-cyan-400 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all duration-300 disabled:opacity-50 mt-4 shadow-lg shadow-cyan-500/10 active:scale-[0.98] cursor-pointer"
              >
                {loading
                  ? "Processando..."
                  : mode === "login"
                    ? "Entrar"
                    : mode === "register"
                      ? "Cadastrar"
                      : "Enviar Email"}
              </button>
            </form>

            <div className="mt-8 flex flex-col space-y-4 text-sm text-center">
              {mode === "login" ? (
                <>
                  <button
                    type="button"
                    onClick={() => setMode("forgot")}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
                  >
                    Esqueceu sua senha?
                  </button>
                  <div className="h-px bg-slate-800 w-full my-2"></div>
                  <p className="text-slate-400">
                    Novo por aqui?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer"
                    >
                      Crie uma conta
                    </button>
                  </p>
                </>
              ) : (
                <p className="text-slate-400">
                  Já possui conta?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-cyan-400 font-bold hover:underline cursor-pointer"
                  >
                    Fazer Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
