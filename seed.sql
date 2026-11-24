
-- Sample users
INSERT INTO users (user_id, name, email, password_hash, role)
VALUES
('11111111-1111-4111-8111-111111111111', 'Admin User', 'admin@example.com', 'sample_hash_1', 'admin'),
('22222222-2222-4222-8222-222222222222', 'Developer User', 'developer@example.com', 'sample_hash_2', 'developer');

-- Sample project
INSERT INTO projects (project_id, project_name, description, created_by)
VALUES
('33333333-3333-4333-8333-333333333333',
 'BugFlow Demo',
 'Sample issue tracking project',
 '11111111-1111-4111-8111-111111111111');

-- Project members
INSERT INTO project_members (project_id, user_id, role)
VALUES
('33333333-3333-4333-8333-333333333333', '11111111-1111-4111-8111-111111111111', 'project_manager'),
('33333333-3333-4333-8333-333333333333', '22222222-2222-4222-8222-222222222222', 'developer');

-- Sample issue

INSERT INTO issues (
    issue_id, project_id, title, description,
    issue_type, severity, priority, status,
    created_by, assigned_to
)
VALUES (
    '44444444-4444-4444-8444-444444444444',
    '33333333-3333-4333-8333-333333333333',
    'Login button not working',
    'The login button does not respond when clicked.',
    'bug',
    'high',
    'high',
    'open',
    '11111111-1111-4111-8111-111111111111',
    '22222222-2222-4222-8222-222222222222'
);


-- Sample comment
INSERT INTO comments (comment_id, issue_id, user_id, comment_text)
VALUES
('55555555-5555-4555-8555-555555555555',
 '44444444-4444-4444-8444-444444444444',
 '22222222-2222-4222-8222-222222222222',
 'I will investigate this issue.');

-- Sample issue history
INSERT INTO issue_history (
    history_id, issue_id, changed_by,
    field_changed, old_value, new_value
)
VALUES
('66666666-6666-4666-8666-666666666666',
 '44444444-4444-4444-8444-444444444444',
 '22222222-2222-4222-8222-222222222222',
 'status', 'Open', 'Open');
