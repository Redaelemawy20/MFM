"use client";
import CvPage from "@/components/Cvtemplate/CvPage";
import Data from "../../../../data/staffData";
interface Params {
  cvId: string;
}

interface PageProps {
  params: Params;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const selectedMember = Data.find((item) => item.id === +params.cvId);
  return (
    <>
      <CvPage data={selectedMember} />
    </>
  );
};

export default Page;
