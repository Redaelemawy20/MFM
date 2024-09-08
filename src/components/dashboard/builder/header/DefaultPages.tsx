"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDownIcon } from "../../icons/sidebar/chevron-down-icon";
import { RiPagesFill } from "react-icons/ri";
import { entityAdminPagesPath } from "@/utils/router";
import { useParams } from "next/navigation";
import Link from "next/link";

const BasePages = () => {
  let options = [
    {
      title: "Add a static section",
      description: "Add a static section Add a static section",
    },
    {
      title: "Add news section",
      description: "Add news section",
    },
    {
      title: "Add staff section",
      description: "Add staff sectionAdd staff sectionAdd staff section",
    },
  ];
  const params = useParams();
  return (
    // <button className="px-4 py-2 text-white  bg-lime-500 rounded-lg   flex items-center justify-center gap-1">
    //   Pages
    // </button>
    <div className="px-2 py-1 text-white  bg-lime-500 rounded-lg  flex items-center justify-center gap-1">
      <RiPagesFill fontSize={30} />
      <Link className="" href={entityAdminPagesPath(params.e, "_home")}>
        Pages
      </Link>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly>
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          selectedKeys={options[0].title}
          selectionMode="single"
          className="max-w-[300px]"
        >
          {options.map((opt) => (
            <DropdownItem key={opt.title} description={opt.description}>
              {opt.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BasePages;
