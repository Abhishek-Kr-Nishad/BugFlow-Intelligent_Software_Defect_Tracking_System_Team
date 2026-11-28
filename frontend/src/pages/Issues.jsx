
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Issues.css";

// Demo data for frontend UI.
// These values will be replaced with real API data
// after FastAPI backend integration.
const demoIssues = [
  {
    id: "BUG-101",
    title: "Login page not loading",
    priority: "Critical",
    status: "In Progress",
    assignee: "Ritik Sharma",
    createdAt: "Today, 2:30 PM",
  },
  {
    id: "BUG-108",
    title: "Dashboard data not loading",
    priority: "High",
    status: "Open",
    assignee: "Priya Verma",
    createdAt: "Today, 1:15 PM",
  },
  {
    id: "BUG-115",
    title: "Profile update fails",
    priority: "Medium",
    status: "In Progress",
    assignee: "Aman Kumar",
    createdAt: "Yesterday, 5:45 PM",
  },
  {
    id: "BUG-120",
    title: "Search returns incorrect results",
    priority: "Medium",
    status: "Open",
    assignee: "Sneha Patel",
    createdAt: "Yesterday, 3:20 PM",
  },
  {
    id: "BUG-125",
    title: "Export feature throws error",
    priority: "High",
    status: "Open",
    assignee: "Ritik Sharma",
    createdAt: "Yesterday, 4:10 PM",
  },
  {
    id: "BUG-126",
    title: "Password reset email not received",
    priority: "Critical",
    status: "Resolved",
    assignee: "Priya Verma",
    createdAt: "2 days ago",
  },
  {
    id: "BUG-127",
    title: "Incorrect error message displayed",
    priority: "Low",
    status: "Resolved",
    assignee: "Aman Kumar",
    createdAt: "2 days ago",
  },
  {
    id: "BUG-130",
    title: "Page takes too long to load",
    priority: "High",
    status: "Open",
    assignee: "Sneha Patel",
    createdAt: "3 days ago",
  },
];

