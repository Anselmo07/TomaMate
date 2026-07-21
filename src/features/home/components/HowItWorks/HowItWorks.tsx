import "./HowItWorks.css";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "🧉",
    title: "¿Tomaste mate?",
    description:
      "Respondé con un simple sí o no.",
  },
  {
    icon: "🫖",
    title: "¿Cuántos termos?",
    description:
      "Elegí la cantidad de termos del día.",
  },
  {
    icon: "🔥",
    title: "Construí tu racha",
    description:
      "Cada día suma experiencia y recompensas.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">

      <span className="how__eyebrow">
        CÓMO FUNCIONA
      </span>

      <h2>
        Tres pasos.
        <br />
        Un nuevo ritual.
      </h2>

      <div className="how__timeline">

        {steps.map((step, index) => (

          <motion.article
            key={step.title}
            className="how-step"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .2,
              duration: .6,
            }}
          >
            <div className="how-step__icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </motion.article>

        ))}

      </div>
    </section>
  );
}