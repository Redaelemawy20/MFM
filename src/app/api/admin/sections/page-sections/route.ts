import { getPageSections } from "@/services/pageServices";
import { getFooterSections } from "@/services/sectionService";

export async function GET(request: Request) {
  // Get the full URL
  const url = new URL(request.url);

  // Extract query parameters from the URL
  const entity = url.searchParams.get("entity_slug") as string; // 'name' query param
  const page = url.searchParams.get("page") as string;
  const sections = await getPageSections(entity, page);
  return new Response(JSON.stringify(sections), {
    headers: { "Content-Type": "application/json" },
  });
}
