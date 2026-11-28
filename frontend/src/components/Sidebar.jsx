
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const role = sessionStorage.getItem("bugflow_role") || "Developer";

  const handleLogout = () => {
    sessionStorage.removeItem("bugflow_role");
    navigate("/login");
  };

  return (
    <aside className="dashboard-sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <span className="brand-symbol">🐞</span>
        <span>BugFlow</span>
      </div>

      {/* Menu heading */}
      <p className="sidebar-label">WORKSPACE</p>

      {/* Navigation */}
      <nav className="dashboard-navigation">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>⌂</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/issues"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>▤</span>
          Issues
        </NavLink>

        <NavLink
          to="/create-issue"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>＋</span>
          Create Issue
        </NavLink>

        <NavLink
          to="/sprints"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>◷</span>
          Sprints
        </NavLink>

        <NavLink
          to="/releases"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>◇</span>
          Releases
        </NavLink>
      </nav>

      {/* Bottom user section */}
      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="user-avatar">
            {role.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>Developer User</strong>
            <span>{role}</span>
          </div>
        </div>

        <button
          type="button"
          className="sidebar-link logout-link"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
