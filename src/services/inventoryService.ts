import type { User } from "../types/user";

import {
  equipMate,
  equipThermo,
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