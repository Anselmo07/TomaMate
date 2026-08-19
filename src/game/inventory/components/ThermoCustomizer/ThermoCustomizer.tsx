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

  onRotate?: (
    placementId: string,
    rotation: number
  ) => void;

  onScale?: (
    placementId: string,
    scale: number
  ) => void;

  onRemove?: (
  placementId: string
) => void;
}

export default function ThermoCustomizer({
  sticker,
  placement,
  onMove,
  onRotate,
  onScale,
  onRemove,
}: Props) {

  const thermoRef =
    useRef<HTMLDivElement>(null);

  const [dragging, setDragging] =
    useState(false);

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {

    if (!placement) {
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

    if (
      !dragging ||
      !placement ||
      !thermoRef.current
    ) {
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

    onMove?.(
      placement.id,
      x,
      y
    );
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>
  ) {

    event.currentTarget.releasePointerCapture(
      event.pointerId
    );

    setDragging(false);
  }

  function handleRotationChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    if (!placement) {
      return;
    }

    onRotate?.(
      placement.id,
      Number(event.target.value)
    );
  }

  function handleScaleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    if (!placement) {
      return;
    }

    onScale?.(
      placement.id,
      Number(event.target.value)
    );
  }

  if (!sticker || !placement) {
    return null;
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
          Mové, rotá y cambiá el tamaño del sticker.
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

            <div
              className={`
                thermo__sticker
                ${dragging ? "is-dragging" : ""}
              `}
              style={{
                transform: `
                  translate(
                    ${placement.x}px,
                    ${placement.y}px
                  )
                  rotate(${placement.rotation}deg)
                  scale(${placement.scale})
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

          </div>

        </div>

      </div>

      <div className="thermo-customizer__controls">

        <label>

          <span>
            Tamaño
          </span>

          <input
            type="range"
            min="0.5"
            max="2"
            step="0.05"
            value={placement.scale}
            onChange={
              handleScaleChange
            }
          />

          <strong>
            {Math.round(
              placement.scale * 100
            )}%
          </strong>

        </label>

        <label>

          <span>
            Rotación
          </span>

          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={placement.rotation}
            onChange={
              handleRotationChange
            }
          />

          <strong>
            {placement.rotation}°
          </strong>

        </label>

            <button
              type="button"
              className="thermo-customizer__remove"
              onClick={() => {
                if (!placement) {
                  return;
                }

                onRemove?.(placement.id);
              }}
            >
              🗑️ Eliminar sticker
            </button>

      </div>

      <div className="thermo-customizer__selected">

        <span>
          Sticker seleccionado
        </span>

        <strong>
          {sticker.name}
        </strong>

      </div>

    </section>
  );
}