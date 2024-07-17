import HandleChange from "../../../../ts/common/HandleChange";
import UploadedFile from "../../../../ts/models/File";
export default interface FilesAttachmentI {
  onAttach: (e: any) => void;
  onDelete: () => void;
  onValidate?: HandleChange;
  name: string;
  error?: string;
  label?: string;
  btnTxt?: string;
  Files: UploadedFile;
}
