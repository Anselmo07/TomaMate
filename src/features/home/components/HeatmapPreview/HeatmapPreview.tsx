import "./HeatmapPreview.css";
import { motion } from "framer-motion";

export default function HeatmapPreview() {
  return (
    
    <motion.section
      className="heatmap-preview"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >

      <div className="heatmap-preview__content">

        <motion.div
          className="heatmap-preview__text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span>TU HISTORIA</span>

          <h2>
            Cada mate deja
            <br />
            una huella.
          </h2>

          <p>
            Cada día que registrás suma una nueva contribución a tu historia.
            Con el tiempo vas construyendo un mapa único que refleja tu
            constancia y evolución.
          </p>

          <div className="heatmap-preview__stats">

            <div>
              <strong>🔥 45</strong>
              <span>Días seguidos</span>
            </div>

            <div>
              <strong>🧉 1.284</strong>
              <span>Mates registrados</span>
            </div>

            <div>
              <strong>⭐ Nivel 17</strong>
              <span>Experiencia</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="heatmap-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >

          <div className="heatmap-preview__grid">

            {Array.from({ length: 140 }).map((_, index) => (

              <div
                key={index}
                className={
                  index % 7 === 0 ||
                  index % 5 === 0 ||
                  index % 9 === 0
                    ? "active"
                    : ""
                }
              />

            ))}

          </div>

        </motion.div>

      </div>

    </motion.section>
  );
}