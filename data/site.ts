import type { Metadata } from "next";

export const business = {
  name: "Penny Kay Salon",
  address: "3/23 Commercial Drive, Springfield QLD 4300",
  phone: "+61 487 097 954",
  phoneHref: "tel:+61487097954",
  email: "tau@pennykaysalon.com.au",
  emailHref: "mailto:tau@pennykaysalon.com.au",
  bookingUrl: "https://pennykaysalon.gettimely.com/",
  directionsUrl:
    "https://maps.google.com/?q=3%2F23%20Commercial%20Drive%2C%20Springfield%20QLD%204300",
  siteUrl: "https://www.pennykaysalon.com.au",
  instagram: "@pennykay_salon",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Penny Kay Salon | Boutique Hair Salon in Springfield QLD",
    template: "%s | Penny Kay Salon",
  },
  description:
    "Book your next hair appointment at Penny Kay Salon in Springfield QLD. Boutique colour, blondes, foils, balayage, cuts, treatments and event styling.",
  openGraph: {
    title: "Penny Kay Salon | Boutique Hair Salon in Springfield QLD",
    description: "Colour, blondes, balayage, foils, cuts and styling in Springfield QLD.",
    type: "website",
    locale: "en_AU",
    images: ["/images/hero/salon-interior.jpg"],
  },
};

export const navItems = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/new-clients", label: "New Clients" },
  { href: "/contact", label: "Contact" },
];

export const salonValues = [
  {
    title: "Care-led appointments",
    description:
      "A warm salon experience where clients feel listened to before colour, cutting or styling begins.",
  },
  {
    title: "Thoughtful colour work",
    description:
      "Blondes, foils, balayage and refreshes are approached around hair history, goals and maintenance.",
  },
  {
    title: "Professional standards",
    description:
      "The salon experience is designed to feel polished, comfortable and considered from arrival to finish.",
  },
  {
    title: "Confidence without pressure",
    description:
      "The team helps clients choose services with realistic guidance, especially for major colour changes.",
  },
];

export const salonExperience = [
  "A boutique salon space in Springfield",
  "Online booking through Timely",
  "Guidance for new colour clients",
  "A team with a focus on blondes, foils and polished finishes",
];

export const featuredServices = [
  {
    title: "Colour & blonding",
    description:
      "Blonde regrowth, foils, balayage and global colour services designed around your hair goals.",
    tags: ["Blondes", "Foils", "Balayage"],
  },
  {
    title: "Cuts & styling",
    description: "Style cuts, blow dry finishes and polished looks for everyday confidence.",
    tags: ["Style cuts", "Blow dry", "Upstyle"],
  },
  {
    title: "Treatments",
    description:
      "Keratin therapy, basin treatments and colour-supporting care for smoother, shinier hair.",
    tags: ["Keratin", "Metal Detox", "Shine"],
  },
  {
    title: "Events",
    description:
      "In-salon hair and makeup for special moments, occasions and celebrations.",
    tags: ["Hair + makeup", "Occasions"],
  },
];

export const serviceCategories = [
  {
    title: "Colour & blonding",
    items: [
      "Blonde Regrowth Packages",
      "Half Head Foils",
      "Full Head Foils",
      "10 Foils Package",
      "Balayage Package",
      "All Over Global Colour Refresh",
      "Semi Permanent / Permanent",
      "Toner",
      "Tip Out",
      "Colour Correction",
    ],
  },
  {
    title: "Cuts & styling",
    items: [
      "Blow Dry",
      "Style Cuts + Packages",
      "High School Cut",
      "Primary School Cut",
      "Shampoo + Condition Massage",
      "Upstyle",
    ],
  },
  {
    title: "Treatments",
    items: [
      "Kerasilk Keratin Therapy GOLDWELL",
      "Metal Detox Treatment",
      "L'Oreal Intense Basin Treatment",
      "L'Oreal Instant Shine Treatment",
    ],
  },
  {
    title: "Events",
    items: ["In Salon Hair + Makeup", "Event styling", "Upstyle"],
  },
];

