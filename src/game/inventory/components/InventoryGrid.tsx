import type { GameItem } from "../../../types/item";

import ItemCard from "./ItemCard";

interface Props {
  items: GameItem[];

  equippedId?: string;

  unlocked: string[];

  onEquip(id: string): void;
}

export default function InventoryGrid({
  items,
  equippedId,
  unlocked,
  onEquip,
}: Props) {

  return (
    <section className="inventory-grid">

      {items.map((item) => (

        <ItemCard
          key={item.id}

          item={item}

          equipped={equippedId === item.id}

          owned={unlocked.includes(item.id)}

          onEquip={() => onEquip(item.id)}
        />

      ))}

    </section>
  );
}

//prueba
