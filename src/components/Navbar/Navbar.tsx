import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import data from "../../data/portfolioData";
import "./Navbar.css";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "About",    id: "#about"    },
  { name: "Projects", id: "#projects" },
  { name: "Skills",   id: "#skills"   },
  { name: "Services", id: "#services" },
  { name: "Contact",  id: "#contact"  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const githubUsername = useMemo(() => {
    const githubLink = data.contact.links.find((l) => l.name === "GitHub");
    if (!githubLink) return "";
    return githubLink.url
      .replace("https://github.com/", "")
      .replace(/\/$/, "");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveId("#" + visible[0].target.id);
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <span className="logo">AW.</span>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  className={activeId === link.id ? "active" : ""}
                  onClick={handleNavClick}
                  aria-current={activeId === link.id ? "page" : undefined}
                >
                  {link.name}
                  {activeId === link.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="nav-indicator"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          {githubUsername && (
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label={`GitHub: @${githubUsername}`}
            >
              <img
                src={`https://cdn.simpleicons.org/github/ffffff`}
                alt=""
                width={28}
                height={28}
                className="github-avatar"
              />
              <span className="github-username">@{githubUsername}</span>
            </a>
          )}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  ☀️
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  🌙
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a href="#contact" className="cta-btn">
            Hire Me
          </a>

          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMenuOpen((prev) => !prev);
              }
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.ul
              className="mobile-nav-links"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={itemVariants}>
                  <a
                    href={link.id}
                    className={activeId === link.id ? "active" : ""}
                    onClick={handleNavClick}
                    aria-current={activeId === link.id ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
