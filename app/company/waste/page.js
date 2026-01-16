"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../../lib/api";

export default function CompanyDashboard() {
  const [listings, setListings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState("plastic");
  const [quantityKg, setQuantityKg] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [notes, setNotes] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const CO2_FACTORS = {
    plastic: 1.5,
    metal: 2.0,
    organic: 0.5,
    paper: 1.0,
  };

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Fetch listings and matches
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/company/matches`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setMatches(data || []);
        setListings(data.map((item) => item.listing));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (token) fetchData();
  }, [token]);

  const totalKg = listings.reduce((acc, entry) => acc + (entry.quantityKg || 0), 0);
  const totalCO2 = listings.reduce(
    (acc, entry) => acc + (entry.quantityKg || 0) * (CO2_FACTORS[entry.materialType] || 0),
    0
  );

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setFormError("Please login first");
      return;
    }
    try {
      const response = await apiFetch(
        "/api/company/waste",
        "POST",
        { materialType: type, quantityKg: parseFloat(quantityKg), frequency, notes },
        token
      );
      setFormMessage(response.message || "Waste listing created!");
      setFormError("");
      setType("plastic");
      setQuantityKg("");
      setFrequency("once");
      setNotes("");
      // Refresh listings
      setListings((prev) => [...prev, response.listing]);
    } catch (err) {
      setFormError(err.message);
      setFormMessage("");
    }
  };

  if (loading)
    return (
      <div style={loadingStyle}>
        <p>Loading company dashboard...</p>
      </div>
    );

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Company Dashboard</h1>

      {/* Stats */}
      <div style={statsContainer}>
        <div style={statCard}>
          <p style={statLabel}>Total Waste Listed</p>
          <p style={statValue}>{totalKg} kg</p>
        </div>
        <div style={statCard}>
          <p style={statLabel}>Estimated CO₂ Impact</p>
          <p style={statValue}>{totalCO2.toFixed(2)} kg</p>
        </div>
      </div>

      {/* Form to list new waste */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>List New Waste</h2>

        {formMessage && <p style={{ color: "green", textAlign: "center" }}>{formMessage}</p>}
        {formError && <p style={{ color: "red", textAlign: "center" }}>{formError}</p>}

        <form onSubmit={handleSubmit} style={formStyle}>
          <label>Material Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} style={inputStyle}>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="organic">Organic</option>
            <option value="paper">Paper</option>
          </select>

          <label>Quantity (kg)</label>
          <input
            type="number"
            placeholder="Enter quantity in kg"
            value={quantityKg}
            onChange={(e) => setQuantityKg(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)} style={inputStyle}>
            <option value="once">Once</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label>Notes (optional)</label>
          <textarea
            placeholder="Any additional info"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ ...inputStyle, height: "60px" }}
          />

          <button type="submit" style={buttonStyle}>
            Create Listing
          </button>
        </form>
      </section>

      {/* Existing Listings */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Your Waste Listings</h2>
        <div style={listContainer}>
          {listings.length ? (
            listings.map((entry) => (
              <div key={entry._id} style={cardStyle}>
                <p>
                  <strong>Type:</strong> {entry.materialType}
                </p>
                <p>
                  <strong>Quantity:</strong> {entry.quantityKg} kg
                </p>
                <p>
                  <strong>Frequency:</strong> {entry.frequency || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p style={emptyMsg}>No waste listings yet.</p>
          )}
        </div>
      </section>

      {/* Matches */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Matching Opportunities</h2>
        <div style={listContainer}>
          {matches.length ? (
            matches.map((item, idx) => (
              <div key={idx} style={cardStyle}>
                <p>
                  <strong>Listing:</strong> {item.listing.materialType},{" "}
                  {item.listing.quantityKg} kg
                </p>
                {item.matches.length ? (
                  <ul style={matchList}>
                    {item.matches.map((match) => (
                      <li key={match._id}>
                        Match: {match.materialType}, {match.quantityKg} kg from{" "}
                        {match.companyId || "unknown company"}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontStyle: "italic", marginTop: "4px" }}>No matches yet</p>
                )}
              </div>
            ))
          ) : (
            <p style={emptyMsg}>No matching opportunities available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

/* ===================== STYLES ===================== */
const containerStyle = {
  padding: "24px",
  maxWidth: "1000px",
  margin: "80px auto 40px auto",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#16a34a",
};

const statsContainer = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "30px",
};

const statCard = {
  flex: "1 1 200px",
  background: "#ecfdf5",
  padding: "16px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const statLabel = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#065f46",
};

const statValue = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#16a34a",
  marginTop: "6px",
};

const sectionStyle = {
  marginTop: "30px",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#374151",
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const cardStyle = {
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
};

const matchList = {
  marginTop: "8px",
  marginLeft: "16px",
  listStyleType: "disc",
};

const emptyMsg = {
  fontStyle: "italic",
  color: "#6b7280",
};

const loadingStyle = {
  padding: "40px",
  textAlign: "center",
  fontSize: "16px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
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
