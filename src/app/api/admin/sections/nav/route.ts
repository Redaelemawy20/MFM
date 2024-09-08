import { getNavSections } from "@/services/sectionService";

export async function GET() {
  const sections = await getNavSections();
  return new Response(JSON.stringify({ sections }), {
    headers: { "Content-Type": "application/json" },
  });
}
