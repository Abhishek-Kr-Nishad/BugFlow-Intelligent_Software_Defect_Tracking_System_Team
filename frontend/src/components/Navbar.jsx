
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const role = sessionStorage.getItem("bugflow_role") || "Developer";

  const pageDetails = {
    "/dashboard": {
      title: "Developer Dashboard",
      subtitle: "Track your work and monitor project activity.",
    },
    "/issues": {
      title: "Issues",
      subtitle: "View and manage software issues.",
    },
    "/create-issue": {
      title: "Create Issue",
      subtitle: "Report a new software defect.",
    },
    "/sprints": {
      title: "Sprints",
      subtitle: "Organize work into sprint cycles.",
    },
    "/releases": {
      title: "Releases",
      subtitle: "Track project releases.",
    },
  };

  const currentPage = pageDetails[location.pathname] || {
    title: "BugFlow",
    subtitle: "Intelligent Software Defect Tracking System.",
  };

  return (
    <header className="dashboard-topbar">
      <div className="topbar-heading">
        <p className="topbar-welcome">
          Welcome back, Developer User! 👋
        </p>

        <div className="breadcrumb">
          <span>Workspace</span>
          <span className="breadcrumb-separator">/</span>
          <span>{currentPage.title}</span>
        </div>

        <h1>{currentPage.title}</h1>

        <p className="dashboard-subtitle">
          {currentPage.subtitle}
        </p>
      </div>

      <div className="topbar-user">
        <div className="topbar-avatar">
          {role.charAt(0).toUpperCase()}
        </div>

        <div className="topbar-user-details">
          <strong>Developer User</strong>
          <span>{role}</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
