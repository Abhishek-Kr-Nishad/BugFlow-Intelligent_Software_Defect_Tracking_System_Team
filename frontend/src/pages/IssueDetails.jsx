
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./IssueDetails.css";

function IssueDetails() {
  const { id } = useParams();

  const [comments, setComments] = useState([
    {
      author: "Aarav Sharma",
      role: "Developer",
      message: "I have started investigating this issue.",
      time: "Today, 10:30 AM",
    },
    {
      author: "Priya Verma",
      role: "Admin",
      message: "Please prioritize this issue.",
      time: "Today, 11:15 AM",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const role = sessionStorage.getItem("bugflow_role") || "Developer";

  const issue = {
    id: id || "BUG-1024",
    title: "Login page not responding after entering credentials",
    description:
      "Users are unable to log in after entering valid email and password. The login button keeps loading and does not redirect users to the dashboard.",
    status: "In Progress",
    priority: "High",
    severity: "Critical",
    assignee: "Aarav Sharma",
    reporter: "Ritika Sharma",
    module: "Authentication",
    created: "24 November 2026",
    environment: "Chrome, Windows 11",
    steps: [
      "Open the BugFlow login page.",
      "Enter a registered email address.",
      "Enter the correct password.",
      "Click the Login button.",
      "The page keeps loading without redirecting.",
    ],
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    setComments([
      ...comments,
      {
        author: "Current User",
        role,
        message: newComment,
        time: "Just now",
      },
    ]);

    setNewComment("");
  };

  return (
    <div className="issue-details-page">
      <header className="details-header">
        <div>
          <Link to="/issues" className="back-link">
            ← Back to Issues
          </Link>

          <p className="issue-id">{issue.id}</p>
          <h1>{issue.title}</h1>

          <p className="issue-subtitle">
            Reported by {issue.reporter} · Created {issue.created}
          </p>
        </div>

        <Link to="/issues" className="details-button">
          Back to List
        </Link>
      </header>

      <div className="details-grid">
        <main className="details-main">
          <section className="details-card">
            <h2>Issue Description</h2>
            <p className="description-text">{issue.description}</p>

            <h3>Steps to Reproduce</h3>

            <ol className="reproduction-list">
              {issue.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="details-card">
            <h2>Comments ({comments.length})</h2>

            <div className="comments-list">
              {comments.map((comment, index) => (
                <div className="comment-item" key={index}>
                  <div className="comment-avatar">
                    {comment.author.charAt(0)}
                  </div>

                  <div className="comment-content">
                    <div className="comment-heading">
                      <strong>{comment.author}</strong>
                      <span>{comment.role}</span>
                    </div>

                    <p>{comment.message}</p>
                    <small>{comment.time}</small>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="comment-form">
              <textarea
                placeholder="Write your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />

              <button type="submit">Add Comment</button>
            </form>
          </section>
        </main>

        <aside className="details-sidebar">
          <section className="details-card">
            <h2>Issue Information</h2>

            <div className="info-row">
              <span>Status</span>
              <strong className="status-badge">{issue.status}</strong>
            </div>

            <div className="info-row">
              <span>Priority</span>
              <strong className="priority-badge">{issue.priority}</strong>
            </div>

            <div className="info-row">
              <span>Severity</span>
              <strong className="severity-badge">{issue.severity}</strong>
            </div>

            <div className="info-row">
              <span>Module</span>
              <strong>{issue.module}</strong>
            </div>

            <div className="info-row">
              <span>Environment</span>
              <strong>{issue.environment}</strong>
            </div>
          </section>

          <section className="details-card">
            <h2>People</h2>

            <div className="person-info">
              <span className="person-avatar">A</span>
              <div>
                <small>Assigned Developer</small>
                <strong>{issue.assignee}</strong>
              </div>
            </div>

            <div className="person-info">
              <span className="person-avatar">R</span>
              <div>
                <small>Reported By</small>
                <strong>{issue.reporter}</strong>
              </div>
            </div>
          </section>

          <section className="details-card">
            <h2>Activity</h2>

            <div className="activity-item">
              <span className="activity-dot"></span>
              <div>
                <strong>Issue created</strong>
                <small>{issue.created}</small>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-dot"></span>
              <div>
                <strong>Status changed to In Progress</strong>
                <small>Today</small>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default IssueDetails;
