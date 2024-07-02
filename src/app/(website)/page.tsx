"use client";
import Hero from "@/components/sections/Hero";
import CardWithAnimation from "@/components/sections/CardWithAnimation";
import Nav from "@/components/sections/Nav";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import HighlightedSection from "@/components/sections/HighlightedSection";

const Home = () => {
  return (
    <>
      <Nav
        data={{
          items: links,
          topStartText: "Saturday - Thursday, 8AM to 10PM",
          topEndText: "Call us now +1 5589 55488 55",
        }}
      />
      <Hero data={{ items: dataOfHeroSection }} />
      <CardWithAnimation data={{ items: dataofAnimatedCards }} />
      <HighlightedSection data={HighlightedSectionData} />
    </>
  );
};
/**Header Links**/
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Departments",
    href: "/departments",
  },
  {
    name: "Doctors",
    href: "/doctors",
  },
  {
    name: "Drop down",
    dropdown: true,
    href: "#",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
/****Hero Data****/
const dataOfHeroSection = [
  {
    backgrounImg: "/assets/imgs/slide-1.png",
    title: "Microscopic Surgery Training",
    description:
      "The seventh training course on the basics of microscopic surgeries at Menoufia Medicine",
  },
  {
    backgrounImg: "/assets/imgs/slide-2.png",
    title: "Energy Rationalization Symposium at Menoufia",
    description:
      "The launch of the activities of the twenty-ninth annual conference in Menoufia Medicine",
  },
  {
    backgrounImg: "/assets/imgs/slide-3.png",
    title: "Third slide label",
    description:
      "“Al-Qasid” inaugurates the activities of the annual conference of the Department of General Surgery at Menoufia Medicine",
  },
  {
    backgrounImg: "/assets/imgs/slide-4.png",
    title: "Fourth Slide Label",
    description:
      "The President of Menoufia University provides all means of support to the Palestinian student whose entire family was martyred in Gaza",
  },
  {
    backgrounImg: "/assets/imgs/slide-5.png",
    title: "Fivth Slide Label",
    description:
      "The closing ceremony of the activities of the twenty-ninth annual conference of medicine in Menoufia",
  },
];
/****Animated Cards Data****/
const dataofAnimatedCards = [
  {
    img: <FaHeartPulse />,
    title: "Medical Education",
    path: "#",
    description:
      "The Faculty of Medicine provides comprehensive medical education to undergraduate and postgraduate students. It offers a range of programs including MBBS, MD, and various specialized diplomas. The curriculum is designed to ensure students gain practical and theoretical knowledge.",
  },
  {
    img: <FaPills />,
    title: "Clinical Services",
    path: "#",
    description:
      "The faculty operates multiple hospitals and clinics that offer a wide range of medical services. These facilities provide care in specialties like cardiology, neurology, and orthopedics. Patients receive treatment from highly qualified healthcare professionals.",
  },
  {
    img: <FaThermometer />,
    title: "Research and Development",
    path: "#",
    description:
      "The Faculty of Medicine engages in cutting-edge medical research to advance healthcare knowledge. It conducts clinical trials, epidemiological studies, and laboratory research. Collaboration with international institutions enhances its research capabilities.",
  },
  {
    img: <FaDna />,
    title: "Community Outreach",
    path: "#",
    description:
      "The faculty is committed to improving public health through community outreach programs. It organizes health camps, awareness campaigns, and vaccination drives. These initiatives aim to provide medical assistance and education to underserved populations.",
  },
];
/*****HighlightedSection****/
const HighlightedSectionData = {
  title: "The History of The Faculty of Medicne ",
  description:
    "The Faculty of Medicine at Menoufia University was established by Presidential Decree No. 1142 in 1976, with its headquarters in Shebin El-Kom. The clinical phase of study began on October 27, 1984, with 54 students. The faculty moved to its current location behind the university hospital in 1986 and now includes 31 departments, offering degrees at the bachelor's, diploma, master's, and doctoral levels.",
  btnText: "Explore more",
  path: "#",
};
export default Home;
