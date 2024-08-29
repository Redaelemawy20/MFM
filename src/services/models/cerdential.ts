import db from "@/db";

export async function getCerdential(email: string) {
  return await db.cerdential.findUnique({
    where: {
      username: email,
    },
    include: {
      user: true,
      role: {
        include: {
          permissions: true,
        },
      },
    },
  });
}

export async function createCerdential(
  { email, password }: { email: string; password: string },
  userId: number
) {
  await db.cerdential.create({
    data: {
      username: email,
      password,
      userId,
    },
  });
}
