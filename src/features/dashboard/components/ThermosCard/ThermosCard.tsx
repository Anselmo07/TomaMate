import "./ThermosCard.css";
import { motion } from "framer-motion";

import thermosImage from "../../../../assets/images/stanley.png"

export default function ThermosCard() {
  return (
    <motion.section
      className="thermos-card"
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
      <div className="thermos-card__header">

        <span>PERSONALIZACIÓN</span>

        <h2>Tu termo</h2>

      </div>

      <div className="thermos-preview">

        <div className="thermos-preview__image">

          <img
              src={thermosImage}
              alt="Stanley Verde"
              className="thermos-preview__image"
          />

        </div>

        <h3>Stanley Verde</h3>

        <p>
          Tu compañero de todos los días.
        </p>

      </div>

      <div className="stickers">

        <span>⭐ Stickers equipados</span>

        <div className="stickers-list">

          <div>🌞</div>

          <div>🧉</div>

          <div>🇦🇷</div>

        </div>

      </div>

      <button>

        Personalizar

      </button>

    </motion.section>
  );
}