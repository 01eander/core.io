import React, { useState, useEffect } from 'react';
import { Clock, Coffee, LogOut, Plus, ChevronRight, CarFront, Wallet, CheckCircle2, ShieldAlert, LayoutGrid, List, Filter, Phone, X, ShieldCheck } from 'lucide-react';

interface Stay {
  id: string;
  childName: string;
  tutorName: string;
  entryTime: Date;
  packageType: string;
  timeLimitMinutes?: number;
  pickupStatus: 'none' | 'approaching' | 'arrived';
  walletBalance: number;
  grade: string;
}

const mockStays: Stay[] = [
  { id: '1', childName: 'Mateo López', tutorName: 'María García', entryTime: new Date(Date.now() - 1000 * 60 * 45), packageType: 'Por hora', pickupStatus: 'approaching', walletBalance: 450.00, grade: 'Kínder' },
  { id: '2', childName: 'Sofía Martínez', tutorName: 'Carlos Martínez', entryTime: new Date(Date.now() - 1000 * 60 * 115), packageType: 'Consejo técnico', timeLimitMinutes: 120, pickupStatus: 'none', walletBalance: 45.50, grade: 'Secundaria' },
  { id: '3', childName: 'Leo Gómez', tutorName: 'Ana Ruiz', entryTime: new Date(Date.now() - 1000 * 60 * 15), packageType: 'Curso', timeLimitMinutes: 240, pickupStatus: 'none', walletBalance: 0.00, grade: 'Preparatoria' },
  { id: '4', childName: 'Valentina Silva', tutorName: 'Jorge Silva', entryTime: new Date(Date.now() - 1000 * 60 * 125), packageType: 'Por hora', pickupStatus: 'arrived', walletBalance: 1200.00, grade: 'Kínder' },
];

interface AuthorizedPerson {
  id: string;
  name: string;
  relation: string;
  idNumber: string;
  avatarIcon: string;
}

const mockAuthorizedPeople: AuthorizedPerson[] = [
  { id: 'p1', name: 'Jorge Silva', relation: 'Padre', idNumber: 'INE: SIVJ8509...', avatarIcon: '👨' },
  { id: 'p2', name: 'Laura Gómez', relation: 'Madre', idNumber: 'INE: GOML8701...', avatarIcon: '👩' },
  { id: 'p3', name: 'Roberto Silva', relation: 'Abuelo', idNumber: 'INE: SIVR5503...', avatarIcon: '👴' },
  { id: 'p4', name: 'Marta Pérez', relation: 'Tía', idNumber: 'INE: PERM9004...', avatarIcon: '👩‍🦰' },
];

