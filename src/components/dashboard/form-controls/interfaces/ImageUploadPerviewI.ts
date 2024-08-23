import { HandleChange } from "@/ts/common/HandleChange";
import { ServerImage, UploadedImage } from "@/ts/interfaces/ImageI";
import { NormalInput, TranslatableInput } from "./InputI";
interface Base {
  onChange?: HandleChange;
  error?: boolean | undefined;
  name: string;
  // value: (UploadedImage | ServerImage) & { name: string };
  alt?: string;
  btnText?: string;
}
type ImageUploadPerviewI = Base & (NormalInput | TranslatableInput);
export default ImageUploadPerviewI;
