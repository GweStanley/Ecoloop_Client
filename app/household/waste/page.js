"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../../lib/api";

export default function PostWaste() {
  const [type, setType] = useState("plastic");
  const [quantityKg, setQuantityKg] = useState("");
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Get user role from token
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserRole(payload.role);
      } catch {
        setUserRole(null);
      }
    }
  }, [token]);

  // Redirect if not household
  useEffect(() => {
    if (userRole && userRole !== "household") {
      router.push("/dashboard");
    }
  }, [userRole, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError("Please login first");
      return;
    }
    if (!location) {
      setError("Please enter your location");
      return;
    }

    try {
      const response = await apiFetch(
        "/api/waste/create",
        "POST",
        {
          type,
          quantityKg: parseFloat(quantityKg),
          notes,
          location,
        },
        token
      );

      setMessage(response.message || "Waste entry posted successfully!");
      setError("");
      setType("plastic");
      setQuantityKg("");
      setNotes("");
      setLocation("");
    } catch (err) {
      setError(err.message || "Failed to post waste");
      setMessage("");
    }
  };

  if (userRole && userRole !== "household") {
    return <p style={{ padding: "120px 20px", textAlign: "center" }}>Only households can post waste.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "120px",
        fontFamily: "Arial, sans-serif",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Post Waste</h2>

        {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Waste Type</label>
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

          <label>Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Notes (optional)</label>
          <textarea
            placeholder="Any additional info"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ ...inputStyle, height: "60px" }}
          />

          <button type="submit" style={buttonStyle}>
            Post Waste
          </button>
        </form>
      </div>
    </div>
  );
}

// ================= STYLES =================
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  background: "#16a34a",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};
