import type { DailyEntry } from "../../types/history";
import type {
  HeatmapData,
  HeatmapWeek,
  HeatmapDay,
} from "../../types/heatmap";

const TOTAL_WEEKS = 53;
const DAYS_PER_WEEK = 7;

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
    history.map(day => [day.date, day])
  );

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  // Domingo de esta semana
  const end = new Date(today);

  end.setDate(end.getDate() - end.getDay());

  // Hace 52 semanas
  const start = new Date(end);

  start.setDate(
    start.getDate() - (TOTAL_WEEKS - 1) * DAYS_PER_WEEK
  );

  const weeks: HeatmapWeek[] = [];

  for (let week = 0; week < TOTAL_WEEKS; week++) {

    const firstDay = new Date(start);

    firstDay.setDate(
      start.getDate() + week * DAYS_PER_WEEK
    );

    let month: string | undefined;

    const days: HeatmapDay[] = [];

    for (let i = 0; i < DAYS_PER_WEEK; i++) {

      const current = new Date(firstDay);

      current.setDate(firstDay.getDate() + i);

      // Mostrar el mes únicamente
      // cuando aparece el día 1
      if (current.getDate() === 1) {

        month = current.toLocaleString(
          "es-AR",
          {
            month: "short",
          }
        );

      }

      const key =
        current.toISOString().split("T")[0];

      const entry = historyMap.get(key);

      const thermos = entry?.thermos ?? 0;

      days.push({

        date: key,

        thermos,

        active: !!entry,

        value: getHeatLevel(thermos),

      });

    }

    weeks.push({

      month,

      days,

    });

  }

  return {

    weeks,

  };

}