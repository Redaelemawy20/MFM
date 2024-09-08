import { getStaffSections } from "@/services/sectionService";

export async function GET() {
  const sections = await getStaffSections();
  return new Response(JSON.stringify({ sections }), {
    headers: { "Content-Type": "application/json" },
  });
}
