export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  directAnswer: string;
  selectionIntro: string;
  products: Array<{
    slug: string;
    name: string;
    image: string;
    description: string;
    bestFor: string;
  }>;
  selectionFactors: Array<{ title: string; text: string }>;
  applications: Array<{ title: string; text: string }>;
  faqs: Array<[string, string]>;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "high-speed-doors",
    name: "High Speed Doors",
    shortName: "High Speed Doors",
    eyebrow: "Frequent industrial traffic",
    title: "High Speed Doors for Factories and Warehouses",
    description: "Compare flexible PVC, zipper-guided, stacking and rigid spiral high speed doors by traffic, opening size, environment and exterior exposure.",
    heroImage: "/images/hero-industrial-door.jpg",
    heroAlt: "SEPPES high speed door installed at an industrial access route",
    directAnswer: "High speed doors are designed for frequently used industrial openings where shorter waiting time and controlled separation matter. The correct type depends on whether the opening is internal or external, the traffic pattern, wind exposure, opening size, insulation needs and the required control logic.",
    selectionIntro: "Start with the operating condition, then select the curtain or rigid panel system. Final speed, size, safety devices and wind performance must be confirmed for the project.",
    products: [
      { slug: "high-speed-roll-up-door", name: "High Speed Roll Up Door", image: "/images/catalog-high-speed-roll-up.webp", description: "Flexible PVC rapid access with configurable activation and safety devices.", bestFor: "Frequent internal factory and warehouse traffic" },
      { slug: "zipper-high-speed-door", name: "Zipper High Speed Door", image: "/images/products/zipper-high-speed-door-cleanroom.webp", description: "A flexible curtain with interlocking side guides for controlled production routes.", bestFor: "Clean and controlled internal areas" },
      { slug: "high-speed-spiral-door", name: "High Speed Spiral Door", image: "/images/catalog-high-speed-spiral.webp", description: "Rigid insulated aluminium slats for rapid, secure exterior access.", bestFor: "Exposed entrances needing insulation and security" },
      { slug: "stacking-high-speed-door", name: "Stacking High Speed Door", image: "/images/products/stacking-high-speed-door-hero.webp", description: "A reinforced flexible curtain for wider openings and project-specific wind conditions.", bestFor: "Large or wind-exposed industrial openings" },
      { slug: "garage-high-speed-door", name: "Garage High Speed Door", image: "/images/products/garage-high-speed-door-hero.webp", description: "A compact rigid aluminium system for faster vehicle access at garage openings.", bestFor: "Private and premium vehicle entrances" },
    ],
    selectionFactors: [
      { title: "Traffic and frequency", text: "Identify forklifts, AGVs, vehicles and pedestrians, then record peak and daily operating cycles." },
      { title: "Opening and structure", text: "Confirm finished width, height, headroom, side room and the supporting construction." },
      { title: "Internal or external position", text: "Record wind, rain, temperature, pressure and security requirements at the opening." },
      { title: "Curtain or rigid panels", text: "Use flexible PVC for rapid separation or consider rigid insulated slats when exterior security and insulation are required." },
      { title: "Activation and safety", text: "Plan radar, loops, pull cords, access control, equipment signals and detection around the real traffic route." },
      { title: "System boundary", text: "A door can help manage access and air exchange, but it does not replace HVAC, fire protection or traffic procedures." },
    ],
    applications: [
      { title: "Manufacturing", text: "Frequent material and equipment movement between production zones." },
      { title: "Warehousing", text: "Forklift and vehicle routes where opening time affects workflow and separation." },
      { title: "Food and controlled areas", text: "Project-specific access where hygiene, pressure or environmental separation must be reviewed." },
      { title: "Exterior logistics", text: "Rigid or reinforced systems selected around wind, security and temperature conditions." },
    ],
    faqs: [
      ["Which high speed door is suitable for an internal warehouse route?", "A flexible high speed roll-up or zipper-guided door is a common starting point. Confirm the opening, traffic, environmental separation and impact-recovery requirement before selection."],
      ["When should I choose a high speed spiral door?", "Choose a rigid spiral direction when the opening also requires exterior security, insulation and stronger wind performance."],
      ["Can a high speed door connect with an AGV or production line?", "Control interfaces can be reviewed for equipment signals, access control and agreed interlocks. The signal sequence and safety coverage must be defined for the project."],
      ["What information is needed for selection?", "Send finished opening dimensions, photos, indoor or outdoor position, traffic type, operating frequency, environment, quantity, controls and project location."],
    ],
  },
  {
    slug: "industrial-sectional-doors",
    name: "Industrial Sectional Doors",
    shortName: "Sectional Doors",
    eyebrow: "Insulated overhead access",
    title: "Industrial Sectional Doors for Factories and Warehouses",
    description: "Plan insulated sectional overhead doors by opening size, track arrangement, headroom, panel construction, traffic and building conditions.",
    heroImage: "/images/industrial-sectional-door.webp",
    heroAlt: "Industrial sectional overhead door installed at a factory building",
    directAnswer: "Industrial sectional doors use hinged insulated panels that rise vertically and follow an overhead track. They suit factories, warehouses and loading entrances where insulation, dependable closure and efficient use of wall space matter more than high-speed cycling.",
    selectionIntro: "The track arrangement is as important as the panel. Review roof height, beams, services, clear ceiling space, wind exposure and operating frequency before the door is specified.",
    products: [
      { slug: "industrial-sectional-door", name: "Industrial Sectional Door", image: "/images/industrial-sectional-door.webp", description: "Insulated panels, perimeter sealing and project-matched lifting tracks for industrial buildings.", bestFor: "Factories, warehouses, equipment rooms and loading entrances" },
    ],
    selectionFactors: [
      { title: "Finished opening", text: "Verify the width, height, wall construction and finished floor level." },
      { title: "Available headroom", text: "Map roof height, beams, ducts, cranes and services before choosing the lifting track." },
      { title: "Insulation requirement", text: "Review the required panel construction and perimeter sealing against the indoor and outdoor environment." },
      { title: "Operating frequency", text: "Sectional doors suit standard industrial access. Compare a high speed door when the route cycles frequently." },
      { title: "Safety and access", text: "Define fall protection, obstacle detection, windows, wicket-door requirements and access-control interfaces." },
      { title: "Exterior conditions", text: "Confirm wind, rain, temperature and building orientation for the final structure and sealing design." },
    ],
    applications: [
      { title: "Factory buildings", text: "Insulated general access planned around the building structure and daily workflow." },
      { title: "Warehouses", text: "Vertical-opening access where ceiling and wall space need coordinated track planning." },
      { title: "Equipment rooms", text: "Project-specific panel, track and access arrangements for service openings." },
      { title: "Loading entrances", text: "A building door coordinated with dock equipment and vehicle movement." },
    ],
    faqs: [
      ["How is an industrial sectional door different from a high speed door?", "A sectional door prioritizes insulated rigid closure and flexible overhead track arrangements. A high speed door is usually selected when frequent rapid traffic is the main requirement."],
      ["Which lifting track should I choose?", "The correct track depends on headroom, roof slope, beams, services and the ceiling area that must remain clear."],
      ["Can windows or a personnel door be included?", "Window layouts and a wicket-door option can be reviewed with the panel, structure and safety design."],
      ["What project information is required?", "Provide opening dimensions, internal and external photos, headroom, side room, roof details, operating frequency, environment, controls and project location."],
    ],
  },
  {
    slug: "loading-dock-equipment",
    name: "Loading Dock Equipment",
    shortName: "Loading Dock Equipment",
    eyebrow: "Vehicle-to-building interface",
    title: "Loading Dock Equipment for Warehouse Operations",
    description: "Coordinate hydraulic dock levelers and dock shelters around vehicles, dock geometry, forklift loads, environmental control and a safe loading sequence.",
    heroImage: "/images/home-dock-leveler.webp",
    heroAlt: "Hydraulic dock leveler at a warehouse loading bay",
    directAnswer: "Loading dock equipment creates a controlled interface between the warehouse and vehicle. A dock leveler bridges height and distance differences, while a dock shelter helps limit exposure around the rear of the vehicle. Both should be selected as part of one loading position.",
    selectionIntro: "Start with vehicle and dock data rather than a product size. The door, leveler, shelter, bumpers, restraints, traffic signals and operating procedure must work as one sequence.",
    products: [
      { slug: "hydraulic-dock-leveler", name: "Hydraulic Dock Leveler", image: "/images/catalog-dock-leveler.webp", description: "A powered bridge between the dock and vehicle with project-selected platform, lip and load rating.", bestFor: "Forklift movement between warehouse floor and trailers" },
      { slug: "dock-shelter", name: "Dock Shelter", image: "/images/products/dock-shelter-hero.webp", description: "A project-matched vehicle interface that helps limit weather exposure around the loading position.", bestFor: "Loading bays that need coordinated environmental protection" },
    ],
    selectionFactors: [
      { title: "Vehicle range", text: "Record vehicle widths, heights, trailer-bed levels, suspension movement and rear-door arrangements." },
      { title: "Dock geometry", text: "Confirm pit dimensions, platform height, opening, bumpers, approach and supporting concrete structure." },
      { title: "Forklift and goods", text: "Provide forklift type, axle loads, goods, handling method and operating frequency for capacity selection." },
      { title: "Leveler format", text: "Compare swing-lip, telescopic or edge-mounted directions against reach, pit and retrofit conditions." },
      { title: "Environmental control", text: "Define rain, temperature, cold-chain and hygiene objectives for the door and shelter interface." },
      { title: "Loading safety", text: "Coordinate vehicle positioning, restraints, barriers, lights and the door-leveler operating sequence." },
    ],
    applications: [
      { title: "Distribution centres", text: "Repeated trailer and forklift movement across active loading positions." },
      { title: "Manufacturing docks", text: "Inbound and outbound material handling coordinated with the factory workflow." },
      { title: "Cold-chain logistics", text: "Loading positions where environmental exposure and operating sequence require joint review." },
      { title: "Warehouse retrofits", text: "Existing docks assessed for pit, edge and vehicle-range constraints before equipment selection." },
    ],
    faqs: [
      ["Which dock leveler type should I choose?", "Swing-lip systems suit many standard pits, telescopic lips provide additional reach, and edge-mounted directions can help where a pit was not prepared."],
      ["Should the dock shelter be selected with the leveler?", "Yes. The shelter, door, leveler, bumpers, expected vehicles and loading sequence should be reviewed as one position."],
      ["Is load capacity a standard value?", "Capacity is project-specific and must be selected against forklift axle loads, goods, vehicles and the supporting structure."],
      ["What information is needed for a dock proposal?", "Provide dock and pit drawings, opening dimensions, vehicle range, forklift and load data, site photos, operating frequency, quantity and project location."],
    ],
  },
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export const productCategoryByProduct: Record<string, Pick<ProductCategory, "slug" | "name">> = Object.fromEntries(
  productCategories.flatMap((category) => category.products.map((product) => [product.slug, { slug: category.slug, name: category.name }])),
);
