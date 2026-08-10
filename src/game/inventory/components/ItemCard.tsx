import type { GameItem } from "../../../types/item";

interface Props {
  item: GameItem;

  owned: boolean;

  equipped: boolean;

  onEquip?: () => void;

  onUnlock?: () => void;

  onUse?: () => void;

  isSticker?: boolean;
}

export default function ItemCard({
  item,
  owned,
  equipped,
  onEquip,
  onUnlock,
  onUse,
  isSticker = false,
}: Props) {

  return (
    <article className="item-card">

      <div className="item-card__image">
        <img
          src={item.image}
          alt={item.name}
        />
      </div>

      <h3>
        {item.name}
      </h3>

      <p>
        {item.description}
      </p>

      <span className={`rarity ${item.rarity}`}>
        {item.rarity}
      </span>

      {!owned ? (

        <div className="item-card__locked">

          <span>
            🔒 Bloqueado
          </span>

          {item.unlockLevel && (
            <small>
              Nivel {item.unlockLevel}
            </small>
          )}

          {isSticker && onUnlock && (
            <button
              type="button"
              onClick={onUnlock}
            >
              Desbloquear
            </button>
          )}

        </div>

      ) : isSticker ? (

        <button
          type="button"
          onClick={onUse}
        >
          Usar
        </button>

      ) : equipped ? (

        <button
          type="button"
          disabled
        >
          Equipado
        </button>

      ) : (

        <button
          type="button"
          onClick={onEquip}
        >
          Equipar
        </button>

      )}

    </article>
  );
}