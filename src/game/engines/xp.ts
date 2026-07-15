import type { Progress } from "../../types/progress";

const BASE_XP = 50;
const XP_PER_THERMO = 15;

export function gainXP(
  progress: Progress,
  thermos: number
): Progress {

  const earnedXP =
    BASE_XP + thermos * XP_PER_THERMO;

  const xp = progress.xp + earnedXP;

  return {

    ...progress,

    xp,

    level: calculateLevel(xp)

  };

}

export function gainCoins(
  progress: Progress,
  thermos: number
): Progress {

  return {

    ...progress,

    coins: progress.coins + thermos * 10

  };

}

export function calculateLevel(
  xp: number
): number {

  return Math.floor(xp / 100) + 1;

}