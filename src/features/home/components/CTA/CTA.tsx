import "./CTA.css";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      className="cta"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta__content">

        <span>EMPEZÁ HOY</span>

        <h2>
          Cada día cuenta.
          <br />
          Cada mate también.
        </h2>

        <p>
          Registrá tus mates, mantené tu racha y construí una colección
          única mientras compartís una de las costumbres más lindas de
          nuestra cultura.
        </p>

        <div className="cta__actions">

          <button className="cta__primary">
            Empezar ahora
          </button>

          <button className="cta__secondary">
            Conocer más
          </button>

        </div>

      </div>
    </motion.section>
  );
}