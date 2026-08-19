import type { Metadata } from "next";
import { ProductDetailLayout, standardHeroIcons, type ProductDetailContent } from "@/components/product-detail-layout";

export const metadata: Metadata = {
  title: "High Speed Spiral Door",
  description: "Insulated high speed spiral door for frequent exterior industrial traffic, wind resistance, security and energy control.",
  alternates: { canonical: "/products/high-speed-spiral-door" },
};

const product: ProductDetailContent = {
  slug: "high-speed-spiral-door",
  name: "High Speed Spiral Door",
  category: "High Speed Doors",
  series: "Insulated Aluminium Series",
  heroImage: "/images/catalog-high-speed-spiral.webp",
  heroAlt: "SEPPES insulated high speed spiral doors installed at an industrial building",
  heroDescription: "A rapid rigid door that combines high-frequency operation, thermal separation, wind resistance and controlled exterior access.",
  heroFacts: [
    { label: "Opening speed", value: "Up to 2.0 m/s", icon: standardHeroIcons.speed },
    { label: "Panel thickness", value: "40 mm", icon: standardHeroIcons.size },
    { label: "Design life", value: "Approx. 1 million cycles", icon: standardHeroIcons.safety },
  ],
  introImage: "/images/catalog-high-speed-spiral.webp",
  introAlt: "Rigid aluminium high speed spiral door protecting a factory entrance",
  introEyebrow: "Rapid, rigid and insulated",
  introTitle: "Exterior Speed Without Giving Up Protection",
  introLead: "Designed for demanding factory, warehouse and logistics openings.",
  introText: "Double-skin aluminium slats with a high-density polyurethane core travel into a non-contact spiral track. The servo drive and torque-balancing design support smooth high-cycle movement while helping reduce air exchange and energy loss.",
  benefits: [
    { title: "Rapid Operation", text: "Adjustable high-speed movement supports frequent industrial traffic and shorter waiting times." },
    { title: "Insulated Slats", text: "Lightweight 40 mm aluminium panels combine impact strength with thermal separation." },
    { title: "Active Safety", text: "Light curtains, wireless safety edges and emergency release options protect shared openings." },
    { title: "Quiet Spiral Track", text: "Non-contact panel guidance reduces friction, mechanical vibration and operating noise." },
  ],
  principleTitle: "How the Spiral Door Operates",
  principleText: "The activation device, intelligent drive, spiral track, safety sensors and rigid slats work as one coordinated entrance system.",
  steps: [
    { title: "Detect", text: "Radar, access control or an equipment signal requests opening." },
    { title: "Accelerate", text: "The servo drive lifts the rigid slats with controlled acceleration." },
    { title: "Monitor", text: "Safety sensors watch the opening and reverse or stop the door when required." },
    { title: "Close & Insulate", text: "The interlocking slats return to restore security and thermal separation." },
  ],
  planning: [
    { title: "Finished opening", text: "Width, height, headroom and side-room conditions" },
    { title: "Exterior exposure", text: "Wind, rain, temperature and building orientation" },
    { title: "Traffic frequency", text: "Vehicles, people and expected operating cycles" },
    { title: "Track arrangement", text: "Spiral, oval, L-type, vertical or project-specific layout" },
    { title: "Safety strategy", text: "Light curtain, safety edge, warning display and segregation" },
    { title: "Control interface", text: "Radar, access control, interlock or automation signal" },
  ],
  parameterIntro: "The final proposal matches the spiral structure, drive, safety system and slat finish to the verified opening and operating environment.",
  parameters: [
    ["Opening speed", "0.8-1.5 m/s adjustable; selected systems up to 2.0 m/s"],
    ["Door panel", "Double-skin aluminium slats with polyurethane insulation"],
    ["Panel thickness", "40 mm overall; 0.7 mm aluminium skins"],
    ["Drive system", "Servo intelligent drive with torque-balancing system"],
    ["Track options", "Standard spiral, oval spiral, L-type and vertical"],
    ["Safety options", "Light curtain, wireless safety edge and traffic warning display"],
    ["Emergency operation", "Manual release for operation during a power failure"],
    ["Panel finish", "Project-specific colours and stainless-steel frame options"],
    ["Design life", "Approximately 1 million operating cycles"],
    ["Typical position", "Interior or exterior high-frequency industrial opening"],
  ],
  parameterNote: "Opening speed, structure, wind resistance, panel finish and safety devices are selected against the verified project conditions.",
  applicationsLead: "Best suited to high-frequency exterior openings that also need insulation and security.",
  applicationsText: "The rigid panel and track arrangement can be configured around modern steel buildings, logistics routes and specialized industrial entrances.",
  applications: ["Factory exterior entrances", "Logistics traffic routes", "Fire station openings", "High-seal laboratories"],
  faqs: [
    ["Why choose a spiral door instead of a PVC rapid door?", "Choose a spiral door when the opening also requires rigid security, thermal insulation and stronger exterior performance."],
    ["Which track structures are available?", "Standard spiral, oval spiral, L-type and vertical arrangements can be reviewed according to the available installation space."],
    ["Can the door operate during a power failure?", "A manual emergency release can disengage the drive so the balanced door can be operated when power is unavailable."],
    ["Can safety and traffic guidance be customized?", "Yes. Light curtains, wireless safety edges, radar segregation and dynamic warning displays can be configured for the traffic pattern."],
  ],
};

export default function HighSpeedSpiralDoorPage() {
  return <ProductDetailLayout product={product} />;
}
