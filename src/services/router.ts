const BASE = "/dashboard/entities/";
export function entityAdminPath(entity_slug: string) {
  return `${BASE}${entity_slug}`;
}

export function entityAdminPagesPath(entity_slug: string, page_slug: string) {
  return `${BASE}${entity_slug}/pages/${page_slug}`;
}
