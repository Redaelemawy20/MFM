// a generated page under the entity like department or unit

import { DotsIcon } from "@/components/dashboard/icons/accounts/dots-icon";
import { ExportIcon } from "@/components/dashboard/icons/accounts/export-icon";
import { InfoIcon } from "@/components/dashboard/icons/accounts/info-icon";
import { TrashIcon } from "@/components/dashboard/icons/accounts/trash-icon";
import { SettingsIcon } from "@/components/dashboard/icons/sidebar/settings-icon";
import { AddUser } from "@/components/dashboard/table/add-user";
import Table from "@/components/dashboard/table/Table";
import { Button, Input } from "@nextui-org/react";

// add section

// sort sections

// all sections along with edit remove
export default () => {
  return (
    <>
      <h3 className="text-xl font-semibold">All Accounts</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUser />
          <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <Table
          items={[{ id: 1, name: "haiei" }]}
          columns={["name"]}
          // actions={["edit", "delete"]}
        />
      </div>
    </>
  );
};
