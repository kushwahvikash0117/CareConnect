import { NavLink } from "react-router-dom";

const SeniorSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/sdashboard/home" },
    { name: "My Alerts", path: "/sdashboard/alerts" },
    { name: "Fraud Reports", path: "/sdashboard/fraud" },
    { name: "Welfare Monitoring", path: "/sdashboard/welfare" },
    { name: "My Profile", path: "/sdashboard/profile" },
    { name: "Settings", path: "/sdashboard/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        Senior Dashboard
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-red-600 text-white"
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

export default SeniorSidebar;