"use client";

import EditSectionModal from "../factories/EditSectionModal";
import { Section } from "@prisma/client";
import SectionWrapper from "../structure/SectionWrapper";
import getComponent from "@/com/getComponent";
import DeleteSectionModal from "../factories/DeleteSectionModal";

const SectionEditCard = ({
  section,
  data = {},
  id,
}: {
  section: Section;
  data: any;
  id: number;
}) => {
  const component = getComponent(section.componentId) as any;
  const Card = component.component;
  const editComponent = component.componentEdit;
  let Btn = EditSectionModal(editComponent);
  const Modal = (
    <Btn
      data={data}
      id={id}
      options={{
        btnText: "Edit",
        color: "secondary",
        width: "full",
      }}
    />
  );

  return (
    <SectionWrapper
      EditIcon={Modal ? Modal : ""}
      DeleteIcon={
        <DeleteSectionModal
          item_name={section.name}
          id={id}
          options={{
            btnText: "delete",
            color: "danger",
          }}
        />
      }
    >
      <Card data={data} />
    </SectionWrapper>
  );
};
{
  /* <p className="flex flex-row ms-2">
          
          
        </p> */
}
export default SectionEditCard;
