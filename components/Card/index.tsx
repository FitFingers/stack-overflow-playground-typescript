import styles from "./Card.module.css";

import { FC } from "react";
import useDragAndDrop from "hooks/useDragAndDrop";

declare interface CardProps {
  title: string;
  body: string;
}

const Card: FC<CardProps> = ({ title, body }) => {
  const { ref } = useDragAndDrop();
  return (
    <div draggable ref={ref} className={styles.card}>
      {title && <h2>{title}</h2>}
      {body && <p>{body}</p>}
    </div>
  );
};

export default Card;