export const serviceShowcase = [
  {
    title: "Blow Dry",
    category: "Cuts & styling",
    featured: true,
    description: "A polished finish for everyday confidence, weekends, work events or a fresh salon feel.",
    image: "/images/services/blow-dry.jpg",
    alt: "Blow dry styling service at Penny Kay Salon",
    services: ["Short", "Medium", "Long", "Extra Long"],
  },
  {
    title: "Blonde Regrowth Packages",
    category: "Colour & blonding",
    featured: true,
    description: "Maintenance packages for existing blondes, tailored by length and regrowth needs.",
    image: "/images/services/blonde-regrowth.jpg",
    alt: "Blonde regrowth package hair service",
    services: ["Short", "Medium", "Long", "Extra Long"],
  },
  {
    title: "All Over Global Colour Refresh",
    category: "Colour & blonding",
    description: "A full colour refresh for clients wanting a clean, cohesive result through the hair.",
    image: "/images/services/global-colour.jpg",
    alt: "All over global colour refresh hair service",
    services: ["Global Colour Short", "Global Colour Medium", "Global Colour Long", "Global Colour Extra Long"],
  },
  {
    title: "Half Head Foils",
    category: "Colour & blonding",
    featured: true,
    description: "A focused foil service for brightness, dimension and softer blonde maintenance.",
    image: "/images/services/half-head-foils.jpg",
    alt: "Half head foils hair service",
    services: ["1/2 Head Foils Short", "1/2 Head Foils Medium", "1/2 Head Foils Long", "1/2 Head Foils Extra Long"],
  },
  {
    title: "Full Head Foils",
    category: "Colour & blonding",
    description: "A more complete foil service for high-impact brightness and dimensional blonde work.",
    image: "/images/services/full-head-foils.jpg",
    alt: "Full head foils hair service",
    services: ["Full Head Foils Short", "Full Head Foils Medium", "Full Head Foils Long", "Full Head Foils Extra Long"],
  },
  {
    title: "Balayage Package",
    category: "Colour & blonding",
    featured: true,
    description: "Soft, lived-in colour placement for dimension, movement and a lower-maintenance grow-out.",
    image: "/images/services/balayage-package.jpg",
    alt: "Balayage package hair service",
    services: ["Balayage Package Short", "Balayage Package Medium", "Balayage Package Long", "Balayage Package Extra Long"],
  },
  {
    title: "Semi Permanent / Permanent",
    category: "Colour & blonding",
    description: "Regrowth colour options for refreshing tone, coverage and shine between larger appointments.",
    image: "/images/services/semi-permanent.jpg",
    alt: "Semi permanent and permanent regrowth colour service",
    services: ["Regrowth short hair", "Regrowth medium hair", "Regrowth long hair", "Regrowth extra long hair"],
  },
  {
    title: "Style Cuts + Packages",
    category: "Cuts & styling",
    description: "Cuts and finish packages for adults, students and younger clients.",
    image: "/images/services/style-cuts.jpg",
    alt: "Style cuts and salon haircut service",
    services: ["High School Cut", "Primary School Cut", "Shampoo + Condition Massage", "Package Style Cut"],
  },
  {
    title: "10 Foils Package",
    category: "Colour & blonding",
    description: "A lighter touch-up service when you want targeted brightness without a full foil appointment.",
    image: "/images/gallery/ten-foil-package.jpg",
    alt: "10 foils package result by Penny Kay Salon",
    services: ["10 Foil Package Short", "10 Foil Package Medium", "10 Foil Package Long", "10 Foil Package Extra Long"],
  },
  {
    title: "Kerasilk Keratin Therapy GOLDWELL",
    category: "Treatments",
    description: "A smoothing service designed to support sleeker, softer-feeling hair.",
    image: "/images/services/keratin-therapy.jpg",
    alt: "Kerasilk Keratin Therapy service",
    services: ["Kerasilk Short", "Kerasilk Medium", "Kerasilk Long", "Kerasilk Extra Long"],
  },
  {
    title: "Treatments, Toner & Tip Out",
    category: "Treatments",
    description: "Support services for tone, shine, ends and hair condition between colour appointments.",
    image: "/images/gallery/reverse-balayage.jpg",
    alt: "Hair treatment and toner service result",
    services: ["L'Oreal Intense Basin Treatment", "L'Oreal Instant Shine Treatment", "Toner", "Tip Out"],
  },
  {
    title: "Colour Correction",
    category: "Colour & blonding",
    description: "A consultation-led service for complex colour changes and corrective work.",
    image: "/images/gallery/blonde-bob.jpg",
    alt: "Colour correction hair result at Penny Kay Salon",
    services: ["Colour Correction", "Consultation recommended"],
  },
  {
    title: "Metal Detox Treatment",
    category: "Treatments",
    description: "A targeted treatment listed by the salon to support colour services and hair care.",
    image: "/images/gallery/colour-melt.jpg",
    alt: "Metal detox treatment and colour care result",
    services: ["Metal Detox Treatment"],
  },
  {
    title: "Events",
    category: "Events",
    description: "In-salon hair and makeup for occasions, celebrations and special moments.",
    image: "/images/gallery/colour-work.jpg",
    alt: "Event hair and makeup service",
    services: ["In Salon Hair + Makeup"],
  },
  {
    title: "Upstyle",
    category: "Events",
    description: "Soft event-ready styling for weddings, formal moments and celebrations.",
    image: "/images/gallery/flower-girl-upstyle.jpg",
    alt: "Upstyle event hair service by Penny Kay Salon",
    services: ["Upstyle"],
  },
];

