'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

export default function LoginComponent() {
  const [mode, setMode] = useState('login'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
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
      setSuccess('Login realizado com sucesso!');
    
    } catch (err) {
      setError('Erro no login: ' + err.message);
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Senhas não coincidem');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('Senha deve ter pelo menos 8 caracteres, 1 maiúscula e 1 caracter especial');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess('Usuário cadastrado com sucesso!');
      setMode('login');
    } catch (err) {
      setError('Erro no cadastro: ' + err.message);
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setSuccess('Email de redefinição enviado!');
    } catch (err) {
      setError('Erro ao enviar email: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-app-background text-app-secundary-white p-4">
      <div className="bg-app-glass-transparent backdrop-blur-md rounded-lg p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-app-details-cyan">
          {mode === 'login' ? 'Login' : mode === 'register' ? 'Cadastrar' : 'Esqueceu Senha'}
        </h1>

        {error && <p className="text-red-400 mb-4">{error}</p>}
        {success && <p className="text-green-400 mb-4">{success}</p>}

        {mode === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-app-details-cyan text-app-primary-navyblue font-bold rounded hover:bg-opacity-80 disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        )}

        {mode === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-app-details-cyan text-app-primary-navyblue font-bold rounded hover:bg-opacity-80 disabled:opacity-50"
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        )}

        {mode === 'forgot' && (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-app-primary-navyblue border border-app-details-cyan rounded focus:outline-none focus:ring-2 focus:ring-app-details-cyan"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-app-details-cyan text-app-primary-navyblue font-bold rounded hover:bg-opacity-80 disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar Email'}
            </button>
          </form>
        )}

        <div className="mt-6 text-center space-y-2">
          {mode === 'login' && (
            <>
              <button onClick={() => setMode('forgot')} className="text-app-details-cyan hover:underline">
                Esqueceu a senha?
              </button>
              <br />
              <button onClick={() => setMode('register')} className="text-app-details-cyan hover:underline">
                Não tem conta? Cadastrar
              </button>
            </>
          )}
          {mode !== 'login' && (
            <button onClick={() => setMode('login')} className="text-app-details-cyan hover:underline">
              Voltar ao Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
