import { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import StaysDashboard from './features/stays/components/StaysDashboard';
import ChildrenDirectory from './features/children/components/ChildrenDirectory';
import InventoryCafeteria from './features/inventory/components/InventoryCafeteria';
import FinancialReports from './features/reports/components/FinancialReports';
import CatalogsView from './features/catalogs/components/CatalogsView';
import AcademicTracking from './features/academics/components/AcademicTracking';
import BillingDashboard from './features/billing/components/BillingDashboard';
import SettingsView from './features/settings/components/SettingsView';
import LoginView from './features/auth/components/LoginView';
import StudentLayout from './components/layout/StudentLayout';
import StudentDashboard from './features/student/components/StudentDashboard';
import ParentLayout from './components/layout/ParentLayout';
import ParentDashboard from './features/parent/components/ParentDashboard';

function App() {
  const [userRole, setUserRole] = useState<'guest' | 'admin' | 'student' | 'parent'>('guest');
  const [currentView, setCurrentView] = useState('stays'); // Admin view
  const [studentView, setStudentView] = useState('home'); // Student tab
  const [parentView, setParentView] = useState('home'); // Parent tab

  if (userRole === 'guest') {
    return <LoginView onLogin={(role) => setUserRole(role)} />;
  }

  if (userRole === 'student') {
    return (
      <StudentLayout onLogout={() => setUserRole('guest')} currentTab={studentView} onTabChange={setStudentView}>
        <StudentDashboard currentTab={studentView} />
      </StudentLayout>
    );
  }

  if (userRole === 'parent') {
    return (
      <ParentLayout onLogout={() => setUserRole('guest')} currentTab={parentView} onTabChange={setParentView}>
        <ParentDashboard currentTab={parentView} />
      </ParentLayout>
    );
  }

  return (
    <MainLayout currentView={currentView} setCurrentView={setCurrentView} onLogout={() => setUserRole('guest')}>
      {currentView === 'stays' && <StaysDashboard />}
      {currentView === 'billing' && <BillingDashboard />}
      {currentView === 'children' && <ChildrenDirectory />}
      {currentView === 'academics' && <AcademicTracking />}
      {currentView === 'inventory' && <InventoryCafeteria />}
      {currentView === 'reports' && <FinancialReports />}
      {currentView === 'catalogs' && <CatalogsView />}
      {currentView === 'settings' && <SettingsView />}
    </MainLayout>
  )
}

export default App;
