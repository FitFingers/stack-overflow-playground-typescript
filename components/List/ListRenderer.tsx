import styles from "./ListRenderer.module.css";

import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ListItem, { ListItemProps } from "./Item";

export declare interface ListRendererProps {
  items: Array<ListItemProps>;
  sortItems: (direction: "asc" | "desc") => void;
  moveItem: (index: number, direction: "up" | "down") => void;
}

const ListRenderer: FC<ListRendererProps> = ({
  items,
  sortItems,
  moveItem,
}) => {
  const [parent] = useAutoAnimate();

  return (
    <>
      <p>
        <b>List Items</b>
      </p>
      <div className={styles.buttonRow}>
        <button onClick={() => sortItems("asc")} className={styles.button}>
          Sort Asc
        </button>
        <button onClick={() => sortItems("desc")} className={styles.button}>
          Sort Desc
        </button>
      </div>
      <ul ref={parent} className={styles.listContainer}>
        {!items.length ? (
          <ListItem
            name="There are no items. Get started using the form below."
            moveItem={moveItem}
            index={0}
          />
        ) : (
          items.map(({ name }, idx) => (
            <ListItem name={name} key={name} moveItem={moveItem} index={idx} />
          ))
        )}
      </ul>
    </>
  );
};

export default ListRenderer;
