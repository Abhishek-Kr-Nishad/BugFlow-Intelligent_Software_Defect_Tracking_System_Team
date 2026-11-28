
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-main">
        <Navbar />

        <div className="app-page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
