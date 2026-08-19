import type { Metadata } from "next";
import { ProductDetailLayout, standardHeroIcons, type ProductDetailContent } from "@/components/product-detail-layout";

export const metadata: Metadata = {
  title: "Hydraulic Dock Leveler",
  description: "Hydraulic dock leveler systems for safe, efficient vehicle-to-warehouse loading, including swing-lip, telescopic and edge-of-dock options.",
  alternates: { canonical: "/products/hydraulic-dock-leveler" },
};

const product: ProductDetailContent = {
  slug: "hydraulic-dock-leveler",
  name: "Hydraulic Dock Leveler",
  category: "Loading Dock Equipment",
  series: "Warehouse Loading Series",
  heroImage: "/images/catalog-dock-leveler.webp",
  heroAlt: "SEPPES hydraulic dock leveler connecting a warehouse dock and vehicle",
  heroDescription: "A powered loading bridge that compensates for vehicle height differences and creates a stable route between trailer and warehouse floor.",
  heroFacts: [
    { label: "Drive", value: "Electro-hydraulic", icon: standardHeroIcons.speed },
    { label: "Lip option", value: "400 mm reinforced lip", icon: standardHeroIcons.size },
    { label: "Extension option", value: "Up to 1,000 mm", icon: standardHeroIcons.safety },
  ],
  introImage: "/images/catalog-dock-leveler.webp",
  introAlt: "Heavy-duty hydraulic loading dock platform with anti-slip deck",
  introEyebrow: "Safer loading transitions",
  introTitle: "Bridge the Gap Between Dock and Vehicle",
  introLead: "Built to improve loading efficiency across changing trailer heights.",
  introText: "The controller, hydraulic power unit, platform and lip operate together to form a stable transition between the dock and vehicle. Swing-lip, telescopic and edge-of-dock arrangements address different building and logistics conditions.",
  benefits: [
    { title: "Smooth Transition", text: "A reinforced bridge-style lip helps reduce impact as forklifts cross between dock and trailer." },
    { title: "Hydraulic Control", text: "Powered platform and lip movement give operators a controlled loading sequence." },
    { title: "Anti-Slip Structure", text: "A welded support frame and patterned deck provide a durable industrial crossing surface." },
    { title: "Multiple Formats", text: "Swing-lip, telescopic and edge-of-dock solutions fit new construction and retrofit projects." },
  ],
  principleTitle: "How the Dock Leveler Operates",
  principleText: "The operator, hydraulic power unit, platform, lip and safety system coordinate to create and remove the vehicle bridge.",
  steps: [
    { title: "Position", text: "The vehicle reverses into the bay and is secured according to the site procedure." },
    { title: "Raise", text: "The hydraulic system lifts the main platform above the trailer bed." },
    { title: "Extend & Lower", text: "The lip reaches the trailer and the platform lowers to form a stable bridge." },
    { title: "Store", text: "After loading, the platform returns to its parked position inside the dock." },
  ],
  planning: [
    { title: "Vehicle range", text: "Trailer dimensions, bed heights and suspension movement" },
    { title: "Dock construction", text: "Pit dimensions, edge conditions and concrete structure" },
    { title: "Load profile", text: "Forklift type, axle loads, goods and operating frequency" },
    { title: "Lip arrangement", text: "Swing lip, telescopic lip or edge-of-dock solution" },
    { title: "Environmental control", text: "Cold chain, sealing, rain and energy-control requirements" },
    { title: "Dock safety", text: "Restraints, bumpers, lights, barriers and operating procedures" },
  ],
  parameterIntro: "The platform size, load rating, hydraulic unit, lip format and safety accessories must be engineered around the dock structure and vehicle fleet.",
  parameters: [
    ["System type", "Electro-hydraulic loading dock leveler"],
    ["Available formats", "Swing lip, telescopic lip and edge-of-dock"],
    ["Swing-lip reference", "400 mm reinforced double 5° bridge-style lip"],
    ["Telescopic extension", "Up to 1,000 mm according to configuration"],
    ["Platform surface", "Heavy-duty anti-slip patterned steel deck"],
    ["Main structure", "Welded support-beam and box-frame construction"],
    ["Installation", "Pit-mounted, edge-mounted or project-specific"],
    ["Control", "Push-button control with hydraulic power unit"],
    ["Safety coordination", "Designed for integration with dock doors and accessories"],
    ["Capacity and size", "Selected according to forklift, goods, vehicles and dock structure"],
  ],
  parameterNote: "Rated capacity, platform dimensions, pit design and accessory package must be confirmed by project engineering before production.",
  applicationsLead: "Best suited to warehouses, distribution centres and manufacturing loading bays.",
  applicationsText: "A coordinated dock system can combine the leveler with an industrial door, dock shelter, vehicle restraint and traffic guidance devices.",
  applications: ["Distribution centres", "Manufacturing docks", "Cold-chain logistics", "Warehouse renovations"],
  faqs: [
    ["Which dock leveler type should I choose?", "Swing-lip systems suit many standard pits, telescopic lips provide greater reach, and edge-mounted units help when a pit was not prepared."],
    ["What information is needed for selection?", "Provide dock and pit dimensions, vehicle bed heights, forklift and load data, operating frequency, quantity and project location."],
    ["Can it work with a dock door and shelter?", "Yes. The loading solution can be coordinated with an industrial door, dock shelter and agreed safety accessories."],
    ["Is the load capacity standard?", "Capacity is project-specific and must be selected against forklift axle loads, goods, vehicle conditions and the supporting structure."],
  ],
};

export default function HydraulicDockLevelerPage() {
  return <ProductDetailLayout product={product} />;
}
