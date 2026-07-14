import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

import MateCounter from "../../components/streak/MateCounter";
import StreakCard from "../../components/streak/StreakCard";
import Heatmap from "../../components/heatmap/Heatmap";

export default function Home() {
  return (
    <Container>
      <div className="mx-auto flex max-w-4xl flex-col gap-8">

        <StreakCard />

        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="mb-6 text-center text-2xl font-bold">
            ¿Cuántos mates tomaste hoy?
          </h2>

          <div className="flex justify-center">

            <MateCounter />

          </div>

          <div className="mt-8 flex justify-center">

            <Button>
              Guardar
            </Button>

          </div>

        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="mb-6 text-xl font-bold">

            Contribuciones

          </h2>

          <Heatmap />

        </section>

      </div>
    </Container>
  );
}