import { NavLink } from "react-router-dom";

const FamilySidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/fdashboard/home" },
    { name: "Alerts & Updates", path: "/fdashboard/alerts" },
    { name: "Communication", path: "/fdashboard/communication" },
    { name: "Family Members", path: "/fdashboard/members" },
    { name: "Location Details", path: "/fdashboard/location" },
    { name: "Senior Profile", path: "/fdashboard/profile" },
    { name: "Settings", path: "/fdashboard/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        Family Dashboard
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-600 text-white"
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

export default FamilySidebar;