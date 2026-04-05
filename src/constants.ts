import { Service, Industry, ProcessStep, Package, BlogPost } from './types';

export const SERVICES: Record<string, Service> = {
  advertising: {
    title: "Creative Advertising & Cinematic Production",
    description: "High-impact films and branded visual content that elevate brand presence.",
    items: [
      "TV commercials",
      "Corporate films",
      "Event coverage",
      "Social media videos",
      "AI-powered video production"
    ]
  },
  identity: {
    title: "Brand Identity & Visual Direction",
    description: "Distinctive identities that communicate clarity, sophistication and trust.",
    items: [
      "Logo design",
      "Brand positioning",
      "Typography & colour systems",
      "Brand guidelines",
      "Rebranding"
    ]
  },
  marketing: {
    title: "Digital Marketing & Brand Performance",
    description: "Creative storytelling with data-driven strategy for sustainable digital growth.",
    items: [
      "Social media management",
      "Paid ads (Meta, Google, YouTube)",
      "Audience targeting",
      "SEO & content strategy",
      "WhatsApp marketing",
      "Analytics reporting"
    ]
  },
  design: {
    title: "Design & Brand Collaterals",
    description: "Refined marketing materials that maintain brand consistency across all platforms.",
    items: [
      "Brochures",
      "Packaging",
      "Social media creatives",
      "Email design",
      "Banners & ads"
    ]
  }
};

export const INDUSTRIES: Industry[] = [
  { title: "Luxury & Lifestyle", description: "Tailoring storytelling to evoke exclusivity and desire through refined visual aesthetics." },
  { title: "Hospitality & Food Brands", description: "Creating sensory-driven content that highlights the experience and quality of service." },
  { title: "Corporate & Financial Institutions", description: "Communicating trust, authority, and strategic vision with professional clarity." },
  { title: "Education & Healthcare", description: "Humanizing complex services through empathetic storytelling and clear communication." },
  { title: "Retail & E-commerce", description: "Driving conversion through high-impact visuals and strategic performance marketing." },
  { title: "Fashion & Personal Brands", description: "Building iconic identities that resonate with style-conscious audiences." },
  { title: "Technology & Startups", description: "Visualizing innovation and future-forward concepts for disruptive brands." }
];

export const PROCESS: ProcessStep[] = [
  { title: "Discovery", description: "Understanding your vision, goals, and the unique essence of your brand." },
  { title: "Research & Marketing Study", description: "Deep dive into market trends, audience behavior, and competitive landscape." },
  { title: "Strategy Development", description: "Crafting a roadmap that aligns creative output with commercial objectives." },
  { title: "Creative Direction", description: "Defining the visual and narrative language that will bring the strategy to life." },
  { title: "Production & Execution", description: "Meticulous creation of assets with cinematic precision and technical excellence." },
  { title: "Launch & Distribution", description: "Strategic rollout across platforms to maximize reach and impact." },
  { title: "Optimization & Reporting", description: "Continuous monitoring and refinement based on real-world performance data." }
];

