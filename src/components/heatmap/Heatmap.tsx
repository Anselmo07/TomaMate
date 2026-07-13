import HeatmapCell from "./HeatmapCell";

export default function Heatmap() {
  const cells = Array.from({ length: 364 }, (_, i) => i % 5);

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
      {cells.map((level, index) => (
        <HeatmapCell
          key={index}
          level={level as 0 | 1 | 2 | 3 | 4}
        />
      ))}
    </div>
  );
}