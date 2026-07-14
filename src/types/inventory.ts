import type { StickerPlacement } from "./stickerPlacement";

export interface Inventory {

    unlockedThermos: string[];

    unlockedMates: string[];

    unlockedStickers: string[];

    equippedThermo: string;

    equippedMate: string;

    thermoStickers: StickerPlacement[];

}