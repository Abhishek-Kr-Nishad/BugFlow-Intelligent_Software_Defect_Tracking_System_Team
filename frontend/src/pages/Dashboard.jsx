import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>BugFlow</h1>
        <p>Intelligent Software Defect Tracking System</p>
      </header>

      <main className="dashboard-content">
        <h2>Welcome to Dashboard!</h2>
        <p>Manage and track your software issues in one place.</p>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Issues</h3>
            <p>120</p>
          </div>

          <div className="stat-card">
            <h3>Open Issues</h3>
            <p>35</p>
          </div>

          <div className="stat-card">
            <h3>In Progress</h3>
            <p>45</p>
          </div>

          <div className="stat-card">
            <h3>Resolved</h3>
            <p>40</p>
          </div>
        </div>
        <section className="recent-issues">
          <h2>Recent Issues</h2>

          <table>
            <thead>
              <tr>
                <th>Issue ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>BUG-101</td>
                <td>Login page not loading</td>
                <td>
                  <span className="status-open">Open</span>
                </td>
                <td>High</td>
              </tr>

              <tr>
                <td>BUG-102</td>
                <td>Dashboard layout issue</td>
                <td>
                  <span className="status-progress">In Progress</span>
                </td>
                <td>Medium</td>
              </tr>

              <tr>
                <td>BUG-103</td>
                <td>Password reset error</td>
                <td>
                  <span className="status-resolved">Resolved</span>
                </td>{" "}
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
