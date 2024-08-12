// "use client";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/Hero";
import HeroEdit from "@/components/sections/Hero/HeroEdit";
import Nav from "@/components/sections/Nav";
import NavEdit from "@/components/sections/Nav/NavEdit";
import GallaryItem from "@/ts/interfaces/GallaryItem";
import FeaturesEdit from "../components/sections/features/FeaturesEdit";
import About from "@/components/sections/About";
import AboutEdit from "@/components/sections/About/AboutEdit";
import CardWithAnimation from "@/components/sections/CardWithAnimation";
import CardWithAnimationEdit from "@/components/sections/CardWithAnimation/CardWithAnimationEdit";
import HighlightedSection from "@/components/sections/HighlightedSection";
import HighlightedSectionEdit from "@/components/sections/HighlightedSection/HighlightedSectionEdit";
import MainTitle from "@/components/sections/mainTitle/MainTitle";
import MainTitleEdit from "@/components/sections/mainTitle/MainTitleEdit";
import Services from "@/components/sections/servicessection/Services";
import ServiceEdit from "@/components/sections/servicessection/ServiceEdit";
import Statistics from "@/components/sections/statistics/Statistics";
import StatisticsEdit from "@/components/sections/statistics/StatisticsEdit";
import NewsSection from "@/sections/NewsSection/NewsSection";
import StaffMember from "@/sections/staffMember/StaffMember";
import Footer from "@/components/Footer/Footer";

// sections
const gallary: GallaryItem[] = [
  {
    componentId: "1720029268729",
    component: Hero,
    componentEdit: HeroEdit,
    defaultData: {
      items: [
        {
          backgroundImage: { _s: "/assets/imgs/slide-4.png" },
          title: "Slide Label",
          description:
            "The President of Menoufia University provides all means of support to the Palestinian student whose entire family was martyred in Gaza",
        },
      ],
    },
  },
  {
    componentId: "1720029268722",
    component: About,
    componentEdit: AboutEdit,
    defaultData: {
      mainTitle: "ABOUT US",
      caption:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
      viewImg: { _s: "/assets/imgs/view.jpg" },
      subTitle:
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
    },
  },
  {
    componentId: "1720029268723",
    component: CardWithAnimation,
    componentEdit: CardWithAnimationEdit,
    defaultData: {
      items: [
        {
          img: { _s: "/assets/imgs/view.jpg" },
          title: "Medical Education",
          path: "#",
          description:
            "The Faculty of Medicine provides comprehensive medical education to undergraduate and postgraduate students. It offers a range of programs including MBBS, MD, and various specialized diplomas. The curriculum is designed to ensure students gain practical and theoretical knowledge.",
        },
        {
          img: { _s: "./assets/imgs/22.jpg" },
          title: "Clinical Services",
          path: "#",
          description:
            "The faculty operates multiple hospitals and clinics that offer a wide range of medical services. These facilities provide care in specialties like cardiology, neurology, and orthopedics. Patients receive treatment from highly qualified healthcare professionals.",
        },
      ],
    },
  },
  {
    componentId: "1720029268739",
    component: Features,
    componentEdit: FeaturesEdit,
    defaultData: {
      mainImg: { _s: "./assets/imgs/22.jpg" },
      featuresItems: [
        {
          title: "Est labore ad",
          description:
            "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
        },
        {
          title: "Harum esse qui",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        },
      ],
    },
  },
  {
    componentId: "1720029268724",
    component: HighlightedSection,
    componentEdit: HighlightedSectionEdit,
    defaultData: {
      title: "The History of The Faculty of Medicne ",
      description:
        "The Faculty of Medicine at Menoufia University was established by Presidential Decree No. 1142 in 1976, with its headquarters in Shebin El-Kom. The clinical phase of study began on October 27, 1984, with 54 students. The faculty moved to its current location behind the university hospital in 1986 and now includes 31 departments, offering degrees at the bachelor's, diploma, master's, and doctoral levels.",
      btnText: "Explore more",
      path: "#",
    },
  },
  {
    componentId: "1720029268725",
    component: MainTitle,
    componentEdit: MainTitleEdit,
    defaultData: {
      title:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis",
      caption:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    },
  },
  {
    componentId: "1720029268726",
    component: Services,
    componentEdit: ServiceEdit,
    defaultData: {
      title:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis",
      description:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
      cardsData: [
        {
          title: "Lorem",
          description:
            "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
          title: "Dolor Sitema",
          description:
            "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
        },
      ],
    },
  },
  {
    componentId: "1720029268727",
    component: Statistics,
    componentEdit: StatisticsEdit,
    defaultData: {
      items: [
        {
          num: 100,
          subtitle: "Doctors",
          description: "consequuntur quae qui deca rode",
        },
        {
          num: 26,
          subtitle: "Departments",
          description: "adipisci atque cum quia aut numquam delectus",
        },
      ],
    },
  },
];

export const navGallary = [
  {
    componentId: "1700000000",
    component: Nav,
    defaultData: {
      start: "Saturday - Thursday, 8AM to 10PM",
      end: "Call us now +1 5589 55488 55",
      items: [
        {
          href: "/",
          name: "Home",
        },
      ],
    },
  },
];
export const newsGallary = [
  {
    componentId: "1700000009",
    component: NewsSection,
    defaultData: {
      start: "Saturday - Thursday, 8AM to 10PM",
      end: "Call us now +1 5589 55488 55",
      items: [
        {
          href: "/",
          name: "Home",
        },
      ],
    },
  },
];
export const personsGallary = [
  {
    componentId: "1700000010",
    component: StaffMember,
    defaultData: {
      start: "Saturday - Thursday, 8AM to 10PM",
      end: "Call us now +1 5589 55488 55",
      items: [
        {
          href: "/",
          name: "Home",
        },
      ],
    },
  },
];

export const footerGallary = [
  {
    componentId: "1700000011",
    component: Footer,
    defaultData: {
      start: "Saturday - Thursday, 8AM to 10PM",
      end: "Call us now +1 5589 55488 55",
      items: [
        {
          href: "/",
          name: "Home",
        },
      ],
    },
  },
];

export default gallary;
