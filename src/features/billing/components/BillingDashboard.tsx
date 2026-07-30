import React, { useState } from 'react';
import { 
  Search, 
  CreditCard, 
  Wallet, 
  Banknote, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  DollarSign, 
  TrendingUp,
  Receipt,
  ChevronRight
} from 'lucide-react';

const mockStudents = [
  { id: '1', name: 'Leo Gómez', tutor: 'Ana Ruiz', debt: 4200, group: 'Kínder 2 A' },
  { id: '2', name: 'Sofía Martínez', tutor: 'Carlos Martínez', debt: 1500, group: 'Maternal A' },
  { id: '3', name: 'Valentina Silva', tutor: 'Jorge Silva', debt: 800, group: 'Maternal A' },
];

const mockPendingCharges = [
  { id: 'c1', description: 'Colegiatura Febrero', amount: 3500, selected: true },
  { id: 'c2', description: 'Seguro Escolar Anual', amount: 600, selected: true },
  { id: 'c3', description: 'Recargo por atraso', amount: 100, selected: true },
];

export default function BillingDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<any>(mockStudents[0]);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | 'cash'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalToPay = mockPendingCharges.reduce((acc, charge) => acc + (charge.selected ? charge.amount : 0), 0);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 3000);
    }, 1500);
  };

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Finanzas</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Caja y Cobranza</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Punto de Venta</h1>
          <p className="text-slate-500 mt-2 text-sm">Cobra colegiaturas, servicios extra y gestiona estados de cuenta.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: POS Terminal (Gets more weight, takes 2 columns) */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Search & Select Student */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar alumno por nombre o matrícula para cobrar..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-lg font-medium text-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Selected Student Profile */}
            {selectedStudent && (
              <div className="mt-6 flex items-center justify-between p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{selectedStudent.name}</h3>
                    <p className="text-sm text-slate-500">{selectedStudent.group} • Tutor: {selectedStudent.tutor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-500 uppercase">Deuda Total</p>
                  <p className="text-2xl font-black text-red-600">${selectedStudent.debt.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>

          {/* Pending Charges & Checkout */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Receipt size={20} className="text-indigo-600" />
                Cargos Pendientes (Estado de Cuenta)
              </h3>
            </div>
            
            <div className="p-6 flex-1">
              <div className="space-y-3 mb-8">
                {mockPendingCharges.map((charge) => (
                  <label key={charge.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked={charge.selected} className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                      <span className="font-medium text-slate-700">{charge.description}</span>
                    </div>
                    <span className="font-bold text-slate-900">${charge.amount.toFixed(2)}</span>
                  </label>
                ))}
              </div>

              {/* Payment Methods */}
              <h4 className="text-sm font-semibold text-slate-500 uppercase mb-3">Método de Pago</h4>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <button 
                  onClick={() => setPaymentMethod('wallet')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'wallet' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>
                  <Wallet size={24} />
                  <span className="font-bold text-sm">Core-Wallet</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>
                  <CreditCard size={24} />
                  <span className="font-bold text-sm">Tarjeta</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('cash')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'cash' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>
                  <Banknote size={24} />
                  <span className="font-bold text-sm">Efectivo</span>
                </button>
              </div>

              {/* Checkout Footer */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center justify-between shadow-lg shadow-indigo-900/10">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Total a cobrar</p>
                  <p className="text-4xl font-black">${totalToPay.toFixed(2)}</p>
                </div>
                <button 
                  onClick={handlePay}
                  disabled={isProcessing || paymentSuccess}
                  className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all ${
                    paymentSuccess 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-md shadow-indigo-500/25'
                  }`}
                >
                  {isProcessing ? 'Procesando...' : 
                   paymentSuccess ? <><CheckCircle2 size={24}/> ¡Pago Exitoso!</> : 
                   'Procesar Pago'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Global KPIs & Debt Overview */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Ingresos del Mes</p>
              <p className="text-2xl font-black text-slate-900">$124,500.00</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Cuentas por Cobrar</p>
              <p className="text-2xl font-black text-slate-900">$28,400.00</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-slate-800 text-sm">Top Alumnos con Deuda</h3>
            </div>
            <div className="p-2 flex-1 overflow-y-auto">
              {mockStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{student.name}</p>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase">{student.group}</p>
                    </div>
                  </div>
                  <span className="text-sm font-black text-red-600">${student.debt.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
