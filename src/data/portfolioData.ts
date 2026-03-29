interface HeroData {
  name: string;
  title: string;
  bio: string;
  cvPath: string;
}

interface AboutData {
  intro: string;
  focus: string;
  extra: string;
  mindset: string;
}

interface Skill {
  name: string;
}

interface Service {
  name: string;
  description: string;
}

interface ContactLink {
  name: string;
  url: string;
}

interface FeaturedRepo {
  name: string;
  liveDemo: string | null;
}

interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: Record<string, Skill[]>;
  services: Service[];
  contact: { links: ContactLink[] };
  featuredRepos: FeaturedRepo[];
}

const data: PortfolioData = {
  hero: {
    name: "Abdrahman Walied Nasr",
    title: "Full-Stack Developer · Backend & AI Engineer",
    bio: "I build real, functional systems that solve problems. My focus is scalable backend architecture, AI-powered applications, and embedded systems. I don't wait to feel ready — I build until I become ready.",
    cvPath: "../../public/Myresume.pdf"
  },

  about: {
    intro:
      "I'm a developer focused on building real systems, not just demos. I care about performance, scalability, and creating solutions that actually work in real-world environments.",
    focus:
      "Backend architecture, APIs, and AI-powered applications.",
    extra:
      "Also working on Embedded Systems and IoT, integrating software with hardware.",
    mindset:
      "I build consistently, learn fast, and improve through execution — not waiting for the perfect moment."
  },

  skills: {
    "Programming Languages": [
      { name: "C" },
      { name: "C++" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" }
    ],
    "Frameworks & Libraries": [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Flask" }
    ],
    "Databases": [
      { name: "SQLite" },
      { name: "MongoDB" }
    ],
    "Tools & Systems": [
      { name: "Git" },
      { name: "Linux" },
      { name: "Docker" },
      { name: "Mongoose" }
    ],
    "Hardware & Embedded": [
      { name: "Raspberry Pi" },
      { name: "IoT" }
    ]
  },

  services: [
    {
      name: "Full-Stack Web Development",
      description: "Building complete web applications with React, Node.js, Express, and databases."
    },
    {
      name: "Backend & API Development",
      description: "Creating scalable, performant backend architectures and APIs, integrated with AI features."
    }
  ],

  contact: {
    links: [
      { name: "Email", url: "mailto:your.email@example.com" },
      { name: "GitHub", url: "https://github.com/yourusername" },
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { name: "WhatsApp", url: "https://wa.me/yourphonenumber" }
    ]
  },

  featuredRepos: [
    { name: "movie-recommender-app", liveDemo: "https://movie-rec0mmender-app.netlify.app" }
  ]
};

export default data;