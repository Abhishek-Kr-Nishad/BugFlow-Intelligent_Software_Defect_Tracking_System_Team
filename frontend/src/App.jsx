
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import IssueDetails from "./pages/IssueDetails";
import CreateIssue from "./pages/CreateIssue";

import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Login page - without common layout */}
        <Route path="/login" element={<Login />} />

        {/* Pages with common Sidebar and Navbar */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issues/:id" element={<IssueDetails />} />
          <Route path="/create-issue" element={<CreateIssue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
