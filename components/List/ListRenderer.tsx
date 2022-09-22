import styles from "./ListRenderer.module.css";

import { FC } from "react";
import ListItem, { ListItemProps } from "./Item";

export declare interface ListRendererProps {
  items: Array<ListItemProps>;
}

const ListRenderer: FC<ListRendererProps> = ({ items }) => {
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
          {items.map(({ name }) => (
            <ListItem name={name} key={name} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListRenderer;
