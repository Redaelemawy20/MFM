import { getEntityWithPages } from "@/services/fetch/getEntityWithPages";

export async function GET(request: Request) {
  const url = new URL(request.url);

  // Extract query parameters from the URL
  const entity = url.searchParams.get("entity_slug") as string;
  const p = await getEntityWithPages(entity);
  return new Response(JSON.stringify(p?.pages || []), {
    headers: { "Content-Type": "application/json" },
  });
}
