"use client";

import { useRouter } from "next/navigation";
import Table from "./Table";
import { entityAdminPagesPath } from "@/services/router";
import DeletePageModal from "../factories/DeletePageModal";
import { Button } from "@nextui-org/react";

interface EntityPagesI {
  entityPages: {
    id: number;
    name: string;
    slug: string;
    entityId: number;
  }[];
  entity_slug: string;
}
const PagesTable = ({ entity_slug, entityPages }: EntityPagesI) => {
  const router = useRouter();

  const actions = (item: (typeof entityPages)[number]) => (
    <div className="flex flex-row gap-2 items-center">
      <Button
        onClick={() =>
          router.push(entityAdminPagesPath(entity_slug, item.slug))
        }
      >
        Edit
      </Button>
      <DeletePageModal item_name={item.slug} id={item.id} />
    </div>
  );

  return entityPages.length === 0 ? (
    <div className="text-xl "> No pages try to add </div>
  ) : (
    <Table
      items={entityPages}
      columns={[
        { header: "name", value: (item) => item.name },
        {
          header: "actions",
          value: actions,
        },
      ]}
    />
  );
};

export default PagesTable;
