import HandleChange from "@/ts/common/HandleChange";
import { FormEvent, ReactNode } from "react";
export default interface ImageUploadPerviewI {
  onChange: HandleChange;
  error?: boolean | undefined;
  name: string;
  value:
    | string
    | {
        image: string;
        preview: string;
      };
  alt?: string;
  onUpload: (filename: string, file: File) => void;
  onRemove: (filename: string) => void;
}
