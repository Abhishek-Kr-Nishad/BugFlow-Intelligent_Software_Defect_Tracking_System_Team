import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>BugFlow</h1>

        <h2>Welcome Back!</h2>

        <p className="login-subtitle">Login to manage your software issues</p>

        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="login-options">
    <label>
        <input type="checkbox" />
        Remember Me
    </label>

    <a href="#">Forgot Password?</a>
</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-footer">
          BugFlow - Intelligent Defect Tracking System
        </p>
      </div>
    </div>
  );
}

export default Login;
