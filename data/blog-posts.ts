export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  numberedItems?: string[];
  subsections?: Array<{
    heading: string;
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
  }>;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro: string;
  leadImage?: string;
  leadImageAlt?: string;
  leadImageCaption?: string;
  sections: BlogSection[];
  relatedHref: string;
  relatedLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "new-generation-high-speed-roll-up-door",
    category: "Product News",
    date: "August 19, 2026",
    dateISO: "2026-08-19",
    readTime: "8 min read",
    title: "New-Generation High-Speed Roll-Up Door for Busy Production Areas",
    excerpt: "See how a SEPPES high-speed roll-up door improves traffic flow, zone separation and automatic access in busy production areas.",
    image: "/images/high-speed-roll-up-door-product.jpg",
    imageAlt: "SEPPES high-speed roll-up door installed in a production area",
    intro: "For busy internal production areas, a high-speed roll-up door is a practical choice when the priorities are frequent access, shorter waiting time and controlled separation. The SEPPES PVC rapid door combines 0.6–1.5 m/s opening speed, safety sensing and configurable controls in one entrance system designed around the real traffic pattern.",
    leadImage: "/images/blog/rapid-door-production-line.jpg",
    leadImageAlt: "Two SEPPES high-speed roll-up doors installed beside automated production equipment",
    leadImageCaption: "Two high-speed roll-up doors provide controlled access between equipment cells in a busy production area.",
    sections: [
      {
        heading: "Why busy production areas need a faster doorway",
        paragraphs: [
          "A conventional door can become a repeated bottleneck when forklifts, operators and material carts share the same route. Slow operation creates queues, while a doorway left open for too long allows conditioned air, dust, odours or insects to move between adjacent zones.",
          "A high-speed roll-up door reduces the open interval without asking the production team to operate the door manually. The benefit is not speed in isolation: it is a more predictable movement sequence between production, packaging and warehouse areas.",
        ],
        image: "/images/blog/rapid-door-agv-access.jpg",
        imageAlt: "AGV approaching a SEPPES high-speed roll-up door in a production facility",
        imageCaption: "A high-speed roll-up door can coordinate with AGV traffic to support automated material flow between production zones.",
      },
      {
        heading: "What the new-generation SEPPES door brings together",
        paragraphs: [
          "Reliable high-frequency movement depends on the complete entrance system. The FROG PUPIL variable-frequency controller coordinates the motor and selected activation method, while the flexible PVC curtain provides a lightweight separation surface. Transparent vision sections can improve awareness across a shared route.",
          "Dense nylon side brushes guide the curtain and help limit uncontrolled air exchange around the tracks. Aluminium wind-resistance bars reinforce the curtain for the operating conditions defined in the proposal. Together, these components support controlled opening, closing and separation throughout the working shift.",
        ],
        bullets: [
          "0.6–1.5 m/s opening speed for frequent internal traffic",
          "0.8 mm PVC curtain with a 1.2 mm clear vision panel in the standard reference configuration",
          "Dense nylon side brushes and aluminium wind-resistance bars",
          "Autonics infrared photocell protection across the passage",
          "Reserved I/O terminals and RS-485 communication for agreed automation interfaces",
        ],
        image: "/images/blog/rapid-door-multiple-installation.jpg",
        imageAlt: "Multiple orange SEPPES high-speed roll-up doors installed along a production line",
        imageCaption: "Multiple rapid doors can separate adjacent work cells while preserving an efficient route through the production area.",
      },
      {
        heading: "Choose activation around the way traffic approaches",
        paragraphs: [
          "The opening device should match the workflow. Radar supports hands-free approach detection, a pull cord gives forklift drivers deliberate control, and an induction loop can identify vehicles within a defined ground area. Access control is useful where only authorized movement should trigger the door.",
          "The correct detection zone opens the door early enough for smooth travel but avoids unnecessary cycles caused by nearby movement. Mixed pedestrian and vehicle traffic may require additional sensing, barriers or route management after a site-specific safety review.",
        ],
        image: "/images/blog/frog-pupil-control-systems.jpg",
        imageAlt: "FROG PUPIL variable-frequency control systems prepared for SEPPES high-speed doors",
        imageCaption: "The FROG PUPIL variable-frequency control system supports stable, responsive and safe daily door operation.",
      },
      {
        heading: "Connect the door with the production workflow",
        paragraphs: [
          "A busy entrance may need to respond to more than a person or forklift. Reserved I/O terminals and RS-485 communication allow agreed signals from access-control equipment, AGVs, conveyors or production machinery to be considered during project design.",
          "Interface requirements should be documented before production, including the signal type, opening permission, closing logic, fault response and responsibility for commissioning. This turns a standalone door into a coordinated part of the facility rather than an isolated device.",
        ],
        image: "/images/blog/rapid-door-production-workflow.jpg",
        imageAlt: "Blue SEPPES high-speed roll-up door connecting a warehouse and production workflow",
        imageCaption: "The high-speed door can be configured around forklift access, warning devices and the required production-control sequence.",
      },
      {
        heading: "What to confirm before requesting a quotation",
        paragraphs: [
          "A dependable proposal starts with the finished opening, available side room and headroom, traffic direction, operating frequency and environmental-separation target. Photos or drawings help identify pipes, columns, conveyors and protective barriers around the opening.",
          "The final proposal should state the curtain type, colour, vision section, opening method, safety devices, motor position, power supply and control interfaces. SEPPES follows a mid-to-high-end brand route built around application-based engineering, consistent manufacturing and responsive project support—not low-price competition.",
        ],
        bullets: [
          "Finished opening width and height, quantity and project location",
          "Pedestrian, forklift, AGV or equipment traffic pattern",
          "Expected cycles per hour and per day",
          "Dust, insects, temperature, wind or pressure conditions",
          "Button, radar, pull cord, induction loop or automatic signal",
          "Available site photos, drawings and automation requirements",
        ],
        image: "/images/blog/rapid-door-maintenance.jpg",
        imageAlt: "SEPPES technicians inspecting and maintaining a high-speed roll-up door",
        imageCaption: "Accessible components and planned inspection help maintenance teams keep the rapid door operating safely and consistently.",
      },
    ],
    relatedHref: "/products/high-speed-roll-up-door",
    relatedLabel: "Explore the High Speed Roll Up Door",
  },
  {
    slug: "control-dust-and-airflow-between-production-zones",
    category: "Solutions",
    date: "August 18, 2026",
    dateISO: "2026-08-18",
    readTime: "8 min read",
    title: "How to Control Dust and Airflow Between Production Zones",
    excerpt: "Learn how SEPPES high-speed roll-up doors help control dust, airflow and cross-contamination between busy production zones.",
    image: "/images/hero-industrial-door.jpg",
    imageAlt: "Rapid industrial doors separating controlled production zones",
    intro: "Dust and uncontrolled airflow between production zones can affect product quality, working conditions and process stability. The most practical solution is to combine a properly configured high-speed roll-up door with suitable sealing, automatic activation and the facility's ventilation or pressure-control system. A SEPPES high-speed door reduces the time an opening remains exposed during personnel, forklift and material movement. Fast opening and automatic closing help limit uncontrolled air exchange between adjacent areas while maintaining efficient production flow.",
    leadImage: "/images/blog/dust-control-production-zones.jpg",
    leadImageAlt: "Multiple yellow SEPPES high-speed doors separating clean production zones",
    leadImageCaption: "High-speed doors help busy production routes maintain separation while personnel and materials move between zones.",
    sections: [
      {
        heading: "Why open doorways create dust and airflow problems",
        paragraphs: [
          "Air naturally moves between areas with different temperatures and pressure levels. When an internal doorway remains open, dust, fumes, odours and untreated air can move with it.",
          "In these conditions, the doorway becomes part of the production process. Selecting the wrong door—or operating without an automatic door—can create a repeated break in the environmental separation between zones.",
        ],
        bullets: [
          "Forklifts pass through the same opening frequently",
          "Materials are transferred between processing and packaging areas",
          "One production zone generates more dust than another",
          "Adjacent rooms operate at different temperatures",
          "Ventilation systems maintain positive or negative pressure",
          "Operators leave conventional doors open to avoid waiting",
        ],
        image: "/images/blog/rapid-door-zone-separation.jpg",
        imageAlt: "Two orange SEPPES high-speed doors separating adjacent factory zones",
        imageCaption: "A coordinated series of rapid doors can divide production areas without interrupting the main traffic route.",
      },
      {
        heading: "How a high-speed roll-up door supports zone separation",
        paragraphs: [
          "The main advantage of an industrial rapid door is not simply its operating speed. It is the combination of fast movement, automatic access and controlled closing.",
          "When a vehicle or operator approaches, the door receives an activation signal and opens. After the passage is clear, it closes automatically. This creates a shorter and more predictable exposure period than a doorway that depends on manual operation.",
        ],
        subsections: [
          { heading: "Shorter open time", paragraphs: ["A fast opening and closing cycle reduces the duration of uncontrolled air exchange. This is particularly important at doorways used throughout a production shift.", "The actual door speed and closing delay should be configured according to the opening size, vehicle type, traffic frequency and safety requirements. Maximum speed should not be treated as the only selection criterion."], image: "/images/blog/agv-production-zone-access.jpg", imageAlt: "AGVs approaching a high-speed door between production zones", imageCaption: "Rapid opening supports frequent AGV and material movement while reducing the time the doorway remains exposed." },
          { heading: "Improved perimeter sealing", paragraphs: ["The door curtain, guide structure and bottom edge should work together to reduce unnecessary gaps around the opening.", "For dust-control applications, the sealing design should be evaluated against actual site conditions, including floor level, air-pressure difference and dust characteristics. A well-fitted industrial door can support separation more effectively than a door selected only by nominal dimensions."], image: "/images/blog/rapid-door-perimeter-seal.jpg", imageAlt: "Close-up of the sealing profile on a SEPPES rapid door", imageCaption: "The curtain edge, guide structure and sealing profile work together to reduce unnecessary gaps around the opening." },
          { heading: "Automatic closing", paragraphs: ["Doors are often left open because manual operation interrupts the workflow. Radar sensors, pull cords, push buttons, remote controls or production-system signals can activate the door automatically.", "Automatic closing helps ensure that the doorway returns to its separated state after each passage instead of remaining open for convenience."] },
          { heading: "Controlled access", paragraphs: ["Different activation methods can be assigned to personnel, forklifts or automated equipment. This prevents unnecessary opening and allows the door cycle to follow the real traffic pattern.", "For example, a forklift route may require directional radar or loop detection, while a personnel passage may use a push button or access-control signal."] },
        ],
        image: "/images/blog/transparent-rapid-door-warehouse.jpg",
        imageAlt: "SEPPES transparent high-speed door installed at a warehouse opening",
        imageCaption: "A transparent curtain supports visibility across the boundary while the rapid door controls access between working areas.",
      },
      {
        heading: "Where dust-control high-speed doors are commonly used",
        paragraphs: [
          "High-speed roll-up doors are suitable for internal production openings where environmental separation and frequent access must be balanced.",
          "Each application has different requirements. A food-processing doorway may prioritize cleanability and separation, while a manufacturing workshop may focus on forklift flow, dust migration and equipment integration.",
        ],
        bullets: ["Processing and packaging zones", "Raw-material and finished-product areas", "Production and warehouse connections", "Dust-generating and cleaner working zones", "Temperature-controlled workshops", "Electronics and precision manufacturing areas", "Pharmaceutical and daily-chemical facilities", "Food and beverage processing facilities", "Automotive and equipment manufacturing plants", "Conveyor and automated material-transfer openings"],
        image: "/images/blog/rapid-door-electronics-production.jpg",
        imageAlt: "Blue SEPPES high-speed door installed beside electronics production equipment",
        imageCaption: "Rapid doors can support controlled access between electronics production areas and internal material routes.",
      },
      {
        heading: "Choosing the right activation method",
        paragraphs: [
          "The activation system directly affects both traffic efficiency and environmental control. If a sensor detects too large an area, the door may open when no passage is required. If the detection range is too narrow, forklifts may need to slow down or stop. Both situations reduce the effectiveness of the doorway.",
          "The most suitable solution depends on the direction of traffic, approach speed, available stopping distance and whether pedestrians and vehicles share the route.",
        ],
        bullets: ["Radar sensors for approaching vehicles or personnel", "Magnetic loops for forklift routes", "Pull cords for operator-controlled access", "Push buttons for controlled personnel passage", "Remote controls for designated users", "Access-control devices for restricted areas", "I/O or communication interfaces for production equipment"],
        image: "/images/blog/rapid-door-activation-methods.jpg",
        imageAlt: "Illustration of induction loop, radar, access control and pull-cord activation methods for a rapid door",
        imageCaption: "Activation options should be selected around the traffic type, approach direction and required control sequence.",
      },
      {
        heading: "Connecting the door with the production workflow",
        paragraphs: [
          "In modern factories, an industrial rapid door may need to operate as part of a larger production system.",
          "For openings between areas with different cleanliness or pressure requirements, two doors may be interlocked so that one door cannot open until the other has closed. This arrangement can provide more controlled separation than a single exposed doorway.",
          "Signal requirements and operating logic should be confirmed before production. This allows the control system, safety devices and site equipment to be planned as one coordinated entrance solution.",
        ],
        bullets: ["Conveyors", "Automated guided vehicles", "Machine safety systems", "Access-control systems", "Warning lights and alarms", "Air curtains", "Interlocked door systems", "Building or production control systems"],
        image: "/images/blog/rapid-door-bottom-safety-edge.jpg",
        imageAlt: "Close-up of a yellow rapid door bottom safety edge",
        imageCaption: "The bottom edge is one part of a coordinated door configuration that combines closing control with suitable safety sensing.",
      },
      {
        heading: "Safety must be considered with speed",
        paragraphs: [
          "A high-speed door should improve production flow without creating additional risk. Depending on the doorway and traffic conditions, the safety configuration may include photocells, safety edges, warning devices or other presence-detection measures.",
          "The goal is not simply to make the door move faster. It is to create a controlled, repeatable and safe access sequence.",
        ],
        bullets: ["Pedestrian and forklift traffic", "Vehicle height and approach direction", "Opening dimensions", "Visibility around the doorway", "Frequency of operation", "Emergency procedures", "Connection with surrounding equipment"],
        image: "/images/rapid-door-safety-photocell.jpg",
        imageAlt: "Infrared photocell installed beside a SEPPES high-speed door",
        imageCaption: "Safety photocells monitor the passage and support a controlled operating sequence around moving traffic.",
      },
      {
        heading: "What to confirm before requesting a door solution",
        paragraphs: ["Providing accurate site information helps the manufacturer recommend a more suitable configuration.", "Photos, drawings and a short video of the traffic route can also help identify installation limitations that may not appear in the opening dimensions alone."],
        numberedItems: ["Clear opening width and height", "Whether the door is installed indoors or outdoors", "Types of traffic passing through the opening", "Estimated daily operating frequency", "Main dust or airflow-control objective", "Temperature or pressure difference between zones", "Required activation method", "Available installation space", "Safety and access-control requirements", "Signals required from conveyors, AGVs or other equipment"],
        image: "/images/blog/rapid-door-maintenance.jpg",
        imageAlt: "SEPPES technicians inspecting and maintaining a high-speed door",
        imageCaption: "Site information and installation conditions help the technical team prepare a more suitable door configuration and service plan.",
      },
      {
        heading: "Why SEPPES for production-zone access",
        paragraphs: ["SEPPES develops industrial entrance solutions for factories, warehouses and logistics facilities. Its high-speed door systems can be configured around opening conditions, traffic patterns, environmental separation and automation requirements.", "Rather than treating a rapid door as an isolated piece of equipment, SEPPES focuses on the complete access point: the door structure, drive system, safety sensing, activation logic and connection with the customer's production process.", "This project-based approach supports SEPPES's position as a mid-to-high-end Chinese industrial door brand. The objective is to provide international buyers with a reliable alternative for demanding industrial applications and to compete through product configuration, manufacturing capability, engineering support and long-term application value."],
        image: "/images/blog/seppes-product-export-shipment.jpg",
        imageAlt: "SEPPES industrial door products in wooden crates being loaded into export containers",
        imageCaption: "Finished industrial door products are protected in wooden crates for international project shipment.",
      },
      {
        heading: "Build a more controlled production route",
        paragraphs: ["Controlling dust and airflow between production zones requires more than installing the fastest available door. The right solution combines a suitable high-speed roll-up door with effective sealing, reliable safety sensing, appropriate activation and coordinated production controls.", "If your facility has a frequently used opening between processing, packaging, warehouse or temperature-controlled areas, SEPPES can evaluate the doorway and recommend an industrial rapid-door configuration based on the actual operating conditions.", "Send us the opening dimensions, application, traffic type and site photos. Our team will help you plan a high-speed door solution for more efficient access and more consistent environmental separation."],
      },
    ],
    relatedHref: "/products/high-speed-roll-up-door",
    relatedLabel: "Explore the High Speed Roll Up Door",
  },
  {
    slug: "high-speed-roll-up-door-food-material-access",
    category: "Solutions",
    date: "August 17, 2026",
    dateISO: "2026-08-17",
    readTime: "8 min read",
    title: "High-Speed Roll-Up Doors for Food Material Access",
    excerpt: "Learn how a high-speed roll-up door can reduce dust transfer, shorten waiting time and improve raw-material traffic in food production areas.",
    image: "/images/cleanroom-door.jpg",
    imageAlt: "High-speed roll-up door at a controlled food production entrance",
    intro: "Raw-material entrances in food production facilities must support frequent movement without leaving processing areas continuously exposed. A correctly configured high-speed roll-up door shortens the time the entrance remains open, helps limit dust and airborne contaminants moving between zones, and allows personnel, pallet trucks and forklifts to pass with less waiting. The door should be selected as part of the facility's wider hygiene and material-flow system. It supports environmental separation but does not replace filtration, extraction, pressure control, pest management or established cleaning procedures.",
    sections: [
      {
        heading: "Why raw-material entrances are difficult to control",
        paragraphs: [
          "A raw-material route can connect receiving, storage, preparation and processing areas. Every door cycle temporarily removes the physical separation between these zones.",
          "These problems are rarely solved by selecting the fastest available door alone. Opening size, traffic direction, operating frequency, detection range, closing delay and safety devices must work together.",
        ],
        bullets: ["Dust from packaging, pallets or raw materials moves into cleaner production areas", "Conventional doors remain open because manual operation slows the workflow", "Forklifts stop and wait for the door, causing queues around the entrance", "Employees leave the door open during repeated material transfers", "Temperature and humidity become more difficult to manage", "An unsuitable sensor opens the door when no authorized passage is required", "Poor visibility increases interaction risks between pedestrians and vehicles"],
      },
      {
        heading: "How a high-speed roll-up door supports dust control",
        paragraphs: [
          "The main benefit of a high-speed roll-up door is a shorter and more predictable exposure period.",
          "When a person or vehicle approaches, the selected activation device sends an opening signal. After the passage is clear, the door closes automatically. This reduces dependence on manual operation and helps the entrance return to its separated state after every movement.",
        ],
        subsections: [
          { heading: "Shorter open time", paragraphs: ["A conventional door may remain open throughout a material-handling task. A rapid door opens for each passage and closes when the route is clear.", "Reducing the open interval can help limit the movement of dust, insects and untreated air between adjacent areas. The final operating speed and closing delay should be configured around the actual traffic pattern rather than set to the maximum available value."] },
          { heading: "Improved perimeter separation", paragraphs: ["The curtain, guide structure and bottom edge should form a coordinated sealing system. Side brushes or other guide-sealing arrangements can help reduce gaps around the curtain, while a flexible bottom edge can accommodate reasonable floor variation.", "The expected result depends on the floor condition, doorway dimensions, air-pressure difference and type of dust present. These conditions should be reviewed before the door is specified."] },
          { heading: "Automatic closing", paragraphs: ["Automatic closing prevents the entrance from remaining open simply because operators are busy or repeated movements are expected.", "The delay must still provide enough time for the person, pallet truck or forklift to clear the opening safely. A delay that is too long reduces separation, while one that is too short can interrupt traffic."] },
        ],
      },
      {
        heading: "Selecting an activation method for the material route",
        paragraphs: [
          "The activation method determines when the door opens and which movements trigger it.",
          "A sensor with an oversized detection zone may open the door when people or vehicles are only passing nearby. A detection zone that is too small may force forklift drivers to stop before the entrance.",
          "For mixed pedestrian and forklift traffic, separate activation methods or clearly defined routes may be required. The decision should follow a site-specific traffic and safety assessment.",
        ],
        bullets: ["Radar detection for hands-free vehicle or personnel access", "Induction loops for defined forklift routes", "Pull cords for deliberate operator control", "Push buttons for controlled personnel passage", "Remote controls for designated operators", "Access-control signals for restricted production areas", "I/O or communication interfaces for conveyors and automated equipment"],
      },
      {
        heading: "Improving traffic efficiency without weakening control",
        paragraphs: [
          "A well-planned rapid door should open early enough for smooth passage and close after the route is safely clear. This creates a repeatable movement sequence instead of relying on individual operators.",
          "Signal type, opening permission, closing logic, fault response and commissioning responsibility should be documented before production.",
          "Where stronger separation is required, two doors may be interlocked so that one cannot open until the other has closed. The safety release and emergency operating sequence must be defined for the individual facility.",
        ],
        bullets: ["Automated guided vehicles", "Conveyors", "Production equipment", "Access-control systems", "Warning lights and alarms", "Interlocked doors", "Air curtains", "Building or production control systems"],
      },
      {
        heading: "Safety requirements for a busy food-production entrance",
        paragraphs: ["Faster movement must be supported by suitable detection and protection.", "Depending on the opening and traffic conditions, a rapid door configuration may include infrared photocells, a safety edge, warning devices or additional presence detection. Transparent vision sections can improve awareness between people approaching from opposite sides.", "Safety devices should be selected for the actual application and verified during commissioning."],
        bullets: ["Pedestrian and vehicle traffic", "Vehicle height and approach direction", "Forklift stopping distance", "Visibility around the doorway", "Operating frequency", "Emergency procedures", "Nearby production equipment", "Cleaning and maintenance access"],
      },
      {
        heading: "Hygiene and system limitations",
        paragraphs: ["A high-speed roll-up door can support a food facility's zoning strategy, but it should not be described as a complete dust-control or food-safety solution.", "Extraction, filtration, room pressure, cleaning procedures, pest management and production discipline remain important. If the facility requires a hygienic, wash-down, cleanroom, fire-rated or explosion-protected entrance, the relevant material, construction and certification requirements must be confirmed separately.", "Curtain material, frame finish and cleaning compatibility should also be reviewed against the facility's sanitation procedures and applicable local requirements."],
      },
      {
        heading: "Information needed before selecting the door",
        paragraphs: ["Providing complete project information allows the manufacturer to configure the entrance around the real process. This information is more useful than requesting a standard door based only on the opening dimensions."],
        numberedItems: ["Clear opening width and height", "Number of required doors", "Indoor or outdoor installation", "Raw materials and packaging passing through the opening", "Personnel, pallet-truck, forklift or AGV traffic", "Estimated operating frequency", "Main dust, insect, airflow or temperature-control objective", "Temperature or pressure difference between zones", "Required activation method", "Safety and access-control requirements", "Available installation space", "Required signals from conveyors or production equipment", "Site photos, drawings or a short traffic-route video"],
      },
      {
        heading: "Why consider a SEPPES high-speed door?",
        paragraphs: ["SEPPES develops industrial entrance solutions for manufacturing, warehousing, logistics and controlled production environments.", "For a food-production material route, the door can be configured around the opening, traffic pattern, environmental separation objective, activation method and required automation interfaces. The project approach considers the complete access point rather than treating the door as an isolated product.", "SEPPES is positioned as a mid-to-high-end Chinese industrial door brand for international projects. Its value is built around application-based engineering, consistent manufacturing, configurable entrance systems and responsive project support."],
      },
      {
        heading: "Plan a more controlled raw-material route",
        paragraphs: ["If dust transfer, long waiting times or doors left open are affecting your raw-material entrance, send SEPPES the opening dimensions, traffic type, operating frequency and available site photos.", "Our team can review the route and recommend a high-speed roll-up door configuration based on your production environment, activation requirements and safety conditions."],
      },
    ],
    relatedHref: "/products/high-speed-roll-up-door",
    relatedLabel: "Explore the High Speed Roll Up Door",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
