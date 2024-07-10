import AddSectionModal from "@/components/dashboard/factories/AddSectionModal";

const SectionPage = ({ params }: { params: { p: string; s: string } }) => {
  console.log(params);

  return (
    <div>
      {params.p} page edit <AddSectionModal />
    </div>
  );
};

export default SectionPage;
