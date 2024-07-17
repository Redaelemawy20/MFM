"use client";
import {
  TableCell,
  TableHeader,
  TableRow,
  TableBody,
  Table,
  Checkbox,
} from "@nextui-org/react";
import React from "react";
import MultipleSelectI, { Selectable } from "./interfaces/MultipleSelectI";

function MultipleSelect<T, S extends Selectable>(props: MultipleSelectI<T, S>) {
  const {
    label,
    name,
    values = [],
    onToggle,
    renderValue,
    tableHead,
    valueProp,
    afterToggle,
  } = props;

  const handleCheck = (id: number) => {
    const item = values.find((i) => i.id == id) as S;
    if (item)
      item[valueProp || "checked"] = !item[valueProp || "checked"] as any;
    onToggle({ name: String(name), value: values });
    afterToggle && afterToggle(id, item[valueProp || "checked"] as boolean);
  };
  const renderBody = (v: S) => {
    let body = renderValue(v);
    return Array.isArray(body) ? (
      <>
        {body.map((node, index) => {
          return (
            <TableCell scope="row" key={index}>
              {node}
            </TableCell>
          );
        })}
      </>
    ) : (
      <TableCell>{body}</TableCell>
    );
  };
  const renderHead = () => {
    return Array.isArray(tableHead) ? (
      <>
        {tableHead.map((head, index) => {
          return <TableCell key={index}>{head}</TableCell>;
        })}
      </>
    ) : (
      <TableCell>{label}</TableCell>
    );
  };
  return (
    <>
      <Table aria-label="customized table" className="overflow-auto">
        <TableHeader>
          <TableRow>
            <TableCell>Select</TableCell>
            {renderHead()}
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((v, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={v[valueProp || "checked"] as any}
                    onChange={() => handleCheck(v.id as number)}
                  />
                </TableCell>
                {renderBody(v)}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default MultipleSelect;
