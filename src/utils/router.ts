export const BASEPATH = "/dashboard";

export const ROLES = `${BASEPATH}/roles`;
export const USERSPATH = `${BASEPATH}/users`;
export const PROFILEPATH = `${BASEPATH}/profile`;

export const ENTITIESPATH = `${BASEPATH}/entities`;

export function entityAdminPath(entity_slug: string) {
  return `${ENTITIESPATH}/${entity_slug}`;
}

export function entityAdminPagesPath(entity_slug: string, page_slug: string) {
  return `${ENTITIESPATH}/${entity_slug}/pages/${page_slug}`;
}
export function entityAdminNewsPath(entity_slug: string) {
  return `${ENTITIESPATH}/${entity_slug}/news`;
}
export function entityAdminStaffPath(entity_slug: string) {
  return `${ENTITIESPATH}/${entity_slug}/staff`;
}

export function insideAWebsite(pathname: string) {
  if (!pathname.startsWith(ENTITIESPATH)) return false;
  if (pathname.endsWith(ENTITIESPATH)) return false;
  return true;
}
