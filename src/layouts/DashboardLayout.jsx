import { Outlet } from "react-router-dom";
import { Search } from "lucide-react";
import Sidebar from "../components/Sidebar";

import "../styles/Layout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <header className="topbar">

          <div className="search-box">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search for anything..."
            />
          </div>

          <div className="profile-circle">
            P
          </div>

        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;