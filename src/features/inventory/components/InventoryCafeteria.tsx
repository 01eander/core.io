import React from 'react';
import { ChevronRight, Plus, Package } from 'lucide-react';

const mockInventory = [
  { id: '1', name: 'Jugo de Manzana', category: 'Bebidas', stock: 45, price: 15.00 },
  { id: '2', name: 'Galletas de Avena', category: 'Snacks', stock: 20, price: 12.50 },
  { id: '3', name: 'Kit de Manualidades', category: 'Material', stock: 8, price: 45.00 },
  { id: '4', name: 'Calcetas Antiderrapantes', category: 'Ropa', stock: 15, price: 60.00 },
  { id: '5', name: 'Agua Embotellada', category: 'Bebidas', stock: 50, price: 10.00 },
];

export default function InventoryCafeteria() {
  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Principal</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Inventario</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Inventario y Cafetería</h1>
          <p className="text-slate-500 mt-2 text-sm">Control de productos, snacks y artículos a la venta.</p>
        </div>
        
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-colors flex items-center gap-2 cursor-pointer">
          <Plus size={16} /> Nuevo Producto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockInventory.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Package size={20} />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">
                {item.category}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
            <p className="text-2xl font-black text-indigo-600 mb-4">${item.price.toFixed(2)}</p>
            
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-600">En stock:</span>
              <span className={`text-sm font-bold ${item.stock < 10 ? 'text-red-600' : 'text-slate-900'}`}>
                {item.stock} u.
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
