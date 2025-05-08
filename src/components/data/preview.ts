import { IconType } from '@/components/common/Icons';
export const sections = [
  {
    id: 'mainTitle',
    titleKey: 'sectionTypes.mainTitle',
    descriptionKey: 'descriptions.mainTitle',
    defaultValue:
      'A simple title component with a main title and optional caption.',
    props: '{ mainTitle: string, caption?: string }',
    example: true,
  },
  {
    id: 'services',
    titleKey: 'sectionTypes.services',
    descriptionKey: 'descriptions.services',
    defaultValue:
      'Displays service offerings with icons, titles, and descriptions.',
    props:
      '{ title: string, caption: string, cardsData: Array<{title: string, description: string, icon: IconType}> }',
    example: true,
  },
  {
    id: 'staticContent',
    titleKey: 'sectionTypes.staticContent',
    descriptionKey: 'descriptions.staticContent',
    defaultValue: 'Displays static content with title and text.',
    props: '{ mainTitle: string, subTitle: string, lines: string[] }',
    example: true,
  },
  {
    id: 'statistics',
    titleKey: 'sectionTypes.statistics',
    descriptionKey: 'descriptions.statistics',
    defaultValue: 'Shows numerical statistics with icons and descriptions.',
    props:
      '{ title: string, items: Array<{icon: IconType, num: string, subtitle: string, description: string}> }',
    example: true,
  },
  {
    id: 'subPages',
    titleKey: 'sectionTypes.subPages',
    descriptionKey: 'descriptions.subPages',
    defaultValue: 'Navigation for sub-pages within the site.',
    props:
      '{ items: Array<{mainTitle: string, subTitle: string, lines: string[]}> }',
    example: true,
  },
  {
    id: 'about',
    titleKey: 'sectionTypes.about',
    descriptionKey: 'descriptions.about',
    defaultValue: 'About section with text and image.',
    props:
      '{ mainTitle: string, caption: string, subTitle: string, subCaption: string, list: string[], endCaption: string, viewImg: ServerImage }',
    example: true,
  },
  {
    id: 'animatedCard',
    titleKey: 'sectionTypes.animatedCard',
    descriptionKey: 'descriptions.animatedCard',
    defaultValue: 'Cards with animation effects for featuring content.',
    props:
      '{ title: string, description: string, image: string, items: Array<{title: string, description: string, icon: IconType, path: string}> }',
    example: true,
  },
  {
    id: 'features',
    titleKey: 'sectionTypes.features',
    descriptionKey: 'descriptions.features',
    defaultValue: 'Highlights key features of products or services.',
    props:
      '{ title: string, featuresItems: Array<{title: string, description: string}>, mainImg: ServerImage }',
    example: true,
  },
  {
    id: 'highlightedSection',
    titleKey: 'sectionTypes.highlightedSection',
    descriptionKey: 'descriptions.highlightedSection',
    defaultValue:
      'Section with special styling to highlight important content.',
    props:
      '{ title: string, description: string, content: string, btnText: string, path: string, background: ServerImage }',
    example: true,
  },
  {
    id: 'staff',
    titleKey: 'sectionTypes.staff',
    descriptionKey: 'descriptions.staff',
    defaultValue: 'Shows team members with their information and photos.',
    props: '{ data: Array<{data: StaffData, slug: string}> }',
  },
  {
    id: 'footer',
    titleKey: 'sectionTypes.footer',
    descriptionKey: 'descriptions.footer',
    defaultValue: 'Page footer with contact information and links.',
    props:
      '{ title: string, paragraph: string, companyName: string, address: string, phone: string, email: string, location: {lat: number, lng: number}, column1Title: string, column2Title: string, column1Links: Array<{text: string, url: string}>, column2Links: Array<{text: string, url: string}>, socialLinks: Array<{platform: string, url: string}> }',
  },
  {
    id: 'hero',
    titleKey: 'sectionTypes.hero',
    descriptionKey: 'descriptions.hero',
    defaultValue: 'Hero banner or slider for the main page header.',
    props:
      '{ items: Array<{title: string, description: string, backgroundImage: ServerImage, readMoreLink: string}> }',
  },
  {
    id: 'nav',
    titleKey: 'sectionTypes.nav',
    descriptionKey: 'descriptions.nav',
    defaultValue: 'Navigation component for the site.',
    props:
      '{ data: {links: Array<{text: string, url: string}>}, logo: string }',
  },
  {
    id: 'news',
    titleKey: 'sectionTypes.news',
    descriptionKey: 'descriptions.news',
    defaultValue: 'Displays news articles with images and excerpts.',
    props: '{ data: Array<{details: NewsItem, slug: string}> }',
  },
];

