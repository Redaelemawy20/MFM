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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BasePages = () => {
  const params = useParams();
  const {
    data: pages,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () =>
      axios
        .get(`/api/admin/pages?entity_slug=${params.e}`)
        .then((res) => res.data),
    queryKey: [`/api/admin/pages/${params.e}`],
  });
  if (isLoading) return <div>loading</div>;
  if (isError) return null;

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
          selectedKeys={pages[0].name}
          selectionMode="single"
          className="max-w-[300px]"
        >
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
