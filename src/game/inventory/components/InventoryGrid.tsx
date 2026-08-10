import type { GameItem } from "../../../types/item";

import ItemCard from "./ItemCard";

interface Props {
  items: GameItem[];

  equippedId?: string;

  unlocked: string[];

  onEquip?: (id: string) => void;

  onUnlock?: (id: string) => void;

  onUse?: (id: string) => void;

  isSticker?: boolean;
}

export default function InventoryGrid({
  items,
  equippedId,
  unlocked,
  onEquip,
  onUnlock,
  onUse,
  isSticker = false,
}: Props) {

  return (
    <section className="inventory-grid">

      {items.map((item) => (

        <ItemCard
          key={item.id}

          item={item}

          equipped={
            equippedId === item.id
          }

          owned={
            unlocked.includes(item.id)
          }

          onEquip={
            onEquip
              ? () => onEquip(item.id)
              : undefined
          }

          onUnlock={
            onUnlock
              ? () => onUnlock(item.id)
              : undefined
          }

          onUse={
            onUse
              ? () => onUse(item.id)
              : undefined
          }

          isSticker={isSticker}
        />

      ))}

    </section>
  );
}