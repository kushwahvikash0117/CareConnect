import { NavLink } from "react-router-dom";
import {
  Home,
  Bell,
  User,
  MapPin,
  Users,
  MessageCircle,
  Settings,
  HeartPulse,
} from "lucide-react";

import "./FamilySidebar.css";

const FamilySidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/fdashboard/home",
      icon: <Home size={18} />,
    },
    {
      name: "Alerts",
      path: "/fdashboard/alerts",
      icon: <Bell size={18} />,
    },
    {
      name: "My Senior",
      path: "/fdashboard/profile",
      icon: <HeartPulse size={18} />,
    },
    {
      name: "Location",
      path: "/fdashboard/location",
      icon: <MapPin size={18} />,
    },
    {
      name: "Family Members",
      path: "/fdashboard/members",
      icon: <Users size={18} />,
    },
    {
      name: "Communication",
      path: "/fdashboard/communication",
      icon: <MessageCircle size={18} />,
    },
    {
      name: "Settings",
      path: "/fdashboard/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <aside className="sidebar">
      <div>
        <h1 className="logo">SeniorGuard</h1>

        <div className="senior-card">
          <div className="avatar">
            <User size={28} />
          </div>

          <h3>Mrs. Sharma</h3>

          <p>Senior Citizen</p>

          <span className="safe-badge">
            Safe
          </span>
        </div>

        <nav className="menu">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="bottom-card">
        <p>Emergency Status</p>

        <span className="safe-badge">
          Monitoring Active
        </span>
      </div>
    </aside>
  );
};

export default FamilySidebar;