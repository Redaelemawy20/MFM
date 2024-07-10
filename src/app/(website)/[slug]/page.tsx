import getComponent from "@/com/getComponent";

const src = "hiwie";
const sections = [
  { id: 0, src: "hiwie", data: { h: "haiwiwe", p: "kdhowiehwon" } },
  { id: 1, src: "iowa", data: { b1: "button1", b2: "button2" } },
];
const HI = () => {
  console.log("%%%%%%%%%%%%55");
  return (
    <div>
      HI
      <h1>Faculty of Medicine</h1>
      <div>
        {sections.map((s) => {
          const C = getComponent(s.src);
          console.log(C);

          return <div key={s.src}>{C ? <C data={s.data} /> : s.src}</div>;
        })}
      </div>
    </div>
  );
};

export default HI;
