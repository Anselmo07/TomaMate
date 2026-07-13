import Card from "../common/Card";

export default function ProfileStats() {
  return (
    <Card>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold">
            🔥 12
          </h2>

          <p className="text-zinc-400">
            Días de racha
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            🧉 1456
          </h2>

          <p className="text-zinc-400">
            Mates tomados
          </p>
        </div>
      </div>
    </Card>
  );
}