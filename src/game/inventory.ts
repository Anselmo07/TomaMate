import type { Inventory } from "../types/inventory";
import type { StickerPlacement } from "../types/stickerPlacement";

/* ============================
   Helpers privados
============================ */

function ownsItem(items: string[], id: string): boolean {
  return items.includes(id);
}

function unlockItem(items: string[], id: string): string[] {
  if (items.includes(id)) {
    return items;
  }

  return [...items, id];
}

/* ============================
   Consultas
============================ */

export function ownsSticker(
  inventory: Inventory,
  stickerId: string
): boolean {
  return ownsItem(inventory.unlockedStickers, stickerId);
}

export function ownsMate(
  inventory: Inventory,
  mateId: string
): boolean {
  return ownsItem(inventory.unlockedMates, mateId);
}

export function ownsThermo(
  inventory: Inventory,
  thermoId: string
): boolean {
  return ownsItem(inventory.unlockedThermos, thermoId);
}

/* ============================
   Desbloqueos
============================ */

export function unlockSticker(
  inventory: Inventory,
  stickerId: string
): Inventory {
  return {
    ...inventory,
    unlockedStickers: unlockItem(
      inventory.unlockedStickers,
      stickerId
    ),
  };
}

export function unlockMate(
  inventory: Inventory,
  mateId: string
): Inventory {
  return {
    ...inventory,
    unlockedMates: unlockItem(
      inventory.unlockedMates,
      mateId
    ),
  };
}

export function unlockThermo(
  inventory: Inventory,
  thermoId: string
): Inventory {
  return {
    ...inventory,
    unlockedThermos: unlockItem(
      inventory.unlockedThermos,
      thermoId
    ),
  };
}

/* ============================
   Equipamiento
============================ */

export function equipMate(
  inventory: Inventory,
  mateId: string
): Inventory {
  if (!ownsMate(inventory, mateId)) {
    return inventory;
  }

  return {
    ...inventory,
    equippedMate: mateId,
  };
}

export function equipThermo(
  inventory: Inventory,
  thermoId: string
): Inventory {
  if (!ownsThermo(inventory, thermoId)) {
    return inventory;
  }

  return {
    ...inventory,
    equippedThermo: thermoId,
  };
}

/* ============================
   Stickers
============================ */

export function placeSticker(
  inventory: Inventory,
  sticker: StickerPlacement
): Inventory {
  return {
    ...inventory,
    thermoStickers: [
      ...inventory.thermoStickers,
      sticker,
    ],
  };
}

export function removeSticker(
  inventory: Inventory,
  placementId: string
): Inventory {
  return {
    ...inventory,
    thermoStickers: inventory.thermoStickers.filter(
      (sticker) => sticker.id !== placementId
    ),
  };
}

export function moveSticker(
  inventory: Inventory,
  placementId: string,
  x: number,
  y: number
): Inventory {
  return {
    ...inventory,
    thermoStickers: inventory.thermoStickers.map((sticker) =>
      sticker.id === placementId
        ? { ...sticker, x, y }
        : sticker
    ),
  };
}

export function rotateSticker(
  inventory: Inventory,
  placementId: string,
  rotation: number
): Inventory {
  return {
    ...inventory,
    thermoStickers: inventory.thermoStickers.map((sticker) =>
      sticker.id === placementId
        ? { ...sticker, rotation }
        : sticker
    ),
  };
}

export function scaleSticker(
  inventory: Inventory,
  placementId: string,
  scale: number
): Inventory {
  return {
    ...inventory,
    thermoStickers: inventory.thermoStickers.map((sticker) =>
      sticker.id === placementId
        ? { ...sticker, scale }
        : sticker
    ),
  };
}

export function clearThermo(
  inventory: Inventory
): Inventory {
  return {
    ...inventory,
    thermoStickers: [],
  };
}