import { getFooterSections } from "@/services/sectionService";

export async function GET() {
  const sections = await getFooterSections();
  return new Response(JSON.stringify({ sections }), {
    headers: { "Content-Type": "application/json" },
  });
}
