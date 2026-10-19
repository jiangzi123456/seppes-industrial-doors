import type { Metadata } from "next";
import { ProductDetailLayout, standardHeroIcons, type ProductDetailContent } from "@/components/product-detail-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Zipper High-Speed Door for Cleanrooms & Industry",
  description: "Configure a SEPPES zipper high-speed door for controlled rooms, production areas and frequent traffic with interlocking guides and project-specific controls.",
  path: "/products/zipper-high-speed-door",
  image: "/images/products/zipper-high-speed-door-hero.webp",
});

const product: ProductDetailContent = {
  slug: "zipper-high-speed-door",
  name: "Zipper High-Speed Door",
  category: "High Speed Doors",
  series: "Interlocking Guide System",
  heroImage: "/images/products/zipper-high-speed-door-hero.webp",
  heroAlt: "Blue SEPPES zipper high-speed door installed at a cleanroom entrance",
  heroDescription: "Rapid flexible access with interlocking curtain-edge guides for controlled production, cleanroom and high-frequency internal routes.",
  heroFacts: [
    { label: "Opening speed", value: "0.6–1.5 m/s", icon: standardHeroIcons.speed },
    { label: "Daily frequency", value: "Up to 800 cycles", icon: standardHeroIcons.safety },
    { label: "Maximum size", value: "Up to 4.0 × 4.5 m", icon: standardHeroIcons.size },
  ],
  introImage: "/images/products/zipper-high-speed-door-cleanroom.webp",
  introAlt: "SEPPES zipper high-speed door in a controlled production room",
  introEyebrow: "Controlled access",
  introTitle: "Keep the Curtain Engaged Along the Side Guides",
  introLead: "Choose the zipper guide when frequent traffic, perimeter engagement and recovery after accidental curtain displacement are important to the application.",
  introText: "The shaped curtain edge runs inside matching side tracks. This creates a continuous mechanical relationship between the flexible curtain and guides when closed. On suitable configurations, the door can guide a displaced curtain back into the tracks during a following cycle. Final sealing, pressure and recovery performance depend on the selected model, size and site conditions.",
  supportingLinks: [
    { href: "/source/blog/zipper-high-speed-door-for-cleanrooms", label: "Read the cleanroom selection guide" },
    { href: "/source/blog/zipper-vs-brush-sealed-high-speed-doors", label: "Compare zipper and brush guides" },
  ],
  benefits: [
    { title: "Continuous Side Engagement", text: "The curtain edge engages inside the shaped guide for controlled perimeter retention." },
    { title: "Rapid Traffic Flow", text: "Automatic opening and closing can reduce waiting and unnecessary open time on frequent routes." },
    { title: "Impact Recovery Option", text: "Suitable configurations can reinsert a displaced curtain edge and help restore operation after inspection." },
    { title: "Project-Specific Controls", text: "Activation, access permissions, interlocks and equipment signals can be planned around the workflow." },
  ],
  principleTitle: "How the Zipper Guide Works",
  principleText: "The motor raises the flexible curtain while shaped edges travel through matching side guides. The controller coordinates activation, safety sensing and the closing sequence for the agreed route.",
  steps: [
    { title: "Detect", text: "Radar, pull cord, access control or an agreed machine signal requests opening." },
    { title: "Open", text: "The drive lifts the flexible curtain to clear the planned traffic envelope." },
    { title: "Protect", text: "Selected sensors monitor the passage and coordinate safe closing behaviour." },
    { title: "Re-engage", text: "The curtain returns through the zipper guides; suitable recovery designs can reinsert a displaced edge." },
  ],
  planning: [
    { title: "Boundary requirement", text: "Define zoning, pressure direction, temperature, dust or hygiene objectives and the evidence required." },
    { title: "Traffic", text: "Record people, carts, forklifts or AGVs, approach direction, speed and daily operating frequency." },
    { title: "Cleaning and materials", text: "Confirm cleaning agents, concentrations, contact time and required frame, curtain and window materials." },
    { title: "Control sequence", text: "Document activation, interlock, timeout, fault, emergency release and equipment-interface logic." },
  ],
  parameterIntro: "The final door is configured around the opening and project requirements. Confirm all quantitative performance and options in the approved technical proposal.",
  parameters: [
    ["Door type", "Flexible high-speed door with zipper side guides"],
    ["Opening speed", "0.6–1.5 m/s"],
    ["Maximum size", "Zipper version up to 4,000 × 4,500 mm; confirm configuration"],
    ["Curtain", "1.2 mm flexible curtain with 1.2 mm vision panel"],
    ["Frame", "Painted cold-rolled steel; standard finish RAL 7035"],
    ["Activation", "Push button with reserved I/O and RS-485 interfaces"],
    ["Safety", "Infrared photocell and safety bottom edge"],
    ["Installation space", "500 mm headroom; 150 mm non-motor side; 400 mm motor side"],
    ["Power", "220 V; motor selected by door area"],
    ["Recovery", "Available on suitable configurations; confirm proposal scope"],
    ["Controls", "Standalone, interlocked or equipment-coordinated logic"],
  ],
  parameterNote: "Performance depends on the selected size, construction, controls and installed conditions. Request model-specific drawings and evidence where pressure or leakage criteria apply.",
  applicationsLead: "The best fit is an internal route that needs frequent movement and a more engaged flexible-curtain perimeter.",
  applicationsText: "Typical projects include controlled production, food and pharmaceutical areas, electronics, packaging and automated material routes. The door supports the boundary but does not replace the facility HVAC, validation or traffic-safety strategy.",
  applications: ["Cleanroom material access", "Food and pharmaceutical production", "Electronics and precision manufacturing", "Automated equipment and AGV routes"],
  faqs: [
    ["Is a zipper high-speed door airtight?", "Do not infer an airtightness class from the guide name alone. Confirm leakage or pressure evidence for the selected size, curtain, guides, seals and test conditions."],
    ["Can the curtain repair itself after an impact?", "Some configurations can guide a displaced curtain edge back into the tracks during a later cycle. Confirm the recovery function in the proposal and inspect the curtain, guides and safety devices after impact."],
    ["Can it be used in a cleanroom?", "It can support frequent cleanroom access when materials, pressure behaviour, cleaning, controls and validation requirements are defined. The door does not establish cleanroom performance by itself."],
    ["Can two zipper doors be interlocked?", "Yes, when included in the project controls. Define permissions, timeouts, fault response and emergency release before production."],
    ["What should I send for selection?", "Send opening dimensions, room use, traffic, operating frequency, environmental objective, cleaning method, pressure information, control logic, project location, photos and drawings."],
  ],
};

export default function ZipperHighSpeedDoorPage() {
  return <ProductDetailLayout product={product} />;
}
