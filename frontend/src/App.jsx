import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';

// Auth
import Login from './pages/Login';
import Register from './pages/Register';

// Admin Imports
import AdminHome from './pages/adminDashboard/AdminHome';
import AdminSettings from './pages/adminDashboard/AdminSettings';
import AlertsMonitor from './pages/adminDashboard/AlertsMonitor';
import AnalyticsReports from './pages/adminDashboard/AnalyticsReports';
import FraudReportsAdmin from './pages/adminDashboard/FraudReports';
import SeniorCitizensList from './pages/adminDashboard/SeniorCitizensList';
import WelfareMonitoringAdmin from './pages/adminDashboard/WelfareMonitoring';

// Family Imports (Assuming these share the common Layout)
import AlertsUpdates from './pages/familyMemberDashboard/AlertsUpdates';
import Communication from './pages/familyMemberDashboard/Communication';
import FamilyMembers from './pages/familyMemberDashboard/FamilyMembers';
import FamilyMemberHome from './pages/familyMemberDashboard/FamilyMemberHome';
import FamilySettings from './pages/familyMemberDashboard/FamilySettings';
import LocationDetails from './pages/familyMemberDashboard/LocationDetails';
import MySeniorProfile from './pages/familyMemberDashboard/MySeniorProfile';

// Senior Imports
import FraudReportsSenior from './pages/seniorCitizenDashboard/FraudReports';
import MyAlerts from './pages/seniorCitizenDashboard/MyAlerts';
import Profile from './pages/seniorCitizenDashboard/Profile';
import SeniorCitizenHome from './pages/seniorCitizenDashboard/SeniorCitizenHome';
import SeniorSettings from './pages/seniorCitizenDashboard/SeniorSettings';
import WelfareMonitoringSenior from './pages/seniorCitizenDashboard/WelfareMonitoring';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
        {/* Admin Routes with AdminLayout */}
          <Route path="adashboard/home" element={<AdminHome />} />
          <Route path="adashboard/settings" element={<AdminSettings />} />
          <Route path="adashboard/alerts" element={<AlertsMonitor />} />
          <Route path="adashboard/analytics" element={<AnalyticsReports />} />
          <Route path="adashboard/fraud" element={<FraudReportsAdmin />} />
          <Route path="adashboard/seniors" element={<SeniorCitizensList />} />
          <Route path="adashboard/welfare" element={<WelfareMonitoringAdmin />} />

        {/* Family & Senior Routes with common Layout */}
          {/* Family Routes */}
          <Route path="fdashboard/home" element={<FamilyMemberHome />} />
          <Route path="fdashboard/alerts" element={<AlertsUpdates />} />
          <Route path="fdashboard/communication" element={<Communication />} />
          <Route path="fdashboard/members" element={<FamilyMembers />} />
          <Route path="fdashboard/settings" element={<FamilySettings />} />
          <Route path="fdashboard/location" element={<LocationDetails />} />
          <Route path="fdashboard/profile" element={<MySeniorProfile />} />

          {/* Senior Routes */}
          <Route path="sdashboard/home" element={<SeniorCitizenHome />} />
          <Route path="sdashboard/fraud" element={<FraudReportsSenior />} />
          <Route path="sdashboard/alerts" element={<MyAlerts />} />
          <Route path="sdashboard/profile" element={<Profile />} />
          <Route path="sdashboard/settings" element={<SeniorSettings />} />
          <Route path="sdashboard/welfare" element={<WelfareMonitoringSenior />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;