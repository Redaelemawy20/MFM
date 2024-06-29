const gallary = [
  {
    id: "1",
    props: "ali",
    component: "",
    img: "",
    editcomponet: "",
    name: "",
  },
  {
    id: "2",
    props: "",
    component: "",
    img: "",
    editcomponet: "",
    name: "",
  },
  {
    id: "3",
    props: "",
    component: "",
    img: "",
    editcomponet: "",
    name: "",
  },
];
const state: any = [];
gallary.map((g) => <div onClick={() => state.push(g)}></div>);

const showEditCompont = () => {};
