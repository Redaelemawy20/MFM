import { ServerImage } from './common/ImageI';
import Translatable from './common/Translatable';

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
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    status: WebsiteStatus;
    type: WebsiteType;
    numberOfPages: number;
    numberOfVisitors: number;
    numberOfVisitorsPerDay: number;
    numberOfVisitorsPerMonth: number;
    meta: {
      topTitle: Translatable<string>;
      description: Translatable<string>;
      logoImage: ServerImage;
    };
  }
  type WebsiteStatus = 'ACTIVE' | 'INACTIVE';
  type WebsiteType =
    | 'Ecommerce'
    | 'Blog'
    | 'Portfolio'
    | 'News'
    | 'Travel'
    | 'Education'
    | 'Community'
    | 'Application'
    | 'Other';
}

export {};
