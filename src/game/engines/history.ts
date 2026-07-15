import type { DailyEntry } from "../../types/history";

export function saveEntry(
  history: DailyEntry[],
  entry: DailyEntry
): DailyEntry[] {
  const index = history.findIndex((day) => day.date === entry.date);

  if (index === -1) {
    return [...history, entry].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }

  return history.map((day) =>
    day.date === entry.date ? entry : day
  );
}

export function getTodayEntry(
  history: DailyEntry[],
  date: string
): DailyEntry | undefined {
  return history.find((day) => day.date === date);
}

export function removeEntry(
  history: DailyEntry[],
  date: string
): DailyEntry[] {
  return history.filter((day) => day.date !== date);
}