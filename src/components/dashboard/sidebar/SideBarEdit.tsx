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
      {/* <div>
        {dataKeys.map((k: any, i) => {
          return (
            <div key={i} className="w-3/4">
              {" "}
              {k}
              <p className="!text-wrap break-words">
                {JSON.stringify(sectionData[k])}
              </p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default SideBarEdit;
