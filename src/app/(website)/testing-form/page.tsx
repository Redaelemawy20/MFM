"use client";
import { edit } from "@/actions/content";

import withModalForm from "@/components/common/modal-form";
import HeroEdit from "@/components/sections/Hero/HeroEdit";

const EditModal = withModalForm(HeroEdit, edit, "edit hero");
const dataOfHeroSection = [
  {
    backgroundImage: { preview: "/assets/imgs/slide-1.png" },
    title: "Microscopic Surgery Training",
    description:
      "The seventh training course on the basics of microscopic surgeries at Menoufia Medicine",
  },
  {
    backgroundImage: { preview: "/assets/imgs/slide-2.png" },
    title: "Energy Rationalization Symposium at Menoufia",
    description:
      "The launch of the activities of the twenty-ninth annual conference in Menoufia Medicine",
  },
  {
    backgroundImage: { preview: "/assets/imgs/slide-3.png" },
    title: "Third slide label",
    description:
      "“Al-Qasid” inaugurates the activities of the annual conference of the Department of General Surgery at Menoufia Medicine",
  },
  {
    backgroundImage: { preview: "/assets/imgs/slide-4.png" },
    title: "Fourth Slide Label",
    description:
      "The President of Menoufia University provides all means of support to the Palestinian student whose entire family was martyred in Gaza",
  },
];
const Page = () => {
  return (
    <>
      <EditModal data={{ items: dataOfHeroSection }} />
    </>
  );
};

export default Page;
