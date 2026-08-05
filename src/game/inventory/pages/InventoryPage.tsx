import { useState } from "react";

import { mates } from "../../../game/data/mates";

import InventoryTabs from "../components/InventoryTabs";
import InventoryGrid from "../components/InventoryGrid";

import { useUser } from "../../../context/useUser";

export default function InventoryPage() {

  const { user } = useUser();

  const [tab, setTab] = useState<
    "mates" | "thermos" | "stickers"
  >("mates");

  return (

    <main>

      <h1>

        Inventario

      </h1>

      <InventoryTabs

        value={tab}

        onChange={setTab}

      />

      {tab === "mates" && (

        <InventoryGrid

          items={mates}

          equippedId={user.inventory.equippedMate}

          unlocked={user.inventory.unlockedMates}

          onEquip={(id) => {

            console.log(id);

          }}

        />

      )}

    </main>

  );

}