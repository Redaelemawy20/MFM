import Card1 from "@/components/dashboard/cards/card1";
import { getOverview } from "@/services/overview";
import { Divider } from "@nextui-org/react";

export default async () => {
  const overview = await getOverview();
  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Overview</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="Entities" count={overview.entities} />
              <Card1 title="News" count={overview.news} />
              <Card1 title="Staff" count={overview.staff} />
            </div>
          </div>
        </div>
        <Divider />
        {/* Left Section */}
      </div>
    </div>
  );
};
