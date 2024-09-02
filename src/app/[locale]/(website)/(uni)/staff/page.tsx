import StaffMember from "@/sections/StaffMember";
import { getEntityWithStaff } from "@/services/entityServices";
import { notFound } from "next/navigation";

const Staff = async () => {
  const entity = await getEntityWithStaff("menofia-university");
  if (!entity) return notFound();

  return <StaffMember data={entity.staff as any} />;
};

export default Staff;
