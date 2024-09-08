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

import CreatePageModal from "../../factories/CreatePageModal";
import { useState } from "react";

const BasePages = ({ pages }: { pages }) => {
  const params = useParams();
  const [modal, setModal] = useState(false);

  return (
    <div className="px-2 py-1 text-white  bg-lime-500 rounded-lg  flex items-center justify-center gap-1">
      <RiPagesFill fontSize={30} />
      <Link className="" href={entityAdminPagesPath(params.e, "_home")}>
        Pages
      </Link>
      {modal && (
        <CreatePageModal
          entity_slug={params.e}
          // ={params.e}
          options={{
            onClose: () => setModal(false),
            defaultOpen: true,
          }}
        />
      )}

      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly>
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          selectedKeys={pages[0].name}
          selectionMode="single"
          className="max-w-[300px]"
        >
          <DropdownItem
            onClick={() => setModal(true)}
            className="bg-default-300 cursor-pointer"
          >
            Add a New Page
          </DropdownItem>
          {pages.map((page) => (
            <DropdownItem key={page.name}>
              <Link href={entityAdminPagesPath(params.e, page.slug)}>
                {page.name}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BasePages;