export const VIDEO_SERVICES_DETAILED = [
  {
    title: "Brand & Promo Video Shoot",
    overview: "Cinematic brand stories that move audiences and elevate your market position.",
    description: "From concept to final cut, we produce high-impact brand and promotional videos designed to captivate, convert and command attention. Every frame is crafted with purpose — we don't just shoot video, we build visual narratives that define your brand in the minds of your audience.",
    tiers: [
      {
        name: "Silver Tier",
        details: "Half-day shoot (4 hrs, 1 location)",
        turnaround: "5–7 working days",
        deliverables: ["1 Brand/Promo Video (up to 60 sec)", "Full HD 1080p edit", "1 round of revisions", "Background music & colour grade", "Subtitles (English)", "Social media optimised cut"]
      },
      {
        name: "Gold Tier",
        details: "Full-day (8 hrs, 2 locations)",
        turnaround: "7–10 working days",
        deliverables: ["2 Brand/Promo Videos (up to 90 sec each)", "4K cinematic edit + colour grade", "2 rounds of revisions", "Licensed music + professional voiceover", "Motion titles & lower thirds", "Subtitles (English & Arabic)", "3 social media cut-downs (Reels/Shorts)"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-day shoot (up to 3 locations)",
        turnaround: "10–14 working days",
        deliverables: ["3+ Cinematic Brand Films (up to 3 min)", "4K RAW footage + master edit", "Unlimited revisions", "Custom music composition or premium license", "Full motion graphics & animation", "Subtitles in 3 languages", "All platform deliverables (16:9, 9:16, 1:1, 4:5)", "BTS (Behind-the-Scenes) content", "Express delivery option"]
      }
    ]
  },
  {
    title: "Brand & Editorial Photoshoot",
    overview: "Visual storytelling that defines your brand identity with clarity and elegance.",
    description: "Professional brand photography that communicates authority, quality and aspiration. From lifestyle shoots to editorial campaigns, we craft images that build lasting brand value and make every touchpoint in your marketing speak with a consistent, premium visual language.",
    tiers: [
      {
        name: "Silver Tier",
        details: "2–3 hour studio or on-location",
        turnaround: "3–5 working days",
        deliverables: ["Up to 30 edited images", "1 outfit / look / setting", "Basic retouching", "High-res + web-optimised exports", "1 location, 2–3 hrs"]
      },
      {
        name: "Gold Tier",
        details: "Half-day shoot (4 hrs)",
        turnaround: "5–7 working days",
        deliverables: ["Up to 80 edited images", "3 outfits / looks / settings", "Advanced retouching", "Multiple angles & compositions", "High-res + social + print exports", "2–3 locations"]
      },
      {
        name: "Platinum Tier",
        details: "Full-day shoot (8 hrs)",
        turnaround: "7–10 working days",
        deliverables: ["150+ fully retouched images", "Full editorial campaign concept", "Stylist & art direction included", "Multiple looks, sets & locations", "Exclusive usage rights", "Print & billboard-ready resolution", "Digital asset library delivery"]
      }
    ]
  },
  {
    title: "Commercial & Advertisement Ads",
    overview: "High-performance advertising content engineered to capture attention and drive results.",
    description: "We produce television, digital and social media commercials that communicate your brand's message with cinematic precision — crafted to perform at every stage of the funnel and across every platform your audience occupies.",
    tiers: [
      {
        name: "Silver Tier",
        details: "Half-day shoot",
        turnaround: "5–7 working days",
        deliverables: ["1 Digital Ad (15–30 sec)", "Full HD edit + colour grade", "1 round of revisions", "Music sync & sound design", "Platform-optimised export (Meta/YouTube)"]
      },
      {
        name: "Gold Tier",
        details: "Full-day shoot",
        turnaround: "7–10 working days",
        deliverables: ["2 Ads (30–60 sec each)", "4K cinematic production", "Script & storyboard included", "Professional voiceover (English or Arabic)", "2 rounds of revisions", "Multi-platform deliverables", "Motion graphics & titles"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-day full production",
        turnaround: "14–21 working days",
        deliverables: ["Full TVC (60–120 sec) + digital cuts", "Pre-production: concept, script, storyboard", "Professional cast & crew", "4K + HDR mastering", "Unlimited revisions", "Broadcast-ready master file", "All platform derivatives", "Behind-the-Scenes content"]
      }
    ]
  },
  {
    title: "Corporate Video Production",
    overview: "Professional corporate films that build trust, credibility and institutional authority.",
    description: "From company profiles and training videos to executive messages and investor presentations — we produce corporate content that represents your organisation with the dignity, precision and visual authority your brand commands.",
    tiers: [
      {
        name: "Silver Tier",
        details: "Half-day shoot",
        turnaround: "7 working days",
        deliverables: ["1 Corporate Profile Video (2–3 min)", "Full HD edit", "1 interview setup", "Branded lower thirds", "Music + colour grade", "1 round of revisions"]
      },
      {
        name: "Gold Tier",
        details: "Full-day shoot",
        turnaround: "10 working days",
        deliverables: ["2 Videos (company profile + training/culture)", "4K cinematic edit", "Up to 3 interviews", "Script writing & teleprompter", "Motion graphics & animated stats", "2 rounds of revisions", "Arabic & English subtitle option"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-day production",
        turnaround: "14–21 working days",
        deliverables: ["Full corporate video suite (3+ videos)", "Executive interviews & testimonials", "Drone footage integration", "Custom motion graphics & infographics", "Unlimited revisions", "Multi-language subtitles", "Broadcast & investor presentation formats"]
      }
    ]
  },
  {
    title: "Product Photography",
    overview: "Studio-quality product imagery that makes your offering irresistible on every platform.",
    description: "Precision-crafted product photography for e-commerce, retail, packaging and campaigns. We make your products look exceptional — whether shot on clean white or styled in context. Every image is designed to sell.",
    tiers: [
      {
        name: "Silver Tier",
        details: "Half-day studio",
        turnaround: "3–5 working days",
        deliverables: ["Up to 15 products", "3 shots per product", "Clean white/grey background", "Basic retouching", "Web + e-commerce optimised"]
      },
      {
        name: "Gold Tier",
        details: "Full-day studio",
        turnaround: "5–7 working days",
        deliverables: ["Up to 40 products", "5–6 angles per product", "White + lifestyle background options", "Advanced colour correction", "Shadow & reflection effects", "Amazon/Shopify-ready images", "Print-ready resolution"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-day studio production",
        turnaround: "7–14 working days",
        deliverables: ["Unlimited products", "Full 360° product views", "Custom lifestyle & campaign sets", "Advanced compositing & CGI elements", "Beauty & luxury-grade retouching", "Full usage rights", "Campaign-ready master files"]
      }
    ]
  },
  {
    title: "Drone Photography & Videography",
    overview: "Breathtaking aerial perspectives that reveal your brand, property or event from above.",
    description: "Licensed and insured drone operations across Dubai and the UAE. We capture stunning aerial footage and photography for real estate, construction, events, tourism and brand campaigns — delivering perspectives that ground-level cameras simply cannot achieve.",
    tiers: [
      {
        name: "Silver Tier",
        details: "2-hour drone session",
        turnaround: "3–5 working days",
        deliverables: ["Up to 20 aerial photos", "1 aerial flyover video (1–2 min)", "Standard HD edit", "Basic colour grade", "Licensed pilot (GCAA certified)"]
      },
      {
        name: "Gold Tier",
        details: "Half-day drone + ground shoot",
        turnaround: "5–7 working days",
        deliverables: ["Up to 60 aerial photos", "2 aerial videos (property + overview)", "4K video + cinematic edit", "Advanced colour grading", "Ground + aerial combo footage", "Social media cuts included"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-session (days/times as needed)",
        turnaround: "7–14 working days",
        deliverables: ["Unlimited aerial photos & footage", "Full cinematic aerial campaign", "Multi-day drone coverage", "Sunrise/sunset golden-hour sessions", "3D mapping option", "4K HDR + LOG format delivery", "Night aerial photography", "Fast-turnaround option available"]
      }
    ]
  },
  {
    title: "Wedding Coverage",
    overview: "Your love story, told through cinematic artistry that endures a lifetime.",
    description: "We document weddings with the elegance and emotion they deserve — cinematic films, candid moments, and portraits that become treasured heirlooms. Every detail, beautifully and permanently preserved with the care your most important day deserves.",
    tiers: [
      {
        name: "Silver Tier",
        details: "6-hour event coverage",
        turnaround: "14 working days",
        deliverables: ["6-hour coverage (photo + video)", "1 photographer + 1 videographer", "Highlights reel (3–5 min)", "100+ edited photos", "Online delivery gallery"]
      },
      {
        name: "Gold Tier",
        details: "Full-day coverage (10 hrs)",
        turnaround: "21 working days",
        deliverables: ["Full-day coverage (10 hrs)", "2 photographers + 1 videographer", "Full wedding film (10–20 min) + highlights", "300+ edited photos", "Engagement or pre-wedding shoot", "Premium online gallery", "USB delivery"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-event coverage (3 days max)",
        turnaround: "30 working days",
        deliverables: ["Multi-day coverage (3 days max)", "3 photographers + 2 videographers", "Cinematic wedding film (20–40 min)", "500+ retouched photos", "Drone aerial coverage", "Same-day edit highlight reel", "Album design & print option", "Private client gallery + USB"]
      }
    ]
  },
  {
    title: "Functions & Social Events",
    overview: "Every celebration captured with precision, warmth and storytelling excellence.",
    description: "From birthdays and galas to private celebrations and social gatherings — we capture the energy, emotion and highlights of your event with cinematic care and professional expertise, creating lasting content that relives the occasion beautifully.",
    tiers: [
      {
        name: "Silver Tier",
        details: "4-hour coverage",
        turnaround: "5–7 working days",
        deliverables: ["4-hour event coverage", "1 photographer or videographer", "50+ edited photos or highlights reel (2–3 min)", "Online delivery"]
      },
      {
        name: "Gold Tier",
        details: "8-hour coverage",
        turnaround: "7–10 working days",
        deliverables: ["8-hour coverage", "1 photographer + 1 videographer", "200+ edited photos", "Full event video (8–12 min) + teaser", "Social media cuts", "Online delivery gallery"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-session event coverage",
        turnaround: "10–14 working days",
        deliverables: ["Full event coverage (multi-day option)", "2 photographers + 2 videographers", "400+ retouched photos", "Cinematic event film (15–25 min)", "Same-day preview content for social", "Drone coverage option", "Full delivery package (digital + print)"]
      }
    ]
  },
  {
    title: "Marketing Events & Activations",
    overview: "Activation coverage that amplifies your campaign and extends its reach far beyond the event.",
    description: "We capture brand activations, product launches, pop-ups and marketing events with the energy and precision needed to create compelling content for campaigns, PR and digital channels. Designed to be shared, remembered and talked about.",
    tiers: [
      {
        name: "Silver Tier",
        details: "4-hour activation coverage",
        turnaround: "3–5 working days",
        deliverables: ["4-hour coverage", "1 content creator (photo + video)", "50+ edited images", "Highlights reel (2–3 min)", "Social-ready content pack"]
      },
      {
        name: "Gold Tier",
        details: "8-hour full event coverage",
        turnaround: "5–7 working days",
        deliverables: ["8-hour full event coverage", "1 photographer + 1 videographer", "200+ edited images", "Full event film (10–15 min) + teaser", "Press & PR-ready image pack", "Social media deliverables (Reels, Stories)", "On-site quick preview for social posting"]
      },
      {
        name: "Platinum Tier",
        details: "Multi-day production crew",
        turnaround: "7–10 working days",
        deliverables: ["Multi-day campaign coverage", "Dedicated content team (3+ crew)", "400+ retouched photos", "Cinematic campaign film (15–30 min)", "Live social posting support", "Drone & aerial coverage", "Press kit & media asset delivery", "Raw footage handover"]
      }
    ]
  }
];

export const ADVERTISING_SERVICES_DETAILED = [
  {
    title: "Creative Advertising & Cinematic Production",
    overview: "High-impact films and branded visual content that elevate brand presence.",
    items: [
      "Cinematic TV & Digital Commercials",
      "Corporate Profile Films & Brand Documentaries",
      "Event, Conference & Launch Coverage",
      "Social Media Reels & Short-Form Videos",
      "AI-Powered Video Production",
      "4K Edit, Colour Grade & Motion Titles"
    ]
  },
  {
    title: "Brand Identity & Visual Direction",
    overview: "Distinctive identities that communicate clarity, sophistication and trust.",
    items: [
      "Logo Design & Brand Positioning",
      "Visual Strategy, Typography & Colour Systems",
      "Brand Guidelines & Identity Manuals",
      "Seasonal Rebrands & Brand Refresh"
    ]
  },
  {
    title: "Digital Marketing & Brand Performance",
    overview: "Creative storytelling with data-driven strategy for sustainable digital growth.",
    items: [
      "Social Media Strategy & Management",
      "Paid Advertising — Meta, Google, YouTube",
      "Audience Targeting & Funnel Optimisation",
      "Analytics & Performance Reporting",
      "WhatsApp Broadcast Strategy",
      "SEO & Content Strategy"
    ]
  },
  {
    title: "Design & Brand Collaterals",
    overview: "Refined marketing materials that maintain brand consistency across all platforms.",
    items: [
      "Corporate Presentations & Brochures",
      "Promotional Materials & Packaging",
      "Stationery & Brand Collaterals",
      "YouTube Thumbnails & Social Covers",
      "Email Newsletter Design",
      "Story, Banner & Ad Designs"
    ]
  }
];

export const STRATEGIC_MONTHLY_PACKAGES = [
  {
    name: "Silver Package",
    details: "Best for startups & small businesses",
    turnaround: "Monthly Retainer",
    deliverables: [
      "Video: 2 Brand Videos + 4 Short Videos",
      "AI: 2 AI-Generated Ad Videos + Voiceover",
      "SMM: 2 Platforms Managed + 12 Posts",
      "Digital: 1 Meta Ad Campaign + Reporting",
      "Design: 8 Social Designs + 2 Banners",
      "Community Engagement & DM Replies"
    ]
  },
  {
    name: "Gold Package",
    isPopular: true,
    details: "For growing SMEs & established brands",
    turnaround: "Monthly Retainer",
    deliverables: [
      "Video: 4 Cinematic Videos + 8 Short Videos",
      "AI: 5 AI Ads + Avatar/Spokesperson Video",
      "SMM: 3 Platforms Managed + 20 Posts",
      "Digital: 3 Ad Campaigns (Meta + Google)",
      "Design: 20 Social Designs + 5 Ad Designs",
      "WhatsApp Broadcast & SEO Strategy",
      "Advanced Analytics & ROI Reporting"
    ]
  },
  {
    name: "Platinum Package",
    details: "For enterprise & luxury brands",
    turnaround: "Monthly Retainer",
    deliverables: [
      "Video: 8+ Cinematic Videos + Unlimited Shorts",
      "AI: Unlimited AI Ads + Brand Avatar Series",
      "SMM: All Platforms Managed + 30+ Posts",
      "Digital: Full Ad Funnel (Meta, Google, TikTok)",
      "Design: Unlimited Designs + Dedicated Designer",
      "Full Brand Identity Updates & Rebranding",
      "VIP 24/7 Community & Reputation Care"
    ]
  }
];

export const PREMIUM_ADDONS = [
  "Script & storyboard",
  "Voiceover (EN/AR/Hindi)",
  "Custom music",
  "Express editing",
  "Multi-language subtitles",
  "Drone add-on",
  "Social media content pack"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Brand Memory Makers: Our Vision for Luxury Media",
    excerpt: "Discover how Lifelongads FZC is redefining cinematic storytelling and brand experiences in Dubai's premium market.",
    date: "April 2, 2026",
    category: "Insights",
    image: "/BLOG 1.jpg",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7430513869053251584"
  },
  {
    title: "Strategic Creativity: Why Every Frame Matters",
    excerpt: "Exploring the 'Marketing Study' approach that ensures every creative choice serves a commercial objective.",
    date: "March 28, 2026",
    category: "Strategy",
    image: "/BLOG 2.jpg",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7424351822489886721"
  },
  {
    title: "Cinematic Excellence in Dubai's Advertising Landscape",
    excerpt: "How high-end film techniques and emotional engagement create unforgettable brand memories for our clients.",
    date: "March 20, 2026",
    category: "Market Trends",
    image: "/BLOG 3.jpg",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7442845631850856448"
  }
];
