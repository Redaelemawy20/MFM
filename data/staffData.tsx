import { ImLinkedin, ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export default [
  {
    id: 1,
    name: "Prof. Dr. Ahmed Farag Al-Qasid",
    bio: "President of the University",
    email: "ahmed.elkased@med.menofia.edu.eg",
    img: "/assets/imgs/presidant.png",
    // empolyments: [
    //   "December 8, 2022 – Present: President of Menoufia University.",
    // ],
    socialLinks: [
      {
        platform: <ImLinkedin />,
        link: "/",
      },
      {
        platform: <ImFacebook2 />,
        link: "/",
      },
      {
        platform: <MdEmail />,
        link: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Prof. Dr. Hazem Saleh",
    bio: "Vice President for Education and Student Affairs",
    img: "/assets/imgs/drhazem.jpg",
    socialLinks: [
      {
        platform: <ImLinkedin />,
        link: "/",
      },
      {
        platform: <ImFacebook2 />,
        link: "/",
      },
      {
        platform: <MdEmail />,
        link: "/",
      },
    ],
  },
  {
    id: 3,
    name: "Prof. Dr. Sobhi Shaaban Ali Sharaf",
    bio: "Vice President for Community Service and Environmental Development",
    email: "g_eldahshan@yahoo.com",
    img: "/assets/imgs/drSobhy.png",
    socialLinks: [
      {
        platform: <ImLinkedin />,
        link: "/",
      },
      {
        platform: <ImFacebook2 />,
        link: "/",
      },
      {
        platform: <MdEmail />,
        link: "/",
      },
    ],
  },
  {
    id: 4,
    name: "Prof. Dr. Nasser Abdelbary",
    bio: "Vice President for Education and Student Affairs",
    img: "/assets/imgs/student.png",
    socialLinks: [
      {
        platform: <ImLinkedin />,
        link: "/",
      },
      {
        platform: <ImFacebook2 />,
        link: "/",
      },
      {
        platform: <MdEmail />,
        link: "/",
      },
    ],
  },
];
