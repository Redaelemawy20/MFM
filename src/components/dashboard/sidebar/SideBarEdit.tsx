"use client";
import { edit } from "@/actions/content";
import getComponent from "@/com/getComponent";
import withModalForm from "@/components/common/modal-form";
import { notFound } from "next/navigation";

const SideBarEdit = ({ section }: { section: any }) => {
  const sectionDetails = getComponent(section?.section.componentId || "");
  if (!sectionDetails) return notFound();
  const EditSectionButton = withModalForm(
    sectionDetails.componentEdit as any,
    edit,
    "Edit Section"
  );
  const sectionData = section.data as any;
  const dataKeys = Object.keys(sectionData);
  return (
    <>
      <EditSectionButton id={section.id} data={sectionData} />
      <div>
        {dataKeys.map((k: any, i) => {
          return (
            <div key={k + i}>
              {" "}
              {k}
              <p>
                {typeof sectionData[k] === "object"
                  ? JSON.stringify(sectionData[k])
                  : sectionData[k]}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBarEdit;
