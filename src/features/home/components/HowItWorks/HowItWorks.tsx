import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how">

      <span className="how__eyebrow">
        CÓMO FUNCIONA
      </span>

      <h2>
        Construí tu historia
        <br />
        matera.
      </h2>

      <div className="how__cards">

        <article className="how-card">

          <div className="how-card__icon">
            🧉
          </div>

          <h3>¿Tomaste mate?</h3>

          <p>
            Registrá si tomaste mate durante el día.
          </p>

        </article>

        <article className="how-card">

          <div className="how-card__icon">
            🫖
          </div>

          <h3>¿Cuántos termos?</h3>

          <p>
            Elegí cuántos termos compartiste.
          </p>

        </article>

        <article className="how-card">

          <div className="how-card__icon">
            🔥
          </div>

          <h3>Mantené la racha</h3>

          <p>
            Cada día suma experiencia y nuevas recompensas.
          </p>

        </article>

      </div>

    </section>
  );
}