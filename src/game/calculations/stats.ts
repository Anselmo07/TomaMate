import type { DailyEntry } from "../../types/history";
import type { Stats } from "../../types/stats";

import {
  calculateCurrentStreak,
  calculateBestStreak,
} from "../engines/streak";

export function calculateStats(
  history: DailyEntry[]
): Stats {

  const drankDays = history.filter(
    (day) => day.drankMate
  );

  const totalMates = drankDays.reduce(
    (total, day) => total + day.thermos,
    0
  );

  const averagePerDay =
    drankDays.length === 0
      ? 0
      : Number(
          (
            totalMates /
            drankDays.length
          ).toFixed(1)
        );

  return {

    currentStreak:
      calculateCurrentStreak(history),

    bestStreak:
      calculateBestStreak(history),

    totalMates,

    averagePerDay,

  };

}