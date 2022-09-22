import styles from "./Item.module.css";

import { FC } from "react";

export declare interface ListItemProps {
  name: string;
  index: number;
  moveItem: (index: number, direction: "up" | "down") => void;
}

const ListItem: FC<ListItemProps> = ({ name, index, moveItem }) => {
  return (
    <li className={styles.listItem}>
      <span
        title="Move up"
        onClick={() => moveItem(index, "up")}
        className={styles.icon}
      >
        ↑
      </span>

      <span>{name}</span>

      <span
        title="Move down"
        onClick={() => moveItem(index, "down")}
        className={styles.icon}
      >
        ↓
      </span>
    </li>
  );
};

export default ListItem;