const StayCard = ({ stay, onPickup }: { stay: Stay, onPickup: (stay: Stay) => void }) => {
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [showWalletMenu, setShowWalletMenu] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  useEffect(() => {
    const calculateElapsed = () => {
      const diffMs = Date.now() - stay.entryTime.getTime();
      setElapsedMinutes(Math.floor(diffMs / (1000 * 60)));
    };
    calculateElapsed();
    const interval = setInterval(calculateElapsed, 60000);
    return () => clearInterval(interval);
  }, [stay.entryTime]);

  let isAlert = false;
  let isWarning = false;
  
  if (stay.timeLimitMinutes) {
    const timeLeft = stay.timeLimitMinutes - elapsedMinutes;
    if (timeLeft <= 10 && timeLeft > 0) isWarning = true;
    if (timeLeft <= 0) isAlert = true;
  }

  const isApproaching = stay.pickupStatus === 'approaching';
  const isArrived = stay.pickupStatus === 'arrived';
  
  const pickupBorderClass = isArrived ? 'border-2 border-emerald-500 shadow-emerald-200' : 
                            isApproaching ? 'border-2 border-cyan-400 shadow-cyan-200 shadow-lg' : '';

  return (
    <div className={`relative overflow-visible bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      pickupBorderClass || (isAlert ? 'border-2 border-red-500 shadow-red-100' : 
      isWarning ? 'border-2 border-orange-400 shadow-orange-100' : 
      'border border-slate-200 shadow-sm')
    }`}>
      
      {!isApproaching && !isArrived && (
        <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl ${
          isAlert ? 'bg-red-500 animate-pulse' : 
          isWarning ? 'bg-orange-400' : 
          'bg-indigo-500'
        }`} />
      )}

      {isApproaching && (
        <div className="absolute -top-3 -right-3 bg-cyan-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg shadow-cyan-500/40 flex items-center gap-1.5 animate-bounce">
          <CarFront size={14} />
          Mamá a 2 min
        </div>
      )}
      {isArrived && (
        <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1.5 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/40 flex items-center gap-1.5">
          <CheckCircle2 size={16} />
          ¡EN LA PUERTA!
        </div>
      )}

      <div className="flex justify-between items-start mb-5 mt-2">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg border border-slate-200 relative">
            {stay.childName.charAt(0)}
            {stay.id === '2' && (
              <div className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full p-0.5 border-2 border-white" title="Alergia Severa">
                <ShieldAlert size={12} />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-slate-900 leading-tight">{stay.childName}</h3>
            <p className="text-sm text-slate-500 mt-0.5">Tutor: {stay.tutorName} • {stay.grade}</p>
          </div>
        </div>
        <button 
          onClick={() => {
            setIsCalling(true);
            setTimeout(() => setIsCalling(false), 3000);
          }}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${isCalling ? 'bg-emerald-100 text-emerald-600 animate-pulse shadow-md shadow-emerald-200' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600'}`} 
          title={`Llamar a ${stay.tutorName}`}
        >
          <Phone size={18} />
        </button>
      </div>

      <div className={`mb-4 flex items-center justify-between px-3 py-2 rounded-lg border ${
        stay.walletBalance < 50 ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'
      }`}>
        <div className="flex items-center gap-1.5">
          <Wallet size={14} className={stay.walletBalance < 50 ? 'text-red-500' : 'text-slate-500'} />
          <span className="text-xs font-bold text-slate-600">Core-Wallet</span>
        </div>
        <span className={`text-sm font-black tabular-nums ${stay.walletBalance < 50 ? 'text-red-600' : 'text-slate-800'}`}>
          ${stay.walletBalance.toFixed(2)}
        </span>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 mb-5 border border-slate-100 flex justify-between items-center">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Tiempo transcurrido</p>
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-black tabular-nums tracking-tight ${
              isAlert ? 'text-red-600' : 
              isWarning ? 'text-orange-600' : 
              'text-slate-800'
            }`}>
              {Math.floor(elapsedMinutes / 60)}<span className="text-lg text-slate-400 font-medium ml-0.5 mr-1">h</span>
              {elapsedMinutes % 60}<span className="text-lg text-slate-400 font-medium ml-0.5">m</span>
            </span>
          </div>
        </div>
        <div className="text-right">
           <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
            {stay.packageType}
          </span>
          {stay.timeLimitMinutes && (
            <p className="text-xs text-slate-400 mt-2 font-medium flex items-center justify-end gap-1">
              <Clock size={12} />
              Límite: {stay.timeLimitMinutes}m
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2 relative">
        <button 
          onClick={() => setShowWalletMenu(!showWalletMenu)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl transition-all cursor-pointer">
          <Coffee size={16} className="text-slate-400" />
          Extras
        </button>

        {showWalletMenu && (
          <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 text-white rounded-xl shadow-xl border border-slate-800 overflow-hidden z-10">
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase border-b border-slate-800">Cargar a:</div>
            <button className="w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-between">
              Core-Wallet <span className="text-indigo-400 text-xs font-bold">${stay.walletBalance.toFixed(2)}</span>
            </button>
            <button className="w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors">
              Efectivo / Tarjeta
            </button>
          </div>
        )}

        <button 
          onClick={() => onPickup(stay)}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-bold text-white rounded-xl shadow-sm transition-all cursor-pointer ${
          isArrived ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' :
          isAlert ? 'bg-red-600 hover:bg-red-700 shadow-red-200' : 
          'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
        }`}>
          <LogOut size={16} />
          Salida
        </button>
      </div>
    </div>
  );
};

