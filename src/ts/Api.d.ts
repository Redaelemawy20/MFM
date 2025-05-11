declare global {
  type SectionType = 'nav' | 'footer' | 'news' | 'section' | 'persons';
  interface SectionsToAdd {
    id: number;
    name: string;
    type: SectionType;
    componentId: string;
    imgUrl: string;
  }
}

export {};
