import "./QuickStats.css";
import { motion } from "framer-motion";

import { useUser } from "../../../../context/useUser";
import { calculateStats } from "../../../../game/calculations/stats";

export default function QuickStats() {

  const { user } = useUser();

  const stats = calculateStats(user.history);

  const cards = [
    {
      icon: "🔥",
      value: stats.currentStreak,
      label: "Racha",
    },
    {
      icon: "🧉",
      value: stats.totalMates,
      label: "Termos",
    },
    {
      icon: "⭐",
      value: user.progress.level,
      label: "Nivel",
    },
    {
      icon: "📈",
      value: stats.averagePerDay,
      label: "Promedio",
    },
  ];

  return (
    <section className="quick-stats">

      {cards.map((card, index) => (

        <motion.article
          key={card.label}
          className="stat-card"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5,
            delay: index * .15,
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
        >

          <span className="stat-icon">
            {card.icon}
          </span>

          <h3>{card.value}</h3>

          <p>{card.label}</p>

        </motion.article>

      ))}

    </section>
  );
}