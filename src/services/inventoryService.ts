import type { User } from "../types/user";

import {
  equipMate,
  equipThermo,
  unlockSticker,
} from "../game/inventory/inventory";

export function equipUserMate(
  user: User,
  mateId: string
): User {

  return {
    ...user,

    inventory: equipMate(
      user.inventory,
      mateId
    ),
  };

}

export function equipUserThermo(
  user: User,
  thermoId: string
): User {

  return {
    ...user,

    inventory: equipThermo(
      user.inventory,
      thermoId
    ),
  };

}

export function unlockUserSticker(
  user: User,
  stickerId: string
): User {

  return {
    ...user,

    inventory: unlockSticker(
      user.inventory,
      stickerId
    ),
  };

}