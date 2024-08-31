import { ServerImage, UploadedImage } from "@/ts/common/ImageI";
import { fileSrc } from "./file-src";

export function extractImgSrc(obj: any, key: string) {
  if (!obj) return "";
  const imageObj = (obj as any)[key] as ServerImage | UploadedImage;
  if ("_s" in imageObj) {
    return fileSrc(imageObj._s);
  } else if (imageObj.preview) {
    return imageObj.preview;
  } else return "";
}
