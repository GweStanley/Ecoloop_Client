"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname(); // 👈 key fix

  // Re-read token on every route change
  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({
        role: payload.role,
        phone: payload.phone,
        points: payload.points || 0,
      });
    } catch {
      setUser(null);
    }
  }, [pathname]); // 👈 THIS fixes refresh issue

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/auth");
  };

  return (
    <nav style={navStyle}>
      <div style={navContainer}>
        <Link href="/" style={logoStyle}>
          EcoLoop
        </Link>

        <div style={menuStyle}>
          <Link href="/#story" style={linkStyle}>
            How it Works
          </Link>

          {user ? (
            <>
              <Link href="/dashboard" style={linkStyle}>
                Dashboard
              </Link>

              {user.role === "household" && (
                <Link href="/household/waste" style={linkStyle}>
                  Post Waste
                </Link>
              )}

              {user.role === "company" && (
                <Link href="/company/waste" style={linkStyle}>
                  Find Waste
                </Link>
              )}

              <div style={pointsStyle} title="EcoPoints earned">
                🌱 {user.points} pts
                <span style={roleBadge}>{user.role}</span>
              </div>

              <button onClick={logout} style={userButtonStyle}>
                {user.phone} · Logout
              </button>
            </>
          ) : (
            <Link href="/auth" style={ctaStyle}>
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ================= STYLES ================= */

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#ffffff",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  zIndex: 100,
};

const navContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 20px",
  flexWrap: "wrap",
};

const logoStyle = {
  fontWeight: "700",
  fontSize: "22px",
  color: "#16a34a",
  textDecoration: "none",
};

const menuStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
};

const linkStyle = {
  textDecoration: "none",
  color: "#374151",
  fontWeight: 500,
  padding: "6px 8px",
};

const ctaStyle = {
  background: "#16a34a",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const pointsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "#ecfdf5",
  color: "#065f46",
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 600,
};

const roleBadge = {
  background: "#bbf7d0",
  color: "#065f46",
  padding: "2px 6px",
  borderRadius: "999px",
  fontSize: "11px",
  textTransform: "capitalize",
};

const userButtonStyle = {
  background: "#16a34a",
  color: "#fff",
  border: "none",
  padding: "6px 14px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 500,
};
