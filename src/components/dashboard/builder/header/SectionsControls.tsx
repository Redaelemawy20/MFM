"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDownIcon } from "../../icons/sidebar/chevron-down-icon";
import { BiSolidComponent } from "react-icons/bi";
import { useState } from "react";
import AddSectionModal from "../../factories/AddSectionModal";
import SortSectionModal from "../../factories/SortSectionsModal";
import { useParams } from "next/navigation";

const SectionsControls = ({ pageSections, sectionsToAdd }) => {
  const [opendModal, setOpenModa] = useState("");
  let options = [
    {
      title: "Add section",
      description: "Add a static section Add a static section",
    },
    {
      title: "Sort sections",
      description: "",
    },
  ];
  const params = useParams<{ e: string; p: string }>();
  return (
    <>
      {opendModal == "sections" && (
        <AddSectionModal
          page={params.p}
          sections={sectionsToAdd}
          options={{
            width: "full",
            defaultOpen: true,
            onClose: () => setOpenModa(""),
          }}
          entity_slug={params.e}
        />
      )}
      {opendModal == "sort" && (
        <SortSectionModal
          options={{
            defaultOpen: true,
            onClose: () => setOpenModa(""),
          }}
          sections={pageSections}
        />
      )}

      <div className="px-2 py-1 text-white bg-slate-800 rounded-lg hover:bg-slate-600 duration-200 flex items-center justify-center gap-1">
        <BiSolidComponent fontSize={30} />
        Sections
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
            <DropdownItem onClick={() => setOpenModa("sections")}>
              add sections
            </DropdownItem>
            <DropdownItem onClick={() => setOpenModa("sort")}>
              sort sections
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default SectionsControls;
