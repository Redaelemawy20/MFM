import * as Cerdential from "./models/cerdential";
import bcrypt from "bcryptjs";

export type SignUpI = { userId: number; username: string; password: string };
export async function signup({ userId, username, password }: SignUpI) {
  const hasedPassowrd = await hashPassword(password);
  await Cerdential.createCerdential(
    { email: username, password: hasedPassowrd },
    userId
  );
}
export type GetCerdentialsWithAllReturnType = Awaited<
  ReturnType<typeof getCerdentialsWithAll>
>;
export async function getCerdentialsWithAll() {
  return Cerdential.getAllWith({ user: true, entity: true, role: true });
}

export async function changeControl(data: any) {
  const id = data.id as number;
  const cerdentialData = {
    entityId: parseInt(data.entityId),
    roleId: parseInt(data.roleId),
  };
  Cerdential.update(id, cerdentialData);
}

// Function to hash the password
async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // Salt rounds determine the complexity of the hashing
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}
