import Link from "next/link";

const resources: Record<string, { intro: string; links: Array<[string, string]> }> = {
  "high-speed-roll-up-door": {
    intro: "For frequent internal traffic, review the curtain guidance, activation method and safety detection together. Confirm opening dimensions and equipment signals before selecting a configuration.",
    links: [["/source/blog/zipper-vs-brush-sealed-high-speed-doors", "Compare brush-guided and zipper-guided doors"], ["/project-support/rapid-doors-for-an-automated-assembly-workshop", "Explore an automated workshop project"], ["/solutions/automotive-automated-manufacturing", "Plan access for automated manufacturing"]],
  },
  "zipper-high-speed-door": {
    intro: "For controlled production areas, review pressure strategy, cleaning requirements, traffic and interlocks. Door sealing must be coordinated with the facility ventilation and access plan.",
    links: [["/source/blog/zipper-high-speed-door-for-cleanrooms", "Read the cleanroom zipper door selection guide"], ["/project-support/cleanroom-zipper-door-access", "Explore a controlled production access example"], ["/solutions/pharmaceutical-cleanroom", "Review pharmaceutical cleanroom requirements"]],
  },
  "high-speed-spiral-door": {
    intro: "For frequent exterior access, review traffic frequency, wind exposure, insulated slats and security together. Check track clearances against the building drawing before confirming the door arrangement.",
    links: [["/source/blog/high-speed-door-vs-industrial-sectional-door", "Compare high-speed and sectional doors"], ["/project-support/exterior-high-speed-spiral-door", "Explore an exterior spiral door application"], ["/solutions/cold-chain", "Review cold-chain access planning"]],
  },
  "industrial-sectional-door": {
    intro: "For insulated building access, measure headroom, side room and overhead obstructions. Review the track layout, traffic pattern and loading equipment as part of the complete opening.",
    links: [["/source/blog/industrial-sectional-door-track-selection-headroom", "Choose a sectional door track by headroom"], ["/project-support/integrated-logistics-loading-bay", "Explore a coordinated loading-bay application"], ["/solutions/logistics-warehousing", "Review logistics and warehouse openings"]],
  },
};

export function ProductSelectionResources({ slug }: { slug: string }) {
  const resource = resources[slug];
  if (!resource) return null;
  return <section className="product-page__planning"><div className="container">
    <p className="reference-eyebrow blue">Selection resources</p>
    <h2>Plan the Door Around Your Application</h2>
    <p>{resource.intro}</p>
    <ul>{resource.links.map(([href, label]) => <li key={href}><Link className="reference-text-link" href={href}>{label}</Link></li>)}</ul>
    <p><Link className="reference-text-link" href="/quality-certifications">Review certification scope and inspection documents</Link></p>
  </div></section>;
}
