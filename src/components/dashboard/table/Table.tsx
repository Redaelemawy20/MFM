"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { columns } from "./data";

interface HasId {
  id: number;
}
interface TableProps<T> {
  items: T[];
  columns: Col<T>[];
  // actions?: TableAction<T>[];
  // values?: () => React.ReactNode
}
interface Col<T> {
  header: string;
  value: (item: T) => React.ReactNode;
}
interface TableAction<T> {
  name: "edit" | "delete" | string;
  onClick?: (item: T) => void;
  render?: (item: T) => React.ReactNode;
}

export default function <T extends HasId>({
  items,
  columns,
}: // actions = [],
TableProps<T>) {
  // const renderCell = React.useCallback((item: T, columnKey: keyof T) => {
  //   const cellValue = item[columnKey] as string;
  //   if (columnKey === "actions")
  //     return (
  //       <div className="flex flex-row gap-2 items-center">
  //         {renderActions(item)}
  //       </div>
  //     );
  //   return (
  //     <div className="flex flex-col">
  //       <p className="text-bold text-sm capitalize">{cellValue}</p>
  //     </div>
  //   );
  // }, []);
  // const renderActions = (item: T) => {
  //   return actions.map((action, i) => {
  //     let actionText: React.ReactNode = action.name;
  //     if (action.name === "edit") actionText = <EditIcon />;
  //     if (action.name === "delete") actionText = <DeleteIcon />;
  //     if (action.render) actionText = action.render(item);
  //     return (
  //       <Tooltip content={action.name.toLocaleUpperCase()}>
  //         <span
  //           key={i}
  //           onClick={() => action.onClick && action.onClick(item)}
  //           className="font-bold cursor-pointer"
  //         >
  //           {actionText}
  //         </span>
  //       </Tooltip>
  //     );
  //   });
  // };
  // const colHeader = actions?.length
  //   ? [...columns, "actions" as keyof T]
  //   : columns;

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        {columns.map((c, i) => {
          return (
            <TableColumn key={i} className="capitalize">
              {String(c.header)}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody>
        {items.map((item, index) => {
          return (
            <TableRow key={index}>
              {columns.map((cold, i) => {
                return <TableCell key={i}>{cold.value(item)}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
