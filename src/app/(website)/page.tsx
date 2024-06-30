"use client";
import Hero from "@/components/Hero/Hero";
import CardWithAnimation from "@/components/card1/CardWithAnimation";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import MakeAppoint from "@/components/MakeAppoint/MakeAppoint";
import { title } from "process";
import About from "@/components/About/About";

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
  /****About Data***/
  const dataofAbout = {
    mainTitel: "ABOUT US",
    caption:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    viewImg: "/assets/imgs/view.jpg",
    subTitel:
      "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    subCaption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
    ],
    endCaption:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  };
  return (
    <>
      <Hero data={dataOfHeroSection} />
      <CardWithAnimation data={dataofAnimatedCards} />
      <MakeAppoint data={MakeAppointData} />
      <About data={dataofAbout} />
    </>
  );
};

export default Home;
