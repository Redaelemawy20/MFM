import SideBarWithBack from "@/components/dashboard/sidebar/SideBarWithBack";

const SectionPage = ({ params }: { params: { p: string; s: string } }) => {
  return (
    <SideBarWithBack>
      <div>
        Edit Section {params.s} in Page {params.p} <button>submit</button>
      </div>
    </SideBarWithBack>
  );
};

export default SectionPage;
