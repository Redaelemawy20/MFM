import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
interface InfoCardI {
  title: string;
  count: number;
}
const Card1 = ({ title, count }: InfoCardI) => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />

          <div className="flex flex-col">
            <span className="text-default-900 text-xl font-semibold">
              {title}
            </span>
            <span className="text-default-900 text-xl font-semibold">
              {count}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card1;
