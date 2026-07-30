import type { DailyEntry } from "../../types/history";
import type { HeatmapDay } from "../../types/heatmap";

function getHeatLevel(
  thermos: number
): number {

  if (thermos <= 0) return 0;

  if (thermos <= 2) return 1;

  if (thermos <= 4) return 2;

  if (thermos <= 6) return 3;

  return 4;

}

export function calculateHeatmap(
  history: DailyEntry[]
): HeatmapDay[] {

  return history.map((day) => ({

    date: day.date,

    value: day.drankMate
      ? getHeatLevel(day.thermos)
      : 0,

  }));

}