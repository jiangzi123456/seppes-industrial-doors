import Link from "next/link";

export function CTA() {
  return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow light">Project support</span><h2>Planning an industrial entrance?</h2><p>Tell us the application, opening size and project location. We’ll help you define the right solution.</p></div><Link className="button button-light" href="/contact">Talk to an engineer</Link></div></section>;
}
