import styles from "./ListRenderer.module.css";

import { FC } from "react";
import ListItem, { ListItemProps } from "./Item";

export declare interface ListRendererProps {
  items: Array<ListItemProps>;
  moveItem: (index: number, direction: "up" | "down") => void;
}

const ListRenderer: FC<ListRendererProps> = ({ items, moveItem }) => {
  return (
    <>
      <p>
        <b>List Items</b>
      </p>
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
