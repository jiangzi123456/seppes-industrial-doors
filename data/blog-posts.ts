export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  numberedItems?: string[];
  subsections?: Array<{ heading: string; paragraphs: string[] }>;
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
    sections: [
      {
        heading: "Why busy production areas need a faster doorway",
        paragraphs: [
          "A conventional door can become a repeated bottleneck when forklifts, operators and material carts share the same route. Slow operation creates queues, while a doorway left open for too long allows conditioned air, dust, odours or insects to move between adjacent zones.",
          "A high-speed roll-up door reduces the open interval without asking the production team to operate the door manually. The benefit is not speed in isolation: it is a more predictable movement sequence between production, packaging and warehouse areas.",
        ],
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
      },
      {
        heading: "Choose activation around the way traffic approaches",
        paragraphs: [
          "The opening device should match the workflow. Radar supports hands-free approach detection, a pull cord gives forklift drivers deliberate control, and an induction loop can identify vehicles within a defined ground area. Access control is useful where only authorized movement should trigger the door.",
          "The correct detection zone opens the door early enough for smooth travel but avoids unnecessary cycles caused by nearby movement. Mixed pedestrian and vehicle traffic may require additional sensing, barriers or route management after a site-specific safety review.",
        ],
        image: "/images/blog/high-speed-door-radar-activation.jpg",
        imageAlt: "Radar-activated SEPPES high-speed roll-up door detecting an approaching forklift",
        imageCaption: "Radar activation supports hands-free access for forklifts approaching a busy production doorway.",
      },
      {
        heading: "Connect the door with the production workflow",
        paragraphs: [
          "A busy entrance may need to respond to more than a person or forklift. Reserved I/O terminals and RS-485 communication allow agreed signals from access-control equipment, AGVs, conveyors or production machinery to be considered during project design.",
          "Interface requirements should be documented before production, including the signal type, opening permission, closing logic, fault response and responsibility for commissioning. This turns a standalone door into a coordinated part of the facility rather than an isolated device.",
        ],
        image: "/images/blog/high-speed-door-access-control.jpg",
        imageAlt: "SEPPES high-speed roll-up door configured with an industrial access-control keypad",
        imageCaption: "Access control and automation interfaces can be selected around the operating process.",
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
        image: "/images/blog/high-speed-door-loop-detector.jpg",
        imageAlt: "Induction-loop activation area in front of a SEPPES high-speed roll-up door",
        imageCaption: "An induction loop creates a defined vehicle activation zone and helps reduce irrelevant openings.",
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
      },
      {
        heading: "How a high-speed roll-up door supports zone separation",
        paragraphs: [
          "The main advantage of an industrial rapid door is not simply its operating speed. It is the combination of fast movement, automatic access and controlled closing.",
          "When a vehicle or operator approaches, the door receives an activation signal and opens. After the passage is clear, it closes automatically. This creates a shorter and more predictable exposure period than a doorway that depends on manual operation.",
        ],
        subsections: [
          { heading: "Shorter open time", paragraphs: ["A fast opening and closing cycle reduces the duration of uncontrolled air exchange. This is particularly important at doorways used throughout a production shift.", "The actual door speed and closing delay should be configured according to the opening size, vehicle type, traffic frequency and safety requirements. Maximum speed should not be treated as the only selection criterion."] },
          { heading: "Improved perimeter sealing", paragraphs: ["The door curtain, guide structure and bottom edge should work together to reduce unnecessary gaps around the opening.", "For dust-control applications, the sealing design should be evaluated against actual site conditions, including floor level, air-pressure difference and dust characteristics. A well-fitted industrial door can support separation more effectively than a door selected only by nominal dimensions."] },
          { heading: "Automatic closing", paragraphs: ["Doors are often left open because manual operation interrupts the workflow. Radar sensors, pull cords, push buttons, remote controls or production-system signals can activate the door automatically.", "Automatic closing helps ensure that the doorway returns to its separated state after each passage instead of remaining open for convenience."] },
          { heading: "Controlled access", paragraphs: ["Different activation methods can be assigned to personnel, forklifts or automated equipment. This prevents unnecessary opening and allows the door cycle to follow the real traffic pattern.", "For example, a forklift route may require directional radar or loop detection, while a personnel passage may use a push button or access-control signal."] },
        ],
        image: "/images/blog/high-speed-door-radar-activation.jpg",
        imageAlt: "Radar-activated SEPPES high-speed door controlling a forklift route between production zones",
        imageCaption: "The activation area should open the door at the right moment without triggering unnecessary cycles from nearby movement.",
      },
      {
        heading: "Where dust-control high-speed doors are commonly used",
        paragraphs: [
          "High-speed roll-up doors are suitable for internal production openings where environmental separation and frequent access must be balanced.",
          "Each application has different requirements. A food-processing doorway may prioritize cleanability and separation, while a manufacturing workshop may focus on forklift flow, dust migration and equipment integration.",
        ],
        bullets: ["Processing and packaging zones", "Raw-material and finished-product areas", "Production and warehouse connections", "Dust-generating and cleaner working zones", "Temperature-controlled workshops", "Electronics and precision manufacturing areas", "Pharmaceutical and daily-chemical facilities", "Food and beverage processing facilities", "Automotive and equipment manufacturing plants", "Conveyor and automated material-transfer openings"],
      },
      {
        heading: "Choosing the right activation method",
        paragraphs: [
          "The activation system directly affects both traffic efficiency and environmental control. If a sensor detects too large an area, the door may open when no passage is required. If the detection range is too narrow, forklifts may need to slow down or stop. Both situations reduce the effectiveness of the doorway.",
          "The most suitable solution depends on the direction of traffic, approach speed, available stopping distance and whether pedestrians and vehicles share the route.",
        ],
        bullets: ["Radar sensors for approaching vehicles or personnel", "Magnetic loops for forklift routes", "Pull cords for operator-controlled access", "Push buttons for controlled personnel passage", "Remote controls for designated users", "Access-control devices for restricted areas", "I/O or communication interfaces for production equipment"],
        image: "/images/blog/high-speed-door-access-control.jpg",
        imageAlt: "SEPPES industrial rapid door connected to access control for a production zone",
        imageCaption: "Access control and automation signals can be planned around the required production-zone sequence.",
      },
      {
        heading: "Connecting the door with the production workflow",
        paragraphs: [
          "In modern factories, an industrial rapid door may need to operate as part of a larger production system.",
          "For openings between areas with different cleanliness or pressure requirements, two doors may be interlocked so that one door cannot open until the other has closed. This arrangement can provide more controlled separation than a single exposed doorway.",
          "Signal requirements and operating logic should be confirmed before production. This allows the control system, safety devices and site equipment to be planned as one coordinated entrance solution.",
        ],
        bullets: ["Conveyors", "Automated guided vehicles", "Machine safety systems", "Access-control systems", "Warning lights and alarms", "Air curtains", "Interlocked door systems", "Building or production control systems"],
      },
      {
        heading: "Safety must be considered with speed",
        paragraphs: [
          "A high-speed door should improve production flow without creating additional risk. Depending on the doorway and traffic conditions, the safety configuration may include photocells, safety edges, warning devices or other presence-detection measures.",
          "The goal is not simply to make the door move faster. It is to create a controlled, repeatable and safe access sequence.",
        ],
        bullets: ["Pedestrian and forklift traffic", "Vehicle height and approach direction", "Opening dimensions", "Visibility around the doorway", "Frequency of operation", "Emergency procedures", "Connection with surrounding equipment"],
      },
      {
        heading: "What to confirm before requesting a door solution",
        paragraphs: ["Providing accurate site information helps the manufacturer recommend a more suitable configuration.", "Photos, drawings and a short video of the traffic route can also help identify installation limitations that may not appear in the opening dimensions alone."],
        numberedItems: ["Clear opening width and height", "Whether the door is installed indoors or outdoors", "Types of traffic passing through the opening", "Estimated daily operating frequency", "Main dust or airflow-control objective", "Temperature or pressure difference between zones", "Required activation method", "Available installation space", "Safety and access-control requirements", "Signals required from conveyors, AGVs or other equipment"],
      },
      {
        heading: "Why SEPPES for production-zone access",
        paragraphs: ["SEPPES develops industrial entrance solutions for factories, warehouses and logistics facilities. Its high-speed door systems can be configured around opening conditions, traffic patterns, environmental separation and automation requirements.", "Rather than treating a rapid door as an isolated piece of equipment, SEPPES focuses on the complete access point: the door structure, drive system, safety sensing, activation logic and connection with the customer's production process.", "This project-based approach supports SEPPES's position as a mid-to-high-end Chinese industrial door brand. The objective is to provide international buyers with a reliable alternative for demanding industrial applications and to compete through product configuration, manufacturing capability, engineering support and long-term application value."],
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
    slug: "faster-loading-route-modern-logistics-center",
    category: "Project Stories",
    date: "August 17, 2026",
    dateISO: "2026-08-17",
    readTime: "5 min read",
    title: "A Faster Loading Route for a Modern Logistics Center",
    excerpt: "See how coordinated industrial doors and dock equipment can improve vehicle access and loading-bay efficiency.",
    image: "/images/logistics-door.jpg",
    imageAlt: "Industrial sectional door at a modern logistics loading area",
    intro: "A loading bay works as a sequence: the vehicle approaches, docks, the opening is secured, the door opens, the dock leveler bridges the height difference and handling begins. In this representative logistics-center configuration, the sectional door and hydraulic dock leveler were planned together so each step supports a safer, clearer material route.",
    sections: [
      {
        heading: "The project challenge",
        paragraphs: [
          "The operating team needed to accommodate vehicles with different bed heights while keeping internal travel routes clear. Specifying the door and platform separately would have left important interfaces unresolved, including opening height, dock pit position, lip reach, door-track clearance and the order in which equipment should operate.",
          "The planning process therefore began with vehicle types, loading frequency, forklift weight, building structure and the available dock depth. These inputs established the working range for the leveler and the lifting arrangement for the sectional door.",
        ],
      },
      {
        heading: "A coordinated door and dock arrangement",
        paragraphs: [
          "An insulated industrial sectional door provides vertical access while its panels travel overhead, keeping the opening and working floor clear. The track arrangement can be selected around the available headroom, roof structure and nearby services.",
          "The hydraulic dock leveler then forms a stable bridge between the warehouse floor and vehicle bed. Its anti-slip chequered deck improves tyre grip, reinforced ribs support repeated working loads, and the hinged lip reaches onto the vehicle floor. Optional lip lengths help address different dock gaps and vehicle positions.",
        ],
        bullets: [
          "Opening and pit dimensions reviewed as one interface",
          "Door tracks coordinated with beams, ducts and dock equipment",
          "Platform capacity matched to forklift, operator and load weight",
          "Lip length selected for the expected vehicle range",
          "Controls positioned for clear sight of the loading area",
        ],
      },
      {
        heading: "A clearer operating sequence",
        paragraphs: [
          "The operating sequence should be easy for drivers and warehouse teams to understand. The vehicle is first restrained or confirmed in position. The door opens only when the bay is ready, and the leveler is deployed once the vehicle bed can be seen and checked.",
          "Clear controls, warning devices and documented procedures reduce improvisation at the bay. Where the project requires it, signals can coordinate the door, dock leveler, traffic lights or vehicle restraint so operators receive consistent status information.",
        ],
      },
      {
        heading: "What to send for a loading-bay proposal",
        paragraphs: [
          "Useful project information includes the clear opening, platform pit dimensions, dock height, vehicle-bed range, required capacity, daily loading frequency and site photos. A section drawing is especially helpful because it shows the relationship between the building floor, external yard, vehicle and door tracks.",
          "With these details, the manufacturer can define the door panels, lifting track, platform dimensions, rated load, lip length, hydraulic system, safety features and installation interfaces in one coordinated proposal.",
        ],
      },
    ],
    relatedHref: "/products/hydraulic-dock-leveler",
    relatedLabel: "Explore the Hydraulic Dock Leveler",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
