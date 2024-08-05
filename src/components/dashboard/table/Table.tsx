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
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

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
  // columns,
  actions,
}: TableProps<T>) {
  console.log(columns);

  const renderCell = React.useCallback((user: T, columnKey: keyof T) => {
    const cellValue = user[columnKey] as string;
    return (
      <div className="flex flex-col">
        <p className="text-bold text-sm capitalize">{cellValue}</p>
      </div>
    );
  }, []);
  const renderActions = () => {
    actions?.length &&
      actions.map((action, i) => {
        return (
          <TableColumn key={action + i}>
            {action === "edit" ? <EditIcon /> : <DeleteIcon />}
          </TableColumn>
        );
      });
  };
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ user: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
