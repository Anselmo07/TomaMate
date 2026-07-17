import "./About.css";

export default function About() {
  return (
    <section className="about">

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

    </section>
  );
}