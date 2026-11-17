import { filterSiteSearchItems } from "@/lib/site-search";

export function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim().slice(0, 100) ?? "";
  return Response.json(
    { results: query ? filterSiteSearchItems(query, 10) : [] },
    { headers: { "Cache-Control": "public, max-age=300, stale-while-revalidate=3600" } },
  );
}
