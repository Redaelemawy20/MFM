"use client";
import Hero from "@/components/Hero/Hero";
import CardWithAnimation from "@/components/card1/CardWithAnimation";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import MakeAppoint from "@/components/MakeAppoint/MakeAppoint";

const Home = () => {
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
        "Menoufia Medicine organizes the scientific symposium Energy rationalization and the importance of new and renewable energy in reducing the pace of climate change",
    },
    {
      backgrounImg: "/assets/imgs/slide-3.png",
      title: "Third slide label",
      description:
        "“Al-Qasid” inaugurates the activities of the annual conference of the Department of General Surgery at Menoufia Medicine",
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
  /*****Make An Appointment****/
  const MakeAppointData = {
    title: "The History of The Faculty of Medicne ",
    description:
      "The Faculty of Medicine at Menoufia University was established by Presidential Decree No. 1142 in 1976, with its headquarters in Shebin El-Kom. The clinical phase of study began on October 27, 1984, with 54 students. The faculty moved to its current location behind the university hospital in 1986 and now includes 31 departments, offering degrees at the bachelor's, diploma, master's, and doctoral levels.",
    btnText: "Explore more",
    path: "#",
  };
  return (
    <>
      <Hero data={dataOfHeroSection} />
      <CardWithAnimation data={dataofAnimatedCards} />
      <MakeAppoint data={MakeAppointData} />
    </>
  );
};

export default Home;
