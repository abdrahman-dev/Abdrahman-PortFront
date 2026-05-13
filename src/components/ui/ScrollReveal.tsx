import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  className?: string;
}

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
};

function getInitialReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  once = true,
  className,
}: ScrollRevealProps) {
  const [reduceMotion, setReduceMotion] = useState(getInitialReduceMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = directionVariants[direction];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay }}
    >
      {children}
    </motion.div>
  );
}
