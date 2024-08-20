import { ServerImage, UploadedImage } from "./ImageI";

export default interface StaffMember {
  id: number;
  entityId: number;
  slug: string;
  data: StaffData;
  leadership: boolean;
}

export interface StaffData {
  name: string;
  position: string;
  title: string;
  degree: string;
  leadership: boolean;
  avatar: (UploadedImage | ServerImage) & { name: string };
}
