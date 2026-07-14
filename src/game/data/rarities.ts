import { Rarity } from "../../types/rarity";

export const rarityInfo = {
  [Rarity.Common]: {
    label: "Común",
    color: "#9CA3AF",
  },

  [Rarity.Uncommon]: {
    label: "Poco común",
    color: "#22C55E",
  },

  [Rarity.Rare]: {
    label: "Raro",
    color: "#3B82F6",
  },

  [Rarity.Epic]: {
    label: "Épico",
    color: "#A855F7",
  },

  [Rarity.Legendary]: {
    label: "Legendario",
    color: "#F59E0B",
  },
};

export { Rarity };
