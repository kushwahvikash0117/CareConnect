import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/adashboard/home" },
    { name: "Alerts Monitor", path: "/adashboard/alerts" },
    { name: "Analytics", path: "/adashboard/analytics" },
    { name: "Fraud Reports", path: "/adashboard/fraud" },
    { name: "Senior Citizens", path: "/adashboard/seniors" },
    { name: "Welfare Monitoring", path: "/adashboard/welfare" },
    { name: "Settings", path: "/adashboard/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        CareConnect Admin
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;