import Button from "../common/Button";

export default function MateCounter() {
  return (
    <div className="flex items-center gap-4">
      <Button>-</Button>

      <span className="text-4xl font-bold">
        15
      </span>

      <Button>+</Button>
    </div>
  );
}