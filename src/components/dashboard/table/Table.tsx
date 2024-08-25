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

interface TableProps<T> {
  items: T[];
  columns: Col<T>[];
}
interface Col<T> {
  header: string;
  value: (item: T) => React.ReactNode;
}

export default function <T>({ items, columns }: TableProps<T>) {
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
