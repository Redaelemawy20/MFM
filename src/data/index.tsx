import { BiCubeAlt, BiReceipt } from "react-icons/bi";
import {
  FaAward,
  FaDna,
  FaFlask,
  FaHeartbeat,
  FaHospitalUser,
  FaNotesMedical,
  FaPills,
  FaRegHospital,
  FaRegImages,
  FaThermometer,
  FaUserMd,
  FaWheelchair,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { LuShield } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

export const mfmLinks = [
  {
    name: "الرئيسية",
    go: "/",
  },
  {
    name: "عن الكلية",

    dropdownLinks: {
      links: [
        {
          name: "نبذه عن الكلية",
          subLinks: [
            { name: "تاريخ الكلية", go: "/mfm" },
            { name: "الاهداف الاستيراتيجية", go: "/mfm" },
            { name: "الخطه الاستيراتيجيه لكلية الطب", go: "/mfm" },
            { name: "الرؤيه و الرساله", go: "/mfm" },
            { name: "الهيكل التنظيمي", go: "/mfm" },
            { name: "خريطة الموقع", go: "/mfm" },
            { name: "خرائط الكلية", go: "/mfm" },
          ],
        },
        {
          name: "الادارة",
          subLinks: [
            { name: "عميد الكلية", go: "/mfm" },
            { name: "وكيل الكلية لشئون التعليم و الطلاب", go: "/mfm" },
            {
              name: "وكيل الكلية لشئون الدراسات العليا و البحوث",
              go: "/mfm",
            },
            {
              name: "وكيل الكلية لشئون خدمة المجتمع و تنمية البيئة",
              go: "/mfm",
            },
            { name: "امين الكلية", go: "/mfm" },
          ],
        },
        {
          name: "الادارات السابقة",
          subLinks: [
            { name: "العمداء", go: "/mfm" },
            {
              name: "وكلاء الكلية لشئون التعليم و الطلاب السابقون",
              go: "/mfm",
            },
            {
              name: "وكلاء الكلية لشئون خدمة المجتمع و تنمية البيئة",
              go: "/mfm",
            },
            {
              name: "وكلاء الكلية لشئون الدراسات العليا السابقون",
              go: "/mfm",
            },
          ],
        },
      ],
    },
  },
  {
    name: "القطاعات",
    dropdownLinks: {
      links: [
        {
          name: "شئون التعليم و الطلاب",
          subLinks: [
            {
              name: "البرامج التعليميه لمرحلة البكالوريوس - البرنامج الاساسي ",
              go: "/mfm",
            },
            { name: "الخدمات الطلابية", go: "/mfm" },
            { name: "وحدة الدعم الطلابي", go: "/mfm" },
            { name: "الاساسيات", go: "/mfm" },
            { name: "اتحاد الطلاب", go: "/mfm" },
            { name: "الانشطة الطلابية و رعاية الشباب", go: "/mfm" },
            { name: "دليل الطالب نظام قديم", go: "/mfm" },
            { name: "دليل الطالب نظام مطور", go: "/mfm" },
            { name: "تحميل مستندات", go: "/mfm" },
            { name: "الجمعية العلميه لطلاب طب المنوفية", go: "/mfm" },
            { name: "روابط هامة", go: "/mfm" },
            { name: "دليل الطالب نظام مطور", go: "/mfm" },
            { name: "اطباء الامتياز log Book", go: "/mfm" },
            { name: "الاستبيانات", go: "/mfm" },
          ],
        },
        {
          name: "الدراسات العليا و البحوث",
          go: "/mfm",
        },
        {
          name: "شئون خدمة المجتمع و تنمية البيئة",
          go: "/mfm",
        },
      ],
    },
  },
  {
    name: "الاقسام العلميه",

    dropdownLinks: {
      links: [
        {
          name: "الاقسام الاكاديمية",
          subLinks: [
            {
              name: "التشريح و علم الاجنة",
              go: "/mfm",
            },
            { name: "الباثولوجي التشريحي", go: "/mfm" },
            { name: "الطفيليات الطبية", go: "/mfm" },
            { name: "الفارمامولوجيا الاكلينيكيه", go: "/mfm" },
            { name: "الفيسيولوجيا الطبيه", go: "/mfm" },
            { name: "الكيمياء الحيوية", go: "/mfm" },
            { name: "الميكروبيولوجياو المناعة الطبية", go: "/mfm" },
            { name: "الهستولوجي", go: "/mfm" },
            { name: "التعليم الطبي", go: "/mfm" },
          ],
        },
        {
          name: "الاقسام الاكلينيكية",
          subLinks: [
            {
              name: "طب الاطفال",
              go: "/mfm",
            },
            { name: "جراحة المخ والاعصاب", go: "/mfm" },
            { name: "جراحة الاوعية الدموية", go: "/mfm" },
            { name: "امراض النساء و التوليد", go: "/mfm" },
            { name: "جراحة العظام", go: "/mfm" },
            { name: "جراحة القلب و الصدر", go: "/mfm" },
            {
              name: "الانف و الاذن و الحنجره و جراحة الرأس و الرقبة",
              go: "/mfm",
            },
            { name: "القلب و الاوعية الدموية", go: "/mfm" },
            { name: "علاج الاورام و الطب النووى", go: "/mfm" },
            { name: "الجراحةالعامة", go: "/mfm" },
            {
              name: "التخدير و العناية المركزةالجراحية و علاج الالم",
              go: "/mfm",
            },
            { name: "الصحة العامة و طب المجتمع", go: "/mfm" },
          ],
        },
        {
          name: "الاقسام الاكلينيكية",
          subLinks: [
            {
              name: "الامراض الجلدية و التناسلية و الذكوره",
              go: "/mfm",
            },
            { name: "طب و جراحة العيون", go: "/mfm" },
            { name: "امراض الباطنة", go: "/mfm" },
            { name: "الباثولوجيا الاكلينيكية", go: "/mfm" },
            { name: "طب المخ و الاعصاب", go: "/mfm" },
            { name: "الاشعة التشخيصية", go: "/mfm" },
            {
              name: "الامراض المتوطنة",
              go: "/mfm",
            },
            { name: "جراحة المسالك البولية", go: "/mfm" },
            { name: "الطب النفسي", go: "/mfm" },
            { name: "جراحة التجميل و الحروق", go: "/mfm" },
            {
              name: "الطب الطبيعي و الروماتيزم و التأهيل",
              go: "/mfm",
            },

            { name: "الامراض الصدرية", go: "/mfm" },
          ],
        },
      ],
    },
  },
  {
    name: "المراكز و الوحدات",
    dropdownLinks: {
      links: [
        {
          name: "المراكز",

          subLinks: [
            { name: "مركز الكلي و المسالك البولية", go: "/mfm" },
            { name: "مركز جراحة و طب العيون", go: "/mfm" },
            {
              name: "مركز جراحة القلب و الصدر و جراحة الاوعية الدموية",
              go: "/mfm",
            },
            { name: "مركز جراحة الحروق و التجميل", go: "/mfm" },
            { name: "مجمع العنايات المركزه", go: "/mfm" },
            { name: "المراكزالطبيه الجديدة", go: "/mfm" },
            { name: "مركز الخلايا الجذعية", go: "/mfm" },
            { name: "مركز جراحة الجهاز الهضمي", go: "/mfm" },
            { name: "مركز البحوث الطبية التجريبية", go: "/mfm" },
            { name: "مركز الاورام", go: "/mfm" },
            { name: "مستشفي الاطفال الجامعي", go: "/mfm" },
            { name: "مستشفي الباطنة التخصصي", go: "/mfm" },
            { name: "مستشفي الطوارئ", go: "/mfm" },
          ],
        },
        {
          name: "الوحدات",
          subLinks: [
            {
              name: "وحدة التعليم الالكتروني و تكنولوجيا المعلومات",
              go: "/mfm",
            },
            {
              name: "وحدة الطلاب الوافدين",
              go: "/mfm",
            },
            {
              name: "وحدة دعم الابداع و الابتكار",
              go: "/mfm",
            },
            {
              name: "وحدة ضمان الجودة",
              go: "/mfm",
            },
            {
              name: "وحدة رابطة خريجي طب المنصورة",
              go: "/mfm",
            },
            {
              name: "وحدة اضطرابات النوم النفسية",
              go: "/mfm",
            },
            {
              name: "وحدة الدعم الطلابي",
              go: "/mfm",
            },
            {
              name: "وحدة ادارة الازامات و الكوارث",
              go: "/mfm",
            },
            {
              name: "وحدة القياس و التقويم",
              go: "/mfm",
            },
            {
              name: "الادارة المركزية للجودة",
              go: "/mfm",
            },
          ],
        },
        {
          name: "المعامل",
          subLinks: [
            {
              name: "معمل النزف و التجلط",
              go: "/mfm",
            },
            {
              name: "معمل الفيروسات الطبية",
              go: "/mfm",
            },
            {
              name: "معامل قسم الطفيليات",
              go: "/mfm",
            },
            {
              name: "معامل قسم الصحة العامة",
              go: "/mfm",
            },
            {
              name: "معمل قسم الفارماكولوجي",
              go: "/mfm",
            },
            {
              name: "معامل قسم الكيمياء الحيوية",
              go: "/mfm",
            },
            {
              name: "معمل قسم الباثولوجي",
              go: "/mfm",
            },
            {
              name: "معمل قسم الطب الشرعي",
              go: "/mfm",
            },
            {
              name: "معامل قسم الفيسيولوجي",
              go: "/mfm",
            },
            {
              name: "معامل قسم الباثولوجي الاكلينيكي",
              go: "/mfm",
            },
            {
              name: "معمل قسم التشريح",
              go: "/mfm",
            },
            {
              name: "معمل قسم الهستولوجي",
              go: "/mfm",
            },
          ],
        },
      ],
    },
  },
  {
    name: "اعضاء هيئة التدريس",

    dropdownLinks: {
      links: [
        { name: "نظام البيانات الاكاديميه لاعضاء هيئة التدريس", go: "/" },
        { name: "البريد الالكتروني لجامعة المنصوره", go: "/" },
        { name: "الحاصلون علي جوائز", go: "/" },
      ],
    },
  },
];

export const links = [
  {
    name: "الرئيسية",
    go: "/",
  },
  {
    name: "عن الجامعة",

    dropdownLinks: {
      links: [
        {
          name: "تاريخ و حقائق",

          subLinks: [
            { name: "كلمة رئيس الجامعة", go: "/" },
            { name: "حقائق وأرقام", go: "/" },
            { name: "تاريخ الجامعة", go: "/" },
            { name: "رؤية الجامعة", go: "/" },
            { name: "رسالة الجامعة", go: "/" },
            { name: "أهداف الجامعة", go: "/" },
            { name: "ترتيب الجامعة بين جامعات العالم", go: "/" },
          ],
        },
        {
          name: "قطاعات الجامعه",

          subLinks: [
            { name: "قطاع شئؤن التعليم والطلاب", go: "/" },
            { name: "قطاع شئون الدراسات العليا والبحوث", go: "/" },
            { name: "قطاع خدمة المجتمع وتنمية البيئة", go: "/" },
            { name: "قطاع أمين عام الجامعة", go: "/" },
          ],
        },
        { name: "الهيكل التنظيمى للجامعة", go: "/" },
        { name: "سياسة الجودة", go: "/" },
        { name: "سياسة الخصوصية", go: "/" },
        { name: "بيانات الاتصال", go: "/" },
        { name: "اسأل رئيس الجامعة", go: "/" },
        { name: "المؤتمرات والأحداث", go: "/" },
        { name: "خريطة الموقع", go: "/" },
        { name: "الجامعة في مواجهة كورونا", go: "/" },
        { name: "التنمية المستدامة", go: "/" },
        { name: "وظائف مطلوبة داخل الجامعة", go: "/" },
      ],
    },
  },

  {
    name: "الكليات و البرامج النوعية",
    go: "/services",
  },
  {
    name: "المراكز و الوحدات",

    dropdownLinks: {
      links: [
        {
          name: "مراكز التطوير بالجامعة",

          subLinks: [
            { name: "مركز تطوير الأداء الجامعي", go: "/" },
            { name: "مركز ضمان الجودة وتقييم الأداء", go: "/" },
            { name: "مركز القياس والتقويم", go: "/" },
            { name: "المركز الجامعي للتطوير المهني", go: "/" },
          ],
        },
        {
          name: "المراكز والوحدات الخاصة",

          subLinks: [
            { name: "مركز انطلاق", go: "/" },
            { name: "مركز دار الضيافة والؤتمرات", go: "/" },
            { name: "مركز خدمات الأشخاص ذوى الإعاقة", go: "/" },
            { name: "مركز المعلومات والتوثيق ودعم اتخاذ القرار", go: "/" },
            { name: "مركز دعم الصناعات الصغيرة والمتوسطة", go: "/" },
            { name: "مكتب دعم الابتكار ونقل وتسويق التكنولوجيا", go: "/" },
            { name: "وحدة مناهضة العنف ضد المرأة", go: "/" },
            { name: "لجنة مواجهة خطر الإدمان والتعاطي", go: "/" },
          ],
        },
        {
          name: "اندية الجامعة",

          subLinks: [
            { name: "نادى اعضاء هيئة التدريس", go: "/" },
            { name: "نادى النيل", go: "/" },
          ],
        },
        {
          name: "مركز التدريب والتدريس",

          subLinks: [
            { name: "مركز التدريب الاداري والاستشارات", go: "/" },
            { name: "مركز التدريب الرقمي", go: "/" },
            { name: "مركز اللغة الانجليزية للأغراض الخاصة", go: "/" },
            { name: "مركز رعاية وتنمية الطفولة", go: "/" },
            { name: "مركز تكنولوجيا التعليم", go: "/" },
            { name: "مركز الخدمة العامة للغات والترجمة", go: "/" },
            {
              name: "مركز الخدمة العامة بكلية التربية للطفولة المبكرة",
              go: "/",
            },
          ],
        },
      ],
    },
  },
  {
    name: "الرعاية الصحيه",
    go: "/doctors",
    dropdownLinks: {
      links: [
        {
          name: "المستشفيات",
          subLinks: [
            { name: "المستشفى الرئيسي", go: "/" },
            { name: "مستشفى الطوارئ", go: "/" },
            { name: "مستشفى الباطنة التخصصى", go: "/" },
            { name: "مستشفى الأطفال الجامعى", go: "/" },
            { name: "مستشفى الطلبة الجامعى", go: "/" },
            { name: "مستشفى النقاهة", go: "/" },
          ],
        },
        {
          name: "المراكز الطبية",
          subLinks: [
            { name: "مركز الكلى والمسالك البولية", go: "/" },
            { name: "مركز طب وجراحة العيون", go: "/" },
            { name: "مركز جراحة الجهاز الهضمي", go: "/" },
            { name: "مركز الأورام", go: "/" },
            { name: "مركز جراحة الحروق والتجميل", go: "/" },
            {
              name: "مركز جراحة القلب والصدر وجراحة الأوعية الدموية",
              go: "/",
            },
            { name: "المراكز الطبية الثلاث", go: "/" },
          ],
        },
      ],
    },
  },
  {
    name: "الاخبار و الميديا",
    go: "#",
    dropdownLinks: {
      links: [
        { name: "الأخبار", go: "/" },
        { name: "أرشيف الأخبار", go: "/" },
        { name: "ميديا الجامعة", go: "/" },
        { name: "خريطة الجامعة", go: "/" },
      ],
    },
  },
];

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
export const dataofFeatures = {
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
export const dataofServices = {
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

export const newsData = {
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
/** Staff Member Data*/
export const staffMembers = [
  {
    name: "أ.د/ أحـمـد فـرج الـقـاصــد",
    bio: "رئـيـس الـجـامـعـة",
    img: "./assets/imgs/presidant.png",
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
    name: "أ.د/حازم صالح",
    bio: "نائب رئيس الجامعة لشئون التعليم والطلاب",
    img: "./assets/imgs/drhazem.jpg",
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
    name: "أ.د/ صبحي شعبان علي شرف",
    bio: "نائب رئيس الجامعة لشئون خدمة المجتمع وتنمية البيئة",

    img: "./assets/imgs/drSobhy.png",
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
    name: "أ.د/ ناصر عبدالبارى",
    bio: "نائب رئيس الجامعة لشئون التعليم والطلاب",

    img: "./assets/imgs/student.png",
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