// Services mock data
export const servicesData = {
  title: 'Our Services',
  caption: 'What we can do for you',
  cardsData: [
    {
      title: 'Web Development',
      description: 'Custom websites for businesses',
      icon: 'FaLaptop' as IconType,
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android applications',
      icon: 'FaPhone' as IconType,
    },
    {
      title: 'Design',
      description: 'Beautiful and functional interfaces',
      icon: 'FaGlobe' as IconType,
    },
  ],
};

// Static Content Section Mock Data
export const staticContentData = {
  mainTitle: 'About Us',
  subTitle: 'Our Company',
  lines: [
    'We are a company dedicated to excellence',
    'Founded in 2010',
    'Serving clients worldwide',
  ],
};

// Statistics Section Mock Data
export const statisticsData = {
  title: 'Our Numbers',
  items: [
    {
      icon: 'FaStar' as IconType,
      num: '100+',
      subtitle: 'Projects',
      description: 'Completed successfully',
    },
    {
      icon: 'FaUser' as IconType,
      num: '50+',
      subtitle: 'Clients',
      description: 'Happy customers',
    },
    {
      icon: 'FaCalendarAlt' as IconType,
      num: '10+',
      subtitle: 'Years',
      description: 'In business',
    },
  ],
};

// SubPages Section Mock Data
export const subPagesData = {
  items: [
    {
      mainTitle: 'About Us',
      subTitle: 'Learn about our company',
      lines: ['History', 'Mission', 'Values'],
    },
    {
      mainTitle: 'Services',
      subTitle: 'What we offer',
      lines: ['Web Development', 'Mobile Apps', 'Consulting'],
    },
    {
      mainTitle: 'Contact',
      subTitle: 'Get in touch',
      lines: ['Email', 'Phone', 'Office Location'],
    },
  ],
};

// About Section Mock Data
export const aboutData = {
  mainTitle: 'About Us',
  caption: 'Who we are',
  subTitle: 'Our Mission',
  subCaption: 'Delivering outstanding solutions',
  list: ['Quality service', 'Customer satisfaction', 'Innovative solutions'],
  endCaption: 'We strive to exceed expectations',
  viewImg: { _s: '/placeholder-image.jpg' },
};

// Animated Card Section Mock Data
export const animatedCardData = {
  title: 'Featured Service',
  description: 'Our most popular offering',
  image: '/placeholder-image.jpg',
  items: [
    {
      title: 'Feature 1',
      description: 'Description 1',
      icon: 'FaStar' as IconType,
      path: '/feature1',
    },
    {
      title: 'Feature 2',
      description: 'Description 2',
      icon: 'FaCheck' as IconType,
      path: '/feature2',
    },
  ],
};

// Features Section Mock Data
export const featuresData = {
  title: 'Our Features',
  featuresItems: [
    { title: 'Responsive Design', description: 'Works on all devices' },
    { title: 'Fast Performance', description: 'Optimized for speed' },
    { title: 'SEO Friendly', description: 'Better search rankings' },
  ],
  mainImg: { _s: '/placeholder-image.jpg' },
};

// Highlighted Section Mock Data
export const highlightedSectionData = {
  title: 'Special Offer',
  description: 'Limited time offer',
  content: 'Get 20% discount on all services this month',
  btnText: 'Learn More',
  path: '/contact',
  background: { _s: '/placeholder-background.jpg' },
};
