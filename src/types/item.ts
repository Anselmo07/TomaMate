import { Rarity } from "./rarity";

export interface GameItem {
  id: string;

  name: string;

  description: string;

  image: string;

  rarity: Rarity;

  unlockLevel?: number;

  shopPrice?: number;

  limited?: boolean;
}