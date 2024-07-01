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
  actions,
}: TableProps<T>) {
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
    <Table aria-label="Example table with custom cells" className="w-[50vw]">
      <TableHeader columns={columns}>
        <>
          {columns.map((c, i) => {
            return <TableColumn key={String(c)}>{String(c)}</TableColumn>;
          })}
          {renderActions()}
        </>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {columns.map((c, i) => {
              return (
                <TableCell key={i + String(c)}>{renderCell(item, c)}</TableCell>
              );
            })}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
