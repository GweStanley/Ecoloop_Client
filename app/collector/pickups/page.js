"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../../lib/api";

export default function CollectorDashboard() {
  const [pendingWaste, setPendingWaste] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) fetchPendingWaste();
  }, [token]);

  const fetchPendingWaste = async () => {
    try {
      const data = await apiFetch("/api/pickup/pending", "GET", null, token);
      setPendingWaste(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const confirmPickup = async (id) => {
    try {
      await apiFetch("/api/pickup/confirm", "POST", { wasteEntryId: id }, token);
      setMessage("Pickup confirmed!");
      fetchPendingWaste(); // refresh list
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) return <p>Please login to view your dashboard</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Collector Dashboard</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}

      {pendingWaste.length === 0 ? (
        <p>No pending waste entries</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Quantity (kg)</th>
              <th>Household ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingWaste.map((w) => (
              <tr key={w._id}>
                <td>{w.type}</td>
                <td>{w.quantityKg}</td>
                <td>{w.userId}</td>
                <td>
                  <button onClick={() => confirmPickup(w._id)}>Confirm Pickup</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
