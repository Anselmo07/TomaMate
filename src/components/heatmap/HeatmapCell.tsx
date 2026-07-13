interface Props {
  level: 0 | 1 | 2 | 3 | 4;
}

const colors = [
  "bg-zinc-800",
  "bg-sky-900",
  "bg-sky-700",
  "bg-sky-500",
  "bg-sky-300",
];

export default function HeatmapCell({ level }: Props) {
  return (
    <div
      className={`h-3 w-3 rounded-sm ${colors[level]}`}
    />
  );
}