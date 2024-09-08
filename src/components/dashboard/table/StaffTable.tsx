"use client";
import StaffMember from "@/ts/interfaces/StaffData";
import Table from "./Table";
import Image from "next/image";
import EditStaffModal from "../factories/EditStaffModal";
import { Chip } from "@nextui-org/react";
import { BiCheck } from "react-icons/bi";
import { extractImgSrc } from "@/utils/get-img";
import { getValueIn } from "@/utils/trans";
import ChipDone from "../icons/ChipDone";

interface EntityStaffI {
  entityStaff: StaffMember[];
  entity_slug: string;
}
const StaffTable = ({ entity_slug, entityStaff }: EntityStaffI) => {
  return entityStaff.length === 0 ? (
    <div className="text-xl "> No Stff try to add </div>
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
              src={extractImgSrc(item.data, "avatar")}
            />
          ),
        },
        {
          header: "title",
          value: (item) => getValueIn(item.data.title, "en"),
        },
        {
          header: "name",
          value: (item) => getValueIn(item.data.name, "en"),
        },
        {
          header: "current position",
          value: (item) => getValueIn(item.data.position, "en"),
        },
        {
          header: "degree",
          value: (item) => getValueIn(item.data.degree, "en"),
        },
        {
          header: "Top Leaders",
          value: (item) => item.leadership && <ChipDone />,
        },
        {
          header: "actions",
          value: (item) => (
            <EditStaffModal
              entity_slug={entity_slug}
              staff={{ slug: item.slug, data: item.data }}
              options={{
                btnText: "Edit Staff",
                color: "secondary",
              }}
            />
          ),
        },
      ]}
    />
  );
};

export default StaffTable;
