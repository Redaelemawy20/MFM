import { getValueIn } from "@/utils/trans";
import * as User from "./models/user";
import convertToSlug from "@/utils/convet-to-slug";

export type GetUsersWithCerdentialsReturnType = Awaited<
  ReturnType<typeof getUsersWithCerdentials>
>;
export function getUsersWithCerdentials() {
  return User.findAllWithCerdentials();
}

export async function createNewUser(data: any) {
  const leader = Boolean(data.leadership);
  delete data.leader;
  let nameEn = getValueIn(data.name, "en");
  const newSlug = convertToSlug(nameEn);
  const userData = { name: nameEn, slug: newSlug, data, leadership: leader };
  await User.createOneForEntity(userData, parseInt(data.entityId));
}

export async function updateUser(data: any) {
  const leader = Boolean(data.leadership);
  delete data.leader;
  let nameEn = getValueIn(data.name, "en");
  const newSlug = convertToSlug(nameEn);
  const slug = data.user_slug;
  delete data.user_slug;
  const userData = {
    name: nameEn,
    slug: newSlug,
    leadership: leader,
    data,
    entityId: parseInt(data.entityId),
  };
  await User.updateOne(userData, slug);
}
