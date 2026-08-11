import { useState } from "react";

import { mates } from "../../../game/data/mates";
import { thermos } from "../../../game/data/thermos";
import { stickers } from "../../../game/data/stickers";

import InventoryTabs from "../components/InventoryTabs";
import InventoryGrid from "../components/InventoryGrid";
import ThermoCustomizer from "../components/ThermoCustomizer/ThermoCustomizer";

import { useUser } from "../../../context/useUser";

import {
  placeSticker,
} from "../../../game/inventory/inventory";

export default function InventoryPage() {

  const {
    user,
    setUser,
    equipMate,
    equipThermo,
    unlockSticker,
  } = useUser();

  const [tab, setTab] = useState<
    "mates" | "thermos" | "stickers"
  >("mates");

  const [selectedStickerId, setSelectedStickerId] =
    useState<string | null>(null);

  const selectedSticker =
    stickers.find(
      sticker =>
        sticker.id === selectedStickerId
    );

  function handleUseSticker(
    stickerId: string
  ) {

    const newPlacement = {
      id: crypto.randomUUID(),

      stickerId,

      x: 0,

      y: 0,

      rotation: 0,

      scale: 1,
    };

    setUser(previous => ({
      ...previous,

      inventory: placeSticker(
        previous.inventory,
        newPlacement
      ),
    }));

    setSelectedStickerId(
      stickerId
    );
  }

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

          onEquip={
            equipMate
          }
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

          onEquip={
            equipThermo
          }
        />

      )}

      {/* STICKERS */}

      {tab === "stickers" && (

        <>

          <InventoryGrid
            items={stickers}

            unlocked={
              user.inventory.unlockedStickers
            }

            onUnlock={
              unlockSticker
            }

            onUse={
              handleUseSticker
            }

            isSticker
          />

          {selectedSticker && (

            <ThermoCustomizer
              sticker={
                selectedSticker
              }
            />

          )}

        </>

      )}

    </main>

  );
}