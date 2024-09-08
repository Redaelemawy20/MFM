import { getAllSections } from "@/services/sectionService";

export async function GET() {
  const sections = await getAllSections();
  return new Response(JSON.stringify({ sections }), {
    headers: { "Content-Type": "application/json" },
  });
}
