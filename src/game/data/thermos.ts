import type { Thermo } from "../../types/thermo";
import { Rarity } from "../../types/rarity";

export const thermos: Thermo[] = [
  {
    id: "starter",
    name: "Termo Matero",
    description: "Tu primer compañero de aventuras.",
    image: "/thermos/starter.png",
    rarity: Rarity.Common,
  },

  {
    id: "lumilagro",
    name: "Lumilagro",
    description: "Un clásico argentino.",
    image: "/thermos/lumilagro.png",
    rarity: Rarity.Common,
  },

  {
    id: "stanley-green",
    name: "Stanley Verde",
    description: "El favorito de muchos.",
    image: "/thermos/stanley-green.png",
    rarity: Rarity.Rare,
  },

  {
    id: "imperial-black",
    name: "Imperial Black",
    description: "Elegancia para cualquier ronda.",
    image: "/thermos/imperial-black.png",
    rarity: Rarity.Epic,
  },

  {
    id: "golden-yerba",
    name: "Golden Yerba",
    description: "Solo los verdaderos materos lo poseen.",
    image: "/thermos/golden.png",
    rarity: Rarity.Legendary,
  },
];