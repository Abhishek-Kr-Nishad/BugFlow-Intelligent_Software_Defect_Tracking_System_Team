
-- =====================================
-- BUGFLOW DATABASE SCHEMA
-- =====================================

-- 1. USERS
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_users_email UNIQUE (email)
);

-- 2. PROJECTS
CREATE TABLE projects (
    project_id UUID PRIMARY KEY,
    project_name VARCHAR(150) NOT NULL,
    description TEXT,
    created_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_projects_creator
        FOREIGN KEY (created_by) REFERENCES users(user_id)
);

-- 3. PROJECT MEMBERS
CREATE TABLE project_members (
    project_id UUID NOT NULL,
    user_id UUID NOT NULL,
    role VARCHAR(30) NOT NULL DEFAULT 'developer',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_id, user_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 4. ISSUES
CREATE TABLE issues (
    issue_id UUID PRIMARY KEY,
    project_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    issue_type VARCHAR(30),
    severity VARCHAR(20),
    priority VARCHAR(20),
    status VARCHAR(30),
    created_by UUID NOT NULL,
    assigned_to UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (project_id) REFERENCES projects(project_id),
    FOREIGN KEY (created_by) REFERENCES users(user_id),
    FOREIGN KEY (assigned_to) REFERENCES users(user_id),

    CHECK (issue_type IN ('bug', 'feature_request', 'enhancement', 'technical_debt')),
    CHECK (severity IN ('critical', 'high', 'medium', 'low')),
    CHECK (priority IN ('urgent', 'high', 'medium', 'low')),
    CHECK (status IN ('open', 'in_progress', 'resolved', 'closed'))
);

-- 5. COMMENTS
CREATE TABLE comments (
    comment_id UUID PRIMARY KEY,
    issue_id UUID NOT NULL,
    user_id UUID NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (issue_id) REFERENCES issues(issue_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 6. ISSUE HISTORY
CREATE TABLE issue_history (
    history_id UUID PRIMARY KEY,
    issue_id UUID NOT NULL,
    changed_by UUID NOT NULL,
    field_changed VARCHAR(100) NOT NULL,
    old_value TEXT,
    new_value TEXT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (issue_id) REFERENCES issues(issue_id),
    FOREIGN KEY (changed_by) REFERENCES users(user_id)
);
