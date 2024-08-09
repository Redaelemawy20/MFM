// a generated page under the entity like department or unit

import CreatePageModal from "@/components/dashboard/factories/CreatePageModal";
import Table from "@/components/dashboard/table/Table";
import { Input } from "@nextui-org/react";

// add section

// sort sections

// all sections along with edit remove
interface EntityPageI {
  params: {
    e: string;
  };
}
export default ({ params }: EntityPageI) => {
  return (
    <>
      <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
        <h3 className="text-xl font-semibold">All Pages</h3>
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <Input
              classNames={{
                input: "w-full",
                mainWrapper: "w-full",
              }}
              placeholder="Search pages"
            />
          </div>
          <div className="flex flex-row gap-3.5 flex-wrap">
            <CreatePageModal entity_slug={params.e} />
          </div>
        </div>
        <div className="max-w-[95rem] mx-auto w-full">
          <Table
            items={[{ id: 1, name: "haiei" }]}
            columns={["name"]}
            actions={["edit", "delete"]}
          />
        </div>
      </div>
    </>
  );
};
