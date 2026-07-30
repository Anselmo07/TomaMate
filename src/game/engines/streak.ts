import type { DailyEntry } from "../../types/history";

/* ============================
   Helpers
============================ */

function isPreviousDay(
  current: Date,
  previous: Date
): boolean {
  const ONE_DAY = 1000 * 60 * 60 * 24;

  const diff =
    (current.getTime() - previous.getTime()) /
    ONE_DAY;

  return Math.round(diff) === 1;
}

/* ============================
   Racha actual
============================ */

export function calculateCurrentStreak(
  history: DailyEntry[]
): number {
  const days = history
    .filter((day) => day.drankMate)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (days.length === 0) {
    return 0;
  }

  let streak = 1;

  for (let i = 1; i < days.length; i++) {
    const current = new Date(days[i - 1].date);
    const previous = new Date(days[i].date);

    if (isPreviousDay(current, previous)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

/* ============================
   Mejor racha
============================ */

export function calculateBestStreak(
  history: DailyEntry[]
): number {
  const days = history
    .filter((day) => day.drankMate)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (days.length === 0) {
    return 0;
  }

  let current = 1;
  let best = 1;

  for (let i = 1; i < days.length; i++) {
    const previous = new Date(days[i - 1].date);
    const next = new Date(days[i].date);

    if (isPreviousDay(next, previous)) {
      current++;
      best = Math.max(best, current);
    } else {
      current = 1;
    }
  }

  return best;
}

/* ============================
   Utilidades
============================ */

export function didDrinkToday(
  history: DailyEntry[],
  today: string
): boolean {
  return history.some(
    (day) =>
      day.date === today &&
      day.drankMate
  );
}

export function canRecordToday(
  history: DailyEntry[],
  today: string
): boolean {
  return !didDrinkToday(history, today);
}