declare global {
  type SectionType = 'nav' | 'footer' | 'news' | 'section' | 'persons';
  interface SectionsToAdd {
    id: number;
    name: string;
    type: SectionType;
    componentId: string;
    imgUrl: string;
  }
  interface LoginSuccess {
    user: User;
    token: string;
  }
  interface User {
    id: number;
    email: string;
    name: string;
    role: string;
    data: JsonValue;
    slug: string;
    entityId: number | null;
    leadership: boolean;
  }
}

export {};
