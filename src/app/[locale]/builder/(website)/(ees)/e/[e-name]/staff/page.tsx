import StaffMember from "@/sections/StaffMember";
import { getEntityWithStaff } from "@/services/entityServices";
import { notFound } from "next/navigation";

const Staff = async ({ params }: { params: { "e-name": string } }) => {
  const { "e-name": entity_name } = params;
  const entity = await getEntityWithStaff(entity_name);
  if (!entity) return notFound();

  return <StaffMember data={entity.staff as any} />;
};

export default Staff;
