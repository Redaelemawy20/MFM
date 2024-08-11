import HandleChange from "@/ts/common/HandleChange";
import { ServerImage, UploadedImage } from "@/ts/interfaces/ImageI";
export default interface ImageUploadPerviewI {
  onChange: HandleChange;
  error?: boolean | undefined;
  name: string;
  value: (UploadedImage | ServerImage) & { name: string };
  alt?: string;
  btnText?: string;
  onUpload: (filename: string, file: File) => void;
  onRemove: (filename: string) => void;
}
