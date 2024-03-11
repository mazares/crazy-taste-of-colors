import "./Card.css";

import { motion } from "framer-motion";

export default function Card({ id, title }) {
  const handlePointerMove = (event) => {
    const style = event.target.style;
    style.transform = `rotateX(${event.clientY / 50}deg) rotateY(${
      event.clientX / 50
    }deg)`;
    style.transition = "0.2s";
    style.transitionTimingFunction = "ease-in-out";
  };

  const resetTransform = (event) => {
    const style = event.target.style;
    style.transform = "rotateX(0deg) rotateY(0deg)";
    style.transition = "0.5s";
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTransform}
      removePointerMove={resetTransform}
    >
      <h2>{title}</h2>
    </motion.div>
  );
}
