import Card from "../common/Card";

export default function StreakCard() {
  return (
    <Card className="text-center">
      <h2 className="text-lg text-zinc-400">
        Racha actual
      </h2>

      <p className="mt-3 text-6xl font-bold">
        🔥 12
      </p>

      <p className="mt-2 text-zinc-400">
        días consecutivos
      </p>
    </Card>
  );
}