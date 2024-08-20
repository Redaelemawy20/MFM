"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import DeleteSectionModal from "../factories/DeleteSectionModal";
import { getEditComponent } from "@/services/fetch/getEditComponent";
import EditSectionModal from "../factories/EditSectionModal";
import { Section } from "@prisma/client";

const SectionEditCard = ({
  section,
  data = {},
  id,
}: {
  section: Section;
  data: any;
  id: number;
}) => {
  const editComponent = getEditComponent(section.componentId);
  let Modal;
  if (editComponent) {
    let Btn = EditSectionModal(editComponent);
    Modal = <Btn data={data} id={id} />;
  }
  return (
    <Card
      key={section.id}
      className="m-2"
      style={{
        width: 450,
      }}
    >
      <CardBody>
        <Image
          width="100"
          height="100"
          alt={section.name}
          className="w-full object-cover h-[140px] rounded-lg "
          src={section.imgUrl}
        />
      </CardBody>
      <CardFooter>
        <b className="text-nowrap">{section.name}</b>
        <p className="flex flex-row ms-2">
          {Modal ? Modal : ""}
          <DeleteSectionModal item_name={section.name} id={id} />
        </p>
      </CardFooter>
    </Card>
  );
};

export default SectionEditCard;
