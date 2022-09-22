import { FC, useCallback, useState } from "react";
import Form from "../Form";
import { ListItemProps } from "./Item";
import ListRenderer from "./ListRenderer";

export declare interface ListProps {
  withForm: boolean;
}

const List: FC<ListProps> = ({ withForm }) => {
  const [listItems, setListItems] = useState<Array<ListItemProps>>([]);

  const addItem = (item: ListItemProps) => {
    setListItems([...listItems, item]);
  };

  const moveItem = useCallback(
    (index: number, direction: "up" | "down") => {
      const items = [...listItems];
      const item = items[index];

      if (direction === "up") {
        if (index === 0) return;
        items[index] = items[index - 1];
        items[index - 1] = item;
      } else {
        if (index === items.length - 1) return;
        items[index] = items[index + 1];
        items[index + 1] = item;
      }

      setListItems(items);
    },
    [listItems]
  );

  return (
    <>
      <ListRenderer items={listItems} moveItem={moveItem} />
      {withForm && <Form onSubmit={addItem} />}
    </>
  );
};

export default List;
