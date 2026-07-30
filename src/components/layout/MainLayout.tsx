import React from 'react';
import { 
  Clock, 
  Users, 
  Package, 
  PieChart, 
  Settings, 
  Search, 
  Bell, 
  Plus,
  Database,
  Banknote,
  LogOut
} from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  currentView: string;
  setCurrentView: (view: string) => void;
  onLogout: () => void;
}

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
    active 
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20' 
      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
  }`}>
    <Icon size={20} className={active ? 'text-white' : ''} />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

export default function MainLayout({ children, currentView, setCurrentView, onLogout }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* Sidebar - Estilo SaaS Premium */}
      <aside className="w-72 bg-slate-950 flex flex-col hidden md:flex border-r border-slate-800">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-bold text-xl leading-none">C</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Core<span className="text-indigo-400">.io</span></span>
        </div>
        
        <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Principal
        </div>
        <nav className="flex-1 px-3 space-y-1.5 mt-2 overflow-y-auto hide-scrollbar pb-4">
          <SidebarItem icon={Clock} label="Control de Estancias" active={currentView === 'stays'} onClick={() => setCurrentView('stays')} />
          <SidebarItem icon={Banknote} label="Caja y Cobranza" active={currentView === 'billing'} onClick={() => setCurrentView('billing')} />
          <SidebarItem icon={Users} label="Directorio de Niños" active={currentView === 'children'} onClick={() => setCurrentView('children')} />
          <SidebarItem icon={Package} label="Inventario y Cafetería" active={currentView === 'inventory'} onClick={() => setCurrentView('inventory')} />
          <SidebarItem icon={PieChart} label="Reportes Financieros" active={currentView === 'reports'} onClick={() => setCurrentView('reports')} />
          
          <div className="mt-6 mb-2 px-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Configuración
          </div>
          <SidebarItem icon={Database} label="Catálogos del Sistema" active={currentView === 'catalogs'} onClick={() => setCurrentView('catalogs')} />
        </nav>

        <div className="mt-auto px-6 py-2 flex justify-center">
          <img src="/oleander_logo_white.png.png" alt="Oleander Soft" className="h-16 object-contain" />
        </div>

        <div className="p-4 m-4 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <span className="text-slate-300 font-bold">OS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Oleander Soft</p>
                <p className="text-xs text-slate-400">Admin</p>
              </div>
            </div>
            <button onClick={onLogout} className="text-slate-400 hover:text-red-400 hover:bg-slate-800 p-2 rounded-lg transition-colors cursor-pointer" title="Cerrar Sesión">
              <LogOut size={18} />
            </button>
          </div>
          <div className="pt-1 border-t border-slate-800">
            <SidebarItem icon={Settings} label="Ajustes de Cuenta" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar niño, tutor o folio..." 
              className="bg-transparent border-none outline-none ml-3 w-full text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-5">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer hover:-translate-y-0.5">
              <Plus size={18} />
              Nuevo Ingreso
            </button>
          </div>
        </header>

        {/* Dynamic Content area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
