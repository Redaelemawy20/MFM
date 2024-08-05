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
import NewsSection from "@/sections/NewsSection/NewsSection";
import Footer from "@/components/Footer/Footer";
const Home = () => {
  /****Hero Data****/
  const dataOfHeroSection = [
    {
      backgrounImg: "/assets/imgs/banner1.png",
      title: "مجلس جامعة المنوفية يكرم نائب رئيس الجامعة للدراسات العليا",
      description:
        "عقد الدكتور أحمد القاصد رئيس جامعة المنوفية جلسة مجلس الجامعة لشهر يوليو ٢٠٢٤ بحضور نواب رئيس الجامعة الدكتور صبحى شرف لخدمة المجتمع وتنمية البيئة والدكتور حازم صالح للدراسات العليا والبحوث والدكتور ناصر عبدالبارى للتعليم والطلاب وعمداء الكليات.",
    },
    {
      backgrounImg: "/assets/imgs/banner2.jpg",
      title:
        '"القاصد" يعلن عن بدء إتخاذ الاجراءات اللازمة لإنشاء معهد الأورام بجامعة المنوفية',
      description:
        "أعلن الدكتور أحمد القاصد رئيس جامعة المنوفية عن بدء إتخاذ الإجراءات اللازمة لإنشاء معهد الأورام كمعهد بحثي وعلاجي بعد موافقة المجلس الأعلى للجامعات برئاسة الدكتور أيمن عاشور وزير التعليم العالي والبحث العلمي، علي إنشائه في جلسته الأخيرة ، وحصول الجامعة علي موافقة لجنة القطاع الطبي من قبل .",
    },
    {
      backgrounImg: "/assets/imgs/banner3.png",
      title:
        "رئيس جامعة المنوفية يهنئ منسوبي الجامعة والعاملين بالإدارة العامة للجامعة بقرب حلول عيد الأضحى المبارك",
      description:
        "قام الدكتور أحمد القاصد رئيس جامعة المنوفية، بتقديم التهنئة لجميع منسوبى الجامعة من أعضاء هيئة التدريس والعاملين والطلاب بقرب حلول عيد الأضحى المبارك، ، كما حرص رئيس الجامعة علي تقديم التهنئة للعاملين بالادارات المختلفة بمبني بالإدارة العامة للجامعة",
    },
    // {
    //   backgrounImg: "/assets/imgs/slide-4.png",
    //   title: "Fourth Slide Label",
    //   description:
    //     "The President of Menoufia University provides all means of support to the Palestinian student whose entire family was martyred in Gaza",
    // },
    // {
    //   backgrounImg: "/assets/imgs/slide-5.png",
    //   title: "Fivth Slide Label",
    //   description:
    //     "The closing ceremony of the activities of the twenty-ninth annual conference of medicine in Menoufia",
    // },
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
    title: "تــاريــخ جــامــعــة الــمــنــوفــيــة",
    description:
      "أنشئت جامعة المنوفية بالقانون رقم ( 93 ) الصادر في الرابع عشر من أغسطس عام 1976 م ومقرها بشبين الكوم ، لتلبية الطلب المتزايد على التعليم العالي ، ولدعم الجامعات المصرية ومؤسسات التعليم العالي الأخرى في تحقيق رسالتها في تنمية وتطوير المجتمع من خلال تقديم خدمات تعليمية وبحثية ومجتمعية متميزة. واقتضى القانون (93) في مادته الثانية بأن تتكون جامعة المنوفية من الكليات التابعة آنذاك لجامعة طنطا بشبين الكوم ومنوف",
    btnText: "اســتــكــشــف الــمــزيــد",

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
  /**Service Data**/
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
  /** News Data **/

  const newsData = {
    mainTitle: "اخر الاخبار",
    newsData: [
      {
        image: "./assets/imgs/new1.png",
        date: "الخميس , 1 اغسطس 2024",
        title:
          "رئيس جامعة المنوفية يصدر قرارات بتكليف وتجديد تكليف عمداء بعض الكليات ووكيل جديد بكلية التجارة",
        // views: 123,
      },
      {
        image: "./assets/imgs/new2.png",
        date: "الخميس , 1 اغسطس 2024",

        title:
          "القاصد يصدر قرار بتكليف إكرامى جمال للقيام بعمل أمين عام جامعة المنوفية .",
        // views: 456,
      },
      {
        image: "./assets/imgs/new3.png",
        date: "الخميس , 1 اغسطس 2024",

        title:
          "رئيس جامعة المنوفية يشارك فى اجتماع المجلس الأعلى للجامعات بجامعة الأزهر",
        // views: 789,
      },
      // {
      //   image: "./assets/imgs/uni1.png",
      //   date: "الأربعاء, 23 يوليو 2024",
      //   title: "ندوة حول التعليم الإلكتروني والتعليم عن بعد",
      //   // views: 789,
      // },
    ],
  };
  return (
    <>
      {/* Section-1 */}
      <Hero data={dataOfHeroSection} />
      {/*Section-2*/}
      <NewsSection data={newsData} />
      {/* Section-3 */}
      {/* <CardWithAnimation data={dataofAnimatedCards} /> */}
      {/* Section-4 */}
      <MakeAppoint data={MakeAppointData} />
      {/* Section-5 */}
      {/* <About data={dataofAbout} /> */}
      {/* Section-6 */}
      <Statistics data={dataofStatistics} />
      {/* Section-7 */}
      <Features data={dataofFeatures} />
      {/* Section-8 */}
      {/* <Services data={dataofServices} /> */}
      {/* Section-9*/}
      <Footer />
    </>
  );
};

export default Home;
