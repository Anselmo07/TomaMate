import type { Sticker } from "../../../types/sticker";
import { Rarity } from "../rarities";

export const deportesStickers: Sticker[] = [
  {
    id: "futbol",
    name: "Fútbol",
    description: "Pasión por el fútbol.",
    image: "/stickers/placeholder.svg",
    rarity: Rarity.Common,
    category: "Deportes",
    collection: "Deportes",
  },

  {
    id: "pelota",
    name: "Pelota",
    description: "Un clásico del deporte.",
    image: "/stickers/placeholder.svg",
    rarity: Rarity.Common,
    category: "Deportes",
    collection: "Deportes",
  },

  {
    id: "campeon",
    name: "Campeón",
    description: "Para los que siempre van por la victoria.",
    image: "/stickers/placeholder.svg",
    rarity: Rarity.Rare,
    category: "Deportes",
    collection: "Deportes",
  },
];