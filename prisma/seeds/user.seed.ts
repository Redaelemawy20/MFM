const users = [
  {
    id: 2,
    name: "dada",
    email: "redada@gmail.com",
    password: "98s28283ndw",
    roleId: 1,
    username: "kdkdwwi",
  },
];

const roles = [
  {
    id: 1,
    name: "admin",
  },
  { id: 2, name: "user" },
];

module.exports = async function seedFunction(db: any) {
  for (let role of roles) {
    await db.role.upsert({
      where: { id: role.id },
      update: { ...role },
      create: {
        ...role,
      },
    });
  }

  for (let user of users) {
    await db.user.upsert({
      where: { id: user.id },
      update: { ...user },
      create: {
        ...user,
      },
    });
  }
};
