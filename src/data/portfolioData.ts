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
  img?: string
}

interface Service {
  name: string;
  description: string;
  img?: string;
}

interface ContactLink {
  name: string;
  url: string;
  img?: string;
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
  title: "Software Developer · Backend & AI Engineer",
  bio: "I build systems that don’t just work — they scale, perform, and last. From backend architecture to AI-powered solutions, I turn ideas into real, production-ready systems. With 2+ years of hands-on experience, I focus on building software that keeps working long after launch.",
  cvPath: "../../public/Myresume.pdf"
},

about: {
  intro:
    "I'm a software developer focused on building real-world systems, not just projects for display. I care deeply about performance, scalability, and writing code that survives real usage — not just demos.",
  
  focus:
    "I specialize in backend architecture, API design, and integrating AI into practical applications that solve real problems.",
  
  extra:
    "I also work with Embedded Systems and IoT, connecting software with hardware to build complete, intelligent systems.",
  
  mindset:
    "I approach development as engineering, not just coding — applying system design principles and design patterns to build maintainable, scalable solutions that continue to perform after deployment."
},

  skills: {
    "Programming Languages": [
      { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ],
    "Frameworks & Libraries": [
      { name: "React" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
      { name: "Node.js" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
      { name: "Express" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
      { name: "Flask" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"}
    ],
    "Databases": [
      { name: "SQLite" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"},
      { name: "MongoDB" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"},
      { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"}
    ],
    "Tools & Systems": [
      { name: "Git" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
      { name: "Linux" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
      { name: "Docker" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
      { name: "Mongoose" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg"},
      { name: "PostMan" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"}
    ],
    "Hardware & Embedded": [
      { name: "Raspberry Pi" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"},
      { name: "IoT" , img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"}
    ]
  },

services: [
  {
    name: "Full-Stack System Development",
    description: "Building complete, production-ready web applications from frontend to backend. I focus on clean architecture, performance, and scalability — not just getting things to work.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Backend Architecture & APIs",
    description: "Designing and developing scalable backend systems and APIs using best practices, system design principles, and design patterns to ensure long-term reliability and maintainability.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "AI-Powered Applications",
    description: "Integrating AI into real applications — from recommendation systems to intelligent automation — turning complex ideas into practical, usable solutions.",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png"  }
],

 contact: {
  links: [
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      img: "https://cdn.simpleicons.org/gmail/EA4335"
    },
    {
      name: "GitHub",
      url: "https://github.com/abdrahman-dev",
      img: "https://cdn.simpleicons.org/github/ffffff"  // أبيض للـ dark theme
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdrahman-mussa/",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+201148630739",
      img: "https://cdn.simpleicons.org/whatsapp/25D366"
    }
  ]
},

// https://cdn.simpleicons.org/{icon-name}/{hex-color}

  featuredRepos: [
    { name: "movie-recommender-app", liveDemo: "https://movie-rec0mmender-app.netlify.app" }
  ]
};

export default data;