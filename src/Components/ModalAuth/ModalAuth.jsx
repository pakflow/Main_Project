import React from "react";
import { useAuth } from "../Contexts/authContext";
import { Link } from "react-router-dom";
import "./ModalAuth.css";

const ModalAuth = ({ showModalAuth, setShowModalAuth }) => {
  const {
    user,
    user: {email},
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
    handleLogout,
  } = useAuth();
  return (
    <div
      className={showModalAuth ? "modal active" : "modal"}
      onClick={() => setShowModalAuth(false)}
    >
      <div
        className={showModalAuth ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {!hasAccount ?
          (!user ? (
            <>
              <h2>Login</h2>
              <label>Email</label>
              <input
                type="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error-msg">{emailError}</p>
              <label>Password</label>
              <input
                type="password"
                autoFocus
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="error-msg">{passwordError}</p>
              <button
                style={{
                  cursor: "pointer",
                  width: "40vw",
                  height: "6vh",
                  color: "white",
                  backgroundColor: "black",
                  marginTop: "4vh",
                }}
                onClick={handleLogin}
              >
                Sign in
              </button>
              <h3 className="auth-method" style={{ fontSize: "30px" }}>
                or
              </h3>
              <button
                style={{
                  cursor: "pointer",
                  width: "40vw",
                  height: "6vh",
                  color: "black",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="google-logo"
                  onClick={authWithGoogle}
                  src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
                  alt="google"
                />
                Continue with Google
              </button>
              <p
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "1vh",
                }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                Create account
              </p>
            </>
          ) : (
            <>
              <h2>{email}</h2>
              <button
                style={{
                  cursor: "pointer",
                  width: "40vw",
                  height: "6vh",
                  color: "white",
                  backgroundColor: "black",
                  marginTop: "4vh",
                }}
                onClick={handleLogout}
              >
                Sign out
              </button>
              {email === "bboy.mars.97@gmail.com" ? (
                <Link to="/admin">
                  <button
                    style={{ cursor: "pointer", background: "0, 0, 0, 0" }}
                    onClick={() => setShowModalAuth(false)}
                  >
                    Admin Page
                  </button>
                 </Link>
              ) : null}
            </>
          )
        ) : (
          <>
            <h2>Create account</h2>
            <label>Email</label>
            <input
              type="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-msg">{emailError}</p>
            <label>Password</label>
            <input
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-msg">{passwordError}</p>
            <button
              style={{
                cursor: "pointer",
                width: "40vw",
                height: "6vh",
                color: "white",
                backgroundColor: "black",
                marginTop: "4vh",
              }}
              onClick={handleSignUp}
            >
              Create
            </button>
            <p
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "1vh",
                }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                Sign In
              </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalAuth;
