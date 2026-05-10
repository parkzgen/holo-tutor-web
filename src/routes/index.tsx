import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import "@/styles/landing.css";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/chat" });
  },
  component: Landing,
});

/* ------------------------------------------------------------------
   This page is intentionally written as plain HTML + a CSS file
   (src/styles/landing.css). No Tailwind, no UI component imports.
   Edit the markup below or the CSS file directly to restyle.
   The only React bits are the auth redirect (above) and a tiny
   one-time effect that toggles the `is-visible` class for fade-in.
   ------------------------------------------------------------------ */
function Landing() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const v = mounted ? "fade-in is-visible" : "fade-in";

  return (
    <main className="landing">
      <div className="landing-grid" aria-hidden="true"></div>

      <header className="landing-header">
        <a href="/" className="landing-logo">
          <span className="landing-logo-mark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
          </span>
          <span>Synaptic</span>
        </a>

        <nav className="landing-nav">
          <a href="/login" className="btn btn-ghost">Sign in</a>
          <a href="/login?mode=signup" className="btn btn-primary">Get started</a>
        </nav>
      </header>

      <section className="hero">
        <div className={`hero-pill ${v}`}>
          <span className="hero-pill-dot"></span>
          AI tutor that helps you learn — not cheat
        </div>

        <h1 className={`hero-title ${v}`}>
          Homework, <span className="accent">decoded</span>.
        </h1>

        <p className={`hero-sub ${v} delay-1`}>
          Ask questions across Math, Science, English, and History. Get clear,
          step-by-step explanations from a futuristic AI tutor designed for
          curious students.
        </p>

        <div className={`hero-actions ${v} delay-2`}>
          <a href="/login?mode=signup" className="btn btn-primary btn-lg btn-glow">
            Start learning free
          </a>
          <a href="/login" className="btn btn-outline btn-lg">
            I have an account
          </a>
        </div>

        <div className="subjects">
          <div className="subject-card">
            <svg className="subject-icon" viewBox="0 0 24 24" fill="none" stroke="var(--math)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>
            </svg>
            <span className="subject-label">Math</span>
          </div>
          <div className="subject-card">
            <svg className="subject-icon" viewBox="0 0 24 24" fill="none" stroke="var(--science)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
            </svg>
            <span className="subject-label">Science</span>
          </div>
          <div className="subject-card">
            <svg className="subject-icon" viewBox="0 0 24 24" fill="none" stroke="var(--english)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            <span className="subject-label">English</span>
          </div>
          <div className="subject-card">
            <svg className="subject-icon" viewBox="0 0 24 24" fill="none" stroke="var(--history)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
            </svg>
            <span className="subject-label">History</span>
          </div>
        </div>

        <div className="honesty">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>
          </svg>
          <p>
            <strong>Learn, don't cheat.</strong> Synaptic is built to explain,
            guide, and tutor. Submitting AI-written answers as your own may
            violate your school's academic honesty policy.
          </p>
        </div>
      </section>
    </main>
  );
}
