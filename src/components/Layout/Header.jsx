import { Bell, Search, Menu } from "lucide-react";
import UserMenu from "./UserMenu";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={22} />
        </button>

        <h2>FinSight</h2>
      </div>

      <div className="header-center">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search transactions..."
          />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <Bell size={20} />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}

export default Header;