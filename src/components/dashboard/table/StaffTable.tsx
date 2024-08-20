"use client";
import StaffMember from "@/ts/interfaces/StaffData";
import Table from "./Table";
import Image from "next/image";
import EditStaffModal from "../factories/EditStaffModal";
import { CheckboxIcon, Chip } from "@nextui-org/react";
import { BiCheck } from "react-icons/bi";

interface EntityStaffI {
  entityStaff: StaffMember[];
  entity_slug: string;
}
const StaffTable = ({ entity_slug, entityStaff }: EntityStaffI) => {
  return entityStaff.length === 0 ? (
    <div className="text-xl "> No pages try to add </div>
  ) : (
    <Table
      items={entityStaff}
      columns={[
        {
          header: "###",
          value: (item) => (
            <Image
              width={40}
              height={40}
              alt="staff image"
              src={`/api/files?name=${item.data.avatar._s} `}
            />
          ),
        },
        {
          header: "title",
          value: (item) => item.data.title,
        },
        {
          header: "name",
          value: (item) => item.data.name,
        },
        {
          header: "current position",
          value: (item) => item.data.position,
        },
        {
          header: "degree",
          value: (item) => item.data.degree,
        },
        {
          header: "Top Leaders",
          value: (item) =>
            item.leadership ? (
              <Chip color="default">
                <BiCheck color="green" size={20} />
              </Chip>
            ) : null,
        },
        {
          header: "actions",
          value: (item) => (
            <EditStaffModal
              entity_slug={entity_slug}
              staff={{ slug: item.slug, data: item.data }}
            />
          ),
        },
      ]}
    />
  );
};

export default StaffTable;
