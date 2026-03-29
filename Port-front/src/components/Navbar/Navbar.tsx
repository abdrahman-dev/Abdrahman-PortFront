import { useState, useEffect } from "react";
import "./Navbar.css";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "About",    id: "#about"    },
  { name: "Projects",   id: "#projects"   },
  { name: "Skills", id: "#skills" },
  { name: "Services", id: "#services" },
  { name: "Contact",  id: "#contact"  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]     = useState<boolean>(false);
  const [activeId, setActiveId]     = useState<string>("");
  const [scrolled, setScrolled]     = useState<boolean>(false);

  // navbar border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active link via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector<HTMLElement>(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId("#" + entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">AW.</div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
  <a
    href={link.id}
    className={activeId === link.id ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    {link.name}
  </a>
</li>
          ))}
        </ul>

        <a href="#contact" className="cta-btn">Hire Me</a>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;