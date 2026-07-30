import React from 'react';
import { ChevronRight, TrendingUp, DollarSign, CreditCard, Activity } from 'lucide-react';

const mockTransactions = [
  { id: '1', concept: 'Estancia: Mateo López (Por hora)', amount: 150.00, date: 'Hoy, 10:30 AM', type: 'Ingreso' },
  { id: '2', concept: 'Consumo: Jugo y Galletas', amount: 27.50, date: 'Hoy, 11:15 AM', type: 'Ingreso' },
  { id: '3', concept: 'Estancia: Leo Gómez (Curso)', amount: 450.00, date: 'Ayer, 16:45 PM', type: 'Ingreso' },
  { id: '4', concept: 'Compra: Material de limpieza', amount: -120.00, date: 'Ayer, 09:00 AM', type: 'Gasto' },
];

export default function FinancialReports() {
  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Principal</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Reportes</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Reportes Financieros</h1>
          <p className="text-slate-500 mt-2 text-sm">Resumen de ingresos, estancias y ventas de cafetería.</p>
        </div>
        
        <div className="flex gap-2">
           <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2 font-medium outline-none">
             <option>Esta semana</option>
             <option>Este mes</option>
           </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Ingresos Totales</p>
              <h3 className="text-2xl font-black text-slate-900">$12,450.00</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
            <TrendingUp size={16} /> <span>+14% vs semana pasada</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Horas Facturadas</p>
              <h3 className="text-2xl font-black text-slate-900">145h</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
            <TrendingUp size={16} /> <span>Estable</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Consumos Extra</p>
              <h3 className="text-2xl font-black text-slate-900">$1,230.50</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-purple-600 font-medium">
            <TrendingUp size={16} /> <span>+5% vs semana pasada</span>
          </div>
        </div>
      </div>

      {/* Recientes */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Transacciones Recientes</h3>
        <div className="space-y-4">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="font-bold text-slate-800">{tx.concept}</p>
                <p className="text-xs text-slate-500 mt-1">{tx.date}</p>
              </div>
              <div className={`text-lg font-black tabular-nums ${tx.type === 'Ingreso' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type === 'Ingreso' ? '+' : ''}{tx.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
