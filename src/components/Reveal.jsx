import React from "react";
import { motion } from "framer-motion";

// Scroll-triggered reveal wrapper. Elements fade + rise into view once.
const Reveal = ({
  children,
  delay = 0,
  y = 44,
  className = "",
  style = {},
}) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
