import { StickerPlacement } from "./stickerPlacement";

export interface Inventory {

  unlockedMates: string[];

  unlockedThermos: string[];

  unlockedStickers: string[];

  equippedMate: string;

  equippedThermo: string;

  placedStickers: StickerPlacement[];

}