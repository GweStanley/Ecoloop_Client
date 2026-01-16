"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // simple auth check (JWT stored in localStorage)
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <HeroCarousel />
        <h1>EcoLoop</h1>
        <p className="tagline">
          EcoLoop connects waste producers to people who can reuse, collect,
          or transform that waste — reducing landfill pollution and creating
          real economic value.
        </p>

        <div className="cta">
          {!isAuthenticated ? (
            <>
              <Link href="/auth" className="btn primary">
                Create Free Account
              </Link>
              <Link href="/auth" className="btn secondary">
                Login
              </Link>
            </>
          ) : (
            <Link href="/dashboard" className="btn primary">
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>

      {/* WHAT ECOLOOP ACTUALLY DOES */}
      <section className="story" id="Story">
        <h2>What Happens Inside EcoLoop?</h2>
        <p className="story-intro">
          Most waste is not useless — it’s just disconnected. EcoLoop closes
          that gap.
        </p>

        <div className="story-flow">
          <div className="story-step">
            <span>1</span>
            <h3>Waste is Logged</h3>
            <p>
              Households and companies record the type, quantity, and location
              of waste they generate — organic, plastic, industrial by-products,
              and more.
            </p>
          </div>

          <div className="story-step">
            <span>2</span>
            <h3>Smart Matching</h3>
            <p>
              EcoLoop matches waste that is a by-product for one user with
              another user or company that can reuse or process it.
            </p>
          </div>

          <div className="story-step">
            <span>3</span>
            <h3>Collection & Movement</h3>
            <p>
              Verified collectors accept pickup requests, transport waste,
              and update status transparently inside the platform.
            </p>
          </div>

          <div className="story-step">
            <span>4</span>
            <h3>Impact is Measured</h3>
            <p>
              Users see CO₂ savings, waste diverted from landfills, and real
              environmental impact — not guesses. Points are Scored and Redeemed for cash 
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="how">
        <h2>Who EcoLoop Is For</h2>

        <div className="steps">
          <div className="step">
            <h3>🏠 Households</h3>
            <p>
              Easily log daily waste, schedule pickups, and understand how your
              actions reduce pollution and emissions.
            </p>
          </div>

          <div className="step">
            <h3>🏭 Companies</h3>
            <p>
              Turn industrial waste and by-products into opportunities by
              connecting with users who need them.
            </p>
          </div>

          <div className="step">
            <h3>🚚 Collectors</h3>
            <p>
              Find verified pickup jobs, manage routes, and earn income while
              supporting a circular economy.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST + VALUE */}
      <section className="value">
        <h2>Why EcoLoop Works</h2>

        <ul>
          <li>♻️ Waste becomes a resource, not a problem</li>
          <li>🔍 Transparent tracking instead of manual systems</li>
          <li>🤝 Real connections between waste producers and users</li>
          <li>🌍 Measurable environmental impact</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <h2>Close the loop. Create value from waste.</h2>

        {!isAuthenticated ? (
          <Link href="/auth" className="btn primary large">
            Join EcoLoop
          </Link>
        ) : (
          <Link href="/dashboard" className="btn primary large">
            View Your Impact
          </Link>
        )}
      </section>
    </main>
  );
}
