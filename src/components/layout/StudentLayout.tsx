import React from 'react';
import { Home, CreditCard, Award, User, LogOut, ShoppingBag } from 'lucide-react';

interface StudentLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function StudentLayout({ children, onLogout, currentTab, onTabChange }: StudentLayoutProps) {
  return (
    <div className="flex justify-center h-screen bg-slate-900 font-sans overflow-hidden">
      {/* Responsive Container for Demo */}
      <div className="w-full md:max-w-6xl h-full bg-slate-950 flex flex-col relative shadow-2xl shadow-indigo-900/20 overflow-hidden sm:border-x sm:border-slate-800/80">
        
        {/* Top Header */}
        <header className="px-6 pt-8 pb-4 flex items-center justify-between z-10 sticky top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-black text-lg">C</span>
            </div>
            <span className="text-white font-bold tracking-tight text-lg">Student<span className="text-indigo-400">Hub</span></span>
          </div>
          <button onClick={onLogout} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
            <LogOut size={18} />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-24 px-6 hide-scrollbar">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 pb-safe pt-3 pb-6 px-6 flex justify-between items-center z-20">
          {[
            { id: 'home', icon: Home, label: 'Inicio' },
            { id: 'wallet', icon: CreditCard, label: 'Wallet' },
            { id: 'market', icon: ShoppingBag, label: 'Bazar' },
            { id: 'passport', icon: Award, label: 'Pasaporte' },
            { id: 'profile', icon: User, label: 'Perfil' },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center p-2 cursor-pointer ${currentTab === item.id ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300 transition-colors'}`}
            >
              <item.icon size={24} className={currentTab === item.id ? 'fill-indigo-900/50' : ''} />
              <span className="text-[10px] mt-1.5 font-bold tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
