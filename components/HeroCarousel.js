"use client";

import { useEffect, useRef } from "react";

export default function HeroCarousel() {
  const containerRef = useRef(null);

  const messages = [
    "♻️ Turn your waste into value with EcoLoop!",
    "🌱 Track your CO₂ savings in real-time.",
    "🏠 Households, post your waste easily!",
    "🚛 Collectors, manage pickups efficiently!",
    "🏭 Companies, find waste streams that fit your needs!",
    "💚 Earn Eco Points and make a real impact!",
  ];

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const step = () => {
      if (!container) return;
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(step);
    };

    const animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        background: "linear-gradient(90deg, #76a316 0%, #22c55e 100%)",
        padding: "12px 0",
        color: "#fff",
        fontWeight: "600",
        fontSize: "16px",
        letterSpacing: "0.5px",
      }}
      ref={containerRef}
    >
      {/* Duplicate messages for seamless looping */}
      {[...messages, ...messages].map((msg, idx) => (
        <span
          key={idx}
          style={{
            display: "inline-block",
            marginRight: "60px",
          }}
        >
          {msg}
        </span>
      ))}
    </div>
  );
}
