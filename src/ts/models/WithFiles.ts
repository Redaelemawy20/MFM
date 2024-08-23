import UploadedFile from "../models/File";

export interface AttachedFiles {
  Files: UploadedFile[];
  deletedFiles: UploadedFile[];
  updatedIndices: number[];
}
export default interface WithFiles {
  AttachedFiles?: AttachedFiles;
}
