import "./HeatmapCard.css";

import { motion } from "framer-motion";

import { useUser } from "../../../../context/useUser";

import { calculateHeatmap } from "../../../../game/calculations/heatmap";
import { calculateStats } from "../../../../game/calculations/stats";

const weekDays = [
  "Dom",
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb",
];

export default function HeatmapCard() {

  const { user } = useUser();

  const { weeks } = calculateHeatmap(user.history);

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

        <p>Últimas 53 semanas</p>

      </div>

      {/* ===========================
            Meses
      =========================== */}

      <div className="heatmap-months">

        <div className="heatmap-months__space" />

        {weeks.map((week, index) => {

          const previous = weeks[index - 1];

          const showMonth =
            index === 0 ||
            previous.month !== week.month;

          return (

            <div
              key={index}
              className="heatmap-month"
            >

              {showMonth && (
                <span>
                  {week.month}
                </span>
              )}

            </div>

          );

        })}

      </div>

      {/* ===========================
            Heatmap
      =========================== */}

      <div className="heatmap-wrapper">

        <div className="heatmap-days">

          {weekDays.map((day) => (

            <span key={day}>
              {day}
            </span>

          ))}

        </div>

        <div className="heatmap-weeks">

          {weeks.map((week, weekIndex) => (

            <div
              key={weekIndex}
              className="heatmap-week"
            >

              {week.days.map((day) => (

                <motion.div
                  key={day.date}
                  className={`heatmap-cell level-${day.value}`}
                  whileHover={{
                    scale: 1.35,
                  }}
                  title={`${day.date} • ${day.thermos} termo(s)`}
                />

              ))}

            </div>

          ))}

        </div>

      </div>

      {/* ===========================
            Footer
      =========================== */}

      <div className="heatmap-info">

        <div>

          <strong>
            🔥 {stats.bestStreak}
          </strong>

          <span>
            Mejor racha
          </span>

        </div>

        <div>

          <strong>
            🧉 {stats.totalMates}
          </strong>

          <span>
            Termos registrados
          </span>

        </div>

        <div>

          <strong>
            📅 {user.history.length}
          </strong>

          <span>
            Días registrados
          </span>

        </div>

      </div>

    </motion.section>

  );

}