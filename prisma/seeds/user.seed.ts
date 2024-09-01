const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    name: "superadmin",
    slug: "superadmin",
    data: "{}",
    leadership: false,
  },
];

const cerdentials = [
  {
    id: 1,
    username: "superadmin@mu.com",
    password: bcrypt.hashSync("superadmin", 10),
    userId: 1,
  },
];

const roles = [
  {
    id: 1,
    name: "superadmin",
  },
  { id: 2, name: "admin" },
  { id: 3, name: "user" },
];

module.exports = async function seedFunction(db: any) {
  for (let role of roles) {
    await db.role.upsert({
      where: { name: role.name },
      update: { ...role },
      create: {
        ...role,
      },
    });
  }

  for (let user of users) {
    let id = user.id;

    await db.user.upsert({
      where: { id },
      update: { ...user },
      create: {
        ...user,
      },
    });
  }
  for (let cerdential of cerdentials) {
    await db.cerdential.upsert({
      where: { id: cerdential.id },
      update: { ...cerdential },
      create: {
        ...cerdential,
      },
    });
  }
};
