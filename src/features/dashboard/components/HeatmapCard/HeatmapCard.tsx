import "./HeatmapCard.css";

import { motion } from "framer-motion";

import { useUser } from "../../../../context/useUser";

import { calculateHeatmap } from "../../../../game/calculations/heatmap";
import { calculateStats } from "../../../../game/calculations/stats";

export default function HeatmapCard() {

  const { user } = useUser();

  const heatmap = calculateHeatmap(user.history);

  const stats = calculateStats(user.history);

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

        <p>
          {new Date().toLocaleString("es-AR", {
            month: "long",
            year: "numeric",
          })}
        </p>

      </div>

      <div className="heatmap-grid">

        {heatmap.map((day) => (

          <motion.div
            key={day.date}
            className={`heatmap-cell level-${day.value}`}
            whileHover={{
              scale: 1.25,
            }}
            title={`${day.date} • ${day.value}`}
          />

        ))}

      </div>

      <div className="heatmap-info">

        <div>

          <strong>🔥 {stats.bestStreak}</strong>

          <span>Mejor racha</span>

        </div>

        <div>

          <strong>🧉 {stats.totalMates}</strong>

          <span>Termos registrados</span>

        </div>

        <div>

          <strong>📅 {user.history.length}</strong>

          <span>Días registrados</span>

        </div>

      </div>

    </motion.section>
  );
}