import { FC, useState } from "react";
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

  return (
    <>
      <ListRenderer items={listItems} />
      {withForm && <Form onSubmit={addItem} />}
    </>
  );
};

export default List;
