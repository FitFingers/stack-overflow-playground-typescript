import styles from "./ListRenderer.module.css";

import { FC } from "react";
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
      {!items.length ? (
        <p>
          <em>There are no items. Get started using the form below.</em>
        </p>
      ) : (
        <ul className={styles.listContainer}>
          {items.map(({ name }, idx) => (
            <ListItem name={name} key={name} moveItem={moveItem} index={idx} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListRenderer;
