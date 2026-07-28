import "./HeatmapCard.css";

import { motion } from "framer-motion";

const days = Array.from({ length: 35 }, (_, index) => ({
  active: Math.random() > 0.35,
  id: index,
}));

export default function HeatmapCard() {
  return (
    <motion.section
      className="heatmap-card"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .7,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="heatmap-card__header">

        <div>

          <span>ACTIVIDAD</span>

          <h2>Tu progreso diario</h2>

        </div>

        <p>Julio 2026</p>

      </div>

      <div className="heatmap-grid">

        {days.map((day) => (

          <motion.div
            key={day.id}
            className={`heatmap-cell ${
              day.active ? "active" : ""
            }`}
            whileHover={{
              scale: 1.25,
            }}
          />

        ))}

      </div>

      <div className="heatmap-info">

        <div>

          <strong>🔥 15</strong>

          <span>Mejor racha</span>

        </div>

        <div>

          <strong>🧉 82</strong>

          <span>Mates este mes</span>

        </div>

        <div>

          <strong>📅 23</strong>

          <span>Días registrados</span>

        </div>

      </div>

    </motion.section>
  );
}