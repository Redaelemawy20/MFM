import { getNewsSections } from "@/services/sectionService";

export async function GET() {
  const sections = await getNewsSections();
  return new Response(JSON.stringify({ sections }), {
    headers: { "Content-Type": "application/json" },
  });
}
