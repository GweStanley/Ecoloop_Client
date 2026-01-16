"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../lib/api";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // 'login' or 'register'
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("household");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const endpoint = mode === "register" ? "/api/auth/register" : "/api/auth/login";
      const payload = { phone, password };
      if (mode === "register") payload.role = role;
      if (mode === "register" && role !== "collector") payload.name = name;

      const res = await apiFetch(endpoint, "POST", payload);

      localStorage.setItem("token", res.token);
      setMessage(res.message);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {mode === "login" ? "Login" : "Register"}
        </h2>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>}

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={inputStyle}
              >
                <option value="household">Household</option>
                <option value="collector">Collector</option>
                <option value="company">Company</option>
              </select>

              {role !== "collector" && (
                <>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </>
              )}
            </>
          )}

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "12px", fontSize: "14px" }}>
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
              setMessage("");
            }}
            style={toggleButton}
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
  fontFamily: "Arial, sans-serif",
};

const cardStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "400px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#16a34a",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};

const toggleButton = {
  background: "transparent",
  border: "none",
  color: "#16a34a",
  cursor: "pointer",
  fontWeight: 600,
};
