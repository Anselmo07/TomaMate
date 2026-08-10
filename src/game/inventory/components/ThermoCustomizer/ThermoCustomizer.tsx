import "./ThermoCustomizer.css";

import type { Sticker } from "../../../../types/sticker";

interface Props {
  sticker?: Sticker;
}

export default function ThermoCustomizer({
  sticker,
}: Props) {

  return (
    <section className="thermo-customizer">

      <div className="thermo-customizer__header">

        <span>
          PERSONALIZAR
        </span>

        <h2>
          Tu termo
        </h2>

        <p>
          Personalizalo con tus stickers.
        </p>

      </div>

      <div className="thermo-customizer__preview">

        <div className="thermo">

          <div className="thermo__cap">
            ●
          </div>

          <div className="thermo__body">

            <span className="thermo__logo">
              🧉
            </span>

            {sticker && (

              <div className="thermo__sticker">

                {sticker.image}

              </div>

            )}

          </div>

        </div>

      </div>

      {sticker && (

        <div className="thermo-customizer__selected">

          <span>
            Sticker seleccionado
          </span>

          <strong>
            {sticker.name}
          </strong>

        </div>

      )}

    </section>
  );
}