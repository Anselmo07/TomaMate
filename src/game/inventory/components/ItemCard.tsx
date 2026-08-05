import type { GameItem } from "../../../types/item";

interface Props {

  item: GameItem;

  owned: boolean;

  equipped: boolean;

  onEquip(): void;

}

export default function ItemCard({

  item,

  owned,

  equipped,

  onEquip,

}: Props) {

  return (

    <article className="item-card">

      <div className="item-card__image">

        {item.image}

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

        <button disabled>

          {item.unlockLevel
            ? `Nivel ${item.unlockLevel}`
            : `${item.shopPrice} 🌿`}

        </button>

      ) : equipped ? (

        <button disabled>

          Equipado

        </button>

      ) : (

        <button onClick={onEquip}>

          Equipar

        </button>

      )}

    </article>

  );

}