import React, { useState } from 'react';
import { ChevronRight, Book, DollarSign, UserCheck, Stethoscope } from 'lucide-react';
import AcademicCatalogs from './AcademicCatalogs';
import FinancialCatalogs from './FinancialCatalogs';
import OperationsCatalogs from './OperationsCatalogs';
import StaffCatalogs from './StaffCatalogs';

export default function CatalogsView() {
  const [activeTab, setActiveTab] = useState('academic');

  const tabs = [
    { id: 'academic', label: 'Académico / Escolar', icon: Book },
    { id: 'financial', label: 'Administrativo / Cobranza', icon: DollarSign },
    { id: 'operations', label: 'Operativo / Estancia', icon: Stethoscope },
    { id: 'staff', label: 'Personal (HR)', icon: UserCheck },
  ];

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Configuración</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Catálogos</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Gestión de Catálogos</h1>
          <p className="text-slate-500 mt-2 text-sm">Configura los datos maestros que alimentan los procesos del sistema.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-xl w-max mb-8 border border-slate-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                isActive 
                  ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-900/5' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'academic' && <AcademicCatalogs />}
        {activeTab === 'financial' && <FinancialCatalogs />}
        {activeTab === 'operations' && <OperationsCatalogs />}
        {activeTab === 'staff' && <StaffCatalogs />}
      </div>
    </>
  );
}
