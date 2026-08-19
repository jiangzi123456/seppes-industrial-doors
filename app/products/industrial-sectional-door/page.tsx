import type { Metadata } from "next";
import { ProductDetailLayout, standardHeroIcons, type ProductDetailContent } from "@/components/product-detail-layout";

export const metadata: Metadata = {
  title: "Industrial Sectional Door",
  description: "Insulated industrial sectional overhead door with flexible track arrangements, sealing and safety protection for factories and warehouses.",
  alternates: { canonical: "/products/industrial-sectional-door" },
};

const product: ProductDetailContent = {
  slug: "industrial-sectional-door",
  name: "Industrial Sectional Door",
  category: "Sectional Doors",
  series: "Insulated Overhead Series",
  heroImage: "/images/industrial-sectional-door.webp",
  heroAlt: "White SEPPES industrial sectional overhead door installed on a factory building",
  heroDescription: "A durable insulated overhead door with flexible lifting tracks, perimeter sealing and safety protection for industrial buildings.",
  heroFacts: [
    { label: "Panel range", value: "40-120 mm", icon: standardHeroIcons.speed },
    { label: "Track options", value: "6+ arrangements", icon: standardHeroIcons.size },
    { label: "Spring life", value: "50,000-100,000 cycles", icon: standardHeroIcons.safety },
  ],
  introImage: "/images/industrial-sectional-door.webp",
  introAlt: "Insulated sectional door with vision windows at an industrial entrance",
  introEyebrow: "Insulated overhead access",
  introTitle: "Protection, Sealing and Space Efficiency",
  introLead: "A dependable building door engineered around the available ceiling and wall space.",
  introText: "High-density polyurethane panels, EPDM perimeter seals, precision rollers and a balanced torsion-spring system create a smooth industrial entrance with strong insulation, low operating noise and flexible track geometry.",
  benefits: [
    { title: "Insulated Panels", text: "High-density 40-120 mm panel options support thermal control, strength and acoustic comfort." },
    { title: "Flexible Tracks", text: "More than six lifting arrangements adapt the door to roof height, services and available headroom." },
    { title: "Fall Protection", text: "Spring- and cable-break protection locks the door rapidly if an abnormal failure occurs." },
    { title: "Smooth Control", text: "Variable-frequency control supports soft start, soft stop and integration with factory systems." },
  ],
  principleTitle: "How the Sectional Door Operates",
  principleText: "Hinged insulated panels travel through precision tracks while springs balance the door weight and the drive controls each movement.",
  steps: [
    { title: "Activate", text: "A button, remote control or agreed access signal starts the opening cycle." },
    { title: "Lift", text: "The balanced panel assembly rises vertically and follows the selected overhead track." },
    { title: "Protect", text: "Fall protection and bottom-edge sensing monitor abnormal movement or obstruction." },
    { title: "Close & Seal", text: "EPDM perimeter seals and panel joints restore weather and thermal separation." },
  ],
  planning: [
    { title: "Clear opening", text: "Width, height and surrounding structural construction" },
    { title: "Headroom", text: "Roof height, beams, pipes, ducts and crane clearances" },
    { title: "Track geometry", text: "Standard, high lift, vertical, low headroom or project-specific" },
    { title: "Environment", text: "Temperature, wind, rain, dust and insulation targets" },
    { title: "Traffic and controls", text: "Daily cycles, activation and access-control requirements" },
    { title: "Panel options", text: "Colour, windows, wicket door and ventilation requirements" },
  ],
  parameterIntro: "Panel thickness, track geometry, spring system, sealing and control functions are configured against the building and operating conditions.",
  parameters: [
    ["Panel thickness", "40-120 mm high-density polyurethane insulated panels"],
    ["Foam density", "Up to 45 kg/m³ reference construction"],
    ["Panel joint", "Finger-safe profile with thermal-break sealing"],
    ["Perimeter sealing", "EPDM top, side and bottom seals"],
    ["Track options", "6+ lifting arrangements, including standard and vertical lift"],
    ["Spring life", "Project-selectable 50,000-100,000 cycles"],
    ["Fall protection", "Torsion-spring and cable-break safety devices"],
    ["Bottom safety", "Obstacle detection and reversing option"],
    ["Control", "Variable-frequency drive with expansion interfaces"],
    ["Customization", "RAL colours, windows, wicket door and sensing devices"],
  ],
  parameterNote: "Final panel, hardware, track, spring cycle rating and wind performance must be confirmed for the opening size and building structure.",
  applicationsLead: "Best suited to insulated factory, warehouse and equipment-room entrances.",
  applicationsText: "Track geometry and panel options allow the door to fit both new industrial buildings and renovation projects.",
  applications: ["Factory buildings", "Warehouses", "Equipment rooms", "Loading-bay entrances"],
  faqs: [
    ["Which lifting track should I choose?", "The correct track depends on headroom, roof slope, beams, services and how much clear ceiling space must remain available."],
    ["Can windows or a personnel door be added?", "Yes. Multiple window layouts and a wicket-door option can be reviewed together with the panel and safety design."],
    ["How is the opening protected against a fall?", "Spring-break and cable-break protection can lock the moving system rapidly if an abnormal component failure occurs."],
    ["Can the door connect with access control?", "Yes. The control package can reserve interfaces for remote operation, access systems and agreed interlocks."],
  ],
};

export default function IndustrialSectionalDoorPage() {
  return <ProductDetailLayout product={product} />;
}
