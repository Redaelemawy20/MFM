"use client";
import Hero from "@/components/Hero/Hero";
import CardWithAnimation from "@/components/card1/CardWithAnimation";
import { FaAward, FaFlask, FaHeartPulse, FaRegHospital } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import MakeAppoint from "@/components/MakeAppoint/MakeAppoint";
import About from "@/components/About/About";
import Statistics from "@/components/statistics/Statistics";
import { FaUserMd } from "react-icons/fa";
import Features from "@/components/features/Features";
import { BiReceipt } from "react-icons/bi";
import { BiCubeAlt } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import Services from "@/components/servicessection/Services";
import { FaHeartbeat } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
// import { FaPills } from "react-icons/fa";
import { title } from "process";

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
  /*****Make An Appointment****/
  const MakeAppointData = {
    title: "The History of The Faculty of Medicne ",
    description:
      "The Faculty of Medicine at Menoufia University was established by Presidential Decree No. 1142 in 1976, with its headquarters in Shebin El-Kom. The clinical phase of study began on October 27, 1984, with 54 students. The faculty moved to its current location behind the university hospital in 1986 and now includes 31 departments, offering degrees at the bachelor's, diploma, master's, and doctoral levels.",
    btnText: "Explore more",
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
  /***Statistics Data***/
  const dataofStatistics = [
    {
      icon: <FaUserMd />,
      num: 100,
      subtitel: "Doctors",
      description: "consequuntur quae qui deca rode",
    },
    {
      icon: <FaRegHospital />,
      num: 26,
      subtitel: "Departments",
      description: "adipisci atque cum quia aut numquam delectus",
    },
    {
      icon: <FaFlask />,
      num: 15,
      subtitel: "Research Lab",
      description: "aut commodi quaerat. Aliquam ratione",
    },
    {
      icon: <FaAward />,
      num: 150,
      subtitel: "Awards",
      description: "rerum asperiores dolor molestiae doloribu",
    },
  ];
  /**Features Data**/
  const dataofFeatures = {
    mainImg: "./assets/imgs/22.jpg",
    featuresItems: [
      {
        icon: <BiReceipt />,
        titel: "Est labore ad",
        description:
          "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      },
      {
        icon: <BiCubeAlt />,
        titel: "Harum esse qui",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      },
      {
        icon: <FaRegImages />,
        titel: "Aut occaecati",
        description:
          "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
      },
      {
        icon: <LuShield />,
        titel: "Beatae veritatis",
        description:
          "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
      },
    ],
  };
  const dataofServices = {
    caption:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    cardsData: [
      {
        icon: <FaHeartbeat />,
        title: "Lorem",
        description:
          "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      },
      {
        icon: <FaPills />,
        title: "Dolor Sitema",
        description:
          "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
      },
      {
        icon: <FaHospitalUser />,
        title: "Sed ut perspiciatis",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        icon: <FaDna />,
        title: "Magni Dolores",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        icon: <FaWheelchair />,
        title: "Magni Dolores",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        icon: <FaNotesMedical />,
        title: "Magni Dolores",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    ],
  };
  return (
    <>
      <Hero data={dataOfHeroSection} />
      <CardWithAnimation data={dataofAnimatedCards} />
      <MakeAppoint data={MakeAppointData} />
      <About data={dataofAbout} />
      <Statistics data={dataofStatistics} />
      <Features data={dataofFeatures} />
      <Services data={dataofServices} />
    </>
  );
};

export default Home;
