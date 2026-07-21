import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <span className="about__eyebrow">
        MÁS QUE UNA BEBIDA
      </span>

      <h2>
        El mate nunca fue
        <br />
        solo un mate.
      </h2>

      <p className="about__description">
        Es la charla antes del trabajo.
        La compañía durante el estudio.
        La ronda con amigos.
        El descanso de la tarde.
        El ritual de cada mañana.
      </p>

      <p className="about__highlight">
        Toma Mate transforma esa costumbre
        en una historia que podés recordar
        todos los días.
      </p>
    </motion.section>
  );
}