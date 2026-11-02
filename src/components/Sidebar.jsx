import { NavLink } from "react-router-dom";
import {
  House,
  ChartNoAxesCombined,
  Target,
  BookOpen,
  Building2,
  Users,
  Brain,
  FileText,
  Bell,
  Settings
} from "lucide-react";

import "../styles/Layout.css";

function Sidebar() {

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: House },
    { name: "Preparation Tracker", path: "/tracker", icon: ChartNoAxesCombined },
    { name: "Daily Missions", path: "/missions", icon: Target },
    { name: "Subjects & Learning", path: "/subjects", icon: BookOpen },
    { name: "Company & Drives", path: "/companies", icon: Building2 },
    { name: "Mock Interview", path: "/interview", icon: Users },
    { name: "Skill Gap & Analysis", path: "/skill-gap", icon: Brain },
    { name: "Resources", path: "/resources", icon: FileText }
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        🎓 PrepNxt
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      <div className="sidebar-bottom">

        <NavLink to="/notifications" className="menu-link">
          <Bell size={20} />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/settings" className="menu-link">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;