import React, { useState } from 'react';
import { QrCode, Wallet, Flame, ChevronRight, Target, Award, Zap, BookOpen, X, CheckCircle2, User, UploadCloud, Clock, ShoppingBag, Heart, Search, AlertCircle, Shield, CreditCard, Building } from 'lucide-react';

export default function StudentDashboard({ currentTab = 'home' }: { currentTab?: string }) {
  const [balance, setBalance] = useState(450);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showTopupModal, setShowTopupModal] = useState(false);
  const [moodSubmitted, setMoodSubmitted] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [purchaseError, setPurchaseError] = useState<string | null>(null);

  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'transfer' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleTopupSubmit = () => {
    if (!paymentMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setBalance(b => b + 200);
        setShowTopupModal(false);
        setPaymentSuccess(false);
        setPaymentMethod(null);
      }, 2000);
    }, 1500);
  };

  const handlePayment = () => {
    setBalance(b => b - 45);
    setShowQrModal(false);
  };

  const handlePurchase = (price: number, itemName: string) => {
    if (balance >= price) {
      setBalance(b => b - price);
      setPurchaseSuccess(itemName);
      setPurchaseError(null);
      setTimeout(() => setPurchaseSuccess(null), 3000);
    } else {
      setPurchaseError('Saldo insuficiente para comprar ' + itemName);
      setTimeout(() => setPurchaseError(null), 3000);
    }
  };

  const renderSmartId = () => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 shadow-2xl relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="bg-slate-900 rounded-[22px] p-5 relative z-10 border border-slate-700/50">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-slate-800 rounded-full border-2 border-indigo-500 p-0.5 overflow-hidden">
              <img src="/sonic_avatar.png" alt="Mateo" className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h3 className="font-black text-white text-lg leading-tight">Mateo López</h3>
              <p className="text-indigo-400 text-xs font-bold mt-0.5">ID: 24-0982-A</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1">
            <QrCode className="text-slate-900" size={32} />
          </div>
        </div>
        <div className="bg-slate-950 rounded-xl p-3 flex justify-between items-center border border-slate-800">
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status Acceso</p>
            <p className="text-emerald-400 font-bold text-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Permitido
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Grado</p>
            <p className="text-white font-bold text-sm">3° Secundaria</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-5 text-white shadow-lg shadow-indigo-900/30 relative overflow-hidden h-full">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex justify-between items-center mb-1 relative z-10">
        <div className="flex items-center gap-2">
          <Wallet size={16} className="text-indigo-200" />
          <span className="text-indigo-200 font-semibold text-sm">Core Wallet</span>
        </div>
        <button 
          onClick={() => setShowTopupModal(true)}
          className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm cursor-pointer"
        >
          Recargar
        </button>
      </div>
      
      <div className="animate-in fade-in duration-300">
        <h2 className="text-4xl font-black tracking-tighter mb-4">
          ${Math.floor(balance)}.<span className="text-indigo-300 text-2xl">00</span>
        </h2>
        
        <button 
          onClick={() => setShowQrModal(true)}
          className="w-full bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/10 flex justify-between items-center cursor-pointer hover:bg-black/30 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <QrCode size={14} />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Pagar en Cafetería</p>
              <p className="text-[10px] text-indigo-200">Generar código de 1 solo uso</p>
            </div>
          </div>
          <ChevronRight size={16} className="text-indigo-300" />
        </button>
      </div>
    </div>
  );

  const renderAcademics = () => (
    <div>
      <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3 pl-1">Rendimiento Semanal</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-3xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
          <Flame size={28} className="text-orange-500 mb-2" />
          <h4 className="text-3xl font-black text-white">5</h4>
          <p className="text-xs text-slate-400 font-semibold mt-1">Días en Racha</p>
          <p className="text-[9px] text-slate-500 mt-1">Entregas a tiempo</p>
        </div>
        
        <div className="bg-slate-800 rounded-3xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
          <Target size={28} className="text-emerald-400 mb-2" />
          <h4 className="text-3xl font-black text-white">92%</h4>
          <p className="text-xs text-slate-400 font-semibold mt-1">Asistencia</p>
          <p className="text-[9px] text-emerald-500 font-bold mt-1">+2% vs mes pasado</p>
        </div>
      </div>
    </div>
  );

  const renderPassport = () => (
    <div>
      <div className="flex justify-between items-end mb-3 pl-1 pr-1">
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Pasaporte de Talentos</h3>
        {currentTab === 'home' && <span className="text-indigo-400 text-xs font-bold cursor-pointer hover:text-indigo-300">Ver todo</span>}
      </div>
      <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <span className="text-2xl">🏆</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-sm">Rango: Explorador Pro</h4>
            <div className="w-full bg-slate-900 rounded-full h-1.5 mt-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full w-[70%]"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">300 XP para subir de nivel</p>
          </div>
        </div>

        <p className="text-xs font-bold text-slate-300 mb-3">Insignias Recientes</p>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap size={20} className="text-amber-500" />
            </div>
            <span className="text-[9px] font-bold text-slate-400">Lógica</span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen size={20} className="text-sky-500" />
            </div>
            <span className="text-[9px] font-bold text-slate-400">Letras</span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer opacity-40 grayscale">
            <div className="w-12 h-12 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
              <Award size={20} className="text-slate-400" />
            </div>
            <span className="text-[9px] font-bold text-slate-500">Bloqueado</span>
          </div>
        </div>
      </div>
    </div>
  );



  const renderMoodTracker = () => (
    <div className="mb-6 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
      {!moodSubmitted ? (
        <div className="animate-in fade-in duration-500">
          <div className="flex items-center gap-2 mb-4">
            <Heart size={16} className="text-rose-500" />
            <h3 className="text-white font-bold text-sm">¿Cómo te sientes hoy, Mateo?</h3>
          </div>
          <div className="flex justify-between items-center px-2">
            {['😭', '🙁', '😐', '🙂', '🤩'].map((emoji, i) => (
              <button 
                key={i} 
                onClick={() => setMoodSubmitted(true)}
                className="text-4xl hover:scale-125 transition-transform cursor-pointer"
              >
                {emoji}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 text-center mt-3">Tu bienestar es lo más importante para nosotros.</p>
        </div>
      ) : (
        <div className="animate-in zoom-in duration-300 flex flex-col items-center justify-center py-2 text-center">
          <CheckCircle2 size={24} className="text-emerald-400 mb-2" />
          <h3 className="text-white font-bold text-sm">¡Gracias por compartirlo!</h3>
          <p className="text-slate-400 text-xs mt-1">Que tengas un excelente día de clases.</p>
        </div>
      )}
    </div>
  );

  const renderMarket = () => (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-white font-black text-xl flex items-center gap-2">
              <ShoppingBag className="text-indigo-400" /> Bazar Escolar
            </h2>
            <p className="text-slate-400 text-xs">Compra y vende seguro en tu escuela</p>
          </div>
          <div className="bg-slate-800 rounded-xl px-3 py-1.5 border border-slate-700">
            <p className="text-[10px] text-slate-400 uppercase font-bold text-center">Mi Saldo</p>
            <p className="text-emerald-400 font-bold">${Math.floor(balance)}.00</p>
          </div>
        </div>
        
        <div className="relative mb-6">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar libros, uniformes..." 
            className="w-full bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {purchaseSuccess && (
          <div className="mb-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="text-emerald-400" size={20} />
            <p className="text-emerald-100 text-sm font-bold">¡Compraste: {purchaseSuccess}!</p>
          </div>
        )}
        
        {purchaseError && (
          <div className="mb-4 bg-red-500/20 border border-red-500/50 rounded-xl p-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="text-red-400" size={20} />
            <p className="text-red-100 text-sm font-bold">{purchaseError}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-3 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <div>
              <div className="w-full h-24 bg-slate-700 rounded-xl mb-3 flex items-center justify-center text-3xl">📚</div>
              <h4 className="text-white font-bold text-xs mb-1">Libro Biología 2do Grado</h4>
              <p className="text-slate-400 text-[10px] mb-2 line-clamp-2">Usado, en buen estado. Tiene algunas notas a lápiz.</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700">
              <span className="text-white font-black text-sm">$120.00</span>
              <button onClick={() => handlePurchase(120, 'Libro Biología')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                Comprar
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-3 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <div>
              <div className="w-full h-24 bg-slate-700 rounded-xl mb-3 flex items-center justify-center text-3xl">🧥</div>
              <h4 className="text-white font-bold text-xs mb-1">Chamarra Oficial (Talla 14)</h4>
              <p className="text-slate-400 text-[10px] mb-2 line-clamp-2">Casi nueva, se usó medio ciclo escolar.</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700">
              <span className="text-white font-black text-sm">$250.00</span>
              <button onClick={() => handlePurchase(250, 'Chamarra Oficial')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                Comprar
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-3 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <div>
              <div className="w-full h-24 bg-slate-700 rounded-xl mb-3 flex items-center justify-center text-3xl">📐</div>
              <h4 className="text-white font-bold text-xs mb-1">Kit de Geometría</h4>
              <p className="text-slate-400 text-[10px] mb-2 line-clamp-2">Completo, incluye compás de precisión.</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700">
              <span className="text-white font-black text-sm">$45.00</span>
              <button onClick={() => handlePurchase(45, 'Kit de Geometría')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                Comprar
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-3 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <div>
              <div className="w-full h-24 bg-slate-700 rounded-xl mb-3 flex items-center justify-center text-3xl">🃏</div>
              <h4 className="text-white font-bold text-xs mb-1">Cartas Coleccionables</h4>
              <p className="text-slate-400 text-[10px] mb-2 line-clamp-2">Lote de 10 cartas brillantes raras.</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700">
              <span className="text-white font-black text-sm">$80.00</span>
              <button onClick={() => handlePurchase(80, 'Cartas')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                Comprar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const renderHouseSystem = () => (
    <div className="md:col-span-2 mt-6 md:mt-0">
      <div className="flex justify-between items-end mb-3 pl-1 pr-1">
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Sistema de Casas</h3>
        <span className="text-indigo-400 text-xs font-bold cursor-pointer hover:text-indigo-300">Ver Ranking Completo</span>
      </div>
      <div className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        {/* Decoración */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
          <div className="flex items-center gap-5 md:border-r md:border-slate-800 md:pr-12">
            <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center border-2 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
              <span className="text-4xl">🐉</span>
            </div>
            <div>
              <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-1">Tu Casa</p>
              <h4 className="text-3xl font-black text-white tracking-tight">Dragones</h4>
              <p className="text-xs text-emerald-400 mt-1 font-bold">Liderando por 150 pts</p>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {/* Rank 1 */}
            <div className="bg-indigo-500/20 border border-indigo-500/50 rounded-xl p-3 flex justify-between items-center transition-transform hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="font-black text-indigo-400 w-5 text-center">1</span>
                <span className="text-xl">🐉</span>
                <span className="font-bold text-white text-sm">Dragones</span>
              </div>
              <span className="font-black text-white">1,250 <span className="text-indigo-400 text-[10px] uppercase">pts</span></span>
            </div>
            {/* Rank 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 flex justify-between items-center transition-transform hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="font-black text-slate-500 w-5 text-center">2</span>
                <span className="text-xl">🦅</span>
                <span className="font-bold text-slate-300 text-sm">Águilas</span>
              </div>
              <span className="font-black text-slate-300">1,100 <span className="text-slate-500 text-[10px] uppercase">pts</span></span>
            </div>
            {/* Rank 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 flex justify-between items-center transition-transform hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="font-black text-slate-500 w-5 text-center">3</span>
                <span className="text-xl">🐺</span>
                <span className="font-bold text-slate-400 text-sm">Lobos</span>
              </div>
              <span className="font-black text-slate-400">950 <span className="text-slate-500 text-[10px] uppercase">pts</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="mt-8 md:mt-10">
      <div className="flex justify-between items-end mb-3 pl-1 pr-1">
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Tareas Pendientes</h3>
        <span className="text-indigo-400 text-xs font-bold cursor-pointer hover:text-indigo-300">Ver Calendario</span>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        
        {/* Tarea 1: Por vencer */}
        <div className="bg-slate-800/50 border border-red-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group hover:bg-slate-800 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Clock size={10} /> Por vencer (2h)
              </span>
              <span className="text-slate-400 text-xs font-bold">Matemáticas</span>
            </div>
            <h4 className="text-white font-bold text-sm">Ecuaciones de 2do Grado (Serie B)</h4>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shrink-0 shadow-lg shadow-indigo-900/40 cursor-pointer">
            <UploadCloud size={16} /> Cargar Tarea
          </button>
        </div>

        {/* Tarea 2: En tiempo */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group hover:bg-slate-800 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                En tiempo
              </span>
              <span className="text-slate-400 text-xs font-bold">Historia</span>
            </div>
            <h4 className="text-white font-bold text-sm">Ensayo: La Revolución Industrial</h4>
            <p className="text-[10px] text-slate-500 mt-1">Vence: Jueves, 11:59 PM</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shrink-0 cursor-pointer">
            <UploadCloud size={16} /> Cargar Tarea
          </button>
        </div>

        {/* Tarea 3: En tiempo */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group hover:bg-slate-800 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                En tiempo
              </span>
              <span className="text-slate-400 text-xs font-bold">Biología</span>
            </div>
            <h4 className="text-white font-bold text-sm">Maqueta del Ecosistema Local</h4>
            <p className="text-[10px] text-slate-500 mt-1">Vence: Viernes, 10:00 AM</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shrink-0 cursor-pointer">
            <UploadCloud size={16} /> Cargar Tarea
          </button>
        </div>

      </div>
    </div>
  );

  return (
    <>
      <div className="py-6 md:py-8 max-w-5xl mx-auto">
        
        {currentTab === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderMoodTracker()}
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {renderSmartId()}
              {renderWallet()}
              {renderAcademics()}
              {renderPassport()}
              {renderHouseSystem()}
            </div>
            {renderTasks()}
          </div>
        )}

        {currentTab === 'wallet' && (
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
            {renderWallet()}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
              <h3 className="text-white font-bold mb-4">Movimientos Recientes</h3>
              <div className="space-y-4">
                 {purchaseSuccess && (
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <span className="text-2xl">🛍️</span>
                         <div><p className="font-bold text-white text-sm">{purchaseSuccess}</p><p className="text-slate-400 text-[10px]">Justo ahora</p></div>
                      </div>
                      <span className="font-bold text-red-400">Comprado</span>
                   </div>
                 )}
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">🥪</span>
                       <div><p className="font-bold text-white text-sm">Cafetería Central</p><p className="text-slate-400 text-[10px]">Hoy, 10:30 AM</p></div>
                    </div>
                    <span className="font-bold text-red-400">-$45.00</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">📚</span>
                       <div><p className="font-bold text-white text-sm">Papelería Escolar</p><p className="text-slate-400 text-[10px]">Ayer, 1:15 PM</p></div>
                    </div>
                    <span className="font-bold text-red-400">-$15.00</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">💳</span>
                       <div><p className="font-bold text-white text-sm">Recarga - Papá</p><p className="text-slate-400 text-[10px]">Ayer, 08:00 AM</p></div>
                    </div>
                    <span className="font-bold text-emerald-400">+$200.00</span>
                 </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'market' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
            {renderMarket()}
          </div>
        )}

        {currentTab === 'passport' && (
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
            {renderPassport()}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
              <h3 className="text-white font-bold mb-4">Misiones y Talleres</h3>
              <div className="space-y-3">
                 <div className="bg-slate-800 rounded-xl p-3 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">🤖</span>
                       <div><p className="font-bold text-white text-sm">Feria de Robótica</p><p className="text-emerald-400 font-bold text-[10px]">+250 XP</p></div>
                    </div>
                    <ChevronRight size={16} className="text-slate-500" />
                 </div>
                 <div className="bg-slate-800 rounded-xl p-3 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">⚽</span>
                       <div><p className="font-bold text-white text-sm">Selección de Fútbol</p><p className="text-emerald-400 font-bold text-[10px]">+100 XP</p></div>
                    </div>
                    <ChevronRight size={16} className="text-slate-500" />
                 </div>
                 <div className="bg-slate-800 rounded-xl p-3 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">🎨</span>
                       <div><p className="font-bold text-white text-sm">Exposición de Arte</p><p className="text-emerald-400 font-bold text-[10px]">+50 XP</p></div>
                    </div>
                    <ChevronRight size={16} className="text-slate-500" />
                 </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'profile' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 max-w-sm mx-auto pt-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-indigo-500 p-1 overflow-hidden mb-4 shadow-lg shadow-indigo-500/20">
                <img src="/sonic_avatar.png" alt="Mateo" className="w-full h-full rounded-full object-cover" />
              </div>
              <h2 className="text-2xl font-black text-white">Mateo López</h2>
              <p className="text-indigo-400 font-bold">3° Secundaria</p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-2 mt-8">
               <div className="p-4 flex items-center justify-between border-b border-slate-800 cursor-pointer hover:bg-slate-800/50 rounded-t-2xl">
                 <div className="flex items-center gap-3 text-slate-300 font-semibold"><User size={18} /> Mi Información</div>
                 <ChevronRight size={16} className="text-slate-500" />
               </div>
               <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 rounded-b-2xl">
                 <div className="flex items-center gap-3 text-slate-300 font-semibold"><QrCode size={18} /> Configurar Acceso</div>
                 <ChevronRight size={16} className="text-slate-500" />
               </div>
            </div>
          </div>
        )}

      </div>

      {/* QR Payment Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:text-white cursor-pointer transition-colors"
            >
              <X size={16} />
            </button>
            
            <div className="text-center mb-6 mt-2">
              <h3 className="text-xl font-bold text-white mb-1">Pago en Cafetería</h3>
              <p className="text-sm text-slate-400">Escanea este código en caja</p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl mx-auto w-48 h-48 flex items-center justify-center mb-6 relative overflow-hidden">
              <QrCode size={160} className="text-slate-900" />
              <div className="absolute top-1/2 left-0 w-full h-8 bg-indigo-500/20 blur-md animate-pulse pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Saldo Disponible</p>
                <p className="text-lg text-emerald-400 font-black">${Math.floor(balance)}.00</p>
              </div>
              
              <button 
                onClick={handlePayment}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors cursor-pointer shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2"
              >
                Simular Cobro (-$45.00)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Topup Payment Modal */}
      {showTopupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto hide-scrollbar">
            {!isProcessing && !paymentSuccess && (
              <button 
                onClick={() => { setShowTopupModal(false); setPaymentMethod(null); }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:text-white cursor-pointer transition-colors"
              >
                <X size={16} />
              </button>
            )}

            {isProcessing ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
                <h3 className="text-xl font-bold text-white">Procesando Pago...</h3>
                <p className="text-slate-400 text-sm mt-2">Por favor no cierres esta ventana</p>
              </div>
            ) : paymentSuccess ? (
              <div className="text-center py-12 flex flex-col items-center animate-in zoom-in">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">¡Recarga Exitosa!</h3>
                <p className="text-slate-400 text-sm mt-2">Tu saldo se ha actualizado en +$200.00.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-xl font-bold text-white mb-1">Recargar Wallet</h3>
                  <p className="text-sm text-slate-400">Total a recargar: <span className="text-white font-bold">$200.00</span></p>
                </div>

                <div className="space-y-3 mb-6">
                  <button 
                    onClick={() => setPaymentMethod('credit')}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${paymentMethod === 'credit' ? 'bg-indigo-600/20 border-indigo-500' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}
                  >
                    <div className={`p-2 rounded-lg ${paymentMethod === 'credit' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      <CreditCard size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">Tarjeta de Crédito</p>
                      <p className="text-xs text-slate-400">Visa, Mastercard, Amex</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('debit')}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${paymentMethod === 'debit' ? 'bg-indigo-600/20 border-indigo-500' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}
                  >
                    <div className={`p-2 rounded-lg ${paymentMethod === 'debit' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      <CreditCard size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">Tarjeta de Débito</p>
                      <p className="text-xs text-slate-400">Pagos al instante</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('transfer')}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${paymentMethod === 'transfer' ? 'bg-indigo-600/20 border-indigo-500' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}
                  >
                    <div className={`p-2 rounded-lg ${paymentMethod === 'transfer' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      <Building size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">Transferencia SPEI</p>
                      <p className="text-xs text-slate-400">Sin comisiones</p>
                    </div>
                  </button>
                </div>

                {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                  <div className="space-y-4 mb-6 animate-in fade-in slide-in-from-bottom-2">
                    <input type="text" placeholder="Número de Tarjeta" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" />
                    <div className="flex gap-4">
                      <input type="text" placeholder="MM/AA" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" />
                      <input type="text" placeholder="CVC" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'transfer' && (
                  <div className="mb-6 bg-slate-950 border border-slate-800 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-2 text-center">
                     <p className="text-xs text-slate-500 mb-1">CLABE Interbancaria (STP)</p>
                     <p className="text-white font-mono font-bold tracking-widest mb-3">646 180 1234 5678 9012</p>
                     <p className="text-xs text-slate-500 mb-1">Referencia</p>
                     <p className="text-white font-mono font-bold tracking-widest">ALUMNO-491</p>
                  </div>
                )}

                <button 
                  onClick={handleTopupSubmit}
                  disabled={!paymentMethod}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl font-bold transition-colors cursor-pointer shadow-lg shadow-indigo-900/30"
                >
                  {paymentMethod === 'transfer' ? 'Ya hice la transferencia' : 'Confirmar Recarga'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
