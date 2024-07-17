type HandleFileUpload<T> = <K extends keyof T>(
  fileInput: { files: any } | HTMLFormElement,
  file: K,
  index?: number
) => void;
export type HandleDeleteFile<T> = <K extends keyof T>(
  id: number,

  file: K
) => void;
export default HandleFileUpload;
