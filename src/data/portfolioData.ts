import type { PortfolioData } from "../types";

const data: PortfolioData = {
  hero: {
    name: "Abdrahman Walied Nasr",
    title: "Backend Engineer · AI-Integrated Systems",
    bio: "I build backend systems that don't just run — they scale, adapt, and keep working under real pressure. I specialize in integrating AI into production-ready applications, turning complex requirements into clean, maintainable architecture that companies can actually rely on.",
    cvPath: "/Myresume.pdf",
    terminal: [
      { type: "cmd",     text: "whoami" },
      { type: "info",    text: "abdrahman — engineer, builder, problem solver" },
      { type: "cmd",     text: "cat mission.txt" },
      { type: "success", text: "Building the future," },
      { type: "success", text: "one commit at a time." },
      { type: "cursor" },
    ],
  },

  about: {
    intro: "I'm a backend engineer who cares about systems that survive real usage — not just demos. I think in architecture, not just code, and I measure success by how well something holds up after launch.",
    focus: "My focus is backend architecture, scalable API design, and integrating AI into systems that solve real business problems — not proofs of concept.",
    extra: "I also work with Embedded Systems and IoT, which gives me a hardware-level perspective that most backend engineers don't have.",
    mindset: "I approach every project as an engineering problem first. That means design patterns, system thinking, and writing code that the next developer — or the future me — can actually work with.",
  },

  skills: {
    "Programming Languages": [
      { name: "C",          level: 4 },
      { name: "Python",     level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
    ],
    "Frameworks & Libraries": [
      { name: "React",     level: 4 },
      { name: "Node.js",   level: 5 },
      { name: "Express",   level: 5 },
      { name: "Flask",     level: 3 },
    ],
    Databases: [
      { name: "SQLite",   level: 4 },
      { name: "MongoDB",  level: 4 },
      { name: "Firebase", level: 3 },
    ],
    "Tools & Systems": [
      { name: "Git",     level: 5 },
      { name: "Linux",   level: 4 },
      { name: "Docker",  level: 4 },
      { name: "Postman", level: 4 },
    ],
    "Hardware & Embedded": [
      { name: "Raspberry Pi", level: 3 },
      { name: "IoT",          level: 3 },
    ],
  },

  services: [
    {
      name: "Backend Architecture & APIs",
      description: "Scalable, maintainable backend systems built with real architecture in mind — not just endpoints that work today. I design for growth, reliability, and the team that inherits the code.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "AI-Integrated Applications",
      description: "I bring AI into production — not as a feature sticker, but as a core part of the system. From intelligent APIs to automated pipelines, I build AI that companies can ship and scale.",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    },
    {
      name: "Full-Stack Delivery",
      description: "When a project needs end-to-end ownership, I cover the full stack. Backend-first, always — but I ship complete, production-ready products when the work calls for it.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ],

  codewars: {
    username: "abdrahman-dev",
    badgeUrl: "https://www.codewars.com/users/abdrahman-dev/badges/large",
    profileUrl: "https://www.codewars.com/users/abdrahman-dev",
    description: "Actively solving algorithmic challenges to sharpen problem-solving instincts, data structures knowledge, and algorithmic thinking under pressure.",
  },

  contact: {
    links: [
      {
        name: "Email",
        url: "mailto:your.email@example.com",
        img: "https://cdn.simpleicons.org/gmail/EA4335",
        description: "Send me a message",
      },
      {
        name: "GitHub",
        url: "https://github.com/abdrahman-dev",
        img: "https://cdn.simpleicons.org/github/0f172a",
        description: "View my open-source work",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdrahman-mussa/",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
        description: "Connect professionally",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/+201148630739",
        img: "https://cdn.simpleicons.org/whatsapp/25D366",
        description: "Chat with me directly",
      },
    ],
  },

  featuredRepos: [
    {
      name: "TrackYourJob",
      image: "/src/data/TRJ.png",
      liveDemo: "https://track-your-job-liart.vercel.app",
    },
    {
      name: "DevOS",
      image: "/src/data/DEVOS.png",
      liveDemo: "https://devos-nine.vercel.app/",
    },
    {
      name: "movie-recommender-app",
      image: "/src/data/AMA.png",
      liveDemo: "https://movie-rec0mmender-app.netlify.app",
    },
  ],
};

export default data;