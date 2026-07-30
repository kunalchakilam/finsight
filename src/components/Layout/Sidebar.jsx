import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  PieChart,
  Settings,
  X,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <h2>FinSight</h2>

        <button
          className="close-btn"
          onClick={closeSidebar}
        >
          <X size={22} />
        </button>
      </div>

      <nav>
        <NavLink
          to="/dashboard"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Receipt size={20} />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/analytics"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <PieChart size={20} />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/budgets"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Wallet size={20} />
          <span>Budgets</span>
        </NavLink>

        <NavLink
          to="/more"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Settings size={20} />
          <span>More</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;