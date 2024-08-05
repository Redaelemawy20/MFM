import db from "@/db";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const ContentPage = async () => {
  const sections = await db.section.findMany();
  return (
    <div>
      <h2 className="ml-2 font-bold">our sections gallary...</h2>
      <div className="flex !flex-row flex-wrap !items-start !justify-start  ">
        {sections.length
          ? sections.map((s, index) => {
              return (
                <Card
                  key={index}
                  isPressable
                  className="m-2"
                  style={{ width: 300 }}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">resusable</p>
                    <small className="text-default-500">10 pages</small>
                    <h4 className="font-bold text-large">{s.name}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      width="100"
                      height="100"
                      alt={s.name}
                      className="w-full object-cover h-[140px] rounded-lg "
                      src={s.imgUrl}
                    />
                  </CardBody>
                </Card>
              );
            })
          : "there is no sections to add"}
      </div>
    </div>
  );
};

export default ContentPage;
