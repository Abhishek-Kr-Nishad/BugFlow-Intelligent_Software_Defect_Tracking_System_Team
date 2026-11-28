
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateIssue.css";

function CreateIssue() {
  const navigate = useNavigate();

  const role = (
    sessionStorage.getItem("bugflow_role") || "Tester"
  ).toLowerCase();

  const isAdmin = role === "admin";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    steps: "",
    severity: "Medium",
    priority: "Medium",
    module: "",
    browser: "",
    operatingSystem: "",
    device: "",
    assignee: "",
  });

  const [attachment, setAttachment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedIssue = {
      ...formData,
      assignee: isAdmin ? formData.assignee : "",
      attachmentName: attachment ? attachment.name : "",
      id: "BUG-" + Date.now().toString().slice(-6),
      status: "Open",
      createdAt: new Date().toLocaleDateString(),
    };

    const existingIssues = JSON.parse(
      localStorage.getItem("bugflow_issues") || "[]"
    );

    localStorage.setItem(
      "bugflow_issues",
      JSON.stringify([...existingIssues, savedIssue])
    );

    alert("Issue created successfully!");
    navigate("/issues");
  };

  return (
    <div className="create-issue-content">

      {/* Page Heading */}
      <div className="create-issue-heading">
        <div className="create-heading-info">
          <Link to="/issues" className="create-back-link">
            ← Back to Issues
          </Link>

          <h1>Create New Issue</h1>

          <p>
            Report a bug or issue in your project.
          </p>
        </div>

        <div className="create-heading-illustration" aria-hidden="true">
          <span>🐞</span>
          <span className="illustration-alert">!</span>
        </div>
      </div>

      <form
        className="create-issue-form"
        onSubmit={handleSubmit}
      >

        <div className="create-issue-grid">

          {/* LEFT: Issue Information */}
          <section className="form-section issue-information-card">

            <div className="form-section-heading">
              <span className="form-section-icon">ⓘ</span>
              <div>
                <h2>Issue Information</h2>
                <p>Provide the basic details of the reported bug.</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">
                Issue Title <span>*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter a short, descriptive title..."
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                Description <span>*</span>
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the issue in detail..."
                rows="5"
                maxLength={1000}
                value={formData.description}
                onChange={handleChange}
                required
              />
              <span className="field-counter">
                {formData.description.length} / 1000
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="steps">
                Steps to Reproduce <span>*</span>
              </label>
              <textarea
                id="steps"
                name="steps"
                placeholder={"1. Go to the application\n2. Perform the steps\n3. Observe the issue..."}
                rows="4"
                maxLength={500}
                value={formData.steps}
                onChange={handleChange}
                required
              />
              <span className="field-counter">
                {formData.steps.length} / 500
              </span>
            </div>

          </section>

          {/* RIGHT: Bug Classification */}
          <section className="form-section classification-card">

            <div className="form-section-heading">
              <span className="form-section-icon">◆</span>
              <div>
                <h2>Bug Classification</h2>
                <p>Classify the impact and location of this issue.</p>
              </div>
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="severity">
                  Severity <span>*</span>
                </label>
                <select
                  id="severity"
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority">
                  Priority <span>*</span>
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="module">
                Affected Module <span>*</span>
              </label>
              <input
                id="module"
                name="module"
                type="text"
                placeholder="Example: Authentication, Dashboard"
                value={formData.module}
                onChange={handleChange}
                required
              />
            </div>

          </section>

          {/* LEFT: Admin Assignment */}
          {isAdmin && (
            <section className="form-section assignment-card">

              <div className="form-section-heading">
                <span className="form-section-icon">♙</span>
                <div>
                  <h2>Assignment</h2>
                  <p>Assign this issue to a developer.</p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="assignee">
                  Assign Developer
                </label>
                <input
                  id="assignee"
                  name="assignee"
                  type="text"
                  placeholder="Enter developer name"
                  value={formData.assignee}
                  onChange={handleChange}
                />
              </div>

              <p className="assignment-note">
                ⓘ Only Admin can assign a developer.
              </p>

            </section>
          )}

          {/* RIGHT: Environment */}
          <section className="form-section environment-card">

            <div className="form-section-heading">
              <span className="form-section-icon">▣</span>
              <div>
                <h2>Environment</h2>
                <p>Tell us where the issue occurred.</p>
              </div>
            </div>

            <div className="environment-fields">

              <div className="form-group">
                <label htmlFor="browser">Browser</label>
                <input
                  id="browser"
                  name="browser"
                  type="text"
                  placeholder="Example: Chrome"
                  value={formData.browser}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="operatingSystem">
                  Operating System
                </label>
                <input
                  id="operatingSystem"
                  name="operatingSystem"
                  type="text"
                  placeholder="Example: Windows 11"
                  value={formData.operatingSystem}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="device">Device</label>
                <input
                  id="device"
                  name="device"
                  type="text"
                  placeholder="Example: Desktop"
                  value={formData.device}
                  onChange={handleChange}
                />
              </div>

            </div>

          </section>

          {/* RIGHT: Attachments */}
          <section className="form-section attachments-card">

            <div className="form-section-heading">
              <span className="form-section-icon">⌕</span>
              <div>
                <h2>
                  Attachments <span className="optional-label">(Optional)</span>
                </h2>
                <p>Attach a screenshot of the reported bug.</p>
              </div>
            </div>

            <label
              htmlFor="attachment"
              className="upload-area"
            >
              <span className="upload-icon">☁</span>
              <strong>Click to upload</strong>
              <span>PNG, JPG, JPEG image files</span>
              <input
                id="attachment"
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) =>
                  setAttachment(e.target.files?.[0] || null)
                }
              />
            </label>

            {attachment && (
              <p className="attachment-selected">
                Selected: {attachment.name}
              </p>
            )}

          </section>

        </div>

        {/* Bottom Actions */}
        <div className="form-actions">

          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/issues")}
          >
            ✕ &nbsp; Cancel
          </button>

          <button
            type="submit"
            className="submit-issue-button"
          >
            ➤ &nbsp; Create Issue
          </button>

        </div>

        <p className="create-issue-demo-note">
          Demo mode: Issue data is currently saved in browser LocalStorage.
        </p>

      </form>
    </div>
  );
}

export default CreateIssue;
