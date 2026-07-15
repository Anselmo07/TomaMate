import type { User } from "../../types/user";
import type { DailyEntry } from "../../types/history";

import { saveEntry } from "./history";
import { gainXP, gainCoins } from "./xp";
import { checkRewards } from "./rewards";

interface RecordDayData {

  drankMate: boolean;

  thermos: number;

  date: string;

}

export function recordDay(
  user: User,
  data: RecordDayData
): User {

  const entry: DailyEntry = {

    date: data.date,

    drankMate: data.drankMate,

    thermos: data.thermos

  };

  const history = saveEntry(
    user.history,
    entry
  );

  let progress = gainXP(
    user.progress,
    data.thermos
  );

  progress = gainCoins(
    progress,
    data.thermos
  );

  const inventory = checkRewards(
    user.inventory,
    progress
  );

  return {

    ...user,

    history,

    progress,

    inventory

  };

}