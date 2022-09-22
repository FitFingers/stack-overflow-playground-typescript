import { FC } from "react";

export declare interface ListItemProps {
  name: string;
}

const ListItem: FC<ListItemProps> = ({ name }) => {
  return <li className="list-item">{name}</li>;
};

export default ListItem;
