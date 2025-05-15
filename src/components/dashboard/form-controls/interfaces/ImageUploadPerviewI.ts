import { HandleChange } from '@/ts/common/HandleChange';
import { ServerImage, UploadedImage } from '@/ts/common/ImageI';
import InputI, { NormalInput, TranslatableInput } from './InputI';

export type ImageValue = UploadedImage | ServerImage | { name: string };
interface Base<Tr extends boolean> extends InputI<ImageValue, Tr> {
  onChange?: HandleChange;
  error?: boolean | undefined;
  name: string;
  fileKey: string;
  alt?: string;
  btnText?: string;
}

export default Base;
