// entity page such as faculty or sector

import Card1 from "@/components/dashboard/cards/card1";
import { Divider } from "@nextui-org/react";

// news

// lists

// pages

// staff
export default () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Overview</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="News" count={102} />
              <Card1 title="Nav Links" count={22} />
              <Card1 title="Footer Links" count={72} />
              <Card1 title="Staff" count={72} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Pages</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <Card1 title="Page 1" count={102} />
              <Card1 title="Page 2" count={22} />
              <Card1 title="Page 3" count={72} />
              <Card1 title="Page 4" count={72} />
            </div>
          </div>
        </div>
        {/* Left Section */}
      </div>
    </div>
  );
};
