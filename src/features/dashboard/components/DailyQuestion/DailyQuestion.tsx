import { useState } from "react";

import Card from "../../../../components/ui/Card/Card";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";

import { useUser } from "../../../../context/useUser";

import { getTodayEntry } from "../../../../game/engines/history";

import "./DailyQuestion.css";

export default function DailyQuestion() {
  const { user, recordToday } = useUser();

  const [open, setOpen] = useState(false);

  const [thermos, setThermos] = useState(1);

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const alreadyAnswered = !!getTodayEntry(
    user.history,
    today
  );

  function handleNo() {
    if (alreadyAnswered) return;

    recordToday({
      drankMate: false,
      thermos: 0,
    });
  }

  function handleYes() {
    if (alreadyAnswered) return;

    setOpen(true);
  }

  function handleSave() {
    recordToday({
      drankMate: true,
      thermos,
    });

    setThermos(1);

    setOpen(false);
  }

  return (
    <>
      <Card>

        <h2>
          {alreadyAnswered
            ? "🔥 ¡Nos vemos mañana!"
            : "🧉 ¿Tomaste mate hoy?"}
        </h2>

        {alreadyAnswered && (
          <p className="daily-question__completed">
            ✅ Ya registraste tu día de hoy.
          </p>
        )}

        {!alreadyAnswered && (
          <div className="daily-question__actions">

            <Button onClick={handleYes}>
              Sí
            </Button>

            <Button
              variant="secondary"
              onClick={handleNo}
            >
              No
            </Button>

          </div>
        )}

      </Card>

      <Modal
        open={open}
        title="¿Cuántos termos tomaste?"
        onClose={() => setOpen(false)}
      >

        <div className="daily-question__counter">

          <Button
            variant="secondary"
            onClick={() =>
              setThermos(Math.max(1, thermos - 1))
            }
          >
            -
          </Button>

          <span>{thermos}</span>

          <Button
            variant="secondary"
            onClick={() =>
              setThermos(thermos + 1)
            }
          >
            +
          </Button>

        </div>

        <Button
          fullWidth
          onClick={handleSave}
        >
          Registrar
        </Button>

      </Modal>
    </>
  );
}