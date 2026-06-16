import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const navLinks = [
    { path: '/adashboard/home', name: 'Dashboard' },
    { path: '/adashboard/alerts', name: 'Alerts & SOS' },
    { path: '/adashboard/seniors', name: 'Senior Citizens' },
    { path: '/adashboard/welfare', name: 'Welfare Monitoring' },
    { path: '/adashboard/fraud', name: 'Fraud Reports' },
    { path: '/adashboard/analytics', name: 'Analytics' },
    { path: '/adashboard/settings', name: 'Settings' }
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-8 text-teal-400 px-2">SeniorGuard Admin</h2>
      <nav className="space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `block p-3 rounded transition-colors ${
                isActive ? 'bg-teal-600 text-white' : 'hover:bg-slate-800 text-slate-300'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;