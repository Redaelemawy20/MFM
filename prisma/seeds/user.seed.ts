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

module.exports = async function seedFunction(db: any) {
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
