import {
  LayoutDashboard,
  Wallet,
  Receipt,
  PieChart,
  Settings,
  X,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <h2>FinSight</h2>

        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={22} />
        </button>
      </div>

      <nav>
        <button className="active">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button>
          <Wallet size={20} />
          Accounts
        </button>

        <button>
          <Receipt size={20} />
          Transactions
        </button>

        <button>
          <PieChart size={20} />
          Analytics
        </button>

        <button>
          <Settings size={20} />
          More
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;