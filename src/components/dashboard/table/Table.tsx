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

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
interface HasId {
  id: number;
}
interface TableProps<T extends HasId> {
  items: T[];
  columns: (keyof T)[];
}
export default function <T extends HasId>({ items, columns }: TableProps<T>) {
  const renderCell = React.useCallback((user: T, columnKey: keyof T) => {
    const cellValue = user[columnKey] as string;
    return (
      <div className="flex flex-col">
        <p className="text-bold text-sm capitalize">{cellValue}</p>
      </div>
    );
  }, []);

  return (
    <Table aria-label="Example table with custom cells" className="w-9/12">
      <TableHeader columns={columns}>
        {columns.map((c, i) => {
          return <TableColumn key={String(c)}>{String(c)}</TableColumn>;
        })}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {columns.map((c, i) => {
              return (
                <TableCell key={i + String(c)}>{renderCell(item, c)}</TableCell>
              );
            })}
            {/* {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )} */}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
