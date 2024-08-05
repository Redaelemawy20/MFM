/// spread all entities
//  faculites
// sectors

import Card1 from "@/components/dashboard/cards/card1";
import { Divider } from "@nextui-org/react";

// hospitals
export default () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="mt-6 gap-6 flex flex-col w-full">
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
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Sectors</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="Sector 1" count={22} />
              <Card1 title="Sector 2" count={102} />
              <Card1 title="Sector 3" count={72} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Hospitals</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="Hospital 1" count={22} />
              <Card1 title="Hospital 2" count={102} />
              <Card1 title="Hospital 3" count={72} />
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};
