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
  interface LoginError {
    message: string;
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
  interface Website {
    id: number;
    name: string;
    description: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    type: string;
    category: string;
    numberOfPages: number;
    numberOfVisitors: number;
    numberOfVisitorsPerDay: number;
    numberOfVisitorsPerMonth: number;
    icon: string;
  }
}

export {};
