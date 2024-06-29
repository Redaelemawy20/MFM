"use client";
import Hero from "@/components/Hero/Hero";
import CardWithAnimation from "@/components/card1/CardWithAnimation";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";

const Home = () => {
  
  
  /****Hero Data****/
  const dataOfHeroSection = [
    {
      backgrounImg: "/assets/imgs/slide-1.jpg",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      backgrounImg: "/assets/imgs/slide-2.jpg",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgrounImg: "/assets/imgs/slide-3.jpg",
      title: "Third slide label",
      description:
        " Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
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
  return (
    <>
      <Hero data={dataOfHeroSection} />
      <CardWithAnimation data={dataofAnimatedCards} />
    </>
  );
};

export default Home;
