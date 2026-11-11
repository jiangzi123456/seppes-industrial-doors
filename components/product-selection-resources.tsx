import Link from "next/link";
import { ArrowUpRight, BookOpen, Factory, Settings2, ShieldCheck } from "lucide-react";

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
  const categories = [
    { label: "Selection guide", icon: BookOpen },
    { label: "Project application", icon: Factory },
    { label: "Industry solution", icon: Settings2 },
    { label: "Quality & certification", icon: ShieldCheck },
  ];
  const links = [...resource.links, ["/quality-certifications", "Review certification scope and inspection documents"]];
  return <section className="product-page__planning selection-resources"><div className="container">
    <div className="selection-resources__heading">
      <div><p className="reference-eyebrow blue">Selection resources</p><h2>Plan the Door Around Your Application</h2></div>
      <p className="selection-resources__intro">{resource.intro}</p>
    </div>
    <nav className="selection-resources__grid" aria-label="Product selection resources">
      {links.map(([href, label], index) => {
        const { label: category, icon: Icon } = categories[index];
        return <Link className="selection-resources__card" href={href} key={href}>
          <span className="selection-resources__top"><span className="selection-resources__icon"><Icon size={23} aria-hidden="true" /></span><span className="selection-resources__number">0{index + 1}</span></span>
          <span className="selection-resources__category">{category}</span>
          <span className="selection-resources__title">{label}</span>
          <span className="selection-resources__footer">Explore resource <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>;
      })}
    </nav>
  </div></section>;
}
