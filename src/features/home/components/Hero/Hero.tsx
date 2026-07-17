import "./Hero.css";

import Button from "../../../../components/ui/Button/Button";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero__left">

        <span className="hero__badge">
          🇦🇷 La comunidad matera
        </span>

        <h1>
          TOMA <span>MATE</span>
        </h1>

        <p>
          Registrá cada día que compartís un mate, construí tu racha,
          desbloqueá recompensas y hacé crecer tu historia matera.
        </p>

        <Button>
          Empezar
        </Button>

      </div>

      <div className="hero__right">

        <div className="hero-preview">

          <div className="preview-header">

            <div className="preview-avatar">
              F
            </div>

            <div>

              <strong>Facundo</strong>

              <p>🔥 Racha de 12 días</p>

            </div>

          </div>

          <div className="preview-level">

            <span>Nivel 4</span>

            <div className="preview-bar">

              <div className="preview-bar-fill" />

            </div>

          </div>

          <div className="preview-heatmap">

            {
              Array.from({ length: 84 }).map((_, index) => (

                <div
                  key={index}
                  className={
                    Math.random() > .35
                      ? "active"
                      : ""
                  }
                />

              ))
            }

          </div>

        </div>

      </div>

    </section>
  );
}