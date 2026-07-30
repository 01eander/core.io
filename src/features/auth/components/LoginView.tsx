import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

interface LoginViewProps {
  onLogin: (role: 'admin' | 'student' | 'parent') => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoadingRole, setIsLoadingRole] = useState<'admin' | 'student' | 'parent' | null>(null);

  const handleLogin = (role: 'admin' | 'student' | 'parent') => {
    setIsLoadingRole(role);
    // Simulate network delay for effect
    setTimeout(() => {
      onLogin(role);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden animate-in fade-in duration-500">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
        <img 
          src="/oleanderblancocorrecto.png" 
          alt="Oleander Soft" 
          className="h-48 object-contain mb-8 hover:scale-105 transition-transform duration-500" 
        />
        <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
          Bienvenido a Core<span className="text-indigo-400">.io</span>
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          El sistema operativo para colegios modernos
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-12 border border-slate-800">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Correo Electrónico
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 px-3 py-3 border border-slate-700 rounded-xl shadow-sm bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  placeholder="admin@colegio.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Contraseña
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 px-3 py-3 border border-slate-700 rounded-xl shadow-sm bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-slate-700 rounded bg-slate-950"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => handleLogin('admin')}
                disabled={isLoadingRole !== null}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-md shadow-indigo-900/30 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all disabled:opacity-70 cursor-pointer"
              >
                {isLoadingRole === 'admin' ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Autenticando...
                  </>
                ) : (
                  <>
                    Entrar como Administrador
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleLogin('student')}
                disabled={isLoadingRole !== null}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-indigo-500/30 rounded-xl text-sm font-bold text-indigo-300 bg-indigo-900/20 hover:bg-indigo-900/40 focus:outline-none transition-all disabled:opacity-70 cursor-pointer"
              >
                {isLoadingRole === 'student' ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Preparando Portal...
                  </>
                ) : (
                  <>
                    🎓 Entrar como Alumno (Demo)
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleLogin('parent')}
                disabled={isLoadingRole !== null}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-indigo-500/30 rounded-xl text-sm font-bold text-indigo-300 bg-indigo-900/20 hover:bg-indigo-900/40 focus:outline-none transition-all disabled:opacity-70 cursor-pointer"
              >
                {isLoadingRole === 'parent' ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Entrando como Tutor...
                  </>
                ) : (
                  <>
                    👨‍👩‍👧 Entrar como Padre/Tutor (Demo)
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-500">
                  Versión Demo
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center text-xs font-medium text-slate-500">
              Cualquier correo y contraseña permitirán el acceso.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
