import React, { useState } from 'react';
import { Shield, Car, Navigation, MapPin, DollarSign, User, ChevronRight, Clock, AlertCircle, CreditCard, Building, CheckCircle, X, Wallet } from 'lucide-react';

export default function ParentDashboard({ currentTab = 'home' }: { currentTab?: string }) {
  const [pendingBalance, setPendingBalance] = useState(8450);
  const [studentBalance, setStudentBalance] = useState(450);
  const [activeModal, setActiveModal] = useState<'payment' | 'topup' | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'transfer' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSubmit = () => {
    if (!paymentMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        if (activeModal === 'payment') {
          setPendingBalance(0);
        } else if (activeModal === 'topup') {
          setStudentBalance(b => b + 200);
        }
        setActiveModal(null);
        setPaymentSuccess(false);
        setPaymentMethod(null);
      }, 2000);
    }, 1500);
  };
  const renderHome = () => (
    <div className="space-y-6 pt-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Shield size={100} />
        </div>
        <h2 className="text-2xl font-black mb-2 relative z-10">Hola, Familia López</h2>
        <p className="text-indigo-200 text-sm mb-4 relative z-10">Mateo está actualmente en: <span className="font-bold text-white">Clase de Matemáticas</span></p>
        
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center relative z-10">
          <div>
            <p className="text-xs text-indigo-100 font-bold uppercase tracking-wider mb-1">Próxima Salida</p>
            <p className="font-bold text-lg">14:30 hrs</p>
          </div>
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
            <Clock size={20} className="text-white" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3 pl-1">Notificaciones Recientes</h3>
        <div className="space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start shadow-md">
             <div className="bg-rose-500/20 p-2 rounded-xl text-rose-400 shrink-0">
               <DollarSign size={20} />
             </div>
             <div>
               <p className="font-bold text-white text-sm">Colegiatura Próxima a Vencer</p>
               <p className="text-slate-400 text-xs mt-1">El pago mensual vence en 3 días. Evite recargos.</p>
             </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start shadow-md">
             <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400 shrink-0">
               <AlertCircle size={20} />
             </div>
             <div>
               <p className="font-bold text-white text-sm">Reporte Académico Actualizado</p>
               <p className="text-slate-400 text-xs mt-1">Las calificaciones del 2do trimestre ya están disponibles.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCarpool = () => (
    <div className="space-y-6 pt-6 pb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white">Red de Carpool</h2>
        <p className="text-slate-400 text-sm">Comunidad Segura Core.io</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors p-4 rounded-3xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-indigo-900/30 cursor-pointer">
          <Car size={32} className="text-white" />
          <span className="text-white font-bold text-sm">Ofrecer Ride</span>
        </button>
        <button className="bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 p-4 rounded-3xl flex flex-col items-center justify-center gap-2 shadow-lg cursor-pointer">
          <Navigation size={32} className="text-indigo-400" />
          <span className="text-white font-bold text-sm">Solicitar Ride</span>
        </button>
      </div>

      <div>
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3 pl-1">Rutas Cercanas (Vecindario)</h3>
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full border-2 border-emerald-500 p-0.5 overflow-hidden flex items-center justify-center">
                  <span className="text-lg">👩</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Familia García</h4>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <MapPin size={10} /> A 2.5 km (Zona Norte)
                  </p>
                </div>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full">
                2 Lugares
              </span>
            </div>
            <div className="bg-slate-950 rounded-xl p-3 flex justify-between items-center">
              <div>
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Sale a las</p>
                 <p className="text-white font-bold text-sm">07:00 AM</p>
              </div>
              <button className="bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors text-xs font-bold px-4 py-1.5 rounded-lg cursor-pointer">
                Unirse
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full border-2 border-sky-500 p-0.5 overflow-hidden flex items-center justify-center">
                  <span className="text-lg">👨</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Familia Ramírez</h4>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <MapPin size={10} /> A 3.1 km (Centro)
                  </p>
                </div>
              </div>
              <span className="bg-sky-500/20 text-sky-400 text-[10px] font-bold px-2 py-1 rounded-full">
                1 Lugar
              </span>
            </div>
            <div className="bg-slate-950 rounded-xl p-3 flex justify-between items-center">
              <div>
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Sale a las</p>
                 <p className="text-white font-bold text-sm">07:15 AM</p>
              </div>
              <button className="bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors text-xs font-bold px-4 py-1.5 rounded-lg cursor-pointer">
                Unirse
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const renderFinances = () => (
    <div className="space-y-6 pt-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white">Estado de Cuenta</h2>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center shadow-xl">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Saldo Pendiente</p>
        <h3 className="text-4xl font-black text-white mb-6">
          ${Math.floor(pendingBalance).toLocaleString()}.<span className="text-slate-500 text-2xl">00</span>
        </h3>
        {pendingBalance > 0 ? (
          <button 
            onClick={() => setActiveModal('payment')}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/30 cursor-pointer"
          >
            Pagar Ahora
          </button>
        ) : (
          <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-xl border border-emerald-500/30 flex items-center justify-center gap-2">
            <CheckCircle size={20} />
            <span className="font-bold">¡Todo al día!</span>
          </div>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-white flex items-center gap-2"><Wallet size={18} className="text-indigo-400" /> Wallet de Mateo</h3>
            <p className="text-xs text-slate-400">Gastos en cafetería y papelería</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase">Saldo</p>
            <p className="text-emerald-400 font-bold text-lg">${Math.floor(studentBalance)}.00</p>
          </div>
        </div>
        <button 
          onClick={() => setActiveModal('topup')}
          className="w-full bg-slate-800 hover:bg-slate-700 text-indigo-400 font-bold py-3 rounded-xl transition-colors border border-slate-700 cursor-pointer text-sm"
        >
          Recargar Saldo ($200.00)
        </button>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 pt-6">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-indigo-500 flex items-center justify-center text-4xl mb-4 shadow-lg shadow-indigo-500/20">
          👨
        </div>
        <h2 className="text-2xl font-black text-white">Carlos López</h2>
        <p className="text-indigo-400 font-bold">Padre / Tutor</p>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-2 mt-8">
         <div className="p-4 flex items-center justify-between border-b border-slate-800 cursor-pointer hover:bg-slate-800/50 rounded-t-2xl">
           <div className="flex items-center gap-3 text-slate-300 font-semibold"><User size={18} /> Mi Información</div>
           <ChevronRight size={16} className="text-slate-500" />
         </div>
         <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 rounded-b-2xl">
           <div className="flex items-center gap-3 text-slate-300 font-semibold"><Shield size={18} /> Seguridad y Privacidad</div>
           <ChevronRight size={16} className="text-slate-500" />
         </div>
      </div>
    </div>
  );

  const renderPaymentModal = () => {
    if (!activeModal) return null;

    const isTopup = activeModal === 'topup';
    const amountStr = isTopup ? "$200.00" : `$${pendingBalance.toLocaleString()}.00`;
    const titleText = isTopup ? "Recargar Wallet" : "Opciones de Pago";
    const confirmText = isTopup ? "Confirmar Recarga" : "Confirmar Pago";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto hide-scrollbar">
          {!isProcessing && !paymentSuccess && (
            <button 
              onClick={() => { setActiveModal(null); setPaymentMethod(null); }}
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
                <CheckCircle size={40} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">¡{isTopup ? 'Recarga Exitosa' : 'Pago Exitoso'}!</h3>
              <p className="text-slate-400 text-sm mt-2">{isTopup ? 'El saldo se ha actualizado en +$200.00.' : 'Tu recibo ha sido enviado al correo.'}</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-white mb-1">{titleText}</h3>
                <p className="text-sm text-slate-400">{isTopup ? 'Total a recargar:' : 'Total a pagar:'} <span className="text-white font-bold">{amountStr}</span></p>
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
                onClick={handlePaymentSubmit}
                disabled={!paymentMethod}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl font-bold transition-colors cursor-pointer shadow-lg shadow-indigo-900/30"
              >
                {paymentMethod === 'transfer' ? 'Ya hice la transferencia' : confirmText}
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto">
      {currentTab === 'home' && renderHome()}
      {currentTab === 'carpool' && renderCarpool()}
      {currentTab === 'finances' && renderFinances()}
      {currentTab === 'profile' && renderProfile()}
      {renderPaymentModal()}
    </div>
  );
}
