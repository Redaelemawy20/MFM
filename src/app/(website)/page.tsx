"use client";
import Hero from "@/components/Hero/Hero";
import CardWithAnimation from "@/components/card1/CardWithAnimation";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import MakeAppoint from "@/components/MakeAppoint/MakeAppoint";
import { title } from "process";

const Home = () => {
  /****Hero Data****/
  const dataOfHeroSection = [
    {
      backgrounImg: "/assets/imgs/slide-1.png",
      title: "First slide label",
      description:
        "The seventh training course on the basics of microscopic surgeries at Menoufia Medicine",
    },
    {
      backgrounImg: "/assets/imgs/slide-2.png",
      title: "Second slide label",
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
      title: "lorem Ipsum",
      path: "#",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
    {
      img: <FaPills />,
      title: "Sed ut perspiciatis",
      path: "#",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
      img: <FaThermometer />,
      title: "Magni Dolores",
      path: "#",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      img: <FaDna />,
      title: "Nemo Enim",
      path: "#",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
  ];
  /*****Make An Appointment****/
  const MakeAppointData = {
    title: "In an emergency? Need help now?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    btnText: "Make An Appointment",
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
