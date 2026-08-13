import "./ThermoCustomizer.css";

import { useRef, useState } from "react";

import type { Sticker } from "../../../../types/sticker";

import type { StickerPlacement } from "../../../../types/stickerPlacement";

interface Props {
  sticker?: Sticker;

  placement?: StickerPlacement;

  onMove?: (
    placementId: string,
    x: number,
    y: number
  ) => void;
}

export default function ThermoCustomizer({
  sticker,
  placement,
  onMove,
}: Props) {

  const thermoRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {

    if (!thermoRef.current) {
      return;
    }

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setDragging(true);
  }

  function handlePointerMove(
  event: React.PointerEvent<HTMLDivElement>
) {

  if (!dragging || !thermoRef.current) {
    return;
  }

  const rect =
    thermoRef.current.getBoundingClientRect();

  const x =
    event.clientX -
    rect.left -
    rect.width / 2;

  const y =
    event.clientY -
    rect.top -
    rect.height / 2;

  setPosition({
    x,
    y,
  });

  if (placement && onMove) {
    onMove(
      placement.id,
      x,
      y
    );
  }
}

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>
  ) {

    event.currentTarget.releasePointerCapture(
      event.pointerId
    );

    setDragging(false);
  }

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

          <div
            ref={thermoRef}
            className="thermo__body"
          >

            <span className="thermo__logo">
              🧉
            </span>

            {sticker && (

              <div
                className={`thermo__sticker ${
                  dragging
                    ? "is-dragging"
                    : ""
                }`}
                style={{
                  transform: `
                    translate(
                      ${position.x}px,
                      ${position.y}px
                    )
                  `,
                }}
                onPointerDown={
                  handlePointerDown
                }
                onPointerMove={
                  handlePointerMove
                }
                onPointerUp={
                  handlePointerUp
                }
              >

                <img
                  src={sticker.image}
                  alt={sticker.name}
                  draggable={false}
                />

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