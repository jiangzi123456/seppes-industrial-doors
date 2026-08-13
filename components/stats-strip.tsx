"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2011, suffix: "", label: "Established" },
  { value: 20000, suffix: "+", label: "m² manufacturing facility" },
  { value: 100, suffix: "+", label: "Employees" },
  { value: 25, suffix: "+", label: "Certification support" },
];

export function StatsStrip() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(true), { threshold: .35 }); if (root.current) observer.observe(root.current); return () => observer.disconnect(); }, []);
  useEffect(() => { if (!active) return; const started = performance.now(); let frame = 0; const tick = (now: number) => { const next = Math.min((now - started) / 1150, 1); setProgress(1 - Math.pow(1 - next, 3)); if (next < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [active]);
  return <section className="proof-strip"><div className="container proof-grid" ref={root}>{stats.map((stat) => { const start = stat.value === 2011 ? 2000 : 0; const display = Math.round(start + (stat.value - start) * progress).toLocaleString("en-US"); return <div key={stat.label}><strong>{display}{stat.suffix}</strong><span>{stat.label}</span></div>; })}</div></section>;
}
