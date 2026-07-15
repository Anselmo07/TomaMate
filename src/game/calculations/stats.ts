import type { DailyEntry } from "../../types/history";

export function getTotalThermos(history: DailyEntry[]): number {
  return history.reduce((total, day) => total + day.thermos, 0);
}

export function getTotalDays(history: DailyEntry[]): number {
  return history.filter((day) => day.drankMate).length;
}

export function getAverageThermos(history: DailyEntry[]): number {
  if (history.length === 0) {
    return 0;
  }

  return getTotalThermos(history) / history.length;
}