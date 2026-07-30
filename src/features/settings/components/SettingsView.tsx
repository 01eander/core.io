import React, { useState } from 'react';
import { User, Palette, Shield, Bell, Globe, CreditCard, Info, Upload, Monitor, Sun, Moon, Key, Activity, CreditCard as CardIcon, Settings, CheckCircle2, Lock, ExternalLink, Zap } from 'lucide-react';

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState('profile');
  const [currency, setCurrency] = useState('MXN');

  const tabs = [
    { id: 'profile', label: 'Mi Perfil', icon: User },
    { id: 'appearance', label: 'Apariencia', icon: Palette },
    { id: 'regional', label: 'Regional y Moneda', icon: Globe },
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'subscription', label: 'Suscripción a Core', icon: CreditCard },
    { id: 'about', label: 'Acerca de Core.io', icon: Info },
  ];

  return (
    <div className="flex gap-8 animate-in fade-in duration-300 h-[calc(100vh-8rem)]">
      
      {/* Settings Sidebar */}
      <div className="w-64 shrink-0">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Ajustes</h1>
        <nav className="space-y-1">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium text-sm ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-bold' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 overflow-y-auto">
        
        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Información de la Cuenta</h2>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-3xl font-bold text-slate-400">
                OS
              </div>
              <div>
                <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer mb-2">
                  <Upload size={16} />
                  Subir nueva foto
                </button>
                <p className="text-xs text-slate-500">JPG, GIF o PNG. Tamaño máximo 800KB</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
                <input type="text" defaultValue="Admin Oleander" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Correo Electrónico</label>
                <input type="email" defaultValue="admin@oleandersoft.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Cargo / Rol</label>
                <input type="text" defaultValue="Director General" disabled className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg outline-none text-slate-500" />
              </div>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer">
              Guardar Cambios
            </button>
          </div>
        )}

        {/* REGIONAL TAB */}
        {activeTab === 'regional' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Preferencias Regionales y Moneda</h2>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Moneda Principal del Sistema</label>
              <p className="text-sm text-slate-500 mb-4">Esta moneda se usará en todo el sistema para colegiaturas, Core-Wallet y reportes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { code: 'MXN', label: 'Peso Mexicano (MXN)', symbol: '$' },
                  { code: 'USD', label: 'US Dollar (USD)', symbol: '$' },
                  { code: 'COP', label: 'Peso Colombiano (COP)', symbol: '$' },
                  { code: 'CLP', label: 'Peso Chileno (CLP)', symbol: '$' },
                  { code: 'EUR', label: 'Euro (EUR)', symbol: '€' },
                ].map(c => (
                  <label key={c.code} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${currency === c.code ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input 
                      type="radio" 
                      name="currency" 
                      value={c.code} 
                      checked={currency === c.code}
                      onChange={() => setCurrency(c.code)}
                      className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="ml-3">
                      <p className={`font-bold ${currency === c.code ? 'text-indigo-900' : 'text-slate-700'}`}>{c.label}</p>
                      <p className={`text-xs ${currency === c.code ? 'text-indigo-600' : 'text-slate-500'}`}>Símbolo: {c.symbol}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Zona Horaria</label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700">
                <option>(GMT-06:00) Ciudad de México</option>
                <option>(GMT-05:00) Bogotá, Lima, Quito</option>
                <option>(GMT-04:00) Santiago</option>
                <option>(GMT-03:00) Buenos Aires</option>
              </select>
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Seguridad y Accesos</h2>
            
            <div className="mb-8">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Key size={18} className="text-indigo-600"/> Cambiar Contraseña</h3>
              <div className="space-y-4">
                <input type="password" placeholder="Contraseña actual" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                <input type="password" placeholder="Nueva contraseña" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
                  Actualizar Contraseña
                </button>
              </div>
            </div>

            <div className="mb-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-start gap-4">
              <Shield className="text-indigo-600 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-indigo-900">Autenticación en 2 Pasos (2FA)</h4>
                <p className="text-sm text-indigo-700 mt-1 mb-3">Añade una capa extra de seguridad a tu cuenta usando una app como Google Authenticator.</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm transition-all cursor-pointer">
                  Habilitar 2FA
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Activity size={18} className="text-indigo-600"/> Sesiones Activas</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-slate-200 rounded-xl">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Mac OS • Chrome</p>
                    <p className="text-xs text-slate-500">Ciudad de México • Hace 2 min (Sesión actual)</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Actual</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-slate-200 rounded-xl">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">iPhone 14 • Safari</p>
                    <p className="text-xs text-slate-500">Ciudad de México • Ayer a las 18:30</p>
                  </div>
                  <button className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-md transition-colors cursor-pointer">Cerrar sesión</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBSCRIPTION TAB */}
        {activeTab === 'subscription' && (
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Plan y Suscripción a Core.io</h2>
            
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 text-white mb-8 relative overflow-hidden shadow-xl shadow-indigo-900/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div>
                  <span className="bg-indigo-500/30 text-indigo-200 text-xs font-bold px-2 py-1 rounded-full border border-indigo-500/50 mb-3 inline-block">PLAN ACTUAL</span>
                  <h3 className="text-3xl font-black tracking-tight">Core Integrado <span className="text-indigo-400">Pro</span></h3>
                  <p className="text-indigo-200 mt-1">Suscripción SaaS + Fintech Océano Azul</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black">${currency === 'MXN' ? '0' : '0'}</p>
                  <p className="text-xs text-indigo-300">Mensualidad Base</p>
                </div>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <p className="text-indigo-200 mb-1">Comisión Transaccional</p>
                  <p className="text-xl font-bold">2.9% + $3.00</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <p className="text-indigo-200 mb-1">Siguiente Ciclo de Facturación</p>
                  <p className="text-xl font-bold">01 Sep 2026</p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">Método de Pago Registrado</h3>
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-slate-800 rounded-md flex items-center justify-center">
                  <CardIcon className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">•••• •••• •••• 4242</p>
                  <p className="text-xs text-slate-500">Expira 12/28</p>
                </div>
              </div>
              <button className="text-sm font-bold text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                Actualizar
              </button>
            </div>
            
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Acerca de Core.io</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-600/30 mb-4 rotate-3 hover:rotate-0 transition-all cursor-pointer">
                <span className="text-white font-black text-4xl">C</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Core<span className="text-indigo-600">.io</span></h3>
              <p className="text-slate-500 font-medium mb-1">Un producto para la gestión escolar moderna.</p>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mt-2">
                <Zap size={12} className="fill-indigo-700" />
                Versión 1.2.0 (Demo Mode)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="text-emerald-500" size={18}/> Tu licencia actual incluye:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>Directorio de hasta 500 alumnos</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>Control de Estancias Básico</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>Seguimiento Académico (1 Campus)</li>
                </ul>
              </div>
              
              <div className="border-2 border-indigo-100 bg-indigo-50/30 rounded-xl p-5 relative overflow-hidden group hover:border-indigo-300 transition-colors cursor-pointer">
                <div className="absolute -right-6 -top-6 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                  <Lock size={100} />
                </div>
                <div className="relative z-10">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-2 inline-block">Actualiza a Enterprise</span>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">Desbloquea el Océano Azul</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">+</span>Drive-Thru Predictivo y GPS</li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">+</span>Core-Wallet (SaaS Fintech)</li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">+</span>Mapa de Talentos con IA</li>
                  </ul>
                  <button className="mt-4 text-xs font-bold text-indigo-700 flex items-center gap-1 hover:underline">Contactar a Ventas <ExternalLink size={12}/></button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center justify-center">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-4">Diseñado y Desarrollado por</p>
              <img src="/oleander_fulllogo_black.png.png" alt="Oleander Soft" className="h-48 object-contain" />
            </div>
            
          </div>
        )}

        {/* APPEARANCE & NOTIFICATIONS placeholders */}
        {(activeTab === 'appearance' || activeTab === 'notifications') && (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <Settings size={48} className="mb-4 opacity-20" />
            <p className="font-medium text-lg">Módulo de {tabs.find(t => t.id === activeTab)?.label}</p>
            <p className="text-sm">Disponible en la versión completa del sistema.</p>
          </div>
        )}

      </div>
    </div>
  );
}
