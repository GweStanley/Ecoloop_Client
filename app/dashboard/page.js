"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [role, setRole] = useState(null);
  const [redeemAmount, setRedeemAmount] = useState("");
  const [redeemMsg, setRedeemMsg] = useState("");
  const [loadingRedeem, setLoadingRedeem] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role);

      fetch(`${API}/api/waste/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => setStats(data))
        .catch(() => setStats(null));
    } catch {
      setStats(null);
    }
  }, []);

  const handleRedeem = async () => {
    if (!redeemAmount || redeemAmount <= 0) {
      setRedeemMsg("Enter a valid amount");
      return;
    }

    if (redeemAmount > stats.points) {
      setRedeemMsg("Insufficient points");
      return;
    }

    setLoadingRedeem(true);
    setRedeemMsg("");

    try {
      // 🔒 BACKEND ENDPOINT YOU’LL ADD:
      // POST /api/rewards/redeem
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/api/rewards/redeem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          points: Number(redeemAmount),
          provider: "mtn_momo",
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setRedeemMsg("✅ Redemption request sent. MTN MoMo payout processing.");
      setStats({ ...stats, points: stats.points - redeemAmount });
      setRedeemAmount("");
    } catch (err) {
      setRedeemMsg(err.message || "Redemption failed");
    } finally {
      setLoadingRedeem(false);
    }
  };

  if (!stats) {
    return <p style={{ padding: "120px 20px" }}>Loading dashboard…</p>;
  }

  return (
    <main style={page}>
      <h1 style={{ marginBottom: "30px" }}>Your Impact Overview</h1>

      <div style={grid}>
        {role === "household" && (
          <>
            <StatCard title="Waste Posted" value={stats.entries} />
            <StatCard title="Pickups Completed" value={stats.pickups} />
            <StatCard title="CO₂ Saved" value={`${stats.co2.toFixed(2)} kg`} />
            <StatCard title="Eco Points" value={stats.points} highlight />
          </>
        )}

        {role === "collector" && (
          <>
            <StatCard title="Pickups Completed" value={stats.pickups} />
            <StatCard title="Waste Collected" value={`${stats.weight} kg`} />
            <StatCard title="CO₂ Offset" value={`${stats.co2.toFixed(2)} kg`} />
          </>
        )}

        {role === "company" && (
          <>
            <StatCard title="Waste Acquired" value={`${stats.weight} kg`} />
            <StatCard title="Matches Found" value={stats.matches} />
            <StatCard title="CO₂ Reduced" value={`${stats.co2.toFixed(2)} kg`} />
          </>
        )}
      </div>

      {/* ================= REDEEM SECTION ================= */}
      {role === "household" && (
        <section style={redeemSection}>
          <h2>Redeem Eco Points</h2>
          <p style={muted}>
            Convert your recycling impact into real value via <strong>MTN MoMo</strong>.
          </p>

          <div style={redeemBox}>
            <div style={balanceBox}>
              🌱 Available Points: <strong>{stats.points}</strong>
            </div>

            <input
              type="number"
              placeholder="Points to redeem"
              value={redeemAmount}
              onChange={e => setRedeemAmount(e.target.value)}
              style={input}
            />

            <button
              onClick={handleRedeem}
              disabled={loadingRedeem}
              style={{
                ...button,
                opacity: loadingRedeem ? 0.6 : 1,
              }}
            >
              {loadingRedeem ? "Processing…" : "Redeem to MTN MoMo"}
            </button>

            {redeemMsg && <p style={message}>{redeemMsg}</p>}
          </div>
        </section>
      )}
    </main>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, highlight }) {
  return (
    <div
      style={{
        ...card,
        border: highlight ? "2px solid #16a34a" : "none",
      }}
    >
      <p style={cardLabel}>{title}</p>
      <h2 style={cardValue}>{value}</h2>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  padding: "120px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "18px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const cardLabel = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "10px",
};

const cardValue = {
  fontSize: "30px",
  fontWeight: 700,
  color: "#16a34a",
};

const redeemSection = {
  marginTop: "60px",
};

const redeemBox = {
  marginTop: "20px",
  background: "#ffffff",
  padding: "24px",
  borderRadius: "18px",
  maxWidth: "420px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const balanceBox = {
  marginBottom: "14px",
  fontWeight: 600,
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
};

const button = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#16a34a",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const muted = {
  color: "#6b7280",
  fontSize: "14px",
};

const message = {
  marginTop: "12px",
  fontSize: "14px",
};
