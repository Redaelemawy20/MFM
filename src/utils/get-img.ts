import { ServerImage } from "@/ts/common/ImageI";
import { fileSrc } from "./file-src";

export function extractImgSrc(obj: any, key: string) {
  if (!obj) return "";
  const imageObj = (obj as any)[key] as ServerImage;
  const img = imageObj ? imageObj._s : "";
  return fileSrc(img);
}
