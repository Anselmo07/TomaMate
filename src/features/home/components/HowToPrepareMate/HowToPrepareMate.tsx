import "./HowToPrepareMate.css";

export default function HowToPrepareMate() {
  return (
    <section className="prepare">

      <div className="prepare__header">
        <span>EL RITUAL</span>

        <h2>Cómo preparar un buen mate</h2>

        <p>
          No existe una única manera, pero estos tres pasos forman parte
          del ritual que millones de personas repiten cada día.
        </p>
      </div>

      <div className="prepare__steps">

        <article className="step">

          <div className="step__number">
            1
          </div>

          <div className="step__image"></div>

          <h3>Llená el mate</h3>

          <p>
            Colocá yerba hasta aproximadamente tres cuartos del recipiente.
          </p>

        </article>

        <article className="step">

          <div className="step__number">
            2
          </div>

          <div className="step__image"></div>

          <h3>Formá la montañita</h3>

          <p>
            Incliná la yerba para dejar un hueco donde irá el agua y la bombilla.
          </p>

        </article>

        <article className="step">

          <div className="step__number">
            3
          </div>

          <div className="step__image"></div>

          <h3>Agregá agua caliente</h3>

          <p>
            Evitá hervir el agua. Entre 75°C y 80°C es el punto ideal.
          </p>

        </article>

      </div>

    </section>
  );
}