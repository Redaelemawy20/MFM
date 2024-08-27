import CvPage from "@/components/Cvtemplate/CvPage";
import { findStaff } from "@/services/models/staff";
import { notFound } from "next/navigation";

export default async function ({ params }: { params: { name: string } }) {
  const member = await findStaff(params.name);
  if (!member) return notFound();
  return <CvPage staff={member.data as any} />;
}