export const pricingCategories = [
  {
    title: "Blondes & colour",
    rows: [
      ["Blonde Regrowth Packages", "$175-$235"],
      ["Half Head Foils", "$190-$250"],
      ["Full Head Foils", "$245-$340"],
      ["10 Foils Package", "$140-$210"],
      ["Balayage Package", "$255-$345"],
      ["Global Colour Refresh", "$160-$240"],
      ["Semi Permanent / Permanent Regrowth", "$110-$160"],
      ["Toner / Tip Out", "From $55"],
      ["Colour Correction", "From $250"],
    ],
  },
  {
    title: "Cuts, styling & care",
    rows: [
      ["Blow Dry", "$45-$85"],
      ["Package Style Cut / Finish", "$75-$110"],
      ["High School Cut", "$40"],
      ["Primary School Cut", "$25"],
      ["Shampoo + Condition Massage", "$30"],
      ["Upstyle", "$100"],
      ["In Salon Hair + Makeup", "From $200"],
      ["Kerasilk Keratin Therapy", "$340-$400"],
      ["Metal Detox / Instant Shine", "$35-$45"],
    ],
  },
];

export const galleryItems = [
  {
    title: "Soft foil work",
    description: "Dimensional blonde refresh.",
    category: "blonde",
    src: "/images/gallery/ten-foil-package.jpg",
    alt: "Soft blonde foils hair result at Penny Kay Salon in Springfield",
  },
  {
    title: "Reverse balayage",
    description: "Depth, softness and movement.",
    category: "balayage",
    src: "/images/gallery/reverse-balayage.jpg",
    alt: "Reverse balayage hair colour result at Penny Kay Salon",
  },
  {
    title: "Colour melt",
    description: "Seamless tone through the ends.",
    category: "balayage",
    src: "/images/gallery/colour-melt.jpg",
    alt: "Colour melt hair transformation at Penny Kay Salon",
  },
  {
    title: "Blonde bob",
    description: "Fresh cut and light finish.",
    category: "blonde",
    src: "/images/gallery/blonde-bob.jpg",
    alt: "Blonde bob cut and colour result by Penny Kay Salon",
  },
  {
    title: "Colour work",
    description: "Polished salon finish.",
    category: "blonde",
    src: "/images/gallery/colour-work.jpg",
    alt: "Creative blonde colour work by Penny Kay Salon",
  },
  {
    title: "Event styling",
    description: "Soft occasion-ready upstyle.",
    category: "events",
    src: "/images/gallery/flower-girl-upstyle.jpg",
    alt: "Flower girl event upstyle by Penny Kay Salon",
  },
];

export const team = [
  {
    name: "Prue Hope",
    role: "Owner",
    image: "/images/team/prue-hope.jpg",
    alt: "Prue Hope owner at Penny Kay Salon",
    bio: "Prue brings over a decade of experience and created Penny Kay Salon around professional service, family values and the joy of helping clients feel confident.",
  },
  {
    name: "Carolyn / Caz",
    role: "Senior Stylist",
    image: "/images/team/carolyn-caz.jpg",
    alt: "Carolyn Caz senior stylist at Penny Kay Salon",
    bio: "Caz brings 23 years of hairdressing experience, with a love for foil work, beautiful blondes and soft dimensional colour.",
  },
  {
    name: "Riannon",
    role: "Senior Stylist",
    image: "/images/team/riannon.jpg",
    alt: "Riannon senior stylist at Penny Kay Salon",
    bio: "Riannon has 11 years in hairdressing and is especially passionate about blonde colouring and detailed foil work.",
  },
  {
    name: "Maddi / Madi",
    role: "Stylist",
    image: "/images/team/maddi.jpg",
    alt: "Maddi stylist at Penny Kay Salon",
    bio: "Maddi creates personalised hair with care, fresh energy and attention to the details that make each appointment feel considered.",
  },
  {
    name: "Clara",
    role: "Emerging Stylist",
    image: "/images/team/clara.jpg",
    alt: "Clara emerging stylist at Penny Kay Salon",
    bio: "Clara is growing her craft within the salon team and brings a warm welcome to every appointment.",
  },
];

export const hours = [
  ["Sunday - Monday", "Closed"],
  ["Tuesday - Friday", "9am - 5pm"],
  ["Saturday", "8am - 4pm"],
];

export const faqs = [
  {
    question: "Do I need a consultation before booking colour correction?",
    answer:
      "For colour correction or major colour changes, we recommend contacting the salon before booking so the team can guide you towards the right service and timing.",
  },
  {
    question: "Where is Penny Kay Salon located?",
    answer: "Penny Kay Salon is located at 3/23 Commercial Drive, Springfield QLD 4300.",
  },
  {
    question: "Can I book online?",
    answer: "Yes. Use the Book Appointment button to book through the salon's online booking system.",
  },
  {
    question: "Do prices vary by hair length?",
    answer:
      "Yes. Many services are priced by short, medium, long or extra long hair. Final pricing may vary depending on hair length, condition and the desired result.",
  },
  {
    question: "Do you offer hair and makeup for events?",
    answer:
      "Yes. The salon lists in-salon hair and makeup for events. Final details should be confirmed with the salon before booking.",
  },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: business.name,
  url: business.siteUrl,
  image: `${business.siteUrl}/images/hero/salon-interior.jpg`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3/23 Commercial Drive",
    addressLocality: "Springfield",
    addressRegion: "QLD",
    postalCode: "4300",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  areaServed: ["Springfield QLD", "Springfield Lakes", "Greater Springfield", "Brisbane western corridor"],
};
