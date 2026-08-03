import type { DailyEntry } from "../../types/history";

export interface HeatmapDay {
  date: string;
  value: number;
  thermos: number;
}

export interface HeatmapWeek {
  month: string;
  year: number;
  days: HeatmapDay[];
}

export interface HeatmapData {
  weeks: HeatmapWeek[];
}

function getHeatLevel(thermos: number): number {
  if (thermos <= 0) return 0;
  if (thermos <= 2) return 1;
  if (thermos <= 4) return 2;
  if (thermos <= 6) return 3;

  return 4;
}

export function calculateHeatmap(
  history: DailyEntry[]
): HeatmapData {

  const historyMap = new Map(
    history.map((day) => [day.date, day])
  );

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  // Último domingo
  const end = new Date(today);

  end.setDate(end.getDate() - end.getDay());

  // Primer domingo (53 semanas)
  const start = new Date(end);

  start.setDate(start.getDate() - 52 * 7);

  const weeks: HeatmapWeek[] = [];

  for (let week = 0; week < 53; week++) {

    const weekStart = new Date(start);

    weekStart.setDate(start.getDate() + week * 7);

    const days: HeatmapDay[] = [];

    for (let day = 0; day < 7; day++) {

      const current = new Date(weekStart);

      current.setDate(weekStart.getDate() + day);

      const key = current.toISOString().split("T")[0];

      const entry = historyMap.get(key);

      days.push({

        date: key,

        thermos: entry?.thermos ?? 0,

        value: entry
          ? getHeatLevel(entry.thermos)
          : 0

      });

    }

    weeks.push({

      month: weekStart.toLocaleString("es-AR", {
        month: "short",
      }),

      year: weekStart.getFullYear(),

      days,

    });

  }

  return {
    weeks,
  };

}