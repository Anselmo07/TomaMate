export interface Reward {

  id: string;

  name: string;

  type:
    | "sticker"
    | "thermo"
    | "mate"
    | "xp";

  amount?: number;

  itemId?: string;

}