export default function StaysDashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterGrade, setFilterGrade] = useState('Todos los Grados');
  const [filterStatus, setFilterStatus] = useState('Todos los Estados');
  
  const [selectedStayForPickup, setSelectedStayForPickup] = useState<Stay | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<AuthorizedPerson | null>(null);
  const [pickupSuccess, setPickupSuccess] = useState(false);

  const handleConfirmPickup = () => {
    if (!selectedPerson) return;
    setPickupSuccess(true);
    setTimeout(() => {
      setPickupSuccess(false);
      setSelectedStayForPickup(null);
      setSelectedPerson(null);
    }, 2000);
  };

  // Filtrado simple para demostración
  const filteredStays = mockStays.filter(stay => {
    if (filterGrade !== 'Todos los Grados' && stay.grade !== filterGrade) return false;
    if (filterStatus === 'Solo en Drive-Thru' && stay.pickupStatus === 'none') return false;
    return true;
  });

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Principal</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Estancias Activas</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Monitor en Tiempo Real</h1>
          <p className="text-slate-500 mt-2 text-sm">Gestiona los tiempos, salidas y pagos mediante Core-Wallet.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-bold text-slate-700">{mockStays.length} Activos</span>
          </div>
        </div>
      </div>

      {/* Controles de Vista y Filtrado (Para colegios grandes) */}
      <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
            <Filter size={16} className="text-slate-400" />
            <select 
              className="bg-transparent text-sm font-medium text-slate-700 outline-none cursor-pointer" 
              value={filterGrade} 
              onChange={e => setFilterGrade(e.target.value)}
            >
              <option>Todos los Grados</option>
              <option>Kínder</option>
              <option>Secundaria</option>
              <option>Preparatoria</option>
            </select>
          </div>
          <select 
            className="bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700 rounded-lg px-3 py-1.5 outline-none cursor-pointer" 
            value={filterStatus} 
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option>Todos los Estados</option>
            <option>Solo en Drive-Thru</option>
          </select>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-md transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
            <LayoutGrid size={18} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-md transition-all cursor-pointer ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
            <List size={18} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStays.map((stay) => (
            <StayCard key={stay.id} stay={stay} onPickup={(s) => setSelectedStayForPickup(s)} />
          ))}
          
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 flex flex-col items-center justify-center p-6 text-slate-400 hover:bg-slate-100 hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-pointer min-h-[300px]">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
              <Plus size={24} />
            </div>
            <p className="font-bold">Registrar Llegada</p>
            <p className="text-sm mt-1 text-center px-4 opacity-70">Haz clic aquí para ingresar un nuevo niño a la estancia</p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Alumno</th>
                <th className="px-6 py-4 font-semibold">Grado</th>
                <th className="px-6 py-4 font-semibold">Tutor / Drive-Thru</th>
                <th className="px-6 py-4 font-semibold text-right">Acciones Rápidas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStays.map((stay) => (
                <tr key={stay.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{stay.childName}</td>
                  <td className="px-6 py-4 text-slate-600">{stay.grade}</td>
                  <td className="px-6 py-4">
                    {stay.pickupStatus === 'approaching' ? (
                       <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md border border-cyan-200">A 2 min</span>
                    ) : stay.pickupStatus === 'arrived' ? (
                       <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md border border-emerald-200">En Puerta</span>
                    ) : (
                      <span className="text-slate-400 text-xs">Sin novedad</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 font-bold hover:underline cursor-pointer">Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Verification Modal */}
      {selectedStayForPickup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {!pickupSuccess && (
              <button 
                onClick={() => { setSelectedStayForPickup(null); setSelectedPerson(null); }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors"
              >
                <X size={16} />
              </button>
            )}

            {pickupSuccess ? (
              <div className="text-center py-16 flex flex-col items-center animate-in zoom-in">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={50} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">¡Entrega Confirmada!</h3>
                <p className="text-slate-500 mt-2">La entrega de {selectedStayForPickup.childName} a {selectedPerson?.name} ha quedado registrada con éxito.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8 mt-2">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Validación de Entrega</h3>
                  <p className="text-slate-500 text-sm">Selecciona a la persona que se encuentra físicamente en la puerta recogiendo a <strong className="text-slate-800">{selectedStayForPickup.childName}</strong>.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {mockAuthorizedPeople.map(person => (
                    <button 
                      key={person.id}
                      onClick={() => setSelectedPerson(person)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                        selectedPerson?.id === person.id 
                        ? 'bg-indigo-50 border-indigo-500 shadow-md shadow-indigo-100 ring-1 ring-indigo-500' 
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-3xl border border-slate-200 shadow-sm shrink-0">
                        {person.avatarIcon}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-base">{person.name}</p>
                        <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">{person.relation}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1 font-mono">{person.idNumber}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex-1">
                    {selectedPerson ? (
                      <p className="text-sm font-medium text-slate-700">Entregando a: <strong className="text-indigo-600">{selectedPerson.name}</strong></p>
                    ) : (
                      <p className="text-sm text-slate-500">Ninguna persona seleccionada</p>
                    )}
                  </div>
                  <button 
                    onClick={handleConfirmPickup}
                    disabled={!selectedPerson}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-indigo-200 cursor-pointer"
                  >
                    Confirmar Entrega
                    <ChevronRight size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
