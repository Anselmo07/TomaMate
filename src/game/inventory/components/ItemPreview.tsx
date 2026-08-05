import type { GameItem } from "../../../types/item";

interface Props {

  item?: GameItem;

}

export default function ItemPreview({

  item,

}: Props) {

  if (!item) {

    return null;

  }

  return (

    <section className="item-preview">

      <h2>

        {item.name}

      </h2>

      <p>

        {item.description}

      </p>

    </section>

  );

}