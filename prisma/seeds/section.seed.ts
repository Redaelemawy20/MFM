// const sections: { id: number; name: string; componentId: string }[] = [
//   {
//     id: 1,
//     name: "DropDown NavBar",
//     componentId: "1720029268728",
//   },
//   {
//     id: 2,
//     name: "Hero with Carousel",
//     componentId: "1720029268729",
//   },
// ];
// exports = { sections };
const m = require("../../src/com/sections");

module.exports = async function seedFunction(db: any) {
  for (let section of m.sections) {
    await db.section.upsert({
      where: { id: section.id },
      update: { ...section },
      create: { ...section },
    });
  }
};
