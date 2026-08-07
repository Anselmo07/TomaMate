import { useState } from "react";

import { mates } from "../../../game/data/mates";
import { thermos } from "../../../game/data/thermos";
import { stickers } from "../../../game/data/stickers";

import InventoryTabs from "../components/InventoryTabs";
import InventoryGrid from "../components/InventoryGrid";

import { useUser } from "../../../context/useUser";

export default function InventoryPage() {

  const {
    user,
    equipMate,
    equipThermo,
  } = useUser();

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

      {/* MATES */}

      {tab === "mates" && (

        <InventoryGrid

          items={mates}

          equippedId={
            user.inventory.equippedMate
          }

          unlocked={
            user.inventory.unlockedMates
          }

          onEquip={equipMate}

        />

      )}

      {/* TERMOS */}

      {tab === "thermos" && (

        <InventoryGrid

          items={thermos}

          equippedId={
            user.inventory.equippedThermo
          }

          unlocked={
            user.inventory.unlockedThermos
          }

          onEquip={equipThermo}

        />

      )}

      {/* STICKERS */}

      {tab === "stickers" && (

        <InventoryGrid

          items={stickers}

          unlocked={
            user.inventory.unlockedStickers
          }

          onEquip={() => {}}

        />

      )}

    </main>

  );
}