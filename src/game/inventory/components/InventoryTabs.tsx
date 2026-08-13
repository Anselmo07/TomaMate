interface Props {

  value: "mates" | "thermos" | "stickers";

  onChange(
    tab: "mates" | "thermos" | "stickers"
  ): void;

}

export default function InventoryTabs({

  value,

  onChange,

}: Props) {

  return (

    <div className="inventory-tabs">

      <button
        className={value === "mates" ? "active" : ""}
        onClick={() => onChange("mates")}
      >
        🧉 Mates
      </button>

      <button
        className={value === "thermos" ? "active" : ""}
        onClick={() => onChange("thermos")}
      >
        🧊 Termos
      </button>

      <button
        className={value === "stickers" ? "active" : ""}
        onClick={() => onChange("stickers")}
      >
        🏷 Stickers
      </button>

    </div>

  );

}

// prueba
