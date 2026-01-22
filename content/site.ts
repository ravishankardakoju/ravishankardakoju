
export interface SiteConfig {
  person: {
    fullName: string;
    displayName: string;
    seoAlternateNames: string[];
    location: string;
    roles: string[];
    shortBio: string;
    longBio: string;
    quote: string;
    rotaryIdentityLine: string;
  };
  stats: {
    label: string;
    value: string;
    footnote?: string;
  }[];
  initiatives: {
    title: string;
    location: string;
    focus: string;
    bullets: string[];
    year?: string;
  }[];
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
  links: {
    youtube: string;
    linkedin: string;
    instagram: string;
    rotaryLinkedInPost: string;
    rotaryStoryPledge50m: string;
    contactEmail: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
}

export const siteConfig: SiteConfig = {
  person: {
    fullName: "Ravishankar Dakoju",
    displayName: "Ravishankar Dakoju",
    seoAlternateNames: ["Ravishankar Dokuju"],
    location: "Bengaluru, India",
    roles: ["Senior Rotarian", "Philanthropist", "Community Builder"],
    shortBio: "A life dedicated to service, from humble beginnings to one of the largest individual contributions in Rotary Foundation history.",
    longBio: `Ravishankar Dakoju's life is a testament to resilience and the transformative power of giving. Born into a family that faced significant hardship, he started working young—delivering milk at dawn before school—to support his mother, who raised seven children with unwavering dignity. 

    Armed with a Graduate Diploma in Marketing & Business Management, he built a successful career in real estate in Bengaluru. His journey from scarcity to abundance fueled a deep commitment to giving back. A devoted Rotarian, his philosophy was shaped by a teacher who told him: "You should give till it hurts, because until then you are sharing your comfort, not everything that you have." He is supported in his mission by his wife Paola and two daughters, Ektaa and Samta.`,
    quote: "I believe whatever money I have belongs to society. I am just a custodian for a short while. I didn't bring it with me, nor can I take it with me.",
    rotaryIdentityLine: "Inspired by the Rotary spirit of service.",
  },
  stats: [
    {
      label: "Committed to TRF (2018)",
      value: "₹100 Cr",
      footnote: "≈ US$14.7M",
    },
    {
      label: "Pledged to TRF (2026)",
      value: "US$50M",
      footnote: "Announced at Rotary International Assembly",
    },
    {
      label: "Happy Schools Supported",
      value: "128",
      footnote: "Rural schools upgraded",
    },
    {
      label: "Trees Initiative",
      value: "10M",
      footnote: "Koti Nati Mission",
    },
  ],
  initiatives: [
    {
      title: "RBO Happy Schools",
      location: "Rural Karnataka",
      focus: "Education Infrastructure",
      bullets: [
        "Adopted 128 rural schools for comprehensive upgrades.",
        "Provided toilets, RO water units, painting, flooring, and libraries.",
        "Benefits approximately 8,000–10,000 students annually.",
      ],
      year: "Ongoing",
    },
    {
      title: "Government School Rebuild",
      location: "Vasanth Nagar, Bengaluru",
      focus: "Education",
      bullets: [
        "Rebuilt ~20,000 sq.ft school infrastructure.",
        "Capacity increased to support 750–800 students.",
        "State-of-the-art facilities for underprivileged children.",
      ],
    },
    {
      title: "Rotary Koti-Nati",
      location: "Karnataka & Beyond",
      focus: "Environment",
      bullets: [
        "Mission to plant and nurture 10 million saplings.",
        "Restoring green cover and promoting biodiversity.",
        "Community-driven execution with local partners.",
      ],
    },
    {
      title: "Dakoju Senior Citizen Home",
      location: "Bengaluru",
      focus: "Elder Care",
      bullets: [
        "Inaugurated in 2016 to provide dignity to seniors.",
        "Supports 'Chaitanya' home initiatives.",
        "Focus on holistic care and community living.",
      ],
      year: "2016",
    },
    {
      title: "Lyzon Friendship School",
      location: "Khomunnom, Manipur",
      focus: "Education in Conflict Zones",
      bullets: [
        "Supporting education for 350 students.",
        "Bridge for peace and community building.",
        "Infrastructure and learning resource support.",
      ],
    },
    {
      title: "Water Storage Infrastructure",
      location: "Ijorong, Manipur",
      focus: "Water & Sanitation",
      bullets: [
        "Constructed 77,500L water storage tank.",
        "Combating water scarcity in remote villages.",
        "Ensures clean water access for hundreds of families.",
      ],
    },
    {
      title: "Sunbird Ravishankar Farming Centre",
      location: "Ijorong, Manipur",
      focus: "Agriculture",
      bullets: [
        "Knowledge centre for sustainable farming.",
        "Empowering local farmers with modern techniques.",
        "Boosting local economy and food security.",
      ],
    },
  ],
  timeline: [
    {
      year: "1953",
      title: "Early Life",
      description: "Born on June 6, 1953 in Bengaluru. Faced early financial hardships; worked morning shifts milking cows to support the family while pursuing education.",
    },
    {
      year: "1970s",
      title: "Education & Foundation",
      description: "Completed BA from The National College, Bangalore, followed by a Diploma in Business Administration & Marketing Management. Started building a career with resilience and determination.",
    },
    {
      year: "1987",
      title: "Hara Housing Founded",
      description: "Co-founded Hara Housing and Land Development Company (now HARA GLOBAL ESTATES PRIVATE LIMITED), which became a leading real estate developer in Bengaluru.",
    },
    {
      year: "2000s",
      title: "Business & Family",
      description: "Established a successful real estate legacy in Bengaluru. Raised two daughters, Ektaa and Samta, instilling values of service.",
    },
    {
      year: "2016",
      title: "Senior Citizen Home",
      description: "Inaugurated the Dakoju Senior Citizen Home, marking a major milestone in personal philanthropy.",
    },
    {
      year: "2018",
      title: "Historic Gift",
      description: "Committed ₹100 crore (≈ US$14.7M) to The Rotary Foundation, one of the largest contributions from India.",
    },
    {
      year: "2026",
      title: "The US$50M Pledge",
      description: "Announced a US$50 Million pledge to The Rotary Foundation at the Rotary International Assembly to continue the legacy of service.",
    },
  ],
  links: {
    youtube: "https://youtu.be/4g--0zbz3RM?si=uTK5PsYJhZr2VxNt",
    linkedin: "https://www.linkedin.com/in/dakojusocial/",
    instagram: "https://www.instagram.com/ravishankardakojuofficial",
    rotaryLinkedInPost: "https://www.linkedin.com/posts/rotary-international_longtime-rotary-member-ravishankar-dakoju-activity-7419860138007781376-ulYs",
    rotaryStoryPledge50m: "https://www.rotary.org/en/indian-developer-donates-us-50-million-rotary-foundation",
    contactEmail: "ravishankardakojupr@gmail.com",
  },
  gallery: [
    { src: "/gallery/portrait-professional-dark.jpeg", alt: "Ravishankar Dakoju - Professional Portrait" },
    { src: "/gallery/portrait-professional-light.jpeg", alt: "Ravishankar Dakoju - Business Portrait" },
    { src: "/gallery/rotary-event-respect.jpeg", alt: "Rotary International Event - Gesture of Respect" },
    { src: "/gallery/award-ceremony.jpeg", alt: "Ravishankar Dakoju at Award Ceremony" },
    { src: "/gallery/family-arch-klumph.jpeg", alt: "With Family at Arch Klumph Society Event" },
    { src: "/gallery/family-celebration.jpeg", alt: "Ravishankar Dakoju with Family" },
    { src: "/gallery/event-1.jpeg", alt: "Rotary Event Image 1" },
    { src: "/gallery/event-2.jpeg", alt: "Ravishankar Dakoju with his entire family" },
  ],
};
