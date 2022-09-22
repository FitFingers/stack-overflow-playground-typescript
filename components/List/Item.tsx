import styles from "./Item.module.css";

import { FC } from "react";

export declare interface ListItemProps {
  name: string;
}

const ListItem: FC<ListItemProps> = ({ name }) => {
  return (
    <li className={styles.listItem}>
      <span title="Move up" className={styles.icon}>
        ↑
      </span>

      <span>{name}</span>

      <span title="Move down" className={styles.icon}>
        ↓
      </span>
    </li>
  );
};

export default ListItem;
