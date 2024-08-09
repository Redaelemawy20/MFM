"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

interface HasId {
  id: number;
}
interface TableProps<T extends HasId> {
  items: T[];
  columns: (keyof T)[];
  actions?: ("edit" | "delete")[];
}
export default function <T extends HasId>({
  items,
  columns,
  actions = [],
}: TableProps<T>) {
  // console.log(columns);

  const renderCell = React.useCallback((item: T, columnKey: keyof T) => {
    const cellValue = item[columnKey] as string;
    if (columnKey === "actions")
      return <div className="flex flex-row ">{renderActions()}</div>;
    return (
      <div className="flex flex-col">
        <p className="text-bold text-sm capitalize">{cellValue}</p>
      </div>
    );
  }, []);
  const renderActions = () => {
    return actions.map((action, i) => {
      return (
        <span key={action + i}>
          {action === "edit" ? <EditIcon /> : <DeleteIcon />}
        </span>
      );
    });
  };
  const colHeader = actions?.length
    ? [...columns, "actions" as keyof T]
    : columns;

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        {colHeader.map((c, i) => {
          return <TableColumn key={i}>{String(c)}</TableColumn>;
        })}
      </TableHeader>
      <TableBody>
        {items.map((item, index) => {
          return (
            <TableRow key={index}>
              {colHeader.map((cold, i) => {
                return <TableCell key={i}>{renderCell(item, cold)}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
