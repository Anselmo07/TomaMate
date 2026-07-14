import type { Profile } from "./profile";
import type { Progress } from "./progress";
import type { Inventory } from "./inventory";
import type { DailyEntry } from "./history";

export interface User {

  profile: Profile;

  progress: Progress;

  inventory: Inventory;

  history: DailyEntry[];

}