function Issues() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [sortOrder, setSortOrder] = useState("Latest First");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // Summary values are calculated from the demo issue data.
  const totalIssues = demoIssues.length;

  const openIssues = demoIssues.filter(
    (issue) => issue.status === "Open"
  ).length;

  const inProgressIssues = demoIssues.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  const resolvedIssues = demoIssues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  // Search and filters.
  const filteredIssues = useMemo(() => {
    let result = demoIssues.filter((issue) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        issue.id.toLowerCase().includes(searchText) ||
        issue.title.toLowerCase().includes(searchText) ||
        issue.assignee.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All Status" ||
        issue.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All Priority" ||
        issue.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });

    if (sortOrder === "Latest First") {
      result = [...result].reverse();
    }

    if (sortOrder === "Priority: High to Low") {
      const priorityOrder = {
        Critical: 1,
        High: 2,
        Medium: 3,
        Low: 4,
      };

      result = [...result].sort(
        (a, b) =>
          priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    }

    if (sortOrder === "Priority: Low to High") {
      const priorityOrder = {
        Critical: 1,
        High: 2,
        Medium: 3,
        Low: 4,
      };

      result = [...result].sort(
        (a, b) =>
          priorityOrder[b.priority] - priorityOrder[a.priority]
      );
    }

    return result;
  }, [search, statusFilter, priorityFilter, sortOrder]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredIssues.length / itemsPerPage)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const visibleIssues = filteredIssues.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="issues-content">
      {/* Summary cards */}
      <section className="issues-stats">
        <div className="issues-stat-card">
          <div className="issues-stat-icon purple">✳</div>
          <div className="issues-stat-content">
            <p>Total Issues</p>
            <h2>{totalIssues}</h2>
            <span className="issues-stat-change">↑ Demo data</span>
          </div>
          <div className="issues-mini-line purple-line">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0 35 C15 30, 20 28, 30 20 S45 25, 55 12 S70 18, 80 8 S90 10, 100 2" />
            </svg>
          </div>
        </div>

        <div className="issues-stat-card">
          <div className="issues-stat-icon blue">✓</div>
          <div className="issues-stat-content">
            <p>Open</p>
            <h2>{openIssues}</h2>
            <span className="issues-stat-change">↑ Demo data</span>
          </div>
          <div className="issues-mini-line blue-line">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0 35 C15 30, 20 28, 30 20 S45 25, 55 12 S70 18, 80 8 S90 10, 100 2" />
            </svg>
          </div>
        </div>

        <div className="issues-stat-card">
          <div className="issues-stat-icon orange">◷</div>
          <div className="issues-stat-content">
            <p>In Progress</p>
            <h2>{inProgressIssues}</h2>
            <span className="issues-stat-change">↑ Demo data</span>
          </div>
          <div className="issues-mini-line orange-line">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0 35 C15 30, 20 28, 30 20 S45 25, 55 12 S70 18, 80 8 S90 10, 100 2" />
            </svg>
          </div>
        </div>

        <div className="issues-stat-card">
          <div className="issues-stat-icon green">✓</div>
          <div className="issues-stat-content">
            <p>Resolved</p>
            <h2>{resolvedIssues}</h2>
            <span className="issues-stat-change">↑ Demo data</span>
          </div>
          <div className="issues-mini-line green-line">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0 35 C15 30, 20 28, 30 20 S45 25, 55 12 S70 18, 80 8 S90 10, 100 2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Issues table and filters */}
      <section className="issues-table-card">
        <div className="issues-toolbar">
          <div className="issues-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search issues..."
              value={search}
              onChange={(event) =>
                handleFilterChange(setSearch, event.target.value)
              }
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              handleFilterChange(setStatusFilter, event.target.value)
            }
          >
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(event) =>
              handleFilterChange(setPriorityFilter, event.target.value)
            }
          >
            <option>All Priority</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            value={sortOrder}
            onChange={(event) =>
              handleFilterChange(setSortOrder, event.target.value)
            }
          >
            <option>Latest First</option>
            <option>Priority: High to Low</option>
            <option>Priority: Low to High</option>
          </select>

          <Link
            to="/create-issue"
            className="issues-create-button"
          >
            <span>＋</span>
            Create Issue
          </Link>
        </div>

        <div className="issues-table-wrapper">
          <table className="issues-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {visibleIssues.length > 0 ? (
                visibleIssues.map((issue) => (
                  <tr key={issue.id}>
                    <td>
                      <span className="issues-id">{issue.id}</span>
                    </td>

                    <td className="issues-title-cell">
                      {issue.title}
                    </td>

                    <td>
                      <span
                        className={`issues-priority ${issue.priority
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {issue.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`issues-status ${issue.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {issue.status}
                      </span>
                    </td>

                    <td>
                      <div className="issues-assignee">
                        <span className="assignee-avatar">
                          {issue.assignee.charAt(0)}
                        </span>
                        {issue.assignee}
                      </div>
                    </td>

                    <td className="issues-created-date">
                      {issue.createdAt}
                    </td>

                    <td>
                      <Link
                        to={`/issues/${issue.id}`}
                        className="issues-view-button"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="issues-empty-state">
                    No issues found. Try changing your search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer and pagination */}
        <div className="issues-table-footer">
          <p>
            Showing{" "}
            {filteredIssues.length === 0 ? 0 : startIndex + 1}
            {"–"}
            {Math.min(startIndex + itemsPerPage, filteredIssues.length)}
            {" "}of {filteredIssues.length} issues
          </p>

          <div className="issues-pagination">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              ‹
            </button>

            <span>
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <p className="issues-demo-note">
        Demo issue data — this page will be connected to the FastAPI backend.
      </p>
    </div>
  );
}

export default Issues;
