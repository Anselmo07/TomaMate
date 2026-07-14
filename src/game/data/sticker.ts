import { Rarity } from "./rarities";

export interface Sticker {

    id: string;

    name: string;

    description: string;

    image: string;

    rarity: Rarity;

    category: string;

    collection: string;

    unlockLevel?: number;

    shopPrice?: number;

    limited?: boolean;

}