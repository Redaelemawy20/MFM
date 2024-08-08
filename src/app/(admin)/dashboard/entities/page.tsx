/// spread all entities
//  faculites
// sectors

import Card1 from "@/components/dashboard/cards/card1";
import CreateEntityModal from "@/components/dashboard/factories/CreateEntityModal";
import CreatePageModal from "@/components/dashboard/factories/CreatePageModal";
import { Divider, Input } from "@nextui-org/react";

// hospitals
export default () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex  gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="w-full">
          <h3 className="text-xl font-semibold">All Accounts</h3>
          <div className="flex w-full justify-between flex-wrap ">
            <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
              <Input
                classNames={{
                  input: "w-full",
                  mainWrapper: "w-full",
                }}
                placeholder="Search users"
              />
            </div>
            <div className="flex flex-row gap-3.5 flex-wrap">
              <CreateEntityModal />
            </div>
          </div>
        </div>
        <div className="mt-3 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Faculties</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="Faculty of Medicine" count={22} />
              <Card1 title="Faculty of Computers and Information" count={102} />
              <Card1 title="Faculty of Science " count={72} />
              <Card1 title="Faculty of Law" count={22} />
              <Card1 title="Faculty of Commerce" count={102} />
              <Card1 title="Faculty of Engneering" count={72} />
              <Card1 title="Faculty of Arificial Inteligence" count={22} />
              <Card1 title="Faculty of Arts" count={102} />
              <Card1 title="Faculty of Eduction" count={72} />
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};
