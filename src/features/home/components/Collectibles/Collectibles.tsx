import "./Collectibles.css";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "🧉",
    title: "Mates",
    text: "Descubrí mates clásicos, imperiales, camioneros, torpedos y muchos más.",
  },
  {
    icon: "🫖",
    title: "Termos",
    text: "Equipá diferentes modelos y construí tu colección favorita.",
  },
  {
    icon: "⭐",
    title: "Stickers",
    text: "Personalizá tu termo pegando stickers donde vos quieras.",
  },
];

export default function Collectibles() {
  return (
    <motion.section
      className="collectibles"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="collectibles__header">
        <span>PROGRESIÓN</span>

        <h2>
          Desbloqueá tu
          <br />
          colección.
        </h2>

        <p>
          A medida que mantengas tu racha conseguirás nuevos mates,
          termos y stickers para personalizar completamente tu perfil.
        </p>
      </div>

      <div className="collectibles__grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="collectible-card"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
              rotate: -2,
            }}
          >
            <div className="collectible-card__image">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}