import React from 'react';
import { Plus, Edit2, Trash2, CreditCard, Tag, Clock } from 'lucide-react';

const mockConceptos = [
  { id: '1', name: 'Colegiatura Mensual', type: 'Fijo', amount: '$3,500.00' },
  { id: '2', name: 'Inscripción Anual', type: 'Anual', amount: '$4,200.00' },
  { id: '3', name: 'Material Didáctico', type: 'Anual', amount: '$1,800.00' },
  { id: '4', name: 'Seguro Escolar', type: 'Anual', amount: '$600.00' },
];

const mockBecas = [
  { id: '1', name: 'Beca Académica', discount: '10% a 50%' },
  { id: '2', name: 'Descuento por Hermano', discount: '15%' },
  { id: '3', name: 'Convenio Empresarial', discount: '10%' },
];

const mockPaquetes = [
  { id: '1', name: 'Por Hora (Libre)', limit: '1 Hora', price: '$80.00' },
  { id: '2', name: 'Medio Tiempo', limit: '4 Horas', price: '$250.00' },
  { id: '3', name: 'Consejo Técnico', limit: '6 Horas', price: '$350.00' },
];

const CatalogCard = ({ title, icon: Icon, children, count }: any) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-96">
    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-indigo-600" />
        <h3 className="font-bold text-slate-800">{title}</h3>
        <span className="bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium ml-2">{count}</span>
      </div>
      <button className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-lg transition-colors cursor-pointer">
        <Plus size={18} />
      </button>
    </div>
    <div className="flex-1 overflow-y-auto p-2">
      {children}
    </div>
  </div>
);

const ListItem = ({ title, subtitle, badge }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group border border-transparent hover:border-slate-100 mb-1">
    <div>
      <p className="font-semibold text-sm text-slate-700">{title}</p>
      {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-3">
      {badge && (
        <span className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded-md ${badge.className}`}>
          {badge.text}
        </span>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
        <button className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
        <button className="text-slate-400 hover:text-red-600 cursor-pointer"><Trash2 size={14} /></button>
      </div>
    </div>
  </div>
);

export default function FinancialCatalogs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* Conceptos de Cobro */}
      <CatalogCard title="Conceptos de Cobro" icon={CreditCard} count={mockConceptos.length}>
        {mockConceptos.map(c => (
          <ListItem 
            key={c.id} 
            title={c.name} 
            subtitle={`Monto Base: ${c.amount}`}
            badge={{ text: c.type, className: 'bg-indigo-50 text-indigo-700 border border-indigo-100' }}
          />
        ))}
      </CatalogCard>

      {/* Becas y Descuentos */}
      <CatalogCard title="Becas y Descuentos" icon={Tag} count={mockBecas.length}>
        {mockBecas.map(b => (
          <ListItem 
            key={b.id} 
            title={b.name} 
            badge={{ text: b.discount, className: 'bg-green-50 text-green-700 border border-green-100' }}
          />
        ))}
      </CatalogCard>

      {/* Paquetes de Estancia */}
      <CatalogCard title="Paquetes de Estancia" icon={Clock} count={mockPaquetes.length}>
        {mockPaquetes.map(p => (
          <ListItem 
            key={p.id} 
            title={p.name} 
            subtitle={`Límite: ${p.limit}`}
            badge={{ text: p.price, className: 'bg-orange-50 text-orange-700 border border-orange-100' }}
          />
        ))}
      </CatalogCard>

    </div>
  );
}
