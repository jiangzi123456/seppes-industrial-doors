import Image from "next/image";

type Detail = { image: string; title: string; text: string };
const details: Record<string, Detail[]> = {
  "high-speed-spiral-door": [
    { image: "spiral-track.jpg", title: "Non-Contact Spiral Track", text: "Rigid panels travel into the spiral track without touching each other, reducing friction and operating noise while supporting rapid opening." },
    { image: "spiral-balance.jpg", title: "Precision Balancing Mechanism", text: "A balanced, low-friction transmission supports smooth movement, reduces vibration and helps limit wear during frequent operating cycles." },
    { image: "spiral-light-curtain.jpg", title: "Infrared Safety Light Curtain", text: "A dense infrared detection field monitors the passage. When an obstruction is detected, the control system stops or reverses the door." },
    { image: "spiral-safety-edge.jpg", title: "Wireless Safety Edge", text: "The bottom safety edge detects contact during closing and signals the door to reverse, adding protection for people and vehicles." },
    { image: "spiral-release.jpg", title: "Emergency Manual Release", text: "The manual release disengages the motor lock during a power failure so the balanced door can be raised or lowered by hand." },
    { image: "spiral-warning.jpg", title: "Traffic Guidance & Warning Display", text: "Optional radar and a dynamic warning display help coordinate vehicle and pedestrian movement with clear, visible operating signals." },
  ],
  "industrial-sectional-door": [
    { image: "sectional-panels.jpg", title: "High-Density Insulated Panels", text: "Choose from 40–120 mm foam-filled panels with a reference core density of 45 kg/m³. The finger-safe joint profile combines thermal and acoustic insulation with a durable industrial finish." },
    { image: "sectional-seals.jpg", title: "Complete Perimeter Sealing", text: "EPDM seals at the top, sides and bottom work with rubber panel-joint seals to reduce heat transfer, drafts and dust ingress." },
    { image: "sectional-drive.jpg", title: "Intelligent Variable-Frequency Drive", text: "Soft starting and stopping support smooth operation and reduced motor strain. Expansion interfaces enable agreed remote-control and multi-door interlock functions." },
    { image: "sectional-springs.jpg", title: "Precision Spring Balancing", text: "Corrosion-protected torsion springs balance the panel weight for smooth, quiet movement. Spring systems can be specified for 50,000–100,000 operating cycles." },
    { image: "sectional-safety.jpg", title: "Spring & Cable Break Protection", text: "Spring- and cable-break safety devices help arrest abnormal falling movement. Bottom-edge obstacle sensing adds reversing protection during closing." },
    { image: "sectional-options.jpg", title: "Modular Customization", text: "RAL colours and six lifting-track arrangements adapt the door to different buildings. Optional low-threshold wicket doors and activation devices support convenient daily access." },
  ],
  "hydraulic-dock-leveler": [
    { image: "dock-side-seal.jpg", title: "Dock Leveler Side Sealing", text: "Flexible side sealing helps close the gap around the platform structure, reducing dust entry and protecting the mechanism from everyday loading-bay debris." },
    { image: "dock-hydraulics.jpg", title: "Dual Hydraulic Pump System (Optional)", text: "An optional dual-pump hydraulic unit provides controlled lifting and lip movement for stable positioning between the loading bay and vehicle bed." },
    { image: "dock-reinforcement.jpg", title: "Underside Reinforcement Ribs", text: "Reinforced steel ribs beneath the main deck distribute working loads and improve structural rigidity during repeated forklift traffic." },
    { image: "dock-anti-slip.jpg", title: "Anti-Slip Chequered Deck", text: "The raised chequered steel surface improves tyre grip and helps forklifts maintain traction while crossing the platform in demanding loading conditions." },
    { image: "dock-lip-400.jpg", title: "Optional 400 mm Lip", text: "The 400 mm hinged lip provides a practical bridge for standard vehicle positions and supports a smooth transition across the loading gap." },
    { image: "dock-lip-500.jpg", title: "Optional 500 mm Lip", text: "A longer 500 mm lip is available when additional reach is required to accommodate a wider gap or varied vehicle docking position." },
  ],
};

export function ProductComponentDetails({ slug }: { slug: string }) {
  const items = details[slug];
  if (!items) return null;
  const dock = slug === "hydraulic-dock-leveler";
  return (
    <section className="product-page__details" id="product-details" aria-labelledby="component-details-title">
      <div className="container">
        <div className="product-page__center-head">
          <p className="reference-eyebrow blue">Product details</p>
          <h2 id="component-details-title">{dock ? "Built for Everyday Loading" : "Engineered in Every Component"}</h2>
          <p>{dock ? "Explore the platform construction and available hydraulic and lip configurations." : "A closer look at the components behind reliable movement, sealing and protection."}</p>
        </div>
        <div className="product-page__detail-grid">
          {items.map((detail, index) => (
            <article key={detail.image}>
              <div className="product-page__detail-image">
                <Image src={`/images/product-details/${detail.image}`} alt={detail.title} fill sizes="(min-width: 1000px) 33vw, (min-width: 650px) 50vw, 100vw" />
              </div>
              <div className="product-page__detail-copy">
                <span>0{index + 1}</span>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
