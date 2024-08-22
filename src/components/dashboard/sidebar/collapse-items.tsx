"use client";
import { ChevronDownIcon } from "../icons/sidebar/chevron-down-icon";
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  title: string;
  items: { name: string; href: string }[];
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">
          {" "}
          {icon}
          {title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        {items.map((item) => (
          <DropdownItem key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
