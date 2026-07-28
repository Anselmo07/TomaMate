import "./QuickStats.css";
import { motion } from "framer-motion";
import { useUser } from "../../../../context/useUser";

export default function QuickStats() {

  const { user } = useUser();

  const stats = [
    {
      icon: "🔥",
      value: user.streak,
      label: "Racha",
    },
    {
      icon: "🧉",
      value: user.totalMates,
      label: "Mates",
    },
    {
      icon: "⭐",
      value: user.level,
      label: "Nivel",
    },
  ];

  return (
    <section className="quick-stats">

      {stats.map((stat, index) => (

        <motion.article
          key={stat.label}
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
            {stat.icon}
          </span>

          <h3>{stat.value}</h3>

          <p>{stat.label}</p>

        </motion.article>

      ))}

    </section>
  );
}